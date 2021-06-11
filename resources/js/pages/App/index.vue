<template>
    <v-app id="inspire">
        <v-system-bar app color="blue" height="25">
            <v-spacer></v-spacer>

            <v-btn class="white--text" text small>
                Ajuda
            </v-btn>
        </v-system-bar>

        <v-app-bar app color="grey lighten-2" height="75">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon color="blue">mdi-home</v-icon>
                    </v-btn>
                </template>
                <span>Inicio</span>
            </v-tooltip>

            <v-spacer></v-spacer>

            <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon color="blue">mdi-format-list-bulleted</v-icon>
                    </v-btn>
                </template>
                <span>Meus lances</span>
            </v-tooltip>
        </v-app-bar>


        <v-navigation-drawer v-model="drawer" fixed floating temporary>
            <v-list shaped>
                <div v-for="menuItem in menu"  :key="menuItem.title">
                    <v-subheader>{{menuItem.title}}</v-subheader>

                    <router-link
                        v-for="item in menuItem.items"
                        :key="item.title"
                        :to="item.route"
                    >
                        <v-list-item class="d-flex justify-start">
                            <v-list-item-icon>
                                <v-icon color="blue">{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title v-text="item.title"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </router-link>

                    <v-divider color="blue" class="mx-5 mb-5"></v-divider>
                </div>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <slot></slot>
        </v-main>

        <v-divider class="mx-1 my-5"></v-divider>

        <v-footer class="transparent" padless>
            <v-row no-gutters>
                <v-btn color="black" text rounded class="text-capitalize">
                    Quem somos
                </v-btn>

                <v-btn color="black" text rounded class="text-capitalize">
                    Ajuda
                </v-btn>

                <v-btn color="black" text rounded class="text-capitalize">
                    Fale conosco
                </v-btn>

                <v-col class="blue py-2 mt-5 text-center black--text" cols="12">
                    {{ new Date().getFullYear() }}  <strong> ADM Company </strong>
                </v-col>
            </v-row>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        drawer: false,
        menu: [{
                title: 'Home',
                items: [
                    { title: 'Home', icon: 'mdi-home', route: '/' },
                ]
            },
        ],
    })
}
</script>

<style>

</style>
