import { useTheme } from '../context/ThemeContext';

const DarkModeToggle = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={[
        'inline-flex h-10 w-10 items-center justify-center rounded-full border shadow-sm transition-colors duration-200',
        'focus:outline-none focus:ring-2 focus:ring-purple-400/50 dark:focus:ring-purple-500/40',
        // Light mode base
        'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300',
        // Dark mode base
        'dark:bg-gray-900 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:border-gray-500',
        className,
      ].join(' ')}
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
      title={isDark ? 'Modo claro' : 'Modo escuro'}
    >
      <span className="sr-only">Alternar tema</span>
      <span className="transition-transform duration-200">
        {isDark ? (
          // Sun icon in dark mode (to indicate switching to light)
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        ) : (
          // Moon icon in light mode
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        )}
      </span>
    </button>
  );
};

export default DarkModeToggle;
