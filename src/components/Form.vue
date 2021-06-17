<template>
  <div id="form" class="landing-form">
    <div class="container">
        <div class="row justify-content-center">
          <h3 class="row justify-content-center mb-3">Deja tus datos y te contactamos! 🤗</h3>
            <div class="col-md-4 mb-3">
              <input id="full_name"
              placeholder="Full name"
              type="text" class="form-control">
            </div>
          <div class="col-md-4 mb-3">
            <input id="email"
              placeholder="Example@email.com"
              type="email"
              class="form-control">
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-4 mb-3">
            <input id="phone"
            placeholder="Phone"
            type="number"
            class="form-control">
          </div>
          <div class="col-md-4 mb-3">
            <input type="text"
            placeholder="Company"
            id="company"
            class="form-control">
          </div>
          <div class="col-md-6 mb-3">
           <textarea v-model="message"
              placeholder="Déjanos un mensaje"
              class="form-control">
            </textarea>
          </div>
          <div class="row justify-content-center">
          <div class="col-md-1 mb-3">
            <button @click="save()" class="btn btn-outline btn-lg" id="btn-play">PLAY</button>
          </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
};
</script>

<style scoped>
.container{
  background: #74ebd5;
  background: -webkit-linear-gradient(to right, #ACB6E5, #74ebd5);
  background: linear-gradient(to right, #ACB6E5, #74ebd5);
  padding: 20px
}

h3{
  color:white;
}
#btn-play{
  color: rgb(12, 127, 180);
  font-weight: bold;
  font-size: 1.2em;
  border-radius: 35px;
  border: 2px solid;
  width: 100px;
}
#btn-play:hover{
  color: #f1f1f1;
  background-color: #15b8c4;
}
</style>
