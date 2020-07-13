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
        <b-modal id="deleteModal" hide-footer title="Reminder (刪除資料事先確認)">
            <div class="d-block text-center">
                <h3>確定刪除資料?</h3>
            </div>
            <b-button class="mt-3" variant="outline-danger" block @click="deleteSavedData(deleteId)">確定</b-button>
            <b-button class="mt-3" variant="outline-primary" block @click="$bvModal.hide('deleteModal')">取消</b-button>
        </b-modal>
        <b-modal id="nothingFound" hide-footer title="Reminder (無效ID)">
            <div class="d-block text-center">
                <h3>查無此資料!</h3>
            </div>
            <b-button class="mt-3" variant="outline-danger" block @click="$bvModal.hide('nothingFound')">關閉</b-button>
        </b-modal>
        <!-- above is code for modal dialogs-->
    </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
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
