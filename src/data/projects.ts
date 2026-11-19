import type { TechId } from "./techs";

export interface Project {
  /** Shown after the number, e.g. "Project 1 // _ui-animations" */
  slug: string;
  description: string;
  /** Used by the sidebar filters. The first one is shown as the badge on the card. */
  tech: TechId[];
  /** Where the "view-project" button goes (live demo, repo, case study...). */
  href: string;
  /** Optional cover image, e.g. "/projects/nimbus.jpg" (put files in /public/projects). */
  image?: string;
  /** Hue (0-360) of the placeholder cover used when there is no image. */
  hue?: number;
}

/**
 * Add a new project by adding an object to this array. That's it:
 * the card, the numbering and the filters all update automatically.
 */
export const projects: Project[] = [
    {
    slug: "Meneses One-Stop",
    description: "A student facing web service for Bulacan State University - Meneses Campus.",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "PostgreSQL"],
    href: "https://meneses-one-stop.vercel.app/",
    image: "/Meneses-One-Stop.png"
  },
  {
    slug: "My Personal Portfolio",
    description: "My personal portfolio built with Astro",
    tech: ["Astro", "Tailwind CSS"],
    href: "#",
    image: "/my-portfolio.png"
  },
  {
    slug: "Placeholder 1",
    description: "Placehodler for unbuilt projects",
    tech: ["React"],
    href: "#",
    hue: 350,
  },
  {
    slug: "Placeholder 2",
    description: "Another placeholder",
    tech: ["React"],
    href: "#",
    hue: 290,
  },
  {
    slug: "Placeholder 3",
    description: "Yet another placeholder",
    tech: ["React"],
    href: "#",
    hue: 190,
  },
  {
    slug: "Placeholder 4",
    description: "Placeholder final",
    tech: ["React"],
    href: "#",
    hue: 100,
  },
];
