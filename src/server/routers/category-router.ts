import { db } from "@/db"
import { router } from "../__internals/router"
import { privateProcedure } from "../procedures"
import { startOfMonth } from "date-fns"

export const categoryRouter = router({
  getEventCategories: privateProcedure.query(async ({ c, ctx }) => {
    const categories = await db.eventCategory.findMany({
      where: {
        userId: ctx.user.id,
      },
      select: {
        id: true,
        name: true,
        emoji: true,
        color: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    const categoriesWithCount = await Promise.all(
      categories.map(async (category) => {
        const now = new Date()
        const firstDayOfMonth = startOfMonth(now)

        const [uniqueFieldCount, eventCounts, lastPing] = await Promise.all([
          db.event
            .findMany({
              where: {
                EventCategory: {
                  id: category.id,
                },
                createdAt: {
                  gte: firstDayOfMonth,
                },
              },
              select: {
                fields: true,
              },
              distinct: ["fields"],
            })
            .then((events) => {
              const fieldNames = new Set<string>()
              for (const event of events) {
                for (const fieldName of Object.keys(event.fields as object)) {
                  fieldNames.add(fieldName)
                }
              }
              return fieldNames.size
            }),
          db.event.count({
            where: {
              EventCategory: {
                id: category.id,
              },
              createdAt: {
                gte: firstDayOfMonth,
              },
            },
          }),
          db.event.findFirst({
            where: {
              EventCategory: {
                id: category.id,
              },
            },
            orderBy: {
              createdAt: "asc",
            },
            select: { createdAt: true },
          }),
        ])
        return {
          ...category,
          uniqueFieldCount,
          eventCounts,
          lastPing: lastPing?.createdAt || null,
        }
      })
    )
    return c.superjson({
      categories: categoriesWithCount,
    })
  }),
})
