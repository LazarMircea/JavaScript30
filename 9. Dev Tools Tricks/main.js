const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
const par = document.querySelector('p')

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', 'happy');

// Styled
console.log('%c I am some great text',
  'font-size: 25px; background: red; text-shadow: 2px 2px 0 blue;');

// warning!
console.warn('OH NOO!');

// Error :|
console.error('Shit!');

// Info
console.info('Crocodiles eat 3-4 people a year!');

// Testing
console.assert(1 === 2, 'That is wrong!');

// clearing
console.clear();


// Viewing DOM Elements
console.log(par)
console.dir(par)

console.clear()
// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
})

// counting
console.count('Max');
console.count('Nero');
console.count('Max');
console.count('Max');
console.count('Max');
console.count('Nero');
console.count('Max');
console.count('Nero');
console.count('Max');
console.count('Nero');

// timing
console.time('fetching data')
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data')
    console.log(data)
  })

console.table(dogs)
