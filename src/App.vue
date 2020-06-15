<template>
  <div id="app">
		
		<navbar />

		<main class="main">
			<router-view/>
		</main>
		

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
  --black-font: rgba(0, 0, 0, 0.87);
	--white-font: #ffffff;

	--primary-main: #212121;
	--primary-light: #484848;
	--primary-dark: #000000;

	--secondary-main: #fafafa;
	--secondary-light: #ffffff;
	--secondary-dark: #c7c7c7;

}

/* Material design style */
* {
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
	color: var(--black-font);
	font-family: 'Roboto', sans-serif;
	background-color: transparent;
}

html {
	background-color: var(--secondary-main);
}

.main {
	min-height: 70vh;
}

a {
	text-decoration: underline;
	text-decoration-color: rgba(0, 0, 0, 0.87);
}

.container {
	display: grid;
	justify-content: center;
	grid-template-columns: [left-col] 18rem [center-col] 41rem [right-col] 18rem;
	grid-gap: 10rem;
}

/* ipad pro / ipad */
@media (min-width: 600px) and (max-width: 1024px) {
	.container {
		grid-template-columns: [center-col] 1fr;
		padding-left: 5.5rem;
		padding-right: 5.5rem;
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
	line-height: 150%;
}

h6 {
	font-weight: 500;
	letter-spacing: 0.15;
	font-size: 1.25rem;
	line-height: 160%;
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
}

.body-2 {
	font-weight: 400;
	letter-spacing: 0.25;
	font-size: 0.875rem;
	line-height: 160%;
	display: block;
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
	background: var(--secondary-dark);
	padding: 2rem 3.5rem;
}

.semantic-part {
	margin-top: 2.5rem;
}

.semantic-part > h6 {
	margin-bottom: 1.5rem;
}

/* Divider */
hr {
	border-color: rgba(0,0,0,.12);
	margin: 2.5rem 0;
	border-width: 1px 0 0;
}


/* Margins */
.mt-1 {
	margin-top: 0.5rem;
}
.mt-2 {
	margin-top: 1rem;
}
.mt-3 {
	margin-top: 1.5rem;
}
.mt-4 {
	margin-top: 2rem;
}
.mt-5 {
	margin-top: 2.5rem;
}
.mt-6 {
	margin-top: 3rem;
}
.mt-7 {
	margin-top: 3.5rem;
}

.mb-1 {
	margin-bottom: 0.5rem;
}
.mb-2 {
	margin-bottom: 1rem;
}
.mb-3 {
	margin-bottom: 1.5rem;
}
.mb-4 {
	margin-bottom: 2rem;
}
.mb-5 {
	margin-bottom: 2.5rem;
}
.mb-6 {
	margin-bottom: 3rem;
}
.mb-7 {
	margin-bottom: 3.5rem;
}

</style>
