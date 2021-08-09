<template>
  <table class="text-left">
    <tbody>
      <tr v-if="isLinkObject(object)">
        <td colspan="2">
          <ObjectLink
            :icon-key="'link'"
            :href="object.url"
            :name="object.name"
          />
        </td>
      </tr>
      <tr v-else-if="isEmailObject(object)">
        <td colspan="2">
          <ObjectLink
            :icon-key="'email'"
            :href="`mailto:${object.email}`"
            :name="object.name"
          />
        </td>
      </tr>
      <tr v-for="(value, key) in object" v-else :key="key">
        <th v-if="renderable(value)" class="text-capitalize">{{ key }}</th>
        <td v-if="renderable(value)">
          <!-- String -->
          <span v-if="typeof value == 'string'">
            <LinkText :value="value" />
          </span>

          <!-- Number -->
          <span v-else-if="typeof value == 'number'">
            <LinkText :value="value" />
          </span>

          <!-- Typed URI -->
          <span v-else-if="isObjectLinkFromSchema(value)">
            <ObjectLinkFromSchema :value="value" />
          </span>

          <!-- Array of non-objects -->
          <ul v-else-if="Array.isArray(value)">
            <li v-for="v in value" :key="v"><LinkText :value="v" /></li>
          </ul>
        </td>

        <td v-else colspan="2">
          <h2 class="text-capitalize">{{ key }}</h2>

          <!-- Array of objects -->
          <Fragment v-if="isObjectArray(value)">
            <DataTable v-for="(v, index) in value" :key="index" :object="v" />
          </Fragment>

          <!-- Object -->
          <Fragment v-else-if="typeof value == 'object'">
            <DataTable :object="value" />
          </Fragment>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { Fragment } from 'vue-fragment'
import ObjectLinkFromSchema from './ObjectLinkFromSchema'
import ObjectLink from './ObjectLink'
import DataTable from './DataTable'
import LinkText from './LinkText'
import { isObjectLinkFromSchema } from '~/util/objectLink'
import { isEmailObject, isLinkObject } from '~/util/frontmatter'

const isNonObjectArray = (value) =>
  Array.isArray(value) && value.length > 0 && typeof value[0] !== 'object'
const isObjectArray = (value) =>
  Array.isArray(value) && value.length > 0 && typeof value[0] === 'object'

export default {
  name: 'DataTable',
  components: {
    DataTable,
    Fragment,
    LinkText,
    ObjectLink,
    ObjectLinkFromSchema,
  },
  props: {
    object: {
      type: Object,
      required: true,
      default: null,
    },
  },
  methods: {
    isObjectLinkFromSchema,
    isEmailObject,
    isLinkObject,
    isNonObjectArray,
    isObjectArray,
    renderable(value) {
      return (
        isObjectLinkFromSchema(value) ||
        !isObjectArray(value) ||
        typeof value !== 'object'
      )
    },
  },
}
</script>

<style scoped lang="scss">
.list-none {
  list-style: none;
  padding-left: 0;
}
table {
  border-collapse: collapse;
  th {
    padding: 10px 20px 10px 0;
  }
  td {
    padding: 10px 10px 10px 0;
  }
}
</style>
