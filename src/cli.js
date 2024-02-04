#!/usr/bin/env node

import fs from "fs"
import os from "os"
import path from "path"

import inquirer from "inquirer"
import { program } from "commander"

import { authenticate, query } from "./index.js"

const authDataFile = path.join(os.homedir(), "./.xbox_query_auth_data.json")
const { version } = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url)).toString())

program.name("xbox-query")
program.version(version);

program
    .command("login")
    .description("登录Xbox获取token")
    .action(async () => {
        let answer = await inquirer.prompt([
            {
                type: "input",
                name: "account",
                message: "账号",
            },
            {
                type: "password",
                name: "password",
                message: "密码"
            }
        ])

        let account = answer["account"]
        let password = answer["password"]
        authenticate(account, password).then((auth_data) => {
            fs.writeFileSync(authDataFile, JSON.stringify(auth_data), (err) => { if (err) console.log(err) })
            console.info("LOGIN SUCCESSFUL")
        }).catch((err) => {
            console.error(err)
        })
    })

program
    .command("query <tag>")
    .description("查询玩家信息")
    .action(async () => {
        let tag = argv[1]
        let auth_data = JSON.parse(fs.readFileSync(authDataFile))
        query(auth_data, tag).then((result) => {
            console.log(
                `XUID: \t\t${result.xuid}\n` +
                `玩家名: \t${result.GameDisplayName}\n` +
                `玩家代号: \t${result.Gamertag}\n` +
                `头像: \t\t${result.GameDisplayPicRaw}\n` +
                `分数(G): \t${result.Gamerscore}\n` +
                "\n"
            )
        })
    })

program
    .command("clean")
    .description("清除token")
    .action(async () => {
        fs.unlinkSync(authDataFile)
        console.log("CLEAN SUCCESSFUL")
    })

program.parse()
