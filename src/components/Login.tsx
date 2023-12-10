import React from "react";
import cssStyles from "../styles/styles";
import {Link} from "react-router-dom";

const { login} = cssStyles;
const Login = () => {
    return (
        <login.Container>
            <login.Content>
                <login.Cta>
                    <login.CtaLogoOne src="/images/cta-logo-one.svg"/>
                    <Link to="/home">
                        <login.SignUp>
                            GET ALL THERE
                        </login.SignUp>
                    </Link>
                    <login.Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee
                        with a Disney+ subscription. As of 01/12/23, the price of Disney+
                        and The Disney Bundle will increase by $1.
                    </login.Description>
                    <login.CtaLogoTwo src="/images/cta-logo-two.png"/>
                </login.Cta>
                <login.BgImage/>
            </login.Content>
        </login.Container>
    )
};
export default Login;





