<template>
    <b-form-radio-group v-model="selected" name="birthGenderButton" >
        <div class="my-3">Birth Gender Selected: <strong>{{ selected }}</strong></div>
        <b-container>
            <b-row>
                <b-col md><b-form-radio value="男">男</b-form-radio></b-col>
                <b-col md><b-form-radio value="女">女</b-form-radio></b-col>
                <b-col md><b-form-radio value="所有性別">所有性別</b-form-radio></b-col>
                <b-col md></b-col>
                <b-col md></b-col>
                <b-col md></b-col>
            </b-row>
        </b-container>
    </b-form-radio-group>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "BirthGenderFilter",
    data(){ return{ selected: '所有性別' } },
    methods: {...mapActions(['changeBirthGender'])},
    watch:{ selected: function(val, oldVal){ this.changeBirthGender(val) } }
}
</script>