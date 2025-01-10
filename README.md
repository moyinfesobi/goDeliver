# Godeliver

This repository contains the source code for a modern and responsive landing page built using React and TailwindCSS. The project is designed to be easily customizable and serves as a great starting point for marketing websites, product showcases, or any similar web application.

## Features

- **Responsive Design**: Responsive across laptops and phones.
- **Reusable Components**: Modular components like buttons, headers, and sections.
- **Smooth Scrolling**: Navigation with smooth scrolling between sections using `react-scroll`.: 
- **Animations**: Entry animations for sections using framer-motion.
- **Customizable Styling**: Styled with TailwindCSS for rapid UI development.
- **Dynamic Content**: Components such as FAQs and services can be easily updated or extended.
- **Interactive Elements**: Buttons with loading states and hover effects.

## Components Overview

### 1. `App`
- Acts as the root component of the application.
- Combines and organizes all sections of the landing page.

### 2. `MyHeader`
- Header section containing the logo and navigation links.
- Includes a sign-in button with a loading state.
- Navigation links leverage `react-scroll` for smooth scrolling to sections like FAQ and Contact Us.

### 3. `HeroSection`
- The main introductory section to grab user attention.

### 4. `Services`
- Highlights the core services provided.

### 5. `Perks`
- Showcases the benefits and perks of the product or service.

### 6. `TrustedBrands`
- Displays logos or mentions of trusted brands that endorse the product.

### 7. `Faq`
- Frequently Asked Questions section.
- Uses `react-scroll` for smooth navigation.

### 8. `Partnership`
- A section for users to request partnerships.
- Includes a popup modal for form submissions.

### 9. `Footer`
- Contains contact details, links, and other footer information.

### 10. Reusable Components
#### a. `Button`
- A customizable button component with support for:
  - Loading state
  - Icons
  - Custom width and height
- Styled with TailwindCSS and supports hover effects.

#### b. `CircleImage`
- Displays images in a circular frame.

## Installation

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## File Structure
```
├── src
│   ├── assets                # Static assets like images and logos
│   ├── components            # Reusable components
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Services.jsx
│   │   ├── Perks.jsx
│   │   ├── TrustedBrands.jsx
│   │   ├── Faq.jsx
│   │   ├── Partnership.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   └── CircleImage.jsx
│   ├── App.jsx               # Root component
│   └── index.css             # TailwindCSS configuration
├── public
│   └── index.html            # HTML template
├── package.json              # Project metadata and dependencies
└── README.md                 # Project documentation
```

## Technologies Used

- **React**: Component-based UI library.
- **TailwindCSS**: Utility-first CSS framework.
- **React Scroll**: Smooth scrolling between sections.
- **PropTypes**: Runtime type checking for React props.

## Customization

### TailwindCSS Styling
All components are styled using TailwindCSS. You can easily update colors, spacing, and other utilities in `tailwind.config.js`.

### Adding/Removing Components
- To add a new section, create a new component in the `components` folder.
- Import and include it in the `App.jsx` file.

### Updating Content
Content such as texts and images can be directly updated within the respective components.

## Deployment
To deploy the application:
1. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```
2. Deploy the contents of the `build` folder to your preferred hosting provider (e.g., Netlify, Vercel, or GitHub Pages).

## License
This project is licensed under the MIT License. You are free to use, modify, and distribute it as per the terms of the license.

## Acknowledgments
- [PrimeIcons](https://primefaces.org/primeicons/) for icons used in the project.
- [React Scroll](https://www.npmjs.com/package/react-scroll) for smooth scrolling navigation.
- [TailwindCSS](https://tailwindcss.com/) for styling.



