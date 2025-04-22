(function(){

    let fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap';
    fontLink.rel = 'stylesheet';
    document.head,appendChild(fontLink);

    let menu = document.createElement('div');
    menu.innerHTML=`
    <style>
   
    #bookmarkletmenu{
        position:fixed;
        top:20px;
        display:flex;
        font-family:'Roboto', sans-serif;
        right:20px;
        padding:5px;
        background-color:rgb(46, 44, 44);
        border: 2px solid rgb(255, 234, 0);
        border-radius:10px;
        z-index:9999;
        flex-direction:column;
        gap:10px;
        box-shadow: 2px 2px 15px rgba(0,0,0,0.3);
    }
    #bookmarkletmenu h1{
        display:flex;
        font-family:'Roboto', sans-serif;
        font-size 20px;
        align-items:center;
        gap:10px;
        color:rgb(255,255,255);
        margin:0;
        }
    #bookmarkletmenu h1 img{
        width:24px;
        height:24px;}
    #bookmarkletmenu button{
        cursor:pointer;
        padding:8px 12px;
        border:none;
        background:#0078d7;
        color:white;
        font-size:14px;
        border-radius:5px;
        transition: background 0.3s ease, transform 0.2 ease;
        
    
        }
    #bookmarkletmenu button:hover{
        background:#005a9e; 
        transform:scale(1.05);
        }
    #menuclosebutton{
        background:red;
        color:white;
        font-size:16px;
        font-weight:bold;
        width:30px;
        height:30px;
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        margin-left:auto;
        transition: background 0.3s ease, transform 0.2 ease;
        cursor:pointer;
        }  
    #menuclosebutton:hover{
        background:darkred;
        transform: scale(1.1);} 
</style>
    <div id="bookmarkletmenu">
    <h1>
    Toolkit
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMsQKIOVtgGOXbpESHzwhMiMyQ9Dfnh0WT-g&s">
    <.h1>   
    <button id="Darkmode">Invert mode</button>
    <button id="menuclosebutton">X</button>
    </div>
     
        

    `;
    document.body.appendChild(menu);
    document.getElementById('menuclosebutton').onclick=function(){
        menu.remove(); };
    document.getElementById('Darkmode').onclick=function(){
         
           
        let all = document.getElementsByTagName('*');
        for (let i = 0; i < all.length; i++)
        {if(typeof all[i].style !== 'undefined'){all[i].style.filter = "invert(1)";}}
        
        let elems = document.querySelectorAll("img,video,a");
        for (let j = 0; j < elems.length; j++)
        {if (elems[j].style){elems[j].style.filter = "invert(0)";}}
        
    

        
    };
    
})();