import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */

client.query(`
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL
  )`);

// createUser function
export async function createUser(
  username: string,
  password: string,
  name: string
) {
  const user = await client.query({
    text: `
      INSERT INTO users(username, password, name)
      VALUES($1, $2, $3)
      RETURNING *
    `,
    values: [username, password, name],
  });

  return user.rows;
}

// getUser function (using parameterized query)
export async function getUser(userId: number) {
  const user = await client.query({
    text: "SELECT * FROM users WHERE id = $1",
    values: [userId],
  });
  console.log(user.rows[0]);
  return user.rows[0];
}
