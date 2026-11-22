/**
 * Content for the About page. Everything marked "placeholder" is sample text: replace it.
 *
 * - Add a file: add an object to a folder's `files` (each line of `lines` is one line of Markdown).
 * - Add a folder: add an object to `folders`.
 */
export interface AboutFile {
  /** Unique id (also used by the tab). */
  id: string;
  /** Shown in the sidebar and tab, e.g. "intro.md" */
  name: string;
  lines: string[];
}

export interface AboutFolder {
  id: string;
  label: string;
  /** Start expanded in the sidebar. */
  open?: boolean;
  files: AboutFile[];
}

export const folders: AboutFolder[] = [
  {
    id: "bio",
    label: "bio",
    open: true,
    files: [
      {
        id: "intro",
        name: "intro.md",
        lines: [
          "# About me",
          "",
          "Hi! I'm **Josh Nathaniel Arcilla**, a full-stack developer building fast, maintainable, and visually clear web apps.",
          "",
          "## What I do",
          "- Build interfaces that are clear and easy to use",
          "- Connect them to reliable back ends and databases",
          "- Keep learning, shipping, and improving",
          "",
          "---",
          "> Build. Learn. Iterate.",
        ],
      },
      {
        id: "journey",
        name: "journey.md",
        lines: [
          "# My journey",
          "",
          "## Where it started",
          "Placeholder: tell the short story of how you got into development. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          "",
          "## Where I am now",
          "Placeholder: what you work on today. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "",
          "## What's next",
          "- Placeholder goal one",
          "- Placeholder goal two",
        ],
      },
    ],
  },
  {
    id: "interests",
    label: "interests",
    files: [
      {
        id: "coding",
        name: "coding.md",
        lines: [
          "# Interests in code",
          "",
          "- Web interfaces and design systems",
          "- APIs, databases, and the plumbing behind an app",
          "- Developer tooling and small automations",
          "",
          "> Placeholder: replace these with what you actually enjoy building.",
        ],
      },
      {
        id: "outside-code",
        name: "outside-code.md",
        lines: [
          "# Outside of code",
          "",
          "Placeholder: add your hobbies here. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "",
          "- Hobby one",
          "- Hobby two",
          "- Hobby three",
        ],
      },
    ],
  },
  {
    id: "education",
    label: "education",
    files: [
      {
        id: "university",
        name: "university.md",
        lines: [
          "# University",
          "",
          "## Placeholder University Name",
          "- **Degree:** Your degree here",
          "- **Years:** 20XX - 20XX",
          "",
          "## Highlights",
          "- Placeholder: a project, award, or course worth mentioning",
          "- Placeholder: another highlight",
        ],
      },
    ],
  },
];

/** Shown under "contacts" in the sidebar. Edit to your own details. */
export const contacts = {
  email: "arcilla.jn@gmail.com",
  phone: "+(63) 970-671-7674",
};

/** The file opened when the page loads. */
export const defaultFileId = "intro";
