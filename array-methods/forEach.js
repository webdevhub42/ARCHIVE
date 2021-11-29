for (let i = 0; i < 5; i++) {
    console.log(i);
}


/*
for (let i = 0; i < 5; i++) {
  console.log(i);
}

*/
console.log(`Let’s say we wanted to use a for loop to iterate over each object within the foodArray. We would alter the condition and use i as the numeric index to access the values within foodArray.`)


const foodArray = [
  { name: 'Burrito' },
  { name: 'Pizza' },
  { name: 'Burger' },
  { name: 'Pasta' }
];

for (let i = 0; i < foodArray.length; i++) {
  console.log(`i value: ${i} | Food Name:`, foodArray[i]);
}


console.log('Like the for loop, the forEach method can also achieve the same results:')
