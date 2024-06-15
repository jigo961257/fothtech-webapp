import { LogoComponent } from "@/components/custom/icons/logo";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="h-20 shadow-lg shadow-[#FF24241A]bg-white p-2 px-4 sm:p-2 sm:px-8 lg:p-4 lg:px-12">
        <section className="flex items-center h-full justify-between">
          <LogoComponent />
          {/* full screen */}
          <section className="hidden md:flex justify-between items-center">
              <Button  variant={"ghost"} className="hover:text-primary text-[16px] font-medium active:text-primary text-black" >
                About Us
              </Button>
              <Button  variant={"ghost"} className="hover:text-primary text-[16px] font-medium" >
                Cotact Us
              </Button>
          </section>
          {/* mobile screen */}
          <section className="flex flex-col items-center justify-center h-full sm:hidden">
            <Button variant={'ghost'} size={"icon"}>
              <Menu className="h-8 w-8" />
            </Button>
          </section>
        </section>
      </header>
    </main>
  );
}
