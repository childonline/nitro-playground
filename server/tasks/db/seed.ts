export default defineTask({
  meta: {
    name: 'db:seed',
    description: 'Run database seed',
  },
  async run() {
    const db = useDatabase()

    await db.sql`INSERT INTO users (id, name, token) VALUES ('1', 'John Doe', '1234567890')`
    await db.sql`INSERT INTO users (id, name, token) VALUES ('2', 'Jane Doe', '0987654321')`

    return { result: 'Success' }
  },
})
