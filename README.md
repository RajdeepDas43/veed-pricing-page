Here's a comprehensive `README.md` file to guide users on how to set up the project on their local machine. This README file includes instructions for cloning the repository, installing dependencies, running the development server, and deploying the project.

```markdown
# Veed Pricing Page

This project is a clone of the Veed.io Pricing Page using Next.js and Mantine UI framework. The functionality replicates the pricing page up to the "Trusted by teams at" slider. This project uses parallax effects for background images.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Development Server](#running-the-development-server)
- [Building for Production](#building-for-production)
- [Deploying](#deploying)
- [Project Structure](#project-structure)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (>=14.0.0)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/RajdeepDas43/veed-pricing-page.git
   cd veed-pricing-page
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

### Running the Development Server

To start the development server, run:

```sh
npm run dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

### Building for Production

To create an optimized production build, run:

```sh
npm run build
```

This will generate a `.next` directory containing the production build files.

### Deploying

To deploy the project using Vercel, follow these steps:

1. **Install Vercel CLI:**

   ```sh
   npm install -g vercel
   ```

2. **Deploy the project:**

   ```sh
   vercel
   ```

   Follow the prompts to link your project to a Vercel account and deploy it.

3. **Deploy to Production:**

   ```sh
   vercel --prod
   ```

### Project Structure

```plaintext
veed-pricing-page/
├── components/
│   ├── Background.js
│   ├── Header.js
│   ├── Pricing.js
│   └── TrustedBy.js
├── pages/
│   ├── _app.js
│   └── index.js
├── public/
│   └── backgrounds/
│       └── marble-texture.png
├── styles/
│   └── globals.css
├── .gitignore
├── package.json
├── README.md
├── vercel.json
└── next.config.js (if needed)
```

### Components

- **Background.js:** Manages the parallax background effect.
- **Header.js:** Contains the header and navigation components.
- **Pricing.js:** Displays the pricing plans.
- **TrustedBy.js:** Shows the "Trusted by teams at" slider.

### Pages

- **_app.js:** Custom App component to initialize pages.
- **index.js:** Main page that renders the pricing page layout.

### Public

Contains static assets such as images.

### Styles

- **globals.css:** Global CSS styles.

## Contributing

Please feel free to submit issues, fork the repository, and send pull requests!
