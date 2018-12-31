//Budget COntroller
var budgetController = (function() {})();

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
        getinput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        //Make the DOMstrings object public so the main app controller has access top it
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();

//Global App Controller
var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function() {
        //1. Get the field input data
        var input = UICtrl.getinput();
        console.log(input);
        //2. Add the item to the budget controller

        //3. Add the item to the UI

        //4. Calculate the budget

        //5. Display the budget to the UI 
        console.log('It works');
    }
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

//Listen for the return key tp be pressed, this will add the expense or income to the app
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
})(budgetController, UIController);