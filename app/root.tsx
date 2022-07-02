import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import tailwindStylesheetUrl from "./styles/tailwind.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  title: "Coming soon",
  "theme-color": "#111827",
});

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export default function App() {
  return (
    <html lang="en" className="bg-gray-900">
      <head>
        <Meta />
        <Links />
        <script
          async
          defer
          data-website-id="9b9d8739-c699-45ea-8542-ba5e90dee200"
          src="https://analytics.veetik.com/umami.js"
        ></script>
      </head>
      <body className="overflow-hidden">
        <Outlet />
        <ScrollRestoration />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
