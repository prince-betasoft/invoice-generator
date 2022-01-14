<template>
  <v-row justify="center">
    <v-dialog v-model="isVisible" persistent max-width="600px">
      <v-card class="addnew-client">
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="8" lg="8" class="pl-0 py-0 pt-3">
                <label class="form-label-outside">Company/ Client Name</label>
                <v-text-field
                  v-model="senderModel.senderCompanyName"
                  required
                  outlined
                  hide-details="auto"
                  dense
                ></v-text-field>
                <div
                  v-if="$v.senderModel.senderCompanyName.$error"
                  style="color: red"
                  class=""
                >
                  <span v-if="!$v.senderModel.senderCompanyName.required"
                    >Please complete this mandatory field</span
                  >
                  <span v-if="!$v.senderModel.senderCompanyName.maxLength"
                    >You have reached your maximum limit of characters
                    allowed</span
                  >
                </div>
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="4" class="pl-0 py-0 pt-3">
                <label class="form-label-outside">Country</label>
                <v-select
                  v-model="senderModel.senderCountry"
                  :items="currencies"
                  outlined
                  item-text="name"
                  item-value="id"
                  hide-details="auto"
                ></v-select>
              </v-col>
              <v-col cols="12" lg="6" class="pl-0 py-0 pt-3">
                <label class="form-label-outside">First Name</label>
                <v-text-field
                  v-model="senderModel.senderFirstName"
                  outlined
                  required
                  hide-details="auto"
                  dense
                ></v-text-field>
                <div
                  v-if="$v.senderModel.senderFirstName.$error"
                  style="color: red"
                  class=""
                >
                  <span v-if="!$v.senderModel.senderEmail.required"
                    >Please complete this mandatory field</span
                  >
                  <span v-if="!$v.senderModel.senderFirstName.maxLength"
                    >You have reached your maximum limit of characters
                    allowed</span
                  >
                </div>
              </v-col>

              <v-col cols="12" lg="6" class="pl-0 py-0 pt-3">
                <label class="form-label-outside">Last Name</label>
                <v-text-field
                  v-model="senderModel.senderLastName"
                  outlined
                  required
                  hide-details="auto"
                  dense
                ></v-text-field>
                <div
                  v-if="$v.senderModel.senderLastName.$error"
                  style="color: red"
                  class=""
                >
                  <span v-if="!$v.senderModel.senderEmail.required"
                    >Please complete this mandatory field</span
                  >
                  <span v-if="!$v.senderModel.senderLastName.maxLength"
                    >You have reached your maximum limit of characters
                    allowed</span
                  >
                </div>
              </v-col>
              <v-col cols="12" lg="6" class="pl-0 py-0 pt-3">
                <div class="registraction-inpu-modal">
                  <i class="fa fa-pencil"></i>
                  <input
                    type="value"
                    class="form-control"
                    v-model="senderModel.taxRegistrationNumber"
                    placeholder="Tax Registration Number"
                    hide-details="auto"
                  />
                  <div
                    v-if="$v.senderModel.taxRegistrationNumber.$error"
                    style="color: red"
                    class=""
                  >
                    <span v-if="!$v.senderModel.taxRegistrationNumber.maxLength"
                      >You have reached your maximum limit of characters
                      allowed</span
                    >
                  </div>
                </div>
                <v-text-field
                  outlined
                  class="form-control"
                  v-model="senderModel.senderTaxNumber"
                  hide-details="auto"
                ></v-text-field>
                <div
                  v-if="$v.senderModel.senderTaxNumber.$error"
                  style="color: red"
                  class=""
                >
                  <span v-if="!$v.senderModel.senderTaxNumber.maxLength"
                    >You have reached your maximum limit of characters
                    allowed</span
                  >
                </div>
              </v-col>
              <v-col cols="12" lg="6" class="pl-0 py-0 pt-3">
                <label class="form-label-outside">Email Address</label>
                <v-text-field
                  v-model="senderModel.senderEmail"
                  required
                  outlined
                  hide-details="auto"
                  dense
                ></v-text-field>
                <div
                  v-if="$v.senderModel.senderEmail.$error"
                  style="color: red"
                  class=""
                >
                  <span v-if="!$v.senderModel.senderEmail.required"
                    >Please complete this mandatory field</span
                  >
                  <span v-if="!$v.senderModel.senderEmail.maxLength"
                    >You have reached your maximum limit of characters
                    allowed</span
                  >
                </div>
              </v-col>

              <v-col cols="12" lg="6" class="pl-0 py-0 pt-3">
                <label class="form-label-outside">Address Line 1</label>
                <v-text-field
                  v-model="senderModel.senderAddress1"
                  outlined
                  hide-details="auto"
                  dense
                ></v-text-field>
                <div
                  v-if="$v.senderModel.senderAddress1.$error"
                  style="color: red"
                  class=""
                >
                  <span v-if="!$v.senderModel.senderAddress1.maxLength"
                    >You have reached your maximum limit of characters
                    allowed</span
                  >
                </div>
              </v-col>
              <v-col cols="12" lg="6" class="pl-0 py-0 pt-3">
                <label class="form-label-outside">Address Line 2</label>
                <v-text-field
                  v-model="senderModel.senderAddress2"
                  outlined
                  hide-details="auto"
                  dense
                ></v-text-field>
                <div
                  v-if="$v.senderModel.senderAddress2.$error"
                  style="color: red"
                  class=""
                >
                  <span v-if="!$v.senderModel.senderAddress2.maxLength"
                    >You have reached your maximum limit of characters
                    allowed</span
                  >
                </div>
              </v-col>
              <v-col cols="12" lg="6" class="pl-0 py-0 pt-3">
                <label class="form-label-outside">Phone</label>
                <v-text-field
                  v-model="senderModel.senderPhone"
                  outlined
                  onselectstart="return false"
                  onpaste="return false;"
                  onCopy="return false"
                  onCut="return false"
                  onDrag="return false"
                  onDrop="return false"
                  autocomplete="off"
                  hide-details="auto"
                  dense
                  @keypress="onlyNumbers"
                ></v-text-field>
                <div
                  v-if="$v.senderModel.senderPhone.$error"
                  style="color: red"
                  class=""
                >
                  <span v-if="!$v.senderModel.senderPhone.maxLength"
                    >You have reached your maximum limit of characters
                    allowed</span
                  >
                </div>
              </v-col>
              <v-col cols="12" lg="6" class="pl-0 py-0 pt-3">
                <label class="form-label-outside">Website</label>
                <v-text-field
                  v-model="senderModel.senderWebsite"
                  outlined
                  hide-details="auto"
                  dense
                ></v-text-field>
                <div
                  v-if="$v.senderModel.senderWebsite.$error"
                  style="color: red"
                  class=""
                >
                  <span v-if="!$v.senderModel.senderWebsite.maxLength"
                    >You have reached your maximum limit of characters
                    allowed</span
                  >
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="btn-primary mr-2"
            text
            @click="onSubmit"
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
export default {
  currencyJson: currencyJson,
  props: {
    ShowAddSenderModal: {
      required: false,
      default: false,
      type: Boolean,
    },
  },
  data: () => ({
    countryCurrencySymbol: {
      currencies: [],
    },
    currencies: [],
    senderModel: {
      senderCompanyName: "",
      senderCountry: "",
      senderFirstName: "",
      senderLastName: "",
      taxRegistrationNumber: "",
      senderTaxNumber: "",
      senderEmail: "",
      senderAddress1: "",
      senderAddress2: "",
      senderPhone: "",
      senderWebsite: "",
      isDeleted: false,
      slug: "",
    },
    loading: false,
  }),
  validations: {
    senderModel: {
      senderCompanyName: { required, maxLength: maxLength(50) },
      senderFirstName: { required, maxLength: maxLength(50) },
      senderLastName: { required, maxLength: maxLength(50) },
      taxRegistrationNumber: { maxLength: maxLength(50) },
      senderTaxNumber: { maxLength: maxLength(50) },
      senderEmail: { required, maxLength: maxLength(200) },
      senderAddress1: { maxLength: maxLength(200) },
      senderAddress2: { maxLength: maxLength(200) },
      senderPhone: { maxLength: maxLength(16) },
      senderWebsite: { maxLength: maxLength(200) },
    },
  },
  computed: {
    isVisible: {
      get() {
        return this.ShowAddSenderModal;
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
    onlyNumbers(event) {
      let keyCode = event.keyCode ? event.keyCode : event.which;
      if (keyCode < 48 || keyCode > 57) {
        event.preventDefault();
      }
    },
    closeModal() {
      (this.senderModel.senderCompanyName = ""),
        (this.senderModel.senderFirstName = ""),
        (this.senderModel.senderLastName = ""),
        (this.senderModel.taxRegistrationNumber = ""),
        (this.senderModel.senderTaxNumber = ""),
        (this.senderModel.senderEmail = ""),
        (this.senderModel.senderAddress1 = ""),
        (this.senderModel.senderAddress2 = ""),
        (this.senderModel.senderPhone = ""),
        (this.senderModel.senderWebsite = ""),
        this.$v.senderModel.$reset(),
        this.$emit("close");
    },
    ...mapActions({
      addInvoiceDetails: "modules/invoice/addInvoiceDetails",
    }),
    async onSubmit() {
      this.$v.$touch();
      if (this.$v.senderModel.$error) return;
      this.loading = true;
      try {
        this.senderModel.id = "sender-" + nanoid();
        await this.addInvoiceDetails(this.senderModel);
        this.closeModal();
        this.$swal.fire({
          toast: true,
          position: "top-end",
          title: "Sender added successfully",
          icon: "success",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error, "myerror");
      }
    },
  },
  mounted() {
    this.currencies = currencyJson;
  },
};
</script>
