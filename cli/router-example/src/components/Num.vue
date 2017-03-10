 <!-- Make urls like /num/:num viable -->

 <template>
   <div id="num">
     {{ title }} {{ $route.params.num }}
   </div>
 </template>

 <script>
 export default {
   data() {
     return {
       title: 'Component number '
     }
   }
 }
</script>

<style>
#num {
  text-decoration: underline;
}
</style>
