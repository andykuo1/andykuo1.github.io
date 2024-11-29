import { MoonIcon, SunIcon } from 'lucide-react';

import { toggleDarkMode } from '@/libs/tailwind/DarkMode';

export function DarkModeToggle() {
  function onClick() {
    toggleDarkMode();
  }

  return (
    <button
      className="relative h-10 w-10 rounded-full opacity-40 transition-transform hover:rotate-12 hover:opacity-100"
      onClick={onClick}
    >
      <MoonIcon className="absolute bottom-0 left-0 right-0 top-0 m-auto opacity-0 transition-opacity dark:opacity-100" />
      <SunIcon className="absolute bottom-0 left-0 right-0 top-0 m-auto opacity-100 transition-opacity dark:opacity-0" />
    </button>
  );
}
