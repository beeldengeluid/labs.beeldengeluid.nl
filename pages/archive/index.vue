<template>
  <Fragment>
    <Tags
      :style="{
        position: 'absolute',
        right: '8px',
        top: '30px',
      }"
      :tags="types"
      :filter="typesFilter"
      horizontal
      @toggle-tag="toggleType"
      @set-tag="setType"
    />
    <CardPage
      :cards="filteredCards"
      :title="title"
      :card-path="cardPath"
      :data-class="dataClass"
    />
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import CardPage from '~/components/CardPage'
import Tags from '~/components/visual/Tags'
import { getLocalePath } from '~/util/contentFallback'

const dataClass = 'archive'

export default {
  components: { Fragment, Tags, CardPage },
  async asyncData({ $content, app }) {
    const path = dataClass

    const articlesPath = await getLocalePath({
      $content,
      app,
      path,
    })
    const articles = await $content(articlesPath)
      .sortBy('createdAt', 'asc')
      .fetch()

    return { cards: articles }
  },
  data: () => ({
    title: dataClass,
    cardPath: dataClass + '-slug',
    dataClass,
    types: ['project', 'example', 'application'],
    typesFilter: [],
  }),
  head() {
    return {
      title: this.$t(dataClass),
    }
  },
  computed: {
    filteredCards() {
      return this.typesFilter.length === 0
        ? this.cards
        : this.cards.filter(
            (card) => card.type && this.typesFilter.includes(card.type)
          )
    },
  },
  methods: {
    toggleType(type) {
      if (this.typesFilter.includes(type)) {
        this.typesFilter = this.typesFilter.filter((t) => t !== type)
      } else {
        this.typesFilter = [...this.typesFilter, type]
      }

      if (this.typesFilter.length === this.types.length) {
        this.typesFilter = []
      }
    },
    setType(type) {
      if (this.typesFilter.includes(type)) {
        this.typesFilter = []
      } else {
        this.typesFilter = [type]
      }
    },
  },
}
</script>
