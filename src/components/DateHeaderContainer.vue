<template>
    <header id="date-header">
        <span>
            {{ date }}
        </span>
        <span>
            {{ time }}
        </span>
    </header>
</template>

<script>
export default {
	name: 'date-header',
	props: {
		date: String,
		time: String
	}
}
</script>

<style>
#date-header {
    text-align: center;
    font-size: 1.2em;
}

#date-header span {
    margin: auto 10px auto 10px;
}
</style>