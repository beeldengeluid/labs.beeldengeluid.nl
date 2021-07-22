<template>
  <ObjectLink :icon-key="iconKey" :href="href" :name="name" />
</template>

<script>
import ObjectLink from './ObjectLink'
import { isObjectLinkFromSchema } from '~/util/objectLink'

export default {
  components: { ObjectLink },
  props: {
    value: {
      type: Object,
      required: true,
      validator: isObjectLinkFromSchema,
    },
  },
  data() {
    return {
      iconKey: this.value['@type'].toLowerCase() || 'link',
      href: this.value['@id'],
      name: this.value.name,
    }
  },
}
</script>
