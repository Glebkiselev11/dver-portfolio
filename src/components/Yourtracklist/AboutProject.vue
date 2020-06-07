<template>
	<section class="about-project">
		<h4 class="title">О проекте</h4>

		<span class="body-1 description">
			Паблик yourtracklist был основан в 2015 году Вконтакте. Аудитория росла, появлялись 
			новые идеи подачи контента. Паблик осваивал другие площадки — soundcloud, 
			bandcamp, telegram. Выделился отдельный паблик lost2432615184 с музыкой в жанре 
			ambient и dron. Появился лейбл на bandcamp, создавались миксы (за неделю, месяц,
			тематические), меню с архивами релизов.
		</span>

		<h6 class="problem-title">Проблемы yourtracklist</h6>

		<span class="body-1">С увеличением аудитории фидбек от пользователей не увеличивается</span>

		<span class="body-1">
			Трудная навигация по контенту (15к постов). Теги по жанрам<br>
			невозможно проставить ко всем старым публикациям
		</span>

		<span class="body-1">
			Сложно собрать всех исполнителей в базу (возможность расширения<br>
			имеющего меню ограничены)
		</span>

		<span class="body-1">
			Количество плейлистов, которое вк позволяет создавать, всего 2к.<br>
			Приходится удалять старые
		</span>


		<span class="body-1">
			Посты тонут в ленте. Старые релизы забыты, их надо было только<br>
			публиковать заново
		</span>


	</section>
</template>

<script>
export default {
	name: 'about-project'
};
</script>

<style scoped>

.about-project {
	margin-top: 4.5rem;
}

.title {
	margin-bottom: 2.5rem;
}

.description {
	margin-bottom: 2rem;
	display: block;
}

.problem-title {
	margin-bottom: 1rem;
}


</style>
