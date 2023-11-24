<template>
  <el-row>
    <el-row class="imagePosition">
      <el-row class="fontstyle">
        <h2 class="marginZero">WHAT IS SEO?</h2>
        <p>
          SEO meaning is Search engine optimization (SEO).It is a set of rules for improve the appearance and positioning
          of
          web pages in organic search results.(example) consider 100 meter race. who will come the first place in the
          race.
          That winner is comes first with the help of practice(helping tool is SEO)
        </p>
        <h2>
          WHY SEO NEED?
        </h2>
        <p>
          SEO is crucial because it makes your website more visible,
          and that means more traffic and more opportunities to convert prospects into customers.
        </p>
        <h2>
          WHAT IS MAIN CONCEPT OF SEO OR PILLER OF SEO?
        </h2>
        <h3>
          There are 3 main concept in seo.list given below:-
        </h3>
        <ol>
          <li>Onpage seo</li>
          <li>Offpage seo</li>
          <li>Technical seo</li>
        </ol>
      </el-row>
      <el-row>
        <img src="../assets/seo.jpg" alt="seographicimage" title="seo" class="seoImage">
      </el-row>
    </el-row>
    <el-row class="flex">
      <el-row class="seo3PagesSize" v-on:click.native="goToOnPageSeo()">
        <h3>ONPAGE</h3>
      </el-row>
      <el-row class="seo3PagesSize" v-on:click.native="goToOffPageSeo()">
        <h3>OFFPAGE</h3>
      </el-row>
      <el-row class="seo3PagesSize" v-on:click.native="goToTechnicalSeo()">
        <h3>TECHNICAL</h3>
      </el-row>
    </el-row>
    <hr>
    <el-row class=" centersocialmedia">
      <el-row class="fontstyle">
        <h3>social medias</h3>
        <a href="https://www.linkedin.com/in/gowtham-m-47750820a" class="socialmedia" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://youtube.com/@01code-jy3ft?si=_OcfcQ0OrCA1t1mL" class="socialmedia" target="_blank"><i
            class="fab fa-youtube "></i></a>
        <a href="https://github.com/MGOWTHAMmadhaiyan" class="socialmedia" target="_blank"> 
          <i class="fab fa-github"></i>
        </a>
      </el-row>
    </el-row>

  </el-row>
</template>

<script>
export default {
  name: "seoWeb",
  data() {
    return {
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

<style scoped>
.flex {
  display: flex;
}

.flex .seo3PagesSize {
  width: 33%;
  margin-top: 5px;
  margin-left: 4px;
  height: 100px;
  border-radius: 30px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(219, 16, 209);
  background-color: rgb(243, 234, 214);
}

.flex .seo3PagesSize h3 {
  text-align: center;
}

.imagePosition .seoImage {
  width: 92%;
  height: 80%;
  margin-left: 30px;
  border-radius: 20px;
}

.imagePosition .fontstyle {
  width: 60%;
}



.imagePosition {
  display: flex;
}

.socialmedia {
  margin-left: 20px;
  font-size: 25px;
}

.centersocialmedia {
  margin-left: 45%;
}

.fontstyle p,
ol {
  font-weight: 600;
  color: rgb(117 109 118);
  font-size: large;
}

@media(max-width:1200px) {
  .flex {
    flex-direction: column;
  }

  .flex .seo3PagesSize {
    width: 30%;
    margin-top: 5px;
    margin-left: 35%;
    height: 70px;
    border-radius: 30px;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(104, 16, 219);
    background-color: rgb(243, 234, 214);
  }

  .imagePosition {
    flex-direction: column;
  }

  .imagePosition .seoImage {
    width: 92%;
    height: 80%;
    margin-left: 30px;
    border-radius: 20px;
  }
}
</style>
