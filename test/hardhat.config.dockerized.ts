import "@shardlabs/starknet-hardhat-plugin";
import { spawnSync } from "child_process";

// position to project root because that's where get_version.sh should be called from
const originalCwd = process.cwd();
process.chdir("..");
const executed = spawnSync("scripts/get_version.sh", ["cairo-lang"]);
const cairoLangVersion = executed.stdout.toString().trim();
process.chdir(originalCwd);

module.exports = {
    starknet: {
        dockerizedVersion: cairoLangVersion,
        network: "devnet",
        wallets: {
          OpenZeppelin: {
            accountName: "OpenZeppelin",
            modulePath: "starkware.starknet.wallets.open_zeppelin.OpenZeppelinAccount",
            accountPath: "~/.starknet_accounts"
          }
        }
    },
    networks: {
        devnet: {
            url: "http://localhost:5000"
        }
    }
}