import Vue from 'vue'

const components = {
  Footer: () => import('../..\\components\\footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c),
  Header: () => import('../..\\components\\header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c),
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  VuetifyLogo: () => import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => c.default || c),
  SidebarRightSidebarViewer: () => import('../..\\components\\Sidebar\\RightSidebarViewer.vue' /* webpackChunkName: "components/sidebar-right-sidebar-viewer" */).then(c => c.default || c),
  StoriesAddClientModal: () => import('../..\\components\\stories\\AddClientModal.vue' /* webpackChunkName: "components/stories-add-client-modal" */).then(c => c.default || c),
  UserEditProfileModal: () => import('../..\\components\\user\\EditProfileModal.vue' /* webpackChunkName: "components/user-edit-profile-modal" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
