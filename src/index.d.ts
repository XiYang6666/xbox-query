declare type AuthData = {};

declare type GamerProfile = {
  xuid: string;
  GameDisplayName: string;
  Gamertag: string;
  GameDisplayPicRaw: string;
  Gamerscore: number;
  TenureLevel: number;
};

export function authenticate(
  account: string,
  password: string
): Promise<AuthData>;
export function query(auth_data: AuthData, tag: string): Promise<GamerProfile>;
