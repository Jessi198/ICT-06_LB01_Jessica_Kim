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
      <button class="button is-success" @click="saveProduct">SAVE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddProduct",
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
  methods: {
    // Create New product
    async saveProduct() {
      try {
        await axios.post("http://localhost:5000/anmeldung", {
          name: this.name,
          lastname: this.lastname,
          birthday: this.birthday,
          email:this.email,
          newsletter:this.newsletter,
          date:this.date
        });
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