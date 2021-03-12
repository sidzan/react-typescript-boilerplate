import * as React from 'react'
import {renderRoutes} from "react-router-config";
import {Link} from "react-router-dom";
import Loading from '../components/Loading'

// @ts-ignore
const DefaultLayout: React.FC = ({route}) => (
    <div>
        <h1>Root</h1>
        <ul style={{display: 'flex', justifyContent: 'space-around'}}>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/stars"}>Stars</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
        </ul>
        {/* child routes won't render without this */}
        <React.Suspense fallback={<div/>}>
            {renderRoutes(route.routes)}
        </React.Suspense>
    </div>
);

export default DefaultLayout
