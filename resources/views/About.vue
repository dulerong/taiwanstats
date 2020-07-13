<template>
    <b-container fluid>
        <b-jumbotron header="2019年新北市生育資料" lead="Created by Codey Du" class="container mt-3">
            <p>所有數據來自政府開放平台 DATA.GOV.TW</p>
            <b-btn variant="primary" href="https://data.gov.tw/">More Info</b-btn>
        </b-jumbotron>
    </b-container>
</template>

<script>
    export default {
        mounted() { // this is similar to componentMounted in react.js
            
        }
    }
</script>

<style scoped>
@media (max-width: 700px) { 
    .jumbotron h1{
        font-size: 30px;
    }
}
</style>