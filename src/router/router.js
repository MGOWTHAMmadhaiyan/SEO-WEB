
import VueRouter from "vue-router";
import seo from "../components/seo.vue";
import onpageseo from '../components/onpageseo.vue'
import offpageseo from '../components/offpageseo.vue'
import technicalseo from '../components/technicalseo'

const routes = [
    {
        path: "/",
        name: "seoWeb",
        component: seo,
    },
    {
      path: "/onpage-seo",
      name: "onPageSeo",
      component: onpageseo,
    },
    {
        path: "/offpage-seo",
        name: "offPageSeo",
        component: offpageseo,
    },
    {
        path: "/technical-seo",
        name: "technicalSeo",
        component: technicalseo,
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL, routes,
});

export default router;