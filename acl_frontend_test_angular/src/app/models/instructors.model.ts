
export class Instructors {
  private name: string;
  private bio: string;
  private profile_picture: string;
  private url: string;
  private organization: any;

  constructor(Instructors: any) {
    this.name = Instructors.name;
    this.bio = Instructors.bio;
    this.profile_picture = Instructors.profile_picture;
    this.url = Instructors.url;
    this.organization = Instructors.organization;
  }

  getName(): string {
    return this.name;
  }

  getBio(): string {
    return this.bio;
  }

  getProfilePicture(): string {
    return this.profile_picture;
  }

  getOrganization(): any {
    return this.organization;
  }

  getUrl(): string {
    return this.url;
  }

}