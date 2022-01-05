export const globalMiddleware1 = (req, res, next) => {
  console.log(`global middle ware 1`)
  next()
}