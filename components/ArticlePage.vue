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
          ...(articleDefined.contacts && {
            contacts: articleDefined.contacts,
          }),
          ...(articleDefined.website_url && {
            website: articleDefined.website_url,
          }),
          ...(articleDefined.website && {
            website: articleDefined.website,
          }),
          ...(articleDefined.partners && {
            partners: articleDefined.partners,
          }),
        }"
        class="mb-2"
      />

      <v-divider class="my-5" />

      <p class="caption">
        {{ $t("last_update") }}: {{ formatDate(article.updatedAt) }}
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
import { formatDate } from '~/util/date'
import { filterUndefined } from '~/util/frontmatter'
import { classColorIndex } from '~/config/theme'

export default {
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
        ? `/images/placeholders/placeholder-blog.jpg`)
        : this.article.image.includes('/uploads/')
        ? this.article.image
        : `/images/${this.article.image}`,
      imageSrcset: !this.article.image
        ? `/images/placeholders/placeholder-blog.jpg`
        : this.article.image.includes('/uploads/')
        ? this.article.image
        : `/images/${this.article.image}`
    }
  },
  methods: {
    formatDate,
  },
  computed: {
    articleDefined() {
      return filterUndefined(this.article)
    },
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
