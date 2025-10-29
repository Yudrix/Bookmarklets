(function(){
    try {
        let e = document.createElement("div");
        e.id = "bookmarkletmenu", e.style.position = "fixed", e.style.top = "20px", e.style.right = "20px", e.style.display = "flex", e.style.fontFamily = "sans-serif", e.style.padding = "20px", e.style.backgroundColor = "rgba(255,255,255,0.2)", e.style.border = "1px solid rgba(255,255,255,0.3)", e.style.backdropFilter = "blur(10px)", e.style.borderRadius = "20px", e.style.zIndex = "9999", e.style.flexDirection = "column", e.style.gap = "15px", e.style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)", e.style.width = "300px";
        let t = document.createElement("h1");
        t.textContent = "Toolkit", t.style.display = "flex", t.style.fontSize = "24px", t.style.fontWeight = "700", t.style.alignItems = "center", t.style.justifyContent = "center", t.style.color = "#ffffff", t.style.margin = "0";
        let n = ((e, t) => {
                let n = document.createElement("button");
                return n.id = e, n.textContent = t, n.style.cursor = "pointer", n.style.padding = "10px 15px", n.style.border = "none", n.style.boxShadow = "0 0 16px #ffe537", n.style.background = "#292929", n.style.color = "#ffe537", n.style.fontSize = "14px", n.style.fontWeight = "400", n.style.borderRadius = "10px", n.style.transition = "all 0.2s ease", n
            }),
            o = n("AI", "Highlight to ask AI"),
            i = n("Editable_site", "Edit the site!"),
            l = n("Skip_Ad_Yt", "Skip Ad"),
            r = n("Darkmode", "Invert mode"),
            s = n("menuclosebutton", "Close");
        s.style.background = "#ff3b30", s.style.color = "white", s.style.width = "80px", s.style.margin = "0 auto";
        let a = document.createElement("p");
        a.style.fontSize = "12px", a.style.textAlign = "center", a.textContent = "Made with ❤%EF%B8%8F by Yudrix", e.appendChild(t), e.appendChild(o), e.appendChild(i), e.appendChild(l), e.appendChild(r), e.appendChild(s), e.appendChild(a), document.body.appendChild(e), s.onclick = function() {
            e.remove()
        }, o.onclick = async function() {
            if (window.location.hostname.includes("github.com")) return void alert("This feature is not supported by GitHub for Content Security. Please try it on another site.");
            let e = window.getSelection().toString().trim();
            if (!e) return void alert("Please select some text to ask the AI.");
            let t = prompt("Please provide any additional context to your question:", "");
            t && (e += " " + t.trim());
            const n = 500;
            let o = e.split(/\s+/);
            if (o.length > n && (e = o.slice(0, n).join(" "), alert( % 60 Input is too long.Only the first $ {
                        n
                    }
                    words will be used. % 60)), !confirm("You are about to ask the AI:\n\n " + e + "\n\nDo you want to proceed?")) return;
            try {
                let t = await fetch("https://ai.hackclub.com/chat/completions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        messages: [{
                            role: "user",
                            content: e
                        }]
                    })
                });
                if (t.ok) {
                    let e = await t.json();
                    alert("Toolkit AI: " + (e.choices[0].message ? .content || "No response received."))
                } else alert("Error: Unable to connect to AI service. Please try again later.")
            } catch (e) {
                alert("Error: " + e.message)
            }
        }, i.onclick = function() {
            document.body.contentEditable = !0;
            let e = document.getElementsByTagName("a");
            for (let t = 0; t < e.length; t++) e[t].removeAttribute("href")
        }, l.onclick = function() {
            try {
                let e = document.getElementsByClassName("video-ads")[0];
                if (e && "" !== e.innerHTML) {
                    let e = !1,
                        t = document.getElementsByClassName("ytp-ad-overlay-close-button");
                    for (let n = 0; n < t.length; n++) t[n].click(), e = !0;
                    if (!1 === e) {
                        let e = document.getElementsByClassName("html5-main-video")[0];
                        if (e) {
                            e.currentTime = e.duration;
                            let t = document.getElementsByClassName("ytp-ad-skip-button")[0];
                            t && t.click()
                        }
                    }
                }
            } catch (e) {
                console.log("Skip ad error: " + e.message)
            }
        }, r.onclick = function() {
            document.body.style.filter = "invert(1) hue-rotate(180deg)";
            let e = document.querySelectorAll("img,video,a,iframe,svg,canvas,embed,object,source,track,link,style");
            for (let t = 0; t < e.length; t++) e[t].style && (e[t].style.filter = "invert(0) hue-rotate(0deg)")
        }
    } catch (e) {
        alert("Bookmarklet error: " + e.message)
    }
})();