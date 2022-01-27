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
        const statsRef = firestore
          .collection("invoiceDetails")
          .doc("--stats--");
        const userRef = firestore
          .collection("users")
          .doc(auth().currentUser.uid);
        const batch = firestore.batch();
        const invoiceRef = firestore
          .collection("invoiceDetails")
          .doc(payload.id);
        batch.set(invoiceRef, payload);
        await batch.commit();
      } catch (error) {
        console.log("Error", error);
      }
    },
    async fetchAllSenderDetails({ commit }) {
      try {
        await firestore
          .collection("invoiceDetails")
          .where("user_id", "==", this.state.auth.auth_user.id)
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

    // async fetchAllSenderDetails({ commit }) {
    //   try {
    //     await firestore
    //       .collection("invoiceDetails")
    //       .doc(this.senderModel)
    //       .get()
    //       .then((snapshot) => {
    //         const data = snapshot.data();
    //         commit("sender_details", data);
    //         console.log("sender details here", data);
    //       });
    //   } catch (error) {
    //     console.log("Error", error);
    //   }
    // },
    async fetchAllClientDetails({ commit }, payload) {
      try {
        await firestore
          .collection("invoiceDetails")
          .where("user_id", "==", this.state.auth.auth_user.id)
          .get()
          .then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            commit("client_details");
            console.log("client here", data);
            console.log("client id", data[0].id);
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
          console.log("ur here23");
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
