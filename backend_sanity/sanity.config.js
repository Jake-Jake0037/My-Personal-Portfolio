import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import schema from "./schemas/schema";

export default defineConfig({
  title: "personal_portfolio_website",
  projectId: "jn8i1jcw",
  dataset: "production",
  plugins: [deskTool()],
  schema: {
    types: schema,
  },
});