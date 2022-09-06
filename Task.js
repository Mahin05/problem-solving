// Finding Area of a triangle
const side1= 5;
const side2=6;
const side3=7;
const s = (side1+side2+side3)/2;
const area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log("The area of Triangle is",area);

// Finding leap year
function leapYear(year){
    return year%100 === 0 ? year%400===0 : year%4===0
}
console.log(leapYear(2020));

//Write a JavaScript program to get the website URL (loading page)
// console.log(document.URL);

// Create a variable using a user-defined name
const var_name = 'abc';
const n = 120;
this[var_name]=n;
console.log(this[var_name]);
// Get the extension of a filename
const fileName = 'JavaScript.js';
console.log(fileName.split('.').pop());

// Get the difference between a given number
function number(n){
    if (n<=13){
        return 13-n;
    }
    else{
        return (n-13)*2
    }
}
console.log(number(2));

// Compute the sum of the two given integers
function sum(x,y){
    if (x===y){
        return (x+y)*3
    }
    else{
        return x+y;
    }
}
console.log(sum(10,10));

//  Check whether a string starts with 'Java' and false otherwise
function strCheck(str){
    if (str<4){
        return False;
    }
    front = str.substring(0,4)
    if(front==='java'){
        return true;
    }
    else{
        return false
    }
}
console.log(strCheck('javabiy'));

// Display the city name if the string begins with "Los" or "New" otherwise return blank
function city_name(str) {
    if (str.length >= 3 && ((str.substring(0, 3) == 'Los')
                            || (str.substring(0, 3) == 'New')))
     
        {
            return str;
      }
  
    return '';
  }
  
  console.log(city_name("New York"));
  console.log(city_name("Los Angeles"));
  console.log(city_name("London"));