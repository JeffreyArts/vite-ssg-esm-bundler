<template>
    <div>
        <h1>Page 1</h1>
        <DynamicComponent data="<RouterLink to='/'>Home</RouterLink>" />
    </div>
</template>


<script>
import { defineComponent } from "vue"
import DynamicComponent from "./../components/DynamicComponent.vue"

export default defineComponent ({ 
    name: "pageOne",
    components: { 
        DynamicComponent
    },
})

</script>