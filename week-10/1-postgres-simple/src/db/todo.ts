import { client } from "..";

client.query(`
  CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    done BOOLEAN DEFAULT false
  )
`);

export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
  const todo = await client.query({
    text: `
      INSERT INTO todos(user_id, title, description)
      VALUES ($1, $2, $3)
      RETURNING *
    `,
    values: [userId, title, description],
  });

  return todo.rows[0];
}

export async function updateTodo(todoId: number) {
  const todo = await client.query({
    text: `
      UPDATE todos
      SET done = true
      WHERE id = $1
      RETURNING *
    `,
    values: [todoId],
  });

  return todo.rows[0];
}

export async function getTodos(userId: number) {
  const todos = await client.query({
    text: `
      SELECT * FROM todos
      WHERE user_id = $1
    `,
    values: [userId],
  });

  return todos.rows;
}
