// arguments 

function add(num1, num2){
    console.log(num1, num2);
}
add(12, 13); // print:  12 13


function add(num1, num2) {
    console.log(arguments);
}
add(12, 13); // print:  [Arguments] { '0': 12, '1': 13 }


function add(num1, num2) {
    console.log(arguments);
}
add(12, 13, 46, 90, 80);
//  print: [Arguments] { '0': 12, '1': 13, '2': 46, '3': 90, '4': 80 }

function add(num1, num2) {
    console.log(arguments[4]);
}
add(12, 13, 46, 90, 80); // print: 80
// Argument is a array like object
//N.B You cant push pop in argument but can with 'for of'