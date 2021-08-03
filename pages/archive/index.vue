<template>
  <CardPage
    :cards="cards"
    :title="title"
    :card-path="cardPath"
    :data-class="dataClass"
  />
</template>

<script>
import CardPage from '~/components/CardPage'
import { getLocalePath } from '~/util/contentFallback'

const dataClass = 'archive'

export default {
  components: { CardPage },
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
  }),
  head() {
    return {
      title: this.$t(dataClass),
    }
  },
}
</script>
