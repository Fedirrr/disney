import styled from "styled-components";

const cssStyles = {
    details: {
        Container: styled.div`
          min-height: calc(100vh - 70px);
          padding: 70px calc(3.5vw + 5px);
          position: relative;
        `,
        Background: styled.div`
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          z-index: -1;
          opacity: 0.8;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `, ImageTitle: styled.div`
        height: 30vh;
        min-height: 170px;
        width: 35vw;
        min-width: 200px;
        margin-top: 60px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        `, Controls: styled.div`
        display: flex;
        align-items: center;
        `, PlayButton: styled.button`
        border-radius: 4px;
        font-size: 15px;
        padding: 0 24px;
        margin-right: 22px;
        display: flex;
        align-items: center;
        height: 56px;
        background-color: rgb(249, 249, 249);
        border: none;
        letter-spacing: 1.8px;
        cursor: pointer;

        &:hover {
          background: rgb(198, 198, 198);
        }
        `, TrailerButton: styled.button`
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgb(249, 249, 249);
        color: rgb(249, 249, 249);
        text-transform: uppercase;
        border-radius: 4px;
        font-size: 15px;
        padding: 0 24px;
        margin-right: 22px;
        display: flex;
        align-items: center;
        height: 56px;
        letter-spacing: 1.8px;
        cursor: pointer;

        &:hover {
          background: rgb(198, 198, 198);
        }
        `, AddButton: styled.button`
        margin-right: 16px;
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 2px solid white;
        background-color: rgba(0, 0, 0, 0.6);
        cursor: pointer;

        span {
          font-size: 30px;
          color: white;
        }
        `, GroupWatchButton: styled.button`
        margin-right: 16px;
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 2px solid white;
        cursor: pointer;

        span {
          font-size: 30px;
          color: white;
        }

        background: rgb(0, 0, 0);
        `, SubTitle: styled.div`
        color: rgb(249, 249, 249);
        font-size: 15px;
        min-height: 20px;
        margin-top: 26px;
        `, Description: styled.div`
        line-height: 1.4;
        font-size: 20px;
        margin-top: 16px;
        color: rgb(249, 249, 249);
        max-width: 760px;
        `,
    },
    header: {
        Form: styled.div`
          width: 100%;
          display: contents;
        `,
        FormBtn: styled.button`
          margin-left: 10px;
          height: 50%;
          border-radius: 4px;
          width: 4%;
          outline: none;
          border: none;
        `,
        NavBar: styled.nav`
          margin-bottom: 1000px;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 70px;
          background-color: #090b13;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 36px;
          letter-spacing: 16px;
          z-index: 3;
        `, NavImg: styled.div`
        padding: 0;
        width: 80px;
        margin-top: 4px;
        max-height: 70px;
        font-size: 0;
        display: inline-block;

        img {
          display: block;
          width: 100%;
        }
        `, NavMenu: styled.div`
        align-items: center;
        display: flex;
        flex-flow: row nowrap;
        height: 100%;
        justify-content: flex-end;
        padding: 0;
        position: relative;
        margin-right: auto;
        margin-left: 25px;

        a {
          display: flex;
          align-items: center;
          padding: 0 12px;

          img {
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
          }

          span {
            color: rgb(249, 249, 249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;

            &:before {
              background-color: rgb(249, 249, 249);
              border-radius: 0px 0px 4px 4px;
              bottom: -6px;
              content: "";
              height: 2px;
              left: 0px;
              opacity: 0;
              position: absolute;
              right: 0px;
              transform-origin: left center;
              transform: scaleX(0);
              transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
              visibility: hidden;
              width: auto;
            }
          }

          &:hover {
            span:before {
              transform: scaleX(1);
              visibility: visible;
              opacity: 1 !important;
            }
          }
        }
        `,
        Search: styled.input`
          border: none;
          outline: none;
          height: 50%;
          width: 20%;
          padding: 10px;
          border-radius: 5px;
          background-color: lightgrey;
          color: #040714;
        `
    },
    home: {
        Container: styled.main`
          position: relative;
          min-height: calc(100vh - 70px);
          height: 100%;
          padding: 70px calc(3.5vw + 5px);
          color: white;
          overflow-x: hidden;

          &:before {
            background: url("/images/home-background.png") center center / cover no-repeat fixed;
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
          }
        `
    },
    login: {
        Container: styled.section`
          overflow: hidden;
          display: flex;
          flex-direction: column;
          text-align: center;
          height: 100vh;
        `,
        Content: styled.div`
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
        `,
        BgImage: styled.div`
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
        `,
        Cta: styled.div`
          max-width: 650px;
          display: flex;
          width: 100%;
          flex-direction: column;
        `,
        CtaLogoOne: styled.img`
          margin-bottom: 12px;
          max-width: 600px;
          min-width: 1px;
          display: block;
          width: 100%;
        `,
        CtaLogoTwo: styled.img`
          margin-bottom: 12px;
          max-width: 600px;
          min-width: 1px;
          display: block;
          width: 100%;
        `, SignUp: styled.div`
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
        `,
        Description: styled.p`
          font-size: 14px;
          letter-spacing: 1.5px;
          margin: 0 0 24px;
          line-height: 1.5;
        `
    },
    movie: {

        Container: styled.div`
          min-height: calc(100vh - 70px);
          padding: 100px calc(3.5vw + 5px);
          position: relative;
        `,
        ContentBlock: styled.div`
          padding: 100px 50px;
          display: grid;
          grid-gap: 25px;
          grid-template-columns: repeat(4, minmax(0, 1fr));

        `,
        Content: styled.div`
          display: grid;
          grid-gap: 25px;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        `,
        Wrap: styled.div`
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          border: 3px solid rgba(249, 249, 249, 0.1);
          box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
          rgb(0 0 0 / 73%) 0px 16px 10px -10px;
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          &:hover {
            transform: scale(1.05);
            box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
            border-color: rgba(249, 249, 249, 0.9);
          }
        `
    },
    viewers: {
        Container: styled.div`
          margin-top: 30px;
          padding: 30px 0px 26px;
          display: grid;
          grid-gap: 25px;
          gap: 25px;
          grid-template-columns: repeat(5, minmax(0, 1fr));

          @media (max-width: 768px) {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
        `,
        Wrap: styled.div`
          padding-top: 56.25%;
          border-radius: 10px;
          box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
          rgb(0 0 0 / 73%) 0px 16px 10px -10px;
          cursor: pointer;
          overflow: hidden;
          position: relative;
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          border: 3px solid rgba(249, 249, 249, 0.1);

          img {
            inset: 0;
            display: block;
            height: 100%;
            object-fit: cover;
            opacity: 1;
            position: absolute;
            transition: opacity 500ms ease-in-out 0s;
            width: 100%;
            z-index: 1;
            top: 0;
          }

          video {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            opacity: 0;
            z-index: 0;
          }

          &:hover {
            box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;

            transform: scale(1.05);
            border-color: rgba(249, 249, 249, 0.8);

            video {
              opacity: 1;
            }
          }
        `
    },
    alert: {
        PopUp: styled.div`
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.2);
          display: flex;
          justify-content: center;
          align-items: center;
        `,
        PopUpInner: styled.div`
          color: black;
          position: relative;
          padding: 30px;
          width: 100%;
          max-width: 650px;
          background-color: #fff;
        `,
        PopUpClose: styled.button`
          border: 1px solid;
          position: absolute;
          top: 16px;
          right: 16px;
        `
    },
    watchList: {
        Container: styled.div`
          min-height: calc(100vh - 70px);
          padding: 70px calc(3.5vw + 5px);
          position: relative;
        `,

    },
    modal: {
        Background: styled.div`
          width: 100%;
          height: 100%;
          background-color: rgb(0 0 0 / 80%);
          position: fixed;
          top: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        `,
        Container: styled.div`
          width: 60%;
          height: 55%;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          padding: 25px;
        `,
        Title: styled.div`
          display: flex;
          justify-content: space-between;
          padding: 0 5px;
        `,
        TitleBtn:styled.button`
          background-color: transparent;
          color: whitesmoke;
          border: none;
          font-size: 25px;
          cursor: pointer;
        `,
    }

}

export default cssStyles;

