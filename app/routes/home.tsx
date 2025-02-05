import type { Route } from "./+types/home";
import HomeComponent from "../HomePage/HomeComponent";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jordan M Walsh Portfolio" },
    { name: "description", content: "Jordan M Walsh Portfolio" },
  ];
}

export default function Home() {
  return <HomeComponent />;
}
