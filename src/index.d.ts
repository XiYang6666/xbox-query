declare type AuthData = {};

declare type GamerProfile = {
  xuid: string;
  GameDisplayName: string;
  Gamertag: string;
  GameDisplayPicRaw: string;
  Gamerscore: number;
  TenureLevel: number;
};

export async function authenticate(account: string, password: string): AuthData;
export async function query(auth_data: AuthData, tag: string): GamerProfile;
