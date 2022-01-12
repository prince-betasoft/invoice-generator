import { auth, firebase, firestore } from '~/plugins/firebase'
import { nanoid } from 'nanoid'
import slugify from 'slugify'
 export const strict = false
export default {
  namespaced: true,
  state() {
    return {
      stories: [],
      trashStories: [],
    }
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    },
    SetStories(state, payload) {
      state.stories = payload
    },
    SetTrashStories(state, payload) {
      state.trashStories = payload
    },
  },
  actions: {
    async getStories({ commit, dispatch, rootState }) {
      try {
        if (this.state.auth.auth_user.role === 'admin') {
          await firestore
            .collection('stories')
            .where('isDeleted', '==', false)
            .get()
            .then((snapshot) => {
              const data = snapshot.docs.map((doc) => ({
                ...doc.data(),
              }))
              commit('SetStories', data)
            })
        } else {
          await firestore
            .collection('stories')
            .where('isDeleted', '==', false)
            .where('user_id', '==', this.state.auth.auth_user.id)
            .get()
            .then((snapshot) => {
              const data = snapshot.docs.map((doc) => ({
                ...doc.data(),
              }))
              commit('SetStories', data)
            })
        }
      } catch (error) {
        console.log('Error', error)
      }
    },
    async getTrashStories({ commit, dispatch }) {
      try {
        await firestore
          .collection('stories')
          .where('isDeleted', '==', true)
          .get()
          .then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
              ...doc.data(),
            }))
            // console.log(data, 'ddda')
            commit('SetTrashStories', data)
          })
      } catch (error) {
        console.log('Error', error)
      }
    },
    async addStory({ dispatch, getters }, payload) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp()
      try {
        payload.user_id = auth().currentUser.uid
        payload.updated_by = {
          id: auth().currentUser.uid,
          name:
            this.state.auth.auth_user.first_name +
            ' ' +
            this.state.auth.auth_user.last_name,
          email: this.state.auth.auth_user.email,
        }
        // payload.chapter = []
        // payload.private_mode = false
        payload.created_at = timestamp
        payload.updated_at = timestamp
        // var str = payload.title.toLowerCase()
        var str = payload.clientCompanyName.toLowerCase()
        var str = payload.clientFirstName.toLowerCase()
        var str = payload.clientLastName.toLowerCase()
        var str = payload.clientEmail.toLowerCase()
        var str = payload.clientCountry.toLowerCase()
        var str = payload.clientAddress1.toLowerCase()
        var str = payload.clientAddress2.toLowerCase()
        var str = payload.clientPhone.toLowerCase()
        var str = payload.clientExtraData.toLowerCase()
        str = str.replace(/[^\w\s]/gi, '')
        payload.slug = slugify(str)
        console.log("i m here",payload)

        const statsRef = firestore.collection('stories').doc('--stats--')
        const userRef = firestore.collection('users').doc(auth().currentUser.uid)
        const increment = firebase.firestore.FieldValue.increment(1)
        const batch = firestore.batch()
        const storyRef = firestore.collection('stories').doc(payload.id)
        batch.set(storyRef, payload)
        batch.update(statsRef, { storyCount: increment }, { merge: true })
        batch.update(userRef, { storyCount: increment }, { merge: true })
        await batch.commit()

        } catch (error) {
          console.log('Error', error)
        }
    },
    async updateStory({ dispatch, getters }, payload) {
      try {
         var str = payload.title.toLowerCase()
         str = str.replace(/[^\w\s]/gi, '')
         payload.slug = slugify(str)
        payload.updated_at = firebase.firestore.FieldValue.serverTimestamp()
        payload.updated_by = {
           id: auth().currentUser.uid,
           name:
             this.state.auth.auth_user.first_name +
             ' ' +
             this.state.auth.auth_user.last_name,
           email: this.state.auth.auth_user.email,
        }
        await firestore.collection('stories').doc(payload.id).update(payload)
      } catch (error) {
        // throw error
        console.log('Error', error)
      }
    },
    async softDelete({ dispatch, getters }, payload) {
      try {
          const statsRef = firestore.collection('stories').doc('--stats--')
          const userRef = firestore.collection('users').doc(auth().currentUser.uid)
          const increment = firebase.firestore.FieldValue.increment(1)
          const decrement = firebase.firestore.FieldValue.increment(-1)
          const batch = firestore.batch()
          
          const storyRef = firestore.collection('stories').doc(payload.id)
          batch.update(storyRef, payload)
          batch.update(statsRef, { storyCount: decrement,trashStoryCount: increment }, { merge: true })
          batch.update(userRef, { storyCount: decrement,trashStoryCount: increment }, { merge: true })
          await batch.commit()

      } catch (error) {
        console.log(error)
      }
    },
    async updateChapter({ dispatch, getters }, payload) {
      try {
        payload.updated_at = firebase.firestore.FieldValue.serverTimestamp()
        payload.updated_by = {
          id: auth().currentUser.uid,
          name:
            this.state.auth.auth_user.first_name +
            ' ' +
            this.state.auth.auth_user.last_name,
          email: this.state.auth.auth_user.email,
        }
        await firestore.collection('stories').doc(payload.id).update(payload)

      } catch (error) {
        console.log(error, 'stooo')
      }
    },
    SendNotificationToFollowers({ dispatch }, payload){
      const followers = firestore.collection(`users/${auth().currentUser.uid}/followers`).get();
      followers.then((snapshot) => {
        if(snapshot.size > 0){
          snapshot.forEach(opt => {
            if (process.client) {
               const slug = payload.slug ? payload.slug : "updated-story";
               var link = window.location.origin + '/'+payload.id + '/' + slug;
            }
            this.$axios.$post('https://us-central1-hiinvoice builder.cloudfunctions.net/api/follow-notification', {
              link: link,
              id: opt.data().follower_id,
              name: this.state.auth.auth_user.first_name + ' ' + this.state.auth.auth_user.last_name
              }).catch(err =>{
                console.log('err',err)
              })
            
          })
        }
      })
    }
  },
  getters: {
    storiesList: (state) => {
      return state.stories ? state.stories : []
    },
    trashStoriesList: (state) => {
      return state.trashStories ? state.trashStories : []
    },
  },
}
