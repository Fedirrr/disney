import React from "react";
import cssStyles from "../styles/styles";

const {login} = cssStyles
const Login = () => {
    return (
        <login.Container>
            <login.Content>
                <login.Cta>
                    <login.CtaLogoOne src='/images/cta-logo-one.svg' alt=''/>
                    <login.SignUp>
                        <a href="/home">
                            GET ALL THERE
                        </a>
                    </login.SignUp>
                    <login.Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee
                        with a Disney+ subscription. As of 01/12/23, the price of Disney+
                        and The Disney Bundle will increase by $1.
                    </login.Description>
                    <login.CtaLogoTwo src='/images/cta-logo-two.png' alt=''/>

                </login.Cta>
                <login.BgImage/>
            </login.Content>
        </login.Container>
    )
};

export default Login;





