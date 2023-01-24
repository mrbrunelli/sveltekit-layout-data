<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
