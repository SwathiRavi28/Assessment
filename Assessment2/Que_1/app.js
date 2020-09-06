
    function myFunction() {
  
  
   var str1= document.getElementById("Full_name").value;
   var str2= document.getElementById("Add_1").value;
   var str3= document.getElementById("Add_2").value;
   var str4= document.getElementById("City").value;
   var str5= document.getElementById("State").value;
   var str6= document.getElementById("Pos_code").value;
   var str7= document.getElementById("Country").value;
   var str8= document.getElementById("Email").value;
   var str9= document.getElementById("Ph_no").value;
   if(str1==="")
   {
    alert("Full_name Missing!"+str1);
    return false;
   }
   
   else if(str2==="")
   {
    alert("Add_1 Missing!"+str2);
    return false;
   }
  
   else if(str3==="")
   {
    alert("Add_2 Missing!"+str3);
    return false;
   }
   
   else if(str4==="")
   {
    alert("City Missing!"+str4);
    return false;
   }
  
  else if(str5==="")
   {
    alert("State Missing!"+str5);
    return false;
   }
  
   else if(str6==="")
   {
    alert("Pos_code Missing!"+str6);
    return false;
   }
   
   else if(str7==="")
   {
    alert("Countr Missing!"+str7);
    return false;
   }
  
   else if(str8==="")
   {
    alert("Email Missing!"+str8);
    return false;}
    
var atposition=str8.indexOf("@");  
var dotposition=str8.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  }  
  
   
  else  if(str9===""||isNaN(str9))
   {
    alert("Ph_no Missing!"+str9);
    return false;
   }

   



    }



