export const siteConfig = {
  /** Wordmark shown in the header and footer. Monograph uses text, never a logo image. */
  name: "Thirty Clicks",
  tagline: "Notes from a Mounjaro journey",
  title: "Thirty Clicks",
  description:
    "A personal account of Mounjaro (tirzepatide), weight loss, appetite, side effects, and discovering that knowing why I eat doesn't necessarily make it easy to stop.",
  siteUrl: "https://thirty-clicks.whalesanctuary.co.uk",
  authorName: "Paul",
  email: "",
  language: "en",
  dateLocale: "en-GB",
  locale: "en_GB",
  // Cache-busted: Facebook's scraper caches the image itself by URL and
  // can ignore "Scrape Again" for a while. Bump this query string (not the
  // filename) any time og-image.png changes, to force a fresh fetch.
  socialImage: "/og-image.png?v=2",
  /** Shown in the home sidebar "About" card. */
  about:
    "A personal, honest account of my Mounjaro (tirzepatide) journey — the appetite, the side effects, and discovering that knowing why I eat doesn't necessarily make it easy to stop.",
  socials: [{ label: "RSS", href: "/rss.xml" }],
};

/** Header navigation. Add or remove entries freely; the header renders them in order. */
export const navigation = [
  { label: "Posts", href: "/posts/" },
  { label: "Archives", href: "/archives/" },
  { label: "Categories", href: "/categories/" },
  { label: "About", href: "/about/" },
];

/** Secondary navigation rendered in the footer. */
export const footerNavigation = [
  { label: "Privacy", href: "/privacy/" },
  { label: "RSS", href: "/rss.xml" },
];
