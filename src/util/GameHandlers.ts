import * as O from "fp-ts/lib/Option.js";
import { pipe } from "fp-ts/lib/function";
import type { DisplayGoal } from "./GoalCardHandler";

export interface LineScoreLive {
  currentPeriod: number;
  currentPeriodOrdinal: string;
  currentPeriodTimeRemaining: string;
  periods: Period[];
  shootoutInfo: ShootoutInfo;
  teams: Teams;
  powerPlayStrength: string;
  hasShootout: boolean;
  intermissionInfo: IntermissionInfo;
  powerPlayInfo: PowerPlayInfo;
}

export interface IntermissionInfo {
  intermissionTimeRemaining: number;
  intermissionTimeElapsed: number;
  inIntermission: boolean;
}

export interface PowerPlayInfo {
  situationTimeRemaining: number;
  situationTimeElapsed: number;
  inSituation: boolean;
}

export interface Period {
  periodType: string;
  startTime: string;
  endTime: string;
  num: number;
  ordinalNum: string;
  home: PeriodTeamInfo;
  away: PeriodTeamInfo;
  shootoutInto: ShootoutInfo;
}

export interface PeriodTeamInfo {
  goals: number;
  shotsOnGoal: number;
  rinkSide: string;
}

export interface ShootoutIntoTeam {
  scores: number;
  attempts: number;
}

export interface ShootoutInfo {
  home: ShootoutIntoTeam;
  away: ShootoutIntoTeam;
}

export interface Team {
  id: number;
  name: string;
  link: string;
  abbreviation: string;
  triCode: string;
}

export interface LinescoreTeamInfo {
  team: Team;
  goals: number;
  shotsOnGoal: number;
  goaliePulled: boolean;
  numSkaters: number;
  powerPlay: boolean;
}

export interface Teams {
  home: LinescoreTeamInfo;
  away: LinescoreTeamInfo;
}

export const testFetchWithTypes = async () => {
  const response = await fetch(
    "https://statsapi.web.nhl.com/api/v1/game/2019020001/feed/live"
  );
  const data = await response.json();
  const lineScore = data.liveData.linescore as LineScoreLive;
  const homeTeamName = teamName(TeamType.HOME);
  const homeName = homeTeamName(O.some(lineScore));
  //print homeName
  console.log(homeName);
};

export interface ScoreboardProps {
  home: O.Option<string>;
  away: O.Option<string>;
  homeScore: O.Option<number>;
  awayScore: O.Option<number>;
  currentPeriodOrdinal: O.Option<string>;
  currentPeriodTimeRemaining: O.Option<string>;
  homeShots: O.Option<number>;
  awayShots: O.Option<number>;
  homePowerPlay: O.Option<boolean>;
  awayPowerPlay: O.Option<boolean>;
  //powerPlayTimeRemaining: O.Option<number>;
  homeGoaliePulled: O.Option<boolean>;
  awayGoaliePulled: O.Option<boolean>;
  homeNumSkaters: O.Option<number>;
  awayNumSkaters: O.Option<number>;
  homeID: O.Option<number>;
  awayID: O.Option<number>;
  goalProps: O.Option<DisplayGoal[]>;
  dateTime: string;
}

function getTeams(game: LineScoreLive): Teams {
  return game.teams;
}

function getTeamName(team: LinescoreTeamInfo): string {
  return team.team.name;
}

enum TeamType {
  HOME = "home",
  AWAY = "away",
}

function teamName(
  team: TeamType
): (game: O.Option<LineScoreLive>) => O.Option<string> {
  return (game) =>
    pipe(
      game,
      O.map(getTeams),
      O.map((teams) => teams[team]),
      O.map(getTeamName)
    );
}

function shotsOnGoal(
  team: TeamType
): (game: O.Option<LineScoreLive>) => O.Option<number> {
  return (game) =>
    pipe(
      game,
      O.map(getTeams),
      O.map((teams) => teams[team]),
      O.map((team) => team.shotsOnGoal)
    );
}

function score(
  team: TeamType
): (game: O.Option<LineScoreLive>) => O.Option<number> {
  return (game) =>
    pipe(
      game,
      O.map(getTeams),
      O.map((teams) => teams[team]),
      O.map((team) => team.goals)
    );
}

