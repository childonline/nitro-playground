export default defineEventHandler(async (e) => {
  console.log(e)

  return {
    statusCode: 200,
    body: {
      message: 'Hello World!',
    },
  }
})
