module.exports = ({ env }) => ({
  defaultConnection: "default",
  settings: {
    cors: {
      enabled: true,
      origin: env('CORS_ORIGIN', '*'), // Puedes personalizar el origen permitido aquí
      headers: '*', // Puedes personalizar los encabezados permitidos aquí
      methods: '*', // Puedes personalizar los métodos permitidos aquí
    },
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        host: env("DATABASE_HOST"),
        srv: env.bool("DATABASE_SRV"),
        port: env.int("DATABASE_PORT"),
        database: env("DATABASE_NAME"),
        username: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", "admin"),
        ssl: env.bool("DATABASE_SSL", true),
      },
    },
  },
});
