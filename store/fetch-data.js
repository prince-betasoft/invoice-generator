import { firestore } from "~/plugins/firebase";
export const strict = false;
export default {
  namespaced: true,
  state() {
    return {
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
    async fetchAllSenderDetails({ commit, dispatch, rootState }) {
      try {
        await firestore
          .collection("invoiceDetails")
          .get()
          .then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
              ...doc.data(),
            }));
            commit("sender_details", data);
          });
      } catch (error) {
        console.log("Error", error);
      }
    },
    async fetchAllClientDetails({ commit, dispatch, rootState }) {
      try {
        await firestore
          .collection("invoiceDetails")
          .get()
          .then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
              ...doc.data(),
            }));
            commit("client_details", data);
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
