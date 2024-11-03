import { Cog, Headphones, Inbox, Mic, UserCircle } from "lucide-react";
import Image from "next/image";

export function DmList() {
  return (
    <div className="hidden md:flex w-60 bg-[#2F3136] flex-col">
      <div className="px-4 h-16 border-b border-[#202225] flex items-center shadow-sm">
        <div className="w-full bg-[#202225] text-sm rounded px-2 h-8 flex items-center justify-center text-gray-500 cursor-not-allowed">
          Find or Start a conversation
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto pt-4">
        <div className="px-2 mb-4">
          <div className="flex items-center text-sm px-2 py-1.5 rounded hover:bg-[#393c43] text-[#dcdde} cursor-not-allowed">
             <UserCircle className="size-8 mr-4 text-[#b9bbb3]" />
             <span className="font-medium text-sm">Friends</span>
          </div>
          <div className="flex items-center text-sm px-2 py-1.5 rounded hover:bg-[#393c43] text-[#dcdde} cursor-not-allowed">
             <Inbox className="size-8 mr-4 text-[#b9bbb3]" />
             <span className="font-medium text-sm">Nitro</span>
          </div>
        </div>

        <div className="px-2 mb-4">
          <h3 className="text-xs font-semibold text-[#8E92997] px-2 mb-2 uppercase">
            Direct Messages
          </h3>
          <div className="flex items-center px-2 py-1.5 rounded bg-[#393C43] text-white cursor-pointer">
            <Image 
              src="/brand-asset-profile-picture.png" 
              alt="Ping Panda Avatar" 
              width={32}
              height={32}
              className="object-cover rounded-full mr-3"
            /> 
            <span className="font-medium">PingPanda</span>
          </div>
          <div className="my-1 space-y-px ">
            {[...Array(4)].map((_,index) => (
              <div 
                key={index}
                className="flex items-center px-2 py-1.5 rounded text-gray-600 cursor-not-allowed"
              >
                <div className="size-8 rounded-full bg-discord-background mr-3" />
                <span className="font-medium">User {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-2 bg-[#292b2f] flex items-center">
        <div className="size-8 rounded-full bg-brand-700 mr-2" />
        <div className="flex-1">
          <p className="text-sm font-medium text-white">You</p>
          <p className="text-xs text-[#b9bbbe] flex items-center">
            @your_account
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Mic className="size-5 text-[#b9bbbe] hover:text-white cursor-pointer" />
          <Headphones className="size-5 text-[#b9bbbe] hover:text-white cursor-pointer" />
          <Cog className="size-5 text-[#b9bbbe] hover:text-white cursor-pointer" />
        </div>
      </div>
    </div>
  )
}