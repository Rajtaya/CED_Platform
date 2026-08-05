import { createContext, useContext, useEffect, useState } from 'react'

/*
 * Theme system ported from UEMS. Two independent axes:
 *   • theme  : 'blue' (default) | 'warm'   → .theme-blue / .theme-warm on <html>
 *   • isDark : boolean                       → .dark on <html>
 * The initial class is applied before paint by /public/theme-init.js; this
 * provider just reads that state back and drives changes at runtime.
 * Persistence: localStorage 'ui-theme' + 'dark-mode'.
 */

const ThemeContext = createContext({
  theme: 'blue',
  setTheme: () => {},
  isDark: false,
  toggleDark: () => {},
})

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState('blue')
  const [isDark, setIsDark] = useState(false)

  // Sync runtime state with whatever theme-init.js already put on <html>.
  useEffect(() => {
    const root = document.documentElement
    setThemeState(root.classList.contains('theme-warm') ? 'warm' : 'blue')
    setIsDark(root.classList.contains('dark'))
  }, [])

  const setTheme = (t) => {
    const next = t === 'warm' ? 'warm' : 'blue'
    setThemeState(next)
    try { localStorage.setItem('ui-theme', next) } catch {}
    const root = document.documentElement
    root.classList.remove('theme-blue', 'theme-warm')
    root.classList.add(`theme-${next}`)
  }

  const toggleDark = () => {
    setIsDark((prev) => {
      const next = !prev
      try { localStorage.setItem('dark-mode', String(next)) } catch {}
      document.documentElement.classList.toggle('dark', next)
      return next
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
