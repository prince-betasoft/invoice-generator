import { auth } from '~/plugins/firebase'
import Cookies from 'js-cookie'
export default (context) => {
  const { store } = context

  return new Promise((resolve) => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        auth().currentUser.getIdToken(true).then(token => {
           Cookies.set('access_token',token)
        })
        store.dispatch('auth/current_user',user.uid)
        store.dispatch('auth/loggedInUser', true)
      } else {
        Cookies.remove('access_token')
        store.dispatch('auth/loggedInUser', false)
      }
      return resolve()
    })
  })
}
