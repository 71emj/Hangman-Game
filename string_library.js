// this is originally conceived to be a json library
// unfortunately fetch(json) doesn't work on local entries
// thus rebuilding this as an object library for game to fetch string data
// hopefully I'll be able to finish in time (finish this library and build the retrievale block in the main js)


// by creating an object library similar to json, 
// I will create a meta array to store associated data object in each index
// by random through index stored in the array, I can then call object prop 
// using square bracket notation, i.e. Array[0]['theme'], or Array[0]['library'][0]['hint']
// to access specific boject prop such as 
// "A medium sized flightless bird that was discvered.... " returned by the above object call


const stringLibrary = new Array(
  {
    "animal":
    {
      "theme": "Animals",
      "text": "lorem ipsum",
      "library": [
      {
        "word": "Dodo",
        "hint": "A medium sized flightless bird that was discovered on the Island of Mauritius in the 1950s.",
        "img": "dodo.jpg"
      },
      {
        "word": "Cuscus",
        "hint": "A large marsupial native to the Northern forest of Australia and the tropical island of Papua New Guinea.",
        "img": "cuscus.jpg"
      },
      {
        "word": "Antelope",
        "hint": "A deer-like mammal found in Africa, Asia and parts of the Americas.",
        "img": ""
      },
      {
        "word": "Akita",
        "hint": "A medium sized domestic Dog breed, first bred in Japan in the 1600s.",
        "img": "akita.jpg"
      },
      {
        "word": "Iguana",
        "hint": "A large docile species of lizard native to the jungles of central and south America.",
        "img": "iguana.jpg"
      }]
    }
  },
  {
    "countries":
    {
      "theme": "Countries",
      "text": "lorem ipsum",
      "library": [
      {
        "word": "Dodo",
        "hint": "A medium sized flightless bird that was discovered on the Island of Mauritius in the 1950s.",
        "img": "dodo.jpg"
      },
      {
        "word": "Cuscus",
        "hint": "A large marsupial native to the Northern forest of Australia and the tropical island of Papua New Guinea.",
        "img": "cuscus.jpg"
      },
      {
        "word": "Antelope",
        "hint": "A deer-like mammal found in Africa, Asia and parts of the Americas.",
        "img": ""
      },
      {
        "word": "Akita",
        "hint": "A medium sized domestic Dog breed, first bred in Japan in the 1600s.",
        "img": "akita.jpg"
      },
      {
        "word": "Iguana",
        "hint": "A large docile species of lizard native to the jungles of central and south America.",
        "img": "iguana.jpg"
      }]
    }
  }
)













// const jsonUrl = 'game.json';

// const jsonDat = fetch(jsonUrl)
//  .then(function(response) { return response.json() })
//  .then(function(json) {
//    let jsonNameArr = new Array();
//    Object.getOwnPropertyNames(json).forEach(function(elem) {
//      jsonNameArr.push(elem);
//    })
//    return jsonNameArr;
//  })


// console.log(jsonDat);