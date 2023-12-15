import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
// cn function helps allow create dynamic classes in tailwind
// conflicting classes can occur and cn util solves that
// Ex <Button className={cn("bg-indigo-50", state && "bg-red-500")}>Click Me!</Button>
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
