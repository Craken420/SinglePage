<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-layout column>
        <v-flex xs12 class="text-xs-center" mt-5>
          <h1>Landing page</h1>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3 mt-3>
          <blockquote class="blockquote text-xs-center">
            Esta es una aplicacion de una sola pagina 
            con autentificacion Google Firebase
          </blockquote>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3 mt-3>
          <v-btn color="primary" to="/signup">Sign Up</v-btn>
          <v-btn tu="/signin">Sign In</v-btn>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>
<script>
export default {}
</script>
