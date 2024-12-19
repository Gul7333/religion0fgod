import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout 
    sidebar={{
      tabs: {
        transform: (option, node) => ({
          ...option,
          icon: 'Camera',
        }),
      },
    }} 
    tree={source.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