function currentPeriodOrdinal(game: O.Option<LineScoreLive>): O.Option<string> {
  return pipe(
    game,
    O.map((game) => game.currentPeriodOrdinal)
  );
}

function powerPlayTimeRemaining(
  game: O.Option<LineScoreLive>
): O.Option<number> {
  return pipe(game, powerPlayInfo, situationTimeRemaining);
}

function powerPlayInfo(game: O.Option<LineScoreLive>): O.Option<PowerPlayInfo> {
  return pipe(
    game,
    O.map((game) => game.powerPlayInfo)
  );
}

function situationTimeRemaining(pp: O.Option<PowerPlayInfo>): O.Option<number> {
  return pipe(
    pp,
    O.map((pp) => pp.situationTimeRemaining)
  );
}

function currentPeriodTimeRemaining(
  game: O.Option<LineScoreLive>
): O.Option<string> {
  return pipe(
    game,
    O.map((game) => game.currentPeriodTimeRemaining)
  );
}

function powerPlay(
  team: TeamType
): (game: O.Option<LineScoreLive>) => O.Option<boolean> {
  return (game) =>
    pipe(
      game,
      O.map(getTeams),
      O.map((teams) => teams[team]),
      O.map((team) => team.powerPlay)
    );
}

function goaliePulled(
  team: TeamType
): (game: O.Option<LineScoreLive>) => O.Option<boolean> {
  return (game) =>
    pipe(
      game,
      O.map(getTeams),
      O.map((teams) => teams[team]),
      O.map((team) => team.goaliePulled)
    );
}

function numSkaters(
  team: TeamType
): (game: O.Option<LineScoreLive>) => O.Option<number> {
  return (game) =>
    pipe(
      game,
      O.map(getTeams),
      O.map((teams) => teams[team]),
      O.map((team) => team.numSkaters)
    );
}

function teamID(
  team: TeamType
): (game: O.Option<LineScoreLive>) => O.Option<number> {
  return (game) =>
    pipe(
      game,
      O.map(getTeams),
      O.map((teams) => teams[team]),
      O.map((team) => team.team.id)
    );
}

const homeID = teamID(TeamType.HOME);
const awayID = teamID(TeamType.AWAY);

const homeTeamName = teamName(TeamType.HOME);
const awayTeamName = teamName(TeamType.AWAY);
const homeShots = shotsOnGoal(TeamType.HOME);
const awayShots = shotsOnGoal(TeamType.AWAY);
const homeScore = score(TeamType.HOME);
const awayScore = score(TeamType.AWAY);
const homePowerPlay = powerPlay(TeamType.HOME);
const awayPowerPlay = powerPlay(TeamType.AWAY);
const homeGoaliePulled = goaliePulled(TeamType.HOME);
const awayGoaliePulled = goaliePulled(TeamType.AWAY);
const homeNumSkaters = numSkaters(TeamType.HOME);
const awayNumSkaters = numSkaters(TeamType.AWAY);

export const scoreboardProps = (
  game: O.Option<LineScoreLive>,
  goals: O.Option<DisplayGoal[]>,
  dateTime: string
): ScoreboardProps => ({
  home: homeTeamName(game),
  away: awayTeamName(game),
  homeScore: homeScore(game),
  awayScore: awayScore(game),
  currentPeriodOrdinal: currentPeriodOrdinal(game),
  currentPeriodTimeRemaining: currentPeriodTimeRemaining(game),
  homeShots: homeShots(game),
  awayShots: awayShots(game),
  homePowerPlay: homePowerPlay(game),
  awayPowerPlay: awayPowerPlay(game),
  //powerPlayTimeRemaining: powerPlayTimeRemaining(game),
  homeGoaliePulled: homeGoaliePulled(game),
  awayGoaliePulled: awayGoaliePulled(game),
  homeNumSkaters: homeNumSkaters(game),
  awayNumSkaters: awayNumSkaters(game),
  homeID: homeID(game),
  awayID: awayID(game),
  goalProps: goals,
  dateTime: dateTime,
});
