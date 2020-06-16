<template>
	<div>

		<!-- Prev-content -->
		<prev-section />

		<div class="container main-container">

			<!-- Portfolio Left Navigation Bar -->
			<side-bar-nav
				class="side-bar"
				:navAnchors="navAnchors"
			/>

			<!-- Center Content -->
			<div class="portfolio-content">
				
				<about-project id="about-project" />

				<h4 class="title">Процесс работы</h4>

				<concept id="concept" />

				<discovery id="discovery" />

				<define id="define" />

				<develop id="develop" />

				<deliver id="deliver" />

				<conclusion id="conclusion" />

			</div>
			
		</div>

	</div>

	
</template>

<script>
import SideBarNav from '@/components/App/SideBarNav';

import PrevSection from '@/components/Yourtracklist/PrevSection.vue';
import AboutProject from '@/components/Yourtracklist/AboutProject.vue';
import Concept from '@/components/Yourtracklist/Concept.vue';
import Discovery from '@/components/Yourtracklist/Discovery.vue';
import Define from '@/components/Yourtracklist/Define.vue';
import Develop from '@/components/Yourtracklist/Develop.vue';
import Deliver from '@/components/Yourtracklist/Deliver.vue';
import Conclusion from '@/components/Yourtracklist/Conclusion.vue'

export default {
	name: 'yourtracklist',
	components: {
		PrevSection,
		AboutProject,
		Concept,
		SideBarNav,
		Discovery,
		Define,
		Develop,
		Deliver,
		Conclusion
	},

	data: () => ({
		navAnchors: [
			{ title: 'О проекте', link: '/portfolio#about-project' },
			{ title: 'Концепт', link: '/portfolio#concept' },
			{ title: 'Поиск проблем/идей/гипотез', link: '/portfolio#discovery' },
			{ title: 'Синтез', link: '/portfolio#define' },
			{ title: 'Создание прототипа', link: '/portfolio#develop' },
			{ title: 'Тестирование прототипа', link: '/portfolio#deliver' },
			{ title: 'Итог', link: '/portfolio#conclusion' }
		]
	})
}
</script>

<style scoped>

.main-container {
	padding-top: 7rem;
}

.side-bar {
	grid-column: [left-col];
}

.title {
	margin-top: 5rem;
	margin-bottom: 2.5rem;
}

/* Content */
.portfolio-content {
	grid-column: center-col;
	width: 100%;
}


/* ipad pro / ipad */
@media (max-width: 1024px) {
	.side-bar {
		display: none;
	}
}

</style>