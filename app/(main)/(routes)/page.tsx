// (main) -> organizational folder
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (

     <div className="h-screen">
       <UserButton afterSignOutUrl="/"/>
       <p>Welcome to the protected area!</p>
     </div>
   )
 }

