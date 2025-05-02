// /var/www/strapi-app/config/env/production/database.js
module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi_prod'),
        user: env('DATABASE_USERNAME', 'strapi_user'),
        password: env('DATABASE_PASSWORD', '0892073966'),
        ssl: env.bool('DATABASE_SSL', false), // Установите true, если используете SSL для БД
      },
      pool: { // Опционально: настройки пула соединений
        min: env.int('DATABASE_POOL_MIN', 2),
        max: env.int('DATABASE_POOL_MAX', 10)
      },
      debug: false,
    },
  });
