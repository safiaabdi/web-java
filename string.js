const str = "extravaganza";
const str2 = str.slice(-4);
console.log(str2);String.js


const food = "The quick fox jumped over the lazy dog";
const food2 = "eat";
const newfood = food.slice(0, 4) + food2 + food.slice(4);
console.log(newfood); 

const story = "The quick brown fox jumps over the lazy dog";
const counting = (str, word) => {
    const regex = new RegExp(word, 'gi'); 
    return (str.match(regex) || []).length;
};

const countThe = counting(story, "the");
const countBrown = counting(story, "brown");

console.log(`Count of "the": ${countThe}`); 
console.log(`Count of "brown": ${countBrown}`); 

