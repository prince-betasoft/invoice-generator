import Vue from 'vue'

const components = {
  Header: () => import('../..\\components\\header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c),
  UserEditProfileModal: () => import('../..\\components\\user\\edit-profile-modal.vue' /* webpackChunkName: "components/user-edit-profile-modal" */).then(c => c.default || c),
  InvoicesModalsAddClientModal: () => import('../..\\components\\invoices\\modals\\add-client-modal.vue' /* webpackChunkName: "components/invoices-modals-add-client-modal" */).then(c => c.default || c),
  InvoicesModalsAddCustomFieldOneModal: () => import('../..\\components\\invoices\\modals\\add-custom-field-one-modal.vue' /* webpackChunkName: "components/invoices-modals-add-custom-field-one-modal" */).then(c => c.default || c),
  InvoicesModalsAddCustomFieldThreeModal: () => import('../..\\components\\invoices\\modals\\add-custom-field-three-modal.vue' /* webpackChunkName: "components/invoices-modals-add-custom-field-three-modal" */).then(c => c.default || c),
  InvoicesModalsAddCustomFieldTwoModal: () => import('../..\\components\\invoices\\modals\\add-custom-field-two-modal.vue' /* webpackChunkName: "components/invoices-modals-add-custom-field-two-modal" */).then(c => c.default || c),
  InvoicesModalsAddInvoiceModal: () => import('../..\\components\\invoices\\modals\\add-invoice-modal.vue' /* webpackChunkName: "components/invoices-modals-add-invoice-modal" */).then(c => c.default || c),
  InvoicesModalsAddPaymentDetailsModal: () => import('../..\\components\\invoices\\modals\\add-payment-details-modal.vue' /* webpackChunkName: "components/invoices-modals-add-payment-details-modal" */).then(c => c.default || c),
  InvoicesModalsAddSenderModal: () => import('../..\\components\\invoices\\modals\\add-sender-modal.vue' /* webpackChunkName: "components/invoices-modals-add-sender-modal" */).then(c => c.default || c),
  InvoicesModalsEditSenderModal: () => import('../..\\components\\invoices\\modals\\edit-sender-modal.vue' /* webpackChunkName: "components/invoices-modals-edit-sender-modal" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
