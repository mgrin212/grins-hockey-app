import { error } from '@sveltejs/kit';
import type { LineScoreLive, ScoreboardProps } from '../util/GameHandlers';
import { getAllGoalProps } from '../util/GoalCardHandler';
import { scoreboardProps } from '../util/GameHandlers';
import * as O from 'fp-ts/lib/Option.js';
 
/** @type {import('./$types').HandleFetch} */
export  const load = async () => {
    let propsList: ScoreboardProps[];
    const dataGetter = async () => await fetch(
        "https://statsapi.web.nhl.com/api/v1/schedule?expand=schedule.linescore"
        // "https://statsapi.web.nhl.com/api/v1/schedule?date=2022-12-4&expand=schedule.linescore"
      )
        .then((res: { json: () => any; }) => res.json())
        .then((json: { dates: { games: any[]; }[]; }) => {
          return json.dates[0]?.games.map((game: any) =>
            game.link.toString()
          ) as string[];
        })
        .then((links: any[]) => {
          return links.map(async (link: string) => await getGame(link));
        })
        .then(async (list: any) => {
          const values_1 = await Promise.all(list);
            propsList = values_1;
            return propsList;
        });
        const data = await dataGetter();
        if (data){
            return {props: data}
        }

 
  throw error(404, 'Not found');
}

async function getGame(link: string) {
    const response = await fetch("https://statsapi.web.nhl.com" + link).then();
    const datawait = response.json();
    let data = await datawait;
    const lineScore = data.liveData.linescore as LineScoreLive;
    const goalProps = getAllGoalProps(data.liveData.plays);
    const dateTime = data.gameData.datetime.dateTime;
    return scoreboardProps(O.fromNullable(lineScore), goalProps, dateTime);
  }
