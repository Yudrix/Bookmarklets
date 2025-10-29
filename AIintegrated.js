javascript:(function(){
    try {
        let menu = document.createElement("div");

        menu.id = "bookmarkletmenu", menu.style.position = "fixed", menu.style.top = "20px", menu.style.right = "20px", menu.style.display = "flex", menu.style.fontFamily = "sans-serif", menu.style.padding = "20px", menu.style.backgroundColor = "rgba(255,255,255,0.2)", menu.style.border = "1px solid rgba(255,255,255,0.3)", menu.style.backdropFilter = "blur(10px)", menu.style.borderRadius = "20px", menu.style.zIndex = "9999", menu.style.flexDirection = "column", menu.style.gap = "15px", menu.style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)", menu.style.width = "300px";
        let title = document.createElement("h1");

        title.textContent = "Toolkit", title.style.display = "flex", title.style.fontSize = "24px", title.style.fontWeight = "700", title.style.alignItems = "center", title.style.justifyContent = "center", title.style.color = "#ffffff", title.style.margin = "0";
        let createButton = ((id, text) => {

            let btn = document.createElement("button");

            return btn.id = id, btn.textContent = text, btn.style.cursor = "pointer", btn.style.padding = "10px 15px", btn.style.border = "none", btn.style.boxShadow = "0 0 16px #ffe537", btn.style.background = "#292929", btn.style.color = "#ffe537", btn.style.fontSize = "14px", btn.style.fontWeight = "400", btn.style.borderRadius = "10px", btn.style.transition = "all 0.2s ease", btn
        }),

        aiBtn = createButton("AI", "Highlight to ask AI"),
        editableBtn = createButton("Editable_site", "Edit the site!"),
        skipAdBtn = createButton("Skip_Ad_Yt", "Skip Ad"),
        darkModeBtn = createButton("Darkmode", "Invert mode"),
        closeBtn = createButton("menuclosebutton", "Close");
        closeBtn.style.background = "#ff3b30", closeBtn.style.color = "white", closeBtn.style.width = "80px", closeBtn.style.margin = "0 auto";
        let footer = document.createElement("p");
        footer.style.fontSize = "12px", footer.style.textAlign = "center", footer.textContent = "Made with ❤️ by Yudrix", menu.appendChild(title), menu.appendChild(aiBtn), menu.appendChild(editableBtn), menu.appendChild(skipAdBtn), menu.appendChild(darkModeBtn), menu.appendChild(closeBtn), menu.appendChild(footer), document.body.appendChild(menu), closeBtn.onclick = function() {
            menu.remove()
        };

        
        // AI highlight thingy
       

        // change later
        const OPENROUTER_API_KEY = "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"; 
        
        // maybe
        const OPENROUTER_MODEL = "minimax/minimax-m27x7-chat"; 

        aiBtn.onclick = async function() {
            if (window.location.hostname.includes("github.com")) return void alert("This feature is not supported by GitHub for Content Security. Please try it on another site.");
            
            if (OPENROUTER_API_KEY === "PASTE_YOUR_SECRET_API_KEY_HERE") {
                return void alert("ERROR: You must replace 'PASTE_YOUR_SECRET_API_KEY_HERE' with your actual OpenRouter API key.");
            }

            let highlightedText = window.getSelection().toString().trim();
            if (!highlightedText) return void alert("Please select some text to ask the AI.");
            
            let context = prompt("Please provide any additional context to your question (optional):", "");
            let fullPrompt = highlightedText;
            if (context) {
                fullPrompt += " " + context.trim();
            }

            const MAX_WORDS = 500;
            let words = fullPrompt.split(/\s+/);
            if (words.length > MAX_WORDS) {
                fullPrompt = words.slice(0, MAX_WORDS).join(" ");
                alert(`Input is too long. Only the first ${MAX_WORDS} words will be used.`);
            }

            if (!confirm("You are about to ask the AI:\n\n" + fullPrompt + "\n\nDo you want to proceed?")) return;

            try {
                // OpenRouter API Endpoint
                let response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${OPENROUTER_API_KEY}`
                    },
                    body: JSON.stringify({
                        "model": OPENROUTER_MODEL,
                        "messages": [{
                            "role": "user",
                            "content": fullPrompt
                        }]
                    })
            });

                if (response.ok) {
                    let data = await response.json();
                    let aiResponse = data.choices && data.choices[0] && data.choices[0].message ? data.choices[0].message.content : "No response received.";
                    alert("Toolkit AI: " + aiResponse);
                } else {
                    let errorText = await response.text();
                    alert("Error: Unable to connect to AI service. Status: " + response.status + "\nDetails: " + errorText.substring(0, 100));
                }
            } catch (error) {
                alert("Error: " + error.message)
            }
        };

        
        //end of my ai integration
        
//editable
        editableBtn.onclick = function() {
            document.body.contentEditable = !0;
            let links = document.getElementsByTagName("a");
            for (let t = 0; t < links.length; t++) links[t].removeAttribute("href")
        };
        
//skip ad
        skipAdBtn.onclick = function() {
            try {
                let videoAds = document.getElementsByClassName("video-ads")[0];
                if (videoAds && "" !== videoAds.innerHTML) {
                    let clickedOverlay = !1,
                        overlayCloseButtons = document.getElementsByClassName("ytp-ad-overlay-close-button");
                    for (let n = 0; n < overlayCloseButtons.length; n++) overlayCloseButtons[n].click(), clickedOverlay = !0;
                    if (!1 === clickedOverlay) {
                        let mainVideo = document.getElementsByClassName("html5-main-video")[0];
                        if (mainVideo) {
                            mainVideo.currentTime = mainVideo.duration;
                            let skipButton = document.getElementsByClassName("ytp-ad-skip-button")[0];
                            skipButton && skipButton.click()
                        }
                    }
                }
            } catch (error) {
                console.log("Skip ad error: " + error.message)
            }
        };

        // Darkmode

         darkModeBtn.onclick=function(){
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
        } catch (e) {
        alert("Bookmarklet error: " + e.message)
        }
})();