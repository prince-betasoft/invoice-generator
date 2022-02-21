<template>
  <div>
    <v-container>
      <client-only>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <div class="welcome-left5">
              <h4>Recent Invoices</h4>
            </div>
          </v-col>
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
              <div class="total-text">Total</div>
              <div class="amount"></div>
              <div class="meta">
                <div class="meta-inner">
                  <div class="number"></div>
                  <div class="number"></div>
                  <div class="due"></div>
                </div>
              </div>
            </div>
          </div>
        </v-row>
        <v-row>
          <label class="all-invoices">All Invoices</label>
        </v-row>
        <v-row>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Invoice #</th>
                  <th class="text-left">Total</th>
                  <th class="text-left">Date</th>
                  <th class="text-left">Due Date</th>
                </tr>
              </thead>
              <tbody>
                <!-- <tr v-for="item in invoices" :key="item.name">
                  <td>{{ item.invoiceNumber }}</td>
                  <td>{{ item.totalAmount }}</td>
                  <td>{{ item.invoiceDate }}</td>
                  <td>{{ item.invoiceDueDate }}</td>
                </tr> -->
              </tbody>
            </template>
          </v-simple-table>
        </v-row>
      </client-only>
    </v-container>
  </div>
</template>
<script>
export default {
  layout: "adminlayout",
  data() {
    return {
      invoices: [],
    };
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
