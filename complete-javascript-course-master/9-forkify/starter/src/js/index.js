import SearchModel from './models/search.model';
import RecipeModel from './models/recipe.model';
import * as searchView from './views/search.view';
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
    await state.search.getResults();
    clearLoad();
    searchView.renderResults(state.search.result);
  }
};

const ctrlRecipe = async () => {
  const id = window.location.hash;
  console.log(id);
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

window.addEventListener('hashchange', ctrlRecipe);
