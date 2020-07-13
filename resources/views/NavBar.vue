<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <div class="container">
            <b-navbar-brand>2019年新北市生育資料</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item><router-link to="/" class="nav-link">Home</router-link></b-nav-item>
                    <b-nav-item><router-link to="/data" class="nav-link">Data</router-link></b-nav-item>
                    <b-nav-item><router-link to="/about" class="nav-link">About</router-link></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar>
</template>

<script>
export default {
    name: "NavBar"
}
</script>