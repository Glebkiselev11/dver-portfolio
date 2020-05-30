<template>
	<nav class="navbar">

		<div class="navbar-wrap">
			<h6>Дарья Вербняк</h6>

			<ul class="links">
				<li>
					<a class="link subtitle-1" href="#">Обо мне</a>
				</li>

				<li>
					<a class="link subtitle-1" href="#">Проекты</a>
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
	box-shadow: 0px 2px 5px -1px rgba(0,0,0,0.75);
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
	min-width: 170px;
}

</style>
