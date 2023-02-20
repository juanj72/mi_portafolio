<template>
  <div id="imagen">
    <img src="../assets/404.avif" alt="">
  </div>
    
</template>

<script>
export default{
 name:'contacto_page'

}
</script>

<style scoped>

#imagen{
    margin-left: 30%;
    width: 100px;
    
}


@media screen and (max-width:800px){

    #imagen img{
        margin-top: 50%;
        width: 250px;
    }
}

</style>