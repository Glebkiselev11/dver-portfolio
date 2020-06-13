<template>
	<section class="container">
		<div class="prev-section">
			<h2 class="title">Yourtracklist</h2>
			<sub class="subtitle-1">Cтриминговая площадка электронной андеграундной музыки</sub>
			<caption class="caption">Октябрь 2019 — Июль 2020</caption>

			<div class="function">
				<sub class="overline">Обязанности</sub>
				<ul>
					<li class="subtitle-2">Проработка идеи</li>
					<li class="subtitle-2">Пользовательские интервью</li>
					<li class="subtitle-2">UX дизайн</li>
					<li class="subtitle-2">Информационная архитектура</li>
					<li class="subtitle-2">Прототипирование</li>
					<li class="subtitle-2">Юзабилити тестирование</li>
				</ul>
			</div>


			<div class="my-role">
				<sub class="overline">Моя роль</sub>
				<span class="description body-1">
					Формулирование гипотез (кто будет использовать продукт, какие
					пользовательские проблемы продукт сможет решить) и их тестирование
					(проведение интервью с пользователями, тестирование прототипов). Генерация
					идей и интерфейсных решений в команде разработчиков
				</span>
			</div>
		</div>
		
	</section>
</template>

<script>
export default {
	name: 'prev-section'
}
</script>

<style scoped>

.container {
	background-color: var(--primary-main);
	height: 100vh;
}

.prev-section {
	grid-column: center-col;
	align-self: center;
}

.title {
	margin-bottom: .75rem;
	color: var(--white-font);
}
.subtitle-1 {
	margin-bottom: 0.5rem;
	display: block;
	color: var(--white-font);
}
.caption {
	display: block;
	margin-bottom: 3.5rem;
	color: var(--white-font);
}

.overline {
	margin-bottom: 1rem;
	display: block;
	color: var(--white-font);
}
.subtitle-2 {
	margin-bottom: 0.5rem;
	color: var(--white-font)
}

.my-role {
	margin-top: 3.5rem;
	color: var(--white-font);
}


.description {
	margin-top: 1rem;
	display: block;
	color: var(--white-font);
}

</style>