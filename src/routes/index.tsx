import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "../pages/Home.tsx";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <HomePage />;
}
