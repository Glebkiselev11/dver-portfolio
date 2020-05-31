<template>
	<!-- Home page -->
	<div class="container">
		
		<div class="content">
			<div class="image-wrap">
				<!-- Here will be image -->

			</div>

			<h5 class="about-text">
				Привет! Я Дарья Вербняк. Я продуктовый дизайнер,
				открытый ко всему новому. Люблю процесс создания
				продукта. Считаю, что хороший дизайн можно создать
				только взаимодействуя с командой
			</h5>

			<!-- Experience -->
			<div class="experience-wrap">
				<a href="#" class="overline experience-title">Опыт</a>

				<h5 style="margin-bottom: 0.5rem">Продуктовый дизайнер в Yourtracklist</h5>

				<caption>Октябрь 2019 — Апрель 2020</caption>

			</div>

		</div>



	</div>
</template>

<script>

export default {
	name: 'about-page',

}
</script>

<style scoped>

.content {
	grid-column: center-col;
	width: 100%;
}

.image-wrap {
	width: 20rem;
	height: 20rem;
	border-radius: 50%;
	margin-bottom: 4rem;
	background: rgb(139, 139, 139);
}

.about-text {
	max-width: 40rem;
	margin-bottom: 6.5rem;
}

.experience-wrap {
	display: flex;
	flex-direction: column;
}

.experience-title {
	
	margin-bottom: 1rem;
}

</style>