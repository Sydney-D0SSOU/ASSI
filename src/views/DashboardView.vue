  <template>

<div>
     
   
        
   <div class="container" id="a">
    <div class="row" id="b">
            <div class="form-control " id="c" >
  
      
     <piece/> <br/>
    
    <hr> 
    
              <b> e-Visa</b> <br/>
              
              <font size="2">
               <span style="color:#A3A3A3">Visiteurs  </span> : <b  id="nt">  34.000 </b> 
              
                <span style="color:#A3A3A3">Demandes</span>: <b  id="l"> 60.000 </b>
  </font>       
    </div>
            <div class="form-control " id="d"> 
              
                    <Piece3/> <br/>
            <hr>
          
              <b> e-Resultats</b> <br/>
              <font size="2">
              <span style="color:#A3A3A3">Visiteurs </span>: <b  id="nt">  34.000 </b> 
                <span style="color:#A3A3A3">Demandes</span>:<b id="l"> 60.000 </b>
       
           </font>
            </div>
            
           
          <div class="form-control" id="d">
         
            <Piece2/> <br/>
            <hr>
            
              <b> e-Passeport</b> <br/>
              <font size="2">
              <span style="color:#A3A3A3">Visiteurs </span>:  <b id="nt">  34.000 </b> 
                <span style="color:#A3A3A3">Demandes</span>:   <b id="l"> 60.000 </b>
         </font>
          </div>
          <div class="form-control" id="d">
            
            <Piece4/> <br/>

            <hr>
            
              <b> Casier juciaire</b> <br/>
              <font size="2">
              <span style="color:#A3A3A3">Visiteurs </span>:   <b id="nt">  34.000 </b> 
                <span style="color:#A3A3A3">Demandes</span>:  <b id="l"> 60.000 </b>
         
         </font>
          </div>
  
  </div>
  </div>
  </div>





</template>
      

        
<script>
  
  import piece from "../components/piece.vue"
  
  
 import Icons from "../components/Icons.vue"
import Piece2 from "@/components/piece2.vue";
import Piece3 from "../components/piece3.vue";
import Piece4 from "../components/piece4.vue";

  
export default {
  name: "Dashboard",
  components: {
    Icons,
    piece,
    Piece2,
    Piece3,
    Piece4
},
  props: {},
    
};



</script>
<style scoped>
  table{border:greenyellow 1px solid ;}
  #a{border:greenyellow 0px solid ; height:600px ; background-color:;margin-bottom:0px; }
  #b{border:orangered 0px solid  ;height:570px ; margin-top:20px ;}
  #c{border:lightgray 0px solid;height:291px ; margin-top:30px  ; width:190px ;margin-left:60px; box-shadow :  -12px 12px 12px #D9D9D9; }
  #d{border:lightgray 0px solid;height:291px ; margin-top:30px ; margin-left:50px;width:190px ;box-shadow:  -12px 12px 12px  #D9D9D9;  }
  #e{height:130px ;width:220px ;}
  #u{border:yellow 2px solid  ; width:400px ;}
  .chart-container {width:13%;height:15%;}
  #di{border:red 2px solid ;}
  #l{margin-left:57px ;}
  #p{margin-left:46px ;} 
  #nt{margin-left:65px ;} 
</style>
