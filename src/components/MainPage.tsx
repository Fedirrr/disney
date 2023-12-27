import React from "react";
import cssStyles from "../styles/styles";
import {Link} from "react-router-dom";
const { mainPage} = cssStyles;
const MainPage = () => {
    return (
        <mainPage.Container>
            <mainPage.Content>
                <mainPage.Cta>
                    <mainPage.CtaLogoOne src="/images/cta-logo-one.svg"/>
                    <Link to="/home">
                        <mainPage.SignUp>
                            GET ALL THERE
                        </mainPage.SignUp>
                    </Link>
                    <mainPage.Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee
                        with a Disney+ subscription. As of 01/12/23, the price of Disney+
                        and The Disney Bundle will increase by $1.
                    </mainPage.Description>
                    <mainPage.CtaLogoTwo src="/images/cta-logo-two.png"/>
                </mainPage.Cta>
                <mainPage.BgImage/>
            </mainPage.Content>
        </mainPage.Container>
    )
};
export default MainPage;





