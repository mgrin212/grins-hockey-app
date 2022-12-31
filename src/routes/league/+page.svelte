<script lang="ts">
  import {
    getLeagueStandings,
    type LeagueStandingsProps,
  } from "../../util/StandingsHandler";
  import StandingsRow from "../../components/StandingsRow.svelte";

  let standings: LeagueStandingsProps;
  getLeagueStandings().then((data) => {
    standings = data;
  });
</script>

<div class="text-white justify-center flex flex-col items-center w-full">
  {#if standings}
    <div class="flex flex-col justify-between  md:w-[390px] w-full">
      <div class="flex flex-row bg-gray-700">
        <div class="text-2xl  w-[200px] ml-1">League</div>
        <div
          class="flex flex-row justify-between w-[190px] text-center items-center align-middle"
        >
          <div class="w-[40px]">GP</div>
          <div class="w-[40px]">W</div>
          <div class="w-[40px]">L</div>
          <div class="w-[40px]">OT</div>
          <div class="w-[40px]">PTS</div>
        </div>
      </div>
      {#each standings.standings as team}
        <StandingsRow props={team} />
      {/each}
    </div>
  {/if}
</div>
