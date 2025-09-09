# 🐰 Cute Bunny Quiz Garden 🐰

A delightful interactive quiz website featuring cute bunny stickers, garden background, and nature-inspired design!

## ✨ Features

- **Interactive Quiz**: 5 fun bunny-themed questions
- **Cute Design**: Garden background with floating bunny stickers
- **Nature Color Palette**: Light white, pink, blue, green, black, red, yellow
- **Background Music**: Toggle-able cute background music
- **Responsive Design**: Works on all devices
- **Bootstrap Styling**: Modern, clean interface
- **Animated Elements**: Floating bunnies and interactive animations

## 🎨 Design Elements

- **Background**: Gradient garden theme (sky blue, light green, light yellow)
- **Bunny Stickers**: Animated GIFs from online sources
- **Color Scheme**: Nature-inspired palette with soft, cute colors
- **Typography**: Clean, readable fonts with emoji accents
- **Animations**: Floating elements and smooth transitions

## 🚀 How to Use

1. **Open the Website**: Double-click `index.html` to open in your browser
2. **Start Quiz**: Click the "Start Quiz!" button
3. **Answer Questions**: Click on your chosen answer
4. **Continue**: Click "Next Question" to proceed
5. **View Results**: See your score and performance
6. **Play Again**: Click "Play Again!" to restart

## 🎵 Music Controls

- **Music Toggle**: Click the music button in the top-right corner
- **Background Music**: Cute, relaxing audio that loops
- **Sound Effects**: Interactive feedback for correct answers

## 📱 Responsive Design

- **Desktop**: Full experience with all animations
- **Tablet**: Optimized layout for medium screens
- **Mobile**: Touch-friendly interface for small screens

## 🎯 Quiz Questions

The quiz includes 5 bunny-themed questions about:
- Bunny food preferences
- Physical characteristics
- Natural behaviors
- Habitat preferences
- Happy bunny actions

## 🔧 Customization

### Changing Bunny Stickers
Replace the GIF URLs in `style.css`:
```css
.running-bunny {
    background-image: url('YOUR_BUNNY_GIF_URL');
}
```

### Adding More Questions
Edit the `questions` array in `script.js`:
```javascript
{
    question: "Your question here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correct: 0  // Index of correct answer (0-3)
}
```

### Changing Background Music
Replace the audio source in `index.html`:
```html
<source src="YOUR_MUSIC_FILE_URL" type="audio/mp3">
```

## 🌟 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📁 File Structure

```
bunny-quiz-website/
├── index.html          # Main HTML file
├── style.css           # CSS styling and animations
├── script.js           # JavaScript quiz functionality
└── README.md           # This file
```

## 🎨 Color Palette Used

- **Light White**: #FFFFFF (text backgrounds)
- **Pink**: #FFB6C1, #FFC0CB, #FF69B4 (buttons, borders)
- **Blue**: #87CEEB (sky background)
- **Green**: #98FB98, #90EE90, #32CD32 (correct answers, grass)
- **Black**: #4A5568 (text)
- **Red**: #DC143C (incorrect answers)
- **Yellow**: #F0E68C, #FFD700 (sun, buttons)

## 🐰 Enjoy Your Bunny Quiz Adventure!

Hop through the questions, enjoy the cute animations, and have fun learning about bunnies in this delightful garden setting! 