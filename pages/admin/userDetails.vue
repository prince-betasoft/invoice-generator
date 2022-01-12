<template>
  <v-main class="wrapper">
    <v-card class="mx-auto" max-width="800">
      <v-card-text>
        <div>
          <v-container fluid>
            <v-row>
              <v-col cols="12">
                <label class="form-label-outside"
                  ><h2 style="text-align: left">I am</h2></label
                >
                <v-radio-group v-model="user_type" row>
                  <v-radio label="an individual" value="Individual"></v-radio>
                  <v-radio label="a company" value="Company"></v-radio>
                </v-radio-group>
              </v-col>
              <v-card-actions class="sender-btnwrapper">
                <v-btn color="primary"> Save </v-btn>
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
            <v-form ref="sender_form" @click="onFormSubmit" lazy-validation>
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
                      :rules="countryRules"
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
                    @keypress="onlyNumbers"
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
                <v-card-actions class="sender-btnwrapper">
                  <v-btn color="primary" @click="setSender">
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
                      @click="click1"
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
                      class="white--text"
                      color="purple darken-2"
                    />
                  </div>
                </div>
                <div v-else cols="4">
                  <div v-if="imageData != null">
                    <div v-if="isSpinner" class="pt-12 pb-12 text-center">
                      <v-progress-circular
                        indeterminate
                        color="primary"
                      ></v-progress-circular>
                    </div>
                    <img
                      class="preview"
                      object-fit:
                      cover
                      width="100%"
                      :src="img1"
                    />
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
export default {
  layout: "adminlayout",
  data() {
    return {
      user_type: "Individual",
      isSpinner: true,
      caption: "",
      img1: "",
      imageData: null,
      countryCurrencySymbol: {
        currencies: [],
      },
      currencies: [],
      invoiceSenderView: {},
      clipped: false,
      drawer: true,
      fixed: false,

      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
      fav: true,
      menu: false,
      message: false,
      hints: true,
      countryRules: [(v) => !!v || "Please complete this mandatory field."],
      emailRules: [
        (v) => !!v || "Please complete this mandatory field.",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
};
</script>
