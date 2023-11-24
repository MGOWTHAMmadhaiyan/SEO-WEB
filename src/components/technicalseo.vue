<template>
    <el-row>
        <el-row class="fontstyle">
            <el-row class="buttonposition">
                <backPage></backPage>
            </el-row>
            <h1 class="marginZero">
                WHAT IS TECHNICAL SEO?
            </h1>
            <p>
                Technical SEO is the process of optimizing a website for search engines,
                but it can also include activities meant to improve user experience.
            </p>
            <h3>
                checklist for technical seo optimization.
            </h3>
            <el-collapse>
                <el-collapse-item v-for="i in technicalSeo" v-bind:key="i" :title="i">
                    <p>{{ i }}</p>
                </el-collapse-item>
            </el-collapse>
            <el-row class='twoPages'>
                <el-row class="seo3PagesSize" v-on:click.native="goToOnPageSeo()">
                    <h3>ONPAGE</h3>
                </el-row>
                <el-row class="seo3PagesSize" v-on:click.native="goToOffPageSeo()">
                    <h3>OFFPAGE</h3>
                </el-row>
            </el-row>
        </el-row>
    </el-row>
</template>
<script>
import backPage from './back.vue'
export default {
    name: 'technicalSeo',
    components: {
        backPage
    },
    data() {
        return {
            technicalSeo: ['Google Search Console Setup', 'Google Analytics Setup', 'Bing Webmaster Tools Setup', 'What is .htaccess File', 'Secure Website Using SSL', 'Permanent Redirects(301)', 'Temporary Redirects(302)', 'Robots.txt file setup', 'Custom 404 Redirections', 'XML Sitemap Submission', 'Remove Outdated Content in SERP', 'Request New Page For Index', 'Find and Fix Broken Links', 'Find and Fix Duplicate Content', 'Minify Techniques', 'Page Speed Test', 'Mobile-Friendly Test']
        }
    },
    methods: {
        goToOnPageSeo() {
            const pageRouteString = '/onpage-seo'
            this.seoPageRouting(pageRouteString)
        },

        goToOffPageSeo() {
            const pageRouteString = '/offpage-seo'
            this.seoPageRouting(pageRouteString)
        },

        seoPageRouting(seoPageRouteString) {
            let route = this.$router.resolve(seoPageRouteString); // This also works.
            window.open(route.href, '_blank');
        }

    }
}
</script>
<style>
.twoPages {
    display: flex;
}

.seo3PagesSize {
    width: 33%;
    margin-top: 5px;
    margin-left: 35px;
    height: 100px;
    border-radius: 30px;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(219, 16, 209);
    background-color: rgb(243, 234, 214);
}

.seo3PagesSize h3 {
    text-align: center;
}

@media(max-width:800px) {
    .twoPages {

        display: flex;
        flex-direction: column;
    }

    .seo3PagesSize {
        margin-left: 35%;
        width: 27%;
        margin-top: 5px;
        height: 70px;
        border-radius: 30px;
        border-width: 2px;
        border-style: solid;
        border-color: rgb(36, 16, 219);
        background-color: rgb(243, 234, 214);
    }

    @media(max-width:800px) {
        .buttonposition {
            margin-right: 300px;
        }
    }

}
</style>