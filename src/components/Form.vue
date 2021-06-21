<template>
  <div id="form" class="container-fluid">
        <div class="container">
        <div class="row justify-content-center">
          <h3 class="row justify-content-center mb-3">Deja tus datos y te llamamos ✌🏽</h3>
            <div class="col-md-4 mb-3">
              <input id="full_name"
              placeholder="Full name"
              type="text"
              class="form-control">
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
          <div class="col-md-6 mb-3"><textarea
            placeholder="Déjanos un mensaje"
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
// export default {
//   name: 'Form',
// };
</script>

<style scoped>
.container-fluid{
  background-image: url('https://storage.googleapis.com/playgroup-web/img/departments/eb-16020916715f7dfa975c7e4.jpg');
  object-fit: fill;
  background-color: #801336;
  padding-top: 15rem;
  padding-bottom: 2rem;
}

.container{
  border-radius: 10px;
  border-bottom: 1 px solid #FFA41B;
  background-color: #f1eeef;
  width: 50%;
  max-width: 850px;
  padding-top: 5rem;

}

h3{
  color:#FFA41B;
}
#btn-play{
  color: #FFA41B;
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
