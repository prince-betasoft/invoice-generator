import { auth, firebase, firestore } from "~/plugins/firebase";

export const strict = false;
export default {
  namespaced: true,
  state() {
    return {
      invoices: [],
      fetch_sender_details: [],
      fetch_client_details: [],
      fetch_invoice_type_details: [],
      fetch_custom_field_one_details: [],
      fetch_custom_field_two_details: [],
      fetch_custom_field_three_details: [],
      fetch_payment_details: [],
    };
  },
  mutations: {
    sender_details(state, payload) {
      state.fetch_sender_details = payload;
    },
    client_details(state, payload) {
      state.fetch_client_details = payload;
    },
    payment_details(state, payload) {
      state.fetch_payment_details = payload;
    },
    invoice_type_details(state, payload) {
      state.fetch_invoice_type_details = payload;
    },
    custom_field_one_details(state, payload) {
      state.fetch_custom_field_one_details = payload;
    },
    custom_field_two_details(state, payload) {
      state.fetch_custom_field_two_details = payload;
    },
    custom_field_three_details(state, payload) {
      state.fetch_custom_field_three_details = payload;
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
    async addCustomFieldOneDetails({ dispatch, getters }, payload) {
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
        var str = payload.customFieldOne;
        str = str;
        const statsRef = firestore
          .collection("customFieldOneDetails")
          .doc("--stats--");
        const userRef = firestore
          .collection("users")
          .doc(auth().currentUser.uid);
        const batch = firestore.batch();
        const invoiceRef = firestore
          .collection("customFieldOneDetails")
          .doc(payload.id);
        batch.set(invoiceRef, payload);
        await batch.commit();
      } catch (error) {
        console.log("Error", error);
      }
    },
    async addCustomFieldTwoDetails({ dispatch, getters }, payload) {
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
        var str = payload.customFieldTwo;
        str = str;
        const statsRef = firestore
          .collection("customFieldTwoDetails")
          .doc("--stats--");
        const userRef = firestore
          .collection("users")
          .doc(auth().currentUser.uid);
        const batch = firestore.batch();
        const invoiceRef = firestore
          .collection("customFieldTwoDetails")
          .doc(payload.id);
        batch.set(invoiceRef, payload);
        await batch.commit();
      } catch (error) {
        console.log("Error", error);
      }
    },
    async addCustomFieldThreeDetails({ dispatch, getters }, payload) {
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
        var str = payload.customFieldTwo;
        str = str;
        const statsRef = firestore
          .collection("customFieldThreeDetails")
          .doc("--stats--");
        const userRef = firestore
          .collection("users")
          .doc(auth().currentUser.uid);
        const batch = firestore.batch();
        const invoiceRef = firestore
          .collection("customFieldThreeDetails")
          .doc(payload.id);
        batch.set(invoiceRef, payload);
        await batch.commit();
      } catch (error) {
        console.log("Error", error);
      }
    },
    async addPaymentDetails({ dispatch, getters }, payload) {
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
        var str = payload.paymentDetailsModal;
        str = str;
        const statsRef = firestore
          .collection("paymentDetails")
          .doc("--stats--");
        const userRef = firestore
          .collection("users")
          .doc(auth().currentUser.uid);
        const batch = firestore.batch();
        const invoiceRef = firestore
          .collection("paymentDetails")
          .doc(payload.id);
        batch.set(invoiceRef, payload);
        await batch.commit();
      } catch (error) {
        console.log("Error", error);
      }
    },
    async addInvoiceTypeDetails({ dispatch, getters }, payload) {
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
        str = str;
        const statsRef = firestore
          .collection("invoiceTypeDetails")
          .doc("--stats--");
        const userRef = firestore
          .collection("users")
          .doc(auth().currentUser.uid);
        const batch = firestore.batch();
        const invoiceRef = firestore
          .collection("invoiceTypeDetails")
          .doc(payload.id);
        batch.set(invoiceRef, payload);
        await batch.commit();
      } catch (error) {
        console.log("Error", error);
      }
    },
    async addSenderDetails({ dispatch, getters }, payload) {
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
        var str = payload.senderModel;
        str = str;
        const statsRef = firestore.collection("senderDetails").doc("--stats--");
        const userRef = firestore
          .collection("users")
          .doc(auth().currentUser.uid);
        const batch = firestore.batch();
        const invoiceRef = firestore
          .collection("senderDetails")
          .doc(payload.id);
        batch.set(invoiceRef, payload);
        await batch.commit();
      } catch (error) {
        console.log("Error", error);
      }
    },
    async addClientDetails({ dispatch, getters }, payload) {
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
        const statsRef = firestore.collection("clientDetails").doc("--stats--");
        const userRef = firestore
          .collection("users")
          .doc(auth().currentUser.uid);
        const batch = firestore.batch();
        const invoiceRef = firestore
          .collection("clientDetails")
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
          .collection("senderDetails")
          .doc(auth().currentUser.uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            commit("sender_details", data);
          });
      } catch (error) {
        console.log("Error", error);
      }
    },

    async fetchAllPaymentDetails({ commit }) {
      try {
        await firestore
          .collection("paymentDetails")
          .doc(auth().currentUser.uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            commit("payment_details", data);
          });
      } catch (error) {
        console.log("Error", error);
      }
    },
    async fetchAllInvoiceTypeDetails({ commit }) {
      try {
        await firestore
          .collection("invoiceTypeDetails")
          .doc(auth().currentUser.uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            commit("invoice_type_details", data);
          });
      } catch (error) {
        console.log("Error", error);
      }
    },
    async fetchAllClientDetails({ commit }) {
      try {
        await firestore
          .collection("clientDetails")
          .doc(auth().currentUser.uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            commit("client_details", data);
          });
      } catch (error) {
        console.log("Error", error);
      }
    },
    async fetchCustomFieldOneDetails({ commit }) {
      try {
        await firestore
          .collection("customFieldOneDetails")
          .doc(auth().currentUser.uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            commit("custom_field_one_details", data);
          });
      } catch (error) {
        console.log("Error", error);
      }
    },

    async fetchCustomFieldTwoDetails({ commit }) {
      try {
        await firestore
          .collection("customFieldTwoDetails")
          .doc(auth().currentUser.uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            commit("custom_field_two_details", data);
          });
      } catch (error) {
        console.log("Error", error);
      }
    },
    async fetchCustomFieldThreeDetails({ commit }) {
      try {
        await firestore
          .collection("customFieldThreeDetails")
          .doc(auth().currentUser.uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            commit("custom_field_three_details", data);
          });
      } catch (error) {
        console.log("Error", error);
      }
    },
  },
  getters: {
    getSenderDetails: (state) => {
      return state.fetch_sender_details;
    },
    getPaymentDetails: (state) => {
      return state.fetch_payment_details;
    },
    getInvoiceTypeDetails: (state) => {
      return state.fetch_invoice_type_details;
    },
    getCustomFieldOneDetails: (state) => {
      return state.fetch_custom_field_one_details;
    },
    getCustomFieldTwoDetails: (state) => {
      return state.fetch_custom_field_two_details;
    },
    getCustomFieldThreeDetails: (state) => {
      return state.fetch_custom_field_three_details;
    },
    getClientDetails: (state) => {
      return state.fetch_client_details;
    },
  },
};
