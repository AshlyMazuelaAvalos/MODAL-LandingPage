export interface TeamMemberLink {
  label: string;
  url: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  links: TeamMemberLink[];
}
