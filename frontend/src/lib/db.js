import Database from 'better-sqlite3';

const db = new Database('database.sqlite', {
    verbose: console.log,
});

db.prepare(`
CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT NOT NULL,
    author TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`).run();

export default db;