<script lang="ts">
  import StandingsRow from "../../components/StandingsRow.svelte";
  import {
  getLeagueStandings,
    getStandings,
    type LeagueStandingsProps,
    type StandingsProps,
  } from "../../util/StandingsHandler";

  let standings: StandingsProps;
  getStandings().then((data) => {
    standings = data;
  });

  let leagueStandings: LeagueStandingsProps;
  getLeagueStandings().then((data) => {
    leagueStandings = data;
  });
</script>

<div class="text-white">
  {#if standings}
    {#each standings.divisions as division}
      <div class=" w-full flex flex-row justify-between bg-gray-700">
        <div class="text-2xl  w-[200px] ml-1">
          {division.division}
        </div>
        <div class="flex flex-row justify-between w-[190px] text-center items-center align-middle">
          <div class="w-[40px]">GP</div>
          <div class="w-[40px]">W</div>
          <div class="w-[40px]">L</div>
          <div class="w-[40px]">OT</div>
          <div class="w-[40px]">PTS</div>
        </div>
      </div>
      {#each division.standings as team}
        <StandingsRow props={team} />
      {/each}
    {/each}
  {/if}
  {#if leagueStandings}
    <div class=" w-full flex flex-row justify-between bg-gray-700">
      <div class="text-2xl  w-[200px] ml-1">
        {leagueStandings.league}
      </div>
      <div class="flex flex-row justify-between w-[190px] text-center items-center align-middle">
        <div class="w-[40px]">GP</div>
        <div class="w-[40px]">W</div>
        <div class="w-[40px]">L</div>
        <div class="w-[40px]">OT</div>
        <div class="w-[40px]">PTS</div>
      </div>
    </div>
    {#each leagueStandings.standings as team}
      <StandingsRow props={team} />
    {/each}
  {/if}
</div>
