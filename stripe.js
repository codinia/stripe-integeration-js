var stripe = Stripe('pk_test_51IMUIYCUcAZTHKMqza99JkufKOB0zdQzbZHsZ9MBZFZvVQf1YbuiPL2mZL4g6YTWuyd9wa8DZmCU0Iqf4PSPZRuf00er4LQBE2');



//create an element object
var elements = stripe.elements();




//create an cardElement
var cardElement = elements.create('card');
//get an cardElement
var cardElement = elements.getElement('card');

//create an cardNumberElement
var cardNumberElement = elements.create('cardNumber');
//get an cardNumberElement
var cardNumberElement = element.getElement('cardNumber');

//create an cardExpiryElement
var cardExpiryElement = elements.create('cardExpiry');
//get an cardExpiryElement
var cardExpiryElement = elements.getElement('cardExpiry');

//create an cardCvcElement
var cardCvcElement = elements.create('cardCvc');
//get an cardCvcElement
var cardCvcElement = elements.getElement('cardCvc');

//create an auBankAccountElement
var auBankAccountElement = elements.create('auBankAccount');
//get an auBankAccountElement
var auBankAccountElement = elements.getElement('auBankAccount');

//create an ibanElement
var ibanElement = elements.create('iban');
//get an ibanElement
var ibanElement = elements.getElement('iban');


//listen to element event

//cardElement
cardElement.on('change', function(event) {
    if (event.complete) {
        // enable payment button
    } else if (event.error) {
        // show validation to customer
    }

    // {
    //     complete: false,
    //     brand: 'visa',
    //     elementType: 'card',
    //     empty: false,
    //     error: undefined,
    //     value: { postalCode: "" },
    // }
});

//cardNumberElement
cardNumberElement.on('change', function(event) {
    if (event.error) {
        // show validation to customer
    }
    // {
    //     complete: true,
    //     brand: 'visa',
    //     elementType: 'cardNumber',
    //     empty: false,
    //     error: undefined,
    //   }
});

//cardExpiryElement
cardExpiryElement.on('change', function(event) {
    if (event.error) {
        // show validation to customer
    }
    // {
    //     complete: true,
    //     elementType: 'cardExpiry',
    //     empty: false,
    //     error: undefined,
    //   }
});

//cardCvcElement
cardCvcElement.on('change', function(event) {
    if (event.error) {
        // show validation to customer
    }
    // {
    //     complete: true,
    //     elementType: 'cardCvc',
    //     empty: false,
    //     error: undefined,
    //   }
});

//auBankAccountElement
auBankAccountElement.on('change', function(event) {
    if (event.error) {
        // show validation to customer
    } else if (event.bankName && event.branchName) {
        // show both bank and branch name
    } else if (event.bankName) {
        // show bank name
    }
    // {
    //     bankName: 'Stripe Test Bank',
    //     branchName: 'Stripe Test Branch'
    //     complete: true,
    //     elementType: 'auBankAccount',
    //     empty: false,
    //     error: undefined,
    //   }
});

//ibanElement
ibanElement.on('change', function(event) {
    if (event.error) {
        // show validation to customer
    }
    // {
    //     complete: true,
    //     elementType: 'iban',
    //     empty: false,
    //     country: 'ire',
    //     bankName: 'BofA',
    //     error: undefined,
    //   }
});