import { BackgroundGradientAnimation } from "@/components/aceternityui/background-gradient-animation";
import { Spotlight } from "@/components/customs/spotlight";
import Header from "@/components/layout/public/header";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="absolute -z-40 flex size-full min-h-screen items-center justify-center overflow-hidden rounded-lg bg-background p-20">
        <Spotlight />
      </div>
      <Header />
      <main id="skipMain" className="max-w-5xl px-4 mx-auto mb-16 sm:px-8">
        {children}
      </main>
    </>
  );
}
