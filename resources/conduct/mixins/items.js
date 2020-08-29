export default {
	
	computed: {
		
		sectionName() {
			
			return this.$store.getters.currentSection.section_name
			
		},
		
		sectionNameTranslated() {

			return this.$store.getters.currentSection.translated

		},		
		
		aspectName() {
			
			return (_.isEmpty(this.$store.getters.currentAspect))?'':this.$store.getters.currentAspect.aspect_name
			
		}
		
	}
	
}