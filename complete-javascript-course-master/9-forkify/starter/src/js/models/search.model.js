import axios from 'axios';
import { key, proxy } from '../config/config';

export default class SearchModel {
  constructor(query) {
    this.query = query;
  }
  async getResults() {
    try {
      const res = await axios(
        `${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`
      );
      this.result = res.data.recipes;
    } catch (err) {
      throw new Error('Try again later');
    }
  }
}
