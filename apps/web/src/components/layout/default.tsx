// web/src/components/layout/default.tsx
import React, { CSSProperties, PropsWithChildren } from 'react';
import { clsx } from 'clsx';
import { Header } from 'web/src/components/ui/header';
export interface IDefaultLayoutProps extends PropsWithChildren {
  className?: string;
  headerPosition?: CSSProperties['position'];
}
export const DefaultLayout: React.FC<IDefaultLayoutProps> = ({
  headerPosition = 'relative',
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        'full flex flex-col min-h-screen relative',
        className,
        'default-layout',
      )}
    >
      <div style={{ position: headerPosition }} className="z-10 w-full">
        <Header></Header>
      </div>
      <main className="flex flex-col flex-1 container z-20  min-h-0 min-w-0 basis-auto w-full h-full">
        {children}
      </main>
      <footer className="flex-shrink-0 z-10 ">
        <div className="container flex justify-center items-center py-4 text-base">
          footer
        </div>
      </footer>
    </div>
  );
};
