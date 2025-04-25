(function(){

    let fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    let menu = document.createElement('div');
    menu.innerHTML=`
    <style>

    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap') 
        
    }
    
    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap')
    }
   
    #bookmarkletmenu{
        position:fixed !important;
        top:20px !important;
        display:flex !important;
        font-family:'Montserrat', sans-serif !important;
        right:20px !important;
        padding:20px !important;
        background-color: rgba(255, 255, 255, 0.2) !important;
        border: 1px solid rgba(255, 255, 255, 0.3) !important;
        backdrop-filter: blur(10px) !important;
        border-radius:20px !important;
        z-index:9999 !important;
        flex-direction:column !important;
        gap:15px !important;
        box-shadow: 0px 8px 24px rgba(0,0,0,0.3) !important;
        animation: fadeIn 0.3s ease-in-out !important;
        width:300px !important;
    }
    #bookmarkletmenu h1{
        display:flex;
        font-family:'Montserrat', sans-serif;
        font-size: 24px;
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
        transition: background 0.3s ease, transform 0.2s ease;
        
    
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
    <img src="https://raw.githubusercontent.com/Yudrix/Bookmarklets/main/jslogo.png">
    </h1> 
    <button id="AI">Highlight to ask AI</button>
    <button id="Editable_site">Edit the site!</button>
    <button id="Skip_Ad_Yt">Skip Ad</button>
    <button id="Darkmode">Invert mode</button>
    <button id="menuclosebutton">Close</button>
    <p>Made with ❤️ by <a href="https://github.com/Yudrix/Bookmarklets" target="_blank" style="color:#ffe537; text-decoration:none;">Yudrix</a></p>
    <p>&copy; 2025 Yudrix</p>
    <p>ToolkitJS is a collection of bookmarklets to enhance your browsing experience.</p>
    </div>
    
     
        

    `;
    document.body.appendChild(menu);

    document.getElementById('menuclosebutton').onclick=function(){
        menu.remove(); };
    document.getElementById('menuclosebutton').style='';

    document.getElementById('AI').onclick = async function(){

        if (window.location.hostname.includes("github.com")){
            alert("This feature is not supported by GitHub for Content Security. Please try it on another site.");
            return;
        }

        let selectedText = window.getSelection().toString().trim();
        if (!selectedText) {
            alert("Please select some text to ask the AI.");
            return;
        }
        let additionalText = prompt("Please provide any additional context to your question:", "");
        if (additionalText){
            selectedText += " " + additionalText.trim();
        }

        const wordlimit = 500;
        let words = selectedText.split(/\s+/).length;
        if (words.length > wordlimit) {
            selectedText = words.slice(0, wordlimit).join(" ");
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
        for(let i=0; i<all_links.length; i++){ all_links[i].removeAttribute("href");
            void 0;
        }
    };

    document.getElementById('Skip_Ad_Yt').onclick=function(){
        if(document.getElementsByClassName("video-ads")[0].innerHTML !==""){
            var banner = false;
            for(var i = 0; i < document.getElementsByClassName("ytp-ad-overlay-close-button").length; i++)
                { document.getElementsByClassName("ytp-ad-overlay-close-button")[i].click(); banner = true;}
            if(banner === false){ document.getElementsByClassName("html5-main-video")[0].currentTime = document.getElementsByClassName("html5-main-video")[0].duration; document.getElementsByClassName("ytp-ad-skip-button")[0].click();}    
        }
        void 0;

        

    };

    document.getElementById('Darkmode').onclick=function(){
         
           
        document.body.style.filter = "invert(1) hue-rotate(180deg)";
        
        let elems = document.querySelectorAll("img,video,a,iframe,svg,canvas,embed,object,source,track,link,style");
        for (let j = 0; j < elems.length; j++)
        {if (elems[j].style){elems[j].style.filter = "invert(0) hue-rotate(0deg)";}}
        
    

        
    };
    
})();