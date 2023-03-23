<template>
  <tr>
    <th>{{ title }}</th>
    <td>
      <span v-if="typeof value == 'string'">{{ value }}</span>
      <DataTable v-if="typeof value == 'object'" :object="value" />
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    value: {
      type: [Number, String, Object, Array],
      required: true,
      default: null,
    },
  },
}
</script>
