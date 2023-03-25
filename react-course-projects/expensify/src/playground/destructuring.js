//
// Object destructing
//
const book = {
    title: 'Ego is the Enemy', 
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);

//
// Array destructuring
//
const address = ['2311 Boulevard de Maisonneuve Ouest', 'Montreal', 'Quebec', 'H3H 1L6']
const [street, city, state, zip] = address;
console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);

