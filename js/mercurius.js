function setPercent(num){
	num=num*100
	num=num.toFixed(2)
	return num.toString()
}

function showMercurius(){  
    var test;  

	var data = new Array();
    data.push('<table><tbody>');
    data.push('<tr style="font-weight:bold"><td>Target</td><td>Update Date</td><td>Action</td><td>1Y Bias</td><td>1Y Return</td><td>10Y Return</td><td>APR</td></tr>');
	


    if(window.XMLHttpRequest){  
        test = new XMLHttpRequest();  
    }else if(window.ActiveXObject){  
        test = new window.ActiveXObject();  
    }else{  
        alert("Browser not supported!");  
    }  
    
    if(test !=null){  
        test.open("GET","https://raw.githubusercontent.com/Novarizark/mercurius/master/routine_output/routine_info.json",true);  
        test.send(null);  
        test.onreadystatechange=function(){  
            if(test.readyState==4&&test.status==200){  
                var obj = JSON.parse(test.responseText);  
                var count = Object.keys(obj).length;
                
				for (var ii = 1; ii <= count; ii++) {
        			data.push('<tr>');
        			
					data.push('<td><a href="https://raw.githubusercontent.com/Novarizark/mercurius/master/routine_output/'+obj['target'+ii].tgt_name.trim()+'.png">'+obj['target'+ii].tgt_name+ '</td>');
					data.push('<td>'+obj['target'+ii].update_date+ '</td>');
					action=obj['target'+ii].action;
					if ((action.search('Buy')>=0)||(action.search('Full')>=0)){
						data.push('<td style="color:Green">'+action+ '</td>');
					}else{
						data.push('<td style="color:Red">'+action+ '</td>');
					}
					
					bias365=setPercent(obj['target'+ii].bias365);
					if (bias365>0){
						data.push('<td style="color:Green">'+bias365+ '%</td>');
					}else{
					
						data.push('<td style="color:Red">'+bias365+ '%</td>');
					}

					r1y=setPercent(obj['target'+ii].r1y)
					if (r1y>0){
						data.push('<td style="color:Green">'+r1y+ '% ');
					}else{
					
						data.push('<td style="color:Red">'+r1y+ '% ');
					}
                    
                    r1y_ref=setPercent(obj['target'+ii].r1y_ref)
					if (r1y_ref>0){
						data.push('<em style="color:Green">('+r1y_ref+'%)</em>');
					}else{
					
						data.push('<em style="color:Red">('+r1y_ref+'%)</em>');
					}

					ttr=setPercent(obj['target'+ii].ttr)
					if (ttr>0){
						data.push('<td style="color:Green">'+ttr+ '% ');
					}else{
					
						data.push('<td style="color:Red">'+ttr+ '% ');
					}
                
                    bttr=setPercent(obj['target'+ii].bttr)
					if (bttr>0){
						data.push('<em style="color:Green">('+bttr+'%)</em>');
					}else{
					
						data.push('<em style="color:Red">('+bttr+'%)</em>');
					}


					arr=setPercent(obj['target'+ii].arr)
					if (arr>0){
						data.push('<td style="color:Green">'+arr+ '% ');
					}else{
					
						data.push('<td style="color:Red">'+arr+ '% ');
					}

					barr=setPercent(obj['target'+ii].barr)
					if (barr>0){
						data.push('<em style="color:Green">('+barr+'%)</em>');
					}else{
					
						data.push('<em style="color:Red">('+barr+'%)</em>');
					}


					data.push('</tr>');
    			}
    		data.push('</tbody><table>');
                
            document.getElementById("table_st1").innerHTML = data.join('');
            }  
        };  
    }  
}  
showMercurius(); 
