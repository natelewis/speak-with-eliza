# Speak With Eliza

Talk with Eliza physiotherapist bot using speech recognition via Google Speach API and the default text to speech on your computer.  This is just a demonstration of an AI being simplified two 4 Node.js modules.

Your voice --> mic-to-speech --> google-speech-from-buffer --> eliza-as-pomised --> say --> repeat

## Installation Mac

1. Install dependencies: `npm install`
2. Audio recorder: `brew install sox`

## Installation Linux/Raspberry Pi

1. sudo apt-get install sox libsox-fmt-all

## How to run

Set your google service key and project environment variables.  Can be created here with your GCP project https://console.cloud.google.com/apis/credentials

```sh
export GOOGLE_APPLICATION_CREDENTIALS=[Path to service account key json file]
```

Start your therapy session 
```sh
npm start
```
