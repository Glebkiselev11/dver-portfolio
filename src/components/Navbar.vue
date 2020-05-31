<template>
	<nav class="navbar">

		<div class="navbar-wrap">
			<h6>Дарья Вербняк</h6>

			<ul class="links">
				<li>
					<a class="link subtitle-1 touch-target" href="#">Обо мне</a>
				</li>

				<li>
					<a class="link subtitle-1 touch-target" href="#">Проекты</a>
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
	height: 3.5rem;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
	background: white;
	margin-bottom: 2.75rem;
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
	align-items: center;
	min-width: 170px;
}

.touch-target {
	display: block;
	height: 3.5rem;
	display: flex;
	align-items: center;
}

</style>
