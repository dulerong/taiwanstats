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
        <b-modal id="loadModal" hide-footer title="Reminder (讀取資料前須知)">
            <div class="d-block text-center"><h3>請選擇區域及年齡!</h3></div>
            <b-button class="mt-3" variant="outline-danger" block @click="$bvModal.hide('loadModal')">關閉</b-button>
        </b-modal>
        <b-modal id="saveModal" hide-footer title="Reminder (儲存資料前須知)">
            <div class="d-block text-center"><h3>需事先讀取資料，目前數據為0筆!</h3></div>
            <b-button class="mt-3" variant="outline-danger" block @click="$bvModal.hide('saveModal')">關閉</b-button>
        </b-modal>
        <b-modal id="saveFinishModal" hide-footer title="Reminder (儲存資料完成通知)">
            <div class="d-block text-center">
                <h3>資料儲存完畢</h3>
                <h3>自動更新畫面至DATA頁面!</h3>    
            </div>
            <b-button class="mt-3" variant="outline-primary" block @click="loadDataPage">關閉</b-button>
        </b-modal>
        <!-- above is code for modal dialogs-->
    </b-container>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "LoadAndSave",
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
            setTimeout(function(){ vm.$router.push('data') }, 1500);
        }
        
    }
}
</script>