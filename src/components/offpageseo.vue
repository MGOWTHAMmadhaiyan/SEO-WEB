
<template>
    <el-row>
        <el-row class="fontstyle">
            <el-row class="buttonposition">
                <backPage></backPage>
            </el-row>
            <h1 class="marginZero">
                WHAT IS OFFPAGE SEO?
            </h1>
            <p>
                Off-page SEO" (also called "off-site SEO") refers to actions taken outside of your own website to
                impact your rankings within search engine results pages (SERPs)
                and to influence how people discover and engage with your content.
            </p>
            <h3>
                checklist for offpage seo optimization.
            </h3>
            <p v-for="(i, index) in offPageCheckList" v-bind:key="i">{{ `${index + 1}.${i}` }}</p>
            <el-row class='twoPages'>
                <el-row class="seo3PagesSize" v-on:click.native="goToOnPageSeo()">
                    <h3>ONPAGE</h3>
                </el-row>
                <el-row class="seo3PagesSize" v-on:click.native="goToTechnicalSeo()">
                    <h3>TECHNICAL</h3>
                </el-row>
            </el-row>
        </el-row>
    </el-row>
</template>
<script>
import backPage from './back.vue'

export default {
    name: 'offPageSeo',
    components: {
        backPage
    },
    data() {
        return {
            offPageCheckList: ['Blog Submission', 'Article Submission', 'Social Bookmark submisson', 'Guest Posting', 'Comment Posting', 'PPT Submission', 'Video Submission', 'Info-Graphic Submission', 'Image Submission', 'Forum Submission', 'RSS Feed Submission', 'Press Release Submission', 'Newsletters', 'Google My Business', 'Directory Submission']
        }
    },
    methods: {
        goToOnPageSeo() {
            const pageRouteString = '/onpage-seo'
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
    margin-left: 35%;
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