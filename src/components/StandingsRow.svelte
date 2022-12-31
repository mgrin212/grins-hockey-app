<script lang="ts">
  import type { StandingsRowProps } from "../util/StandingsHandler";


    export let props: StandingsRowProps;
</script>

<div class="w-full justify-between flex flex-row border-b border-t border-gray-600 h-[40px] items-center">
    <div class="  w-[200px] ml-1">{props.divisionRank} {props.team}</div>
    <div class="flex flex-row justify-between w-[190px] text-center">
        <div class=" w-[40px] border-l border-r border-gray-600">{props.gamesPlayed}</div>
        <div class=" w-[40px] border-r border-gray-600">{props.wins}</div>
        <div class=" w-[40px] border-r border-gray-600">{props.losses}</div>
        <div class=" w-[40px] border-r border-gray-600">{props.ot}</div>
        <div class=" w-[40px] border-r border-gray-600">{props.points}</div>
    </div>
    
</div>