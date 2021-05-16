<template>
    <li class="fish" @click="openDetails">
        <img :class="fishImageMap[fish.size].class" :src="require('@/assets/' + fishImageMap[fish.size].source)" :title="fishImageMap[fish.size].alt" :alt="fishImageMap[fish.size].alt">
        <span>{{ fish.name }}</span>
    </li>
    <FishDetailsContainer v-show="isDetailsVisible" @close="closeDetails" :fishDetails="fish" />
</template>

<script>
import FishDetailsContainer from './FishDetailsContainer.vue'

export default {
    name: 'fish-details',
    components: {
        FishDetailsContainer
    },
    props: {
        fish: Object,
        fishImageMap: Object
    },
    data() {
        return {
            isDetailsVisible: false
        }
    },
    methods: {
        openDetails() {
            this.isDetailsVisible = true;
        },
        closeDetails() {
            this.isDetailsVisible = false;
        }
    }
}
</script>

<style>
</style>
