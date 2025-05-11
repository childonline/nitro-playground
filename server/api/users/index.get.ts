export default defineEventHandler(async () => {
  const db = useDatabase()

  const users = await db.sql`SELECT * FROM users`

  return {
    users,
  }
})
