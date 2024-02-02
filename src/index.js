import { authenticate } from '@xboxreplay/xboxlive-auth'
import axios from 'axios'

async function query(auth_data, tag) {
    let tagType = /^[0-9]{16}$/.test(tag) ? "xuid" : "gt"

    let response = await axios.get(
        `https://profile.xboxlive.com/users/${tagType}(${tag})/profile/settings?settings=GameDisplayName,Gamertag,GameDisplayPicRaw,Gamerscore,TenureLevel`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `XBL3.0 x=${auth_data.user_hash};${auth_data.xsts_token}`,
                "x-xbl-contract-version": "2",
            }
        }
    )

    let gamerOriginalData = response.data['profileUsers'][0]
    let gamerData = { "xuid": gamerOriginalData["id"] }
    for (let settingPair of gamerOriginalData["settings"]) {
        let key = settingPair["id"]
        let value = settingPair["value"]
        gamerData[key] = ["Gamerscore", "TenureLevel"].includes(key) ? Number(value) : value
    }
    console.log(gamerData)
    return gamerData
}

export { authenticate, query }
