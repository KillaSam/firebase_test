<template>
    <div class="animate-spin">
        <svg class="relative w-28 h-28 flex items-center justify-center">
            <circle class="w-full h-full circle animate-loader" cx="50" cy="50" r="45"></circle>
        </svg>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style scoped>
    .circle{
        fill:none;
        stroke-width: 7;
        stroke: #349A89;
        stroke-linecap: round;
        stroke-dasharray: 440;
        stroke-dashoffset: 440;
        transform: translate(5px, 5px);
    }
    
</style>