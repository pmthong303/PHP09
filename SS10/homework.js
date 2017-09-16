function checkform()
	{
		checkname();
		checkemail();
		checkpassword();
		checkdate();
	}
	function checkname(){
		var firstname = document.getElementById("first").value;
		var lastname = document.getElementById("last").value;
		if(firstname == "" ) {
			document.getElementById("errorfirst").innerHTML = "Please enter a firstname";
			document.getElementById("first").style.border ="2px solid red";
		
		}
		else {
			document.getElementById("errorfirst").innerHTML = "";
		}
		if(lastname == "") {
			document.getElementById("errorlast").innerHTML = "Please enter a lastname";
			document.getElementById("last").style.border ="2px solid red";
			
		}
		else {
			document.getElementById("errorlast").innerHTML = "";
		}
		
	}
function checkemail(){
	var email = document.getElementById('txtemail').value;
	var reemail = document.getElementById("reemail").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email == ""){
    	document.getElementById("erroremail").innerHTML ="Please enter the email";
    	document.getElementById("txtemail").style.border ="2px solid red";
    }
    else if (!filter.test(email)) {
    	document.getElementById("erroremail").innerHTML ="Please input a valid email address";
    	document.getElementById("txtemail").style.border ="2px solid red";
	    email.focus;
	    return false;
	  
	}
    	
    
    
	else{
		document.getElementById("erroremail").innerHTML ="";
	}
	
	if(reemail == "")
	{
		document.getElementById("errorreemail").innerHTML = "Please enter re-email";
		document.getElementById("reemail").style.border ="2px solid red";
	}
		else {

			if ( reemail != email)
			{
				
			document.getElementById("errorreemail").innerHTML = "Please enter the same email";
			document.getElementById("reemail").style.border ="2px solid red";
			}
				else{
					document.getElementById("errorreemail") = "";
			
					}
		}


			
			
			
		

		
	
	

	

	
 }
function checkpassword()
	{
		var password = document.getElementById("txtpassword").value;
		var confirmpassword = document.getElementById("confirmpassword").value;
		if(password ==""){
			document.getElementById("errorpassword").innerHTML ="Please enter a password";
			document.getElementById("txtpassword").style.border ="2px solid red";
		}
		else{

		 	if(password.length <6) {
			document.getElementById("errorpassword").innerHTML ="Please enter a valid password";
			document.getElementById("txtpassword").style.border ="2px solid red";

			}
				else{
				document.getElementById("errorpassword").innerHTML ="";
				}
		}
		if(confirmpassword ==""){
			document.getElementById("frpassword").innerHTML ="Please enter the Re-password";
			document.getElementById("confirmpassword").style.border ="2px solid red";
		}
		else

			if (comfirmpassword != password){
			document.getElementById("frpassword").innerHTML = "Please enter the same password";
			document.getElementById("confirmpassword").style.border ="2px solid red";
			}
			else {
			document.getElementById("frpassword").innerHTML = "";

			}
		 

	}
function checkdate(){
	var day = document.getElementById("day").value;
	var month = document.getElementById("month").value;
	var year = document.getElementById("year").value;
	if (day ="Day"){
		document.getElementById("errorday")
	}

}


		
		
		