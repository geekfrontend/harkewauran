import NavbarComponent from "@/components/layout/navbar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative w-full antialiased">
        <NavbarComponent />
        {children}
      </div>
    </>
  );
}
