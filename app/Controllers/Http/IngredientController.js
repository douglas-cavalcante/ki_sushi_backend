"use strict";

const Ingredient = use("App/Models/Ingredient");

class IngredientController {
  async index() {
    const ingredients = await Ingredient.all();
    return ingredients;
  }

  async store({ request }) {
    const data = request.only(["name"]);
    const ingredient = await Ingredient.create(data);
    return ingredient;
  }

  async show({ params, response }) {
    const ingredient = await Ingredient.find(params.id);

    if (!ingredient) {
      return response
        .status(400)
        .send({ err: { message: "Esse ingrediente não existe." } });
    }

    return ingredient;
  }

  async update({ params, request, response }) {
    const data = request.only(["name"]);

    const ingredient = await Ingredient.find(params.id);

    if (!ingredient) {
      return response
        .status(400)
        .send({ err: { message: "Essa categoria não existe." } });
    }

    ingredient.merge(data);
    await ingredient.save();
    return ingredient;
  }

  async destroy({ params, response }) {
    const ingredient = await Ingredient.find(params.id);

    if (!ingredient) {
      return response
        .status(400)
        .send({ err: { message: "Essa categoria não existe." } });
    }

    await ingredient.delete();
  }
}

module.exports = IngredientController;
