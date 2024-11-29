import { HeaderBar } from '@/components/HeaderBar';
import { MarkdownArea } from '@/components/MarkdownArea';
import { cn } from '@/libs/react';
import IndexString from './Home.md?raw';

export function PageHome() {
  return (
    <div className="h-screen w-screen overflow-y-auto">
      <div className="mx-auto max-w-[70rem] px-4 py-10">
        <HeaderBar className="sticky top-0 py-4">
          <h2>HOME</h2>
        </HeaderBar>
        <div className="mx-auto max-w-60 py-20 text-left">
          <p className="text-6xl">Hiya :)</p>
          <p className={cn('text-6xl')}>You found this</p>
          <p className={cn('text-6xl')}>Andrew</p>
          <p className="text-2xl">You know what to do.</p>
        </div>
        <PageDivider>
          <h2 className="text-4xl">Projects</h2>
        </PageDivider>
        <main>
          <MarkdownArea textContent={IndexString} />
        </main>
        <PageDivider>
          <h2 className="text-4xl">Curios</h2>
        </PageDivider>
        <div>Under construction...</div>
      </div>
    </div>
  );
}

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 */
function PageDivider({ children }) {
  return (
    <div className="my-4">
      <hr className="border-dashed pb-2 dark:opacity-20" />
      {children}
    </div>
  );
}
