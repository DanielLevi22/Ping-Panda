import { useQuery } from "@tanstack/react-query";

export function DashboardPageContent() {
  const { } = useQuery({
    queryKey: ["user-event-categories"],
    queryFn: async () => {
      const res = await fetch("/api/user-event-categories")
      const data = await res.json()
      return data
    }
  })
}