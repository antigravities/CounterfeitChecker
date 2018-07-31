# Counterfeit Checker
determine whether items are counterfeits based on an AppID whitelist

## Why
[Read this](https://redd.it/9315ju)

## Install
Download any user script manager, like [Tampermonkey](https://tampermonkey.net/), [Greasemonkey](https://www.greasespot.net/), or [Violentmonkey](https://violentmonkey.github.io/). Then [click here](https://raw.github.com/antigravities/CounterfeitChecker/counterfeitchecker.user.js) to install the userscript. It should update automatically.

## Use
Items that may be counterfeits will show up like the following in **trade offer** windows (the item image, if any, will appear in front of the stripes)

![](https://up.antigraviti.es/2018/07/97ac848f.png)

The apps that will *not* trigger this warning are:
```
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
```

This list is incomplete. App developers or other interested parties looking to add apps to the whitelist may send a request through [GitHub issues](https://github.com/antigravities/CounterfeitChecker/issues). I and others will weigh an app's legitimacy and risk and, if appropriate, add the app to the whitelist.

## License
GNU GPL v3. See [LICENSE](LICENSE)
