<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<h1>blog</h1>

<ul>
	{#each data.summaries as { slug, title }}
		<li>
			<a href="/blog/{slug}">{title}</a>
		</li>
	{/each}
</ul>
