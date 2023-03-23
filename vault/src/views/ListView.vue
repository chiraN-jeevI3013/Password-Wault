<template>
    <div>
        <HeaderLine> </HeaderLine><br>
        
        <div class="dabba">
            <h1>Your Credentials:</h1>
        </div>

        <div class="listDabba" v-if="cred.length > 0">
            <v-card>
                <v-card-title>
                <v-text-field
                    v-model="search"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
                </v-card-title>
                <v-data-table
                    :headers="headers"
                    :items="cred"
                    :search="search"
                ></v-data-table>
            </v-card>
        </div>
        


  </div>
</template>



<script>
    import axios from 'axios'
    import HeaderLine from '@/components/HeaderLine.vue';

    export default {
        name: 'ListView',
        components: {
            HeaderLine
        },
        data() {
            return {
                cred: [],
                search: '',
                headers: [
                    {
                        text: 'Email / Username',
                        align: 'start',
                        value: 'pk',
                    },
                    { 
                        text: 'Password', 
                        value: 'Password' 
                    },
                ],
            }
        },
        mounted() {
            console.log(this.$route.params)

            //PUT IN MOUNTED BECOZ WHEN THE PAGE IS LOADED WE WANT THE DATA TO BE LOADED
            axios.get("http://localhost:8088/listData").then(res => {
                this.cred = res.data

                console.log('res: ', res);
                console.log('this.cred: ', this.cred);
            });
        },
        
    }
</script>


<style scoped>
.dabba {
  width: 340px;
  height: 100px;
  align-items: center;
  margin: auto;
  justify-content: center;
  text-align: center;
}

.listDabba {
  width: 700px;
  align-items: center;
  margin: auto;
  justify-content: center;
  text-align: center;
  padding-bottom: 100px;
}
</style>