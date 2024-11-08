import { DashBoardPage } from "@/components/dashboard-page";
import { db } from "@/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const auth = await currentUser()
  if(!auth) {
    redirect("/sign-in")
  }

  const user =  await db.user.findUnique({
    where: {
      externalId: auth.id
    }
  })
  if(!user) {
    redirect("/sign-in")
  }

    return (
        <DashBoardPage title="Dashboard">
          dashboard
        </DashBoardPage>
    );
}