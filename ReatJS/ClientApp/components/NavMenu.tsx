import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <nav className="navbar navbar-light bg-light" style={{
            color: "white",
            backgroundColor: "Lightgreen",
            padding: "15px",
            fontWeight: "bold",
            fontFamily: "Arial" }}>
            <span className="navbar-brand mb-0 ">Northwind Warehouse</span>
        </nav>;


                 
             }
         }
         