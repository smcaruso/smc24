export type Project = {
  title: string;
  description: string;
};

export type ExperienceData = {
  dateRange: string;
  title: string;
  company: string;
  headline: string;
  projects: Project[];
  companyLogo?: string; // Optional, in case no logo is available
};