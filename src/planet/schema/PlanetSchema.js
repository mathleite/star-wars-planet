import mongoose from "mongoose";

class PlanetSchema {
  static initializeSchema() {
    return new mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      climate: {
        type: String,
        required: true
      },
      ground: {
        type: String,
        required: true
      },
      films: {
        type: Array,
        required: false
      },
    }, {
      timestamps: true,
      toJSON: { virtuals: true, getters: true },
      toObject: { virtuals: true, getters: true },
    });
  }
}

export default PlanetSchema;
