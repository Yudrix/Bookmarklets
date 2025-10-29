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
        mathSolverBtn = createButton("Math_Solver", "Math Solver"),
        closeBtn = createButton("menuclosebutton", "Close");
        closeBtn.style.background = "#ff3b30", closeBtn.style.color = "white", closeBtn.style.width = "80px", closeBtn.style.margin = "0 auto";
        let footer = document.createElement("p");
        footer.style.fontSize = "12px", footer.style.textAlign = "center", footer.textContent = "Made with ❤️ by Yudrix", menu.appendChild(title), menu.appendChild(aiBtn), menu.appendChild(editableBtn), menu.appendChild(skipAdBtn), menu.appendChild(darkModeBtn), menu.appendChild(mathSolverBtn), menu.appendChild(closeBtn), menu.appendChild(footer), document.body.appendChild(menu), closeBtn.onclick = function() {
            menu.remove()
        };

        
        // AI highlight thingy
       // --- START: AI INTEGRATION WITH GEMINI API (FAST & STABLE FREE TIER) ---

        // !!! IMPORTANT: Paste your GEMINI API Key here (starts with 'AIza...')
        const GEMINI_API_KEY = "AIzaSyANqhEFzHD42F1b47NqQ0duooBWBz-SKuI"; 
        const GEMINI_MODEL = "gemini-2.5-flash"; // The fast, free-tier model

        // Create AI input panel (hidden by default)
        let aiPanel = document.createElement("div");
        aiPanel.id = "ai-input-panel";
        aiPanel.style.cssText = `
            display: none;
            flex-direction: column;
            gap: 10px;
            padding: 15px;
            background: rgba(41, 41, 41, 0.95);
            border-radius: 12px;
            margin-top: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        `;

        let highlightedTextDiv = document.createElement("div");
        highlightedTextDiv.style.cssText = `
            padding: 10px;
            background: rgba(255, 229, 55, 0.1);
            border-radius: 8px;
            color: #ffe537;
            font-size: 13px;
            max-height: 100px;
            overflow-y: auto;
            word-wrap: break-word;
        `;

        let contextTextarea = document.createElement("textarea");
        contextTextarea.placeholder = "Add context to your question (optional)...";
        contextTextarea.style.cssText = `
            width: 100%;
            min-height: 60px;
            max-height: 150px;
            padding: 10px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 229, 55, 0.3);
            border-radius: 8px;
            color: #ffffff;
            font-family: sans-serif;
            font-size: 13px;
            resize: vertical;
            box-sizing: border-box;
        `;

        let sendBtn = document.createElement("button");
        sendBtn.textContent = "✉ Ask our AI";
        sendBtn.style.cssText = `
            padding: 12px;
            background: linear-gradient(135deg, #ffe537 0%, #ffd700 100%);
            color: #292929;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 14px;
        `;
        sendBtn.onmouseover = () => sendBtn.style.transform = "scale(1.02)";
        sendBtn.onmouseout = () => sendBtn.style.transform = "scale(1)";

        aiPanel.appendChild(highlightedTextDiv);
        aiPanel.appendChild(contextTextarea);
        aiPanel.appendChild(sendBtn);
        menu.insertBefore(aiPanel, editableBtn);

        // AI Button Click Handler
        aiBtn.onclick = function() {
            if (window.location.hostname.includes("github.com")) {
                return alert("This feature is not supported by GitHub for Content Security.");
            }
            
            if (GEMINI_API_KEY === "PASTE_YOUR_GEMINI_API_KEY_HERE") {
                return alert("ERROR: You must add your Gemini API key.");
            }

            let selectedText = window.getSelection().toString().trim();
            if (!selectedText) {
                return alert("Please select some text to ask the AI.");
            }

            // Toggle panel visibility
            if (aiPanel.style.display === "none") {
                aiPanel.style.display = "flex";
                highlightedTextDiv.textContent = `"${selectedText}"`;
                contextTextarea.value = "";
                contextTextarea.focus();
            } else {
                aiPanel.style.display = "none";
            }
        };

        // Send Button Handler
        sendBtn.onclick = async function() {
            let selectedText = highlightedTextDiv.textContent.slice(1, -1); // Remove quotes
            let context = contextTextarea.value.trim();
            let fullPrompt = selectedText + (context ? "\n\nContext: " + context : "");

            const MAX_WORDS = 500;
            let words = fullPrompt.split(/\s+/);
            if (words.length > MAX_WORDS) {
                fullPrompt = words.slice(0, MAX_WORDS).join(" ");
                alert(`Input trimmed to ${MAX_WORDS} words.`);
            }

            // Hide input panel
            aiPanel.style.display = "none";

            // Show loading overlay
            let loadingOverlay = document.createElement("div");
            loadingOverlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
            `;
            
            let spinner = document.createElement("div");
            spinner.style.cssText = `
                width: 50px;
                height: 50px;
                border: 5px solid rgba(255, 229, 55, 0.3);
                border-top: 5px solid #ffe537;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            `;
            
            let style = document.createElement("style");
            style.textContent = "@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }";
            document.head.appendChild(style);
            
            loadingOverlay.appendChild(spinner);
            document.body.appendChild(loadingOverlay);

            try {
                const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;
                
                let response = await fetch(API_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        contents: [{
                            role: "user",
                            parts: [{ text: fullPrompt }]
                        }]
                    })
                });

                loadingOverlay.remove();

                if (response.ok) {
                    let data = await response.json();
                    let aiResponse = "No response received.";
                    
                    if (data.candidates?.[0]?.content?.parts) {
                        aiResponse = data.candidates[0].content.parts[0].text;
                    }

                    // Create draggable result window
                    createResultWindow(aiResponse);
                } else {
                    let errorText = await response.text();
                    alert("Error: " + response.status + "\n" + errorText.substring(0, 150));
                }
            } catch (error) {
                loadingOverlay.remove();
                alert("Fetch Error: " + error.message);
            }
        };

        // Create draggable result window
        function createResultWindow(content) {
            let resultWindow = document.createElement("div");
            resultWindow.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 500px;
                max-width: 90vw;
                max-height: 70vh;
                background: rgba(41, 41, 41, 0.98);
                border: 1px solid rgba(255, 229, 55, 0.5);
                border-radius: 16px;
                box-shadow: 0 12px 40px rgba(0,0,0,0.5);
                z-index: 10001;
                display: flex;
                flex-direction: column;
                overflow: hidden;
            `;

            let header = document.createElement("div");
            header.style.cssText = `
                padding: 15px 20px;
                background: linear-gradient(135deg, #ffe537 0%, #ffd700 100%);
                color: #292929;
                font-weight: 700;
                cursor: move;
                display: flex;
                justify-content: space-between;
                align-items: center;
            `;
            header.textContent = "✨ AI Response";

            let closeX = document.createElement("span");
            closeX.textContent = "✕";
            closeX.style.cssText = `
                cursor: pointer;
                font-size: 20px;
                font-weight: 400;
            `;
            closeX.onclick = () => resultWindow.remove();
            header.appendChild(closeX);

            let contentArea = document.createElement("div");
            contentArea.style.cssText = `
                padding: 20px;
                color: #ffffff;
                font-size: 14px;
                line-height: 1.6;
                overflow-y: auto;
                flex: 1;
            `;
            contentArea.innerHTML = content.replace(/\n/g, "<br>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

            resultWindow.appendChild(header);
            resultWindow.appendChild(contentArea);
            document.body.appendChild(resultWindow);

            // Trigger MathJax rendering
            if (window.MathJax) {
                MathJax.typesetPromise([contentArea]).catch((err) => console.log('MathJax error:', err));
            }

            // Make draggable
            let isDragging = false, offsetX, offsetY;
            header.onmousedown = (e) => {
                isDragging = true;
                offsetX = e.clientX - resultWindow.offsetLeft;
                offsetY = e.clientY - resultWindow.offsetTop;
                resultWindow.style.transform = "none";
            };
            document.onmousemove = (e) => {
                if (isDragging) {
                    resultWindow.style.left = (e.clientX - offsetX) + "px";
                    resultWindow.style.top = (e.clientY - offsetY) + "px";
                }
            };
            document.onmouseup = () => isDragging = false;
        }
        
        // --- RESTORE OTHER BUTTON FUNCTIONALITY ---
        
        editableBtn.onclick = function() {
            document.body.contentEditable = true;
            let links = document.getElementsByTagName("a");
            for (let i = 0; i < links.length; i++) {
                links[i].removeAttribute("href");
            }
        };

        skipAdBtn.onclick = function() {
            // Close overlay ads
            let overlays = document.querySelectorAll('.ytp-ad-overlay-close-button, .ytp-ad-skip-button-modern, .ytp-ad-skip-button');
            overlays.forEach(btn => btn.click());
            
            // Fast forward video to end
            let video = document.querySelector('video');
            if (video) {
                video.currentTime = video.duration;
            }
        };

        darkModeBtn.onclick = function() {
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

        // --- MATH SOLVER WITH SCREENSHOT & LATEX RENDERING ---
        
        mathSolverBtn.onclick = function() {
            if (window.location.hostname.includes("github.com")) {
                return alert("This feature is not supported by GitHub for Content Security.");
            }
            
            if (GEMINI_API_KEY === "PASTE_YOUR_GEMINI_API_KEY_HERE") {
                return alert("ERROR: You must add your Gemini API key.");
            }

            // Create screenshot overlay
            let overlay = document.createElement("div");
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                z-index: 10000;
                cursor: crosshair;
            `;

            let instructionText = document.createElement("div");
            instructionText.textContent = "📸 Click and drag to capture math problem (ESC to cancel)";
            instructionText.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(255, 229, 55, 0.95);
                color: #292929;
                padding: 20px 30px;
                border-radius: 12px;
                font-size: 18px;
                font-weight: 600;
                text-align: center;
                pointer-events: none;
                z-index: 10001;
            `;

            let selectionBox = document.createElement("div");
            selectionBox.style.cssText = `
                position: fixed;
                border: 3px dashed #ffe537;
                background: rgba(255, 229, 55, 0.1);
                pointer-events: none;
                z-index: 10002;
                display: none;
            `;

            document.body.appendChild(overlay);
            document.body.appendChild(instructionText);
            document.body.appendChild(selectionBox);

            let startX, startY, isSelecting = false;

            overlay.onmousedown = (e) => {
                isSelecting = true;
                startX = e.clientX;
                startY = e.clientY;
                selectionBox.style.left = startX + "px";
                selectionBox.style.top = startY + "px";
                selectionBox.style.width = "0px";
                selectionBox.style.height = "0px";
                selectionBox.style.display = "block";
                instructionText.style.display = "none";
            };

            overlay.onmousemove = (e) => {
                if (!isSelecting) return;
                let currentX = e.clientX;
                let currentY = e.clientY;
                let width = Math.abs(currentX - startX);
                let height = Math.abs(currentY - startY);
                selectionBox.style.left = Math.min(startX, currentX) + "px";
                selectionBox.style.top = Math.min(startY, currentY) + "px";
                selectionBox.style.width = width + "px";
                selectionBox.style.height = height + "px";
            };

            overlay.onmouseup = async (e) => {
                if (!isSelecting) return;
                isSelecting = false;

                let endX = e.clientX;
                let endY = e.clientY;
                let x = Math.min(startX, endX);
                let y = Math.min(startY, endY);
                let width = Math.abs(endX - startX);
                let height = Math.abs(endY - startY);

                if (width < 20 || height < 20) {
                    overlay.remove();
                    instructionText.remove();
                    selectionBox.remove();
                    return alert("Selection too small. Please try again.");
                }

                // Capture screenshot using html2canvas
                overlay.remove();
                instructionText.remove();
                selectionBox.remove();

                // Show loading
                showMathLoading();

                try {
                    // Use html2canvas to capture the selected area
                    const script = document.createElement('script');
                    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
                    script.onload = async () => {
                        const canvas = await html2canvas(document.body, {
                            x: x + window.scrollX,
                            y: y + window.scrollY,
                            width: width,
                            height: height,
                            useCORS: true,
                            allowTaint: true
                        });

                        const base64Image = canvas.toDataURL('image/png').split(',')[1];
                        await solveMathProblem(base64Image);
                    };
                    document.head.appendChild(script);

                } catch (error) {
                    hideMathLoading();
                    alert("Screenshot error: " + error.message);
                }
            };

            // ESC to cancel
            document.onkeydown = (e) => {
                if (e.key === "Escape") {
                    overlay.remove();
                    instructionText.remove();
                    selectionBox.remove();
                    document.onkeydown = null;
                }
            };
        };

        async function solveMathProblem(base64Image) {
            try {
                const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;
                
                let response = await fetch(API_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        contents: [{
                            parts: [
                                { text: "Solve this math problem step by step. Format your answer using LaTeX notation for mathematical expressions. Wrap inline math with \\( \\) and display math with \\[ \\]. Explain each step clearly." },
                                {
                                    inline_data: {
                                        mime_type: "image/png",
                                        data: base64Image
                                    }
                                }
                            ]
                        }]
                    })
                });

                hideMathLoading();

                if (response.ok) {
                    let data = await response.json();
                    let solution = "No solution found.";
                    
                    if (data.candidates?.[0]?.content?.parts) {
                        solution = data.candidates[0].content.parts[0].text;
                    }

                    // Create result window with LaTeX rendering
                    createMathResultWindow(solution);
                } else {
                    let errorText = await response.text();
                    alert("API Error: " + response.status + "\n" + errorText.substring(0, 200));
                }
            } catch (error) {
                hideMathLoading();
                alert("Solve Error: " + error.message);
            }
        }

        function showMathLoading() {
            let loadingOverlay = document.createElement("div");
            loadingOverlay.id = "math-loading";
            loadingOverlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                z-index: 10003;
            `;
            
            let spinner = document.createElement("div");
            spinner.style.cssText = `
                width: 60px;
                height: 60px;
                border: 6px solid rgba(255, 229, 55, 0.3);
                border-top: 6px solid #ffe537;
                border-radius: 50%;
                animation: spin 0.8s linear infinite;
            `;

            let loadingText = document.createElement("div");
            loadingText.textContent = "🧮 Solving math problem...";
            loadingText.style.cssText = `
                margin-top: 20px;
                color: #ffe537;
                font-size: 18px;
                font-weight: 600;
            `;
            
            loadingOverlay.appendChild(spinner);
            loadingOverlay.appendChild(loadingText);
            document.body.appendChild(loadingOverlay);
        }

        function hideMathLoading() {
            let loader = document.getElementById("math-loading");
            if (loader) loader.remove();
        }

        function createMathResultWindow(content) {
            let resultWindow = document.createElement("div");
            resultWindow.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 600px;
                max-width: 90vw;
                max-height: 80vh;
                background: rgba(41, 41, 41, 0.98);
                border: 1px solid rgba(255, 229, 55, 0.5);
                border-radius: 16px;
                box-shadow: 0 12px 40px rgba(0,0,0,0.5);
                z-index: 10004;
                display: flex;
                flex-direction: column;
                overflow: hidden;
            `;

            let header = document.createElement("div");
            header.style.cssText = `
                padding: 15px 20px;
                background: linear-gradient(135deg, #ffe537 0%, #ffd700 100%);
                color: #292929;
                font-weight: 700;
                cursor: move;
                display: flex;
                justify-content: space-between;
                align-items: center;
            `;
            header.textContent = "Math Solution";

            let closeX = document.createElement("span");
            closeX.textContent = "✕";
            closeX.style.cssText = `
                cursor: pointer;
                font-size: 20px;
                font-weight: 400;
            `;
            closeX.onclick = () => resultWindow.remove();
            header.appendChild(closeX);

            let contentArea = document.createElement("div");
            contentArea.style.cssText = `
                padding: 25px;
                color: #ffffff;
                font-size: 15px;
                line-height: 1.8;
                overflow-y: auto;
                flex: 1;
            `;

            // Format content - preserve LaTeX delimiters
            let formattedContent = content
                .replace(/\n/g, "<br>")
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

            contentArea.innerHTML = formattedContent;

            resultWindow.appendChild(header);
            resultWindow.appendChild(contentArea);
            document.body.appendChild(resultWindow);

            // Load and render MathJax
            if (!document.getElementById('mathjax-script')) {
                // First time loading MathJax
                window.MathJax = {
                    tex: {
                        inlineMath: [['\\(', '\\)']],
                        displayMath: [['\\[', '\\]']]
                    },
                    startup: {
                        pageReady: () => {
                            return MathJax.startup.defaultPageReady().then(() => {
                                MathJax.typesetPromise([contentArea]);
                            });
                        }
                    }
                };

                let mathJaxScript = document.createElement('script');
                mathJaxScript.id = 'mathjax-script';
                mathJaxScript.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
                mathJaxScript.async = true;
                document.head.appendChild(mathJaxScript);
            } else {
                // MathJax already loaded
                let retries = 0;
                const maxRetries = 10;
                
                function attemptRender() {
                    if (window.MathJax && window.MathJax.typesetPromise) {
                        MathJax.typesetPromise([contentArea]).catch((err) => {
                            console.log('MathJax render error:', err);
                        });
                    } else if (retries < maxRetries) {
                        retries++;
                        setTimeout(attemptRender, 200);
                    }
                }
                
                attemptRender();
            }

            // Make draggable
            let isDragging = false, offsetX, offsetY;
            header.onmousedown = (e) => {
                isDragging = true;
                offsetX = e.clientX - resultWindow.offsetLeft;
                offsetY = e.clientY - resultWindow.offsetTop;
                resultWindow.style.transform = "none";
            };
            document.onmousemove = (e) => {
                if (isDragging) {
                    resultWindow.style.left = (e.clientX - offsetX) + "px";
                    resultWindow.style.top = (e.clientY - offsetY) + "px";
                }
            };
            document.onmouseup = () => isDragging = false;
        }

    } catch (e) {
        alert("Bookmarklet error: " + e.message)
    }
})();