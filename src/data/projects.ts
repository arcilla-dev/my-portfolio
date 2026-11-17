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
    slug: "_ui-animations",
    description: "Interface animations built with React.",
    tech: ["react", "css"],
    href: "#",
    hue: 350,
  },
  {
    slug: "_tetris-game",
    description: "A classic block-stacking game built with React.",
    tech: ["react"],
    href: "#",
    hue: 290,
  },
  {
    slug: "_nimbus",
    description: "A responsive interface built with Vue.",
    tech: ["vue", "css"],
    href: "#",
    hue: 190,
  },
];
