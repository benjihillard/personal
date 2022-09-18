import { Fragment } from "react";
import "./RollingBox.scss";

export function RollingBox() {
    return (
        <div className="container">
            <div className="one">
                <div className="yeet">
                    <h1>One</h1>
                </div>
            </div>
            <div className="two">
                <div className="yeet">
                    <h1>Two</h1>
                </div>
            </div>
            <div className="three">
                <div className="yeet">
                    <h1>Three</h1>
                </div>
            </div>
            <div className="four">
                <div className="yeet">
                    <h1>Four</h1>
                </div>
            </div>
            <div className="five">
                <div className="yeet">
                    <h1>Five</h1>
                </div>
            </div>
        </div>
    )
}