export default defineEventHandler(async () => {
  const { result } = await runTask('db:migrate')

  return {
    result,
  }
})
