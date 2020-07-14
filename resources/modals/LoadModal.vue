<template>
    <b-modal id="loadModal" hide-footer title="Reminder (讀取資料前須知)">
        <div class="d-block text-center"><h3>請選擇區域及年齡!</h3></div>
        <b-button class="mt-3" variant="outline-danger" block @click="$bvModal.hide('loadModal')">關閉</b-button>
    </b-modal>
</template>

<script>
export default {
    name: "LoadModal"
}
</script>