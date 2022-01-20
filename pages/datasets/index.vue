<template>
  <CardPage
    :cards="datasets"
    :title="title"
    :card-path="cardPath"
    :data-class="dataClass"
  />
</template>

<script>
import CardPage from '~/components/CardPage'
import { enrichDatasets, extendDatasetsWithFrontmatter } from '~/util/dataset'

const dataClass = 'dataset'

export default {
  components: { CardPage },
  async asyncData({ $content, app }) {
    // datasets are not localized (yet)
    const dataPath = 'datacatalog0001'
    const data = await $content(dataPath).fetch()
    const datasetsRaw = data['@graph'].filter(
      (node) => node['@type'] === 'sdo:Dataset'
    )
    const datacatalog = data['@graph']
    let datasets = enrichDatasets(datasetsRaw, datacatalog)
    datasets = await extendDatasetsWithFrontmatter(
      datasets,
      $content,
      app,
      'datasets/'
    )

    return { datasets }
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
