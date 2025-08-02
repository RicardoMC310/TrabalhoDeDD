<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	export const prerender = true;

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="w-full bg-blue-700 py-4 shadow mb-8">
    <div class="max-w-5xl mx-auto flex justify-between items-center px-4">
        <a href="/" class="text-white text-2xl font-bold">Site de Contato</a>
        <div class="flex gap-6">
            <a href="/" class="text-white text-lg hover:underline">Contato</a>
            <a href="/comentarios" class="text-white text-lg hover:underline">Comentários</a>
        </div>
    </div>
</nav>

{@render children?.()}
