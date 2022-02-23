<template>
  <div>
    <v-container>
      <client-only>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <div class="welcome-left">
              <v-btn to="/profile/new-invoice" class="btn-primary">
                New Invoice</v-btn
              >
            </div>
          </v-col>
        </v-row>
        <v-row>
          <div class="invoice-mini">
            <div class="invoice-inner">
              <div class="total-text">
                <v-col cols="12" sm="6" md="6">
                  <div class="welcome-left5">
                    <h4>Client Details</h4>
                    <div v-if="client_details">
                      <div>
                        <b>{{ client_details.clientCompanyName }}</b>
                      </div>
                      <div>
                        {{ client_details.clientFirstName }}
                      </div>
                      <div>
                        {{ client_details.clientLastName }}
                      </div>
                      <div>
                        {{ client_details.clientEmail }}
                      </div>
                      <div>
                        {{ client_details.clientCountry }}
                      </div>
                      <div>
                        {{ client_details.clientAddress1 }}
                      </div>
                      <div>
                        {{ client_details.clientAddress2 }}
                      </div>
                      <div>
                        {{ client_details.clientPhone }}
                      </div>
                      <div>
                        {{ client_details.clientExtraData }}
                      </div>
                    </div>
                  </div>
                </v-col>
              </div>
            </div>
          </div>
        </v-row>
      </client-only>
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  layout: "adminlayout",
  data() {
    return {
      invoices: [],
    };
  },
  computed: {
    ...mapGetters({
      client_details: "modules/invoice/getClientDetails",
    }),
  },
};
</script>
<style scoped>
.invoice-mini {
  background: #fff;
  border: 1px solid #eee;
  box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.15);
  border-radius: 1px;
  z-index: 2;
  cursor: pointer;
  transition: all 0.2s ease;
}
.invoice-mini .invoice-inner {
  padding: 47px;
}
.invoice-mini .meta-inner {
  width: 100%;
  padding: 20px 30px;
  color: #333;
  font-size: 1.2rem;
  line-height: 1.8;
}
.invoice-mini .meta-icons {
  right: 20px;
  bottom: 20px;
  opacity: 0.3;
}
.welcome-left {
  padding: 0px 335px;
}
.all-invoices {
  padding-left: 42%;
}
.v-data-table.theme--light {
  padding-left: 30%;
}
.theme--light.v-data-table {
  background-color: #f5f5f5;
  color: rgba(0, 0, 0, 0.87);
}
</style>
