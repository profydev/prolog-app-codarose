//data types for the landing page

export type LandingPageData = {
  meta: {
    title: string;
    description: string;
    image: string;
  };
  sections: Section[];
};

export type Section = HeroSection | SocialProofSection | TestimonialsSection;

export enum SectionTypes {
  hero = "hero",
  socialProof = "social-proof",
  testimonials = "testimonials",
}

export type MetaLandingPage = {
  title: string;
  description: string;
  image: string;
};

export type HeroSection = {
  sectionType: SectionTypes.hero;
  title: string;
  subtitle: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export type BackgroundTheme = "light-gray" | "light";

export type Companies = {
  name: string;
  logo: string;
};
export type SocialProofSection = {
  sectionType: SectionTypes.socialProof;
  theme: BackgroundTheme;
  title: string;
  companies: Companies[];
  subtitle: string;
};
export type TestimonialsSection = {
  sectionType: SectionTypes.testimonials;
  theme: BackgroundTheme;
  title: string;
  subtitle: string;
  testimonials: Testimonials[];
};

export type Testimonials = {
  title: string;
  text: string;
  userName: string;
  userRole: string;
  userCompany: string;
  userImage: {
    src: string;
    width: number;
    height: number;
  };
};
