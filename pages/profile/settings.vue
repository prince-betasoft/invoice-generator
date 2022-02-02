<template>
  <v-main class="wrapper">
    <v-card class="mx-auto" max-width="800">
      <v-card-text>
        <div>
          <v-container>
            <v-row>
              <v-col cols="12">
                <label class="form-label-outside"
                  ><h2 style="text-align: left">I am</h2></label
                >
                <v-radio-group v-model="senderModel.user_type" row>
                  <v-radio label="an individual" value="Individual"></v-radio>
                  <v-radio label="a company" value="Company"></v-radio>
                </v-radio-group>
              </v-col>
              <v-card-actions class="sender-btnwrapper">
                <v-btn
                  class="btn-primary mr-2"
                  text
                  @click="onSubmitUserType"
                  :loading="loading"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-row>
          </v-container>

          <br />
          <hr />
          <br />
          <label class="form-label-outside"
            ><h2 style="text-align: left">Invoice Sender Details</h2></label
          >
          <v-container>
            <v-form lazy-validation @submit.prevent="onSubmit">
              <v-row class="invoice-box">
                <v-col cols="12" sm="6" md="8" lg="8">
                  <label class="form-label-outside">Sender / Name</label>
                  <v-text-field
                    v-model="senderModel.senderName"
                    required
                    outlined
                    maxlength="52"
                    hide-details="auto"
                    dense
                  ></v-text-field>
                  <div
                    v-if="$v.senderModel.senderName"
                    style="color: red"
                    class=""
                  >
                    <span v-if="!$v.senderModel.senderName.maxLength"
                      >You have reached your maximum limit of characters
                      allowed</span
                    >
                  </div>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="4">
                  <div class="country-selectb">
                    <label class="form-label-outside">Country*</label>
                    <v-select
                      v-model="senderModel.senderCountry"
                      :items="countries"
                      outlined
                      required
                      class="form-control"
                      item-text="name"
                      item-value="id"
                      hide-details="auto"
                    ></v-select>
                    <div
                      v-if="$v.senderModel.senderCountry.$error"
                      style="color: red"
                      class=""
                    >
                      <span v-if="!$v.senderModel.senderCountry.required"
                        >Please complete this mandatory field</span
                      >
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" lg="6">
                  <label class="form-label-outside">Address 1</label>
                  <v-text-field
                    outlined
                    class="form-control"
                    maxlength="210"
                    v-model="senderModel.senderAddress1"
                    hide-details="auto"
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
                <v-col cols="12" lg="6">
                  <label class="form-label-outside">Email*</label>
                  <v-text-field
                    outlined
                    required
                    class="form-control"
                    maxlength="210"
                    v-model="senderModel.senderEmail"
                    hide-details="auto"
                    :rules="emailRules"
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
                <v-col cols="12" lg="6">
                  <label class="form-label-outside">Address 2</label>
                  <v-text-field
                    outlined
                    maxlength="210"
                    class="form-control"
                    v-model="senderModel.senderAddress2"
                    hide-details="auto"
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

                <v-col cols="12" lg="6">
                  <label class="form-label-outside">Phone</label>
                  <v-text-field
                    v-model="senderModel.senderPhone"
                    outlined
                    maxlength="18"
                    onselectstart="return false"
                    onpaste="return false;"
                    onCopy="return false"
                    onCut="return false"
                    onDrag="return false"
                    onDrop="return false"
                    autocomplete="off"
                    class="form-control"
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
                      >Phone Number must be less than 16 characters</span
                    >
                  </div>
                </v-col>
                <v-col cols="12" lg="6">
                  <label class="form-label-outside">Website</label>
                  <v-text-field
                    outlined
                    maxlength="210"
                    class="form-control"
                    v-model="senderModel.senderWebsite"
                    hide-details="auto"
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
                <v-col cols="12" lg="6">
                  <label class="form-label-outside">
                    PAN / Tax Registration Number</label
                  >
                  <v-text-field
                    outlined
                    class="form-control"
                    maxlength="52"
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
                <v-card-actions class="sender-btnwrapper">
                  <v-btn
                    class="btn-primary mr-2"
                    text
                    @click="onSubmit"
                    :loading="loading"
                  >
                    Save Sender Details
                  </v-btn>
                </v-card-actions>
              </v-row>
            </v-form>
          </v-container>
          <br />
          <hr />
          <br />
          <label class="form-label-outside"
            ><h2 style="text-align: left">Invoice Screen Logo</h2></label
          >
          <v-container fluid>
            <v-row>
              <v-col cols="8">
                <p style="text-align: left">
                  Upload a logo to be shown on your invoices. If your new logo
                  doesn't show up, please clear your cache and refresh the page.
                </p>
              </v-col>

              <v-form @click="onSubmitInvoiceLogo">
                <div v-if="imageData == null" style="padding-bottom: 0px">
                  <div>
                    <v-btn
                      title="Add New select a file"
                      @click="select_file"
                      class="placeholder"
                      color="primary"
                    >
                      Choose Invoice Logo
                    </v-btn>
                    <input
                      type="file"
                      ref="input1"
                      style="display: none"
                      @change="previewImage"
                      accept="image/*"
                      :disabled="dialog"
                      :loading="dialog"
                      class="white--text"
                      color="purple darken-2"
                      @click="dialog = true"
                    />
                  </div>
                </div>
                <div v-else>
                  <div v-if="imageData != null">
                    <div v-if="isSpinner" class="pt-12 pb-12 text-center">
                      <v-progress-circular
                        indeterminate
                        color="primary"
                      ></v-progress-circular>
                    </div>
                    <v-img
                      class="preview"
                      style="width: 100%; object-fit: cover"
                      height="200px"
                      v-if="senderModel.invoice_logo"
                      :src="senderModel.invoice_logo"
                    ></v-img>
                    <v-btn
                      title="Remove logo"
                      @click="reset"
                      class="placeholder"
                      color="primary"
                    >
                      Remove Logo
                    </v-btn>
                    <br />
                  </div>
                </div>
              </v-form>
            </v-row>
          </v-container>
        </div>
      </v-card-text>
    </v-card>
  </v-main>
