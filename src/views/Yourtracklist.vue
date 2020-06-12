<template>
	<div>

		<!-- Prev-content -->
		<prev-section />

		<div class="container main-container">

			<!-- Portfolio Left Navigation Bar -->
			<ul class="portfolio-nav">
				<li
					v-for="(anchor, index) of navAnchors"
					:key="index"
					class="anchor-item"
				>
					<a
						href="#"
						v-text="anchor"
						class="anchor-link"
					/>
				</li>
			</ul>

			<!-- Center Content -->
			<div class="portfolio-content">
				
				<about-project />

				<concept />

			</div>
			
		</div>

	</div>

	
</template>

<script>
import PrevSection from '@/components/Yourtracklist/PrevSection.vue';
import AboutProject from '@/components/Yourtracklist/AboutProject.vue';
import Concept from '@/components/Yourtracklist/Concept.vue';

export default {
	name: 'yourtracklist',
	components: {
		PrevSection,
		AboutProject,
		Concept
	},

	data: () => ({
		navAnchors: [
			'О проекте',
			'Концепт',
			'Поиск проблем/идей/гипотез',
			'Синтез',
			'Создание прототипа',
			'Дизайн',
			'Итог',
			'Чего можно было избежать'
		]
	})
}
</script>

<style scoped>

.main-container {
	padding-top: 7rem;
}

/* Left nav bar */
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


/* Content */
.portfolio-content {
	grid-column: center-col;
	width: 100%;
}

</style>