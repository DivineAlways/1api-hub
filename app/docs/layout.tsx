import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { cookies } from 'next/headers';
import { auth } from '../(auth)/auth';

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, cookieStore] = await Promise.all([auth(), cookies()]);
  const isCollapsed = cookieStore.get('sidebar:state')?.value !== 'true';

  return (
    <SidebarProvider defaultOpen={!isCollapsed}>
      <AppSidebar user={session?.user} />
      <SidebarInset>
        <div className="flex flex-col h-full">
          <div className="flex-grow overflow-auto">{children}</div>
          <div className="border-t p-2 text-sm text-muted-foreground">
            Documentation
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
