"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.resource("categories", "CategoryController");
Route.resource("foods", "FoodController");
Route.resource("ingredients", "IngredientController");

Route.post("files", "FileController.store");

Route.get("files/:id", "FileController.show");
