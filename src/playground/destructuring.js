// Object Destructuring

// const person = {
//     name: 'Joel',
//     age: 35,
//     location: {
//         city: 'Jackson',
//         temp: 12
//     }
// };

// const { name: firstName = 'anonymous', age, location } = person;

// console.log(`${firstName} is ${age}`)

// const { city, temp: temperature } = person.location

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)

// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { title, author } = book;

// const { name: publisherName = 'Self Published'} = book.publisher;

// console.log(publisherName)



// Array Destructuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [itemName, , mediumPrice, ] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`)