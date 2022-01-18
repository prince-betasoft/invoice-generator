import { auth, firestore, firebase } from "~/plugins/firebase";

export default {
  namespaced: true,
  state() {
    return {
      fetch_details: {},
    };
  },
  mutations: {
    sender_details(state, payload) {
      state.fetch_details = payload;
    },
  },
  actions: {
    async sender_details({ commit, dispatch }, payload) {
      await firestore
        .collection("invoiceDetails")
        .doc(payload)
        .get()
        .then((snapshot) => {
          commit("sender_details", snapshot.data());
        });
    },
  },
  getters: {
    getSenderDetails(state) {
      console.log("u r here");
      return state.fetch_details;
    },
  },
};
