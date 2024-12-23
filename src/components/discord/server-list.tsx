import { PlusCircle } from "lucide-react";
import { Icons } from "../icons";

export function ServerList() {
  return (
    <div className="hidden sm:flex w-[72px] bg-[#202225] py-3 flex-col items-center">
      <div className="size-12 bg-discord-brand-color rounded-2xl flex items-center justify-center mb-2 hover:rounded-xl transition-all duration-200">
        <Icons.discord className="size-3/5 text-white" />
      </div>

     <div className="w-8 h-[2px] bg-discord-background rounded-full my-2" />

      {[...Array(5)].map((_, i) => {
        const index = i * 10 
        return ( (
          <div
            key={index}
            className="size-12 bg-discord-background rounded-3xl flex items-center justify-center mb-3 hover:rounded-xl transition-all duration-200 hover:bg-discord-brand-color cursor-not-allowed"
          >
            <span className="text-lg font-semibold text-gray-400">
              {String.fromCharCode(65 + i)}
            </span>
          </div>
        ))
      })}

        <div
          className="group mt-auto size-12 bg-discord-background rounded-3xl flex items-center justify-center mb-3 hover:rounded-xl transition-all duration-200 hover:bg-[#3BA55C]  cursor-not-allowed"
        >
        <PlusCircle className="text-[#3BA55C] group-hover:text-white" /> 
        </div>
    </div>
    
  )
}