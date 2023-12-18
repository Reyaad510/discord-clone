// (main) -> organizational folder
import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (

     <div className="h-screen">
       <UserButton afterSignOutUrl="/"/>
       <ModeToggle />
       <p>Welcome to the protected area!</p>

     </div>
   )
 }

