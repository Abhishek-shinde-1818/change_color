let mydata={
    text:"",
    color:""
}
let flag=true
let displayflag=true
function renderui()
{


let div=document.getElementById("root")
div.innerHTML=" "
let Div1 = document.createElement("div");
Div1.id = "navbar";
div.appendChild(Div1)

let Div2 = document.createElement("div");
Div2.id = "bbox";
Div1.appendChild(Div2)

let Div3 = document.createElement("div");
Div3.id = "ibox";
Div1.appendChild(Div3)



let Div4 = document.createElement("div");
Div4.id = "sbox";
Div1.appendChild(Div4)


function changecolor(selectedColor)
{
  mydata.color=selectedColor
  t.style.color=mydata.color

    if(selectedColor=="red")
    {
    document.getElementById(selectedColor).style.borderWidth="5px"
    document.getElementById("yellow").style.borderWidth="0px"
    document.getElementById("green").style.borderWidth="0px"
    }
    else if(selectedColor=="yellow")
    {
      document.getElementById(selectedColor).style.borderWidth="5px"
      document.getElementById("red").style.borderWidth="0px"
      document.getElementById("green").style.borderWidth="0px"
    }
    else{
      document.getElementById(selectedColor).style.borderWidth="5px"
      document.getElementById("red").style.borderWidth="0px"
      document.getElementById("yellow").style.borderWidth="0px"
    
    }       
}

function updateobj()
{
  mydata.text=inputbox.value
}
let redbt=document.createElement("BUTTON")
redbt.id="red"
redbt.style.backgroundColor="red"
redbt.textContent="red"
redbt.onclick = function(){
    changecolor("red")
    
  };


  let yellowbt=document.createElement("BUTTON")
  yellowbt.id="yellow"
  yellowbt.style.backgroundColor="yellow"
  yellowbt.textContent="yellow"
  yellowbt.onclick = function(){
    changecolor("yellow")
     
    };

    let greenbt=document.createElement("BUTTON")
    greenbt.id="green"
    greenbt.style.backgroundColor="green"
    greenbt.textContent="green"
    greenbt.onclick = function(){
        changecolor("green")
       
      };
      

      Div2.appendChild(redbt)
      Div2.appendChild(yellowbt)
      Div2.appendChild(greenbt)
    let inputbox=document.createElement("input")
    inputbox.id="itext"
    inputbox.addEventListener("change",updateobj)
    Div3.appendChild(inputbox)
    let a=document.createElement("br")
    Div3.appendChild(a)
    let etext=document.createTextNode("Entered Text-")
    Div3.appendChild(etext)
    
    let t=document.createElement("p")
    t.id="enteredtext"
    Div3.appendChild(t)
    let errormsg=document.createElement("p")
    Div3.appendChild(errormsg)
        
    function display()
    {
      document.getElementById("enteredtext").innerHTML=""   

        let text=mydata.text
        let clr=mydata.color
        if(text==="")
        {
           error="enter a string"
           errormsg.innerHTML=error
        }
         else if(isNaN(text))
         {
          mydata.text=text
          t.style.color=clr
          t.innerHTML=text
         
          }
         else{
          error="enter valid string"
          errormsg.innerHTML=error
         
        }      
        
    }
    
    function reset()
    {
        renderui()
    }
    let sbutton=document.createElement("BUTTON")
    sbutton.id="sbutton"
    sbutton.type="button"
    sbutton.textContent="submit"
    Div4.appendChild(sbutton)

    
    let rbutton=document.createElement("BUTTON")
    rbutton.id="rbutton"
    rbutton.type="button"
    rbutton.textContent="Reset"
    Div4.appendChild(rbutton)

    sbutton.onclick = function(){
        display()
      };
      
      rbutton.onclick = function(){
        reset()
      };
    


}
