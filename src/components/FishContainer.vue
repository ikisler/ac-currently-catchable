<template>
    <li class="fish clickable" @click="openDetails">
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
.fish {
    list-style-type: none;
    margin: 1em;
    border-radius: 1em;
    padding: 2px 10px;
}

.fish:nth-of-type(n) {
    background-color: #fff1ad;
}

.fish:nth-of-type(2n) {
    background-color: #c5f9e5;
}

.fish:nth-of-type(3n) {
    background-color: #e5c5f9;
}

.fish:nth-of-type(4n) {
    background-color: #c5d9f9;
}

.fish img {
    margin: 2px;
    vertical-align: middle;
}

.fish-tiny {
    width: 10px;
}

.fish-small {
    width: 20px;
}

.fish-med {
    width: 30px;
}

.fish-large {
    width: 50px;
}

.fish-x-large {
    width: 60px;
}

.fish-gigantic {
    width: 70px;
}
</style>
