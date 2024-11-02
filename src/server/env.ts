/**
 * Define your environment variables here
 * 
 * Access these in your API (fully type-safe):
 * @see https://hono.dev/docs/helpers/adapter#env
 */

export type Bindings = {
  DATABASE_URL: string
  REDIS_URL: string
  REDIS_TOKEN: string
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: String
  CLERK_SECRET_KEY: string
}
