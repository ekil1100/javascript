// const user1 = {
//   name: 'Will',
//   score: 3,
//   increment: function () {
//     user1.score++
//   },
// }
// user1.increment()

// const user2 = {}
// user2.name = 'Tim'
// user2.score = 6
// user2.increment = function () {
//   user2.score++
// }

// const user3 = Object.create(null)
// user3.name = 'Eva'
// user3.score = 9
// user3.increment = function () {
//   user3.score++
// }

// // ! create all data and functions while create new user
// function userCreator(name, score) {
//   const newUser = {}
//   newUser.name = name
//   newUser.score = score
//   newUser.increment = function () {
//     newUser.score++
//   }
//   return newUser
// }
// const user1 = userCreator('Will', 3)
// const user2 = userCreator('Tim', 5)
// user1.increment()

// // ! better
// function userCreator(name, score) {
//   const newUser = Object.create(userFunctionStore)
//   newUser.name = name
//   newUser.score = score
//   return newUser
// }
// const userFunctionStore = {
//   increment: function () {
//     this.score++
//   },
//   login: function () {
//     console.log('Logged in')
//   },
// }
// const user1 = userCreator('Will', 3)
// const user2 = userCreator('Tim', 5)
// user1.increment()

// function userCreator(name, score) {
//   const newUser = Object.create(userFunctionStore)
//   newUser.name = name
//   newUser.score = score
//   return newUser
// }
// const userFunctionStore = {
//   increment: function () {
//     const add1 = () => {
//       this.score++
//     }
//     add1()
//   },
// }
// const user1 = userCreator('Will', 3)
// const user2 = userCreator('Tim', 5)
// user1.increment()

// // ! using new keyword
// function userCreator(name, score) {
//   this.name = name
//   this.score = score
// }

// userCreator.prototype
// userCreator.prototype.increment = function () {
//   this.score++
// }
// const user1 = new userCreator('Will', 3)

// // ! class version
// class UserCreator {
//   constructor(name, score) {
//     this.name = name
//     this.score = score
//   }
//   increment() {
//     this.score++
//   }
//   login() {
//     console.log('login')
//   }
// }
// const user1 = new UserCreator('Eva', 9)
// user1.increment()
