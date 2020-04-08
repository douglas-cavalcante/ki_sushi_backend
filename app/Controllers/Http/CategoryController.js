"use strict";

const Category = use("App/Models/Category");

class CategoryController {
  async index() {
    const categories = await Category.all();
    return categories;
  }

  async store({ request }) {
    const data = request.only(["name"]);
    const category = await Category.create(data);
    return category;
  }

  async show({ params, response }) {
    const category = await Category.find(params.id);

    if (!category) {
      return response
        .status(400)
        .send({ err: { message: "Essa categoria não existe." } });
    }

    return category;
  }

  async update({ params, request, response }) {
    const data = request.only(["name"]);

    const category = await Category.find(params.id);

    if (!category) {
      return response
        .status(400)
        .send({ err: { message: "Essa categoria não existe." } });
    }

    category.merge(data);
    await category.save();
    return category;
  }

  async destroy({ params, response }) {
    const category = await Category.find(params.id);

    if (!category) {
      return response
        .status(400)
        .send({ err: { message: "Essa categoria não existe." } });
    }

    await category.delete();
  }
}

module.exports = CategoryController;
