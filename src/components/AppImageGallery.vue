<template>
	<!-- Image album (store 3 or more pictures) -->
	<section class="image-gallery">
		<span
			v-for="(image, index) of images"
			:key="index"
			:style="{ 
				backgroundImage: `url('${image}')`,
				flexBasis: index < 1 ? '100%' : '48.5%',
				minHeight: index < 1 ? '23rem' : '12rem',
				marginBottom: index < 1 ? '1.25rem' : '0',
			}"
			:alt="`${index + 1}-picture`"
			class="image-item"
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
}

.image-item {
	display: block;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}

.image-item:hover {
	cursor: pointer;
}

</style>
