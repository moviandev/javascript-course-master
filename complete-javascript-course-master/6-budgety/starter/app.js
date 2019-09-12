// BUDGET CONTROLLER

const budgetController = (() => {
  const Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = +value;
    this.percentage = -1;
  };

  Expense.prototype.calcPercentages = function(totalInc) {
    if (totalInc > 0) {
      this.percentage = Math.round((this.value / totalInc) * 100);
    } else {
      this.percentage = -1;
    }
  };

  Expense.prototype.getPercentage = function() {
    return this.percentage;
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
    deleteItem: (type, id) => {
      let ids, idx;
      ids = data.allItems[type].map(cur => {
        return cur.id;
      });
      idx = ids.indexOf(id);
      if (idx !== -1) {
        data.allItems[type].splice(idx, 1);
      }
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
    calculatePercentages: () => {
      data.allItems.exp.forEach(cur => {
        cur.calcPercentages(+data.totals.inc);
      });
    },
    getPercentages: () => {
      const allPerc = data.allItems.exp.map(cur => {
        return cur.getPercentage();
      });
      return allPerc;
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
    container: '.container',
    expensesPercLabel: '.item__percentage',
    dateLabel: '.budget__title--month'
  };

  const formatNumber = (num, type) => {
    let numSplit, dec, int;
    num = Math.abs(num);
    num = num.toFixed(2);

    numSplit = num.split('.');

    int = numSplit[0];
    if (int.length > 3) {
      int = `${int.substr(0, int.length - 3)}.${int.substr(int.length - 3, 3)}`;
    }
    dec = numSplit[1];
    return `${type === 'exp' ? '-' : '+'} ${int},${dec}`;
  };
  const nodeListForEach = (list, callBack) => {
    for (let i = 0; i < list.length; i++) {
      callBack(list[i], i);
    }
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
        <div class="item clearfix" id="inc-${obj.id}">
          <div class="item__description">${obj.description}</div>
          <div class="right clearfix">
            <div class="item__value">${formatNumber(obj.value, type)}</div>
            <div class="item__delete">
              <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
            </div>
          </div>
        </div>`;
      } else if (type === 'exp') {
        element = DOMStrings.expensesContainer;
        html = `
          <div class="item clearfix" id="exp-${obj.id}">
            <div class="item__description">${obj.description}</div>
            <div class="right clearfix">
              <div class="item__value">${formatNumber(obj.value, type)}</div>
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
    deleteListItem: selectorId => {
      const el = document.getElementById(selectorId);
      el.parentNode.removeChild(el);
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
      let type;
      type = obj.budget > 0 ? 'inc' : 'exp';
      document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(
        obj.budget,
        type
      );
      document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(
        obj.totalInc,
        'inc'
      );
      document.querySelector(
        DOMStrings.expenseLabel
      ).textContent = formatNumber(obj.totalExp, 'exp');

      if (obj.percentage >= 0) {
        document.querySelector(DOMStrings.percentageLabel).textContent =
          obj.percentage;
      } else {
        document.querySelector(DOMStrings.percentageLabel).textContent = '--';
      }
    },
    displayPercentages: percent => {
      const fields = document.querySelectorAll(DOMStrings.expensesPercLabel);
      nodeListForEach(fields, (cur, idx) => {
        if (percent[idx] >= 0) {
          cur.textContent = `${percent[idx]}%`;
        } else {
          cur.textContent = '--';
        }
      });
    },
    displayMonth: () => {
      const now = new Date();
      const year = now.getFullYear();
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ];
      const month = now.getMonth();
      const date = `${months[month]}/${year}`;
      document.querySelector(DOMStrings.dateLabel).textContent = date;
    },
    changedType: () => {
      const fields = document.querySelectorAll(
        `${DOMStrings.inputType}, ${DOMStrings.inputDescription}, ${DOMStrings.inputValue}`
      );

      nodeListForEach(fields, cur => {
        cur.classList.toggle('red-focus');
      });
      document.querySelector(DOMStrings.inputButton).classList.toggle('red');
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

    document
      .querySelector(DomS.inputType)
      .addEventListener('change', UICtrl.changedType);

    document.addEventListener('keypress', event => {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
    document
      .querySelector(DomS.container)
      .addEventListener('click', ctrlDeleteItem);
  };

  const updatePercentages = () => {
    // 1. Calculate updatePercentages
    budgetCtrl.calculatePercentages();
    // 2. Read percentages from the budget controller
    const percentages = budgetCtrl.getPercentages();
    // 3. Update the UI with the new percentages
    UICtrl.displayPercentages(percentages);
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

      // 6. Calculate and update percentages
      updatePercentages();
    }
  };

  const ctrlDeleteItem = e => {
    let itemId, splitId, type, id;
    itemId = e.target.parentNode.parentNode.parentNode.parentNode.id;

    if (itemId) {
      splitId = itemId.split('-');
      type = splitId[0];
      id = splitId[1];

      // 1. Delete the item from the data structure.
      budgetCtrl.deleteItem(type, +id);

      // 2. Delete the item from the UI
      UICtrl.deleteListItem(itemId);

      // 3. Update and show the new budget
      updateBudget();

      // 4. Calculate and update percentages
      updatePercentages();
    }
  };
  return {
    init: () => {
      console.log('Application is running');
      UICtrl.displayMonth();
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
