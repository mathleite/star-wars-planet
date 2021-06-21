import { PlanetModel } from '../models/Planet.js';
import PlanetCreatorFacade from '../facades/PlanetCreatorFacade.js';

class PlanetController {
  static index() {
    return PlanetModel.find();
  }

  static delete(requestParam) {
    const { id } = requestParam;
    const validateMessage = this.validateFields([
      this.createCustomRequestValuesStructure(id, 'ID')
    ]);

    if (validateMessage && validateMessage.length) {
      return validateMessage;
    }

    return PlanetModel.deleteOne({ _id: id }).exec();
  }

  static create(requestBody) {
    const { name, climate, ground } = requestBody;
    const validateMessage = this.validateFields([
      this.createCustomRequestValuesStructure(name, 'Name'),
      this.createCustomRequestValuesStructure(climate, 'Climate'),
      this.createCustomRequestValuesStructure(ground, 'Ground')
    ]);

    if (validateMessage && validateMessage.length) {
      return validateMessage;
    }

    const facade = new PlanetCreatorFacade({ name, ground, climate });
    return facade.create();
  }

  static find(requestParam)   {
    const { id, name } = requestParam;
    const validateMessage = this.validateFields([
      name ? this.createCustomRequestValuesStructure(name, '?name=')
      : this.createCustomRequestValuesStructure(id, '?id=')
    ]);

    if (validateMessage && validateMessage.length) {
      return validateMessage;
    }

    return id
      ? PlanetModel.findById(id)
      : PlanetModel.find({ name })
  }

  static validateFields(fields) {
    return fields.filter((field) => {
      if (!field.value) {
        field.message = `${field.name} has a invalid field value`;
        return true;
      }
      return false;
    });
  }

  static createCustomRequestValuesStructure(value, fieldName) {
    return {
      value: value,
      name: fieldName,
      message: null
    }
  }
}

export default PlanetController;
