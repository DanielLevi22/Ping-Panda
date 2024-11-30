import { DashboardPage } from "@/components/dashboard-page"
import { db } from "@/db"
import isAuthenticated from "@/lib/validators/isAuthenticated"
import { notFound } from "next/navigation"
import { CategoryPageContent } from "./category-page-content"

interface PageProps {
  params: {
    name: string | string[] | undefined
  }
}
export default async function Page({ params }: PageProps) {
  if(typeof params.name !== 'string') {
    notFound()
  }

  const data = await isAuthenticated()
  if(!data) {
    notFound()
  }

  const { user } = data

  const category = await db.eventCategory.findUnique({
    where: {
      name_userId: {
        name: params.name,
        userId: user.id,
      }
    },
    include: {
      _count: {
        select: {
          events: true
        }
      }
    }
  })

  console.log(category)
  if(!category) {
    return notFound()
  }
  const hasEvents = category._count.events > 0

  return (
    <DashboardPage title={`${category.emoji} ${category.name} events`}>
      <CategoryPageContent  category={category} hasEvents={hasEvents}/>
    </DashboardPage>
  )
}
