<template>
	<div class="gallery">
		<img
			:src="currentImage"
			class="image"
		>
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
		currentIndex: 0
	}),

	computed: {
		currentImage() {
			return this.images[this.currentIndex];
		}
	}


};
</script>

<style scoped>

.gallery {
	position: fixed;
	transform: translateX(-50%) translateY(-50%);
	background: rgba(0, 0, 0, 0.6);
	padding: 100%;
	width: 80%;
	top: 50%;
	left: 50%;
	z-index: 1;
}

.image {
	width: 100%;

}

</style>