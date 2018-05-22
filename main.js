const companies = [
    {name: "company one", category: "Finance", start: 1981, end: 2001},
    {name: "company two", category: "Retail", start: 1972, end: 2002},
    {name: "company three", category: "Finance 3", start: 1983, end: 2003},
    {name: "company four", category: "Finance 4", start: 1984, end: 2004},
    {name: "company five", category: "Finance 5", start: 1965, end: 2005},
    {name: "company six", category: "Finance 6", start: 1986, end: 2006},
    {name: "company seven", category: "Retail", start: 1997, end: 2002},
    {name: "company eight", category: "Finance 8", start: 1988, end: 2008},
    {name: "company nine", category: "Tech", start: 1989, end: 2009},
    {name: "company ten", category: "Retail", start: 1990, end: 2010}
]
const ages = [33, 12, 20, 16, 5, 54, 21, 44,61, 13, 15, 45, 25, 64, 32];
// for
// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i].name);;
// }
// forEach
// companies.forEach(function(company) {
//     console.log(company.name);
// });
//*************************************************************** FILTER

// let canDrink =[];
// for (let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
// }

// console.log(canDrink);

//********************************************************** FILTER *******************************************************

// const canDrink= ages.filter(function(age){
//     if(age >=21){
//         return true;
//     }
// })
// console.log(canDrink);

//implementing filter using arrow functions

// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// const retailCompanies = companies.filter(function(company){
//     if(company.category === 'Retail'){
//         return true;
//     }
// });

// console.log(retailCompanies);

// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);

// get all the companies that started in the 80's

// const eightieesCompanies = companies.filter(company => (company.start >=1980) && (company.start < 1990));
// console.log(eightieesCompanies);

// ************************************************************ REJECT ********************************************************

// inverse of filter.... rejects all those that hold the condition true... replace filter by reject

// ******************************************************* MAP ****************************************************************

// const companyNames = companies.map(function(company){
//     return company.name;
// });

// console.log(companyNames);

// const companyNames = companies.map(company => company.name);
// console.log(companyNames);


//comapnies that lasted 10 years
// const testMap = companies.map(function(company){
//     return '${company.name} [${company.start} - ${company.end}]';
// });
// console.log(testMap);

// const testMap2 = companies.map(company => company.name +' ['+ company.start + '-' + company.end +']');
// console.log(testMap2);

// const agesSqrt = ages.map(age => Math.sqrt(age));
// console.log(agesSqrt);

//ONE OPERATION AFTER THE OTHER
// const ageMap = ages
//     .map(age=> Math.sqrt(age))
//     .map(age => age*2);

// console.log(ageMap);

// ************************************************************** SORT **********************************************************
//sort companies by start date
// const sortedCompanies = companies.sort(function(c1, c2){
//     if(c1.start > c2.start){
//         return 1;
//     }else{
//         return -1;
//     }
// });
// console.log(sortedCompanies);

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1: -1));
// console.log(sortedCompanies);

//sort ages ascending order

// const sortAges = ages.sort((a, b) => a-b);
// console.log(sortAges);

// ************************************************************ REDUCE ****************************************************
// Reduce is the super array/list transformation function
// let ageSum = ages.reduce(function(total, age){
//     return total + age;
// }, 0);
// console.log(ageSum);


// let ageSum = ages.reduce((total, age) => total +age, 0);
// console.log(ageSum);

// Get total years for all comapnies

// const totalYears = companies.reduce(function(total, company){
//     return total + (company.end - company.start);
// }, 0);
// console.log(totalYears);

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log(totalYears);

//                              Combine Methods
// multiply ages by 2 and filter out ages >=40
// const combined = ages.map(age => age*2)
//     .filter(age => age >= 40)
//     .sort((a, b) => a- b)
//     .reduce((a, b) => a+b, 0)
// console.log(combined);




// Create your own dataset and experiment it with... Maybe pull out an API and perform operations


// https://www.discovermeteor.com/blog/understanding-javascript-map/

