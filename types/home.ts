export type SanityImage = {
  alt?: string | null;
  url?: string | null;
  width?: number | null;
  height?: number | null;
};

export type HomeTag = {
  _key?: string;
  name?: string | null;
  type?: "rectangle" | "pill" | "trapezoid" | null;
};

export type HomePageData = {
  title?: string | null;
  hero?: {
    title?: string | null;
    details?: {
      _key?: string;
      icon?: string | null;
      name?: string | null;
    }[] | null;
  } | null;
  about?: {
    title?: string | null;
    description?: string | null;
    tags?: HomeTag[] | null;
  } | null;
  services?: {
    serviceSlides?: {
      _key?: string;
      mobileBackgroundImage?: SanityImage | null;
      tabletBackgroundImage?: SanityImage | null;
      desktopBackgroundImage?: SanityImage | null;
      bulletPointText?: string | null;
      title?: string | null;
      services?: {
        _key?: string;
        title?: string | null;
        tags?: HomeTag[] | null;
      }[] | null;
    }[] | null;
  } | null;
  portfolio?: {
    sections?: {
      _key?: string;
      title?: string | null;
      projects?: {
        _key?: string;
        image?: SanityImage | null;
        title?: string | null;
        subtitle?: string | null;
        description?: string | null;
        tags?: HomeTag[] | null;
        innerImage?: SanityImage | null;
      }[] | null;
      endImage?: SanityImage | null;
    }[] | null;
  } | null;
  xantir?: {
    title?: string | null;
    description?: string | null;
    tags?: HomeTag[] | null;
    description2?: string | null;
    buttonText?: string | null;
    buttonLink?: string | null;
    image?: SanityImage | null;
  } | null;
  team?: {
    title?: string | null;
    bottomTags?: HomeTag[] | null;
    teamMembers?: {
      _key?: string;
      image?: SanityImage | null;
      isBadge?: boolean | null;
      title?: string | null;
      description?: string | null;
      tags?: HomeTag[] | null;
    }[] | null;
  } | null;
  partners?: {
    title?: string | null;
    partners?: {
      _key?: string;
      image?: SanityImage | null;
      name?: string | null;
    }[] | null;
  } | null;
  footer?: {
    footerText?: string | null;
  } | null;
};

export type HomePageResponse = {
  data: HomePageData;
};
