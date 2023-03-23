<template>
  <div>
    <v-app>
      <div class="dabba">
    <img class="imageee" alt="Thalaivar logo"  :src="require('@/assets/pic1.jpg')" >
    <h1>{{ title }}</h1>
    <h3> </h3>
    <h3> </h3>
  

    <div >
      <v-text-field
      v-model="email"
      label="Email / Username"
      ></v-text-field>

      <v-text-field
      v-model="pass"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="show1 ? 'text' : 'password'"
      name="input-10-1"
      label="Password"
      hint="At least 8 characters"
      @click:append="show1 = !show1"
      ></v-text-field>

      <div class="buttonDabba">
        <v-btn prepend-icon="mdi-vuetify" @click="sendDatafromCreate()">
        Create
        </v-btn>
        
        <v-btn prepend-icon="mdi-vuetify" @click="updateData()">
        Update
        </v-btn>

        <v-btn prepend-icon="mdi-vuetify" @click="deleteData()">
        Delete
        </v-btn>
      </div>
      
            
    </div>
  </div>
    </v-app>
  </div>
</template>



<script>
import axios from 'axios'

export default {
  name: 'HomePage',
  props: {
    title: String
  },
  data() {
    return {
      email: '',
      pass: '',
      dummy: 'Hellooo',
      show1: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => (`The email and password you entered don't match`),
      },
    }
  },
  methods: {
    sendDatafromCreate() {
      //console.log(this.email, this.pass)
      // this.$router.push({
      //   name: 'list',
      //   params: {
      //     email: this.email,
      //     pass: this.pass
      //   },
      // })

        if (this.email.length==0 || this.pass.length==0) {
          alert("Both Email & Password field should be Non-empty!");
        } else if(this.pass.length < 8) {
            alert("Password should be at least 8 characters");
        } 
        else {

          let reqToBeSent = {
            email: this.email,
            pass: this.pass
          };

          console.log("reqToBeSent: ", reqToBeSent)

          axios.post("http://localhost:8088/createRecord", reqToBeSent).then((res)=> {
            console.log("res from backend: ", res);

            if(res.data == 'EMAIL_EXISTS!')
              alert("EMAIL EXISTS. CLICK UPDATE IF U WANNA CHANGE PASSWORD");
            

          }).catch((err) => {
            console.log('err: ', err);
          });
        }

      this.email = '';
      this.pass = '';

    },
    updateData() {

      if (this.email.length==0 || this.pass.length==0) {
        alert("Both Email & Password field should be Non-empty!");
      } else if(this.pass.length < 8) {
          alert("Password should be at least 8 characters");
      } else {
        let reqToBeSent = {
          email: this.email,
          pass: this.pass
        };

        console.log(reqToBeSent)

        axios.post("http://localhost:8088/updateRecord", reqToBeSent).then((res)=> {
          console.log(res);

          if(res.data == 'EMAIL_CREATED!')
            alert("ENTERED EMAIL DOES NOT EXIST. SO NEW ENTRY CREATED!");

          if(res.data == 'PASS_EXISTS!')
            alert("NEW PASSWORD SAME AS OLD ONE. KINDLY CHOOSE A DIFF ONE");

        }).catch((err) => {
          console.log('err: ', err);
        });

      }

      this.email = '';
      this.pass = '';

      
    },
    deleteData() {

      if (this.email.length==0) {
        alert("Email field should be Non-empty to Delete!");
      } else {
        // let reqToBeSent = {
        //   email: this.email,
        //   pass: this.pass
        // };

        // console.log(reqToBeSent)

        // axios.post("http://localhost:8088/deleteRecord", reqToBeSent).then((res)=> {
        //   console.log(res);

        //   if(res.data == 'EMAIL_NOT_EXISTS!')
        //     alert("ENTERED EMAIL DOES NOT EXIST. DELETION REQUEST REJECTED");

        // }).catch((err) => {
        //   console.log('err: ', err);
        // });


        axios.delete(`http://localhost:8088/deleteRecord/${this.email}`).then((res)=> {
          console.log(res);

          if(res.data == 'EMAIL_NOT_EXISTS!')
            alert("ENTERED EMAIL DOES NOT EXIST. DELETION REQUEST REJECTED");

        }).catch((err) => {
          console.log('err: ', err);
        });
      }

      

      this.email = '';
      this.pass = '';

    },
  },
  // beforeCreate() {
  //   console.log(`beforeCreate - ${this.dummy}`);
  // },
  // created() {
  //   console.log(`Created - ${this.dummy}`);
  // },
  // beforeMount() {
  //   console.log(`beforeMount - ${this.dummy}`);
  // },
  // mounted() {
  //   console.log(`Mounted - ${this.dummy}`);
  // },
  // beforeUpdate() {
  //   console.log(`beforeUpdate - ${this.dummy}`);
  // },
  // updated() {
  //   console.log(`updated - ${this.dummy}`);
  // },
  // beforeUnmount() {
  //   console.log(`beforeUnmount - ${this.dummy}`);
  // },
  // unmounted() {
  //   console.log(`unmounted - ${this.dummy}`);
  // },
}
</script>

  
  
<style scoped>
.dabba {
  /* width: 340px;
  height: 200px; */
  align-items: center;
  margin: auto;
  justify-content: center;
  text-align: center;
}

h3 {
  margin: 40px 0 0;
}

.buttonDabba {
  display: flex;
  justify-content: space-between;
}

</style>
  