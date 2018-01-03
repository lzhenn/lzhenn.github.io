function showJson(){  
    var test;  
    if(window.XMLHttpRequest){  
        test = new XMLHttpRequest();  
    }else if(window.ActiveXObject){  
        test = new window.ActiveXObject();  
    }else{  
        alert("Browser not supported!");  
    }  
    
    if(test !=null){  
        test.open("GET","/database/principles.json",true);  
        test.send(null);  
        test.onreadystatechange=function(){  
            if(test.readyState==4&&test.status==200){  
                var obj = JSON.parse(test.responseText);  
                var count = Object.keys(obj).length;
                var rnd_pos = Math.floor(Math.random() * count + 1)-1
                document.getElementById("content-principle").innerHTML = obj[rnd_pos].content;
            }  
        };  
    }  
}  
showJson(); 
