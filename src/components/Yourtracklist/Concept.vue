<template>
	<section class="concept">
		<h4 class="title">Процесс работы</h4>

		<h5 class="title-h5">Концепт</h5>

		<div class="incut-block">
			<h6>Гипотезы пользовательских проблем</h6>
			<span class="body-1">Пользователям трудно найти, какой жанр или музыканта послушать </span>
		</div>

		<div class="semantic-part">
			<h6>Гипотезы о проблемах в yourtracklist</h6>
			<span class="body-1">
				Пользователю приоритетнее найти релиз определенного жанра или<br>
				исполнителя, а потом его послушать
			</span>
			
			<span class="body-1">
				Пользователи активно ищут через меню старые публикации<br>
				определенного исполнителя и миксы паблика
			</span>
			
			<span class="body-1">
				Пользователи испытывают неудобство при работе с меню и знают, как<br>
				его улучшить
			</span>
		</div>
		

		<div class="semantic-part">
			<h6>На кого ориентировались</h6>
			<span class="body-1">
				Предполагаемым пользователем нашего продукта был человек, для которого<br>
				yourtracklist — основной источник атмосферной электронной музыки. Он ценит этот<br>
				паблик, потому что музыка здесь погружает в эмоции — вдохновляет, заставляет<br>
				рефлексировать. Он выбирает именно yourtracklist, потому паблик не зацикливается<br>
				на определенном жанре, а ищет новый необычный звук. Здесь нет место популярности.<br>
				“Здесь атмосферная музыка от малоизвестных исполнителей”.
			</span>
		</div>

		<div class="semantic-part">
			<h6>Видение продукта</h6>
			<span class="body-1">
				Cобрать базу исполнителей на сайте с ссылками на их посты в yourtracklist, <br>
				bandcamp, itunes, spotify и других сервисах. Организовать поиск по тегам, по <br>
				исполнителю, по длительности релиза. Таким образом, преобразовать и <br>
				масштабировать уже имеющееся меню паблика, сделать его гибким. Через сайт <br>
				yourtracklist можно будет найти релизы определенного жанра/автора, а не послушать <br>
				музыку.
			</span>
		</div>


		<app-image-gallery 
			:images="[
				'https://sun9-46.userapi.com/c858520/v858520200/1aff4f/9J_vv1iuqps.jpg',
				'https://sun9-21.userapi.com/c858520/v858520200/1aff59/v4eD9iqOGc8.jpg',
				'https://sun9-19.userapi.com/c858520/v858520200/1aff63/t_ofE14bS0A.jpg'
			]"
		/>
		

	</section>
</template>

<script>
import AppImageGallery from '../AppImageGallery';

export default {
	name: 'concept',

	components: {
		AppImageGallery
	}
}
</script>

<style scoped>

.concept {
	margin-top: 4.5rem;
}
.title {
	margin-bottom: 2.5rem;
}
.title-h5 {
	margin-bottom: 2rem;
}

.incut-block > h6 {
	margin-bottom: 0.5rem;
}


</style>