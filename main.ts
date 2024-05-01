#! 
import inquirer from "inquirer";
let exchange_rate:any ={
    "USD":1, //Base Currency
    "EUR": 0.9, //European Currency (Euro)
    "JYP": 113, //Japanese Yen
    "CAD": 1.3, //Canadian Dollar
    "AUD": 1.65, //Austrailian Dollar
    "PKR": 280 //Pakistani Rupees
}

let selected_currency = await inquirer.prompt([
    { name:"from_currency",
    type :"list",
    message:"select the currency to exchange from:",
    choices : ["USD", "EUR","JYP","CAD","AUD","PKR"]

    },{
        name:"to_currency",
        type:"list",
        message:"select the currency to convert into:",
        choices: ["USD", "EUR","JYP","CAD","AUD","PKR"]
        },{

            name:"amount",
            type:"input",
            message:"Enter the amount to convert:"
        }
    
]
);
 let from_amount= exchange_rate[selected_currency.from_currency];
 let into_amount =exchange_rate[selected_currency.to_currency ];
 let amount  = selected_currency.amount

 //Formula of conversion
 let base_amount = amount / from_amount
 let converted_amount = base_amount * into_amount


 //rseults

 console.log(`Converted Amount = ${converted_amount.toFixed(4)}`);