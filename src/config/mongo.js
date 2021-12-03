const mongoose = require('mongoose');

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

const uri = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

const config = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

const connect = async () => {
  return mongoose
    .connect(uri, config)
    .then(() => console.warn('[API] MongoDB connected!'))
    .catch((err) => console.error('[API] Erro on connect DB', err));
};

module.exports = {
  connect,
  uri,
  config,
};
