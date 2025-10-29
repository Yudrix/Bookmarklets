javascript:(function(){
    try {
        let menu = document.createElement("div");

        menu.id = "bookmarkletmenu";
        menu.style.position = "fixed";
        menu.style.top = "20px";
        menu.style.right = "20px";
        menu.style.display = "flex";
        menu.style.fontFamily = "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif";
        menu.style.padding = "24px";
        // Change background color and opacity
        menu.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
        menu.style.border = "1px solid rgba(255, 229, 55, 0.2)";
        menu.style.backdropFilter = "blur(12px)";
        menu.style.borderRadius = "16px";
        menu.style.zIndex = "9999";
        menu.style.flexDirection = "column";
        menu.style.gap = "14px";
        menu.style.boxShadow = "0 8px 32px rgba(0,0,0,0.4)";
        menu.style.width = "300px";
        
        // Logo instead of text title
        let logoImg = document.createElement("img");
        logoImg.src = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/ab16fc41100472b4a0fede1cc87605d08da5f81a_Vidyuth-logo.png";
        logoImg.style.width = "140px";
        logoImg.style.height = "auto";
        logoImg.style.display = "block";
        logoImg.style.margin = "0 auto 8px";
        logoImg.style.objectFit = "contain";
        
        let createButton = ((id, text) => {
            let btn = document.createElement("button");
            btn.id = id;
            btn.textContent = text;
            btn.style.cursor = "pointer";
            btn.style.padding = "12px 16px";
            btn.style.border = "1px solid rgba(255, 229, 55, 0.15)";
            btn.style.background = "rgba(20, 20, 20, 0.95)";
            btn.style.color = "#FFE537";
            btn.style.fontSize = "14px";
            btn.style.fontWeight = "500";
            btn.style.borderRadius = "8px";
            btn.style.transition = "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)";
            btn.style.fontFamily = "inherit";
            btn.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
            
            btn.onmouseover = () => {
                btn.style.background = "rgba(30, 30, 30, 0.95)";
                btn.style.borderColor = "rgba(255, 229, 55, 0.3)";
                btn.style.transform = "translateY(-2px) scale(1.02)";
                btn.style.boxShadow = "0 6px 20px rgba(0,0,0,0.4)";
            };
            
            btn.onmouseout = () => {
                btn.style.background = "rgba(20, 20, 20, 0.95)";
                btn.style.borderColor = "rgba(255, 229, 55, 0.15)";
                btn.style.transform = "translateY(0) scale(1)";
                btn.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
            };
            
            return btn;
        });

        let aiBtn = createButton("AI", "Ask AI");
        let editableBtn = createButton("Editable_site", "Edit Site");
        let skipAdBtn = createButton("Skip_Ad_Yt", "Skip Ad");
        let darkModeBtn = createButton("Darkmode", "Dark Mode");
        let mathSolverBtn = createButton("Math_Solver", "Math Solver");
        let notesBtn = createButton("Notes", "Notes");

        // Move close button before footer (to reposition later)
        menu.appendChild(logoImg);
        menu.appendChild(aiBtn);
        menu.appendChild(mathSolverBtn);
        menu.appendChild(notesBtn);
        menu.appendChild(skipAdBtn);
        menu.appendChild(editableBtn);
        menu.appendChild(darkModeBtn);

        // Create aesthetic close button
        let closeBtn = document.createElement("button");
        closeBtn.textContent = "×";
        closeBtn.style.cssText = `
            position: absolute;
            top: 16px;
            right: 16px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 229, 55, 0.2);
            color: rgba(255, 229, 55, 0.9);
            font-size: 24px;
            font-weight: 300;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.25s ease;
            padding: 0;
            line-height: 1;
        `;
        closeBtn.onmouseover = () => {
            closeBtn.style.background = "rgba(255, 229, 55, 0.15)";
            closeBtn.style.borderColor = "rgba(255, 229, 55, 0.4)";
            closeBtn.style.transform = "rotate(90deg) scale(1.1)";
        };
        closeBtn.onmouseout = () => {
            closeBtn.style.background = "rgba(255, 255, 255, 0.1)";
            closeBtn.style.borderColor = "rgba(255, 229, 55, 0.2)";
            closeBtn.style.transform = "rotate(0deg) scale(1)";
        };

        menu.appendChild(closeBtn);

        let footer = document.createElement("div");
        footer.style.fontSize = "13px";
        footer.style.textAlign = "center";
        footer.style.color = "rgba(0, 0, 0, 0.7)";
        footer.style.margin = "16px 0 0 0";
        footer.style.fontWeight = "400";
        footer.style.lineHeight = "1.6";
        footer.textContent = "Made with love by Riddhiman";
        
        let copyright = document.createElement("div");
        copyright.style.fontSize = "12px";
        copyright.style.textAlign = "center";
        copyright.style.color = "rgba(0, 0, 0, 0.6)";
        copyright.style.marginTop = "6px";
        copyright.textContent = "© 2025 Riddhiman";
        
        menu.appendChild(footer);
        menu.appendChild(copyright);
        document.body.appendChild(menu);
        
        closeBtn.onclick = function() {
            menu.remove();
        };

        const GEMINI_API_KEY = "AIzaSyANqhEFzHD42F1b47NqQ0duooBWBz-SKuI"; 
        const GEMINI_MODEL = "gemini-2.5-flash";

        let aiPanel = document.createElement("div");
        aiPanel.id = "ai-input-panel";
        aiPanel.style.cssText = `
            display: none;
            flex-direction: column;
            gap: 12px;
            padding: 16px;
            background: rgba(20, 20, 20, 0.95);
            border: 1px solid rgba(255, 229, 55, 0.15);
            border-radius: 10px;
            margin-top: 8px;
        `;

        let highlightedTextDiv = document.createElement("div");
        highlightedTextDiv.style.cssText = `
            padding: 12px;
            background: rgba(255, 229, 55, 0.08);
            border: 1px solid rgba(255, 229, 55, 0.15);
            border-radius: 6px;
            color: rgba(255, 229, 55, 0.9);
            font-size: 13px;
            max-height: 80px;
            overflow-y: auto;
            word-wrap: break-word;
            font-family: inherit;
        `;

        let contextTextarea = document.createElement("textarea");
        contextTextarea.placeholder = "Add context (optional)";
        contextTextarea.style.cssText = `
            width: 100%;
            min-height: 60px;
            max-height: 120px;
            padding: 12px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 229, 55, 0.15);
            border-radius: 6px;
            color: #ffffff;
            font-family: inherit;
            font-size: 13px;
            resize: vertical;
            box-sizing: border-box;
        `;

        let sendBtn = document.createElement("button");
        sendBtn.textContent = "Ask AI";
        sendBtn.style.cssText = `
            padding: 12px;
            background: rgba(255, 229, 55, 0.1);
            border: 1px solid rgba(255, 229, 55, 0.2);
            color: #FFE537;
            border-radius: 6px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 13px;
            font-family: inherit;
        `;
        sendBtn.onmouseover = () => {
            sendBtn.style.background = "rgba(255, 229, 55, 0.18)";
            sendBtn.style.borderColor = "rgba(255, 229, 55, 0.3)";
        };
        sendBtn.onmouseout = () => {
            sendBtn.style.background = "rgba(255, 229, 55, 0.1)";
            sendBtn.style.borderColor = "rgba(255, 229, 55, 0.2)";
        };

        aiPanel.appendChild(highlightedTextDiv);
        aiPanel.appendChild(contextTextarea);
        aiPanel.appendChild(sendBtn);
        menu.insertBefore(aiPanel, editableBtn);

        aiBtn.onclick = function() {
            if (window.location.hostname.includes("github.com")) {
                return alert("This feature is not supported on GitHub.");
            }
            
            if (GEMINI_API_KEY === "PASTE_YOUR_GEMINI_API_KEY_HERE") {
                return alert("ERROR: Add your Gemini API key.");
            }

            let selectedText = window.getSelection().toString().trim();
            if (!selectedText) {
                return alert("Please select text to ask AI.");
            }

            if (aiPanel.style.display === "none") {
                aiPanel.style.display = "flex";
                highlightedTextDiv.textContent = selectedText;
                contextTextarea.value = "";
                contextTextarea.focus();
            } else {
                aiPanel.style.display = "none";
            }
        };

        // Fix API retry logic with better error handling
        sendBtn.onclick = async function() {
            let selectedText = highlightedTextDiv.textContent;
            let context = contextTextarea.value.trim();
            
            if (selectedText.length > 2000) {
                alert("Text too long! Please select under 2000 characters.");
                return;
            }
            
            let fullPrompt = selectedText + (context ? "\n\nContext: " + context : "");

            aiPanel.style.display = "none";

            let loadingOverlay = document.createElement("div");
            loadingOverlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.85);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
            `;
            
            let spinner = document.createElement("div");
            spinner.style.cssText = `
                width: 40px;
                height: 40px;
                border: 3px solid rgba(255, 229, 55, 0.2);
                border-top: 3px solid #FFE537;
                border-radius: 50%;
                animation: spin 0.8s linear infinite;
            `;
            
            loadingOverlay.appendChild(spinner);
            document.body.appendChild(loadingOverlay);

            // Enhanced retry logic with longer timeouts
            const MAX_RETRIES = 4;
            let attempt = 0;
            
            while (attempt < MAX_RETRIES) {
                try {
                    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;
                    
                    const controller = new AbortController();
                    const timeoutId = setTimeout(() => controller.abort(), 25000); // 25 seconds max
                    
                    let response = await fetch(API_URL, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            contents: [{
                                parts: [{ text: fullPrompt }]
                            }],
                            generationConfig: {
                                temperature: 0.7,
                                maxOutputTokens: 1024
                            }
                        }),
                        signal: controller.signal
                    });

                    clearTimeout(timeoutId);

                    if (response.ok) {
                        loadingOverlay.remove();
                        let data = await response.json();
                        let aiResponse = "No response received.";
                        
                        // Better response parsing
                        if (data.candidates && data.candidates.length > 0) {
                            if (data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts.length > 0) {
                                aiResponse = data.candidates[0].content.parts[0].text;
                            }
                        }
                        
                        // Debug log
                        console.log("API Response:", data);
                        
                        if (aiResponse === "No response received.") {
                            // Check if there's a safety block
                            if (data.candidates && data.candidates[0] && data.candidates[0].finishReason) {
                                aiResponse = `Content blocked: ${data.candidates[0].finishReason}. Try rephrasing your question.`;
                            }
                        }

                        createResultWindow(aiResponse);
                        return;
                    } else if ((response.status === 503 || response.status === 504) && attempt < MAX_RETRIES - 1) {
                        await new Promise(resolve => setTimeout(resolve, 1500 * (attempt + 1))); // Changed from 2000 to 1500
                        attempt++;
                        continue;
                    } else {
                        let errorData = await response.json().catch(() => ({}));
                        throw new Error(`API Error ${response.status}: ${errorData.error?.message || response.statusText}`);
                    }
                } catch (error) {
                    if (error.name === 'AbortError') {
                        if (attempt < MAX_RETRIES - 1) {
                            attempt++;
                            await new Promise(resolve => setTimeout(resolve, 1500 * attempt)); // Changed from 2000 to 1500
                            continue;
                        }
                        loadingOverlay.remove();
                        alert("Request timeout. The API is slow right now. Please try again.");
                        return;
                    }
                    
                    if (attempt === MAX_RETRIES - 1) {
                        loadingOverlay.remove();
                        alert("Network Error: " + error.message + "\n\nThe API might be overloaded. Please try again in a moment.");
                        return;
                    }
                    attempt++;
                    await new Promise(resolve => setTimeout(resolve, 1500 * attempt)); // Changed from 2000 to 1500
                }
            }
        };

        function createResultWindow(content) {
            let resultWindow = document.createElement("div");
            resultWindow.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 560px;
                max-width: 90vw;
                max-height: 75vh;
                background: rgba(20, 20, 20, 0.98);
                border: 1px solid rgba(255, 229, 55, 0.2);
                border-radius: 12px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.5);
                z-index: 10001;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            `;

            let header = document.createElement("div");
            header.style.cssText = `
                padding: 16px 20px;
                background: rgba(30, 30, 30, 0.95);
                border-bottom: 1px solid rgba(255, 229, 55, 0.15);
                color: #FFE537;
                font-weight: 500;
                cursor: move;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 15px;
            `;
            header.textContent = "AI Response";

            let closeX = document.createElement("span");
            closeX.textContent = "×";
            closeX.style.cssText = `
                cursor: pointer;
                font-size: 26px;
                font-weight: 300;
                color: rgba(255, 255, 255, 0.6);
                transition: color 0.2s ease;
            `;
            closeX.onmouseover = () => closeX.style.color = "#ef4444";
            closeX.onmouseout = () => closeX.style.color = "rgba(255, 255, 255, 0.6)";
            closeX.onclick = () => resultWindow.remove();
            header.appendChild(closeX);

            let contentArea = document.createElement("div");
            contentArea.style.cssText = `
                padding: 24px;
                color: rgba(255, 255, 255, 0.9);
                font-size: 14px;
                line-height: 1.7;
                overflow-y: auto;
                flex: 1;
            `;
            
            // Safe content setting for YouTube
            let formattedContent = content.replace(/\n/g, "<br>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
            contentArea.textContent = '';
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = formattedContent;
            while (tempDiv.firstChild) {
                contentArea.appendChild(tempDiv.firstChild);
            }

            resultWindow.appendChild(header);
            resultWindow.appendChild(contentArea);
            document.body.appendChild(resultWindow);

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
        
        editableBtn.onclick = function() {
            document.body.contentEditable = true;
            let links = document.getElementsByTagName("a");
            for (let i = 0; i < links.length; i++) {
                links[i].removeAttribute("href");
            }
        };

        skipAdBtn.onclick = function() {
            let overlays = document.querySelectorAll('.ytp-ad-overlay-close-button, .ytp-ad-skip-button-modern, .ytp-ad-skip-button');
            overlays.forEach(btn => btn.click());
            
            let video = document.querySelector('video');
            if (video) {
                video.currentTime = video.duration;
            }
        };

        darkModeBtn.onclick = function() {
            if (document.body.hasAttribute('data-toolkit-darkmode')) {
                document.body.removeAttribute('data-toolkit-darkmode');
                document.body.style.filter = "";
                
                let elems = document.querySelectorAll("img,video,iframe,svg,canvas,embed,object");
                for (let j = 0; j < elems.length; j++) {
                    if (elems[j].style) {
                        elems[j].style.filter = "";
                    }
                }
            } else {
                document.body.setAttribute('data-toolkit-darkmode', 'true');
                document.body.style.filter = "invert(1) hue-rotate(180deg)";
                
                let elems = document.querySelectorAll("img,video,iframe,svg,canvas,embed,object");
                for (let j = 0; j < elems.length; j++) {
                    if (elems[j].style) {
                        elems[j].style.filter = "invert(1) hue-rotate(180deg)";
                    }
                }
            }
        };

        mathSolverBtn.onclick = function() {
            if (window.location.hostname.includes("github.com")) {
                return alert("This feature is not supported on GitHub.");
            }
            
            if (GEMINI_API_KEY === "PASTE_YOUR_GEMINI_API_KEY_HERE") {
                return alert("ERROR: Add your Gemini API key.");
            }

            let overlay = document.createElement("div");
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.6);
                z-index: 10000;
                cursor: crosshair;
            `;

            let instructionText = document.createElement("div");
            instructionText.textContent = "Click and drag to capture math problem (ESC to cancel)";
            instructionText.style.cssText = `
                position: fixed;
                bottom: 40px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(30, 30, 30, 0.95);
                color: #FFE537;
                padding: 16px 28px;
                border: 1px solid rgba(255, 229, 55, 0.3);
                border-radius: 8px;
                font-size: 14px;
                font-weight: 500;
                text-align: center;
                pointer-events: none;
                z-index: 10001;
                font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
                box-shadow: 0 8px 24px rgba(0,0,0,0.4);
            `;

            let selectionBox = document.createElement("div");
            selectionBox.style.cssText = `
                position: fixed;
                border: 2px solid #FFE537;
                background: rgba(255, 229, 55, 0.08);
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
                instructionText.style.opacity = "0.4";
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
                    return alert("Selection too small.");
                }

                overlay.remove();
                instructionText.remove();
                selectionBox.remove();

                showMathLoading();

                try {
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

            document.onkeydown = (e) => {
                if (e.key === "Escape") {
                    overlay.remove();
                    instructionText.remove();
                    selectionBox.remove();
                    document.onkeydown = null;
                }
            };
        };

        // Enhanced math solver with better error handling
        async function solveMathProblem(base64Image) {
            const MAX_RETRIES = 4;
            let attempt = 0;
            
            while (attempt < MAX_RETRIES) {
                try {
                    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;
                    
                    const controller = new AbortController();
                    const timeoutId = setTimeout(() => controller.abort(), 40000); // 40 seconds max
                    
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
                            }],
                            generationConfig: {
                                temperature: 0.4,
                                maxOutputTokens: 2048
                            }
                        }),
                        signal: controller.signal
                    });

                    clearTimeout(timeoutId);

                    if (response.ok) {
                        hideMathLoading();
                        let data = await response.json();
                        let solution = "No solution found.";
                        
                        // Better response parsing
                        if (data.candidates && data.candidates.length > 0) {
                            if (data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts.length > 0) {
                                solution = data.candidates[0].content.parts[0].text;
                            }
                        }
                        
                        console.log("Math API Response:", data);
                        
                        if (solution === "No solution found.") {
                            if (data.candidates && data.candidates[0] && data.candidates[0].finishReason) {
                                solution = `Content blocked: ${data.candidates[0].finishReason}. Try capturing a clearer image.`;
                            }
                        }

                        createMathResultWindow(solution);
                        return;
                    } else if ((response.status === 503 || response.status === 504) && attempt < MAX_RETRIES - 1) {
                        await new Promise(resolve => setTimeout(resolve, 2000 * (attempt + 1))); // Changed from 3000 to 2000
                        attempt++;
                        continue;
                    } else {
                        let errorData = await response.json().catch(() => ({}));
                        throw new Error(`API Error ${response.status}: ${errorData.error?.message || response.statusText}`);
                    }
                } catch (error) {
                    if (error.name === 'AbortError') {
                        if (attempt < MAX_RETRIES - 1) {
                            attempt++;
                            await new Promise(resolve => setTimeout(resolve, 2000 * attempt)); // Changed from 3000 to 2000
                            continue;
                        }
                        hideMathLoading();
                        alert("Request timeout. The API is slow right now. Please try again.");
                        return;
                    }
                    
                    if (attempt === MAX_RETRIES - 1) {
                        hideMathLoading();
                        alert("Network Error: " + error.message + "\n\nThe API might be overloaded. Please try again in a moment.");
                        return;
                    }
                    attempt++;
                    await new Promise(resolve => setTimeout(resolve, 2000 * attempt)); // Changed from 3000 to 2000
                }
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
                background: rgba(0, 0, 0, 0.85);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                z-index: 10003;
            `;
            
            let spinner = document.createElement("div");
            spinner.style.cssText = `
                width: 40px;
                height: 40px;
                border: 3px solid rgba(255, 229, 55, 0.2);
                border-top: 3px solid #FFE537;
                border-radius: 50%;
                animation: spin 0.8s linear infinite;
            `;

            let loadingText = document.createElement("div");
            loadingText.textContent = "Solving...";
            loadingText.style.cssText = `
                margin-top: 20px;
                color: #FFE537;
                font-size: 15px;
                font-weight: 500;
                font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
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
                background: rgba(20, 20, 20, 0.98);
                border: 1px solid rgba(255, 229, 55, 0.2);
                border-radius: 12px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.5);
                z-index: 10004;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            `;

            let header = document.createElement("div");
            header.style.cssText = `
                padding: 16px 20px;
                background: rgba(30, 30, 30, 0.95);
                border-bottom: 1px solid rgba(255, 229, 55, 0.15);
                color: #FFE537;
                font-weight: 500;
                cursor: move;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 15px;
            `;
            header.textContent = "Math Solution";

            let closeX = document.createElement("span");
            closeX.textContent = "×";
            closeX.style.cssText = `
                cursor: pointer;
                font-size: 26px;
                font-weight: 300;
                color: rgba(255, 255, 255, 0.6);
                transition: color 0.2s ease;
            `;
            closeX.onmouseover = () => closeX.style.color = "#ef4444";
            closeX.onmouseout = () => closeX.style.color = "rgba(255, 255, 255, 0.6)";
            closeX.onclick = () => resultWindow.remove();
            header.appendChild(closeX);

            let contentArea = document.createElement("div");
            contentArea.style.cssText = `
                padding: 24px;
                color: rgba(255, 255, 255, 0.9);
                font-size: 14px;
                line-height: 1.8;
                overflow-y: auto;
                flex: 1;
            `;

            let formattedContent = content
                .replace(/\n/g, "<br>")
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

            // Safe content setting for YouTube
            contentArea.textContent = '';
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = formattedContent;
            while (tempDiv.firstChild) {
                contentArea.appendChild(tempDiv.firstChild);
            }

            resultWindow.appendChild(header);
            resultWindow.appendChild(contentArea);
            document.body.appendChild(resultWindow);

            if (!document.getElementById('mathjax-script')) {
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
                let retries = 0;
                const maxRetries = 10;
                
                function attemptRender() {
                    if (window.MathJax && window.MathJax.typesetPromise) {
                        MathJax.typesetPromise([contentArea]).catch((err) => {
                            console.log('MathJax error:', err);
                        });
                    } else if (retries < maxRetries) {
                        retries++;
                        setTimeout(attemptRender, 200);
                    }
                }
                
                attemptRender();
            }

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

        notesBtn.onclick = function() {
            createNotesWindow();
        };

        function createNotesWindow() {
            if (document.getElementById('notes-window')) {
                return;
            }

            let notesWindow = document.createElement("div");
            notesWindow.id = "notes-window";
            notesWindow.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 700px;
                max-width: 90vw;
                max-height: 85vh;
                background: rgba(20, 20, 20, 0.98);
                border: 1px solid rgba(255, 229, 55, 0.2);
                border-radius: 12px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.5);
                z-index: 10005;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            `;

            let header = document.createElement("div");
            header.style.cssText = `
                padding: 16px 20px;
                background: rgba(30, 30, 30, 0.95);
                border-bottom: 1px solid rgba(255, 229, 55, 0.15);
                color: #FFE537;
                font-weight: 500;
                cursor: move;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 15px;
            `;
            header.textContent = "Notes";

            let closeX = document.createElement("span");
            closeX.textContent = "×";
            closeX.style.cssText = `
                cursor: pointer;
                font-size: 26px;
                font-weight: 300;
                color: rgba(255, 255, 255, 0.6);
                transition: color 0.2s ease;
            `;
            closeX.onmouseover = () => closeX.style.color = "#ef4444";
            closeX.onmouseout = () => closeX.style.color = "rgba(255, 255, 255, 0.6)";
            closeX.onclick = () => notesWindow.remove();
            header.appendChild(closeX);

            let contentContainer = document.createElement("div");
            contentContainer.style.cssText = `
                display: flex;
                flex: 1;
                overflow: hidden;
            `;

            let notesList = document.createElement("div");
            notesList.id = "notes-list";
            notesList.style.cssText = `
                width: 240px;
                background: rgba(15, 15, 15, 0.6);
                border-right: 1px solid rgba(255, 229, 55, 0.1);
                overflow-y: auto;
                padding: 16px;
            `;

            let newNoteBtn = document.createElement("button");
            newNoteBtn.textContent = "+ New Note";
            newNoteBtn.style.cssText = `
                width: 100%;
                padding: 10px;
                background: rgba(255, 229, 55, 0.1);
                border: 1px solid rgba(255, 229, 55, 0.2);
                color: #FFE537;
                border-radius: 6px;
                font-weight: 500;
                cursor: pointer;
                margin-bottom: 16px;
                font-size: 13px;
                transition: all 0.2s ease;
                font-family: inherit;
            `;
            newNoteBtn.onmouseover = () => {
                newNoteBtn.style.background = "rgba(255, 229, 55, 0.15)";
                newNoteBtn.style.borderColor = "rgba(255, 229, 55, 0.3)";
            };
            newNoteBtn.onmouseout = () => {
                newNoteBtn.style.background = "rgba(255, 229, 55, 0.1)";
                newNoteBtn.style.borderColor = "rgba(255, 229, 55, 0.2)";
            };
            newNoteBtn.onclick = () => createNewNote();

            let notesListContainer = document.createElement("div");
            notesListContainer.id = "notes-items";

            notesList.appendChild(newNoteBtn);
            notesList.appendChild(notesListContainer);

            let noteEditor = document.createElement("div");
            noteEditor.id = "note-editor";
            noteEditor.style.cssText = `
                flex: 1;
                padding: 24px;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 14px;
            `;

            let editorPlaceholder = document.createElement("div");
            editorPlaceholder.textContent = "Select a note or create a new one";
            editorPlaceholder.style.cssText = `
                color: rgba(255, 255, 255, 0.3);
                text-align: center;
                margin-top: 50px;
                font-size: 14px;
            `;
            noteEditor.appendChild(editorPlaceholder);

            contentContainer.appendChild(notesList);
            contentContainer.appendChild(noteEditor);

            notesWindow.appendChild(header);
            notesWindow.appendChild(contentContainer);
            document.body.appendChild(notesWindow);

            loadNotesList();

            let isDragging = false, offsetX, offsetY;
            header.onmousedown = (e) => {
                isDragging = true;
                offsetX = e.clientX - notesWindow.offsetLeft;
                offsetY = e.clientY - notesWindow.offsetTop;
                notesWindow.style.transform = "none";
            };
            document.onmousemove = (e) => {
                if (isDragging) {
                    notesWindow.style.left = (e.clientX - offsetX) + "px";
                    notesWindow.style.top = (e.clientY - offsetY) + "px";
                }
            };
            document.onmouseup = () => isDragging = false;
        }

        function createNewNote() {
            let noteId = "note_" + Date.now();
            let newNote = {
                id: noteId,
                heading: "Untitled Note",
                subheading: "",
                content: "",
                created: new Date().toISOString()
            };

            saveNote(newNote);
            loadNotesList();
            openNoteEditor(noteId);
        }

        function loadNotesList() {
            let notesContainer = document.getElementById("notes-items");
            if (!notesContainer) return;

            notesContainer.innerHTML = "";
            let notes = getAllNotes();

            if (notes.length === 0) {
                let emptyMsg = document.createElement("div");
                emptyMsg.textContent = "No notes yet";
                emptyMsg.style.cssText = `
                    color: rgba(255, 255, 255, 0.25);
                    text-align: center;
                    margin-top: 20px;
                    font-size: 12px;
                `;
                notesContainer.appendChild(emptyMsg);
                return;
            }

            notes.forEach(note => {
                let noteItem = document.createElement("div");
                noteItem.style.cssText = `
                    padding: 12px;
                    background: rgba(255, 255, 255, 0.04);
                    border-radius: 6px;
                    margin-bottom: 8px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    border: 1px solid transparent;
                `;
                noteItem.onmouseover = () => {
                    noteItem.style.background = "rgba(255, 229, 55, 0.08)";
                    noteItem.style.borderColor = "rgba(255, 229, 55, 0.2)";
                };
                noteItem.onmouseout = () => {
                    noteItem.style.background = "rgba(255, 255, 255, 0.04)";
                    noteItem.style.borderColor = "transparent";
                };
                noteItem.onclick = () => openNoteEditor(note.id);

                let noteTitle = document.createElement("div");
                noteTitle.textContent = note.heading || "Untitled";
                noteTitle.style.cssText = `
                    color: rgba(255, 229, 55, 0.9);
                    font-weight: 500;
                    font-size: 13px;
                    margin-bottom: 4px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                `;

                let noteDate = document.createElement("div");
                noteDate.textContent = new Date(note.created).toLocaleDateString();
                noteDate.style.cssText = `
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 11px;
                `;

                noteItem.appendChild(noteTitle);
                noteItem.appendChild(noteDate);
                notesContainer.appendChild(noteItem);
            });
        }

        function openNoteEditor(noteId) {
            let noteEditor = document.getElementById("note-editor");
            if (!noteEditor) return;

            let note = getNote(noteId);
            if (!note) return;

            noteEditor.innerHTML = "";

            let headingInput = document.createElement("input");
            headingInput.type = "text";
            headingInput.placeholder = "Note Title";
            headingInput.value = note.heading;
            headingInput.style.cssText = `
                width: 100%;
                padding: 12px;
                background: rgba(255, 255, 255, 0.04);
                border: 1px solid rgba(255, 229, 55, 0.15);
                border-radius: 6px;
                color: #FFE537;
                font-size: 18px;
                font-weight: 500;
                box-sizing: border-box;
                font-family: inherit;
            `;

            let subheadingInput = document.createElement("input");
            subheadingInput.type = "text";
            subheadingInput.placeholder = "Subtitle (optional)";
            subheadingInput.value = note.subheading;
            subheadingInput.style.cssText = `
                width: 100%;
                padding: 10px;
                background: rgba(255, 255, 255, 0.04);
                border: 1px solid rgba(255, 229, 55, 0.1);
                border-radius: 6px;
                color: rgba(255, 255, 255, 0.7);
                font-size: 14px;
                font-weight: 400;
                box-sizing: border-box;
                font-family: inherit;
            `;

            let contentTextarea = document.createElement("textarea");
            contentTextarea.placeholder = "Start writing...";
            contentTextarea.value = note.content;
            contentTextarea.style.cssText = `
                width: 100%;
                flex: 1;
                padding: 14px;
                background: rgba(255, 255, 255, 0.04);
                border: 1px solid rgba(255, 229, 55, 0.1);
                border-radius: 6px;
                color: rgba(255, 255, 255, 0.85);
                font-size: 13px;
                line-height: 1.7;
                resize: none;
                box-sizing: border-box;
                font-family: inherit;
            `;

            let actionsDiv = document.createElement("div");
            actionsDiv.style.cssText = `
                display: flex;
                gap: 10px;
                margin-top: 10px;
            `;

            let saveBtn = document.createElement("button");
            saveBtn.textContent = "Save";
            saveBtn.style.cssText = `
                flex: 1;
                padding: 10px;
                background: rgba(34, 197, 94, 0.15);
                border: 1px solid rgba(34, 197, 94, 0.3);
                color: #22c55e;
                border-radius: 6px;
                font-weight: 500;
                cursor: pointer;
                font-size: 13px;
                transition: all 0.2s ease;
                font-family: inherit;
            `;
            saveBtn.onmouseover = () => {
                saveBtn.style.background = "rgba(34, 197, 94, 0.25)";
                saveBtn.style.borderColor = "rgba(34, 197, 94, 0.4)";
            };
            saveBtn.onmouseout = () => {
                saveBtn.style.background = "rgba(34, 197, 94, 0.15)";
                saveBtn.style.borderColor = "rgba(34, 197, 94, 0.3)";
            };
            saveBtn.onclick = () => {
                note.heading = headingInput.value || "Untitled Note";
                note.subheading = subheadingInput.value;
                note.content = contentTextarea.value;
                saveNote(note);
                loadNotesList();
                alert("Note saved");
            };

            let downloadBtn = document.createElement("button");
            downloadBtn.textContent = "Download";
            downloadBtn.style.cssText = `
                flex: 1;
                padding: 10px;
                background: rgba(59, 130, 246, 0.15);
                border: 1px solid rgba(59, 130, 246, 0.3);
                color: #3b82f6;
                border-radius: 6px;
                font-weight: 500;
                cursor: pointer;
                font-size: 13px;
                transition: all 0.2s ease;
                font-family: inherit;
            `;
            downloadBtn.onmouseover = () => {
                downloadBtn.style.background = "rgba(59, 130, 246, 0.25)";
                downloadBtn.style.borderColor = "rgba(59, 130, 246, 0.4)";
            };
            downloadBtn.onmouseout = () => {
                downloadBtn.style.background = "rgba(59, 130, 246, 0.15)";
                downloadBtn.style.borderColor = "rgba(59, 130, 246, 0.3)";
            };
            downloadBtn.onclick = () => downloadNote(note);

            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.style.cssText = `
                flex: 1;
                padding: 10px;
                background: rgba(239, 68, 68, 0.15);
                border: 1px solid rgba(239, 68, 68, 0.3);
                color: #ef4444;
                border-radius: 6px;
                font-weight: 500;
                cursor: pointer;
                font-size: 13px;
                transition: all 0.2s ease;
                font-family: inherit;
            `;
            deleteBtn.onmouseover = () => {
                deleteBtn.style.background = "rgba(239, 68, 68, 0.25)";
                deleteBtn.style.borderColor = "rgba(239, 68, 68, 0.4)";
            };
            deleteBtn.onmouseout = () => {
                deleteBtn.style.background = "rgba(239, 68, 68, 0.15)";
                deleteBtn.style.borderColor = "rgba(239, 68, 68, 0.3)";
            };
            deleteBtn.onclick = () => {
                if (confirm("Delete this note?")) {
                    deleteNote(noteId);
                    loadNotesList();
                    noteEditor.innerHTML = "<div style='color: rgba(255, 255, 255, 0.3); text-align: center; margin-top: 50px;'>Note deleted</div>";
                }
            };

            actionsDiv.appendChild(saveBtn);
            actionsDiv.appendChild(downloadBtn);
            actionsDiv.appendChild(deleteBtn);

            noteEditor.appendChild(headingInput);
            noteEditor.appendChild(subheadingInput);
            noteEditor.appendChild(contentTextarea);
            noteEditor.appendChild(actionsDiv);
        }

        function saveNote(note) {
            let notes = getAllNotes();
            let existingIndex = notes.findIndex(n => n.id === note.id);
            
            if (existingIndex >= 0) {
                notes[existingIndex] = note;
            } else {
                notes.push(note);
            }
            
            localStorage.setItem("toolkit_notes", JSON.stringify(notes));
        }

        function getNote(noteId) {
            let notes = getAllNotes();
            return notes.find(n => n.id === noteId);
        }

        function getAllNotes() {
            let stored = localStorage.getItem("toolkit_notes");
            return stored ? JSON.parse(stored) : [];
        }

        function deleteNote(noteId) {
            let notes = getAllNotes();
            notes = notes.filter(n => n.id !== noteId);
            localStorage.setItem("toolkit_notes", JSON.stringify(notes));
        }

        function downloadNote(note) {
            let content = `${note.heading}\n`;
            if (note.subheading) {
                content += `${note.subheading}\n`;
            }
            content += `\n${note.content}`;

            let blob = new Blob([content], { type: "text/plain" });
            let url = URL.createObjectURL(blob);
            let a = document.createElement("a");
            a.href = url;
            a.download = (note.heading || "note") + ".txt";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

    } catch (e) {
        alert("Error: " + e.message);
    }
})();