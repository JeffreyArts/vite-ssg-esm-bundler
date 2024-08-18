<template>
    <div>
        <h1>Home</h1>
        <DynamicComponent data="<RouterLink to='/page-1'>Page 1</RouterLink>" />
    </div>
</template>


<script>
import { defineComponent } from "vue"
import DynamicComponent from "./../components/DynamicComponent.vue"

export default defineComponent ({ 
    name: "homePage",
    components: { 
        DynamicComponent
    },
})

</script>