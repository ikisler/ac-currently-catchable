<template>
    <header id="title">
        <h1>Animal Crossing New Horizons Currently Catchable</h1>
    </header>
    <DateHeaderContainer :date="currentDate" :time="currentTime" />
    <ScheduleContainer v-bind:hours="hours" v-bind:month="month" :allFish="allFish" :fishSchedule="fishSchedule" :fishImageMap="fishImageMap" />
</template>

<script>
import DateHeaderContainer from './components/DateHeaderContainer.vue'
import ScheduleContainer from './components/ScheduleContainer.vue'
import allFish from './config/fish.json';
import fishSchedule from './config/fishSchedule.json';
import fishImageMap from './config/fishImageMap.json';

export default {
    name: 'App',
    components: {
    ScheduleContainer,
    DateHeaderContainer
    },
    data() {
        let now = new Date();
        let dateFormat = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric'});
        let dateString = dateFormat.format(now);
        let timeFormat = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric' });
        let timeString = timeFormat.format(now);
        let currentHour = timeFormat.formatToParts(now);
        now.setHours(now.getHours() + 1);
        let nextHour = timeFormat.formatToParts(now);
        now.setHours(now.getHours() + 1);
        let nextNextHour = timeFormat.formatToParts(now);
        let hours = [currentHour, nextHour, nextNextHour];
        let month = now.getMonth();

        return {
            currentDate: dateString,
            currentTime: timeString,
            hours: hours,
            month: month,
            allFish: allFish,
            fishSchedule: fishSchedule,
            fishImageMap: fishImageMap
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Patua+One&display=swap');

body {
    background-color: #fcefdb;
    font-family: 'Open Sans', sans-serif;
}

h1 {
    font-weight: normal;
    font-family: 'Patua One', sans-serif, cursive;
    text-align: center;
}

#app {
    max-width: 800px;
    margin: 0 auto;
}
</style>
