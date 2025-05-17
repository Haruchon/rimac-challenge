import { createFileRoute } from "@tanstack/react-router";
import { ResumePage } from "../pages/Resume.tsx";

export const Route = createFileRoute("/resume")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ResumePage />;
}
