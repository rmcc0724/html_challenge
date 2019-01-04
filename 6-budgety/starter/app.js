//Budget COntroller
var budgetController = (function() {

    //Create the data structures for the Expense and Income objects 
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
        }

    };
    //Return a public function that adds an item along with the args for type, desc, and value  
    return {
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
                newItem = new Income(type, desc, value);
            }
            else if (type === 'exp') {
                newItem = new Expense(type, desc, value);
            }
            //Push the newItem to the data.allItems[type] array
            data.allItems[type].push(newItem);

            //Return the newItem
            return newItem;
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
        expenseContainer: '.expenses__list'
    };
    return {
        //Get the input values from the UI through the DOM and make public
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        addListItem: function(obj, type) {
            //Create HTML string with the placeholder text
            var html, newHtml, element;
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                html = ' <div class="item clearfix" id="income-0"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            else if (type === 'exp') {
                element = DOMstrings.expenseContainer;
                html = '<div class="item clearfix" id="expense-0"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            //Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
          
            // Insert HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
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
        // console.log('Event listeners.');
    };

    //This takes the Input from the UI controller so it can be passed along to the budget controller
    var ctrlAddItem = function() {
        var input, newItem;

        //1. Get the field input data
        input = UICtrl.getInput();

        //2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        
        //3. Add the item to the UI
        UICtrl.addListItem(newItem, input.type);
        
        //4. Calculate the budget

        //5. Display the budget to the UI 
    };

    //This calls the setupEventListeners function when the app is loaded
    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    };
})(budgetController, UIController);

//This calls the event listeners function
controller.init();
