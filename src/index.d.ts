import {
  CredentialsAuthenticateResponse,
  authenticate,
} from "@xboxreplay/xboxlive-auth";

declare type GamerProfile = {
  xuid: string;
  GameDisplayName: string;
  Gamertag: string;
  GameDisplayPicRaw: string;
  Gamerscore: number;
  TenureLevel: number;
};

export { authenticate };
export declare function query(
  auth_data: CredentialsAuthenticateResponse,
  tag: string
): Promise<GamerProfile>;
