# This example is to be used with the [Browserless template](https://railway.app/template/browserless)

Create a reference variable on your Railway service that you deploy your app to

```shell
BROWSER_WS_ENDPOINT=${{Browserless.BROWSER_WS_ENDPOINT}}
```

</br>

Then use `process.env.BROWSER_WS_ENDPOINT` in code

### Before

```javascript
const browser = await puppeteer.launch();
```

### After

```javascript
const browser = await puppeteer.connect({ browserWSEndpoint: process.env.BROWSER_WS_ENDPOINT });
```

The rest of your JS/TS code remains the same with no other changes required.

## How to avoid installing Chrome / Chromium (and accompanying dependencies) into your container

- Switch the `puppeteer` dependency out for `puppeteer-core`

    - `npm uninstall puppeteer` -> `npm install puppeteer-core`

    - `puppeteer-core` will not auto install Chrome or Chromium

- Use this repositories [`nixpacks.toml`](https://github.com/brody192/puppeteer-example/blob/main/nixpacks.toml) file in your project

    - The empty `aptPkgs` array will prevent Railway from installing the now unwanted Chrome dependencies
