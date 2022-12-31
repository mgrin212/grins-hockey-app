<script lang="ts">
  import type * as GH from "src/util/GameHandlers";
  import type * as GC from "src/util/GoalCardHandler";
  import type * as O from "fp-ts/lib/Option.js";
  import LiveGame from "./LiveGame.svelte";

  export let scoreProps: GH.ScoreboardProps;
  $: goalPropList = scoreProps.goalProps;

  function getStartingTime(timeString: string): Date {
    return new Date(timeString);
  }
  function getTimeUntil(date: Date): string {
    let hours = date.getHours().toString();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    let period = "AM";
    if (parseInt(hours) >= 12) {
      period = "PM";
      if (parseInt(hours) > 12) {
        hours = (parseInt(hours) - 12).toString();
      }
    }
    return `${hours}:${minutes} ${period}`;
  }
  const getGameTime = (time: string) => getTimeUntil(getStartingTime(time));
  let untilTime = getGameTime(scoreProps.dateTime);

  let clicked = false;

  function display(option: O.Option<any>): string {
    return option._tag === "None" ? "" : option.value;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="p-2 border  flex flex-col border-white text-white rounded w-full mb-1 mt-1 h-[130px]"
  on:click={() => (clicked = !clicked)}
>
  <div class="flex flex-row justify-between">
    <div
      class="w-[100%] flex flex-col justify-between items-middle align-middle text-justify"
    >
      <div>
        <p>
          {#if !display(scoreProps.currentPeriodOrdinal)}
            {untilTime}
          {:else}
            {display(scoreProps.currentPeriodOrdinal)}
            {display(scoreProps.currentPeriodTimeRemaining)}
          {/if}
        </p>
      </div>

      <div class="flex flex-row justify-between">
        <div class="w-full text-2xl">
          <!-- Display images of teams -->
          <div class="flex flex-row">
            <img
              class="w-10 h-10"
              src="https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/{display(
                scoreProps.awayID
              )}.svg"
              alt={display(scoreProps.away)}
            />
            <p class="mt-2 mb-2 ">{display(scoreProps.away)}</p>
            <p class="mt-4 text-gray-500 ml-2 mb-2 text-sm">{display(scoreProps.awayShots)} SOG</p>
          </div>
          <div class="flex flex-row">
            <img
              class="w-10 h-10"
              src="https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/{display(
                scoreProps.homeID
              )}.svg"
              alt={display(scoreProps.home)}
            />
            <p class="s">{display(scoreProps.home)}</p>
            <p class="mt-2 text-gray-500 ml-2 mb-2 text-sm">{display(scoreProps.homeShots)} SOG</p>
          </div>
        </div>
        <div class="text-4xl">
          <p class="mb-1 s">{display(scoreProps.awayScore)}</p>
          <p class="s">{display(scoreProps.homeScore)}</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="scroll-hide w-full">
  {#if clicked}
    <LiveGame goalProps={goalPropList} />
  {/if}
</div>
