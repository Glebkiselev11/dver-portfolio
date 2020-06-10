<template>
	<section class="prev-section">
		<h3 class="title">Yourtracklist</h3>
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


		<div class="incut-block my-role">
			<h6>Моя роль</h6>
			<span class="description body-1">
				<b>Формулирование гипотез</b> (кто будет использовать продукт, какие
				пользовательские проблемы продукт сможет решить) и их
				<b>тестирование</b> (проведение интервью с пользователями, тестирование
				прототипов). <b>Генерация идей и интерфейсных решений в команде
				разработчиков</b>
			</span>
		</div>
	</section>
</template>

<script>
export default {
	name: 'prev-section'
}
</script>

<style scoped>

.prev-section {
	height: 100vh;
	background-color: var(--black-main);
}

.title {
	margin-bottom: .75rem;
}
.subtitle-1 {
	margin-bottom: 0.5rem;
	display: block;
}
.caption {
	display: block;
	margin-bottom: 2.5rem;
}

.overline {
	margin-bottom: 1rem;
	display: block;
}
.subtitle-2 {
	margin-bottom: 0.5rem;
}

.my-role {
	margin-top: 4.5rem;
}

.description {
	margin-top: 1rem;
	display: block;
}

</style>