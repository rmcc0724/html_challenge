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

    var allExpenses = [];
    var allIncomes = [];
    var totalExpenses = 0;

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
})();

//UI Controller
var UIController = (function() {

    //Setup the DOMstrings object with the classes from the UI
    //This data is private
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
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
        console.log('Event listeners.');
    };

    //This takes the Input from the UI controller so it can be passed along to the budget controller
    var ctrlAddItem = function() {
        //1. Get the field input data
        var input = UICtrl.getInput();

        //2. Add the item to the budget controller

        //3. Add the item to the UI

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
