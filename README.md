# Vehicle Filter and Result Application

## Overview

This is a Next.js application that allows users to filter vehicles by make and model year, displaying the available models for the selected vehicle make. The application fetches vehicle data from external APIs and dynamically renders a result page. The UI is built with Tailwind CSS for a responsive and modern design.

## Features

- **Filter Page**: 
  - Dropdowns for selecting a vehicle make and model year.
  - Button to navigate to the results page.
  
- **Result Page**:
  - Displays a list of vehicle models based on the selected make and model year.
  - Uses dynamic routing for better performance.
  
- **Static Generation with Data Fetching**: 
  - Uses `getStaticProps` and `generateStaticParams` for static generation.
  
- **Error Handling**:
  - Handles errors during data fetching and displays appropriate error messages.

- **Responsive Design**: 
  - Fully styled with Tailwind CSS for a modern and responsive UI.


## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone <https://github.com/Tetiana-V-Kovalenko/the-Car-Dealer-App/>

2. Navigate to the project directory:
```bash
cd car-dealer-app

3.Install the dependencies:
```bash
npm install
# or
yarn install
4.To run the application in development mode:
```bash
npm next dev
# or
yarn next dev
