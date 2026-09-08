/**
 * The site's categories. Every post belongs to exactly one of these, so keep the
 * list short — six is the practical ceiling before the sidebar stops reading as
 * a menu. Rename or replace entries here, then update the `category` value in
 * each post's frontmatter to match; the build fails on any mismatch.
 *
 * Order matters: it is the order used on the categories index and in the home
 * sidebar.
 */
export const categories = [
  "Mindset & Willpower",
  "Food & Meals",
  "Side Effects & Dosing",
  "Progress & Numbers",
] as const;

export type Category = (typeof categories)[number];

export const categorySlug = (category: string) =>
  category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

/** One line per category, shown on its archive page and in listings. */
export const categoryDescriptions: Record<Category, string> = {
  "Mindset & Willpower":
    "The psychology of appetite — recognising the difference between hunger and wanting, and what's still a fight.",
  "Food & Meals":
    "Specific meals, moments, and the small decisions about what gets left on the plate.",
  "Side Effects & Dosing":
    "What the medication itself does to the body, dose changes, and how that's been managed.",
  "Progress & Numbers":
    "Weight, measurements, and other ways of tracking what's actually changing.",
};
