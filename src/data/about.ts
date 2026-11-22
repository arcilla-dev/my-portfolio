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
          "Hi! I'm **Josh Nathaniel Arcilla**, a **Computer Engineering student** with an **interest** in",
          "software development and building practical solutions through technology.",
          "",
          "I work **primarily** on **full-stack web development**, creating applications with a focus on",
          "usability, maintainability, and functionality. I'm also exploring **embedded systems** and",
          "**low-level programming** as I continue expanding my engineering skills",
          "",
          "## What I do",
          "- Build interfaces that are clear and easy to understand.",
          "- Develop backend systems that are functional and maintainable.",
          "- Integrate applications with databases.",
          "- Experiment with physical hardware prototypes.",
          "",
          "---",
          "> Understand. Build. Test. Iterate.",
        ],
      },
      {
        id: "journey",
        name: "journey.md",
        lines: [
          "# My journey",
          "",
          "## Where it started",
          "I started like others students wondering what to major in college. My interests with mathematics",
          "and computers eventually led me to Computer Engineering.",
          "",
          "Although lost at first, I eventually became interested in understanding how things work,",
          "making small web applications, experimenting with hardware, and seeing things happen",
          "through code and terminals.",
          "",
          "## Where I am now",
          "I'm currently in my last years of my Computer Engineering Degree, working towards completing my",
          "undergraduate capstone. Having spent years learning the fundamentals and underlying theories,",
          "I'm now focused on applying that knowledge through practical projects.",
          "",
          "Currently, I'm working on expanding my portfolio and strengthening my resume by building applications and hardware prototypes that address practical problems.",
          "",
          "## What's next",
          "1. Secure my first freelance client and gain experience working with real clients.",
          "2. Complete my undergraduate studies and graduate with a Computer Engineering degree.",
          "3. Pursue a full-time position where I can apply and further develop my technical skills.",
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
          "1. **Full-stack web applications**",
          "      - Building functional applications from frontend interfaces to backend services and databases.",

          "2. **UI/UX and design systems**",
          "      - Exploring ways to make interfaces intuitive, consistent, and visually clear.",
          "3. **APIs and backend architecture**",
          "      - Understanding how applications communicate, process data, and manage information.",
          "4. **Developer tooling and automation**",
          "      - Exploring tools and workflows that improve development efficiency.",
          "5. **Embedded systems**",
          "      - Experimenting with microcontrollers, firmware, and hardware-software integration.",
        ],
      },
      {
        id: "outside-code",
        name: "outside-code.md",
        lines: [
          "# Outside of code",
          "",
          "When I'm away from my code editor, I enjoy exploring other fields, learning new things, and",
          "spending time on small activities that gives unique challenges different from what I do.",
          "",
          "## My Hobbies",
          "- **Chess** - Playing strategy games and testing different approaches.",
          "- **Logic puzzles** – Sudoku, minesweeper, and other variants of this games.",
          "- **Self-learning** - Exploring topics outside my degree such as marketing, psychology,",
          "    and etc.",
          "- **Technology exploration** – Exploring new frameworks, electronics, and sometimes",
          "    reviewing back the fundamentals.",
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
          "## Bulacan State University - Meneses Campus",
          "- **Degree:** Bachelor of Science in Computer Engineering",
          "- **Academic Year:** 2023 - 2027",
          "",
          "## Highlights",
          "1. **ICPEP R3 Programming Competition – C Language (March 8, 2025)**",
          "      - Represented my school during my second year in a competitive programming event focused on",
          "        algorithmic problem-solving, code efficiency, and time-constrained execution using C.",
          "2. **Computer Engineering Week - Chess Tournament 2nd Placer (May 16, 2025)**",
          "      - Secured second place in a campus chess tournament competing against fellow Computer",
          "        Engineering students.",
          "3. **ICPEP R3 Programming Competition – Java Language (March 24, 2026)**",
          "      - Represented my school in a competitive programming event focused on algorithmic",
          "        problem-solving and Java-based programming under time constraints.",
        ],
      },
    ],
  },
  {
    id: "experience",
    label: "experience",
    files: [
      {
        id: "work-experience",
        name: "work-exp.md",
        lines: [
          "# Work Experience",
          "",
          "## Software Development Intern",
          "- **Company:** Paradigma International Inc.",
          "- **Date:** May 15, 2026 – July 15, 2026",
          "",
          " - Implemented and enhanced HR management features within the company's existing information",
          "   system.",
          " - Modified and improved components of an existing corporate website.",
          " - Worked with Java, Spring Boot, React, MySQL, and Maven within an established codebase.",
          " - Collaborated with developers using Git for version control, branching, and code management.",
          " - Communicated directly with clients to clarify requirements and support development tasks.",
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
