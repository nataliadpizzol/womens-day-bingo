# Bingo Number Sorter

A web application for drawing and tracking bingo numbers. Perfect for hosting bingo games with friends, family, or at events.

## Features

- Draw random bingo numbers from a customizable range
- Track drawn numbers with visual indicators
- Auto-draw functionality with adjustable speed
- Display numbers in traditional bingo format (B-I-N-G-O columns)
- Show/hide bingo board view
- View recently drawn numbers
- Reset and initialize new games

## How to Use

1. **Setup**: Customize your number range (default is 1-75 for standard bingo)
2. **Initialize**: Click the "Initialize" button to set up the game with your chosen range
3. **Draw Numbers**: Either:
   - Click "Draw Number" to manually draw one number at a time
   - Use "Start Auto Draw" to automatically draw numbers at your selected speed
4. **Track Progress**:
   - The current drawn number appears in the large circle
   - All drawn numbers are displayed below
   - The last 5 drawn numbers are highlighted
   - If using standard bingo (1-75), numbers are organized by B-I-N-G-O columns

## Number Ranges

- Standard Bingo: 1-75
  - B: 1-15
  - I: 16-30
  - N: 31-45
  - G: 46-60
  - O: 61-75
- You can customize the range for different bingo variations

## Development

This project was built with:
- React
- TypeScript
- Vite

### Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## License

MIT
# womens-day-bingo
