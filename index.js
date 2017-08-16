const Gdax = require('gdax');
const slack = require('./slack');
const program = require('commander');
const publicClient = new Gdax.PublicClient('ETH-EUR');		// public API might cap at 100 requests/day

program
	.version('0.0.1')
	.usage('-c [ceiling] -f [floor]')
	.description('Description: Simple CLI for setting slack alerts for ether price on GDAX')
	.option('-c, --ceiling [ceiling]', 'Input high alert')
	.option('-f, --floor [floor]', 'Input low alert')
program.parse(process.argv);

slack(`set floor: €${program.floor}  and ceiling: €${program.ceiling}`);

let ticker = function(err, response, data) {
	console.log(data);

	if (data.price <= program.floor) {
	slack(`ETH:€${data.price}\nRecommendation: Buy`);
	} else if (data.price >= program.ceiling) {
	slack(`ETH:€${data.price}\nRecommendation: Sell`);
	}
}

let twenty_four = function(err, response, data) {
	console.log(data);

	if (data.last <= program.low) {
	slack(`ETH:€${data.last}\nRecommendation: Buy`);
	} else if (data.last >= program.low) {
	slack(`ETH:€${data.last}\nRecommendation: Sell`);
	}
}

publicClient.getProductTicker(ticker);

// publicClient.getProduct24HrStats(twenty_four);
