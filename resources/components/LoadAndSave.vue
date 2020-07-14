<template>
    <b-container fluid>
        <b-row class="my-3">
            <b-col sm="1"><label>讀取:</label></b-col>
            <b-col sm="2"><b-button id="loadButton" variant="outline-primary" @click="fetch">Load Data</b-button></b-col>
            <b-col sm="1"><b-spinner v-if="loading" label="Loading..." class="my-3"></b-spinner></b-col>
            <b-col sm="1"><label>儲存:</label></b-col>
            <b-col sm="2"><b-button id="saveButton" variant="outline-success" @click="save">Save Data</b-button></b-col>
        </b-row>
        <!-- below is code for modal dialogs-->
        <LoadModal />
        <SaveModal />
        <SaveFinishModal v-on:loadDataPage="loadDataPage" />
        <!-- above is code for modal dialogs-->
    </b-container>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import LoadModal from '../modals/LoadModal'
import SaveModal from '../modals/SaveModal'
import SaveFinishModal from '../modals/SaveFinishModal'

export default {
    name: "LoadAndSave",
    components: { LoadModal, SaveModal, SaveFinishModal },
    computed: mapGetters(['loading', 'locationSelected', 'ageSelected', 'records']),
    methods: { 
        ...mapActions(['fetchData', 'saveData']),
        fetch(){
            if(!this.locationSelected.length || !this.ageSelected.length){this.$bvModal.show('loadModal')}
            else{this.fetchData()}
        },
        async save(){
            if(!this.records.length){ this.$bvModal.show('saveModal')}
            else{
                await this.saveData()
                this.$bvModal.show('saveFinishModal')
            }
        },
        loadDataPage(){
            this.$bvModal.hide('saveFinishModal')
            let vm = this
            setTimeout(function(){ vm.$router.push('data') }, 1000);
        }
        
    }
}
</script>