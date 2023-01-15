module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf1c64mn6mpkr6ap6gag-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_oz8v'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'PaIgcZhLvlKnSKrCil9icYZRQZ8kFt3F'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
