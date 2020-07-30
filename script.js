// signUp validation
function validateemail(){
    var valid=document.myform.email.value;
    var v=valid.indexOf('@');
    var dot=valid.indexOf('.');
    var pass1=document.myform.pass1.value;
   var pass11=pass1.toUpperCase();
   var arr="@#$%&*";
   var num="0123456789";
   var t=0;
   var k=0;
   var l=0;
   var i,j;
   var c1=pass1.length;
   var c2=arr.length;
   var c3=num.length;
   var pass2=document.myform.pass2.value;
   var c4=pass11.length;
  if(v<1 || v+2>dot || dot+2>=valid.length)
   {
      alert("pls enter valid email");
   }else
   {
       alert("valid mail");
   }
   var name=document.myform.nam.value;
   if(name=="" || name==null)
   {
       alert("pls enter valid name");
   }else {
       alert("name is valid");
   }
   var mbl=document.getElementById('mbl');
   if(mbl.value.length <10)
   {
       alert("pls enter valid number");
   }
   else{
       alert("phone number is correct");
   }
  
  
  
   if(pass1=="")
   {
       alert("pls enter password");
   }
   else
   {
                for(i=0;i<c1;i++)
                {    
                
                    for(j=0;j<c2;j++)
                    {
                        
                        if(arr.charAt(j) == pass1.charAt(i))
                        {
                            t =t+1;
                            
                        }
                    }
                }
  
              var n=t; 
                    for(i=0;i<c1;i++)
                    {    
                    
                        for(j=0;j<c3;j++)
                        {
                            
                            if(num.charAt(j) == pass1.charAt(i))
                            {
                                k =k+1;
                                
                            }
                        }
                    }
            var n1=k;
                    for(i=0;i<c1;i++)
                        {    
                        
                            for(j=0;j<c4;j++)
                            {
                                
                                if(pass11.charAt(j) == pass1.charAt(i))
                                {
                                    l =l+1;
                                    
                                }
                            }
                        }
            var l1=l;
  
                    if( l1>0 && n>0 && n1>0)
                    {
                        
                    
                    if(pass1.length<8 || pass2.length<8)
                    {
                        alert("pls enter strong password");
                    }else if(!(pass1.match(pass2)))
                    {
                        alert("password not match");
                    }else{
                        alert("password  match");
                    }
                    }
                     else if(n==0)
                    {
                        alert("pls enter special character");
                    }else if(n1==0)
                    {
                    alert("pls enter number");
                    }else if(l1==0){
                        alert("pls enter uppercase");
                    }
     }
}



function phone(event)
    {

            if(event.keyCode==13)
            {
                alert("phone number is entered");
            }
    }
   
    function loginn()
    {
        document.getElementById('name').style.display='none';
        document.getElementById('cp').style.display="none";
    }
    function show(){
      var pass =  document.getElementById('pass');
        if(pass.type =='password')
        {
           pass.type="text";
            
        }else if(pass.type=='text'){
           pass.type='password';
        }
    }
    function setTouched(event){
        var eve=event.target;
         eve.className='t1';
         document.body.style['background-color']='yellow';
    }


//login Validation
function validateemaill(){
    var valid=document.myform.email.value;
    var v=valid.indexOf('@');
    var dot=valid.indexOf('.');
    var pass1=document.myform.pass1.value;
  if(v<1 || v+2>dot || dot+2>=valid.length)
   {
      alert("pls enter valid email");
   }else
   {
       alert("valid mail");
   }
  if(pass1 =="")
  {
      alert("pls enter password")
  }
}



                function signup()
                {
                    document.getElementById('hide').style.display='block';
                    document.getElementById('log').style.display='none';
                }
                function login()
                {
                    document.getElementById('hide').style.display='none';
                    document.getElementById('log').style.display='block';
                }
                function hiding()
                {
                    document.getElementsByClassName('rf').style.display='none';
                }