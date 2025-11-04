# Receipt Generator

A modern, responsive web application for generating professional restaurant receipts with customizable items, taxes, and formatting options.

![Receipt Generator Preview](docs/preview.png)

## Features

- 🧾 Generate professional restaurant receipts
- 💰 Dynamic item management with quantity and pricing
- 📊 Flexible tax calculation system
- 💵 Support for both dot and comma decimal separators
- 🖨️ Export receipts as PDF
- 📱 Responsive design for all devices
- 🎨 Clean and modern user interface
- ⚡ Real-time preview
- 🔄 Customizable receipt fields

## Technologies Used

- React 18+
- TypeScript
- Tailwind CSS
- html2canvas
- jsPDF
- Vite

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/lxcool9243/receipt-generator.git
cd receipt-generator
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## Usage

1. **Basic Information**
   - Fill in the restaurant details
   - Set order number and dining type
   - Add host name and billing date/time

2. **Managing Items**
   - Click "Add Item" to add new items
   - Set quantity, item name, and price
   - Remove items using the delete button

3. **Tax Configuration**
   - Add multiple tax rates
   - Customize tax names and percentages
   - Remove unnecessary taxes

4. **Formatting Options**
   - Toggle between dot and comma decimal separators
   - Customize footer text
   - Preview changes in real-time

5. **Generating PDF**
   - Click "DOWNLOAD RECEIPT" to generate PDF
   - PDF maintains exact formatting as preview

## Project Structure

```
receipt-generator/
├── src/
│   ├── components/
│   │   ├── ItemInputs.tsx
│   │   ├── TaxInputs.tsx
│   │   ├── ReceiptForm.tsx
│   │   ├── ReceiptHeader.tsx
│   │   ├── ReceiptTable.tsx
│   │   ├── ReceiptFooter.tsx
│   │   └── ReceiptPreview.tsx
│   ├── types/
│   │   └── receipt.ts
│   ├── utils/
│   │   └── calculations.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with ❤️ using React and TypeScript
- Styling powered by Tailwind CSS
- PDF generation handled by html2canvas and jsPDF

---

Made with ❤️ by [lxcool9243](https://github.com/lxcool9243)
```
