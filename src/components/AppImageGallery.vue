<template>
	<!-- Image album (store 3 or more pictures) -->
	<section class="image-gallery">
		<img
			v-for="(image, index) of images"
			:key="index"
			:src="image"
			:style="{ 
				display: index > 2 ? 'none' : ''
			}"
			:class="{
				'first-image' : index < 1,
				'third-non-last-image' : index === 2 && images.length > 2
			}"
			:alt="`${index + 1}-picture`"
			class="image-item"
		/>

		<h3 
			v-if="images.length > 2"
			class="how-moch-more"
			v-text="howMochMore"
		/>


	</section>
</template>

<script>
export default {
	name: 'app-image-gallery',

	props: {
		images: {
			type: Array,
			required: true
		},
	},

	computed: {
		howMochMore() {
			return `+${this.images.length - 2}`;
		}
	}
}
</script>

<style scoped>

.image-gallery {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: space-between;
	min-height: 35.625rem;
	margin: 3.5rem 0;
	position: relative;
}

.image-item {
	width: 48.5%;
}

.image-item:hover {
	cursor: pointer;
}

.first-image {
	width: 100%;
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
