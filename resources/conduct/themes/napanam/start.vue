<template>
    <div>
    	<component v-bind:is="currentComponent"></component>
    </div>
</template>

<script>

import startConduct from './startConduct'

import survey from '../../mixins/survey'

export default {
    name: 'start',		
	mixins: [survey],    
    components: {
        startConduct
    },
    computed: {
        currentComponent: {
            get() {
                return this.$store.getters.currentComponent                
            },            
            set(value) {
            
            }
        }        
    }
}

</script>