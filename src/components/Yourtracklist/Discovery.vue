<template>
	<section>
		<h5>Этап Discovery. Поиск проблем/идей/гипотез</h5>

		<div class="semantic-part">
			<h6>Работа с пользователями </h6>
			<span class="body-1 mb-2">
				Сначала не понимали, где вообще копать. Поэтому решили в целом узнать о пользователях: 
				что это за люди, где они слушают музыку помимо yourtracklist, что им нравится/не нравится, 
				какими функциями пользуются. 
			</span>

			<span class="body-1">
				Начали с опроса, где пользователи слушают музыку. Получили количественное распределение 
				музыкальных сервисов, которыми пользуется наша аудитория. И немного инсайтов: 
				почему используют/не используют то или иное приложение, какие функции полезны/вызвали 
				интерес, почему пользуются/не пользуются платным сервисом.
			</span>
		</div>

		<single-image
			imageLink="https://sun9-56.userapi.com/c857228/v857228493/1badad/y4-_utn22W0.jpg"
			description='
			Из комментариев получили полезные 
			<a 
				href="https://docs.google.com/document/d/1hOQE6fuBP7_fAJGU0R1gM_1HTx8_1JBQ-9X3ZQkbIxo/edit?usp=sharing"
				target="_blank"
			>инсайты</a>'
		/>

		<span class="body-1">
			Следующим шагом провели <b>качественное тестирование: 
				<a
					href="https://docs.google.com/document/d/1oxUKPYzbbNmHyiNXJbZqgDgoxWl21CgtTcXjZnS158A"
					target="_blank"
					v-text="'пользовательские интервью'"
				/> 
				и
				<a
					href="https://docs.google.com/spreadsheets/d/1z9ctq-nNNxG34aJ4MFzHNobDTxRpxFKx5h0yVYv2qSY/edit?usp=sharing"
					target="_blank"
					v-text="'опрос'"
				/>.
			
			</b> Цели: узнать
		</span>

		<ul>
			<li class="mt-2 body-2">1) в каких ситуациях пользаватели слушают музыку</li>
			<li class="mt-2 body-2">2) как находят, что послушать</li>
			<li class="mt-2 body-2">3) в каких сервисах слушают музыку</li>
			<li class="mt-2 body-2">4) пользуются ли платными подписками</li>
			<li class="mt-2 body-2">5) какие есть проблемы при прослушивании музыки</li>
			<li class="mt-2 body-2">6) почему слушают музыку в ytl</li>
			<li class="mt-2 body-2">7) используют ли телеграм</li>
		</ul>

		<span class="body-1 mt-3">
			С помощью фреймворка <b>JTBD</b> выявили <b>job stories (ситуации, мотивы, ожидаемые цели)</b> пользователей
		</span>

		<single-image
			imageLink="https://sun9-13.userapi.com/c857228/v857228493/1badd3/_g7QhsMbkAA.jpg"
		/>

		<span class="body-1 mb-2">
			Чтобы <b>понять 
				<a
					href="https://docs.google.com/document/d/16xa87HyY5r3lYtePHupN1rt7DL79kwrNmq9ga-L30_E"
					target="_blank"
					v-text="'привычные паттерны взаимодействия'"
				/>
			</b> для пользователей с нашим пабликом и сервисами, мы попросили нескольких 
			человек показать, как они слушают музыку. Увидели для себя много инсайтов для 
			дальнейшего проектирования и опровержений наших предположений в концепте.
		</span>

		<span class="body-1">
			Исходя из всей накопленной информации построили 
			<b>
				<a
					href="https://docs.google.com/spreadsheets/d/1_UZoUPrbknE-uYF8poh7KI9HEpxwwMRdhr7QosCm3ec"
					target="_blank"
					v-text="'путь пользователя as is. '"
				/>
			</b>
			Выдели возможные и гипотетические драйверы и барьеры, с которыми сталкивается 
			пользователь.
		</span>

	</section>
</template>
