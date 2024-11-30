import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"

export default async function isAuthenticated() {
  const auth = await currentUser()

  if(!auth) {
    return false
  }
  const user = await db.user.findUnique({
    where: {
      externalId: auth.id,
    },
  })
  
  if(!user) {
    return false
  }
  
  return { 
    user,
  }
  
}