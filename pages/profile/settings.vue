<template>
  <v-container class="mx-auto">
    <div class="login">
      <v-card class="v-card signup-form">
        <v-row class="mb-6" no-gutters>
          <v-col xs="12" sm="12" md="12">
            <v-alert
              type="error"
              v-model="alert"
              prominent
              class="alert-msg-error"
            >
              {{ validationMsg }}
            </v-alert>
            <v-alert
              type="success"
              v-model="verificationAlert"
              prominent
              class="alert-msg-error"
            >
              {{ verificationMsg }}
            </v-alert>
            <div class="left-content">
              <h3 class="logo-head"></h3>
            </div>
            <div class="right-content">
              <v-form
                ref="sender_form"
                v-model="valid"
                lazy-validation
                @submit.prevent="onSubmit"
              >
                <v-row class="invoice-box">
                  <v-col cols="12" sm="6" md="8" lg="8">
                    <label class="form-label-outside">Sender / Name</label>
                    <v-text-field
                      outlined
                      class="form-control"
                      v-model="invoiceSenderView.senderName"
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" lg="4">
                    <div class="country-selectb">
                      <label class="form-label-outside">Country</label>
                      <v-select
                        v-model="invoiceSenderView.senderCountry"
                        :items="currencies"
                        outlined
                        required
                        class="form-control"
                        item-text="name"
                        item-value="id"
                        hide-details="auto"
                      ></v-select>
                    </div>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <label class="form-label-outside">Address 1</label>
                    <v-text-field
                      outlined
                      class="form-control"
                      v-model="invoiceSenderView.senderAddress1"
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <label class="form-label-outside">Email</label>
                    <v-text-field
                      outlined
                      required
                      class="form-control"
                      maxlength="200"
                      v-model="invoiceSenderView.senderEmail"
                      hide-details="auto"
                      :rules="emailRules"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <label class="form-label-outside">Address 2</label>
                    <v-text-field
                      outlined
                      maxlength="200"
                      class="form-control"
                      v-model="invoiceSenderView.senderAddress2"
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" lg="6">
                    <label class="form-label-outside">Phone</label>
                    <v-text-field
                      outlined
                      onselectstart="return false"
                      onpaste="return false;"
                      onCopy="return false"
                      onCut="return false"
                      onDrag="return false"
                      onDrop="return false"
                      autocomplete="off"
                      class="form-control"
                      v-model="invoiceSenderView.senderPhone"
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <label class="form-label-outside">Website</label>
                    <v-text-field
                      outlined
                      class="form-control"
                      v-model="invoiceSenderView.senderWebsite"
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <label class="form-label-outside">
                      PAN / Tax Registration Number</label
                    >
                    <v-text-field
                      outlined
                      class="form-control"
                      v-model="invoiceSenderView.senderTaxNumber"
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-btn
                  color="primary"
                  class="mr-4 submit-btn"
                  type="submit"
                  :loading="loader"
                >
                  Save Sender Details
                </v-btn>
              </v-form>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-container>
</template>
<script>
import { getUserFromCookie } from "@/helpers";
import { mapActions, mapGetters } from "vuex";
// import style from '~/assets/css/style.css'
import currencyJson from "~/data/currencies.json";

export default {
  currencyJson: currencyJson,
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
    countryCurrencySymbol: {
      currencies: [],
    },
    currencies: [],
    loading: false,
    alert: false,
    validationMsg: "",
    verificationMsg: "",
    verificationAlert: false,
    recaptchaResponse: null,
    errorMsg: null,
    // key: "6LelGLoaAAAAAK8vnmjOcV3j2x-5kQor12GqGT1V",
    selection: 1,
    invoiceSenderView: {
      senderName: "",
      senderCountry: "",
      senderAddress1: "",
      senderEmail: "",
      senderAddress2: "",
      senderPhone: "",
      senderWebsite: "",
      senderTaxNumber: "",
    },
    Login_Submitted: false,
    valid: true,
    emailRules: [
      (v) => !!v.trim() || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
  computed: {
    ...mapGetters({
      error: "auth/error",
      loader: "auth/loading",
      message: "auth/message",
    }),
  },
  watch: {
    error(newState, oldState) {
      if (newState) {
        this.alert = true;
        this.validationMsg = newState.message;
      }
    },
    message(value) {
      if (value) {
        this.verificationAlert = true;
        this.verificationMsg = value;
      }
    },
  },
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    validate(response) {
      this.recaptchaResponse = response;
      console.log(response, "recaptcha");
    },
    recaptchaExpire() {
      this.recaptchaResponse = null;
      console.log("expired");
    },
    ...mapActions({
      Register: "auth/Register",
      loginWithGoogle: "auth/logInWithGoogle",
    }),
    async onSubmit() {
      this.alert = false;
      this.verificationAlert = false;
      if (this.$refs.sender_form.validate()) {
        if (this.recaptchaResponse) {
          this.login_submitted = true;
          const payload = {
            senderName: this.invoiceSenderView.senderName.trim(),
            senderCountry: this.invoiceSenderView.senderCountry.trim(),
            senderAddress1: this.invoiceSenderView.senderAddress1.trim(),
            senderEmail: this.invoiceSenderView.senderEmail.trim(),
            senderAddress2: this.invoiceSenderView.senderAddress2.trim(),
            senderPhone: this.invoiceSenderView.senderPhone.trim(),
            senderWebsite: this.invoiceSenderView.senderWebsite.trim(),
            senderTaxNumber: this.invoiceSenderView.senderTaxNumber.trim(),
          };
          await this.Register(payload);
          this.$refs.sender_form.reset();
          this.$refs.sender_form.resetValidation();
          this.$refs.register_recaptcha.reset();
        } else {
          this.errorMsg = "Please verify that you are a Human.";
        }
      }
    },
  },
  mounted() {
    this.currencies = currencyJson;
  },
};
</script>
<style scoped>
.left-content .logo-head span.aletter {
  line-height: 46px;
  font-size: 42px !important;
  font-weight: bold;
  font-family: "Pompiere", cursive !important;
}
.logo-head {
  font-size: 32px;
  color: #01b0ee !important;
  font-family: "Pompiere", cursive;
  letter-spacing: 1px;
}
.left-content {
  text-align: center;
  padding: 20px 40px;
  border-bottom: 1px solid #ddd;
  background: #f9f9f9;
  border-radius: 5px 5px 0 0;
}
.alert-msg-error {
  background: #f33434 !important;
  margin: 10px !important;
}
</style>
