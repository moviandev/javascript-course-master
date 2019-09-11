// BUDGET CONTROLLER

const budgetController = (function() {

    // Some Code

})();

// UI CONTROLLER

const UIController = (function() {
    //some code
})();

// GLOBAL APP CONTROLLER

const controller = (function(budgetCtrl, UICtrl) {

    const ctrlAddItem = function() {

        // 1. Get the filed input data

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the buget

        // 5. Display the budget on the UI

        console.log('It works.')

    }
    
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);