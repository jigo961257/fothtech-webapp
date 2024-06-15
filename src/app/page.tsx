import { LogoComponent } from "@/components/custom/icons/logo";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="h-20 drop-shadow-lg shadow-[#3eff24cd] bg-white p-2 px-4 sm:p-2 sm:px-8 lg:p-4 lg:px-12">
        <section className="flex items-center h-full justify-between">
          <Link href={"/"}>
          <LogoComponent />
          </Link>
          {/* full screen */}
          <section className="hidden md:flex justify-between items-center">
              <Button  variant={"ghost"} className="hover:text-primary text-[16px] font-medium active:text-primary text-black" >
                About Us
              </Button>
              <Button  variant={"ghost"} className="hover:text-primary text-[16px] font-medium" >
                Cotact Us
              </Button>
              <Button  variant={"ghost"} className="hover:text-primary text-[16px] font-medium" >
               Service
              </Button>
              <Button  variant={"ghost"} className="hover:text-primary text-[16px] font-medium" >
                Career
              </Button>
          </section>
          {/* mobile screen */}
          <section className="flex flex-col items-center justify-center h-full md:hidden">
            <Button variant={'ghost'} size={"icon"}>
              <Menu className="h-8 w-8" />
            </Button>
          </section>
        </section>
      </header>
      <section className="flex-grow bg-slate-200 justify-center items-center relative">
        <Image src={"https://static.wikia.nocookie.net/bokunoheroacademia/images/4/40/High-End_Robot.png/revision/latest?cb=20221014170622"} 
        alt={"hero-section"} 
        layout="fill"
          className="flex z-10"
          objectFit="cover"
        />
        <div className="z-20 absolute h-full w-full">
          <section className="flex flex-col h-full p-4 bg-transparent mx-auto text-white pt-4 items-center justify-center">
              <span className="text-center text-3xl font-semibold">Forth<span className="text-primary">Tech</span></span>
              <p className="text-center mt-2 sm:px-20 md:px-40">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          </section>
        </div>
      </section>
    </main>
  );
}
