# 📖 ToolkitJS Usage Guide

## 🚀 Quick Start

### Installation (30 seconds)

1. **Open your browser's bookmark manager**
   - Chrome: `Ctrl+Shift+O` (Windows) or `Cmd+Shift+O` (Mac)
   - Firefox: `Ctrl+Shift+B` (Windows) or `Cmd+Shift+B` (Mac)
   - Safari: `Cmd+Option+B` (Mac)

2. **Create a new bookmark:**
   - Right-click on bookmarks bar → "Add page..."
   - Or use the bookmark manager's "Add" button

3. **Configure the bookmark:**
   - **Name:** ToolkitJS (or any name you prefer)
   - **URL:** Copy the entire content from `toolkit.js` file
   - **Important:** Add `javascript:` at the very beginning

4. **Save and test:**
   - Navigate to any website
   - Click your ToolkitJS bookmark
   - The toolkit menu should appear!

---

## 🎯 Feature Guide

### 🤖 Highlight to Ask AI

**What it does:** Get AI-powered responses to questions about selected text.

**How to use:**
1. Select any text on the page
2. Click "Highlight to ask AI"
3. Optionally add context in the prompt
4. Confirm your question
5. Response appears in the menu panel with a loading animation

**Best for:**
- Understanding complex concepts
- Getting quick explanations
- Research and learning
- Content analysis

**Tips:**
- Select relevant text before clicking
- Add specific questions for better responses
- Maximum 500 words per query

**Example use case:**
```
Selected text: "Quantum entanglement is..."
Additional context: "Explain this to a 10-year-old"
AI will provide a simple explanation in the menu!
```

---

### 🧮 Calculator

**What it does:** Evaluate mathematical expressions instantly.

**How to use:**
1. Click "Calculator"
2. Enter your expression
3. Result appears in the menu

**Supports:**
- Basic operations: `+`, `-`, `*`, `/`
- Parentheses: `(5 + 3) * 2`
- Exponents: `2 ** 8` = 256
- Math functions: `Math.sqrt(16)`, `Math.PI`, etc.

**Examples:**
```javascript
(100 + 50) / 3           // = 50
Math.sqrt(144)           // = 12
Math.PI * 2             // ≈ 6.28
2 ** 10                 // = 1024
Math.floor(4.7)         // = 4
Math.random() * 100     // Random number 0-100
```

**Tips:**
- Use JavaScript Math functions for advanced calculations
- Remember order of operations (PEMDAS)
- Use parentheses for clarity

---

### 📸 Take Screenshot

**What it does:** Provides guidance for taking screenshots.

**How to use:**
1. Click "Take Screenshot"
2. Follow the browser-specific instructions
3. Menu temporarily hides for clean capture

**Browser shortcuts:**
- **Firefox:** `Ctrl+Shift+S` (Windows/Linux)
- **Chrome:** Use extensions or browser features
- **Safari:** `Cmd+Shift+4` (Mac)
- **Windows:** `Win+Shift+S` (Snipping Tool)
- **Mac:** `Cmd+Shift+4` (built-in)

**Why guidance?**
Bookmarklets have limited access to screen capture APIs for security reasons. The built-in browser tools are actually more powerful!

---

### 🔊 Text to Speech

**What it does:** Converts text to spoken audio.

**How to use:**
1. **Option A:** Select text on the page, then click "Text to Speech"
2. **Option B:** Click button, enter custom text in prompt

