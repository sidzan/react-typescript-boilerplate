import * as React from 'react';
import './App.css';
import {renderRoutes} from "react-router-config";
import routes from "./routes/routes";

function App() {
    return (
        <div className="App">
            {renderRoutes(routes)}
        </div>
    );
}

export default App;
