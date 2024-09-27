import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: "./config/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://accounts:j8p1dMZJeclT@ep-shiny-salad-a11qhute.ap-southeast-1.aws.neon.tech/ai-kids-story-builder2?sslmode=require'
  },
  verbose: true,
  strict: true,
})