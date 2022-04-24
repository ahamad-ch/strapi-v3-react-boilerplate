module.exports = ({ _env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: "localhost",
        database: "cms-db",
        username: 'postgres',
        password: 'admin',
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
