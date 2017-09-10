import * as firebase from 'firebase'
import config from '@/data/config'

firebase.initializeApp(config.firebaseConfig)
const database = firebase.database()

export default {
  loadData({ commit }) {
    database.ref(`/users/${config.userId}`).once('value').then((snapshot) => {
      commit('loadData', snapshot.val())
    });
  }
}
