<script lang="ts">
  import Scoreboard from "../components/Scoreboard.svelte";
  import type { Root } from "src/types/hockey-types";
  import { onMount } from "svelte";
  let dataRoot: Root;
  $: data = dataRoot;

  fetch(
    "https://statsapi.web.nhl.com/api/v1/schedule?expand=schedule.linescore"
  )
    .then((res) => res.json())
    .then((json) => {
      dataRoot = json;
    });

  onMount(() => {
    const interval = setInterval(() => {
      fetch(
        "https://statsapi.web.nhl.com/api/v1/schedule?expand=schedule.linescore"
        // "https://statsapi.web.nhl.com/api/v1/schedule?date=2022-12-4&expand=schedule.linescore"
      )
        .then((res) => res.json())
        .then((json) => {
          dataRoot = json;
        });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  let hideScroll = true;
</script>

<div
  class="flex flex-col justify-center items-start w-[430px] mx-auto mt-2 bg-white dark:bg-black hideScroll"
>
  <!-- Start: Popular Blog Section -->
  <h2
    class="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white"
  >
    Todays Games
  </h2>
  {#if data}
    {#each data.dates as date}
      {#each date.games as game}
        <Scoreboard {game} />
        <!-- <LiveGame gameCode="{game.gamePk.toString()}" /> -->
      {/each}
    {/each}
  {/if}

  <!-- End: Top Projects -->
</div>
