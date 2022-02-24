function userCreator(name, score) {
  this.name = name
  this.score = score
}

userCreator.prototype
userCreator.prototype.increment = function () {
  this.score++
}
const user1 = new userCreator('Will', 3)
