# This example is to be used with the [Browserless template](https://railway.app/template/browserless)

Create a reference variable on your service

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

The rest of your code remains the same with no other changes required.