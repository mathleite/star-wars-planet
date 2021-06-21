import mongoose from "mongoose";
import PlanetSchema from '../schema/PlanetSchema.js';

class Planet {
  static initializeModel() {
    return mongoose.model('Planet', PlanetSchema.initializeSchema());
  }
}

export const PlanetModel = Planet.initializeModel();
