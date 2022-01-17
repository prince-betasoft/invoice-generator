import { auth, firebase, firestore } from "~/plugins/firebase";
export const strict = false;
export default {
  namespaced: true,
  state() {
    return {
      invoices: [],
    };
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
  },
};
