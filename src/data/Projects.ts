import type { Project } from "../types/Project";

const projects: Project[] = [
  {
    title: "Grafanity",
    description: "QA in Streaming: Bring your automated test suite to life",
    technologies: ["Grafana", "Serenity BDD"],
    detailedDescription: "A framework that integrates Grafana and SerenityBDD to provide a complete view of a software project in production. It supports observability, monitoring, and shift left-right testing, enabling real-time testing and detailed reporting.",
    features: [
      "Native integration with Grafana for real-time visualization",
      "Automated test reporting with SerenityBDD",
      "Support for observability and monitoring using a shift left-right approach"
    ],
  },
  {
    title: "Sollte App",
    description: "A modern and ingenious solution for meet your personal workout routine.",
    detailedDescription: "A comprehensive fitness application designed to help users create, track, and manage their personalized workout routines. The app offers a user-friendly interface, progress tracking, and integration with wearable fitness devices.",
    features: [
      "Personalized workout plans based on user goals",
      "Progress tracking with visual analytics",
      "Integration with popular fitness devices and apps"
    ],
  }
];

export default projects