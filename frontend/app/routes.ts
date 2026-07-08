import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Public Routes
  // index("pages/public/home.tsx"),
  route("/", "pages/landing.tsx"),
  route("/about", "pages/about.tsx"),
  route("/services", "pages/services.tsx"),
  route("/insights", "pages/insights.tsx"),
  route("/contact", "pages/contacts.tsx"),
  route("/record", "pages/record.tsx"),
] satisfies RouteConfig;
