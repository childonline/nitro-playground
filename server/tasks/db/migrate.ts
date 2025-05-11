export default defineTask({
  meta: {
    name: 'db:migrate',
    description: 'Run database migrations',
  },
  async run() {
    const db = useDatabase()

    await db.sql`DROP TABLE IF EXISTS users`
    await db.sql`CREATE TABLE IF NOT EXISTS users ("id" TEXT PRIMARY KEY, "name" TEXT, "token" TEXT)`

    return { result: 'Success' }
  },
})
