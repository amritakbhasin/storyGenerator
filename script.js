
console.log("works");

//28
var characters=[
  "Princess",
  "Viking",
  "6th Grader",
  "Teenage Boy",
  "Middle-Aged Dad",
  "Soccer Player",
  "Cleopatra",
  "Jesus",
  "Snow White",
  "High School Music Teacher",
  "Plumber",
  "Pop Singer",
  "Disney Channel Star",
  "Evil Stepmother",
  "Golden Retreiver",
  "Teenage Girl",
  "Warlock",
  "PTA Mom",
  "Caveman",
  "Plato",
  "Blair Waldorf",
  "Vampire",
  "Wooly Mammoth",
  "Socialite",
  "Mermaid",
  "Grizzly Bear",
  "Sabrina the Teenage Witch",
  "Pied Piper of Hamlet"
]

//28
var setting = [
"Antarctica",
"Riverdale from the Archie Comics",
"Stonehenge",
"London",
"Dubai",
"Mars",
"King Arthur's Round Table",
"Under the Sea",
"New York City",
"Atlantis: The Underwater Kingdom",
"On the Oregon Trail",
"Silicon Valley",
"African Safari",
"Madagascar",
"The Emerald City",
"Miami",
"Apple Headquarters",
"Hawkins, Indiana",
"Martha's Vineyard",
"Random Tech Startup",
"Yellowstone",
"Mexico",
"The Bermuda Triangle",
"In the Middle of a War",
"On a Coffee Plantation",
"Parallel Universe",
"Grandma's House",
"The Golden Gate Bridge"
]

//28
var timePeriod = [
  "Middle Ages",
  "Victorian Era",
  "Boston Tea Party",
  "Prehistoric Age",
  "2050",
  "Jurassic Period",
  "21st Century",
  "The Future",
  "Renaissance",
  "Cold War",
  "1492",
  "2012",
  "Industrial Revolution",
  "2019",
  "The Black Plage",
  "2016 Election",
  "355 B.C.",
  "19th Century",
  "Roman Empire",
  "20th Century",
  "Tudor Era",
  "2020 Election",
  "1666",
  "World War 3",
  "Space Race",
  "Salem Witch Trials",
  "Neolithic Era",
  "Vietnam War"
]

  var magObject = [
  "Tree House",
  "Hair Brush",
  "Convertible",
  "Horse",
  "Sword",
  "Cauldron",
  "Flute",
  "Mirror",
  "Cloak",
  "Boots",
  "Potion",
  "Ring",
  "Glasses",
  "Microphone",
  "2 Dollar Bill"
]


// function randNum(array)
// {
//   var randDeci = Math.random();
//   var randBig = randDeci*array.length;
//   var random = Math.floor(randBig);
//   return random;
// }

function randNum1(array)
{
  var randDeci = Math.random();
  var randBig = randDeci*array.length;
  var random = Math.floor(randBig);
  return random;
}

var number1 = randNum1(characters);
var number2 = randNum1(setting);
var number3 = randNum1(timePeriod);
var number4 = randNum1(magObject);

var txt = document.getElementById('txt')

txt.addEventListener("click", function()
{
  var char = document.getElementById('char');
  char.innerHTML = characters[number1];
  var set = document.getElementById('set');
  set.innerHTML = setting[number2];
  var time = document.getElementById('time');
  time.innerHTML = timePeriod[number3];
  var ob = document.getElementById('ob');
  ob.innerHTML = magObject[number4];
}
)


// function changeText(someNum)
// {
//   var txt = document.getElementById('txt');
//   txt.innerHTML = characters[someNum];
// }
//
// changeText(number);
