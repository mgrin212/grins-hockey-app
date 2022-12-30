<script lang="ts">
  import type { Root } from "../types/live-types";
  import { get_root_for_style, onMount } from "svelte/internal";
  import FuncGoals from "./FuncGoals.svelte";
  import type { DisplayGoal } from "src/util/GoalCardHandler";
  import type * as O from "fp-ts/lib/Option.js";

  export let goalProps: O.Option<DisplayGoal[]>;
</script>

<div
  class="scrollbar-hide w-full overflow-x-scroll grid grid-flow-row text-black dark:text-white border border-black dark:border-white rounded-md"
>
  {#if goalProps}
    <div class="flex flex-row w-full">
      {#if goalProps._tag === "Some"}
        {#each goalProps.value as props}
          <FuncGoals props={props} />
        {/each}
      {/if}
    </div>
  {/if}
</div>
