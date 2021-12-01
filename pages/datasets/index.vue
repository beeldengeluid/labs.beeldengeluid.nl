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
import { enrichDatasets } from '~/util/dataset'

const dataClass = 'dataset'

export default {
  components: { CardPage },
  async asyncData({ $content, app }) {
    // datasets are not localized (yet)
    const dataPath = 'datacatalog0001'
    const data = await $content(dataPath).fetch()
    const datasetsRaw = data['@graph'].filter(
      (node) => node['@type'] === 'https://schema.org/Dataset'
    )
    const datacatalog = data['@graph']
    const datasets = enrichDatasets(datasetsRaw, datacatalog)

    return { cards: datasets }
  },
  data: () => ({
    title: dataClass + 's',
    cardPath: dataClass + 's' + '-slug',
    dataClass,
  }),
  head() {
    return {
      title: this.$t(dataClass + 's'),
    }
  },
}
</script>
