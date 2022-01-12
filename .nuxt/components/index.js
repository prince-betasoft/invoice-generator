export { default as Footer } from '../..\\components\\footer.vue'
export { default as Header } from '../..\\components\\header.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as VuetifyLogo } from '../..\\components\\VuetifyLogo.vue'
export { default as ClientsAddClientModal } from '../..\\components\\clients\\AddClientModal.vue'
export { default as UserEditProfileModal } from '../..\\components\\user\\EditProfileModal.vue'

export const LazyFooter = import('../..\\components\\footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyHeader = import('../..\\components\\header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => c.default || c)
export const LazyClientsAddClientModal = import('../..\\components\\clients\\AddClientModal.vue' /* webpackChunkName: "components/clients-add-client-modal" */).then(c => c.default || c)
export const LazyUserEditProfileModal = import('../..\\components\\user\\EditProfileModal.vue' /* webpackChunkName: "components/user-edit-profile-modal" */).then(c => c.default || c)
