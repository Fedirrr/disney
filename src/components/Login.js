import React from "react";
import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Content>
                <Cta>
                    <CtaLogoOne src='/images/cta-logo-one.svg' alt=''/>
                    <SignUp>
                        <a href="/home">
                            GET ALL THERE
                        </a>
                    </SignUp>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee
                        with a Disney+ subscription. As of 01/12/23, the price of Disney+
                        and The Disney Bundle will increase by $1.
                    </Description>
                    <CtaLogoTwo src='/images/cta-logo-two.png' alt=''/>

                </Cta>
                <BgImage/>
            </Content>
        </Container>
    )
}
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`
const Content = styled.div`
  margin-bottom: 10vh;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  height: 100%;
`
const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-image: url("/images/login-background.jpg");
`
const Cta = styled.div`

  max-width: 650px;
  display: flex;
  width: 100%;
  flex-direction: column;

`
const CtaLogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-width: 1px;
  display: block;
  width: 100%;
`
const CtaLogoTwo = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-width: 1px;
  display: block;
  width: 100%;
`
const SignUp = styled.div`
  cursor: pointer;
  font-weight: bold;
  color: #f9f9f9;
  margin-bottom: 12px;
  width: 100%;
  background-color: #0063e5;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`
const Description = styled.p`
  font-size: 14px;
  letter-spacing: 1.5px;
  margin: 0 0 24px;
  line-height: 1.5;
`
export default Login