import { cookies } from 'next/headers';

import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

import { auth } from '../(auth)/auth';
import Script from 'next/script';

export const experimental_ppr = true;

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, cookieStore] = await Promise.all([auth(), cookies()]);
  const isCollapsed = cookieStore.get('sidebar:state')?.value !== 'true';

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js"
        strategy="beforeInteractive"
      />
      <SidebarProvider defaultOpen={!isCollapsed}>
        <AppSidebar user={session?.user} />
        <SidebarInset>
          <div className="flex flex-col h-full">
            <div className="flex-grow overflow-auto">{children}</div>
            <div className="border-t p-2 text-sm text-muted-foreground">
              Powered by AI and Open Source Innovation
            </div>
            <div className="p-2 text-xs text-muted-foreground">
              <a href="/docs" className="hover:underline">Documentation</a> | Platform Overview
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
