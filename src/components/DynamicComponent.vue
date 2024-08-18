<template>
  <component :is="compiledTemplate"></component>
</template>

<script>
import { defineComponent, computed } from "vue"
import { compile } from "vue/dist/vue.esm-bundler.js"

export default defineComponent({
  props: {
      data: {
          type: String,
          required: true
      }
  },
  setup(props) {
      return { compiledTemplate: computed(() => compile(props.data)) }
  },
})
</script>