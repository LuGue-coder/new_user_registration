async function verifyUser() {
  try {
    await client.connect();
    console.log('DB připojení úspěšné');

    const email = process.env.REGISTERED_EMAIL.toLowerCase();
    console.log('Hledám email:', email);

    const result = await client.query(
      'SELECT * FROM "user"'
    );
    console.log('Vsichni uzivatele:', result.rows);

  } catch (err) {
    console.error('CHYBA:', err.message);
    process.exit(1);
  } finally {
    await client.end();
    console.log('DB spojení uzavřeno');
  }
}
