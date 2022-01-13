<template>
  <div>
    <v-container>
      <client-only>
        <v-app class="background_color">
          <v-container style="width: 1000px">
            <v-row>
              <v-col cols="4">
                <div class="template-selectbox-wrapper">
                  <v-select
                    :items="templates"
                    class="form-control"
                    append-icon="true"
                    v-model="defaultTemplete"
                    outlined
                    item-text="name"
                    item-value="id"
                    hide-details="auto"
                  ></v-select>
                </div>
              </v-col>
              <v-col cols="4"></v-col>
              <v-col cols="4">
                <div class="save-download-bankbody-wrapper">
                  <v-btn class="save-btn">Save</v-btn
                  ><v-btn class="downlaod-btn">Download</v-btn>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="8">
                <v-card class="bank-template-mainwrapper">
                  <v-row>
                    <v-col cols="6">
                      <v-form @click="onSubmitInvoiceLogo">
                        <div
                          v-if="imageData == null"
                          class="invoice-type-innerwrapper mainwrapper-first-row"
                          style="padding-bottom: 0px"
                        >
                          <div class="drag-filebackground">
                            <label class="form-label-outside"
                              >Drag your logo here or</label
                            >
                            <div>
                              <div>
                                <span
                                  title="Add New select a file"
                                  @click="select_file"
                                  class="placeholder"
                                >
                                  select a file
                                </span>
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
                              <br />
                              <pre></pre>
                            </div>
                          </div>
                        </div>
                        <div v-else>
                          <div v-if="imageData != null">
                            <div
                              v-if="isSpinner"
                              class="pt-12 pb-12 text-center"
                            >
                              <v-progress-circular
                                indeterminate
                                color="primary"
                              ></v-progress-circular>
                            </div>
                            <v-img
                              class="preview"
                              style="width: 100%; object-fit: cover"
                              height="200px"
                              :src="invoice_logo"
                            ></v-img>
                            <br />
                          </div>
                        </div>
                      </v-form>
                    </v-col>
                    <v-col cols="6">
                      <div
                        class="invoice-type-innerwrapper mainwrapper-first-row"
                        style="padding-bottom: 30px"
                      >
                        <v-btn text @click="addInvoiceType">Invoice </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <div class="invoice-type-innerwrapper">
                        <v-btn
                          class="form-label-outside"
                          style="text-transform: uppercase; font-size: 11px"
                          text
                          @click="openAddSenderModal"
                          >From
                        </v-btn>
                        <!-- <div class="sender-contentbodywrapper">
                          <span><i class="fas fa-user"></i></span>
                          <h5>Sender Name</h5>
                          <p>Sender Contact Details</p>
                        </div> -->
                      </div>
                    </v-col>
                    <v-col cols="6">
                      <div class="invoice-type-innerwrapper">
                        <v-btn
                          class="form-label-outside"
                          style="text-transform: uppercase; font-size: 11px"
                          text
                          @click="openAddClientModal"
                          >To
                        </v-btn>
                        <!-- <div class="recipientbackground-wrapper">
                            <span><i class="fas fa-user"></i></span>
                            <h5>Recipient Name</h5>
                            <p>Recipient Contact Details</p>
                          </div> -->
                      </div>
                    </v-col>
                  </v-row>
                  <v-row class="invoice-details-wrapper">
                    <v-col cols="6">
                      <v-row>
                        <v-col cols="4" class="invoice-mainwrapper">
                          <h4>Invoice No:</h4></v-col
                        >
                        <v-col cols="8" class="invoice-contentwrapper">
                          <div class="invoice-type-innerwrapper">
                            <input
                              type="value"
                              class="form-control"
                              v-model="invoiceAllDetails.invoiceNumber"
                              placeholder="Invoice No"
                              maxlength="20"
                              hide-details="auto"
                            />
                          </div>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="4" class="invoice-mainwrapper">
                          <h4>Invoice Date:</h4></v-col
                        >
                        <v-col cols="8" class="invoice-contentwrapper">
                          <div class="invoice-type-innerwrapper">
                            <client-only>
                              <vue-ctk-date-time-picker
                                v-model="invoiceAllDetails.invoiceDate"
                                classname="form-control"
                                :noLabel="true"
                                color="dodgerblue"
                                title="Click to change date"
                                :only-date="true"
                                :no-shortcuts="true"
                                format="DD-MM-YYYY"
                                formatted="ll"
                                :range="false"
                                placeholder=""
                              ></vue-ctk-date-time-picker>
                            </client-only>
                          </div>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="6">
                      <v-row>
                        <v-col
                          cols="3"
                          style="padding: 0px"
                          class="due-content-heading"
                        >
                          <h4>Due:</h4></v-col
                        >
                        <v-col cols="9" style="padding: 0px">
                          <div
                            class="invoice-type-innerwrapper due-date-calanderwrapper"
                          >
                            <client-only>
                              <vue-ctk-date-time-picker
                                v-model="invoiceAllDetails.dueDate"
                                :noLabel="true"
                                classname="form-control"
                                color="dodgerblue"
                                :only-date="true"
                                title="Click to change date"
                                :no-shortcuts="true"
                                format="DD-MM-YYYY"
                                formatted="ll"
                                placeholder=""
                                :range="false"
                              ></vue-ctk-date-time-picker>
                            </client-only>
                          </div>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <v-row class="invoice-line-iteams-wrapper">
                    <div class="invoice-box">
                      <v-form lazy-validation>
                        <table
                          class="responsive-table"
                          cellpadding="0"
                          cellspacing="0"
                        >
                          <thead>
                            <tr class="heading">
                              <td>Item</td>
                              <td>HRS/QTY</td>
                              <td>Rate</td>
                              <td>Tax</td>
                              <td>Tax Type</td>
                              <td>Subtotal</td>
                              <td></td>
                            </tr>
                          </thead>
                          <tbody></tbody>
                        </table>
                        <v-row>
                          <v-col cols="12">
                            <div
                              class="add-new-iteamswrapper mainwrapper-first-row"
                            >
                              <v-btn @click="addRow">
                                Add New Invoice Item
                              </v-btn>
                            </div>
                          </v-col>
                        </v-row>
                      </v-form>
                      <v-row>
                        <v-col cols="12" lg="6" md="6"></v-col>
                        <v-col cols="12" lg="6" md="6">
                          <div class="main-heading-invoice">
                            <v-row>
                              <v-col cols="12" class="invoice-summary-wrapper">
                                <h4>Invoice Summary</h4>
                              </v-col>
                              <v-col
                                cols="12"
                                lg="6"
                                md="6"
                                class="subtotal-heading"
                                >Subtotal</v-col
                              >
                              <v-col
                                cols="12"
                                lg="6"
                                md="6"
                                class="subtotal-value"
                              >
                              </v-col>
                              <v-col
                                cols="12"
                                lg="6"
                                md="6"
                                class="subtotal-heading"
                                >Tax</v-col
                              >
                              <v-col
                                cols="12"
                                lg="6"
                                md="6"
                                class="subtotal-value"
                              >
                              </v-col>
                              <v-col
                                cols="12"
                                lg="6"
                                md="6"
                                class="subtotal-heading"
                                >Total
                                <v-col
                                  cols="12"
                                  lg="6"
                                  md="6"
                                  class="invoice-contentwrapper"
                                >
                                  <div class="invoice-type-innerwrapper">
                                    <v-dialog persistent max-width="250px">
                                      currencySymbol
                                      <v-card
                                        class="invoice-modalwrapper delete-invoicemodal"
                                      >
                                        <v-card-title>
                                          <span class="new-client-innerwrapper"
                                            >Select Currency</span
                                          >
                                          <i
                                            text
                                            class="fa fa-times sender-modalwrapper-closebtn"
                                            aria-hidden="true"
                                          ></i>
                                        </v-card-title>
                                        <v-card-text>
                                          <v-container>
                                            <v-row>
                                              <v-col cols="12">
                                                <div class="country-selectb">
                                                  <v-select
                                                    outlined
                                                    required
                                                    hide-details="auto"
                                                  ></v-select>
                                                </div>
                                              </v-col>
                                            </v-row>
                                            <div
                                              class="new-client-innerwrapper set-invoice-modal"
                                            >
                                              <v-btn> Submit </v-btn>
                                            </div>
                                          </v-container>
                                        </v-card-text>
                                      </v-card>
                                    </v-dialog>
                                  </div>
                                </v-col>
                              </v-col>
                              <v-col
                                cols="12"
                                lg="6"
                                md="6"
                                class="subtotal-value"
                              >
                              </v-col>
                            </v-row>
                          </div>
                        </v-col>
                      </v-row>
                    </div>
                    <v-col cols="12">
                      <div class="input-terms-mainwrapper">
                        <input
                          type="value"
                          class="form-control"
                          placeholder="Invoice Terms"
                          hide-details="auto"
                        />
                      </div>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
              <v-col cols="4">
                <div class="invoice-mainbodywrapper">
                  <div class="invoice-setting-innerwrapper">
                    <h4>
                      Invoice Settings
                      <span class="ti-close close-settings"></span>
                    </h4>
                  </div>
                  <v-col cols="12">
                    <div class="currency-symbol-mainwrapper country-selectb">
                      <label class="form-label-outside">Currency Symbol</label>
                      <v-select
                        outlined
                        required
                        item-text="name"
                        item-value="id"
                        hide-details="auto"
                      ></v-select>
                    </div>
                  </v-col>
                  <hr />
                  <div class="addpayment-line-wrapper">
                    <ul>
                      <li>
                        <i class="fas fa-dollar-sign"></i>Add payment details
                      </li>
                      <li>
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                        Add company info
                      </li>
                      <li><i class="fas fa-edit"></i>Add description</li>
                      <li><i class="fal fa-user"></i>Add client info</li>
                      <li><i class="fas fa-dollar-sign"></i>Enter Payment</li>
                    </ul>
                  </div>
                  <hr />
                  <div class="addpayment-line-wrapper">
                    <ul>
                      <li><i class="fa fa-map-marker"></i>Get Link</li>
                      <li><i class="fas fa-copy"></i>Copy Invoice</li>
                      <li class="delete-icon-innerwrapepr">
                        <i class="fas fa-ban"></i>Delete
                      </li>
                      <li><i class="fas fa-copy"></i>Custom Field 1</li>
                      <li><i class="fas fa-copy"></i>Custom Field 2</li>
                      <li><i class="fas fa-copy"></i>Custom Field 3</li>
                    </ul>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
          <add-client-modal
            :ShowAddClientModal="ShowAddClientModal"
            @close="ShowAddClientModal = false"
          />
          <add-invoice-modal
            :addInvoiceModal="addInvoiceModal"
            @close="addInvoiceModal = false"
          />
          <add-sender-modal
            :ShowAddSenderModal="ShowAddSenderModal"
            @close="ShowAddSenderModal = false"
          />
          <add-tax-modal
            :ShowAddTaxModal="ShowAddTaxModal"
            @close="ShowAddTaxModal = false"
          />
        </v-app>
      </client-only>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import AddClientModal from "@/components/invoices/add-client-modal";
