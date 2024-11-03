import type { PropsWithChildren } from "react"
import { Icons } from "../icons"
import {
  Cog,
  Gift,
  Headphones,
  HelpCircle,
  Inbox,
  Menu,
  Mic,
  Phone,
  Pin,
  PlusCircle,
  Search,
  Smile,
  Sticker,
  UserCircle,
  Video,
} from "lucide-react"
import Image from "next/image"
import { ServerList } from "./server-list"
import { DmList } from "./dm-list"
import { DiscordChatLayout } from "./discord-chat-layout"

export function MockDiscordUI ({ children }: PropsWithChildren){
  return (
    <div className="flex min-h-[800px] w-full max-w-[1200px] bg-discord-background text-white rounded-lg overflow-hidden shadow-xl">
     <ServerList />
     <DmList />
     <DiscordChatLayout>
      {children}
     </DiscordChatLayout>

     
    </div>
  )
}
