<template>
  <v-row justify="center">
    <v-dialog v-model="InvoiceDialog" persistent max-width="250px">
      <v-card class="invoice-modalwrapper delete-invoicemodal">
        <v-card-title>
          <span class="new-client-innerwrapper">Invoice Type</span>
          <i
            text
            @click="InvoiceDialog = false"
            class="fa fa-times sender-modalwrapper-closebtn"
            aria-hidden="true"
          ></i>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <!-- <template v-slot:activator="{ on, attrs }">
                <div v-bind="attrs" v-on="on">
                  <div>
                    {{ invoiceTypeModel.invoiceType }}
                  </div>
                </div>
              </template> -->
              <v-form @click="onSubmitInvoice">
                <v-row>
                  <v-col cols="12" lg="12">
                    <div class="country-selectb">
                      <v-select
                        :items="invoiceType"
                        v-model="invoiceTypeModel.invoiceType"
                        outlined
                        item-text="name"
                        item-value="id"
                        hide-details="auto"
                      ></v-select>
                    </div>
                  </v-col>
                </v-row>
              </v-form>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="new-client-innerwrapper set-invoice-modal"
            text
            @click="onSubmitInvoice"
            :loading="loading"
          >
            Set Invoice Type
          </v-btn>
          <v-btn class="btn-secondary" text @click="closeModal"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { auth } from "~/plugins/firebase";
import { mapActions, mapGetters } from "vuex";
import Toaster from "~/services/sweetToaster.js";

export default {
  props: {
    ShowAddInvoiceModal: {
      required: false,
      default: false,
      type: Boolean,
    },
  },
  data: () => ({
    invoiceTypeModel: {
      invoiceType: "Invoice",
      isDeleted: false,
    },
    invoiceType: [
      {
        id: "Invoice",
        name: "Invoice",
      },
      {
        id: "Tax Invoice",
        name: "Tax Invoice",
      },
      {
        id: "Commercial Invoice",
        name: "Commercial Invoice",
      },
      {
        id: "Proforma Invoice",
        name: "Proforma Invoice",
      },
      {
        id: "Bill",
        name: "Bill",
      },
      {
        id: "Receipt",
        name: "Receipt",
      },
      {
        id: "Purchase Order",
        name: "Purchase Order",
      },
      {
        id: "Quote",
        name: "Quote",
      },
      {
        id: "Estimate",
        name: "Estimate",
      },
    ],
    loading: false,
  }),
  computed: {
    InvoiceDialog: {
      get() {
        return this.ShowAddInvoiceModal;
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
      this.$emit("fetchInvoiceTypeDetails");
      this.$emit("close");
    },
    ...mapActions({
      addInvoiceTypeDetails: "modules/invoice/addInvoiceTypeDetails",
    }),
    async onSubmitInvoice() {
      this.loading = true;
      try {
        this.invoiceTypeModel.id = auth().currentUser.uid;
        await this.addInvoiceTypeDetails(this.invoiceTypeModel);
        this.closeModal();
        Toaster.success("Invoice Type added successfully!", "success");
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error, "error");
      }
    },
  },
};
</script>
