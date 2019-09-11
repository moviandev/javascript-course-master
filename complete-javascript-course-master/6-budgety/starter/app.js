// BUDGET CONTROLLER

const budgetController = (() => {
  const Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = +value;
  };

  const Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = +value;
  };

  const calculateTotal = type => {
    let sum = 0;
    data.allItems[type].forEach(cur => {
      sum += cur.value;
    });
    data.totals[type] = sum;
  };

  const data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0,
    percentage: -1
  };

  return {
    addItem: (type, des, val) => {
      let newItem, ID;

      // Create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Create a new item based on 'inc' or 'exp' type
      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }

      // Push it into our data structure
      data.allItems[type].push(newItem);

      // Return the new Item
      return newItem;
    },
    calculateBudget: () => {
      // Calculate total income and expenses
      calculateTotal('exp');
      calculateTotal('inc');
      // Calculate the budget: income - expenses
      data.budget = data.totals.inc - data.totals.exp;
      // Calculate the percentage of income that we spent
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1;
      }
    },
    getBudget: () => {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
      };
    },
    testing: () => {
      console.log(data);
    }
  };
})();

// UI CONTROLLER

const UIController = (() => {
  const DOMStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputButton: '.add__btn',
    incomeConatiner: '.income__list',
    expensesContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expenseLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container'
  };
  return {
    getInput: () => {
      return {
        type: document.querySelector(DOMStrings.inputType).value, // Will be either inc or exp
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value
      };
    },
    addListItem: (obj, type) => {
      let html, element;
      // Create HTML string with placeholder text
      if (type === 'inc') {
        element = DOMStrings.incomeConatiner;
        html = `
        <div class="item clearfix" id="income-${obj.id}">
          <div class="item__description">${obj.description}</div>
          <div class="right clearfix">
            <div class="item__value">${obj.value}</div>
            <div class="item__delete">
              <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
            </div>
          </div>
        </div>`;
      } else if (type === 'exp') {
        element = DOMStrings.expensesContainer;
        html = `
          <div class="item clearfix" id="expense-${obj.id}">
            <div class="item__description">${obj.description}</div>
            <div class="right clearfix">
              <div class="item__value">${obj.value}</div>
              <div class="item__percentage">21%</div>
              <div class="item__delete">
                <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
              </div>
            </div>
          </div>`;
      }

      // Insert the HTML into the DOM
      document.querySelector(element).insertAdjacentHTML('beforeend', html);
    },
    clearFields: () => {
      let fields, fieldsArray;
      fields = document.querySelectorAll(
        `${DOMStrings.inputDescription}, ${DOMStrings.inputValue}`
      );

      fieldsArray = Array.prototype.slice.call(fields);

      fieldsArray.forEach((cur, idx, arr) => {
        cur.value = '';
      });
      fieldsArray[0].focus();
    },
    displayBudget: obj => {
      document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
      document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc;
      document.querySelector(DOMStrings.expenseLabel).textContent =
        obj.totalExp;

      if (obj.percentage >= 0) {
        document.querySelector(DOMStrings.percentageLabel).textContent =
          obj.percentage;
      } else {
        document.querySelector(DOMStrings.percentageLabel).textContent = '--';
      }
    },
    getDOMstrings: () => {
      return DOMStrings;
    }
  };
})();

// GLOBAL APP CONTROLLER

const controller = ((budgetCtrl, UICtrl) => {
  // Initialization function:
  const setupEventListeners = () => {
    const DomS = UICtrl.getDOMstrings();

    document
      .querySelector(DomS.inputButton)
      .addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', event => {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
    document
      .querySelector(DomS.container)
      .addEventListener('click', ctrlDeleteItem);
  };

  const updateBudget = () => {
    // 1. Calculate the budget
    budgetCtrl.calculateBudget();

    // 2. Return the budget
    const budget = budgetCtrl.getBudget();

    // 3. Display the budget
    UICtrl.displayBudget(budget);
  };

  const ctrlAddItem = () => {
    let input, newItem;
    // 1. Get the filed input data
    input = UICtrl.getInput();

    if (input.description !== '' && input.value > 0 && !isNaN(input.value)) {
      // 2. Add the item to the budget controller
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);

      // 3. Add the item to the UI
      UICtrl.addListItem(newItem, input.type);

      // 4. Clear the fields
      UICtrl.clearFields();

      // 5. Calculate the buget and update budget;
      updateBudget();
    }
  };

  const ctrlDeleteItem = e => {
    console.log(e.target.parentNode);
  };

  return {
    init: () => {
      console.log('Application is running');
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: 0
      });
      setupEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();
