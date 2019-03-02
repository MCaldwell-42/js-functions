

// // firstand lastnames
// // 

// const firstName = 'Zoe';
// const lastName = 'Ames';

// //console.log(firstName + ' ' + lastName);
// console.log(`${firstName}     ${lastName}`);

// const firstName1 = 'Britney';
// const lastName1 = 'Spears';

// console.log(`${firstName} ${lastName}`)

// const firstName2 = 'Tony';
// const lastName2 = 'Romo';
// console.log(`${firstName2} ${lastName2}`)

const namePrinter = (firstName, lastName) => {

console.log(`${firstName} ${lastName}`)
};

namePrinter('James', 'Brown');
namePrinter('OH', 'YEAH!');


const nuggetizer = (animal) => {
    return `processed ${animal}`;  
};

console.log(nuggetizer('pig'));
console.log(nuggetizer('juice'));
console.log(nuggetizer('shit'));

const dogBreed = (breed) => {
    return `my favorite dog breed is ${breed}.`;
}

dogBreed('German Shepherd');

// const dogBreedDiv = document.getElementById('dog-breeds');
// dogBreedDiv.innerHTML = dogBreed('wolf');
// console.log('dogBreedDiv', dogBreedDiv);


// const nuggetizerDiv = document.getElementById('nuggetizer');
// nuggetizerDiv.innerHTML = nuggetizer('duck');
// nuggetizerDiv.innerHTML += nuggetizer('wolf');

const printToDom = (divID, textToPrint) => {

    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML += textToPrint; 

};
printToDom('dog-breeds', dogBreed('wolf'));
printToDom('nuggetizer', nuggetizer('duck feet'));
printToDom('nuggetizer', nuggetizer('wolf'));
printToDom('nuggetizer', 'mmmmmmmmm');