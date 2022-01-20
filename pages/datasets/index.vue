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
import { enrichDatasets } from '~/util/dataset'
import { getLocalePath } from '~/util/contentFallback'
import { parseColor } from '~/util/color'

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
    const datasets = enrichDatasets(datasetsRaw, datacatalog)

    // extend datasets with frontmatter
    for (let i = 0, len = datasets.length; i < len; i++) {
      const dataset = datasets[i]

      // Custom markdown content for dataset
      const mdPath = await getLocalePath({
        $content,
        app,
        path: 'datasets/' + dataset.slug,
      })
      const page = await $content(mdPath)
        .fetch()
        .catch((e) => {
          // ignore error of missing page
        })
      if (page) {
        // assign defined page props to dataset, parse color vars (e.g. red.base)
        const pageDefined = Object.entries(page)
          .filter(
            ([key, value]) =>
              value !== undefined &&
              value !== '' &&
              value !== [] &&
              value !== {}
          )
          .reduce((obj, [key, value]) => {
            obj[key] = value
            return obj
          }, {})
        Object.assign(dataset, pageDefined, {
          color: parseColor(page.color),
        })
      }
    }

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
