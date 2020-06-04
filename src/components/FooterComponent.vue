<template>
	<footer class="footer-wrap container">
		
		<div class="contacts-wrap">
			
			<sub class="overline">Контакты</sub>

			<div>
				<h5 style="margin-bottom: 0.25rem">
					<a href="mailto:dver99design@gmail.com">dver99design@gmail.com</a>
				</h5>

				<h5>telegram: @daria_ver99</h5>
			</div>
			
		</div>

	</footer>
</template>

<script>
export default {
	name: 'footer-component'
}
</script>

<style scoped>

.footer-wrap {
	margin-top: 6.5rem;
	margin-bottom: 12.5rem; 
}

.contacts-wrap {
	grid-column: center-col;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

</style>