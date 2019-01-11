//Budget COntroller
var budgetController = (function() {

    //Create the data structures for the Expense, Income and Total objects 
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(curr) {
            sum += curr.value;
        });
        data.totals[type] = sum;
    };

    //Create empty arrays for income, expenses and totals
    var allExpenses = [];
    var allIncomes = [];
    var totalExpenses = 0;

    //This is where the data is stored for all exp, inc items and their totals
    var data = {
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
        //Return a public function that adds an item along with the args for type, desc, and value  
        addItem: function(type, desc, value) {
            var newItem, ID; //Create a newItem and ID

            //If the array is not empty, check the length, add one and set that to the ID variable, else if empty, ID gets 0
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1; // Creates an ID for the new item based on the length of the array type that's chosen
            }
            else {
                ID = 0;
            }
            //If the type is inc create an income object, exp creates an Expense object
            if (type === 'inc') {
                newItem = new Income(ID, desc, value);
            }
            else if (type === 'exp') {
                newItem = new Expense(ID, desc, value);
            }
            //Push the newItem to the data.allItems[type] array
            data.allItems[type].push(newItem);

            //Return the newItem
            return newItem;
        },
        //Calculate the budget based on the Income - expenses
        calculateBudget: function() {

            //calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            //Calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;

            //Calculate the percentage of income
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            }
            else {
                data.percentage = -1;
            }

        },
        //Return the calculated budget
        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },
        testing: function() {
            console.log(data);
        }
    };
})();

//UI Controller
var UIController = (function() {

    //Setup the DOMstrings object with the classes from the UI
    //This data is private
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        container: '.container',
        percentageLabel: '.budget__expenses--percentage'
    };
    return {
        //Get the input values from the UI through the DOM and make public
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },
        addListItem: function(obj, type) {
            //Create HTML string with the placeholder text
            var html, newHtml, element;
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                html = ' <div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            else if (type === 'exp') {
                element = DOMstrings.expenseContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            //Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // Insert HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        //Declare a public clear fields function that clears out the input fields of the DOM UI
        clearFields: function() {
            var fields, fieldsArr;

            //Select the input and description fields
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

            //Convert to an Array that we can use the forEach method
            fieldsArr = Array.prototype.slice.call(fields);

            //Sets all the values of the array to "" 
            fieldsArr.forEach(function(current, index, array) {
                current.value = "";
            });
            fieldsArr[0].focus();
        },

        displayBudget: function(obj) {
            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;
            document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage;

            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%'
            }
            else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }
        },

        //Make the DOMstrings object public so the main app controller has access to it
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();

//Global App Controller
var controller = (function(budgetCtrl, UICtrl) {

    //Sets up the event listeners on initialization when the app loads
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        //Listen for the return key tp be pressed, this will add the expense or income to the app
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
        // console.log('Event listeners.');
    };



    //This takes the Input from the UI controller so it can be passed along to the budget controller

    var updateBudget = function() {

        //1. Calculate the budget
        budgetController.calculateBudget();

        //2. Return the budget
        var budget = budgetController.getBudget();

        //3. Dsiplay the budget on the UI
        UICtrl.displayBudget(budget);
    };
    var ctrlAddItem = function() {
        var input, newItem;

        //1. Get the field input data
        input = UICtrl.getInput();

        //2. Add the item to the budget controller
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);


            //3. Add the item to the UI

            UICtrl.addListItem(newItem, input.type);

            //4. Clear the UI fields
            UICtrl.clearFields();
            //5. Calculate the budget

            updateBudget();
        }
        //6. Display the budget to the UI 
    };

    var ctrlDeleteItem = function(event) {
        var itemID, type, ID, splitID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if(itemID) {
            splitID = itemID.split('-');
            type = splitID[0];
            ID = splitID[1];
            
            //1. delete the item from the data structure
            
            //2. delete the item from the UI
            
            //3. Update and show the new budget
        }
    };

    //This calls the setupEventListeners function when the app is loaded
    return {
        init: function() {
            console.log('Application has started.');
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    };
})(budgetController, UIController);

//This calls the event listeners function
controller.init();
