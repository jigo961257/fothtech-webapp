import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet";
import { modelStore } from '@/store/modelStore';

export const MobileMenuComponent = () => {
    const { isModelMenuOpen, setIsModalMenuOpen } = modelStore();
    return (
        <Sheet open={isModelMenuOpen} onOpenChange={setIsModalMenuOpen}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <span className="text-center text-3xl font-semibold">Forth<span className="text-primary">Tech</span></span>
                    </SheetTitle>
                    <SheetDescription className="flex flex-col pt-4">
                        <Button variant={"ghost"} className="hover:text-primary text-[16px] font-medium active:text-primary text-black" >
                            About Us
                        </Button>
                        <Button variant={"ghost"} className="hover:text-primary text-[16px] font-medium" >
                            Cotact Us
                        </Button>
                        <Button variant={"ghost"} className="hover:text-primary text-[16px] font-medium" >
                            Service
                        </Button>
                        <Button variant={"ghost"} className="hover:text-primary text-[16px] font-medium" >
                            Career
                        </Button>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
