import axios from "axios";
import chalk from "chalk";

// Get a list of all Supernodes that are currently marked as "Online"

async function app() {
  const getSupernodes = await axios
    .get(
      "https://raw.githubusercontent.com/mxc-foundation/supernode-list/master/supernode.json"
    )
    .then((response) => {
      let supernodeUrls = [];
      const array = Object.entries(response.data);
      array.forEach((resp) => {
        if (resp[1].status === "online" && resp[1].region !== "Test") {
          supernodeUrls.push(resp[1].url);
        }
      });
      return supernodeUrls;
    })
    .catch((error) => console.log(error));

  // Get the Gateway Location data from each Supernode
  const eachGatewayLocation = getSupernodes.map((supernode) => {
    return axios.get(`${supernode}/api/gateways-loc`);
  });

  const getData = await axios
    .all(eachGatewayLocation)
    .then((responses) => responses.map((resp) => resp.data.result || []))
    .catch(function (error) {
      console.log(error);
    });

  // Count the Gateway Locations to determine number of connected miners
  const result = getData.flat().length;

  console.log(
    chalk.blue("Currently Connected M2 Pro Miners: ") + chalk.red(result)
  );
}

app();
