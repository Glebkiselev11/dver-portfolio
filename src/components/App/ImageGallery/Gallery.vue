<template>
	<div class="gallery">
		<img
			:src="currentImage"
			class="image"
		>


		<div class="description-wrap">
			<span class="count" v-text="count" />
			<span v-text="description" />
		</div>
		
		
	</div>
</template>

<script>
export default {
	name: 'gallery',

	props: {
		images: {
			type: Array,
			required: true
		},
	},

	data: () => ({
		currentIndex: 1
	}),

	computed: {
		currentImage() {
			return this.images[this.currentIndex].link;
		},

		description() {
			return `${this.images[this.currentIndex].description}`;
		},

		count() {
			return `${this.currentIndex + 1} из ${this.images.length}`;
		}
	},

	created() {

	}


};
</script>

<style scoped>

.gallery {
	position: fixed;
	transform: translateX(-50%) translateY(-50%);
	background: rgba(0, 0, 0, 0.6);
	overflow: hidden;
	height: 100vh;
	width: 100vw;
	top: 50%;
	left: 50%;
	z-index: 1;

	display: flex;
	align-content: center;
	justify-content: center;
}

.image {
	position: absolute;
  left: 50%;
  top: 50%;
	transform: translateX(-50%) translateY(-50%);
  width: auto;
  height: 80%;
}


.description-wrap {
	position: absolute;
	left: 3rem;
	bottom: 1.5rem;
}

.description-wrap > span {
	color: var(--secondary-main);
}

.description-wrap > .count {
	margin-right: 1rem;
}

</style>