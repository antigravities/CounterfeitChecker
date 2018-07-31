// ==UserScript==
// @name         Counterfeit Checker
// @namespace    https://cutie.cafe/
// @version      0.1
// @description  determine whether items are counterfeits based on an AppID whitelist
// @author       Alexandra Frock && Cutie Café
// @match        https://steamcommunity.com/tradeoffer/*
// @grant        none
// ==/UserScript==

(function() {
    let whitelisted_apps = [
        440, // Team Fortress 2
        570, // Dota 2
        620, // Portal 2
        730, // Counter-Strike: Global Offensive
        753, // Steam
        4920, // Natural Selection 2
        207140, // SpeedRunners
        227300, // Euro Truck Simulator 2
        232090, // Killing Floor 2
        234010, // Warframe
        238460, // BattleBlock Theater
        238960, // Path of Exile
        244850, // Space Engineers
        244930, // SNOW
        250820, // SteamVR
        252490, // Rust
        264710, // Subnautica
        270450, // Robot Roller-Derby Disco Dodgeball
        270880, // American Truck Simulator
        290340, // Armello
        295110, // Just Survive (H1Z1)
        322330, // Don't Starve Together
        323850, // Move or Die
        338170, // Ratz Instagib 2.0
        394690, // Tower Unite
        417860, // Emily is Away
        431240, // Golf With Your Friends
        431960, // Wallpaper Engine
        433850, // H1Z1
        437220, // The Culling
        464350, // Screeps
        471550, // Nine Parchments
        517710, // Redout: Enhanced Edition
        578080, // PLAYERUNKNOWN'S BATTLEGROUNDS
        684850 // Shoppe Keep 2
    ];

    window.addEventListener("load", () => {
        setInterval(() => {
            Array.prototype.slice.call(document.querySelectorAll(".slot_inner > .item")).forEach(i => {
                let appid = parseInt(/item(\d{3,7})\_.*/i.exec(i.getAttribute("id"))[1]);
                if( whitelisted_apps.indexOf(appid) < 0 ){
                    i.setAttribute("style", "background: repeating-linear-gradient(45deg, red, red 10px, #465298 10px, #465298 20px) !important;");
                    i.parentElement.parentElement.children[1].children[0].setAttribute("src", "https://steamcommunity-a.akamaihd.net/economy/emoticon/:exclamation:");
                    i.setAttribute("title", "This item may be counterfeit. Please be careful. Check that " + appid + " matches the AppID you're looking to trade items in; https://store.steampowered.com/app/" + appid);
                }
            });
        }, 1000);
    });
})();
