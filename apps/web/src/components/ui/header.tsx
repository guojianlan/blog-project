// web/src/components/ui/header.tsx
'use client';
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'web/src/lib/utils';
import Link from 'next/link';
import { ModeToggle } from 'web/src/components/ui/modeToogle';

const headerVariants = cva('flex w-full', {
  variants: {
    variant: {
      default: 'text-2xl',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
export interface HeaderProps
  extends React.BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headerVariants> {}

const Header: React.FC<HeaderProps> = ({ className, variant, ...props }) => {
  return (
    <div className={cn(headerVariants({ variant, className }))} {...props}>
      <div className="container mx-auto h-14 flex items-center justify-between">
        <div>
          My First <span className="text-primary dark:text-pink-300">BLOG</span>
        </div>
        <div className="flex text-base gap-6 items-center">
          <Link className="hover:text-primary/90" href="/">
            首页
          </Link>
          <Link className="hover:text-primary/90" href="/posts">
            博客
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
export { Header, headerVariants };
