<template>
  <div id="app">
		
		<navbar />

		<home-page />
		
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import HomePage from '@/views/HomePage.vue';

export default {
	name: 'App',
	components: {
		HomePage,
		Navbar
	}
}
</script>

<style>

* {
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
	color: rgba(0, 0, 0, 0.87);
}

.link:hover {
	color: rgba(0, 0, 0, 0.6);
}

</style>
