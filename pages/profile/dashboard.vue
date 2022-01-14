<template>
  <v-main>
    <div>
      <div class="dashboard-sidebar-logo-wrapper"></div>
      <h3>Create your first invoice now</h3>
      <v-btn to="/profile/new-invoice" class="download-btn"> New Invoice</v-btn>
    </div>
  </v-main>
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
