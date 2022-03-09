
//, ref, set, update, remove, onValue, push, child, onChildRemoved, QueryConstraint, onChildAdded, onChildChanged

// update(ref(db, 'expenses/-Mx_ksVBjRvnaEQmJjnz'), {
//     description: 'Rent',
//     note: '',
//     amount: 700,
//     createdAt: 7
// })

// update(ref(db, 'expenses/-Mx_ksVDQEhvsdOJwf1J'), {
//     description: 'Gas',
//     note: '',
//     amount: 800,
//     createdAt: 8
// })

// update(ref(db, 'expenses/-Mx_ksVFZ2S9wgc6bNbr'), {
//     description: 'Water',
//     note: '',
//     amount: 900,
//     createdAt: 9
// })


// const onValueChange = onValue(ref(db, 'expenses'),
//     (dataSnapshot) => {

//         const expenses = [];
//         dataSnapshot.forEach((childSnapShot) => {
//             expenses.push({
//                 id: childSnapShot.key,
//                 ...childSnapShot.val()
//             })
//         })
//         console.log(dataSnapshot.val())
//     }, (error) => {
//         console.log('Error: ', error)
//     });


// setTimeout(() => {
//     push(ref(db, 'expenses'), {
//         description: 'Sidewalk',
//         note: '',
//         amount: 1100,
//         createdAt: 11
//     }).then(() => {
//         // onValueChange;
//     }).catch((e) => {
//         console.log('Error:', e)
//     });
// }, 6000)




// update(ref(db, 'expenses/-Mx_ksVBjRvnaEQmJjnz'), {
//     description: 'Rent',
//     note: '',
//     amount: 700,
//     createdAt: 7
// })

// update(ref(db, 'expenses/-Mx_ksVDQEhvsdOJwf1J'), {
//     description: 'Gas',
//     note: '',
//     amount: 800,
//     createdAt: 8
// })

// update(ref(db, 'expenses/-Mx_ksVFZ2S9wgc6bNbr'), {
//     description: 'Water',
//     note: '',
//     amount: 900,
//     createdAt: 9
// })


// const onValueChange = onValue(ref(db, 'expenses'),
//     (dataSnapshot) => {
//         const expenses = [];
//         dataSnapshot.forEach((childSnapShot) => {
//             expenses.push({
//                 id: childSnapShot.key,
//                 ...childSnapShot.val()
//             })
//         })
//         // console.log(expenses)

//     }, (error) => {
//         console.log('Error: ', error)
//     });


// setTimeout(() => {
//     update(ref(db, 'expenses/-Mx_ksVBjRvnaEQmJjnz'), {
//         amount: 801
//     }).then(() => {
//         onValueChange();
//     }).catch((e) => {
//         console.log('Error:', e)
//     });
// }, 6000)



// set(ref(db), {
//     name: 'Joel Jackson',
//     age: 35,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Jackson',
//         country: 'United States'
//     }
// }).then(() => {
// }).catch((e) => {
//     console.log('This failed:', e)
// });

// const onValueChange = onValue(ref(db),
//     (dataSnapshot) => {
//         const val = dataSnapshot.val();
//         // console.log(val)
//         console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
//     }, (error) => {
//         console.log('Error: ', error)
//     });

// setTimeout(() => {
//     update(ref(db), {
//         stressLevel: 9,
//         'job/title': 'Manager',
//         'job/company': 'Amazon',
//         'location/city': 'Seattle'
//     }).then(() => {
//     }).catch((e) => {
//         console.log('Error:', e)
//     });
// }, 6000)










// setTimeout(() => {
//     update(ref(db), {
//         age: 40
//     }).then(() => {
//     }).catch((e) => {
//         console.log('Error:', e)
//     });
// }, 6000)

// setTimeout(() => {
//     onValueChange()
// }, 12000)


// setTimeout(() => {
//     update(ref(db), {
//         age: 37
//     }).then(() => {
//     }).catch((e) => {
//         console.log('Error:', e)
//     });
// }, 18000)



// , {
//    onlyOnce: true
//}

// set(ref(db), {
//     name: 'Joel Jackson',
//     age: 35,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Jackson',
//         country: 'United States'
//     }
// }).then(() => {
// }).catch((e) => {
//     console.log('This failed:', e)
// });

// update(ref(db), {
//     attributes: {
//         height: 71,
//         weight: 190
//     }
// }).then(() => {
// }).catch((e) => {
//     console.log('Error:', e)
// });

// setTimeout(() => {
//     update(ref(db), {
//         stressLevel: 9,
//         'job/company': 'Amazon',
//         'location/city': 'Seattle'
//     }).then(() => {
//     }).catch((e) => {
//         console.log('Error:', e)
//     });
// }, 6000)



// remove(ref(db), 'isSingle')
//     .then(() => {
//         console.log('Sucessfully removed data!')
//     })
//     .catch((e) => {
//         console.log('Error!', e)
//     });

// const state = {
//     villainDeck: undefined,
//     gameNumber: 1
// }
// console.log(state.villainDeck)

// update(ref(db, `${state.gameNumber}`), {
//     gameNumber: state.gameNumber,
//     title: 'This is my first game',
//     villainDeck: 'Villain deck card 1'
// }).then(() => {
//     get(ref(db), `${state.gameNumber}`)
// }).catch((e) => {
//     console.log('Error:', e)
// });
// console.log(state.villainDeck)

// state.gameNumber += 1;

// update(ref(db, `${state.gameNumber}`), {
//     gameNumber: state.gameNumber,
//     title: 'This is my second game',
//     villainDeck: 'Villain deck card 8'
// }).then(() => {
//     state.villainDeck = villainDeck
//     state.gameNumber += 1
// }).catch((e) => {
//     console.log('Error:', e)
// });

// console.log(state.villainDeck)