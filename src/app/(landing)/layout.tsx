import type { ReactNode } from "react";
import { NavBar } from "../../components/navbar";

export default function Layout({children}: {children: ReactNode}){
  return (
    <>
    <NavBar />

      {children}

    </>
  )
}