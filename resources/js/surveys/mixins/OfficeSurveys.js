export default {

    methods: {

        fetchOfficeSurveys() {

            return axios.get('/api/selections/surveys/'+this.$store.state.profile.office, this.$store.state.config)

        }

    }

}