// var x = 5;
// var name = 'mehedi';

// var male = true;

// //Array er syntex
// //ekta array te amra amra multiple value k store kore rakhbo!
// /* var arrayName = [value1, value2, value3, value4] */

// var numbers = [10,20,30,40,50];
// // console.log(numbers[3]);
// var a = numbers.pop();
// // numbers.pop();
// // numbers.push(60,70);
// console.log(numbers);


// var numbers = [10,20,30,40,50];
// numbers.shift()
// numbers.unshift(5);
// console.log(numbers);

// jante cacchi j random ekta number er array index koto
// console.log(numbers.indexOf(40));

// console.log(numbers.indexOf(100));

//apnar kache ekta array ache apni arrray er last eliment cacchen

// console.log (numbers[numbers.length -1]);

//Array slice
/* Array slice ta hocche,, slice e usually 2 ta parameter thake mane kon index theke shuru ar  kon index er ag porjonto */

// var numbers = [10, 20, 30, 40, 50, 60, 70, 80];
// console.log(numbers.slice(4));


//splice 
/* splice ta hocche basically  3 ta jinish jay start kotha theke hobe and kotha theke delete korte chai and koyta element jog korte hbe */
//demo syntex splice(start,deleteCount,element1,element2..)
var numbers = [10, 20, 30, 40, 50, 60, 70, 80];
// numbers.splice(2,2);
// numbers.splice(3,1,200,300);
numbers.splice(2,0,200,500);
console.log(numbers);