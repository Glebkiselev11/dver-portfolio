<template>
  <div id="app">
		
		<navbar />

		<about-page />

		<footer-component />
		
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import AboutPage from '@/views/AboutPage.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
	name: 'App',
	components: {
		AboutPage,
		Navbar,
		FooterComponent
	}
}
</script>

<style>

/* Material design style */
* {
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
	color: rgba(0, 0, 0, 0.87);
	font-family: 'Lato', sans-serif;
}

.container {
	display: grid;
	width: 100%;
	grid-template-columns: [left-col] 3fr [center-col] 6fr [right-col] 3fr;
	grid-gap: 1em;
	/* grid-template-columns: repeat(12, 1fr); */
}

h1 {
	font-weight: 300;
	letter-spacing: -1.5;
	font-size: 6rem;
}

h2 {
	font-weight: 300;
	letter-spacing: -0.5;
	font-size: 3.75rem;
}

h3 {
	font-weight: 400;
	letter-spacing: 0;
	font-size: 3rem;
}

h4 {
	font-weight: 400;
	letter-spacing: 0.25;
	font-size: 2.125rem;
}

h5 {
	font-weight: 400;
	letter-spacing: 0;
	font-size: 1.5rem;
}

h6 {
	font-weight: 500;
	letter-spacing: 0.15;
	font-size: 1.25rem;
}

.subtitle-1 {
	font-weight: 400;
	letter-spacing: 0.15;
	font-size: 1rem;
}

.subtitle-2 {
	font-weight: 500;
	letter-spacing: 0.1;
	font-size: 0.875rem;
}

.body-1 {
	font-weight: 400;
	letter-spacing: 0.5;
	font-size: 1rem;
}

.body-2 {
	font-weight: 400;
	letter-spacing: 0.25;
	font-size: 0.875rem;
}

.btn {
	font-weight: 500;
	letter-spacing: 1.25;
	font-size: 0.875rem;
	text-transform: uppercase;
}

caption {
	font-weight: 400;
	letter-spacing: 0.4;
	font-size: 0.75rem;
	text-align: left;
}

.overline {
	font-weight: 400;
	letter-spacing: 1.5;
	font-size: 0.625rem;
	text-transform: uppercase;
}


.link:hover {
	color: rgba(0, 0, 0, 0.6);
}

</style>
