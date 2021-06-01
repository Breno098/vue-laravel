<template>
    <div>
    <v-img :src="main">
        <div class="text-center pt-10">
            <v-btn text x-small class="font-weight-bold">
                HOME
            </v-btn>
            <v-btn text x-small class="font-weight-bold">
                ABOUT
            </v-btn>
            <v-btn text x-small class="font-weight-bold">
                FEATURE
            </v-btn>
            <v-btn text x-small class="font-weight-bold">
                SERVICE
            </v-btn>
            <v-btn text x-small class="font-weight-bold">
                CONTACT
            </v-btn>
        </div>

        <v-container fluid class="mt-10">
            <div style="margin: 50px 0 50 170px">SPA & BEAUTY CENTER</div>

            <div class="text-h3" style="margin: 0 0 0 170px">Beauty and success</div>
            <div class="text-h3" style="margin: 0 0 0 170px">stars here.</div>

            <div style="margin: 50px 0 0 170px">Together creeping heave nupon third dominion be upon won't darkness rule</div>
            <div style="margin: 8px 0 0 170px">behold it created good saw after she'd Our set living.</div>

            <div style="margin: 50px 0 0 170px">
                <v-btn class="white--text p-4" color="#fe817d" tile>
                    RESERVE NOW <v-icon size="20px" class="ml-2">mdi-arrow-right</v-icon>
                </v-btn>

                <v-btn text>
                    <v-icon size="20px" class="mr-3" color="#fe817d">mdi-play</v-icon> Watch our story
                </v-btn>
            </div>
        </v-container>
    </v-img>

    <v-row class="d-flex justify-content-center align-center" style="margin: 100px 0 100px 0">
        <v-col  cols="12" md="10" class="text-center">
            <div class="text-h3">Come and you will be Inspired!</div>
        </v-col>

        <v-col cols="12" md="6" class="text-center mb-10">
            <div>It's the end of summer the sweltering heat makes human sweat in the night and makes</div>
        </v-col>
    </v-row>


    <div class="d-flex justify-content-center align-center" style="margin: 200px">
        <v-btn class="white--text p-4" color="#fe817d" rounded>
            READ MORE
        </v-btn>
    </div>

    <v-row>
        <v-col cols="12" md="3" class="px-0 py-0">
            <v-img
                height="400"
                :src="images_base + 'carrousel_1.jpg'"
            ></v-img>
        </v-col>
        <v-col md="3" cols="12" class="px-0 py-0">
            <v-img
                height="400"
                :src="images_base + 'carrousel_1.jpg'"
            ></v-img>
        </v-col>
        <v-col md="3" cols="12" class="px-0 py-0">
            <v-img
                height="400"
                :src="images_base + 'carrousel_3.jpg'"
            ></v-img>
        </v-col>
        <v-col md="3" cols="12" class="px-0 py-0">
            <v-img
                height="400"
                :src="images_base + 'carrousel_4.jpg'"
            ></v-img>
        </v-col>
    </v-row>

    <v-container fluid class="mt-10">
        <v-row class="d-flex justify-content-center align-center mt-10">
            <v-col  cols="12" md="10" class="text-center">
               <div class="text-h3">Popular Procedures</div>
            </v-col>

            <v-col cols="12" md="5" class="text-center mb-10">
               <div>To doesn't his appear replenish together called he of mad place won't wherein blessed second every wherein were meat kind wherein and martcin</div>
            </v-col>
        </v-row>

        <v-row class="d-flex justify-content-center align-center">
            <v-col cols="12" md="3" v-for="(card, i) in popular_procedure_images" :key="i">
                <v-card class="p-2 pb-6">
                    <v-img
                        height="250"
                        :src="images_base + card.image"
                    ></v-img>

                    <v-card-title class="d-flex justify-content-center align-center py-4 my-5">
                        {{ card.title }}
                    </v-card-title>

                    <v-card-text class="px-4 text-center">
                        {{ card.text }}
                    </v-card-text>

                    <v-card-actions class="d-flex justify-content-center align-center p-4">
                        <v-btn class="white--text p-4" :color="card.button_color" rounded>
                            READ MORE
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <v-container fluid class="my-10 grey lighten-4 py-10">
        <v-row class="d-flex justify-content-center align-center">
            <v-col cols="6" md="4" class="mb-10">
                <v-img
                    height="70"
                    width="70"
                    class="mx-auto"
                    :src="images_base + 'aspas_ini.jpg'"
                ></v-img>
            </v-col>
        </v-row>

        <v-row class="d-flex justify-content-center align-center">
             <v-col cols="8" class="mb-10 text-center">
                First i beast be fruitful opne you tree all Won't can't likeness and you're have whales creature seed to two grass life blessed you meat shall you winged under from their there he.
                That you're one called gather make much red wherein set fourth green bearing fifth replenish given she had.
            </v-col>
        </v-row>

        <div class="d-flex justify-content-center align-center flex-column" >
            <v-avatar size="100" class="mb-10">
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-avatar>

            <div class="text-h5">Jack Marsh, <span class="text-caption">Executive</span></div>
        </div>
    </v-container>

    <v-container fluid style="margin: 200px 0">
        <v-row class="d-flex justify-content-center align-center mt-10">
            <v-col  cols="12" md="10" class="text-center">
               <div class="text-h3">Experienced Team</div>
            </v-col>

            <v-col cols="12" md="5" class="text-center mb-10">
               <div>To doesn't his appear replenish together called he of mad place won't wherein blessed second every wherein were meat kind wherein and martcin</div>
            </v-col>
        </v-row>

        <v-row class="d-flex justify-content-center align-center">
            <v-col cols="12" md="3" class="text-center">
                <v-card>
                    <v-img :src="images_base + 'woman_1.jpg'"></v-img>

                    <v-card-text class="text-h5">Joseph Austin</v-card-text>
                    <v-card-text>Thai Massage</v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="3" class="text-center">
                <v-card>
                    <v-img :src="images_base + 'woman_2.jpg'"></v-img>

                    <v-card-text class="text-h5">David Hannan</v-card-text>
                    <v-card-text>Thai Massage</v-card-text>

                    <v-card-actions class="d-flex justify-content-center align-center">
                        <v-btn fab x-small outlined>
                            <v-icon>mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn fab x-small outlined>
                            <v-icon>mdi-twitter</v-icon>
                        </v-btn>
                        <v-btn fab x-small outlined>
                            <v-icon>mdi-google-plus</v-icon>
                        </v-btn>
                        <v-btn fab x-small outlined>
                            <v-icon>mdi-instagram</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12" md="3" class="text-center">
                <v-card>
                    <v-img :src="images_base + 'woman_3.jpg'"></v-img>

                    <v-card-text class="text-h5">Cheryl Harris</v-card-text>
                    <v-card-text>Thai Massage</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <v-container fluid class="my-10 grey lighten-4 p-0">
        <v-row>
            <v-col cols="12" md="5" class="p-0">
                <v-img :src="images_base + 'form_image.jpg'"></v-img>
            </v-col>
            <v-col cols="12" md="7">
                <v-card class="transparent" elevation="0">
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    label="NAME"
                                    color="grey"
                                    dense
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    label="EMAIL ADDRESS"
                                    color="grey"
                                    dense
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-select
                                    :items="['HAIR']"
                                    label="SELECT SERVICE"
                                    color="grey"
                                    dense
                                ></v-select>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    label="PHONE NUMBER"
                                    color="grey"
                                    dense
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    label="DATE"
                                    color="grey"
                                    dense
                                    append-icon="mdi-calendar"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    label="TIME"
                                    color="grey"
                                    dense
                                    append-icon="mdi-clock"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea
                                    label="YOUR NOTES"
                                    color="grey"
                                    dense
                                ></v-textarea>
                            </v-col>

                            <v-col cols="12">
                                <v-btn class="white--text p-4" color="#fe817d" rounded>
                                    Make an Appointment
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <v-container fluid class="mt-10">
        <v-row class="d-flex justify-content-center align-center my-10">
            <v-col  cols="12" md="10" class="text-center">
               <div class="text-h3">Latest From Blog</div>
            </v-col>

            <v-col cols="12" md="5" class="text-center mb-10">
               <div>To doesn't his appear replenish together called he of mad place won't wherein blessed second every wherein were meat kind wherein and martcin</div>
            </v-col>
        </v-row>

        <v-row class="d-flex justify-content-center align-center">
            <v-col cols="12" md="3" v-for="(card, i) in latest_from_blog" :key="i">
                <v-card class="p-3 pb-6" elevation="8">
                    <v-img
                        height="250"
                        :class="card.background_image"
                    ></v-img>

                    <v-card-text class="px-4 text-center mt-2">
                        {{ card.subtitle }}
                    </v-card-text>

                    <v-card-title class="d-flex justify-content-center align-center py-4 mb-5 font-weight-bold">
                        {{ card.title }}
                    </v-card-title>

                    <v-card-text class="px-4 text-center">
                        {{ card.text }}
                    </v-card-text>

                    <v-card-actions class="d-flex justify-content-center align-center p-4">
                        <v-btn class="white--text p-4" :color="card.button_color" rounded>
                            READ MORE
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <v-row class="d-flex justify-content-center align-center" style="margin: 200px 0 100px 0">
            <v-col  cols="12" md="10" class="text-center">
               <div class="text-h3">Get In Touch</div>
            </v-col>

            <v-col cols="12" md="5" class="text-center mb-10">
               <div>To doesn't his appear replenish together called he of mad place won't wherein blessed second every wherein were meat kind wherein and martcin</div>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="10" lg="2" offset-lg="2" offset-md="1" offset-sm="1">
                <v-card elevation="0" class="transparent my-4 d-flex align-center justify-space-between">
                    <v-btn fab color="#fe817d" dark>
                        <v-icon>mdi-map</v-icon>
                    </v-btn>
                    <div class="d-flex align-start flex-column py-5 justify-start">
                        <div class="my-2">848 E 28TH ST, BROOKLYN </div>
                        <div> NEW YORK, USA </div>
                    </div>
                </v-card>

                <v-card elevation="0" class="transparent my-4 d-flex align-center justify-space-between">
                    <v-btn fab color="#fe817d" dark>
                        <v-icon>mdi-email-outline</v-icon>
                    </v-btn>
                    <div class="d-flex align-start flex-column py-5 justify-start">
                        <div class="my-2"> EXAMPLE@LEOSPA.COM </div>
                        <div> EXAMPLE@LEOSPA.COM </div>
                    </div>
                </v-card>

                <v-card elevation="0" class="transparent my-4 d-flex align-center justify-space-between">
                    <v-btn fab color="#fe817d" dark>
                        <v-icon>mdi-cellphone-android</v-icon>
                    </v-btn>
                    <div class="d-flex align-start flex-column py-5 justify-start">
                        <div class="my-2"> +02 365 2365 3265 (02) </div>
                        <div> +01 365 2365 3265 (04) </div>
                    </div>
                </v-card>
            </v-col>

            <v-col cols="12" offset-lg="1" lg="4">
                <v-card elevation="0" class="transparent">
                    <v-text-field
                        label="FIRST NAME"
                        color="grey"
                        outlined
                        v-model="contact.name"
                    ></v-text-field>

                    <v-text-field
                        label="EMAIL ADDRESS"
                        color="grey"
                        outlined
                        v-model="contact.email"
                    ></v-text-field>

                    <v-textarea
                        label="WRITE COMMENT"
                        color="grey"
                        outlined
                        v-model="contact.comment"
                    ></v-textarea>

                    <v-btn class="white--text p-4" color="#fe817d" rounded @click="saveContact">
                        SUBMIT NOW
                    </v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <v-img height="100" width="100" class="mx-auto" :src="images_base + 'logo_2x.jpg'" style="margin: 100px 0 0"></v-img>

    <v-row class="d-flex justify-content-center align-center mt-5">
        <v-btn
            v-for="link in buttons_footer"
            :key="link"
            text
            rounded
            class="my-2"
        >
            {{ link }}
        </v-btn>
    </v-row>

    <v-row class="d-flex justify-content-center align-center" style="margin: 50px 0 100px 0">
        <v-btn class="mx-2" icon>
            <v-icon size="24px">mdi-facebook</v-icon>
        </v-btn>

        <div class="text-h5">|</div>

        <v-btn class="mx-2" icon color="#fe817d">
            <v-icon size="24px">mdi-twitter</v-icon>
        </v-btn>

        <div class="text-h5">|</div>

        <v-btn class="mx-2" icon>
            <v-icon size="24px">mdi-instagram</v-icon>
        </v-btn>

        <div class="text-h5">|</div>

        <v-btn class="mx-2" icon>
            <v-icon size="24px">mdi-vimeo</v-icon>
        </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
    data: () => ({
        images_base: window.location.origin + '/storage/images/',
        logo: window.location.origin + '/storage/images/logo.png',
        main: window.location.origin + '/storage/images/image_main.jpg',
        popular_procedure_images: [{
            title: 'Massage Therary',
            image: 'carrousel_1.jpg',
            button_color: 'black',
            text:  "Living winsed said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place which."
        }, {
            title: 'Massage Therary',
            image: 'carrousel_3.jpg',
            button_color: '#fe817d',
            text:  "Living winsed said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place which."
        }, {
            title: 'Massage Therary',
            image: 'carrousel_4.jpg',
            button_color: 'black',
            text:  "Living winsed said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place which."
        }],
        latest_from_blog: [{
            title: 'Had seed herb grass mids',
            subtitle: 'RELAXATION | JULY 03, 2019',
            background_image: 'grey',
            button_color: 'black',
            text:  "Living winsed said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place which."
        }, {
            title: 'Divid image unto creeping',
            subtitle: 'RELAXATION | JULY 03, 2019',
            background_image: 'grey',
            button_color: '#fe817d',
            text:  "Living winsed said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place which."
        }, {
            title: 'Had seed herb grass mids',
            subtitle: 'RELAXATION | JULY 03, 2019',
            background_image: 'grey',
            button_color: 'black',
            text:  "Living winsed said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place which."
        }],
        buttons_footer: [
            'Home',
            'About',
            'Feature',
            'Services',
            'Contact'
        ],
        contact: {
            name: '',
            email: '',
            comment: ''
        }
    }),
    methods: {
        async saveContact(){
            window.axios.post('api/contact', this.contact)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
}
</script>

<style>

</style>

