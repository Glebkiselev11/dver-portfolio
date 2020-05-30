<template>
	<footer class="footer-wrap container">
		
		<div class="contacts-wrap">
			
			<span class="overline">Контакты</span>

			<h5>
				<a href="mailto:dver99design@gmail.com">dver99design@gmail.com</a>
			</h5>

			<div class="socials-wrap">
				<p>inst</p>
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
}

.contacts-wrap {
	grid-column: center-col;
	height: 8.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

</style>