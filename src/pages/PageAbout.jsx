import { HeaderBar } from '@/components/HeaderBar';

export function PageAbout() {
  return (
    <div className="h-screen w-screen overflow-y-auto">
      <div className="mx-auto max-w-[70rem]">
        <HeaderBar className="sticky left-0 right-0 top-0">
          <h2>ABOUT</h2>
        </HeaderBar>
      </div>
    </div>
  );
}
