/**
 * Every technology that can appear in the Projects filter sidebar or on a project card.
 * To add one: add an entry below (icons are 24x24 stroke paths that use currentColor).
 */

export interface Tech {
  label: string;
  group: "front-end" | "back-end" | "database";
  icon: string;
}


export const techs = {
  React: {
    label: "React",
    group: "front-end",
    icon:  "/icons/react.svg",
  },
  Astro: {
    label: "Astro",
    group: "front-end",
    icon: "/icons/astro.svg",
  },
  "Next.js": {
    label: "Next.js",
    group: "front-end",
    icon: "/icons/nextjs.svg",
  },
  "Tailwind CSS": {
    label: "Tailwind CSS",
    group: "front-end",
    icon: "/icons/tailwindcss.svg",
  },
  "Spring Boot": {
    label: "Spring Boot",
    group: "back-end",
    icon: "/icons/spring-boot.svg",
  },
  Supabase: {
    label: "Supabase",
    group: "back-end",
    icon: "/icons/supabase.svg",
    },
  MySQL: {
    label: "MySQL",
    group: "database",
    icon: "/icons/mysql.svg",
    },
  PostgreSQL: {
    label: "PostgreSQL",
    group: "database",
    icon: "/icons/postgresql.svg",
    },
} satisfies Record<string, Tech>;

export type TechId = keyof typeof techs;

/** Sidebar sections, in display order. */
export const groups: { id: Tech["group"]; label: string; open: boolean }[] = [
  { id: "front-end", label: "front-end", open: true },
  { id: "back-end", label: "back-end", open: false },
  { id: "database", label: "database", open: false },
];
