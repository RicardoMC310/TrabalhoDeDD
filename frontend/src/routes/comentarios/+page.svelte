<script>
	import { onMount } from 'svelte';
	let comments = [];

	async function carregarComentarios() {
		const res = await fetch('/api/comments');
		comments = await res.json();
	}

	function ajustarFuso(dataUTC) {
		const data = new Date(dataUTC);
		data.setHours(data.getHours() - 3); // Corrige UTC−3
		return data.toLocaleString('pt-BR', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'
		});
	}

	onMount(carregarComentarios);
</script>

<div class="flex items-center justify-center px-4 py-16 min-h-[60vh] bg-white">
	<div class="w-full max-w-2xl bg-white shadow-xl rounded-xl p-6">
		<h3 class="text-2xl font-bold mb-6 text-gray-800 text-center">Comentários</h3>

		{#if comments.length > 0}
			<div class="overflow-x-auto">
				<table class="min-w-full table-auto border-collapse">
					<thead>
						<tr class="bg-blue-100">
							<th class="px-4 py-2 text-left font-semibold text-gray-700">Autor</th>
							<th class="px-4 py-2 text-left font-semibold text-gray-700">Comentário</th>
							<th class="px-4 py-2 text-left font-semibold text-gray-700">Data</th>
						</tr>
					</thead>
					<tbody>
						{#each comments as comment}
							<tr class="border-b align-top">
								<td class="px-4 py-2 text-sm text-gray-800">{comment.author}</td>
								<td
									class="px-4 py-2 max-w-[300px] break-words whitespace-pre-wrap text-sm text-gray-800"
								>
									{comment.content}
								</td>
								<td class="px-4 py-2 text-sm text-gray-600">
									{#if comment.created_at}
										{ajustarFuso(comment.created_at)}
									{/if}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{:else}
			<p class="text-gray-500 text-center py-8 text-xl">Nenhum comentário encontrado.</p>
		{/if}
	</div>
</div>
