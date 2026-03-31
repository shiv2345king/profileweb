'use client';

import { ThemeProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';
import type { PropsWithChildren } from 'react';

export function Providers({
  children,
  ...props
}: PropsWithChildren<ThemeProviderProps>) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
