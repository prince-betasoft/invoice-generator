<template>
  <div>
    <v-container>
      <client-only>
        <h3>Invoices</h3>
        <v-card class="addnew-invoice">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col lg="6"> <div></div></v-col>
                <v-col lg="6">
                  <div class="dashboard-sidebar-logo-wrapper"></div>
                  <h3>Create your first invoice now</h3>
                  <v-btn to="/profile/new-invoice" class="btn-primary">
                    New Invoice</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </client-only>
    </v-container>
  </div>
</template>
<script>
export default {
  layout: "adminlayout",
  data: () => ({
    files: [],
  }),
};
</script>
<style scoped>
button.download-btn {
  background: #552cf6 !important;
  color: #fff !important;
  padding: 20px 30px !important;
}
button.download-btn:hover {
  background: #285cff !important;
}

a.router-link-wrapper {
  color: #fff !important;
}
a,
u {
  text-decoration: none;
}
</style>
