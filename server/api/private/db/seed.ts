export default defineEventHandler(async () => {
  const { result } = await runTask('db:seed')

  return {
    result,
  }
})
