import _ from 'ramda'
import { io } from 'fp-ts'

const $ = io.of(document.querySelector)

// getVal :: String -> IO String
const getVal = _.compose(_.map(_.prop('value')))

// signIn :: String -> String -> Bool -> User
const signIn = _.curry((username, password, rememberMe) => {
  /* signing in */
})

io.of(signIn).ap(getVal('#email')).ap(getVal('#password')).ap(IO.of(false))
// IO({ id: 3, email: 'gg@allin.com' })
