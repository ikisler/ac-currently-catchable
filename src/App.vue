<template>
    <header id="title">
        <h1>Animal Crossing New Horizons Currently Catchable</h1>
    </header>
    <header>
        <button class="button-hours button-hours-prev clickable" @click="prevHour()">⏴ Previous</button>
        <DateHeaderContainer :date="currentDate" :time="currentTime" />
        <button class="button-hours button-hours-next clickable" @click="nextHour()">Next ⏵</button>
    </header>
    <ScheduleContainer :hours="hours" :month="month" :allFish="allFish" :fishSchedule="fishSchedule" :fishImageMap="fishImageMap" />
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
        this.start = new Date();
        this.updateUI();

        return {
            currentDate: this.currentDate,
            currentTime: this.currentTime,
            hours: this.hours,
            month: this.month,
            allFish: allFish,
            fishSchedule: fishSchedule,
            fishImageMap: fishImageMap,
            start: this.start,
            end: this.end
        }
    },
    methods: {
        nextHour() {
            this.start.setDate(this.end.getDate());
            this.start.setMonth(this.end.getMonth());
            this.start.setHours(this.end.getHours() + 1);
            this.updateUI();
        },
        prevHour() {
            this.start.setHours(this.start.getHours() - 3);
            this.updateUI();
        },
        updateUI() {
            this.setHours();
            this.setDisplayDate();
            this.setDisplayTime();
        },
        setHours() {
            let now = new Date(this.start.getTime());
            this.month = now.getMonth();
            let timeFormat = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric' });
            let currentHour = timeFormat.formatToParts(now);
            now.setHours(now.getHours() + 1);
            let nextHour = timeFormat.formatToParts(now);
            now.setHours(now.getHours() + 1);
            let nextNextHour = timeFormat.formatToParts(now);
            this.hours = [currentHour, nextHour, nextNextHour];
            this.end = now;
        },
        setDisplayDate() {
            let dateFormat = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric'});
            this.currentDate = dateFormat.format(this.start);
        },
        setDisplayTime() {
            let timeFormat = new Intl.DateTimeFormat('en-US', { hour: 'numeric'});
            let startTime = timeFormat.format(this.start);
            let endTime = timeFormat.format(this.end);
            this.currentTime = startTime + ' - ' + endTime;
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

h1, h2, h3, h4 {
    font-weight: normal;
    font-family: 'Patua One', sans-serif, cursive;
}

#app {
    max-width: 800px;
    margin: 0 auto;
}

header {
    text-align: center;
}

.button-hours {
    border: none;
    background-color: #5c4f3b;
    color: #fff;
    padding: 0.3em 0.8em 0.3em 0.8em;
    border-radius: 1em;
    font-size: 1.2em;
    vertical-align: middle;
    cursor: pointer;
}

.button-hours-next {
    float: right;
    margin-right: 2em;
}

.button-hours-prev {
    float: left;
    margin-left: 2em;
}

.clickable {
    cursor: pointer;
    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.5);
}
</style>
