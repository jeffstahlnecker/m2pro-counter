# M2 Pro Counter

_Your quick tool to see how many M2 Pros are currently online_

This is a simple tool that will tell you exactly how many M2 Pro miner are currently online. To accomplish this, this tool uses the "gateways-loc" API on each online supernode. You can check the Supernode API documentation to learn more about this API by adding `/api` to the end of any Supernode URL.

This tool also pulls the current list of all online supernodes, removing any in the region `test`.

## How to use this tool

Before using this tool, you need to have Node installed on your computer.

If you have a Mac computer, you can use Homebrew to install node. Do a search for "how to install homebrew" and then "how to install node" for instructions.

After cloning this tool to your local computer, run `npm start`.

You will see an output in the terminal like this:
`Currently Connected M2 Pro Miners: 21084`
