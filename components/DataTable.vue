<template>
  <table>
    <tbody>
      <tr v-for="(value, key) in object" :key="key">
        <th v-if="renderable(value)">{{ key }}</th>
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
          <h2 class="text-capitalize mb-3">{{ key }}</h2>

          <!-- Array of objects -->
          <Fragment v-if="isObjectArray(value)">
            <ul v-if="isEmailArray(value)" class="list-none">
              <li v-for="(v, index) in value" :key="index" class="my-2">
                <ObjectLink
                  :icon-key="'email'"
                  :href="`mailto:${v.email}`"
                  :name="v.name"
                />
              </li>
            </ul>
            <DataTable
              v-for="(v, index) in value"
              v-else
              :key="index"
              :object="v"
            />
          </Fragment>

          <!-- Object -->
          <DataTable v-else-if="typeof value == 'object'" :object="value" />
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
import { isEmailObject, isEmailArray } from '~/util/frontmatter'

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
    isEmailArray,
    isNonObjectArray,
    isObjectArray,
    renderable: (value) =>
      isObjectLinkFromSchema(value) ||
      !isObjectArray(value) ||
      typeof value !== 'object',
  },
}
</script>

<style scoped lang="scss">
.list-none {
  list-style: none;
  padding-left: 0;
}
</style>
