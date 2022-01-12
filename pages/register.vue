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
              <h3>Create a free account</h3>
            </div>
            <div class="right-content">
              <v-form
                ref="register_form"
                v-model="valid"
                lazy-validation
                @submit.prevent="onSubmit"
              >
                <v-container fluid>
                  <v-row>
                    <v-col cols="12">
                      <p style="text-align: left">I am signing up as</p>
                      <v-radio-group required v-model="loginForm.user_type" row>
                        <v-radio
                          label="an individual"
                          value="individual"
                        ></v-radio>
                        <v-radio label="a company" value="Company"></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                </v-container>
                <div v-if="loginForm.user_type == 'individual'">
                  <v-row>
                    <v-col>
                      <v-text-field
                        v-model="loginForm.first_name"
                        placeholder="First name"
                        :rules="firstName"
                        required
                        class="v-label"
                        outlined
                      >
                      </v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field
                        v-model="loginForm.last_name"
                        placeholder="Last name"
                        :rules="firstName"
                        required
                        class="v-label"
                        outlined
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                </div>
                <div v-else>
                  <v-text-field
                    type="text"
                    placeholder="Company Name"
                    v-model="loginForm.company_name"
                    class="v-label"
                    :rules="firstName"
                    required
                    outlined
                  ></v-text-field>
                </div>
                <v-text-field
                  v-model="loginForm.email"
                  :rules="emailRules"
                  placeholder="Email Address"
                  required
                  outlined
                  class="v-label"
                >
                </v-text-field>
                <v-text-field
                  v-model="loginForm.password"
                  :rules="passwordRules"
                  placeholder="Password"
                  type="password"
                  required
                  outlined
                  class="v-label"
                >
                </v-text-field>
                <v-btn
                  :disabled="!valid"
                  color="primary"
                  class="mr-4 submit-btn"
                  type="submit"
                  :loading="loader"
                  @click="onSubmit"
                >
                  Submit
                </v-btn>
              </v-form>
              <div class="login-bottom-btn">
                <span>Have Account? </span> <v-btn href="/login">Login</v-btn>
              </div>
              <div class="backtohome mx-2">
                <v-btn to="/"
                  ><v-icon>mdi-arrow-left</v-icon> Go back to Home</v-btn
                >
              </div>
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
import Toaster from "~/services/sweetToaster.js";

// import style from '~/assets/css/style.css'
export default {
  async asyncData({ req, redirect, route }) {
    if (process.server) {
      const user = getUserFromCookie(req);
      if (user) {
        redirect("/");
      }
    }
  },
  layout: "auth",
  components: {},
  data: () => ({
    loading: false,
    alert: false,
    validationMsg: "",
    verificationMsg: "",
    verificationAlert: false,
    errorMsg: null,
    // key: "6LelGLoaAAAAAK8vnmjOcV3j2x-5kQor12GqGT1V",
    selection: 1,
    loginForm: {
      first_name: "",
      last_name: "",
      user_type: "individual",
      company_name: "",
      email: "",
      password: "",
    },
    Login_Submitted: false,
    valid: true,

    firstName: [
      (v) => !!v || "Please complete this mandatory field.",
      (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
    ],
    emailRules: [
      (v) => !!v || "Please complete this mandatory field.",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [
      (v) => !!v || "Please complete this mandatory field.",
      (v) => (v && v.length > 5) || "Password must at least 6 characters",
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
    ...mapActions({
      Register: "auth/Register",
      loginWithGoogle: "auth/logInWithGoogle",
    }),
    async onSubmit() {
      this.alert = false;
      this.verificationAlert = false;
      const check = this.$refs.register_form.validate();
      if (check) {
        Toaster.success("Registered Successfully!", "success");
        this.login_submitted = true;
        const payload = {
          user_type: this.loginForm.user_type,
          first_name: this.loginForm.first_name,
          last_name: this.loginForm.last_name,
          company_name: this.loginForm.company_name,
          email: this.loginForm.email,
          password: this.loginForm.password,
        };
        await this.Register(payload);
        //  this.$refs.register_form.reset();
        // this.$refs.register_form.resetValidation();
      }
    },
  },
};
</script>
<style scoped>
.v-label--active {
  left: -5px !important;
}
.backtohome {
  text-align: center;
  margin: 0px 0 0;
}
.backtohome .v-btn {
  background: transparent !important;
  color: #999d9e !important;
  font-family: "Poppins", sans-serif;
  box-shadow: none;
  letter-spacing: 0.4px;
  /* text-decoration: underline; */
}
.backtohome i.v-icon {
  font-size: 20px !important;
  padding-right: 6px !important;
}
.left-content .logo-head span.aletter {
  line-height: 46px;
  font-size: 42px !important;
  font-weight: bold;
  font-family: "Pompiere", cursive !important;
}
.logo-head {
  font-size: 32px;
  color: #277cee !important;
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
.alert-msg-error.v-alert--prominent .v-alert__icon.v-icon {
  /* margin-right: 30px !important; */
}
.login-bottom-btn {
  text-align: center;
  padding: 30px 0;
  font-family: "Poppins", sans-serif;
}
.login-bottom-btn .v-btn {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  padding: 0 5px !important;
  font-size: 16px;
  letter-spacing: 0.4px;
  color: #257eff;
  vertical-align: inherit;
}
.login-bottom-btn span {
  font-size: 14px;
}
</style>
