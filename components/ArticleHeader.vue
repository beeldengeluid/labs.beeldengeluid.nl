<template>
  <v-row
    :id="id"
    :class="'article-heading ' + colorClass"
    :style="backgroundImageStyle"
  >
    <v-col>
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
    return {
      imageSrc: !this.article.image
        ? require(`~/assets/images/placeholders/placeholder-blog.jpg?size=930`)
            .src
        : this.article.image.includes('/uploads/')
        ? this.article.image
        : require(`~/assets/images/${this.article.image}?size=930`).src,
      colorClass: classColorIndex[this.dataClass],
      id: 'article-heading',
    }
  },
  computed: {
    path() {
      return this.article.dir.split('/').pop()
    },
    color() {
      return classColors[this.dataClass]
    },
    backgroundImageStyle() {
      return {
        backgroundImage: getDarkenedImageOverlayCSS(
          this.imageSrc,
          this.color,
          0.9
        ),
      }
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
