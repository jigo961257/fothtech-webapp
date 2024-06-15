'use client';
import React from 'react'
import { LogoComponent } from '../icons/logo'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { MobileMenuComponent } from './MobileMenuComponent'
import { modelStore } from '@/store/modelStore'

export const HeaderComponent = () => {

  const {setIsModalMenuOpen} = modelStore()

  return (
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
            <Button variant={'ghost'} size={"icon"} onClick={() => setIsModalMenuOpen(true)}>
              <Menu className="h-8 w-8" />
            </Button>
          </section>
        </section>
        <MobileMenuComponent />
      </header>
  )
}
