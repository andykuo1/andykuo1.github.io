import { Link } from '@swan-io/chicane';

import { cn } from '@/libs/react';
import { Router } from '@/Router';
import { DarkModeToggle } from './DarkModeToggle';

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {import('react').ReactNode} [props.children]
 */
export function HeaderBar({ className, children }) {
  return (
    <header
      className={cn(className, 'flex w-full items-center rounded-full px-4')}
    >
      {children}
      <div className="flex-1" />
      <nav className="flex items-center gap-4">
        <DarkModeToggle />
        <Link
          to={Router.Home()}
          className="underline-offset-4 opacity-60 hover:underline hover:opacity-100"
        >
          Home
        </Link>
        <Link
          to={Router.About()}
          className="underline-offset-4 opacity-60 hover:underline hover:opacity-100"
        >
          About
        </Link>
      </nav>
    </header>
  );
}
