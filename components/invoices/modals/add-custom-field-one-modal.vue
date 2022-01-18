<template>
  <v-row justify="center">
    <v-dialog v-model="isVisible" persistent max-width="350px">
      <v-card class="addnew-client">
        <v-card-text>
          <v-container>
            <v-form @click="onSubmitFieldOne">
              <v-row>
                <v-col cols="12" lg="12" class="pl-0 py-0 pt-3">
                  <label class="form-label-outside">Field Name</label>

                  <v-text-field
                    outlined
                    class="form-control"
                    v-model="customFieldOne.fieldName"
                    hide-details="auto"
                  ></v-text-field>
                  <div
                    v-if="customFieldOne.fieldName.$error"
                    style="color: red"
                    class=""
                  >
                    <span v-if="!customFieldOne.fieldName.maxLength"
                      >You have reached your maximum limit of characters
                      allowed</span
                    >
                  </div>
                </v-col>

                <v-col cols="12" lg="12" class="pl-0 py-0 pt-3">
                  <label class="form-label-outside">Value</label>

                  <v-text-field
                    outlined
                    class="form-control"
                    v-model="customFieldOne.fieldValue"
                    hide-details="auto"
                    required
                  ></v-text-field>
                  <div
                    v-if="customFieldOne.fieldValue.$error"
                    style="color: red"
                    class=""
                  >
                    <span v-if="!$v.customFieldOne.fieldValue.required"
                      >Please complete this mandatory field</span
                    >
                    <span v-if="!customFieldOne.fieldValue.maxLength"
                      >You have reached your maximum limit of characters
                      allowed</span
                    >
                  </div>
                </v-col>
                <v-col cols="12" lg="12">
                  <label class="form-label-outside">Display Location</label>
                  <v-select
                    :items="displayLocation"
                    v-model="customFieldOne.displayLocation"
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
            @click="onSubmitFieldOne"
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
import { nanoid } from "nanoid";
import { mapActions, mapGetters } from "vuex";
import currencyJson from "~/data/currencies.json";
import Toaster from "~/services/sweetToaster.js";

export default {
  currencyJson: currencyJson,
  props: {
    addCustomFieldOneModal: {
      required: false,
      default: false,
      type: Boolean,
    },
  },
  data: () => ({
    customFieldOne: {
      fieldName: "",
      fieldValue: "",
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
    customFieldOne: {
      fieldName: { maxLength: maxLength(50) },
      fieldValue: { required, maxLength: maxLength(50) },
    },
  },
  computed: {
    isVisible: {
      get() {
        return this.addCustomFieldOneModal;
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
      this.$emit("close");
    },
    ...mapActions({
      addInvoiceDetails: "modules/invoice/addInvoiceDetails",
    }),
    async onSubmitFieldOne() {
      this.loading = true;
      try {
        this.customFieldOne.id = "customFieldOne-" + nanoid();
        await this.addInvoiceDetails(this.customFieldOne);
        this.closeModal();
        Toaster.success("Details added successfully!", "success");
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error, "myerror");
      }
    },
  },
};
</script>
