<template>
    <b-container class="my-2">
        <b-row>
            <b-col md><h6>Results <b-badge>{{count.results}} 筆數據</b-badge></h6></b-col>
            <b-col md><h6>Child <b-badge>{{count.birthCount}} 人出生</b-badge></h6></b-col>
            <b-col md><h6>Male <b-badge>{{count.birthMale}} 男出生</b-badge></h6></b-col>
            <b-col md><h6>Female <b-badge>{{count.birthFemale}} 女出生</b-badge></h6></b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "DisplayResult",
    computed: mapGetters(['count']),
}    

</script>