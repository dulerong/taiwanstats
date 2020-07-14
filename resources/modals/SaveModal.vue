<template>
    <b-modal id="saveModal" hide-footer title="Reminder (儲存資料前須知)">
        <div class="d-block text-center"><h3>需事先讀取資料，目前數據為0筆!</h3></div>
        <b-button class="mt-3" variant="outline-danger" block @click="$bvModal.hide('saveModal')">關閉</b-button>
    </b-modal>
</template>

<script>
export default {
    name: "SaveModal"
}
</script>