const connectMetamask = async (setCurrentAccount) => {
    try {
        const { ethereum } = window;
        if (!ethereum) {
          console.log("No metamask!");
          return;
        }
        if (!ethereum.isConnected()) {
          console.log("Metamask not conected!");
          return;
        }
        const chainId = await ethereum.request({ method: "eth_chainId" });
        if (chainId !== "0x1") {
          await ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x1" }],
          });
        }
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("Account: ", accounts[0]);
        setCurrentAccount(accounts[0]);
      } catch (error) {
        console.error(error);
      }
}

export default connectMetamask;