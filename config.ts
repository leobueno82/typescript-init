const DB = {
  NAME: process.env.DB_NAME,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  PORT: process.env.DB_PORT
}

const DIR_FILES = process.env.DIR_FILES
export { DB, DIR_FILES }
