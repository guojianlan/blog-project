import Link from 'next/link';
import { LinkProps } from 'next/dist/client/link';
import * as React from 'react';
import { cn } from 'web/src/lib/utils';

type OverlayLinkProps = LinkProps & {
  className?: string;
  children: React.ReactNode;
};
export const OverlayLink: React.FC<OverlayLinkProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <Link {...rest} className={cn('plumjs-linkbox__overlay', className)}>
      {children}
    </Link>
  );
};

export const LinkBox: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div {...rest} className={cn('plumjs-linkbox', className)}>
      {children}
    </div>
  );
};
