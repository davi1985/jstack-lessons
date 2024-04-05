import { Client } from 'pg';

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

client.connect();

export const query = async (queryString: string, values?: any[]) => {
  const { rows } = await client.query(queryString, values);

  return rows;
};
