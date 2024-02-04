# xbox-query

用于查询xbox玩家信息的 NodeJS 包

## 使用

### 通过CLI

1. 安装npm包

    ```bash
    npm install -g xbox-query
    ```

2. 登录你的xbox账号

    ```bash
    xbox-query login
    ```

3. 查询玩家

    ```bash
    xbox-query query <gamer_tag|xuid>
    ```

### 通过引入npm包

> [!TIP]
> 仅支持ESM

```js
import { authenticate, query } from "xbox-query"

(async ()=>{
    let authData = await authenticate("YOUR_XBOX_ACCOUNT","YOUR_XBOX_PASSWORD")
    let playerProfile = await query(authData, "PLAYER_TAG")
    console.log(playerProfile)
})()

```
