# Speak With Eliza

Talk with Eliza physiotherapist bot using speech recognition via Google Speech API and the default text to speech on your computer.  This is just a demonstration of an AI being simplified two 4 Node.js modules.

Your voice --> mic-to-speech --> google-speech-from-buffer --> eliza-as-pomised --> say --> your ears -->  repeat

## Installation Mac

Audio recorder: `brew install sox`

## Installation Linux/Raspberry Pi

sudo apt-get install sox libsox-fmt-all

## How to run

Set your google service key and project environment variables.  ( https://console.cloud.google.com/apis/credentials )

```sh
export GOOGLE_APPLICATION_CREDENTIALS=[Path to service account key json file]
```

Start your therapy session
```sh
npm install
npm start
```

For a detailed walk through of how this works read this blog post:
http://www.natelewis.net/2017/08/speech-enabled-ai-conversations-with.html
