<template>
	<footer class="footer-wrap container">
		
		<div class="contacts-wrap">
			
			<sub class="overline color-secondary-main">Контакты</sub>

			<div>
				<h5>
					<a href="mailto:dver99design@gmail.com" class="color-secondary-main">dver99design@gmail.com</a>
				</h5>

				<h5 class="color-secondary-main">telegram: @daria_ver99</h5>
			</div>
			
		</div>

	</footer>
</template>

<style scoped>

.footer-wrap {
	background-color: var(--primary-dark);
	margin-top: 6.5rem;
	height: 20.5rem;
}

.color-secondary-main {
	color: var(--secondary-main);
}

.contacts-wrap {
	grid-column: center-col;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

</style>