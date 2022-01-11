<template>
  <div>
    <ArticleHeader :article="article" :data-class="dataClass" />

    <section class="markdown-style pt-5">
      <v-img
        v-if="article.image"
        position="top center"
        width="930px"
        class="header-image"
        :src="imageSrc"
        :srcset="imageSrcset"
      />

      <!-- Optional article navigation -->
      <!-- <nav>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav> -->

      <nuxt-content :document="article" />

      <v-divider class="my-5" />

      <!-- Display selected article fiels if present -->
      <data-table
        :object="{
          ...(article.contacts && { contacts: article.contacts }),
          ...(article.website_url && { website: article.website_url }),
          ...(article.website && { website: article.website }),
          ...(article.partners && { partners: article.partners }),
        }"
        class="mb-2"
      />

      <v-divider class="my-5" />

      <p class="caption">
        {{ $t('last_update') }}: {{ formatDate(article.updatedAt) }}
      </p>

      <!-- <v-divider class="my-5" /> -->

      <!-- relations -->
      <ArticleRelations
        :datasets="article.datasets"
        :projects="article.projects"
        :blogs="article.blogs"
      />

      <PrevNext :prev="prev" :next="next" />
    </section>
  </div>
</template>

<script>
import ArticleHeader from './ArticleHeader'
import ArticleRelations from './ArticleRelations'
import PrevNext from './PrevNext'
import DataTable from './DataTable'
import { formatDate } from '~/util/date'
import { classColorIndex } from '~/config/theme'

export default {
  components: { ArticleRelations, PrevNext, ArticleHeader, DataTable },
  props: {
    article: {
      type: Object,
      required: true,
      default: () => ({
        title: 'Empty article',
        subtitle: '',
        slug: '',
        updatedAt: new Date(),
        datasets: [],
        tags: [],
      }),
    },
    prev: {
      type: Object,
      required: false,
      default: null,
    },
    next: {
      type: Object,
      required: false,
      default: null,
    },
    dataClass: {
      type: String,
      required: true,
      default: '',
    },
  },
  data() {
    return {
      colorClass: classColorIndex[this.dataClass] + '--text',
      imageSrc: !this.article.image
        ? require(`~/assets/images/placeholders/placeholder-blog.jpg?size=930`)
            .src
        : this.article.image.includes('/uploads/')
        ? this.article.image
        : require(`~/assets/images/${this.article.image}?size=930`).src,
      imageSrcset: !this.article.image
        ? require(`~/assets/images/placeholders/placeholder-blog.jpg?{sizes:[620,930,1200,1600]}`)
            .srcSet
        : this.article.image.includes('/uploads/')
        ? this.article.image
        : require(`~/assets/images/${this.article.image}?{sizes:[620,930,1200,1600]}`)
            .srcSet,
    }
  },
  methods: {
    formatDate,
  },
}
</script>

<style scoped lang="scss">
.header-image {
  max-width: calc(100% + 100px);
  margin: 20px -50px;
  border-radius: 5px;

  @media (max-width: 800px) {
    margin: 20px 0;
    max-height: 66vw;
    width: 100%;
    max-width: 100%;
  }
}
</style>
