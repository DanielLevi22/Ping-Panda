import { FREE_QUOTA, PRO_QUOTA } from "@/config";
import { db } from "@/db";
import { CATEGORY_NAME_VALIDATOR } from "@/lib/validators/category-validator";
import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";





const REQUEST_VALIDATOR = z.object({
  category: CATEGORY_NAME_VALIDATOR,
  fields: z.record(z.string().or(z.number().or(z.boolean())).optional()),
  description: z.string().optional(),
}).strict()

export default async function POST(req:NextRequest) {
  const authHeader = req.headers.get("Authorization");

  if(!authHeader) {	
    return NextResponse.json({
      message: "Unauthorized",
    },{
      status: 401
    })
  }

  if(!authHeader.startsWith("Bearer ")) {
    return NextResponse.json({
      message: "Invalid auth header format. Expected: Bearer <token>",
    },{status: 401})
  }

  const { category, fields, description } = REQUEST_VALIDATOR.parse(req.body);

  const  apiKey = authHeader.split(" ")[1];

  if(!apiKey || apiKey.trim() === "") {
    return NextResponse.json({
      message: "Invalid token",
    },{status: 401})
   }

   const user = await db.user.findUnique({
    where: {
      apiKey
    },
    include: {
      EventCategories: true
    }
   })


   if(!user) {
    return NextResponse.json({
      message: "Invalid token",
    },{status: 401})
   }


   if(!user.discordId) {
    return NextResponse.json({
      message: "You need to link your discord account to create events",
    }, {
      status: 403
    })
   }

  const currentData = new Date();
  const currentMonth = currentData.getMonth() + 1;
  const currentYear = currentData.getFullYear();

  const quota = await db.quota.findUnique({
    where: {
      userId: user.id,
      month: currentMonth,
      year: currentYear
    }
  })

  const quotaLimit = user.plan === "FREE" ? FREE_QUOTA.maxEventPerMonth : PRO_QUOTA.maxEventPerMonth;
  if(quota && quota.count >= quotaLimit) {
    return NextResponse.json({
      message: "Monthly event limit reached.Please upgrade your plan to create more events",
    }, {
      status: 429
    })
  }


  return {
    status: 200,
    body: {
      category,
      fields,
      description
    }
  }
}