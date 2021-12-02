<template>
  <div class="dataset-info">
    <v-img
      v-if="dataset.image"
      position="top center"
      width="100%"
      max-width="100%"
      height="200px"
      :src="require(`~/assets/images/${dataset.image}?size=300`).src"
      :srcset="
        require(`~/assets/images/${dataset.image}?{sizes:[300,600]}`).srcSet
      "
      :gradient="
        'to top right, ' +
        getRGBAColor(color, 0.85) +
        ', ' +
        getRGBAColor(color, 0.3)
      "
    />

    <h2 class="my-3">{{ dataset.title }}</h2>
    <p>{{ dataset.description }}</p>

    <!-- Stats -->
    <div
      :style="{ fontSize: '0.8em' }"
      class="text-uppercase grey--text lighten-4 title-font pb-4"
    >
      <div
        v-for="(stat, index) of stats"
        :key="index"
        :style="{
          lineHeight: '2.4em',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        }"
      >
        <v-icon
          size="17"
          color="grey lighten-4"
          class="pb-0 mr-2"
          v-text="stat.icon"
        >
        </v-icon>
        <strong> {{ stat.text }} </strong>
      </div>
    </div>

    <!-- Button -->
    <v-row>
      <v-col>
        <v-btn
          color="primary"
          :to="
            localePath({
              name: 'datasets-slug',
              params: { slug: dataset.slug },
            })
          "
          nuxt
        >
          {{ $t('explore_dataset') }}
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getRGBAColor } from '~/util/color'
import { classColors } from '~/config/theme'

export default {
  props: {
    dataset: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      color: classColors.dataset,
    }
  },
  computed: {
    stats() {
      return [
        {
          icon: 'mdi-domain',
          text: this.dataset.creator,
        },
        {
          icon: 'mdi-file-document-multiple',
          text:
            new Intl.NumberFormat().format(
              this.dataset.distribution?.length
                ? this.dataset.distribution[0].contentSize
                : '-'
            ) +
            ' ' +
            this.$t('records'),
        },
        {
          icon: 'mdi-calendar-range',
          // TODO: replace with real data
          text: '1899 - 1978',
        },
      ]
    },
  },
  methods: {
    getRGBAColor,
  },
}
</script>

<style lang="scss" scoped>
.dataset-info {
  height: 100%;
  width: 100%;
}
</style>
