<template>
  <v-row
    :id="id"
    :class="'article-heading ' + colorClass"
    :style="backgroundImageStyle"
  >
    <v-col>
      <!-- Responsive background image -->
      <component :is="'style'" type="text/css">
        @media (max-width: 600px) { #{{ id }} { background-image:
        {{
          getBackGroundImage(
            article.image
              ? require(`~/assets/images/${article.image}?size=600`).src
              : ''
          )
        }}
        } } @media (max-width: 930px) { #{{ id }} { background-image:
        {{
          getBackGroundImage(
            article.image
              ? require(`~/assets/images/${article.image}?size=930`).src
              : ''
          )
        }}
        } } @media (min-width: 930px) { #{{ id }} { background-image:
        {{
          getBackGroundImage(
            article.image
              ? require(`~/assets/images/${article.image}?size=1200`).src
              : ''
          )
        }}
        } }
      </component>

      <!-- Content -->
      <section>
        <h3>
          <NuxtLink class="category" :to="localePath(path)">
            {{ $t(dataClass) }}
          </NuxtLink>
        </h3>

        <div class="d-flex justify-space-between align-center mb-4">
          <h1>{{ article.title }}</h1>
          <v-chip
            v-if="article.type"
            color="primary"
            class="text-uppercase"
            small
            label
          >
            {{ article.type }}
          </v-chip>
        </div>
        <p>{{ article.subtitle }}</p>
      </section>
    </v-col>
  </v-row>
</template>

<script>
import { classColorIndex, classColors } from '~/config/theme'
import { getDarkenedImageOverlayCSS } from '~/util/color'

export default {
  props: {
    article: {
      type: Object,
      required: true,
      default: null,
      validator: (object) => {
        return object && object.title && object.image && object.subtitle
      },
    },
    dataClass: {
      type: String,
      required: true,
      default: '',
    },
  },

  data() {
    const color = classColors[this.dataClass]
    const image = this.article.image
      ? require(`~/assets/images/${this.article.image}?size=930`).src
      : ''
    const backgroundImageStyle = {
      backgroundImage: getDarkenedImageOverlayCSS(image, color, 0.9),
    }

    return {
      colorClass: classColorIndex[this.dataClass],
      color,
      id: 'article-heading',
      backgroundImageStyle,
    }
  },
  computed: {
    path() {
      return this.article.dir.split('/').pop()
    },
  },
  methods: {
    getBackGroundImage(image) {
      return getDarkenedImageOverlayCSS(image, this.color, 0.9)
    },
  },
}
</script>
<style scoped lang="scss">
.article-heading {
  background-size: cover;
  background-position: center center;
  padding: 30px 10px;
}

h1 {
  color: white;
}

a.category {
  text-decoration: none;
  color: white;
  opacity: 0.6;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  transition: opacity 0.3s ease-out;
  &:hover {
    opacity: 1;
  }
}

p {
  color: white;
  font-size: 1.1em;
  margin: 0;
}
</style>
