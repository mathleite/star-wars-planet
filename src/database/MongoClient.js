import mongoose from "mongoose";

class MongoClient {
  constructor() {
    this.initializeClient();
    }

  initializeClient() {
    const { MONGO_HOST, MONGO_DATABASE, MONGO_DATABASE_USER, MONGO_DATABASE_PASSWD } = process.env;
    const url = `mongodb://${MONGO_DATABASE_USER}:${MONGO_DATABASE_PASSWD}@${MONGO_HOST}:27017/${MONGO_DATABASE}?authSource=${MONGO_DATABASE}`;

    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
    mongoose.connection.on('error', () => console.error('connection error:'))
    mongoose.connection.once('open', () => console.log('database connected'))
  }
}

export default MongoClient;
