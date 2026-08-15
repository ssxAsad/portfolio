import { motion, AnimatePresence } from 'framer-motion';
import { useSplash } from './hooks/useSplash';
import { SplashScreen } from './components/splash/SplashScreen';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';

/**
 * Root Application Component.
 * Orchestrates splash state, navigation shell, and page sections.
 */
function App() {
  const showSplash = useSplash(2000);

  return (
    <div className="min-h-screen font-sans antialiased selection:bg-primary selection:text-white bg-surface text-textMain">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" />
        ) : (
          <motion.div key="main-app" className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              <Hero />
            </main>

            {/* Target anchor elements for smooth navigation links */}
            <section id="projects" className="sr-only" aria-hidden="true" />
            <section id="achievements" className="sr-only" aria-hidden="true" />
            <section id="contact" className="sr-only" aria-hidden="true" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;