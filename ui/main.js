console.log('Loaded!');

 /*var counter=0;
 var button=document.getElementById('counter');
 button.onclick= function(){
     
   counter=counter+1;
   var span=document.getElementById('count');
   span.innerHTML=counter.toString();
 };*/
 
 var button=document.getElementById('counter');
 button.onclick =  function() {
   var request = XMLHttpRequest();
   
   request.onreadystatechange=function(){
     if(request.readyState === XMLHttpRequest.DONE){
         
         if(request.status === 200){
             
             var counter= request.responseText;
             var count =document.getElementById('counter');
             count.innerHTML = counter.toString();
         }
         
     }  
     
       
   };
   
   //making a request
   
request.open('get','http://rangaraju29139.imad.hasura.io/counter',true);
     request.send(null);
     
     
 };