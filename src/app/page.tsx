
import { HeaderComponent } from "@/components/custom/home/HeaderComponent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeaderComponent />
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
              <p className="text-center mt-2 sm:px-20 md:px-40">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`} </p>
          <section className="absolute bottom-10">
            <Image src={"/Scroll_Icon.gif"} alt={"scroll"}  
            height={60}
            width={60}            
            />
          </section>
          </section>
        </div>
      </section>
    </main>
  );
}
