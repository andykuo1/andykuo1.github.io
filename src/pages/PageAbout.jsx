import { HeaderBar } from '@/components/HeaderBar';

export function PageAbout() {
  return (
    <div className="h-screen w-screen overflow-y-auto">
      <div className="mx-auto max-w-[70rem] px-4 py-10">
        <HeaderBar className="sticky top-0 py-4">
          <h2>ABOUT</h2>
        </HeaderBar>
        <div>Under construction still...</div>
      </div>
    </div>
  );
}
