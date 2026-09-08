export const siteConfig = {
  /** Wordmark shown in the header and footer. Monograph uses text, never a logo image. */
  name: "My Mounjaro Journey",
  tagline: "Notes from a Mounjaro journey",
  title: "My Mounjaro Journey",
  description:
    "A personal account of Mounjaro (tirzepatide), weight loss, appetite, side effects, and discovering that knowing why I eat doesn't necessarily make it easy to stop.",
  siteUrl: "https://example.com", // TODO: replace with the real domain once you have one
  authorName: "Paul",
  email: "",
  language: "en",
  dateLocale: "en-GB",
  locale: "en_GB",
  socialImage: "/og-image.png",
  /** Shown in the home sidebar "About" card. */
  about:
    "A personal, honest account of my Mounjaro (tirzepatide) journey — the appetite, the side effects, and discovering that knowing why I eat doesn't necessarily make it easy to stop.",
  /**
   * Both forms below ship enabled with an empty `action`, which makes them fully
   * interactive demos that submit nowhere: a small script confirms the submit
   * and clears the fields. Paste your provider's endpoint into `action` to send
   * real submissions, or set `enabled: false` to disable the controls outright.
   */
  newsletter: {
    enabled: true,
    action: "",
    method: "post",
    emailFieldName: "email",
    title: "Get new posts by email",
    description: "One email when something new goes up. No spam, unsubscribe anytime.",
  },
  contact: {
    enabled: true,
    action: "",
    method: "post",
    responseTime: "Replies usually go out within two business days.",
  },
  socials: [{ label: "RSS", href: "/rss.xml" }],
};

/** Header navigation. Add or remove entries freely; the header renders them in order. */
export const navigation = [
  { label: "Archive", href: "/posts/" },
  { label: "Categories", href: "/categories/" },
  { label: "About", href: "/about/" },
];

/** Secondary navigation rendered in the footer. */
export const footerNavigation = [
  { label: "Contact", href: "/contact/" },
  { label: "Privacy", href: "/privacy/" },
  { label: "RSS", href: "/rss.xml" },
];
