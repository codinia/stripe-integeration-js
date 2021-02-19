var stripe = Stripe('pk_test_51IMUIYCUcAZTHKMqza99JkufKOB0zdQzbZHsZ9MBZFZvVQf1YbuiPL2mZL4g6YTWuyd9wa8DZmCU0Iqf4PSPZRuf00er4LQBE2');


debugger;
//create an element object
var elements = stripe.elements();




//create an cardElement
var cardElement = elements.create('card');
// //Mount an card-Element
cardElement.mount('#cardElement');
// //Mount an cardNumberElement
// cardNumberElement.mount('#cardNumberElement');
// //Mount an cardExpiryElement
// cardExpiryElement.mount('#cardExpiryElement');
// //Mount an cardCvcElement
// cardCvcElement.mount('#cardCvcElement');
// //Mount an auBankAccountElement
// auBankAccountElement.mount('#auBankAccountElement');
// //Mount an ibanElement
// ibanElement.mount('#ibanElement');
//listen to element event

debugger;

stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
            name: 'Jenny Rosen',
        },
    })
    .then(function(result) {
        debugger
        // Handle result.error or result.paymentMethod
    });