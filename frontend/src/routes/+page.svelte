<script>
    let content = '';
    let author = '';

    async function enviarComentario() {
        const res = await fetch('/api/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content, author })
        });
        if (res.ok) {
            content = '';
            author = '';
            alert('Comentário enviado! Veja em Comentários.');
        } else {
            alert('Falha ao enviar comentário');
        }
    }
</script>

<!-- Formulário centralizado, cor igual ao navbar, margem de 10px abaixo do navbar -->
<div class="flex items-center justify-center px-4" style="margin-top:10px;">
    <form class="bg-white shadow-xl rounded-xl p-8 w-full max-w-md flex flex-col gap-6"
        on:submit|preventDefault={enviarComentario}>
        <h2 class="text-3xl font-bold text-center mb-4 text-gray-800">Deixe seu comentário</h2>
        <div class="flex flex-col gap-2">
            <label class="text-lg font-medium text-gray-700" for="author">Seu nome</label>
            <input id="author" type="text" bind:value={author} placeholder="Seu nome"
                class="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div class="flex flex-col gap-2">
            <label class="text-lg font-medium text-gray-700" for="content">Comentário</label>
            <textarea id="content" bind:value={content} placeholder="Digite seu comentário..." rows="4"
                class="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"></textarea>
        </div>
        <button type="submit"
            class="bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition text-lg">Enviar</button>
    </form>
</div>

<style>
    /* Adicione seu CSS personalizado aqui, se necessário */
</style>