const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DB_CONNECTION_STRING
});

async function verifyUser() {
  try {
    await client.connect();
    console.log('DB připojení úspěšné');

    const email = process.env.REGISTERED_EMAIL.toLowerCase();
    const result = await client.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    if (result.rows.length === 0) {
      console.error('Uživatel ' + email + ' nebyl nalezen v DB');
      process.exit(1);
    } else {
      console.log('OK: Uživatel nalezen:', result.rows[0]);
    }

  } catch (err) {
    console.error('CHYBA:', err.message);
    process.exit(1);
  } finally {
    await client.end();
    console.log('DB spojení uzavřeno');
  }
}

verifyUser();
