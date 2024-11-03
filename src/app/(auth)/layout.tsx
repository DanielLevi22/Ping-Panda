import { NavBar } from "@/components/navbar";
import type { ReactNode } from "react";

export default function Layout({children}: { children: ReactNode}) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}