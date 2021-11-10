var display =document.getElementById('Display');

             function pushBtn(obj){
             	var x;
                var pushed=obj.innerHTML;
                if(pushed=='='){
	                display.innerHTML=eval(display.innerHTML);
                }
                else if (pushed=='Ac') {
		            display.innerHTML=0;
	            }
	            else if(pushed=='Off'){
	            	display.innerHTML=null;
	            }
	           
	            else if(pushed=='←'){
	            	display.innerHTML=display.innerHTML.toString().slice(0,-1);	
	            	
	            }
	            else{
		            if(display.innerHTML==0){
			            display.innerHTML=pushed;
		            }
		                else{
			                   display.innerHTML +=pushed;
		                    }
	                }
	            }