<script lang="ts">
  import type { DisplayGoal } from "src/util/GoalCardHandler";
  import type * as O from "fp-ts/lib/Option.js";
  export let props: DisplayGoal;
  console.log(props);

  function display(option: O.Option<any>): string {
    return option._tag === "None" ? null : option.value;
  }
</script>

<div
  class=" w-[250px] h-[100px] border border-black dark:border-white rounded-lg mx-2 overflow-y-hidden"
>
  <div class="mt-1 ml-1">
    {display(props.team)}
    {display(props.time)}
    {display(props.awayScore)} - {display(props.homeScore)}
    <!-- display goal scoring team abbreviation-->
  </div>
  <div class="h-[20px] ml-1">
    <span class="font-bold">{display(props.goalScorer) + "."}</span>
    {#if props.assist1 && !props.assist2}
      Assists: <span class=" font-semibold">{display(props.assist1)}</span>{/if}
    {#if props.assist1 && props.assist2}
      Assists:
      <span class="font-semibold"
        >{display(props.assist1) + ", " + display(props.assist2) + "."}</span
      >
    {/if}

    {display(props.shotType)}
  </div>
</div>
