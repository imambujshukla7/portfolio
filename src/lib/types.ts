export interface PorfolioData {
  about: string[];
  aboutMedia: aboutMediaItem[];
  achivementList: Achivements[];
  educationList: Education[];
  expList: Exp[];
  favicon: string;
  logo: string;
  podcastList: Podcasts[];
  projectList: Projects[];
  skillList: Skill[];
  socialLinks: SocialLink[];
  tagline: string;
  title: string;
  titleDesc: string;
  articleList: Article[];
  blogList: mBlog[];
  _updatedAt: string;
}

export interface SocialLink {
  icon: string;
  link: string;
  name: string;
}

export interface aboutMediaItem {
  link: string;
}

export interface Projects {
  name: string;
  desc: string;
  tech: Tech[];
  image: string;
  link: string;
}

export interface Tech {
  techName: string;
  techLink: string;
}

export interface Podcasts {
  name: string;
  desc: string;
  image: string;
  link: string;
}

export interface Achivements {
  name: string;
  desc: string;
  image: string;
  link: string;
  publishedAt: string;
}

export interface Education {
  desc: string;
  image: string;
  title: string;
}

export interface Exp {
  desc: string;
  image: string;
  role: string;
  title: string;
}

export interface Skill {
  iconList: IconItem[];
  image: string;
  name: string;
}

export interface IconItem {
  _key: string;
  icon: string;
  link: string;
  name: string;
}

// export interface AchivementsList {
//   name: string;
//   desc: string;
//   image: string;
//   link: string;
//   publishedAt: string;
// }

export interface Article {
  name: string;

  link: string;
  publishedAt: string;
}

export interface mBlog {
  name: string;
  image: string;
  link: string;
}
