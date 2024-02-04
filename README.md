# xbox-query

一个用于查询 xbox 玩家信息的 工具/API，基于 node.js 。

## CLI 使用方法

### 安装

该工具需要 node.js 运行环境，请确保在使用此工具前安装了 nodejs。

```bash
npm install -g xbox-query
```

### 登录 Xbox 账号

根据提示输入相应内容

```bash
xbox-query login
```

### 查询玩家信息

通过`xuid`或者`gamertag`来获取玩家信息。

```bash
xuid-query <xuid|gametag>
```

## API

`xbox-query` 通常与 `@xboxreplay/xboxlive-auth` 的 `authenticate` 连用，为方便起见，你可以直接从`xbox-query`导入它。

```ts
// authenticate 与 CredentialsAuthenticateResponse, 直接导入来自 @xboxreplay/xboxlive-auth
import { CredentialsAuthenticateResponse, authenticate } from "@xboxreplay/xboxlive-auth";

type GamerProfile = {
    xuid: string;
    GameDisplayName: string;
    Gamertag: string;
    GameDisplayPicRaw: string;
    Gamerscore: number;
    TenureLevel: number;
};

function query(auth_date: CredentialsAuthenticateResponse, tag: string): Promise<GamerProfile>;
```

以下为示例代码。此代码将会登录`example@example.com`的 Xbox 账号并使用它的 token ，然后获取 `xuid` 为 `123456789` 玩家的信息。

```js
import { authenticate, query } from "./index.js";

authenticate("example@example.com", "password").then(data => {
    console.log(
        query(data, "123456789").then(result => {
            console.log(result);
        })
    );
});
```
