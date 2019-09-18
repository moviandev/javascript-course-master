import axios from 'axios';
import { key, proxy } from '../config/config';

export default class RecipeModel {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    try {
      const res = await axios(
        `${proxy}https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`
      );
      this.title = res.data.recipe.title;
      this.author = res.data.recipe.publisher;
      this.img = res.data.recipe.img_url;
      this.url = res.data.recipe.source_url;
      this.ingredient = res.data.recipe.ingredients;
      console.log(res);
    } catch (err) {
      console.log(err.message);
      throw new Error(err);
    }
  }

  calcTime() {
    const numIng = this.ingredients.length;
    const periods = Math.ceil(numIng / 3);
    this.time = periods * 15;
  }
  calcServings() {
    this.servings = 4;
  }
}
