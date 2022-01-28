<template>
  <v-row justify="center">
    <v-dialog v-model="isVisible" persistent max-width="350px">
      <v-card class="addnew-client">
        <v-card-text>
          <v-container>
            <v-form @click="onSubmitPaymentDetails">
              <v-row>
                <v-col cols="12" lg="12" class="pl-0 py-0 pt-3">
                  <div class="registraction-inpu-modal">
                    <i class="fa fa-pencil"></i>
                    <input
                      type="value"
                      class="form-control"
                      v-model="paymentDetailsModal.paymentTypeHeading"
                      placeholder="Payment Type"
                      hide-details="auto"
                    />
                    <div
                      v-if="paymentDetailsModal.paymentTypeHeading.$error"
                      style="color: red"
                      class=""
                    >
                      <span
                        v-if="!paymentDetailsModal.paymentTypeHeading.maxLength"
                        >You have reached your maximum limit of characters
                        allowed</span
                      >
                    </div>
                  </div>
                  <v-text-field
                    outlined
                    class="form-control"
                    v-model="paymentDetailsModal.paymentType"
                    hide-details="auto"
                  ></v-text-field>
                  <div
                    v-if="paymentDetailsModal.paymentType.$error"
                    style="color: red"
                    class=""
                  >
                    <span v-if="!paymentDetailsModal.paymentType.maxLength"
                      >You have reached your maximum limit of characters
                      allowed</span
                    >
                  </div>
                </v-col>
                <v-col cols="12" lg="12" class="pl-0 py-0 pt-3">
                  <div class="registraction-inpu-modal">
                    <i class="fa fa-pencil"></i>
                    <input
                      type="value"
                      class="form-control"
                      v-model="paymentDetailsModal.paymentDetailsHeading"
                      placeholder="Payment Details"
                      hide-details="auto"
                    />
                    <div
                      v-if="paymentDetailsModal.paymentDetailsHeading.$error"
                      style="color: red"
                      class=""
                    >
                      <span
                        v-if="
                          !paymentDetailsModal.paymentDetailsHeading.maxLength
                        "
                        >You have reached your maximum limit of characters
                        allowed</span
                      >
                    </div>
                  </div>
                  <v-textarea
                    outlined
                    rows="2"
                    class="form-control"
                    v-model="paymentDetailsModal.paymentDetails"
                    hide-details="auto"
                  ></v-textarea>
                  <div
                    v-if="paymentDetailsModal.paymentDetails.$error"
                    style="color: red"
                    class=""
                  >
                    <span v-if="!paymentDetailsModal.paymentDetails.maxLength"
                      >You have reached your maximum limit of characters
                      allowed</span
                    >
                  </div>
                </v-col>
                <v-col cols="12" lg="12">
                  <label class="form-label-outside">Display Location</label>
                  <v-select
                    :items="displayLocation"
                    v-model="paymentDetailsModal.displayLocation"
                    outlined
                    item-text="name"
                    item-value="id"
                    hide-details="auto"
                  ></v-select>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="btn-primary mr-2"
            text
            @click="onSubmitPaymentDetails"
            :loading="loading"
          >
            Save
          </v-btn>
          <v-btn class="btn-secondary" text @click="closeModal"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { required, maxLength } from "vuelidate/lib/validators";
import { auth } from "~/plugins/firebase";
import { mapActions, mapGetters } from "vuex";
import currencyJson from "~/data/currencies.json";
import Toaster from "~/services/sweetToaster.js";

export default {
  currencyJson: currencyJson,
  props: {
    addPaymentDetailsModal: {
      required: false,
      default: false,
      type: Boolean,
    },
  },
  data: () => ({
    paymentDetailsModal: {
      paymentTypeHeading: "",
      paymentType: "",
      paymentDetailsHeading: "",
      paymentDetails: "",
      displayLocation: "Description",
      isDeleted: false,
    },
    displayLocation: [
      {
        id: "Sender",
        name: "Sender",
      },
      {
        id: "Receiver",
        name: "Receiver",
      },
      {
        id: "Description",
        name: "Description",
      },
      {
        id: "Terms",
        name: "Terms",
      },
    ],
    loading: false,
  }),
  validations: {
    paymentDetailsModal: {
      paymentTypeHeading: { maxLength: maxLength(50) },
      paymentType: { maxLength: maxLength(50) },
      paymentDetailsHeading: { maxLength: maxLength(50) },
      paymentDetails: { maxLength: maxLength(200) },
    },
  },
  computed: {
    isVisible: {
      get() {
        return this.addPaymentDetailsModal;
      },
      set() {
        return false;
      },
    },
    ...mapGetters({
      current_user: "auth/getAuthUser",
    }),
  },
  methods: {
    closeModal() {
      this.$emit("fetchPaymentDetails");
      this.$emit("close");
    },
    ...mapActions({
      addPaymentDetails: "modules/invoice/addPaymentDetails",
    }),
    async onSubmitPaymentDetails() {
      this.loading = true;
      try {
        this.paymentDetailsModal.id = auth().currentUser.uid;
        await this.addPaymentDetails(this.paymentDetailsModal);
        this.closeModal();
        Toaster.success("Payment details added successfully!", "success");
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error, "myerror");
      }
    },
  },
};
</script>
