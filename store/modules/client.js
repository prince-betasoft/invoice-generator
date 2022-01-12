import { auth, firebase, firestore } from "~/plugins/firebase";
import { nanoid } from "nanoid";
import slugify from "slugify";
export const strict = false;
export default {
  namespaced: true,
  state() {
    return {
      clients: [],
    };
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    async addClient({ dispatch, getters }, payload) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      try {
        payload.user_id = auth().currentUser.uid;
        payload.updated_by = {
          id: auth().currentUser.uid,
          name:
            this.state.auth.auth_user.first_name +
            " " +
            this.state.auth.auth_user.last_name,
          email: this.state.auth.auth_user.email,
        };
        payload.created_at = timestamp;
        payload.updated_at = timestamp;
        var str = payload.clientModel;
        str = str;
        var db = firebase.firestore();
        db.collection("clients")
          .add(payload)
          .then(() => {
            console.log("Client Added Successfully!", payload);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log("Error", error);
      }
    },
    async updateClient({ dispatch, getters }, payload) {
      try {
        var str = payload.title.toLowerCase();
        str = str.replace(/[^\w\s]/gi, "");
        payload.slug = slugify(str);
        payload.updated_at = firebase.firestore.FieldValue.serverTimestamp();
        payload.updated_by = {
          id: auth().currentUser.uid,
          name:
            this.state.auth.auth_user.first_name +
            " " +
            this.state.auth.auth_user.last_name,
          email: this.state.auth.auth_user.email,
        };
        await firestore.collection("clients").doc(payload.id).update(payload);
      } catch (error) {
        // throw error
        console.log("Error", error);
      }
    },
    async softDelete({ dispatch, getters }, payload) {
      try {
        const statsRef = firestore.collection("clients").doc("--stats--");
        const userRef = firestore
          .collection("users")
          .doc(auth().currentUser.uid);
        const increment = firebase.firestore.FieldValue.increment(1);
        const decrement = firebase.firestore.FieldValue.increment(-1);
        const batch = firestore.batch();

        const clientRef = firestore.collection("clients").doc(payload.id);
        batch.update(clientRef, payload);
        batch.update(
          statsRef,
          { clientCount: decrement, trashClientCount: increment },
          { merge: true }
        );
        batch.update(
          userRef,
          { clientCount: decrement, trashClientCount: increment },
          { merge: true }
        );
        await batch.commit();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
