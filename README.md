### VOOI APP BOT

![vooi](assets/img1.jpeg)

---

## VOOI APP AIRDROP

**AIRDROP** : #New Airdrop
New Airdrops: Vooi
🏷 Reward : Confirmed For All Users
➡️ Register : [HERE](https://t.me/VooiAppBot/vooi?startapp=frenID9n0lRMY)

➖ Complete Task 

➖ Start Auto Trade

➖ Claim Profit

➖ Open and Close Position

➖ Done LFG

📌 Vooi Will Listed On Binance On Q1 2025
Referal code is limited for 5 user, so if it limit reached, ask for someone to give you invite code or referal link

---

## PREREQUISITE

- Git
- Node JS
- TELEGRAM_APP_ID & TELEGRAM_APP_HASH Get it from [Here](https://my.telegram.org/auth?to=apps) (REQUIRED IF YOU WANT USE SESSIONS)

---

## BOT FEATURE

- Multi Account With Proxy Support
- Support Telegram Sessions and Telegram Query (Query May Expired)
- Auto Tap
- Auto Complete Some Missions
- Auto Upgrade Random Card
- Auto Upgrade Booster

---

## SETUP & CONFIGURE BOT

### LINUX & MAC OS

1. clone project repo
   ```
   git clone https://github.com/Rambeboy/vooi-app.git
   ```
   and cd to project dir
   ```
   cd vooi-app
   ```
2. Run
   ```
   npm install
   ```
3. Run
   ```
   npm i telegram@2.22.2
   ```
4. Run
   ```
   mkdir -p accounts
   ```
5. Run
   ```
   cp config/config_tmp.js config/config.js && cp config/proxy_list_tmp.js config/proxy_list.js
   ```
6. (If You Use Telegram Sessions) To configure the app, run
   ```
   nano config/config.js
   ```
   and add your telegram app id and hash there.
7. (If You Use Proxy) To configure the app, run
   ```
   nano config/proxy_list.js
   ```
   and add your proxy list there, use http proxy
8. to start the app run
   ```
   npm run start
   ```
9. if any error regarding `config.js` not found, or `proxy_list.js` not found, try to copy `config` folder to `app` folder. make sure you have those file inside `config` folder.

### WINDOWS

1. Open your `Command Prompt` or `Power Shell`.
2. Clone project repository
   ```
   git clone https://github.com/Rambeboy/vooi-app.git
   ```
   and cd to project dir
   ```
   cd vooi-app
   ```
3. Run
   ```
   npm instal
   ```
4. Run
   ```
   npm i telegram@2.22.2
   ```
5. Navigate to `vooi-app` directory
   ```cd vooi-bot```
7. Make new folder named `accounts`.
   ```mkdir accounts```
9. Copy file `config.js` and `proxy_list.js`
   ```copy config\config_tmp.js config\config.js  && config\proxy_list_tmp.js config\proxy_list.js```
10. Now Open and configure `config.js` & `proxy_list.js` (if use proxies)
    ```notepad config\config.js``` to setting config
    ```notepad config\proxy_list.js``` to add proxies
    you can also use notepad (right click => open with .. => select `Notepad`)
12. To start the app open your `Command Prompt` or `Power Shell` again and run
    ```
    npm run start
    ```
    if an error occurs, use
    ```node app\index.js```

---

## UPDATE BOT

To update bot follow this step :

1. run
   ```
   git pull
   ```
   or
   ```
   git pull --rebase
   ```
   if error run
   ```
   git stash && git pull
   ```
2. run
   ```
   npm update
   ```
3. start the bot.


---

## SETUP ACCOUNTS

1. Run bot `npm run start`
2. Choose option `1` to create account
3. Choose account type `Query` or `Sessions`
4. `Session` Type
- Enter Account Name
- Enter your phone number starting with countrycode ex : `+628xxxxxxxx`
- You will be asked for verification code and password (if any)
- Start The bot Again after account creation complete
5. `Query` Type
- Enter Account Name
- Enter Telegram Query (you can get query by opening bot app on browser > inspect element > storage / application > session storage > telegram init params > copy tg web app data value)
- Start The bot Again after account creation complete
6. after bot started choose option 3 start bot

## SESSION TROUBLESHOOT

If you asked to enter phone number again after sessions creation, it mean session not initialized correctly, try to delete the created sessions.

Example Case

- example you already have 1 session (sessionA) and all good when you run bot. After that you create another session, but when you run bot, the bot asked to enter phone number again, so the problem is on (sessionB), to fix it just remove the `accounts/sessionB` folder and re create it or just delete all folder inside `accounts` directory with prefix `sessions-`.

## QUERY TROUBLESHOOT

if your bot get eror, with some error code `401` it mean your query expired, go get new query and run bot again and choose option `4` for query modification.

---

## NOTE

Config files is adjustable, modify the `config/config.js`, there some adjustable parameter 
```js
static AUTOPLAYTAPCOUNT = 10; // COUNT OF AUTOPLAY
```

Don't use bot with `session` type if you using telegram account that bought from someone because it can make your telegram account deleted. instead of using `session` type, use `query` type.

This bot can use Telegram Query and Telegram Sessions. if you want to use sessions, and ever use one of my bot that use telegram sessions, you can just copy the `accounts` folder to this bot. Also for the telegram APP ID and Hash you can use it from another bot. If you want to use Telegram Query, get your query manually.

if you got error `Invalid ConstructorId` try to run this `npm i telegram@2.22.2`

---
