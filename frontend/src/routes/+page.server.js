export async function load({ fetch }) {
    const res = await fetch("/api/comments");
    const comments = await res.json();
    return { comments };
}