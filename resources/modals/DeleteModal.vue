<template>
    <b-modal id="deleteModal" hide-footer title="Reminder (刪除資料事先確認)">
        <div class="d-block text-center">
            <h3>確定刪除資料?</h3>
        </div>
        <b-button class="mt-3" variant="outline-danger" block @click="$emit('deleteSavedData')">確定</b-button>
        <b-button class="mt-3" variant="outline-primary" block @click="$bvModal.hide('deleteModal')">取消</b-button>
    </b-modal>
</template>

<script>
export default {
    name: "DeleteModal"
}
</script>