const { PORT } = process.env


const ENV = {
  PORT: PORT ?? 8001,
}

enum Api {
  BASE = '/',
  STREAM = '/stream'
}

export { ENV, Api }