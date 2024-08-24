export interface ProfileFormType {
  name: string;
  introduce: string;
  profileImage: string;
  badge: string;
  tagList: string[];
}

export type UpdateProfileFormType = <Key extends keyof ProfileFormType>(
  key: Key,
  value: ProfileFormType[Key],
) => void;
