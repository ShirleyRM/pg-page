<template>
  <header class="header">
    <div class="container logo-nav">
      <img src="https://storage.googleapis.com/playgroup-web/img/departments/ew-15785774695e172e3d16797.svg"
      alt="PlayGround logo">
      <input type="checkbox" id="check">
      <label for="check" class="checkbtn">
        <i class='bx bx-menu'></i>
      </label>
      <nav class="nav">
        <ul>
          <li class="nav_item"><a href="#">INICIO</a></li>
          <li class="nav_item"><a href="#">Conócenos</a></li>
          <li class="nav_item"><a href="#">Blog</a></li>
          <li class="nav_item"><a href="#">Conversemos</a></li>
          <li class="nav_item"><a href="#">Trabaja con nosotros</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
</script>

<style scoped>
.header{
  background-color: #FFA41B;
  color: white;
  font-weight: 700;
  padding: 1rem 0;
  font-size: 1.2em;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
}

.header a{
  color: white;
  text-decoration: none;
}
.logo-nav img{
  width: 150px;
}
.logo-nav{
  display:flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.nav ul{
  margin: 0;
  padding: 0;
  list-style: none;
}

  .nav ul li{
    display: inline-block;
  }

    .nav ul li a{
    display: block;
    padding: 0.5rem 1rem;
  }
  a.active, ac:hover{
    background: tomato;
    transition: .5s;
  }
  .nav ul li a:hover{
    display: block;
    padding: 0.5rem 0rem;
  }

.checkbtn{
  font-size: 30px;
  color: white;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}

#check{
  display: none;
}

@media only screen and (max-width: 767px){
  .nav{
    width: 100%;
    margin-top: 1rem;
  }
  .nav ul li{
    display: block;
  }

    .nav ul li a{
    display: block;
    padding: 0.5rem 1rem;
  }

}

@media (max-width: 858px){
  .checkbtn{
    display: block;
  }
  ul{
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #FFA41B;
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all .5s;
  }
  .nav ul li{
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
  .nav ul li a{
    font-size: 1.5em;
  }

  a:hover, a.active{
    background-color: none;
    color: white;
  }

  #check:checked ~ ul{
    left: 0;
  }
}

@media (max-width: 952px){
  .logo-nav{
    padding-left: 50px;
  }
  .nav ul li a{
    font-size: 1em;
  }
}

</style>
