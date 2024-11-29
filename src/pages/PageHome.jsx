import { HeaderBar } from '@/components/HeaderBar';
import { MarkdownArea } from '@/components/MarkdownArea';
import { cn } from '@/libs/react';
import IndexString from './Home.md?raw';

export function PageHome() {
  return (
    <div className="h-screen w-screen overflow-y-auto">
      <div className="mx-auto max-w-[70rem] px-4 py-10">
        <HeaderBar className="sticky top-0 bg-red-300">
          <h2>HOME</h2>
        </HeaderBar>
        <div className="text-left max-w-60 py-20 mx-auto">
          <p className="text-6xl">
            Hiya :)
          </p>
          <p className={cn("text-6xl")}>
            You found this
          </p>
          <p className={cn("text-6xl")}>
            Andrew
          </p>
          <p className="text-2xl">
            You know what to do.
          </p>
        </div>
        <PageDivider>
          <h2>Projects</h2>
        </PageDivider>
        <main>
          <MarkdownArea textContent={IndexString}/>
        </main>
        <PageDivider>
          <h2>Curios</h2>
        </PageDivider>
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
      <hr className="border-dashed dark:opacity-20 pb-2"/>
      {children}
    </div>
  )
}