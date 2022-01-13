export { default as Footer } from '../..\\components\\footer.vue'
export { default as Header } from '../..\\components\\header.vue'
export { default as Logo } from '../..\\components\\logo.vue'
export { default as VuetifyLogo } from '../..\\components\\VuetifyLogo.vue'
export { default as InvoicesAddClientModal } from '../..\\components\\invoices\\add-client-modal.vue'
export { default as InvoicesAddInvoiceModal } from '../..\\components\\invoices\\add-invoice-modal.vue'
export { default as InvoicesAddSenderModal } from '../..\\components\\invoices\\add-sender-modal.vue'
export { default as UserEditProfileModal } from '../..\\components\\user\\edit-profile-modal.vue'

export const LazyFooter = import('../..\\components\\footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyHeader = import('../..\\components\\header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => c.default || c)
export const LazyInvoicesAddClientModal = import('../..\\components\\invoices\\add-client-modal.vue' /* webpackChunkName: "components/invoices-add-client-modal" */).then(c => c.default || c)
export const LazyInvoicesAddInvoiceModal = import('../..\\components\\invoices\\add-invoice-modal.vue' /* webpackChunkName: "components/invoices-add-invoice-modal" */).then(c => c.default || c)
export const LazyInvoicesAddSenderModal = import('../..\\components\\invoices\\add-sender-modal.vue' /* webpackChunkName: "components/invoices-add-sender-modal" */).then(c => c.default || c)
export const LazyUserEditProfileModal = import('../..\\components\\user\\edit-profile-modal.vue' /* webpackChunkName: "components/user-edit-profile-modal" */).then(c => c.default || c)
