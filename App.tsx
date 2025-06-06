import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.tsx';
import Bottom from './components/Bottom.tsx';
import Loading from './src/components/Loading.tsx';

import { Provider } from "./components/ui/provider";
//import { AuthProvider } from './src/contexts/AuthContext';

// Lazy load all the page components
const HomePage = React.lazy(() => import('./src/home/page.tsx'));
const DailyPage = React.lazy(() => import('./src/daily/page.tsx'));
const LevelsPage = React.lazy(() => import('./src/levels/page.tsx'));
const ProgressionPage = React.lazy(() => import('./src/progression/page.tsx'));
const SignInPage = React.lazy(() => import('./src/sign-in/page.tsx'));

function App() {
  return (
      <Provider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <Header />

            <main className="container mx-auto px-6 py-16">
              <React.Suspense fallback={<Loading size="lg\" text="Loading page..." />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/daily" element={<DailyPage />} />
                  <Route path="/levels" element={<LevelsPage />} />
                  <Route path="/progression" element={<ProgressionPage />} />
                  <Route path="/sign-in" element={<SignInPage />} />
                </Routes>
              </React.Suspense>
            </main>
            <Bottom />
            
          </div>
        </Router>
      </Provider>
  );
}

export default App;