<template>
  <v-row justify="center">
    <v-dialog v-model="isVisible" persistent max-width="600px">
      <v-card class="addnew-invoice">
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-form
          ref="sender_form"
          v-model="valid"
          lazy-validation
          @submit.prevent="UpdateProfile"
        >
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" lg="6" class="pl-0 py-0 pt-3">
                  <label class="form-label-outside">First Name*</label>
                  <v-text-field
                    outlined
                    required
                    hide-details="auto"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6" class="pl-0 py-0 pt-3">
                  <label class="form-label-outside">Last Name*</label>
                  <v-text-field
                    outlined
                    required
                    hide-details="auto"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <small>*indicates required field</small>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="btn-secondary mr-2" @click="closeModal">
              Close
            </v-btn>
            <v-btn class="btn-primary" @click="UpdateProfile"> Update </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { auth, storage, firestore, firebase } from "~/plugins/firebase";
import Toaster from "~/services/sweetToaster.js";

export default {
  props: {
    ShowEditSenderModal: {
      default: false,
      type: Boolean,
    },
    senderData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      uploadValue: 0,
      uploadPercentage: 0,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 25) || "Name must be less than 25 characters",
      ],
      valid: true,
    };
  },
  computed: {
    isVisible: {
      get() {
        return this.ShowEditSenderModal;
      },
      set() {
        return false;
      },
    },
    user_data() {
      return this.senderData;
    },
  },

  methods: {
    closeModal() {
      this.$emit("close");
    },
    async UpdateProfile() {
      if (this.$refs.sender_form.validate()) {
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        let payload = {
          senderFirstName: this.user_data,
          updated_at: timestamp,
        };
        try {
          await firestore
            .collection("invoiceDetails")
            .doc(auth().currentUser.uid)
            .update(payload);
          this.$store.dispatch("auth/current_user", auth().currentUser.uid);
          this.closeModal();
          Toaster.success("Sender updated successfully", "success");
        } catch (error) {
          this.closeModal();
          Toaster.error(
            "Something went wrong. Please try again later",
            "error"
          );
        }
      }
    },
  },
};
</script>
