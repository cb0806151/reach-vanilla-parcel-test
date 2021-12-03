import { loadStdlib } from "@reach-sh/stdlib";
const reach = loadStdlib('ALGO')

window.onload = async () => {

    let account
    let balance

    window.connectWallet = async () => {
        await getAccount()
        await getBalance()
    }

    window.fundWallet = async () => {
        let fundAmount = document.getElementById("fundAmountInput").value
        await reach.fundFromFaucet(account, reach.parseCurrency(fundAmount))
        await getBalance()
    }

    const getAccount = async () => {
        account = await reach.createAccount()
        console.log(account)
    }

    const getBalance = async () => {
        let rawBalance = await reach.balanceOf(account)
        balance = reach.formatCurrency(rawBalance, 4)
        console.log(balance)
    }
}