import { auth, firebase, firestore } from "~/plugins/firebase";

export const strict = false;
export default {
  namespaced: true,
  state() {
    return {
      invoices: [],
      fetch_details: [],
      fetch_client_details: [],
    };
  },
  mutations: {
    sender_details(state, payload) {
      state.fetch_details = payload;
    },
    client_details(state, payload) {
      state.fetch_client_details = payload;
    },
  },

  actions: {
    async addInvoiceDetails({ dispatch, getters }, payload) {
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
        var str = payload.invoiceTypeModel;
        var str = payload.paymentDetailsModal;
        var str = payload.senderModel;
        var str = payload.clientModel;
        var str = payload.customFieldOne;
        var str = payload.customFieldTwo;
        var str = payload.customFieldThree;
        str = str;
        var db = firebase.firestore();
        db.collection("invoiceDetails")
          .add(payload)
          .then(() => {
            console.log("Data Added Successfully!", payload);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log("Error", error);
      }
    },
    async fetchAllSenderDetails({ commit }) {
      try {
        await firestore
          .collection("invoiceDetails")
          .get()
          .then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            commit("sender_details", data);
            console.log("sender here", data);
          });
      } catch (error) {
        console.log("Error", error);
      }
    },
    async fetchAllClientDetails({ commit }, payload) {
      //  const id = auth().currentUser.uid;
      try {
        await firestore
          .collection("invoiceDetails")
          .where("user_id", "==", this.state.auth.auth_user.id)
          // .doc(id)
          // .doc(auth().currentUser.uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            commit("client_details");
            console.log("client here", data);
            console.log("client id", data[0].id);
            console.log("details", this.state.auth.auth_user.id);
          });
      } catch (error) {
        console.log("Error", error);
      }
    },
    async sender_details({ commit, dispatch }, payload) {
      await firestore
        .collection("invoiceDetails")
        .doc(payload)
        .get()
        .then((snapshot) => {
          commit("sender_details", snapshot.data());
        });
    },
    async client_details({ commit, dispatch }, payload) {
      await firestore
        .collection("invoiceDetails")
        .doc(payload)
        .get()
        .then((snapshot) => {
          commit("client_details", snapshot.data());
        });
    },
  },
  getters: {
    getSenderDetails: (state) => {
      return state.fetch_details;
    },
    getClientDetails: (state) => {
      return state.fetch_client_details;
    },
  },
};
