(function(){

    let fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    let menu = document.createElement('div');
    menu.innerHTML=`
    <style>
   
    #bookmarkletmenu{
        position:fixed;
        top:20px;
        display:flex;
        font-family:'Montserrat', sans-serif;
        right:20px;
        padding:20px;
        background-color: rgba(28, 28, 30, 0.9);
        border: 1px solid #ffe537;
        border-radius:20px;
        z-index:9999;
        flex-direction:column;
        gap:15px;
        box-shadow: 0px 8px 24px rgba(0,0,0,0.3);
        animation: fadeIn 0.3 ease-in-out;
        width:300px;
    }
    #bookmarkletmenu h1{
        display:flex;
        font-family:'Montserrat', sans-serif;
        font-size 24px;
        font-weight: 700;
        align-items:center;
        justify-content:center;
        gap:10px;
        color: #ffffff;
        margin:0;
        
        
        }
    #bookmarkletmenu h1 img{
        width:30px;
        height:30px;}

    #bookmarkletmenu button{
        cursor:pointer;
        padding:10px 15px;
        border:none;
        box-shadow: 0 0 16px #ffe537;
        background: #292929;
        color: #ffe537;
        font-size:14px;
        font-weight:400;
        font-family:'Montserrat', sans-serif;
        border-radius:10px;
        transition: background 0.3s ease, transform 0.2 ease;
        
    
        }
    #bookmarkletmenu button:hover{
        background:#005a9e; 
        transform:scale(1.05);
        box-shadow: 0 0 24px #ffe537;
        }
    #menuclosebutton{
        background: #ff3b30;
        color:white;
        font-size:12px;
        font-weight:bold;
        width:50px;
        height:30px;
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        margin-left:auto;
        padding:10px 15px;
        transition: background 0.3s ease, transform 0.2 ease;
        cursor:pointer;
        }  
    #menuclosebutton:hover{
        background:darkred;
        transform: scale(1.1);} 
    #bookmarkletmenu p{
        font-size:12px;
        text-align:center;
        font-family:'Montserrat', sans-serif;
        font-weight:400;
        
    @keyframes fadeIn{
    from {opacity: 0; transform: scale(0.8);}
    to {opacity: 1; transform: scale(1);}}
</style>
    <div id="bookmarkletmenu">
    <h1>
    Toolkit
    <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/9a0afe8d03290fbcd2c84c4d3ac04ab6ce8ac212_jslogo.png">
    </h1> 
    <button id="AI">Ask AI</button>
    <button id="Editable_site">Edit the site!</button>
    <button id="Darkmode">Invert mode</button>
    <button id="menuclosebutton">Close</button>
    <p>Made with ❤️ by <a href="https://github.com/Yudrix/Bookmarklets" target="_blank" style="color:#ffe537; text-decoration:none;">Yudrix</a></p>
    <p>ToolkitJS is a collection of bookmarklets to enhance your browsing experience.</p>
    </div>
    
     
        

    `;
    document.body.appendChild(menu);

    document.getElementById('menuclosebutton').onclick=function(){
        menu.remove(); };
    document.getElementById('menuclosebutton').style='';

    document.getElementById('AI').onclick = async function(){
        let selectedText = window.getSelection().toString().trim();
        if (!selectedText) {
            alert("Please select some text to ask the AI.");
            return;
        }
        let additionalText = prompt("Please provide any additional contextto your question:", "");
        if (additionalText){
            selectedText += " " + additionalText.trim();
        }

        const wordlimit = 500;
        let words = selectedText.split(/\s+/).length;
        if (words.length > wordlimit) {
            selectedText = words.slice(0, wordLimit).join(" ");
            alert(`Input is too long. Only the first ${wordlimit} words will be used.`);
        }
        let confirmation = confirm("You are about to ask the AI:\n\n " + selectedText + "\n\nDo you want to proceed?");
        if (!confirmation){
            return;
        }
        let response = await fetch('https://ai.hackclub.com/chat/completions',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                messages: [{ role: "user", content: selectedText}]
            })
        });
        if (response.ok) {
            let data = await response.json();
            alert("Toolkit AI: " +(data.choices[0].message?.content || "No response received."));

        } else{
            alert("Error: Unable to connect to AI service. Please try again later.");
        }
    };
    document.getElementById('Editable_site').onclick=function(){
        document.body.contentEditable = true;
        let all_links = document.getElementsByTagName("a");
        for(let i=0; i<all_links.length; i++){ alllinks[1].removeAttribute("href");
            void 0;
        }
    };
    document.getElementById('Darkmode').onclick=function(){
         
           
        document.body.style.filter = "invert(1) hue-rotate(180deg)";
        
        let elems = document.querySelectorAll("img,video,a,iframe,svg,canvas,embed,object,source,track,link,style");
        for (let j = 0; j < elems.length; j++)
        {if (elems[j].style){elems[j].style.filter = "invert(0) hue-rotate(0deg)";}}
        
    

        
    };
    
})();