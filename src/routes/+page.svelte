<script lang="ts">
  import { onMount } from "svelte";
  import * as GH from "../util/GoalCardHandler";
  import {
    scoreboardProps,
    type LineScoreLive,
    type ScoreboardProps,
  } from "../util/GameHandlers";
  import * as O from "fp-ts/lib/Option.js";
  import FuncScoreboard from "../components/FuncScoreboard.svelte";
  import { load } from "./+page";

  let pl: ScoreboardProps[] = [];
  export let data: {props: ScoreboardProps[]}
  $: propsList = data.props

  function setup() {
    fetch(
      "https://statsapi.web.nhl.com/api/v1/schedule?expand=schedule.linescore"
      // "https://statsapi.web.nhl.com/api/v1/schedule?date=2022-12-4&expand=schedule.linescore"
    )
      .then((res) => res.json())
      .then((json) => {
        return json.dates[0]?.games.map((game: any) =>
          game.link.toString()
        ) as string[];
      })
      .then((links) => {
        return links.map(async (link) => await getGame(link));
      })
      .then((list) => {
        Promise.all(list).then((values) => {
          propsList = values;
        });
      });
  }

  async function getGame(link: string) {
    const response = await fetch("https://statsapi.web.nhl.com" + link).then();
    const datawait = response.json();
    let data = await datawait;
    const lineScore = data.liveData.linescore as LineScoreLive;
    const goalProps = GH.getAllGoalProps(data.liveData.plays);
    const dateTime = data.gameData.datetime.dateTime;
    return scoreboardProps(O.fromNullable(lineScore), goalProps, dateTime);
  }
  onMount(() => {
    const interval = setInterval(() => {
      // setup();
      load().then((data) => {
        propsList = data.props;
      });
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<div
  class="flex flex-col justify-center items-start md:w-[390px] w-full mx-auto mt-2 bg-white dark:bg-black hideScroll"
>
  <!-- Start: Popular Blog Section -->
  <h2
    class="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white"
  >
    Todays Games
  </h2>
  {#each propsList as scoreProps}
    <FuncScoreboard {scoreProps} />
  {/each}

  <!-- End: Top Projects -->
</div>
