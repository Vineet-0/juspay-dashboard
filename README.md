# Deployed Links

-   Production: https://juspay-dashboard-eosin.vercel.app
-   Backup 1: https://juspay-dashboard-git-main-vineet0s-projects.vercel.app
-   Backup 2: https://juspay-dashboard-5r8ki7xpp-vineet0s-projects.vercel.app

# Demo Video

A short walkthrough video covering features, motion, and approach has been recorded:

-

# Juspay Dashboard

A modern, responsive, pixel-perfect dashboard built with React, TypeScript, and Vite. This project replicates the given SaaS dashboard design with meaningful motion, microinteractions, and full responsiveness across devices.

## 🚀 Features

-   **Modern Tech Stack**: Built with React 18, TypeScript, and Vite for fast development and optimal performance
-   **Responsive Design**: Fully responsive layout that works seamlessly across desktop & tablet
-   **Interactive Charts**: Beautiful data visualizations using shacdcnUI Charts library
-   **Theme Support**: Light and dark theme toggle with persistent user preferences
-   **State Management**: Efficient state management using Redux Toolkit
-   **Component Library**: Custom UI components built with Tailwind CSS and shadcn UI
-   **Testing**: Comprehensive test coverage with Jest and React Testing Library
-   **Type Safety**: Full TypeScript support for better development experience

## 🛠️ Tech Stack

-   **Frontend**: React 18, TypeScript, Vite
-   **Styling**: Tailwind CSS, CSS Modules
-   **Charts**: shacdcnUI Charts library
-   **State Management**: Redux Toolkit
-   **UI Components**: shacdcn UI primitives
-   **Icons**: React Icons
-   **Testing**: Jest, React Testing Library
-   **Build Tool**: Vite
-   **Linting**: ESLint

## 📦 Installation

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd juspay-dashboard
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Start the development server**

    ```bash
    npm run dev
    ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🎯 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── dashboard/      # Dashboard-specific components
│   ├── navbar/         # Navigation components
│   ├── sidebar/        # Sidebar components
│   ├── rightbar/       # Right sidebar components
│   └── ui/             # Base UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── store/              # Redux store and slices
├── pages/              # Page components
└── assets/             # Static assets
```

## 🏃‍♂️ Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run preview` - Preview production build
-   `npm run test` - Run tests
-   `npm run test:coverage` - Run tests with coverage report
-   `npm run lint` - Run ESLint

## 🎨 Design Approach

### Component Architecture

I structured the application using a modular component architecture where each component has a single responsibility. The components are organized into logical folders based on their functionality:

-   **UI Components**: Reusable base components like buttons, cards, and inputs
-   **Feature Components**: Specific components for dashboard functionality
-   **Layout Components**: Navigation, sidebar, and layout-related components

### State Management

I chose Redux Toolkit for state management because it provides:

-   Predictable state updates
-   Excellent DevTools support
-   Built-in best practices
-   Type-safe actions and reducers

The store is organized into feature-based slices:

-   `themeSlice`: Manages light/dark theme state
-   `layoutSlice`: Controls sidebar and rightbar visibility
-   `sidebarSlice`: Handles navigation state

### Styling Strategy

I implemented a utility-first approach using Tailwind CSS combined with CSS modules for component-specific styles. This approach provides:

-   Rapid development with utility classes
-   Consistent design system
-   Easy theme switching
-   Responsive design out of the box

### Testing Philosophy

I focused on testing user interactions and component behavior rather than implementation details:

-   Component rendering tests
-   User interaction tests
-   State management tests
-   Integration tests for complex workflows

## 🧪 Testing

The project includes comprehensive test coverage with:

-   **Unit Tests**: Individual component testing
-   **Integration Tests**: Component interaction testing
-   **State Tests**: Redux store and slice testing

Current test coverage:

-   **Statements**: 96.95%
-   **Branches**: 91.12%
-   **Functions**: 91.37%
-   **Lines**: 97.02%

Run tests with:

```bash
npm run test:coverage
```

## 🎨 Theme System

The application supports both light and dark themes with:

-   System preference detection
-   Manual theme toggle
-   Persistent theme selection
-   Smooth transitions between themes

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints for:

-   Tablet: 768px - 1024px
-   Desktop: 1024px+

## 🔧 Development Decisions

### Why Vite?

I chose Vite over Create React App because:

-   Faster development server startup
-   Hot Module Replacement (HMR)
-   Better build performance
-   Modern tooling out of the box

### Why Redux Toolkit?

-   Reduces boilerplate code
-   Built-in best practices
-   Excellent TypeScript support
-   DevTools integration

### Why Tailwind CSS?

-   Utility-first approach speeds up development
-   Consistent design system
-   Easy responsive design
-   Small production bundle size

## 🚀 Deployment

1. **Build the project**

    ```bash
    npm run build
    ```

2. **Preview the build**

    ```bash
    npm run preview
    ```

3. **Deploy to your preferred hosting platform**
    - Vercel
    - Netlify
    - GitHub Pages
    - AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

-   [React](https://reactjs.org/) - The web framework used
-   [Tailwind CSS](https://tailwindcss.com/) - For styling
-   [Recharts](https://recharts.org/) - For beautiful charts
-   [Radix UI](https://www.radix-ui.com/) - For accessible UI primitives
-   [Redux Toolkit](https://redux-toolkit.js.org/) - For state management

---

Built with ❤️ by Vineet
