<template>
 <div>
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Name"
          v-model="name"
        />
      </div>
    </div>
 <div>
    <div class="field">
      <label class="label">Lastname</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Lastname"
          v-model="lastname"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Birthday</label>
      <div class="control">
        <input
          class="input"
          type="date"
          placeholder="Birthday"
          v-model="birthday"
        />
      </div>
    </div>
     <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input
          class="input"
          type="email"
          placeholder="Email"
          v-model="email"
        />
      </div>
    </div>
    </div>
     <div class="field">
      <label class="label">Newsletter</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="NewsLetter"
          v-model="newsletter"
        />
      </div>
    </div>
     <div class="field">
      <label class="label">Date</label>
      <div class="control">
        <input
          class="input"
          type="date"
          placeholder="Date"
          v-model="date"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="updateProduct">UPDATE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EditProduct",
  data() {
    return {
      name: "",
      lastname: "",
      birthday: "2000 01 01",
      email:"",
      newsletter:0,
      date:"2000 01 01"
    };
  },
  created: function () {
    this.getProductById();
  },
  methods: {
    // Get Product By Id
    async getProductById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/anmeldung/${this.$route.params.id}`
        )
        this.name = response.data.name;
        this.lastname = response.data.lastname;
        this.birthday = response.data.birthday;
        this.email = response.data.email;
        this.newsletter = response.data.newsletter;
        this.date = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Update product
    async updateProduct() {
      try {
        await axios.put(
          `http://localhost:5000/anmeldung/${this.$route.params.id}`,
          {
             name: this.name,
            lastname: this.lastname,
            birthday: this.birthday,
            email:this.email,
            newsletter:this.newsletter,
            date:this.date
          }
        );
         this.name = "";
        this.lastname = "";
        this.birthday = "";
        this.email = "";
        this.newsletter = "";
        this.date="";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
