import React from "react"
import "../../CSS/Settings.css"
import { SettingsInfo } from "../../types"

export default function Settings() {
    const [settingsData, setSettingsData] = React.useState<SettingsInfo>({})
    return (
        <div className="Settings">
            <div className="settingsBlock">
                <h1>Настройки пользователя</h1>
                <img className="avatar" src={settingsData.userInfo?.avatar} alt="avatar" />
                <h2>Логин</h2>
                <input value={settingsData.userInfo?.login}/>
                <h2>Пароль</h2>
                <input value={settingsData.userInfo?.pass} type="password" />
            </div>
            <div className="settingsBlock">
                <h1>Настройка ActiveDirectory</h1>
                <h2>ldap</h2>
                <input value={settingsData.ADInfo?.ldap} />
                <h2>Логин</h2>
                <input value={settingsData.ADInfo?.login}/>
                <h2>Пароль</h2>
                <input value={settingsData.ADInfo?.pass} type="password" />
            </div>
        </div>
    )
}