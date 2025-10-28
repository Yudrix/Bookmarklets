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
        color: #ffffff;
        margin:5px 0;
    }
    #aiResponsePanel{
        display:none;
        margin-top:15px;
        padding:15px;
        background: rgba(0, 0, 0, 0.6);
        border-radius:10px;
        max-height:300px;
        overflow-y:auto;
        animation: slideDown 0.3s ease-in-out;
    }
    #aiResponsePanel.visible{
        display:block;
    }
    #aiResponseText{
        color:#ffffff;
        font-size:13px;
        line-height:1.5;
        white-space:pre-wrap;
        word-wrap:break-word;
    }
    .loading-spinner{
        border:3px solid rgba(255,229,55,0.3);
        border-top:3px solid #ffe537;
        border-radius:50%;
        width:30px;
        height:30px;
        animation:spin 1s linear infinite;
        margin:10px auto;
    }
    @keyframes fadeIn{
        from {opacity: 0; transform: scale(0.8);}
        to {opacity: 1; transform: scale(1);}
    }
    @keyframes slideDown{
        from {opacity: 0; max-height: 0;}
        to {opacity: 1; max-height: 300px;}
    }
    @keyframes spin{
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
    <div id="bookmarkletmenu">
    <h1>
    Toolkit
    <img src="https://raw.githubusercontent.com/Yudrix/Bookmarklets/main/jslogo.png">
    </h1> 
    <button id="AI">Highlight to ask AI</button>
    <div id="aiResponsePanel">
        <div id="aiResponseText"></div>
    </div>
    <button id="Calculator">Calculator</button>
    <button id="Screenshot">Take Screenshot</button>
    <button id="TextToSpeech">Text to Speech</button>
    <button id="FindReplace">Find & Replace</button>
    <button id="QRCode">Generate QR Code</button>
    <button id="Editable_site">Edit the site!</button>
    <button id="Skip_Ad_Yt">Skip Ad</button>
    <button id="Darkmode">Dark Mode</button>
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
        let words = selectedText.split(/\s+/);
        if (words.length > wordlimit) {
            selectedText = words.slice(0, wordlimit).join(" ");
            alert(`Input is too long. Only the first ${wordlimit} words will be used.`);
        }
        let confirmation = confirm("You are about to ask the AI:\n\n " + selectedText + "\n\nDo you want to proceed?");
        if (!confirmation){
            return;
        }
        
        // Show response panel with loading spinner
        let responsePanel = document.getElementById('aiResponsePanel');
        let responseText = document.getElementById('aiResponseText');
        responsePanel.classList.add('visible');
        responseText.innerHTML = '<div class="loading-spinner"></div><p style="color:#ffe537;text-align:center;margin-top:10px;">Asking AI...</p>';
        
        try {
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
                let aiResponse = data.choices[0].message?.content || "No response received.";
                responseText.innerHTML = '<strong style="color:#ffe537;">AI Response:</strong><br><br>' + aiResponse;
            } else {
                responseText.innerHTML = '<strong style="color:#ff3b30;">Error:</strong><br>Unable to connect to AI service. Please try again later.';
            }
        } catch (error) {
            responseText.innerHTML = '<strong style="color:#ff3b30;">Error:</strong><br>' + error.message;
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
        // Check if we're on YouTube - use strict hostname check for security
        const hostname = window.location.hostname;
        if (hostname !== 'www.youtube.com' && hostname !== 'youtube.com' && hostname !== 'm.youtube.com') {
            alert('This feature only works on YouTube!');
            return;
        }
        
        try {
            // Try to skip video ads
            let video = document.querySelector('.html5-main-video');
            if (video && video.duration) {
                video.currentTime = video.duration;
            }
            
            // Close overlay ads
            let overlayCloseButtons = document.querySelectorAll('.ytp-ad-overlay-close-button, .ytp-ad-skip-button, .ytp-ad-skip-button-modern');
            overlayCloseButtons.forEach(button => {
                if (button) button.click();
            });
            
            // Try modern YouTube skip button
            let skipButton = document.querySelector('.ytp-ad-skip-button-modern, .ytp-ad-skip-button');
            if (skipButton) {
                skipButton.click();
            }
            
            // Remove ad containers
            let adContainers = document.querySelectorAll('.video-ads, .ytp-ad-player-overlay');
            adContainers.forEach(container => {
                if (container) container.style.display = 'none';
            });
            
            alert('Ad skip attempted! If the ad persists, try clicking again.');
        } catch (error) {
            alert('Error skipping ad. YouTube may have updated their layout.');
        }
    };

    document.getElementById('Darkmode').onclick=function(){
        // Check if dark mode is already applied
        if (document.body.hasAttribute('data-toolkit-darkmode')) {
            // Remove dark mode
            document.body.removeAttribute('data-toolkit-darkmode');
            document.body.style.filter = "";
            
            let elems = document.querySelectorAll("img,video,iframe,svg,canvas,embed,object");
            for (let j = 0; j < elems.length; j++) {
                if (elems[j].style) {
                    elems[j].style.filter = "";
                }
            }
        } else {
            // Apply dark mode
            document.body.setAttribute('data-toolkit-darkmode', 'true');
            document.body.style.filter = "invert(1) hue-rotate(180deg)";
            
            // Preserve images and videos in their original colors
            let elems = document.querySelectorAll("img,video,iframe,svg,canvas,embed,object");
            for (let j = 0; j < elems.length; j++) {
                if (elems[j].style) {
                    elems[j].style.filter = "invert(1) hue-rotate(180deg)";
                }
            }
        }
    };
    
    // Calculator feature
    document.getElementById('Calculator').onclick=function(){
        let calcPanel = document.getElementById('aiResponsePanel');
        let calcText = document.getElementById('aiResponseText');
        
        let expression = prompt('Enter a mathematical expression (e.g., 5 * (3 + 2)):');
        if (!expression) return;
        
        try {
            // Safe evaluation using Function constructor
            let result = Function('"use strict"; return (' + expression + ')')();
            calcText.innerHTML = '<strong style="color:#ffe537;">Calculator Result:</strong><br><br>' + 
                                expression + ' = <strong style="font-size:18px;">' + result + '</strong>';
            calcPanel.classList.add('visible');
        } catch (error) {
            calcText.innerHTML = '<strong style="color:#ff3b30;">Error:</strong><br>Invalid expression. Please try again.';
            calcPanel.classList.add('visible');
        }
    };
    
    // Screenshot feature
    document.getElementById('Screenshot').onclick=function(){
        // Close menu temporarily for clean screenshot
        menu.style.display = 'none';
        
        setTimeout(() => {
            try {
                // Use html2canvas if available, otherwise provide instructions
                if (typeof html2canvas !== 'undefined') {
                    html2canvas(document.body).then(canvas => {
                        let link = document.createElement('a');
                        link.download = 'screenshot-' + Date.now() + '.png';
                        link.href = canvas.toDataURL();
                        link.click();
                        menu.style.display = '';
                    });
                } else {
                    alert('To use this feature, you can:\n\n1. Use browser built-in screenshot (Ctrl+Shift+S on Firefox, Cmd+Shift+4 on Mac)\n2. Or try the browser extension method\n\nNote: Bookmarklets have limited access to screen capture APIs.');
                    menu.style.display = '';
                }
            } catch (error) {
                alert('Screenshot feature requires additional permissions. Please use your browser\'s built-in screenshot tool.');
                menu.style.display = '';
            }
        }, 100);
    };
    
    // Text to Speech feature
    document.getElementById('TextToSpeech').onclick=function(){
        let selectedText = window.getSelection().toString().trim();
        
        if (!selectedText) {
            selectedText = prompt('No text selected. Enter text to speak:');
            if (!selectedText) return;
        }
        
        if ('speechSynthesis' in window) {
            // Cancel any ongoing speech
            speechSynthesis.cancel();
            
            let utterance = new SpeechSynthesisUtterance(selectedText);
            utterance.rate = 1.0;
            utterance.pitch = 1.0;
            utterance.volume = 1.0;
            
            speechSynthesis.speak(utterance);
            alert('Speaking... (Click OK to continue)');
        } else {
            alert('Text-to-Speech is not supported in your browser.');
        }
    };
    
    // Find and Replace feature
    document.getElementById('FindReplace').onclick=function(){
        let findText = prompt('Enter text to find:');
        if (!findText) return;
        
        let replaceText = prompt('Enter replacement text:');
        if (replaceText === null) return;
        
        let count = 0;
        let walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        
        let nodesToReplace = [];
        while (walker.nextNode()) {
            let node = walker.currentNode;
            if (node.nodeValue && node.nodeValue.includes(findText)) {
                nodesToReplace.push(node);
            }
        }
        
        nodesToReplace.forEach(node => {
            let newValue = node.nodeValue.split(findText).join(replaceText);
            if (newValue !== node.nodeValue) {
                node.nodeValue = newValue;
                count++;
            }
        });
        
        alert(`Replaced ${count} occurrence(s) of "${findText}" with "${replaceText}"`);
    };
    
    // QR Code Generator
    document.getElementById('QRCode').onclick=function(){
        let text = prompt('Enter text or URL to generate QR code:');
        if (!text) return;
        
        let qrPanel = document.getElementById('aiResponsePanel');
        let qrText = document.getElementById('aiResponseText');
        
        // Use a free QR code API
        let qrApiUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(text);
        
        qrText.innerHTML = '<strong style="color:#ffe537;">QR Code:</strong><br><br>' +
                          '<img src="' + qrApiUrl + '" style="max-width:100%;background:white;padding:10px;border-radius:5px;" />' +
                          '<br><small style="color:#aaa;word-wrap:break-word;">' + text + '</small>';
        qrPanel.classList.add('visible');
    };
    
})();