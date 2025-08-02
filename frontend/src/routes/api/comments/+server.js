import db from '$lib/db';
import { json } from '@sveltejs/kit';

export async function GET() {
    const comments = db.prepare('SELECT * FROM comments ORDER BY created_at DESC').all();
    return json(comments);
}

export async function POST({ request }) {
    const { content, author } = await request.json();
    if (!content || !author) {
        return json({ error: 'Content and author are required' }, { status: 400 });
    }

    const stmt = db.prepare('INSERT INTO comments (content, author) VALUES (?, ?)');
    const info = stmt.run(content, author);
    
    return json({ id: info.lastInsertRowid, content, author }, { status: 201 });
}