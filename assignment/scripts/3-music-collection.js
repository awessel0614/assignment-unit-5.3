console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let primesCollection = [
  {
    artist: 'Hiroshi Yoshimura',
    title: 'Music For Nine Post Cards',
    yearPublished: 1982
  },
  {
    artist: 'Clifford Brown and Max Roach',
    title: 'Study in Brown',
    yearPublished: 1955
  },
  {
    artist: 'Hiroshi Yoshimura',
    title: 'Green',
    yearPublished: 1986
  },
  {
    artist: 'Cécile McLorin Salvant',
    title: 'Ghost Song',
    yearPublished: 2022
  },
  {
    artist: 'Wilco',
    title: 'Yankee Hotel Foxtrot',
    yearPublished: 2002
  },
];


let myCollection = [];


function addToCollection(collection, title, artist, yearPublished) {
        if (collection === myCollection) {
          let album = {
            title: title,
            artist: artist,
            yearPublished: yearPublished
          };
          myCollection.push(album);
          return album;
        } else if (collection === primesCollection) {
          let album = {
            title: title,
            artist: artist,
            yearPublished: yearPublished
          };
          primesCollection.push(album);
          return album;
        }
}
console.log(addToCollection(myCollection, "Rumours", "Fleetwood Mac", 1977));
console.log(myCollection);
console.log(addToCollection(myCollection, "To Venus and Back", "Tori Amos", 1999));
console.log(myCollection);
console.log(addToCollection(myCollection, "The Shepherd's Dog", "Iron & Wine", 2007));
console.log(myCollection);
console.log(addToCollection(myCollection, "Random Access Memories", "Daft Punk", 2013));
console.log(myCollection);
console.log(addToCollection(myCollection, "Tusk", "Fleetwood Mac", 1977));
console.log(myCollection);
console.log(addToCollection(myCollection, "Brothers", "The Black Keys", 2010));
console.log(myCollection);




function showCollection(collection){
    for (let album of collection) {
      console.log(`${album.title}` + ' by ' + `${album.artist}` + ' published in ' + `${album.yearPublished}`);
    }
    return collection;
}
console.log(showCollection(myCollection));




function findByArtist(collection, artist) {
      let matchingResults = [];
        for (let album of collection) {
          if (`${album.artist}` === artist) {
            matchingResults.push(album);
          }   
      }
     return matchingResults; 
}
console.log(findByArtist(primesCollection, "Wilco"));
console.log(findByArtist(primesCollection, "Celine Dion"));
console.log(findByArtist(myCollection, "Tori Amos"));
console.log(findByArtist(myCollection, "Fleetwood Mac"));
console.log(findByArtist(myCollection, "Haim"));





//STRETCH GOALS


function search(collection, searchCriteria) {
      let newArray = [];
      for (let album of collection) {
          if(searchCriteria === )
      }




}
search(myCollection, "artist: 'Tori Amos', yearPublished: 1999");

































































// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
