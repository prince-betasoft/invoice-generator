import Vue from 'vue'

const components = {
  Footer: () => import('../..\\components\\footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c),
  Header: () => import('../..\\components\\header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c),
  Logo: () => import('../..\\components\\logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  VuetifyLogo: () => import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => c.default || c),
  InvoicesAddClientModal: () => import('../..\\components\\invoices\\add-client-modal.vue' /* webpackChunkName: "components/invoices-add-client-modal" */).then(c => c.default || c),
  InvoicesAddInvoiceModal: () => import('../..\\components\\invoices\\add-invoice-modal.vue' /* webpackChunkName: "components/invoices-add-invoice-modal" */).then(c => c.default || c),
  InvoicesAddSenderModal: () => import('../..\\components\\invoices\\add-sender-modal.vue' /* webpackChunkName: "components/invoices-add-sender-modal" */).then(c => c.default || c),
  UserEditProfileModal: () => import('../..\\components\\user\\edit-profile-modal.vue' /* webpackChunkName: "components/user-edit-profile-modal" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
