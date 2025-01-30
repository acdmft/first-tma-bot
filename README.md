# Back-end bot for TMA

## Description
**Based on this tutorial:** [Building a telegram mini app (@tanguyvans)](https://medium.com/@tanguyvans/building-a-telegram-mini-app-a-step-by-step-guide-d921d2e23442) <br />
| > Create tasks in telegram group. Bot will record it in firebase database.

## Commands 
Project is deployed on **firebase.**

```
# deploy changes on the firebase 
firebase deploy --only functions
# set a webhook with telegram BotFather 
curl -F "url=<YOUR_FIREBASE_FUNCTIONS_URL>" https://api.telegram.org/bot**<YOUR_BOT'S_API_KEY>**/setWebhook
```

## Example .env
```
BOT_TOKEN=bot_api_token_from_bot_father
WEBAPP_URL=https://your_twa_url.tld
```