**Features:**
- Natural-sounding voice
- Adjustable rate, pitch, volume (in code)
- Works offline (uses browser's built-in TTS)

**Best for:**
- Accessibility
- Language learning
- Multitasking (listen while doing other things)
- Proofreading (hear your writing)

**Tips:**
- Close the alert to stop speaking
- Select shorter passages for better results
- Works in most modern browsers

**Browser support:**
✅ Chrome, Edge, Safari, Firefox
❌ Some older browsers

---

### 🔍 Find & Replace

**What it does:** Search and replace text across the entire page.

**How to use:**
1. Click "Find & Replace"
2. Enter the text to find
3. Enter the replacement text
4. See how many replacements were made

**Use cases:**
- Fix typos across a document
- Change terminology consistently
- Update repeated information
- Test how content looks with different wording

**Example:**
```
Find: "bookmarklet"
Replace: "tool"
Result: All instances updated + count shown
```

**Tips:**
- Case-sensitive by default
- Affects text nodes only (not code or attributes)
- Can't be undone - refresh page to revert

**Warning:** 
This modifies the page in your browser only. It doesn't change the actual website or save changes.

---

### 📱 Generate QR Code

**What it does:** Creates QR codes from any text or URL.

**How to use:**
1. Click "Generate QR Code"
2. Enter text or URL
3. QR code appears in menu panel

**Perfect for:**
- Sharing URLs with mobile devices
- Creating scannable links
- Event invitations
- Contact information
- Wi-Fi passwords

**Examples:**
```
https://github.com/Yudrix/Bookmarklets
→ Creates scannable link to repo

"Hello, World!"
→ Creates scannable text

tel:+1234567890
→ Creates call-able QR code
```

**Tips:**
- Shorter URLs work better
- You can screenshot the QR code
- Test by scanning with your phone
- Works with special URL schemes (tel:, mailto:, etc.)

---

### ✏️ Edit the Site!

**What it does:** Makes the entire webpage editable.

**How to use:**
1. Click "Edit the site!"
2. Click anywhere and start typing
3. Modify any text on the page

**Use cases:**
- Test how content looks with different text
- Create mockups for presentations
- Fix typos for screenshots
- Experiment with copy changes

**Features:**
- Makes entire page editable
- Disables links (so you don't accidentally navigate away)
- Changes persist until page refresh

**Tips:**
- Great for presentations and demos
- Use for "what if" scenarios
- Take screenshots of your edits
- Refresh page to revert changes

**Note:** Changes are local only - doesn't affect the actual website!

---

### ⏭️ Skip Ad

**What it does:** Attempts to skip YouTube ads automatically.

**How to use:**
1. While on YouTube with an ad playing, click "Skip Ad"
2. The tool tries multiple skip methods
3. You'll see a confirmation alert

**Works by:**
- Fast-forwarding video ads to the end
- Clicking skip buttons
- Closing overlay ads
- Hiding ad containers

**Best practices:**
- Only works on YouTube (shows alert elsewhere)
- May need to click multiple times for persistent ads
- YouTube frequently changes their layout - may need updates
- Use ethically - consider supporting creators

**Troubleshooting:**
- If it doesn't work, YouTube may have updated their code
- Try clicking again
- Some ads can't be skipped (due to YouTube's policies)

---

### 🌙 Dark Mode

**What it does:** Applies dark mode to any website.

**How to use:**
1. Click "Dark Mode" to enable
2. Click again to disable (toggle)

**How it works:**
- Inverts page colors using CSS filters
- Preserves images and videos in original colors
- Applies hue rotation for better appearance
- Remembers state (via attribute)

**Features:**
- Works on sites without native dark mode
- Toggle on/off
- Preserves media (images/videos) colors
- Instant application

**Best for:**
- Reading at night
- Reducing eye strain
- Saving battery (OLED screens)
- Viewing bright websites in dark environments

**Tips:**
- Some sites may look weird - this is expected
- Images are double-inverted to look normal
- Refresh page to completely reset
- Works great for reading articles

**Limitations:**
- Not as good as native dark mode
- Some colors may look off
- Complex layouts might have issues

---

## 🎨 Menu Navigation

### Menu Features:
- **Drag to reposition** (optional in future versions)
- **Close button** - Red button at bottom
- **Response panel** - Auto-appears for AI, Calculator, QR Code
- **Smooth animations** - Professional feel

### Menu Tips:
- Click outside menu to interact with page
- Menu stays on top (z-index: 9999)
- Responsive to content
- Glassmorphic design adapts to background

---

## 🔧 Troubleshooting

### Menu doesn't appear:
1. Check if bookmark URL starts with `javascript:`
2. Try on a different website (some block bookmarklets)
3. Check browser console for errors
4. Make sure JavaScript is enabled

### Features not working:
1. **AI not responding:**
   - Check internet connection
   - Try on a different site (not GitHub)
   - Wait a moment - AI can be slow

2. **Text-to-Speech silent:**
   - Check browser volume
   - Try different browser (Safari works best)
   - Select shorter text

3. **Dark mode looks weird:**
   - This is normal for some sites
   - Try toggling off and on
   - Refresh page if needed

4. **Skip Ad not working:**
   - Only works on YouTube
   - YouTube frequently changes layout
   - Try clicking multiple times

### Browser Compatibility:

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| AI Assistant | ✅ | ✅ | ⚠️ CSP | ✅ |
| Calculator | ✅ | ✅ | ✅ | ✅ |
| Text-to-Speech | ✅ | ✅ | ✅ | ✅ |
| Find & Replace | ✅ | ✅ | ✅ | ✅ |
| QR Code | ✅ | ✅ | ✅ | ✅ |
| Dark Mode | ✅ | ✅ | ✅ | ✅ |
| Edit Site | ✅ | ✅ | ✅ | ✅ |
| Skip Ad | ✅ | ✅ | ⚠️ | ✅ |

✅ Full support | ⚠️ Limited support | ❌ Not supported

---

## 💡 Pro Tips

1. **Multiple bookmarks:** Create separate bookmarks for frequently-used features
2. **Keyboard shortcut:** Assign keyboard shortcut in browser settings
3. **Mobile:** Works on mobile browsers too (though UI is optimized for desktop)
4. **Offline:** Most features work offline (except AI and QR code)
5. **Privacy:** All processing happens locally except AI API calls
6. **Customization:** Edit the code to change colors, shortcuts, behavior

---

## 🎯 Best Practices

### Do:
- ✅ Use for personal productivity
- ✅ Test features on the demo page
- ✅ Share with friends and colleagues
- ✅ Customize for your needs
- ✅ Report issues on GitHub

### Don't:
- ❌ Use to violate website terms of service
- ❌ Rely on it for critical data processing
- ❌ Share sensitive data with AI (it's sent to external API)
- ❌ Expect it to work on every website (CSP restrictions)
- ❌ Use automated tools excessively (like ad skipper)

---

## 📞 Support

- **Issues:** Open on GitHub repository
- **Questions:** Check FEATURE_IDEAS.md for suggestions
- **Updates:** Watch the repository for new versions
- **Contributions:** Pull requests welcome!

---

## 🎓 For Presentations

### Demo Script:
1. **Introduction (1 min):**
   - "One bookmark, infinite possibilities"
   - Show menu appearing

2. **AI Feature (2 min):**
   - Select complex text
   - Ask question
   - Show response in menu

3. **Utility Tools (2 min):**
   - Quick calculation
   - Generate QR code
   - Toggle dark mode

4. **Advanced Features (1 min):**
   - Find & replace demo
   - Text-to-speech
   - Site editing

5. **Conclusion (1 min):**
   - Emphasize: No installation, works everywhere
   - Show GitHub repo
   - Take questions

### Talking Points:
- **No installation required** - instant access
- **Privacy-focused** - runs in your browser
- **Cross-platform** - works everywhere
- **AI-powered** - brings intelligence to any site
- **Open-source** - transparent and customizable

---

Made with ❤️ by Yudrix
