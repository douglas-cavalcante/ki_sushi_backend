"use strict";

const Food = use("App/Models/Food");

class FoodController {
  async index() {
    const foods = await Food.query()
      .with("category")
      .with("ingredients")
      .fetch();

    const parse_foods = foods.toJSON().map((food) => {
      return {
        id: food.id,
        description: food.description,
        sub_description: food.sub_description,
        category: food.category.name,
        price: food.price,
        ingredients: food.ingredients.map((ingredient) => {
          return { name: ingredient.name };
        }),
      };
    });

    return parse_foods;
  }

  async store({ request }) {
    const data = request.only([
      "description",
      "sub_description",
      "price",
      "category_id",
    ]);

    const food = await Food.create(data);

    /// Cadastrar os ingredientes os ingredientes associados a ela
    const ingredients = request.input("ingredients");

    await food.ingredients().attach(ingredients);

    return food;
  }

  async show({ params, response }) {
    const food = await Food.find(params.id);

    if (!food) {
      return response
        .status(400)
        .send({ err: { message: "Essa comida não existe." } });
    }

    return food;
  }

  async update({ params, request, response }) {
    const data = request.only([
      "description",
      "sub_description",
      "price",
      "category_id",
    ]);

    const food = await Food.find(params.id);

    if (!food) {
      return response
        .status(400)
        .send({ err: { message: "Essa comida não existe." } });
    }

    food.merge(data);
    await food.save();

    const ingredients = request.input("ingredients");

    await food.ingredients().sync(ingredients);

    return food;
  }

  async destroy({ params, response }) {
    const food = await Food.find(params.id);

    if (!food) {
      return response
        .status(400)
        .send({ err: { message: "Essa comida não existe." } });
    }

    await food.delete();
  }
}

module.exports = FoodController;
