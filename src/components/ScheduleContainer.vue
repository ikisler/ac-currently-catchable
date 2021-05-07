<template>
    <section id="fish-schedule">
        <section class="hour-container" v-for="hour in schedule" :key="hour.display">
            <h1 class="hour-name">{{ hour.display }}</h1>
            <ul class="fish-container">
                <li class="fish" v-for="fish in hour.school" :key="fish">
                    <img :class="fishImageMap[allFish[fish].size].class" :src="require('@/assets/' + fishImageMap[allFish[fish].size].source)" :title="fishImageMap[allFish[fish].size].alt" :alt="fishImageMap[allFish[fish].size].alt">
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
        allFish: Object,
        fishSchedule: Object,
        fishImageMap: Object
    },
    computed: {
        schedule() {
            let scheduleData = [];
            this.hours.forEach(hourData => {
                let currentSchedule = [];
                let schedule = this.fishSchedule[this.month];
                let hourNum = Number(hourData[0].value);

                // Will add at most two of these
                if (hourData[4].value == 'PM' && hourNum >= 9 || hourData[4].value == 'AM' && hourNum <= 4) {
                    currentSchedule = currentSchedule.concat(schedule['9pm']);
                }

                if (hourData[4].value == 'PM' && hourNum >= 4 || hourData[4].value == 'AM' && hourNum <= 9) {
                    currentSchedule = currentSchedule.concat(schedule['4pm']);
                }

                if (hourData[4].value == 'AM' && hourNum >= 9 || hourData[4].value == 'PM' && hourNum <= 4) {
                    currentSchedule = currentSchedule.concat(schedule['9am']);
                }

                if (hourData[4].value == 'AM' && hourNum >= 4 || hourData[4].value == 'PM' && hourNum <= 9) {
                    currentSchedule = currentSchedule.concat(schedule['4am']);
                }

                scheduleData.push({
                    display: hourData[0].value + " " + hourData[4].value,
                    school: [...new Set([...currentSchedule, ...schedule.allDay])]
                });
            });

            return scheduleData;
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

.fish-container {
    display: flex;
    flex-wrap: wrap;
}

ul {
    padding-inline-start: 0;
}

li {
    list-style-type: none;
    margin: 1em;
    border-radius: 1em;
    padding: 2px 10px;
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
