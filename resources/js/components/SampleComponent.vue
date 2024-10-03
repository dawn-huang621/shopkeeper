<script setup>
import { ref, computed } from "vue";
import store from '/resources/js/store/index.js';


const test = computed(() => store.state.test)

defineProps({
    msg: String
})
</script>

<template>
    <h1 class="bg-purple-500">hi.zzzzz</h1>
    <h1>hi.zzzzz</h1>
    {{ test }}
</template>