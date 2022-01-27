
export class Courses {
  private title: string;
  private code: string;
  private short_description: string;
  private full_description: string;
  private image: string;
  private categories: any[];
  private instructors: any[];
  private organizations: any[];
  private url: string;

  constructor(Courses: any) {
    this.title = Courses.title;
    this.code = Courses.code;
    this.short_description = Courses.short_description;
    this.full_description = Courses.full_description;
    this.image = Courses.image;
    this.categories = Courses.categories;
    this.instructors = Courses.instructors;
    this.organizations = Courses.organizations;
    this.url = Courses.url;
  }

  getTitle(): string {
    return this.title;
  }

  getCode(): string {
    return this.code;
  }

  getShortDescription(): string {
    let short_description = "";
    for (let index = 0; index < this.short_description.length; index++) {
      const element = this.short_description[index];
      if (index > 200) {
        short_description += "...";
        break;
      }

      short_description += element;
    }
    return short_description;
  }

  getFullDescription(): string {
    return this.full_description;
  }

  getImage(): string {
    return this.image;
  }

  getCategories(): any[] {
    return this.categories;
  }

  getInstructors(): any[] {
    return this.instructors;
  }

  getOrganizations(): any[] {
    return this.organizations;
  }

  getUrl(): string {
    return this.url;
  }

}