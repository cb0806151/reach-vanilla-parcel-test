import 'regenerator-runtime/runtime'
import { getDefaultAccount, formatCurrency, balanceOf} from '@reach-sh/stdlib/ETH';

window.onload = async () => {

    let account;
    let balance;

    window.connectWallet = async () => {
        await getAccount();
        await getBalance();
    }

    const getAccount = async () => {
        account = await getDefaultAccount();
        console.log(account);
    }

    const getBalance = async () => {
        balance = formatCurrency(await balanceOf(account), 4);
        console.log(balance);
    }

}