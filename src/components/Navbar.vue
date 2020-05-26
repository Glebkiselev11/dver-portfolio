<template>
	<nav class="navbar">

		<div class="navbar-wrap">
			<h4>Дарья Вербняк</h4>

			<ul class="links">
				<li>
					<a class="link" href="#">Обо мне</a>
				</li>

				<li>
					<a class="link" href="#">Проекты</a>
				</li>
			</ul>
		</div>

	</nav>
</template>

<script>
export default {
	name: 'navbar'
}
</script>

<style scoped>

.navbar {
	height: 56px;
	box-shadow: 0px 2px 5px -1px rgba(0,0,0,0.75);
	background: white;
}

.navbar-wrap {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: auto 3em;
	height: inherit;
}

.links {
	display: flex;
	justify-content: space-between;
	min-width: 170px;
}

</style>
