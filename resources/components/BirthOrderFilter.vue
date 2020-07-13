<template>
    <b-form-radio-group v-model="selected" name="birthOrderButton">
        <div class="my-3">Birth Order Selected: <strong>{{ selected }}</strong></div>
        <b-container>
            <b-row>
                <b-col md><b-form-radio value="1胎">1胎</b-form-radio></b-col>
                <b-col md><b-form-radio value="2胎">2胎</b-form-radio></b-col>
                <b-col md><b-form-radio value="3胎">3胎</b-form-radio></b-col>
                <b-col md><b-form-radio value="4胎">4胎</b-form-radio></b-col>
                <b-col md><b-form-radio value="5胎">5胎</b-form-radio></b-col>
                <b-col md><b-form-radio value="6胎">6胎</b-form-radio></b-col>
            </b-row>
            <b-row>
                <b-col md><b-form-radio value="7胎">7胎</b-form-radio></b-col>
                <b-col md><b-form-radio value="8胎">8胎</b-form-radio></b-col>
                <b-col md><b-form-radio value="9胎以上">9胎以上</b-form-radio></b-col>
                <b-col md><b-form-radio value="所有胎數">所有胎數</b-form-radio></b-col>
                <b-col md></b-col>
                <b-col md></b-col>
            </b-row>
        </b-container>
    </b-form-radio-group>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "BirthOrderFilter",
    data(){ return{ selected: '所有胎數' } },
    methods: {...mapActions(['changeBirthOrder'])},
    watch:{ selected: function(val, oldVal){ this.changeBirthOrder(val) } }
}
</script>