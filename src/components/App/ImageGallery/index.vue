<template>
	<!-- Image album (store 3 or more pictures) -->
	<section class="image-gallery">
		<div
			v-for="(image, index) of images"
			:key="index"

			:style="{ 
				display: index > 2 ? 'none' : '',
				backgroundImage: `url('${image}')`
			}"
			:class="{
				'first-image' : index < 1,
				'third-non-last-image' : index === 2 && images.length > 3
			}"

			:alt="`${index + 1}-picture`"
			@click="openImageGallery"
			class="image-item"
		/>

		<h3 
			v-if="images.length > 2"
			class="how-moch-more"
			v-text="howMochMore"
		/>

		<gallery 
			v-if="isShowGallery"
			:images="images"
		/>


	</section>
</template>

<script>
import Gallery from './Gallery.vue';

export default {
	name: 'image-gallery',

	components: {
		Gallery
	},

	props: {
		images: {
			type: Array,
			required: true
		},
	},

	data: () => ({
		isShowGallery: false
	}),

	computed: {
		howMochMore() {
			return `+${this.images.length - 2}`;
		}
	},

	methods: {
		openImageGallery() {
			this.isShowGallery = true;
		}
	}
}
</script>

<style scoped>

.image-gallery {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	height: 35rem;
	justify-content: space-between;
	margin: 3.5rem 0;
	position: relative;
}

.image-item {
	width: 48.5%;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height: 33%;
}

.image-item:hover {
	cursor: pointer;
}

.first-image {
	width: 100%;
	height: 66%;
	margin-bottom: 1.25rem;
}

/* if images > 3 */
.third-non-last-image {
	filter: brightness(40%);
}
.how-moch-more {
	color: var(--secondary-main);
	position: absolute;
	right: 9rem;
	bottom: 4rem;
}



</style>
