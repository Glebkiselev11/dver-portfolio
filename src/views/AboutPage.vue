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
				<sub class="overline">Опыт</sub>

				<h5 class="experience-name">Продуктовый дизайнер в Yourtracklist</h5>

				<caption>Октябрь 2019 — Июль 2020</caption>

				<a class="body-3" href="#">Смотреть проект в портфолио</a>

			</div>

		</div>



	</div>
</template>

<style scoped>

.content {
	grid-column: center-col;
	margin-top: 10rem;
}

.image-wrap {
	width: 20rem;
	height: 20rem;
	border-radius: 50%;
	margin-bottom: 3rem;
	background: rgb(139, 139, 139);
	background-image: url('../assets/avatar-black.jpg');
	background-size: contain;
}

.about-text {
	margin-bottom: 6.5rem;
}

.experience-wrap {
	display: flex;
	flex-direction: column;
}

.experience-wrap > caption {
	margin-bottom: 1rem;
}

.experience-name {
	margin-bottom: 1rem;
}

/* phone */
@media (max-width: 599px) {
	.image-wrap {
		margin-left: auto;
		margin-right: auto;
		height: 17.5rem;
		width: 17.5rem;
	}
}

/* small phone */
@media (min-width: 100px) and (max-width: 359px) {
	.image-wrap {
		height: 15rem;
		width: 15rem;
	}
}

</style>