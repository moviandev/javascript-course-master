import SearchModel from './models/Search.model';
import RecipeModel from './models/Recipe.model';
import ListModel from './models/List.model';
import LikesModel from './models/Likes.model';

import * as searchView from './views/search.view';
import * as recipeView from './views/recipe.view';
import * as listView from './views/list.view';
import * as likesView from './views/likes.view';

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
      recipeView.renderRecipe(state.recipe, state.like.isLiked(id));
    } catch (err) {
      throw new Error(err.message);
    }
  }
};

['hashchange', 'load'].forEach(event =>
  window.addEventListener(event, ctrlRecipe)
);

const ctrlList = () => {
  // Create a new list if there in none yet
  if (!state.list) state.list = new ListModel();

  // Add each ingredient to the list
  state.recipe.ingredient.forEach(el => {
    const item = state.list.addItem(el.count, el.unit, el.ingredient);
    listView.renderItem(item);
  });
};

// Handler restorage likes recipe when the page loads
window.addEventListener('load', () => {
  state.like = new LikesModel();

  // Restore likes
  state.like.readStorage();

  // Toggle menu btn like
  likesView.toggleLikeMenu(state.like.getNumLikes());

  // Render the existing likes
  state.like.likes.forEach(like => likesView.renderLike(like));
});

// Handle delete and update list item events
elements.shoppingList.addEventListener('click', e => {
  const id = e.target.closest('.shopping__item').dataset.itemid;
  if (e.target.matches('.shopping__delete, .shopping__delete *')) {
    // Delete from the state
    state.list.deleteItem(id);

    // Delete from the UI
    listView.deleteItem(id);
  } else if (e.target.matches('.shopping__count-value')) {
    const val = parseFloat(e.target.value, 10);
    state.list.updateCount(id, val);
  }
});

// LIKE CONTROLLER

const ctrlLike = () => {
  if (!state.like) state.like = new LikesModel();

  const currentID = state.recipe.id;

  // User has NOT yet liked current recipe
  if (!state.like.isLiked(currentID)) {
    // Add like to the state
    const newLike = state.like.addLike(
      currentID,
      state.recipe.title,
      state.recipe.author,
      state.recipe.img
    );
    // Toggle the like button
    likesView.toggleLikeBtn(true);
    // Add to the UI List
    likesView.renderLike(newLike);

    // User HAS liked the current recipe
  } else {
    // Remove like to the state
    state.like.deleteLike(currentID);

    // Toggle the like button
    likesView.toggleLikeBtn(false);

    // Remove from the UI List
    likesView.deleteLike(currentID);
  }
  likesView.toggleLikeMenu(state.like.getNumLikes());
};

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
  } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
    ctrlList();
  } else if (e.target.matches('.recipe__love, .recipe__love *')) {
    ctrlLike();
  }
});
