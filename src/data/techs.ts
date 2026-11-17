/**
 * Every technology that can appear in the Projects filter sidebar or on a project card.
 * To add one: add an entry below (icons are 24x24 stroke paths that use currentColor).
 */
export interface Tech {
  label: string;
  group: "front-end" | "back-end" | "database";
  icon: string;
}

const shield = `<path d="M4 3l1.6 17L12 22l6.4-2L20 3z"/>`;
const terminal = `<path d="M4 6l6 6-6 6M12 18h8"/>`;
const database = `<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>`;

export const techs = {
  react: {
    label: "React",
    group: "front-end",
    icon: `<circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>`,
  },
  html: {
    label: "HTML",
    group: "front-end",
    icon: `${shield}<path d="M16 8H8.6l.3 4h6.7l-.4 4.3-3.2 1-3.2-1"/>`,
  },
  css: {
    label: "CSS",
    group: "front-end",
    icon: `${shield}<path d="M8 8h8M8.4 12h6.8l-.4 4.2-2.8.9-2.8-.9"/>`,
  },
  vue: {
    label: "Vue",
    group: "front-end",
    icon: `<path d="M2.5 4H7l5 8.6L17 4h4.5L12 20.5z"/><path d="M8.3 4L12 10.2 15.7 4"/>`,
  },
  angular: {
    label: "Angular",
    group: "front-end",
    icon: `<path d="M12 2.5l8.8 3.1-1.3 11.6L12 21.5l-7.5-4.3-1.3-11.6z"/><path d="M12 7l3.4 8.6M12 7l-3.4 8.6M9.8 13h4.4"/>`,
  },
  gatsby: {
    label: "Gatsby",
    group: "front-end",
    icon: `<circle cx="12" cy="12" r="9.5"/><path d="M6.5 13h5.5v4.5M17.5 10.5A6 6 0 0010 6.2"/>`,
  },
  flutter: {
    label: "Flutter",
    group: "front-end",
    icon: `<path d="M14 2.5L4.5 12l3 3L20 2.5zM14 11.5l-3 3 4 4H20z"/>`,
  },
  node: {
    label: "Node.js",
    group: "back-end",
    icon: `<path d="M12 2l8.5 5v10L12 22l-8.5-5V7z"/><path d="M9.5 15V9l5 6V9"/>`,
  },
  express: { label: "Express", group: "back-end", icon: terminal },
  python: { label: "Python", group: "back-end", icon: terminal },
  postgresql: { label: "PostgreSQL", group: "database", icon: database },
  mongodb: { label: "MongoDB", group: "database", icon: database },
  mysql: { label: "MySQL", group: "database", icon: database },
} satisfies Record<string, Tech>;

export type TechId = keyof typeof techs;

/** Sidebar sections, in display order. */
export const groups: { id: Tech["group"]; label: string; open: boolean }[] = [
  { id: "front-end", label: "front-end", open: true },
  { id: "back-end", label: "back-end", open: false },
  { id: "database", label: "database", open: false },
];
