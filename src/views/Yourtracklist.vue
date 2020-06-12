<template>
	<div>

		<!-- Prev-content -->
		<prev-section />

		<div class="container main-container">

			<!-- Portfolio Left Navigation Bar -->
			<app-side-bar-nav 
				:navAnchors="navAnchors"
			/>

			<!-- Center Content -->
			<div class="portfolio-content">
				
				<about-project id="about-project" />

				<concept id="concept" />

			</div>
			
		</div>

	</div>

	
</template>

<script>
import AppSideBarNav from '@/components/AppSideBarNav.vue';

import PrevSection from '@/components/Yourtracklist/PrevSection.vue';
import AboutProject from '@/components/Yourtracklist/AboutProject.vue';
import Concept from '@/components/Yourtracklist/Concept.vue';

export default {
	name: 'yourtracklist',
	components: {
		PrevSection,
		AboutProject,
		Concept,
		AppSideBarNav
	},

	data: () => ({
		navAnchors: [
			{ title: 'О проекте', link: '/portfolio#about-project' },
			{ title: 'Концепт', link: '/portfolio#concept' },
			{ title: 'Поиск проблем/идей/гипотез', link: '/portfolio#' },
			{ title: 'Синтез', link: '/portfolio#' },
			{ title: 'Создание прототипа', link: '/portfolio#' },
			{ title: 'Дизайн', link: '/portfolio#' },
			{ title: 'Итог', link: '/portfolio#' },
			{ title: 'Чего можно было избежать', link: '/portfolio#' }
		]
	})
}
</script>

<style scoped>

.main-container {
	padding-top: 7rem;
}


/* Content */
.portfolio-content {
	grid-column: center-col;
	width: 100%;
}

</style>