<script lang="ts">
	import type { Game } from '../types/hockey-types';
  import LiveGame from './LiveGame.svelte';

	export let game: Game;

	function getStartingTime(timeString: string): Date {
		return new Date(timeString);
	}
	function getTimeUntil(date: Date): string {
		let hours = date.getHours().toString();
		const minutes = date.getMinutes().toString().padStart(2, '0');
		let period = 'AM';
		if (parseInt(hours) >= 12) {
			period = 'PM';
			if (parseInt(hours) > 12) {
				hours = (parseInt(hours) - 12).toString();
			}
		}
		return `${hours}:${minutes} ${period}`;
	}
	const getGameTime = (time: string) => getTimeUntil(getStartingTime(time));
	console.log(game.status.detailedState);

	let clicked = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="p-2 border border-black flex flex-col dark:border-white text-black dark:text-white rounded w-full mb-1 mt-1 h-[130px]"
	on:click="{() => (clicked = !clicked)}"
>
	<div class="flex flex-row justify-between">
		<div class="w-[100%] flex flex-col justify-between items-middle align-middle text-justify">
			<div>
				{#if game.linescore.currentPeriodTimeRemaining === undefined}
					<p>{getGameTime(game.gameDate)}</p>
				{:else}
					<p
						>{game.linescore.currentPeriodOrdinal}
						{game.linescore.currentPeriodTimeRemaining}</p
					>
				{/if}
			</div>

			<div class="flex flex-row justify-between">
				<div class="w-full text-2xl">
					<!-- Display images of teams -->
					<div class="flex flex-row">
						<img
							class="w-10 h-10"
							src="https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/{game
								.teams.away.team.id}.svg"
							alt="{game.teams.away.team.name}"
						/>
						<p class="mt-2 mb-2 ">{game.teams.away.team.name}</p>
					</div>
					<div class="flex flex-row">
						<img
							class="w-10 h-10"
							src="https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/{game
								.teams.home.team.id}.svg"
							alt="{game.teams.home.team.name}"
						/>
						<p class="s">{game.teams.home.team.name}</p>
					</div>
				</div>
				<div class="text-4xl">
					<p class="mb-1 s">{game.teams.away.score}</p>
					<p class="s">{game.teams.home.score}</p>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="scroll-hide w-full">
	{#if clicked && game.status.detailedState !== 'Scheduled' && game.status.detailedState !== 'Pre-Game'}
	{/if}
</div>
