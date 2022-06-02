import './App.css';
import MainPage from "./components/MainPage";
import {Provider} from "react-redux";
import ReduxStore from "../src/services/store/ReduxStore"

function App() {
    return (
        <div className="App">
            <Provider store={ReduxStore}>
                <MainPage/>
            </Provider>
        </div>
    );
}

export default App;
