<template>
    <b-form-checkbox-group v-model="selected" name="selected">
        <div class="my-3">Location Selected: <strong>{{ selected }}</strong></div>
        <b-container>
            <b-row>
                <b-col md><b-form-checkbox value="新北市板橋區">板橋區</b-form-checkbox></b-col>
                <b-col md><b-form-checkbox value="新北市三重區">三重區</b-form-checkbox></b-col>
                <b-col md><b-form-checkbox value="新北市中和區">中和區</b-form-checkbox></b-col>
                <b-col md><b-form-checkbox value="新北市永和區">永和區</b-form-checkbox></b-col>
                <b-col md><b-form-checkbox value="新北市新莊區">新莊區</b-form-checkbox></b-col>
                <b-col md><b-form-checkbox value="新北市新店區">新店區</b-form-checkbox></b-col>
            </b-row>
            <b-row>
                <b-col md><b-form-checkbox value="新北市樹林區">樹林區</b-form-checkbox></b-col>
                <b-col md><b-form-checkbox value="新北市鶯歌區">鶯歌區</b-form-checkbox></b-col>
                <b-col md><b-form-checkbox value="新北市淡水區">淡水區</b-form-checkbox></b-col>
                <b-col md><b-form-checkbox value="新北市汐止區">汐止區</b-form-checkbox></b-col>
                <b-col md><b-form-checkbox value="新北市瑞芳區">瑞芳區</b-form-checkbox></b-col>
                <b-col md><b-form-checkbox value="新北市土城區">土城區</b-form-checkbox></b-col>
            </b-row>
        </b-container>
    </b-form-checkbox-group>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "LocationFilter",
    data(){ return{ selected: []}},
    methods: {...mapActions(['changeLocation'])},
    watch:{ selected: function(val, oldVal){ this.changeLocation(val) } }
}
</script>