<template>
  <div id="app">
		
		<navbar />

		<router-view/>

		<footer-component />
		
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
	name: 'App',
	components: {
		Navbar,
		FooterComponent
	}
}
</script>

<style>

:root {
  --black: rgba(0, 0, 0, 0.87);
}

/* Material design style */
* {
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
	color: var(--black);
	font-family: 'Roboto', sans-serif;
}

a {
	text-decoration: underline;
	text-decoration-color: rgba(0, 0, 0, 0.87);
}

.container {
	display: grid;
	margin-top: 10.5rem;
	margin-left: 3rem;
	margin-right: 3rem;
	grid-template-columns: [left-col] 3fr [center-col] 6fr [right-col] 3fr;
	grid-gap: 1rem;
}

/* ipad pro / ipad */
@media (min-width: 600px) and (max-width: 1024px) {
	.container {
		grid-template-columns: [center-col] 1fr;
		margin-left: 5.5rem;
		margin-right: 5.5rem;
	}
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
	line-height: 170%;
	font-size: 1rem;
	display: block;
	margin-bottom: 1rem;
}

.body-2 {
	font-weight: 400;
	letter-spacing: 0.25;
	font-size: 0.875rem;
}

.body-3 {
	font-weight: 500;
	letter-spacing: 0.25;
	font-size: 1rem;
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
	margin-bottom: 1.5rem;
}

.tab {
	text-decoration: none;
}

.tab:hover {
	color: rgba(0, 0, 0, 0.6);
	cursor: pointer;
}


.incut-block {
	background: rgba(0, 0, 0, 0.048);
	padding: 2rem 3.5rem;
}

.semantic-part {
	margin-top: 2rem;
}

.semantic-part > h6 {
	margin-bottom: 1rem;
}

</style>
