// URL: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

function removeChar(str) {
    //You got this!        
    return str.substr(1, str.length-2);
};

console.log(removeChar('eloquent')," > ", 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');
console.log(removeChar('ooopsss'), 'oopss');