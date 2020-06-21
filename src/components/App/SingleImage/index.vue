<template>
	<div class="mb-7 mt-7">
		<img
			:src="imageLink"
			class="single-image"
			@click="zoom"
		>

		<span
			v-if="description"
			class="body-2 mt-2"
			v-html="description"
		/>

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
	name: 'single-image',

	props: {
		imageLink: {
			type: String,
			required: true
		},

		description: {
			type: String,
			default: null
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
	cursor: zoom-out;
	z-index: 1;
}

.zoomed-image {
	width: 100%;
	
}

</style>
