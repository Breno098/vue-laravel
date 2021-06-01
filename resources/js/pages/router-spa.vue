<template>
  <v-app id="inspire">

    <v-main>
        <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
        drawer: true,
    }),
  }
</script>


<style>
*{
    padding: 0;
    margin: 0;
}

.v-application ::-webkit-scrollbar {
    height: 8px;
    width: 13px;
}

.v-application ::-webkit-scrollbar-corner {
    background: transparent;
}

.v-application ::-webkit-scrollbar-thumb {
    background: #d5dbff;
    border-radius: 8px;
}

</style>
