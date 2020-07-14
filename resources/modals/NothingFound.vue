<template>
    <b-modal id="nothingFound" hide-footer title="Reminder (無效ID)">
        <div class="d-block text-center">
            <h3>查無此資料!</h3>
        </div>
        <b-button class="mt-3" variant="outline-danger" block @click="$bvModal.hide('nothingFound')">關閉</b-button>
    </b-modal>
</template>

<script>
export default {
    name: "NothingFound"
}
</script>