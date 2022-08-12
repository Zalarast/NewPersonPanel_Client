import React from "react"
import "../../CSS/Settings.css"
import { SettingsInfo } from "../../types"
import { getInfo } from "./function"

export default function Settings() {
    const [settingsData, setSettingsData] = React.useState<SettingsInfo>({ ADInfo: { ldap: null, login: null }, userInfo: { avatar: null, login: null } })
    React.useEffect(() => { getInfo(setSettingsData).then(res => !res && alert("Произошёл сбой при получении данных")) }, [])

    return (
        <div className="Settings">
            <div className="settingsBlock">
                <h1>Настройки пользователя</h1>
                <img className="avatar" src={settingsData.userInfo?.avatar || ""} alt="avatar" />
                <h2>Логин</h2>
                <input defaultValue={settingsData.userInfo?.login || ""} />
                <h2>Пароль</h2>
                <input type="password" />
            </div>
            <div className="settingsBlock">
                <h1>Настройка ActiveDirectory</h1>
                <h2>ldap</h2>
                <input defaultValue={settingsData.ADInfo?.ldap || ""} />
                <h2>Логин</h2>
                <input defaultValue={settingsData.ADInfo?.login || ""} />
                <h2>Пароль</h2>
                <input type="password" />
            </div>
        </div>
    )
}