<template>
    <b-container fluid>
            <b-row class="my-3">
                <b-col sm="1"><label for="comment">備考欄:</label></b-col>
                <b-col sm="8"><b-form-input id="comment" v-model="comment" placeholder="Coments/感想..."></b-form-input></b-col>
            </b-row>
    </b-container>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "Comment",
    data(){ return{ comment: '' } },
    methods: {...mapActions(['changeComment'])},
    watch:{ comment: function(val, oldVal){ this.changeComment(val) } }
}
</script>