import addInvoiceModal from "@/components/invoices/add-invoice-modal.vue";
import AddSenderModal from "@/components/invoices/add-sender-modal.vue";
import AddTaxModal from "@/components/invoices/add-client-modal";
import { auth, storage, firestore, firebase } from "~/plugins/firebase";
import { getUserFromCookie } from "../../helpers/index";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";

export default {
  components: {
    AddClientModal,
    addInvoiceModal,
    AddSenderModal,
    AddTaxModal,
    VueCtkDateTimePicker,
  },
  layout: "adminlayout",
  async asyncData({ req, redirect, store }) {
    let user = null;
    if (process.server) {
      user = getUserFromCookie(req);
      if (user) {
        await store.dispatch("auth/current_user", user.user_id);
      }
    } else {
      user = auth().currentUser;
      if (user) {
        await store.dispatch("auth/current_user", user.uid);
      }
    }
    if (!user) {
      redirect("/login");
    }
  },
  data: () => ({
    isSpinner: true,
    invoice_logo: "",
    imageData: null,
    dialog: false,
    ShowAddClientModal: false,
    ShowAddTaxModal: false,
    addInvoiceModal: false,
    ShowAddSenderModal: false,
    dialogDelete: false,
    defaultTemplete: ["Blank Template"],
    templates: [
      ["Blank Template"],
      ["Web-Developer Template"],
      ["Marketing Template"],
      ["Travel Agency Template"],
      ["Consulting Agency Template"],
      ["Designer & Creative Agency Template"],
      ["Training, Tutoring & Education Organization Template"],
      ["Copy Writing & Content Template"],
      ["IT Service Template"],
      ["Video production Template"],
      ["Audio production Template"],
      ["Analyst Template"],
      ["Virtual Assistance Template"],
      ["Data Specialist Template"],
      ["Photography & Filming Template"],
      ["Developer Template"],
      ["UK VAT"],
      ["UK No VAT"],
      ["Japan CT"],
      ["Japan No CT"],
      ["Australia GST"],
      ["Australia No GST"],
      ["New Zealand GST"],
      ["New Zealand No GST"],
      ["Canada GST"],
      ["Canada No GST"],
      ["Philippines VAT"],
      ["Philippines No VAT"],
      ["India GST"],
      ["India No GST"],
      ["Germany VAT"],
      ["Germany No VAT"],
      ["Ireland VAT"],
      ["Ireland No VAT"],
      ["Pakistan ST"],
      ["Pakistan No ST"],
    ],
    invoiceAllDetails: {
      invoiceNumber: "001",
      invoiceDate: new Date(),
      dueDate: new Date(),
    },
  }),
  computed: {
    ...mapGetters({
      current_user: "auth/getAuthUser",
    }),
  },

  methods: {
    select_file() {
      this.$refs.input1.click();
      const post = {
        photo: this.invoice_logo,
      };
    },
    previewImage(event) {
      this.uploadValue = 0;
      this.invoice_logo = null;
      this.imageData = event.target.files[0];
      this.onUpload();
    },
    onUpload() {
      this.invoice_logo = null;
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
            this.invoice_logo = url;
            this.isSpinner = false;
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
    handleFileUpload(e) {
      console.log(e);
    },
    async openAddSenderModal() {
      await firestore
        .collection("senderDetails")
        .doc(auth().currentUser.uid)
        .get()
        .then(() => {
          this.ShowAddSenderModal = true;
        });
    },
    async openAddClientModal() {
      await firestore
        .collection("clients")
        .doc(auth().currentUser.uid)
        .get()
        .then(() => {
          this.ShowAddClientModal = true;
        });
    },
    async addInvoiceType() {
      await firestore
        .collection("invoicetypes")
        .doc(auth().currentUser.uid)
        .get()
        .then(() => {
          this.addInvoiceModal = true;
        });
    },
    UpdatedBy(id) {
      console.log(id);
      return "TimeStamp";
    },
  },
};
</script>

<style scoped>
.light-blue {
  background-color: #277cee !important;
  border-color: #277cee !important;
}
</style>
