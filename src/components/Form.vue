<template>
  <div id="form" class="landing-form">
    <div class="container">
        <div class="row justify-content-center">
          <h3 class="row justify-content-center mb-3">Deja tus datos y te contactamos!</h3>
            <div class="col-md-4 mb-3">
              <input id="full_name"
              placeholder="Full name"
              type="text"
              v-model="post.full_name"
              class="form-control">
            </div>
          <div class="col-md-4 mb-3">
            <input id="email"
              placeholder="Example@email.com"
              type="email"
              v-model="post.email"
              class="form-control">
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-4 mb-3">
            <input id="phone"
            placeholder="Phone"
            type="number"
            v-model="post.phone"
            class="form-control">
          </div>
          <div class="col-md-4 mb-3">
            <input type="text"
            placeholder="Company"
            id="company"
            v-model="post.company"
            class="form-control">
          </div>
          <div class="col-md-6 mb-3">
           <textarea
              placeholder="Déjanos un mensaje"
              v-model="post.message"
              class="form-control">
            </textarea>
          </div>
          <div class="row justify-content-center">
          <div class="col-md-2 mb-3">
            <button type="submit" class="btn btn-outline btn-lg" id="btn-play">PLAY</button>
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
.landing-form{
  width: 60%;
  margin: 0 auto;
}
.container{
  background-image: url("https://storage.googleapis.com/playgroup-web/img/pages/p-15786004505e178802c3c6d.jpg");
  padding: 20px;
  border-radius: 10px;
}

h3{
  color:white;
}
#btn-play{
  color: white;
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
