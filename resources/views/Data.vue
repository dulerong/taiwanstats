<template>
    <b-container fluid>
        <b-jumbotron header="過去儲存的資料" class="container mt-3">   
            <b-form class="my-3" inline>
                <label for="delete">刪除資料ID:</label>
                <b-input class="m-3" id="delete" v-model="deleteId" placeholder="Enter ID to delete..."></b-input>
                <b-button variant="danger" @click="checkDeleteId">DELETE</b-button>
            </b-form>
            <div v-if="savedData.length === 0">目前沒有儲存資料</div>
        </b-jumbotron>
        <b-table striped hover stacked="md" :items="savedData"></b-table>
        <!-- below is code for modal dialogs-->
        <DeleteModal v-on:deleteSavedData="deleteSavedData(deleteId)"/>
        <NothingFound />
        <!-- above is code for modal dialogs-->
    </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import DeleteModal from '../modals/DeleteModal'
import NothingFound from '../modals/NothingFound'

export default {
    components: { DeleteModal, NothingFound },
    data(){ return{ deleteId: '' } },
    computed: mapGetters(['savedData']),
    created(){ this.retrieveSavedData();}, 
    methods:{ 
        ...mapActions(['retrieveSavedData', 'deleteSavedData']),
        checkDeleteId(){
            if(this.savedData.some(record => record.id === Number(this.deleteId))){this.$bvModal.show('deleteModal')}
            else{this.$bvModal.show('nothingFound')}
        }
    }
}

</script>

<style scoped>
@media (max-width: 700px) { 
    .jumbotron h1{
        font-size: 30px;
    }
}
</style>
