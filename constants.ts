export const METADATA = {
  title: "Portfolio | VanNT Dev",
  description:
    "Senior Software Engineering student building a solid foundation in web development. Recently interned at GLOBALDEV VIETNAM, focused on mastering modern frontend technologies.",
  siteUrl: "",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Foundation",
    ref: "foundation",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I am building a solid foundation",
  "I develop modern frontend apps",
  "I master core web technologies",
  "I strive for technical excellence",
];

export const EMAIL = "zanngyn@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/nguyễn-thế-văn-097a65303/",
  instagram: "https://www.instagram.com/zansociu.ig/",
  facebook: "https://www.facebook.com/vannguyen.sict",
  github: "https://github.com/zannngyn",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "gsap",
    "tailwind",
    "sass",
    "html",
    "css",
  ],
  userInterface: ["figma", "adobexd"],
  other: ["git"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}



export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
