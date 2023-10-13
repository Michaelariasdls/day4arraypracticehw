

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
 
// An array of objects
// const people = {'Albert'}

const result = inventors.filter((el) => (el.year >= 1500) && (el.year < 1600));

console.log(result)






// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

// const array1 = inventors
// console.log(array1)

// const map1 = array1.map((el) => (el.first ))


const map1 = inventors.map((el) => console.log(`${el.first} ${el.last}`))  //Actual Answer







// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const age = inventors.sort(function(a,b ) {
if(a.year> b.year) {
    return 1;
}else{
    return -1;
}

});
console.table(age)

// let yearArray = []   
// const year = inventors.map((element) => yearArray.push(`${element.year} ${element.first} ${element.last}`))
// console.log(yearArray.sort())
// For this answer used template liters to add elements 





// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const initialvalue = 0;
const ageAdd = inventors.reduce((accumlator, currentValue) =>
 
{accumlator + (currentValue.year - currentValue.passed), initialvalue });
//can also write in the reduce parameters that inital value as just 0 instead of declaring & assigning
console.log(ageAdd)








// 5. Sort the inventors by years lived
 let yearArray = []   
 const year = inventors.map((element) => yearArray.push(`${element.year} ${element.first} ${element.last}`))
 console.log(yearArray.sort())








// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

let list = document.querySelector(".mw-category-group ul li a")

let boulevarList = []

.map((link) => link.innerHtml)
.fill((elm) => elm.includes('de"'));

// Boulevards of Paris
// City walls of Paris
// Thiers wall
// Wall of Charles V
// Wall of Philip II Augustus
// *
// City gates of Paris
// Haussmann's renovation of Paris
// Boulevards of the Marshals
// A
// Boulevard Auguste-Blanqui
// B
// Boulevard Barbès
// Boulevard Beaumarchais
// Boulevard de l'Amiral-Bruix
// Boulevard Mortier
// Boulevard Poniatowski
// Boulevard Soult
// C
// Boulevard des Capucines
// Boulevard de la Chapelle
// Boulevard de Clichy
// Boulevard du Crime
// G
// Boulevard du Général-d'Armée-Jean-Simon
// H
// Boulevard Haussmann
// Boulevard de l'Hôpital
// I
// Boulevard des Italiens
// L
// Boulevard Lefebvre
// M
// Boulevard de la Madeleine
// Boulevard de Magenta
// Boulevard Malesherbes
// Boulevard Marguerite-de-Rochechouart
// Boulevard Montmartre
// Boulevard du Montparnasse
// R
// Boulevard Raspail
// Boulevard Richard-Lenoir
// S
// Boulevard Saint-Germain
// Boulevard Saint-Michel
// Boulevard de Sébastopol
// Boulevard de Strasbourg
// T
// Boulevard du Temple
// V
// Boulevard Voltaire
// Z
// Boulevard de la Zone



// 7. sort Exercise
// Sort the people alphabetically by last name


people.sort((a, b) => a.localeCompare(b));





// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce(function(obj, item) {
    if(!obj[item]) {
        obj[item] = 0
    }
})


// Reduce Example
// const initialvalue = 0;
// const ageAdd = inventors.reduce((accumlator, currentValue) =>
 
// {accumlator + (currentValue.year - currentValue.passed), initialvalue });
// //can also write in the reduce parameters that inital value as just 0 instead of declaring & assigning
// console.log(ageAdd)

