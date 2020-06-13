<template>
	<div class="mb-7 mt-7">
		<img
			:src="imageLink"
			class="single-image"
			@click="zoom"
		>

		<div
			v-show="isZoom"
			class="zoomed-content"
			@click="zoomOut"
		>

			<img
				:src="imageLink"
				class="zoomed-image"
			>
		</div>
		
	</div>
</template>

<script>
export default {
	name: 'app-single-image-display',

	props: {
		imageLink: {
			type: String,
			required: true
		}
	},

	data: () => ({
		isZoom: false
	}),

	methods: {
		zoom() {
			this.isZoom = true;
			document.addEventListener('scroll', this.zoomOut);
			document.addEventListener('keydown', this.keydown);
		},

		keydown(e) {
			if (e.key === 'Escape') {
				this.zoomOut();
			}
		},

		zoomOut() {
			this.isZoom = false;
			document.removeEventListener('scroll', this.zoomOut);
			document.removeEventListener('keydown', this.keydown);
		}
	}
}
</script>

<style scoped>

.single-image {
	width: 100%;
	cursor: zoom-in;
}

.zoomed-content {
	position: fixed;
	transform: translateX(-50%) translateY(-50%);
	background: rgba(0, 0, 0, 0.6);
	padding: 100%;
	width: 80%;
	top: 50%;
	left: 50%;
}

.zoomed-image {
	width: 100%;
}

</style>
