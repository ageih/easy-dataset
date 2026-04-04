const postgres = require('postgres')
require('dotenv').config()

const sql = postgres(process.env.DATABASE_URL, { ssl: { rejectUnauthorized: false } })

async function test() {
  try {
    const result = await sql`SELECT 1`
    console.log('DB connection works!', result)
  } catch (err) {
    console.error('Connection failed:', err)
  } finally {
    await sql.end()
  }
}

test()