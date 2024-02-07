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
/**
 * 获取指定玩家信息
 *
 * @param {CredentialsAuthenticateResponse} auth_data 请求用到的 token
 * @param {string} tag 目标玩家的 gamertag 或者 xuid
 * @return {*}  {Promise<GamerProfile>} 玩家信息
 */
export declare function query(
  auth_data: CredentialsAuthenticateResponse,
  tag: string
): Promise<GamerProfile>;
