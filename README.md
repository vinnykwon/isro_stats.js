# isro_stats.js
Web-API for [isrostats.in](https://isrostats.in) an API that provides a user-friendly, graphical interface to explore ISRO's Statistics, including launches, missions, satellite details, and much more

## Example
```JavaScript
async function main() {
	const { IsroStats } = require("./isro_stats.js");
	const isroStats = new IsroStats()
	const launches = await isroStats.getLaunches()
	console.log(launches)
}

main()
```
