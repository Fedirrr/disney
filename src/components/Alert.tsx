import React from "react";
import {Link} from "react-router-dom";
import cssStyles from "../styles/styles";

const {alert} = cssStyles
function Alert() {

    return (
        <alert.PopUp>
            <alert.PopUpInner>
                Movie is not found
                <Link to={"/home"}>
                    <alert.PopUpClose>x</alert.PopUpClose>
                </Link>
            </alert.PopUpInner>
        </alert.PopUp>
    )
}

export default Alert

