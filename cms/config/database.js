module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection:{
      host: "localhost",
      database: "cms-db",
      user: "postgres",
      password: "admin",
    }
  },
});
