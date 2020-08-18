export default {
	
	computed: {
		
		sectionName() {
			
			return this.$store.getters.currentSection.section_name
			
		},
		
		aspectName() {
			
			return (_.isEmpty(this.$store.getters.currentAspect))?'':this.$store.getters.currentAspect.aspect_name
			
		}
		
	}
	
}