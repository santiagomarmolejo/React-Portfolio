import "./App.css";
import Header from "./components/Header.js"
import BigImage from "./components/BigImage";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";

function App() {
    return (
        <div>
            <Header/>
            <BigImage/>
            <AboutMe/>
            <MyWork/>
        </div>
    );
}

export default App;