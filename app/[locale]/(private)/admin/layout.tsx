import { AppSidebar } from "@/components/layout/admin/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full h-screen overflow-hidden relative">
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}
