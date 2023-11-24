<template>
    <el-row class="fontstyle">
        <el-row class="buttonposition">
            <backPage></backPage>
        </el-row>
        <h1 class="marginZero">
            WHAT IS ONPAGE SEO?
        </h1>
        <p>
            On-page SEO (also called on-site SEO) is the process of optimizing your webpage content for search engines and
            users.
        </p>
        <h3>
            checklist for onpage seo optimization.
        </h3>
        <el-collapse>
            <el-collapse-item v-for="i in onPageCheckList" v-bind:key="i" :title="i">
                <p>{{ i }}</p>
            </el-collapse-item>
        </el-collapse>
        <el-row class='twoPages'>
            <el-row class="seo3PagesSize" v-on:click.native="goToOffPageSeo()">
                <h3>OFFPAGE</h3>
            </el-row>
            <el-row class="seo3PagesSize" v-on:click.native="goToTechnicalSeo()">
                <h3>TECHNICAL</h3>
            </el-row>
        </el-row>

    </el-row>
</template>
<script>
import backPage from './back.vue'
export default {
    name: 'onPageSeo',
    components: {
        backPage
    },
    data() {
        return {
            onPageCheckList: ['Title Tags', 'Description Tags', 'Headings Tags', 'Language Tags', 'Hreflang Tags', 'Open Graph Meta Tags', 'Twitter Card Meta Tags', 'Canonical Tags Optimization', 'Robots Tags Optimization', 'Image Optimization', 'Voice Search Optimization', 'Keyword Cannibalization', 'Video Optimization', 'Internal Links Optimization', 'SEO-Friendly URL Structure Optimization', 'Schema Markup Optimization', 'External Or Outbound Links Optimization']
        }
    },
    methods: {
        goToOffPageSeo() {
            const pageRouteString = '/offpage-seo'
            this.seoPageRouting(pageRouteString)
        },

        goToTechnicalSeo() {
            const pageRouteString = '/technical-seo'
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

}</style>