</template>
<script>
import { auth, storage, firestore, firebase } from "~/plugins/firebase";
import { required, maxLength } from "vuelidate/lib/validators";
import { getUserFromCookie } from "@/helpers";
import { mapActions, mapGetters } from "vuex";
// import style from '~/assets/css/style.css'
// import { nanoid } from "nanoid";
import currencyJson from "~/data/currencies.json";
import countryJson from "~/data/countries.json";
import Toaster from "~/services/sweetToaster.js";

export default {
  currencyJson: currencyJson,
  countryJson: countryJson,
  async asyncData({ req, redirect, route }) {
    if (process.server) {
      const user = getUserFromCookie(req);
      if (user) {
        redirect("/");
      }
    }
  },
  layout: "adminlayout",
  components: {},
  data: () => ({
    isSpinner: true,
    invoice_logo: "",
    imageData: null,
    dialog: false,
    user_type: "Individual",
    countryCurrencySymbol: {
      currencies: [],
    },
    countryList: {
      countries: [],
    },
    countries: [],
    currencies: [],
    loading: false,
    alert: false,
    verificationMsg: "",
    senderModel: {
      senderName: "",
      senderCountry: "",
      senderAddress1: "",
      senderEmail: "",
      senderAddress2: "",
      senderPhone: "",
      senderWebsite: "",
      senderTaxNumber: "",
      user_type: "Individual",
      invoice_logo: "",
    },
    valid: true,
    emailRules: [
      (v) => !!v || "",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
  validations: {
    senderModel: {
      senderCountry: { required },
      senderEmail: { required, maxLength: maxLength(200) },
      senderName: { maxLength: maxLength(50) },
      senderAddress1: { maxLength: maxLength(200) },
      senderAddress2: { maxLength: maxLength(200) },
      senderPhone: { maxLength: maxLength(16) },
      senderWebsite: { maxLength: maxLength(200) },
      senderTaxNumber: { maxLength: maxLength(50) },
    },
  },
  computed: {
    ...mapGetters({
      error: "auth/error",
      loader: "auth/loading",
      message: "auth/message",
    }),
  },
  methods: {
    ...mapActions({
      addInvoiceDetails: "modules/invoice/addInvoiceDetails",
    }),
    async onSubmit() {
      this.$v.$touch();
      if (this.$v.senderModel.$error) return;
      this.loading = true;
      try {
        //   this.senderModel.id = "sender-" + nanoid();
        this.senderModel.id = auth().currentUser.uid;
        await this.addInvoiceDetails(this.senderModel);
        Toaster.success("Settings Saved", "success");
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error, "error");
      }
    },
    async onSubmitUserType() {
      this.loading = true;
      try {
        this.senderModel.id = auth().currentUser.uid;
        await this.addInvoiceDetails(this.senderModel);
        Toaster.success("Settings Saved", "success");
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error, "error");
      }
    },
    select_file() {
      this.$refs.input1.click();
      const post = {
        photo: this.senderModel.invoice_logo,
      };
    },
    previewImage(event) {
      this.uploadValue = 0;
      this.senderModel.invoice_logo = null;
      this.imageData = event.target.files[0];
      this.onUpload();
    },
    reset() {
      Toaster.success("Settings Saved", "success");
      this.senderModel.invoice_logo = null;
    },
    onUpload() {
      this.senderModel.invoice_logo = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.isSpinner = true;
            this.senderModel.invoice_logo = url;
            this.isSpinner = false;
            Toaster.success("Settings Saved", "success");
          });
        }
      );
    },
    async onSubmitInvoiceLogo() {
      const formData = new FormData();
      formData.append("invoiceLogo", this.invoiceLogo.logoImage);
      await firestore
        .collection("invoiceLogoImages")
        .doc(auth().currentUser.uid)
        .get()
        .add(formData)
        .then(() => {
          this.invoiceLogo.logoImage = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onlyNumbers(event) {
      let keyCode = event.keyCode ? event.keyCode : event.which;
      if (keyCode < 48 || keyCode > 57) {
        event.preventDefault();
      }
    },
    handleFileUpload(e) {
      console.log(e);
    },
  },
  mounted() {
    this.currencies = currencyJson;
    this.countries = countryJson;
  },
};
</script>
