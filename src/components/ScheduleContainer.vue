<template>
    <section id="fish-schedule">
        <section class="hour-container" v-for="hour in schedule" :key="hour.display">
            <h1 class="hour-name">{{ hour.display }}</h1>
            <ul class="fish-container">
                <FishContainer v-for="fish in hour.school" :key="fish" :fish="allFish[fish]" :fishImageMap="fishImageMap" />
            </ul>
        </section>
    </section>
</template>

<script>
import FishContainer from './FishContainer.vue'

export default {
    name: 'schedule',
    components: {
        FishContainer
    },
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
</style>
