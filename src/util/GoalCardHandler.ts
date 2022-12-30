import * as O from "fp-ts/Option";
import { pipe } from "fp-ts/lib/function";
export interface RootPlays {
  plays: Plays;
}
export interface Plays {
  allPlays: Play[];
  scoringPlays: number[];
  penaltyPlays: number[];
  playsByPeriod: PlayByPeriod[];
  currentPlay: Play;
}

export interface PlayByPeriod {
  startIndex: number;
  plays: number[];
  endIndex: number;
}

export interface Play {
  players: Player[];
  result: Result;
  about: About;
  coordinates: Coordinates;
  team: Team;
}

export interface Team {
  id: number;
  name: string;
  link: string;
  triCode: string;
}

export interface Coordinates {
  x: number;
  y: number;
}

export interface About {
  eventIdx: number;
  eventId: number;
  period: number;
  periodType: string;
  ordinalNum: string;
  periodTime: string;
  periodTimeRemaining: string;
  dateTime: string;
  goals: Goals;
}

export interface Goals {
  away: number;
  home: number;
}

export interface Result {
  event: string;
  eventCode: string;
  eventTypeId: string;
  description: string;
  secondaryType?: string;
}

export interface Player {
  player: PlayerInfo;
  playerType: PlayerType;
  seasonTotal?: number;
}

export interface PlayerInfo {
  id: number;
  fullName: string;
  link: string;
}

export interface DisplayGoal {
  team: O.Option<string>;
  goalScorer: O.Option<string>;
  assist1: O.Option<string>;
  assist2: O.Option<string>;
  period: O.Option<string>;
  time: O.Option<string>;
  emptyNet: O.Option<boolean>;
  powerPlay: O.Option<boolean>;
  homeScore: O.Option<number>;
  awayScore: O.Option<number>;
  shotType: O.Option<string>;
}

export enum PlayerType {
  GoalScorer = "Scorer",
  Assist = "Assist",
  Goalie = "Goalie",
  PlayerID = "PlayerID",
  Winner = "Winner",
  Loser = "Loser",
  Shooter = "Shooter",
  PenaltyOn = "PenaltyOn",
  DrewBy = "DrewBy",
  Blocker = "Blocker",
  Hitter = "Hitter",
  Hittee = "Hittee",
}

function shotType(play: Play): O.Option<string> {
  return O.fromNullable(play.result.secondaryType);
}

function scoringPlaysNumList(plays: Plays): O.Option<number[]> {
  return O.fromNullable(plays.scoringPlays);
}
function scoringPlays(plays: Plays): O.Option<Play[]> {
  return pipe(
    plays,
    scoringPlaysNumList,
    O.map((scoringPlays) =>
      scoringPlays.map((playNum) => plays.allPlays[playNum])
    )
  );
}

function goalTeam(play: Play): O.Option<string> {
  return O.fromNullable(play.team.triCode);
}

function goalScorer(play: Play): O.Option<string> {
  return O.fromNullable(
    play.players.find((player) => player.playerType === PlayerType.GoalScorer)
      ?.player.fullName
  );
}

function assists(play: Play): O.Option<string>[] {
  return play.players
    .filter((player) => player.playerType === PlayerType.Assist)
    .map((player) => O.fromNullable(player.player.fullName));
}

function period(play: Play): O.Option<string> {
  return O.fromNullable(play.about.ordinalNum);
}

function time(play: Play): O.Option<string> {
  return O.fromNullable(play.about.periodTime);
}

function emptyNet(play: Play): O.Option<boolean> {
  return O.fromNullable(play.result.secondaryType === "Empty Net");
}

function powerPlay(play: Play): O.Option<boolean> {
  return O.fromNullable(play.result.secondaryType === "Power Play");
}

function homeScore(play: Play): O.Option<number> {
  return O.fromNullable(play.about.goals.home);
}

function awayScore(play: Play): O.Option<number> {
  return O.fromNullable(play.about.goals.away);
}

export function getGoalProps(play: Play): DisplayGoal {
  return {
    team: goalTeam(play),
    goalScorer: goalScorer(play),
    assist1: assists(play)[0],
    assist2: assists(play)[1],
    period: period(play),
    time: time(play),
    emptyNet: emptyNet(play),
    powerPlay: powerPlay(play),
    homeScore: homeScore(play),
    awayScore: awayScore(play),
    shotType: shotType(play),
  };
}

export function getAllGoalProps(plays: Plays): O.Option<DisplayGoal[]> {
  // return scoringPlays(plays).map((play) => O.map(getGoalProps)(play));
  return pipe(
    plays,
    scoringPlays,
    O.map((plays) => plays.map((play) => getGoalProps(play)))
  )
}

export const testGoalProps = async () => {
  const response = await fetch(
    "https://statsapi.web.nhl.com/api/v1/game/2019020001/feed/live"
  );
  const data = await response.json();
  const plays = data.liveData.plays as Plays;
  const goals = getAllGoalProps(plays);
  console.log(goals);
};
