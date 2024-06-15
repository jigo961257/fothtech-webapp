import { cn } from "@/lib/utils"
import { ClassValue } from "clsx"

export const LogoComponent = ({className} : {className?:ClassValue}) => {
    return (
        <svg width="48" height="52" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
            <path d="M48 10.4404H0L7.5 0H40.5L48 10.4404ZM7.12154 25.4516L25.5831 52L34.22 46.0601L20.2554 25.9778H40.5015L48.0015 15.5374H0L7.12154 25.4516Z" fill="#FF2424" />
        </svg>
    )
}