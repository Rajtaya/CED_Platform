import { useTheme } from '../context/ThemeContext'

/* Two icon buttons for the Navbar: color-theme switch (Palette) + dark-mode
   switch (Moon/Sun). Mirrors the UEMS ThemeToggle / DarkModeToggle pair. */
export default function ThemeControls() {
  const { theme, setTheme, isDark, toggleDark } = useTheme()
  const nextTheme = theme === 'warm' ? 'blue' : 'warm'

  return (
    <div className="theme-controls">
      <button
        type="button"
        className="theme-btn"
        onClick={() => setTheme(nextTheme)}
        title={`Switch to ${nextTheme === 'warm' ? 'Warm Academic' : 'Classic Blue'} theme`}
        aria-label="Toggle color theme"
      >
        {/* Palette icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C21.5 5.868 17.31 2 12 2z" />
        </svg>
      </button>

      <button
        type="button"
        className="theme-btn"
        onClick={toggleDark}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-label="Toggle dark mode"
      >
        {isDark ? (
          /* Sun icon */
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        ) : (
          /* Moon icon */
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>

      <style>{`
        .theme-controls {
          display: flex;
          align-items: center;
          gap: 0.15rem;
        }
        .theme-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.45rem;
          border: none;
          background: none;
          border-radius: var(--radius);
          color: var(--text-muted);
          cursor: pointer;
          transition: all var(--transition);
        }
        .theme-btn:hover {
          background: var(--bg);
          color: var(--primary);
        }
        @media (max-width: 768px) {
          .theme-controls {
            justify-content: center;
            gap: 0.5rem;
            padding: 0.5rem 0;
            margin-top: 0.25rem;
            border-top: 1px solid var(--border-light);
          }
          .theme-btn { padding: 0.6rem; }
        }
      `}</style>
    </div>
  )
}
