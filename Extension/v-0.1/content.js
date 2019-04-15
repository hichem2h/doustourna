console.log("Holà?");//elt.style['background-color'] = '#000FFF';
/*
once you can detect the article number then call a function that send message to background Script
to fetchData from api
then send it back to contentscript
and once it returns to contentscirpt use it to modifie innerHTML with custom text
like <a hover:"openPopup()">9anon 102</a>

*/
/*
document.body.appendChild=`

<script>
// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
</script>
`;*/setTimeout(()=>{
var styleNode = document.createElement('style');
   styleNode.type = "text/css";
   styleNode.innerHTML=`/* Popup container - can be anything you want */
   .popup {
     position: relative;
     display: inline-block;
     cursor: pointer;
     -webkit-user-select: none;
     -moz-user-select: none;
     -ms-user-select: none;
     user-select: none;
   }

   /* The actual popup */
   .popup .popuptext {
     visibility: hidden;
     width: 160px;
     background-color: #555;
     color: #fff;
     text-align: center;
     border-radius: 6px;
     padding: 8px 0;
     position: absolute;
     z-index: 1;
     bottom: 125%;
     left: 50%;
     margin-left: -80px;
   }

   /* Popup arrow */
   .popup .popuptext::after {
     content: "";
     position: absolute;
     top: 100%;
     left: 50%;
     margin-left: -5px;
     border-width: 5px;
     border-style: solid;
     border-color: #555 transparent transparent transparent;
   }

   /* Toggle this class - hide and show the popup */
   .popup .show {
     visibility: visible;
     -webkit-animation: fadeIn 1s;
     animation: fadeIn 1s;
   }

   /* Add animation (fade in the popup) */
   @-webkit-keyframes fadeIn {
     from {opacity: 0;}
     to {opacity: 1;}
   }

   @keyframes fadeIn {
     from {opacity: 0;}
     to {opacity:1 ;}
   }`;
   var script = document.createElement("script");
   script.innerHTML = `function myFunction() {
     var popup = document.getElementById("myPopup");
     popup.classList.toggle("show");
   };`
   document.body.appendChild(styleNode);
   document.body.appendChild(script);

 },1000)
   // Create the element



   // Append


let paragraphs= document.getElementsByTagName('p');
            var regexp = /((article)|(mada)|مادة)[\s]*[0-9]+/;
            for (let elt of paragraphs){
              var result = regexp.exec(elt.innerHTML);
              if(result){
            var str =   elt.innerHTML.replace(regexp,'<a class="popup" href="localhost:8080/home" style="color:red">'+result[0]+'</a>');
            elt.innerHTML=str;   }
            }
