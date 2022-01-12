export { default as Footer } from '../..\\components\\footer.vue'
export { default as Header } from '../..\\components\\header.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as VuetifyLogo } from '../..\\components\\VuetifyLogo.vue'
export { default as SidebarRightSidebarViewer } from '../..\\components\\Sidebar\\RightSidebarViewer.vue'
export { default as UserEditProfileModal } from '../..\\components\\user\\EditProfileModal.vue'
export { default as StoriesAddClientModal } from '../..\\components\\stories\\AddClientModal.vue'

export const LazyFooter = import('../..\\components\\footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyHeader = import('../..\\components\\header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => c.default || c)
export const LazySidebarRightSidebarViewer = import('../..\\components\\Sidebar\\RightSidebarViewer.vue' /* webpackChunkName: "components/sidebar-right-sidebar-viewer" */).then(c => c.default || c)
export const LazyUserEditProfileModal = import('../..\\components\\user\\EditProfileModal.vue' /* webpackChunkName: "components/user-edit-profile-modal" */).then(c => c.default || c)
export const LazyStoriesAddClientModal = import('../..\\components\\stories\\AddClientModal.vue' /* webpackChunkName: "components/stories-add-client-modal" */).then(c => c.default || c)
