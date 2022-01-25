import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Balance from "./components/Balance";
import AccountSumary from "./components/AccountSumary";
import History from "./components/History";
import AddNew from "./components/AddNew";
import {GlobalContext, GlobalProvider} from "./context/GlobalState";

function App() {
    return (
        <GlobalProvider >
            <div className="App">
                <Header/>
                <hr/>
                <Balance/>
                <hr/>
                <AccountSumary/>
                <hr/>
                <History/>
                <hr/>
                <AddNew/>
                <hr/>
            </div>
        </GlobalProvider>
    );
}

export default App;
