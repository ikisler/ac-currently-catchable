<template>
    <div class="modal-backdrop" @click="close">
        <div class="fish-details">
            <button class="fish-details-close">Close</button>
            <h3>{{ fishDetails.name }}</h3>
            <span class="fish-details-name"><b>Size:</b></span><span>{{ fishDetails.size.charAt(0).toUpperCase() + fishDetails.size.slice(1) }}</span>
            <span class="fish-details-name"><b>Location:</b></span><span>{{ fishDetails.location }}</span>
            <span class="fish-details-name"><b>Sell price:</b></span><span>{{ fishDetails.sell.toLocaleString() }} bells</span>
            <span class="fish-details-name" v-if="hasRarity"><b>Rarity:</b></span><span v-if="hasRarity">{{ fishDetails.rarity }}</span>
            <span class="fish-details-name" v-if="hasCatches"><b>Required number of catches:</b></span><span v-if="hasCatches">{{ fishDetails.catch }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'fish-details',
    props: {
        fishDetails: Object
    },
    data() {
        return {};
    },
    computed: {
        hasRarity() {
            return this.fishDetails.rarity != '';
        },
        hasCatches() {
            return this.fishDetails.catch > 0;
        }
    },
    methods: {
        close() {
            this.$emit('close');
        }
    }
}
</script>

<style>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}

.fish-details {
    position: relative;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: grid;
    gap: 10px;
    grid-template-columns: 50% 50%;
    padding: 1em;
    border-radius: 1em;
}

.fish-details h3 {
    grid-column: 1 / 3;
}

.fish-details-name {
    text-align: right;
    grid-column: 1 / 2;
}

.fish-details-close {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    padding: 10px;
    background: transparent;
}
</style>
