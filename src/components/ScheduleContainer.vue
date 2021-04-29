<template>
    <section id="fish-schedule">
        <section class="hour-container" v-for="hour in schedule" :key="hour.display">
            <h1 class="hour-name">{{ hour.display }}</h1>
            <ul class="fish-container">
                <li class="fish" v-for="fish in hour.school" :key="fish">
                    <img :class="fishImage[allFish[fish].size].class" :src="require('@/assets/' + fishImage[allFish[fish].size].source)" :title="fishImage[allFish[fish].size].alt" :alt="fishImage[allFish[fish].size].alt">
                    <span>{{ allFish[fish].name }}</span>
                </li>
            </ul>
        </section>
    </section>
</template>

<script>
export default {
    name: 'schedule',
    props: {
        hours: Array,
        month: Number,
        allFish: Array,
        fishSchedule: Object
    },
    data() {
        let fishImageMap = {
            'x-small': {
                source: "images/fish.svg",
                alt: "Tiny fish",
                class: "fish-tiny"
            },
            small: {
                source: "images/fish.svg",
                alt: "Small fish",
                class: "fish-small"
            },
            medium: {
                source: "images/fish.svg",
                alt: "Medium fish",
                class: "fish-med"
            },
            'medium w/fin': {
                source: "images/fin-fish.svg",
                alt: "Medium fish with fin",
                class: "fish-med"
            },
            large: {
                source: "images/fish.svg",
                alt: "Large fish",
                class: "fish-large"
            },
            'x-large': {
                source: "images/fish.svg",
                alt: "Gigantic fish",
                class: "fish-x-large"
            },
            'xx-large': {
                source: "images/fish.svg",
                alt: "Gigantic fish",
                class: "fish-gigantic"
            },
            huge: {
                source: "images/fish.svg",
                alt: "Gigantic fish",
                class: "fish-gigantic"
            },
            'large w/fin': {
                source: "images/fin-fish.svg",
                alt: "Large fish with fin",
                class: "fish-gigantic"
            },
            long: {
                source: "images/long-fish.svg",
                alt: "Long fish",
                class: "fish-medium"
            }
        }

        let scheduleData = [];
        this.hours.forEach(hourData => {
            let currentSchedule = [];
            let schedule = this.fishSchedule[this.month];
            let hourNum = Number(hourData[0].value);

            // Will add at most two of these
            if (hourData[4].value == 'PM' && hourNum > 9 || hourData[4].value == 'AM' && hourNum < 4) {
                currentSchedule = currentSchedule.concat(schedule['9pm']);
            }

            if (hourData[4].value == 'PM' && hourNum > 4 || hourData[4].value == 'AM' && hourNum < 9) {
                currentSchedule = currentSchedule.concat(schedule['4pm']);
            }

            if (hourData[4].value == 'AM' && hourNum > 9 || hourData[4].value == 'PM' && hourNum < 4) {
                currentSchedule = currentSchedule.concat(schedule['9am']);
            }

            if (hourData[4].value == 'AM' && hourNum > 4 || hourData[4].value == 'PM' && hourNum < 9) {
                currentSchedule = currentSchedule.concat(schedule['4am']);
            }

            scheduleData.push({
                display: hourData[0].value + " " + hourData[4].value,
                school: [...new Set([...currentSchedule, ...schedule.allDay])]
            });
        });
        return {
            schedule: scheduleData,
            fishImage: fishImageMap
        }
    }
}
</script>

<style>
.hour-container {
    display: grid;
    grid-template-columns: 1fr 8fr;
    margin: 1em;
    border-radius: 1em;
}

.hour-container:nth-of-type(1) {
    background-color: #a0e7e5;
}

.hour-container:nth-of-type(2) {
    background-color: #b4f8c8;
}

.hour-container:nth-of-type(3) {
    background-color: #ffaebc;
}

.hour-name {
    display: flex;
    align-items: center;
    justify-content: center;
}

ul {
    padding-inline-start: 0;
}

li {
    list-style-type: none;
    margin: 1em;
    border-radius: 1em;
}

li:nth-of-type(n) {
    background-color: #fff1ad;
}

li:nth-of-type(2n) {
    background-color: #c5f9e5;
}

li:nth-of-type(3n) {
    background-color: #e5c5f9;
}

li:nth-of-type(4n) {
    background-color: #c5d9f9;
}

.fish img {
    margin: 2px;
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
    width: 40px;
}

.fish-x-large {
    width: 50px;
}

.fish-gigantic {
    width: 60px;
}
</style>
