/**
 * Testimonials shown on the About page.
 * IMPORTANT: these three are placeholders. Replace them with real quotes
 * (with the person's permission) before publishing.
 *
 * Add one by adding an object to the array.
 */
export interface Testimonial {
  /** Handle shown in accent colour, e.g. "@jane-doe" */
  handle: string;
  /** Full name, used for the avatar initials. */
  name: string;
  /** e.g. "Product Manager · Company" */
  role: string;
  /** Free text, e.g. "2 months ago" */
  posted: string;
  quote: string;
  /** 1 to 5 stars. Leave out to hide the stars. */
  rating?: number;
  /** Avatar colour (0-360). */
  hue?: number;
}

export const testimonials: Testimonial[] = [
  {
    handle: "@username",
    name: "Jane Doe",
    role: "Product Manager · Company A",
    posted: "2 months ago",
    quote:
      "Placeholder testimonial. Josh took a vague idea and turned it into a clean, working interface, and kept communication clear the whole way.",
    rating: 5,
    hue: 170,
  },
  {
    handle: "@username",
    name: "John Smith",
    role: "Senior Developer · Company B",
    posted: "5 months ago",
    quote:
      "Placeholder testimonial. Code that is easy to read and easy to change. Reliable and quick to pick up new tools.",
    rating: 5,
    hue: 260,
  },
  {
    handle: "@username",
    name: "Alex Cruz",
    role: "Client · Freelance project",
    posted: "9 months ago",
    quote:
      "Placeholder testimonial. Delivered on time, explained the trade-offs, and the site loads fast.",
    rating: 4,
    hue: 30,
  },
];
