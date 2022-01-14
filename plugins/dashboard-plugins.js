import Vue from "vue";
import VueMoment from "vue-moment";
import VueLazyload from "vue-lazyload";
if (process.client) {
  Vue.use(VueMoment);
  Vue.use(VueLazyload, {
    preLoad: 0.5,
    attempt: 1,
    // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
    listenEvents: ["scroll"],
  });
}
