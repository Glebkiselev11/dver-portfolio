<template>
	<nav
		id="navbar"
		class="navbar"
	>

		<div class="navbar-wrap">
			<h6 class="logo">Дарья Вербняк</h6>

			<ul class="tabs">
				<li>
					<a class="tab btn touch-target" href="#">Обо мне</a>
				</li>

				<li>
					<a class="tab btn touch-target" href="#">Проекты</a>
				</li>
			</ul>
		</div>

	</nav>
</template>

<script>
export default {
	name: 'navbar',

	data: () => ({
		prevScrollPos: null
	}),

	created() {
		this.prevScrollPos = window.pageYOffset;
		document.addEventListener('scroll', this.hideNavbarOnScrollDown)
	},

	beforeDestroy() {
		document.removeEventListener('scroll', this.hideNavbarOnScrollDown)
	},

	methods: {
		hideNavbarOnScrollDown() {
			const currScrollPos = window.pageYOffset;
			if (currScrollPos < this.prevScrollPos) {
				document.getElementById("navbar").style.top = "0";
			} else {
				document.getElementById("navbar").style.top = "-3.5rem";
			}

			this.prevScrollPos = currScrollPos;
		}
	}
}
</script>

<style scoped>

.navbar {
	position: fixed;
	top: 0;
	width: 100vw;
	height: 3.5rem;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
	background: white;
	transition: top 0.2s;
}

.navbar-wrap {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: auto 8.75rem;
	height: inherit;
}

/* ipad pro / ipad */
@media (min-width: 600px) and (max-width: 1024px) {
	.navbar-wrap {
		margin: auto 5.5rem;
	}
}


.tabs {
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
