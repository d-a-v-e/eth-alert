# eth_alert
slack alerts for price of Ethereum on GDAX exchange

![ethereum](https://cloud.githubusercontent.com/assets/17755587/26422284/0ebae216-407e-11e7-8b4e-c3380f5ca461.png) ![plus](https://cloud.githubusercontent.com/assets/17755587/26422342/4b342e28-407e-11e7-8a58-4f507a61e429.png) ![slack](https://cloud.githubusercontent.com/assets/17755587/26422304/1d4ce43c-407e-11e7-946b-601ec0141242.png)


### installation

install using node package manager

https://www.npmjs.com/package/eth-alert
```bash
$ npm install eth-alert
```

or clone repository
```bash
$ git clone https://github.com/waymobetta/eth-alert.git
$ npm install
$ update config.json with credentials
```

### usage

Example: _single usage_ (single alert if price rises higher than 210 or falls below 200)
```bash
$ node index.js -c 242 -f 241
```

Example: _cronjob to watch price/run every 30 seconds_ (recurring alert if price rises higher than 210 or falls below 200)
```bash
$ watch -n 30 node index.js -c 210 -f 200
```

### resources
Slack API: https://api.slack.com/
GDAX API: https://docs.gdax.com/

### license
MIT
