<template>
	<!-- Portfolio Left Navigation Bar -->
	<ul class="portfolio-nav">
		<li
			v-for="(anchor, index) of navAnchors"
			:key="index"
			class="anchor-item"
			:class="{
				'anchor-item--active' : $route.fullPath === anchor.link
			}"
		>
			<router-link
				:to="anchor.link"
				v-text="anchor.title"
				class="anchor-link"
			/>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'side-bar',

	props: {
		navAnchors: {
			type: Array,
			required: true
		}
	}
};
</script>

<style scoped>

.portfolio-nav {
	grid-column: left-col;
	position: sticky;
	top: 5rem;
	width: 100%;
	max-height: 20rem;
	display: flex;
	flex-direction: column;
	
}
.anchor-item {
	border-left: 0.125rem solid rgba(0, 0, 0, 0.164);
}
.anchor-item--active {
	border-left: 0.125rem solid var(--black-font);
}

.anchor-link {
	display: block;
	margin: 1rem auto 1rem 1.25rem;
	text-decoration: none;
}
</style>