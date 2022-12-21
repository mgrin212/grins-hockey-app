<script lang="ts">
	import type { Root } from '../types/live-types';
	import { get_root_for_style, onMount } from 'svelte/internal';

	export let gameCode: string;
	let dataRoot: Root;
	$: data = dataRoot;


	const fetchGame = async () => {
		const response = await fetch(
			`https://statsapi.web.nhl.com/api/v1/game/${gameCode}/feed/live`,
		);
		console.log("HERE")
		dataRoot = await response.json();
	};
	fetchGame();
	onMount(() => {
		const interval = setInterval(() => {
			fetch(
			`https://statsapi.web.nhl.com/api/v1/game/${gameCode}/feed/live`,
		).then((res) => res.json()).then((json) => {
			dataRoot = json;
		});
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div
	class="scrollbar-hide w-full overflow-x-scroll grid grid-flow-row text-black dark:text-white border border-black dark:border-white rounded-md"
>
	{#if data}
		<div class="flex flex-row w-full">
			{#each data.liveData.plays.allPlays as play}
				{#if play.result.event === 'Goal' && play.players !== undefined}
					<div
						class=" w-[250px] h-[100px] border border-black dark:border-white rounded-lg mx-2 overflow-y-hidden"
					>
						<div class="mt-1 ml-1">
							{#if play && play.team}
								{#if play.team.id === data.gameData.teams.home.id}
									<span class="font-bold">{play.team.triCode}</span>
								{:else}
									<span class="font-bold">{play.team.triCode}</span>
								{/if}
							{/if}
							{play.about.periodTime}
							{play.about.goals.away} - {play.about.goals.home}
							<!-- display goal scoring team abbreviation-->
						</div>
						<div class="h-[20px] ml-1"
							><span class="font-bold">{play.players[0].player.fullName + '.'}</span>
							{#if play.players[1] && !play.players[2]}
								Assists: <span class=" font-semibold"
									>{play.players[1].player.fullName}</span
								>{/if}
							{#if play.players[2] && play.players[2].player && play.players[1].player}
								Assists:
								<span class="font-semibold"
									>{play.players[1].player.fullName +
										', ' +
										play.players[2].player.fullName +
										'.'}</span
								>
							{/if}

							{play.result.secondaryType}</div
						>
					</div>
				{/if}
			{/each}
		</div>
	{/if}
</div>
