import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import RoutedPage from "./components/RoutedPage";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [pathname, setPathname] = useState(window.location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return undefined;
    const sections = ["services", "about", "process", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-92px 0px -45% 0px", threshold: [0.1, 0.3, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const navigateTo = (path) => {
    window.history.pushState({}, "", path);
    setPathname(path);
    setActiveSection(path === "/" ? "" : path.slice(1));
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="site-shell">
      <Header
        activeSection={activeSection}
        menuOpen={menuOpen}
        onNavigate={navigateTo}
        onToggleMenu={() => setMenuOpen((open) => !open)}
      />
      {pathname === "/" ? (
        <HomePage onNavigate={navigateTo} />
      ) : (
        <RoutedPage pathname={pathname} onNavigate={navigateTo} />
      )}
      <Footer onNavigate={navigateTo} />
      <Analytics />
    </div>
  );
}

export default App;
