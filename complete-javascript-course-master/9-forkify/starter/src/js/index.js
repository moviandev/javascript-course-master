import SearchModel from './models/Search.model';
import RecipeModel from './models/Recipe.model';
import ListModel from './models/List.model';

import * as searchView from './views/search.view';
import * as recipeView from './views/recipe.view';

import { elements, renderLoader, clearLoad } from './views/base';
// Global State of the app
const state = {};

const ctrlSearch = async () => {
  const query = searchView.getInput();

  if (query) {
    state.search = new SearchModel(query);
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchLoader);
    try {
      await state.search.getResults();
      clearLoad();
      searchView.renderResults(state.search.result);
    } catch (err) {
      throw new Error('Erro ao reinderizar a pesquisa');
    }
  }
};

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  ctrlSearch();
});

elements.searchResPages.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline');
  if (btn) {
    const goToPage = +btn.dataset.goto;
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});

const ctrlRecipe = async () => {
  const id = window.location.hash.replace('#', '');
  if (id) {
    renderLoader(elements.recipeView);
    if (state.search) {
      searchView.highlight(id);
    }
    state.recipe = new RecipeModel(id);
    try {
      await state.recipe.getRecipe();
      state.recipe.parseIngredients();
      state.recipe.calcTime();
      state.recipe.calcServings();
      clearLoad();
      recipeView.clearRecipes();
      recipeView.renderRecipe(state.recipe);
    } catch (err) {
      throw new Error(err.message);
    }
  }
};

['hashchange', 'load'].forEach(event =>
  window.addEventListener(event, ctrlRecipe)
);

// Hadling recipe button clicks

elements.recipeView.addEventListener('click', e => {
  if (e.target.matches('.btn-decrease, .btn-decrease *')) {
    if (state.recipe.servings > 1) {
      state.recipe.updateServings('dec');
      recipeView.updateServingsIngredients(state.recipe);
    }
  } else if (e.target.matches('.btn-increase, .btn-increase *')) {
    if (state.recipe.servings <= 100) {
      state.recipe.updateServings('inc');
      recipeView.updateServingsIngredients(state.recipe);
    }
  }
});

window.l = new ListModel();
