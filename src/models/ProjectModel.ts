export class ProjectModel {
  id: number;
  date: string;
  description: JSX.Element;
  imageAlt: string;
  imageFileName: string;
  isUnderDevelopment: boolean;
  projectUrl?: string;
  projectGithubLink: string;
  projectTags: string[];
  title: string;
  source?: string;

  constructor({
    id,
    date,
    description,
    imageAlt,
    imageFileName,
    isUnderDevelopment,
    projectUrl,
    projectGithubLink,
    projectTags,
    title,
    source,
  }: ProjectModel) {
    this.id = id;
    this.date = date;
    this.description = description;
    this.imageAlt = imageAlt;
    this.imageFileName = imageFileName;
    this.isUnderDevelopment = isUnderDevelopment;
    this.projectUrl = projectUrl;
    this.projectGithubLink = projectGithubLink;
    this.projectTags = projectTags;
    this.title = title;
    this.source = source;
  }
}
