import dotenv from 'dotenv';
import '../src/router/index.js';
import MongoClient from '../src/database/MongoClient.js';

dotenv.config();

new MongoClient();

