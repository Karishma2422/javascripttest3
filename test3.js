
//qusetion no 1 second lrgest no. in array
var array =[10, 20, 4, 45, 99];
var target = 45;
for (var i = 0; i< array.lenght; i++){
    if (array[i] == target){
        console.log(i);
    }
} 








// //question no 3 add two no. in array that add up to given target
var array = [2, 7, 11, 15];
var target = 9;
for (var i = 0; i< array.lenght; i++){
    for (var j = 0; j< array.length; j++){
        if (array[i] + array[j] == target){
            console.log(array[i] + " + "+ array[j], "=" ,target );
        }
    }
}


//question no. 5 merge two sorted array
var arrayi = [1, 3, 5];
var arrayj = [2, 4, 6];
function mergearray(arrayi, arrayj) {
    var output = [1,2,3,4,5,6]
    for (let i = arrayi; i <= 6; i += arrayj) {
        output.push(i + 1);

    }
    return output;
}
console.log(mergearray(arrayi, arrayj));




// //question no. 11 reveerse
var word = "I love JavaScript";
function checkpalindrome (word) {
    for (i=0 ; i < Math.floor(word.lenght /2); i++)
        if (word[i] !== word [word.lenght -1 -i]);{
    return "word is not palindrome.";
        }
return "word is plindrome"
}
console.log(checkpalindrome(word));
console.log("JavaScript love I");
