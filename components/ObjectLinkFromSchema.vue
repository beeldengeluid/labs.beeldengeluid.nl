<template>
  <ObjectLink :icon-key="iconKey" :href="href" :name="name" />
</template>

<script>
import ObjectLink from './ObjectLink'
import { isObjectWithIdTypeName } from '~/util/objectsFromSchema'

export default {
  components: { ObjectLink },
  props: {
    value: {
      type: Object,
      required: true,
      validator: isObjectWithIdTypeName,
    },
  },
  data() {
    return {
      iconKey: this.value['@type']?.toLowerCase() || 'link',
      href: this.value['@id'],
      name: this.value.name,
    }
  },
}
</script>
