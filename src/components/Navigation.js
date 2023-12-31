import { ethers } from 'ethers';
import logo from '../assets/logo.svg';

const Navigation = ({ account, setAccount }) => {
    const connectHandler = async () => {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = ethers.utils.getAddress(accounts[0]);
            setAccount(account);
        } catch (error) {
            if (error.code === 4001) {
                // Handle the "User rejected the request" error
                console.error("Connection request rejected by the user.");
            } else {
                console.error("An error occurred: " + error.message);
            }
        }
    }

    return (
        <nav>
            <ul className='nav__links'>

            </ul>

            <div className='nav__brand'>
                <img src={logo} alt="Logo" />
                <h1>KIN HOMES</h1>
            </div>

            {account ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Connect
                </button>
            )}
        </nav>
    );
}

export default Navigation;