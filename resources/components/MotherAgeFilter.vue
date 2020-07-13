<template>
    <b-form-checkbox-group v-model="selected" name="selected">
        <div class="my-3">Mother Age Selected: <strong>{{ selected }}</strong></div>
        <b-container>
            <b-row>
                <b-col md><b-form-checkbox value="未滿15歲">未滿15歲</b-form-checkbox></b-col>
                <b-col md><b-form-checkbox value="15～19歲">15～19歲</b-form-checkbox></b-col>
                <b-col md><b-form-checkbox value="20～24歲">20～24歲</b-form-checkbox></b-col>
                <b-col md><b-form-checkbox value="25～29歲">25～29歲</b-form-checkbox></b-col>
                <b-col md><b-form-checkbox value="30～34歲">30～34歲</b-form-checkbox></b-col>
                <b-col md><b-form-checkbox value="35～39歲">35～39歲</b-form-checkbox></b-col>
            </b-row>
            <b-row>
                <b-col md><b-form-checkbox value="40～44歲">40～44歲</b-form-checkbox></b-col>
                <b-col md><b-form-checkbox value="45～49歲">45～49歲</b-form-checkbox></b-col>
                <b-col md><b-form-checkbox value="50歲以上">50歲以上</b-form-checkbox></b-col>
                <b-col md></b-col>
                <b-col md></b-col>
                <b-col md></b-col>
            </b-row>
        </b-container>
    </b-form-checkbox-group>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "MotherAgeFilter",
    data(){ return{ selected: [] } },
    methods: {...mapActions(['changeAge'])},
    watch:{ selected: function(val, oldVal){ this.changeAge(val) }}
}
</script>