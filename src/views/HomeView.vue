<template>
  <div class="home">
        <span style="color:#003;font-size: 44px;">Racecourse</span> <span style="color:red; font-size: 44px; ">Home </span>
        <div class="align">
        <p style="color:black; padding-bottom: 70px; padding-top: 20px; font-size: 28px;">Welcome to Racecourse Homes.</p>
        <a href="https://api.whatsapp.com/send?phone=254724554147"> Rental Inquiry</a>
        </div>
    </div>
    <div class="abouthouse">
      <h1 style="float:left;">About The Project</h1><br><br>
      <p  style="float:left;">Unity Gardens, is a residential estate with 239 complete homes, <br>comprising of 3 bedroom apartments and bungalows in Kapsaret,<br> Eldoret.<br>

    The homes are all master en-suite with a modern kitchen fitted with<br> granite worktops and a solar water heating system. Units also enjoy <br> an expansive landscaped private garden. The bungalows also come <br>with a rooftop terrace where the residents can enjoy an outdoor feel  <br> and host private parties.</p>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style >
  body{
    background-image: url('@/assets/home.png');
    background-size: contain;
    background-repeat: no-repeat;
    
  }
  .home{
    background-color: #ffffff;
    opacity: 0.6;
    border: 1px solid;
    margin: auto;
    width: 40%;
    padding: 8px;
    margin-top: 15px;
    margin-bottom: 100px;
    height: 100px;
    text-align: center;
    padding-bottom: 150px;
   
  }
  .home .align{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .home a{
    background:red;
    border-radius:25px ;
    color: white;
    padding: 28px;
    width: 160px;
    text-decoration: none;
    text-align:center;
    margin-left: 150px;
    padding-left:50px;
  }
  .abouthouse{
    background-color: #ffffff;
    height: 500px;
  }
  .abouthouse p{
    text-align: left;
    margin-left: 5px;
    padding-left:35px ;
  }
  .abouthouse h1{
    text-align: left;
    margin-left: 5px;
    padding-left:35px ;
  }
</style>