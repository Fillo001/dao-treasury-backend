import { ethers } from "ethers";

export async function getTreasuryBalance() {
  try {
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
    const daoWallet = process.env.DAO_WALLET;

    const balance = await provider.getBalance(daoWallet);
    return ethers.formatEther(balance) + " ETH";
  } catch (error) {
    throw new Error("Blockchain fetch failed: " + error.message);
  }
}
