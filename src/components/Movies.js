import React from "react";
import styled from "styled-components";
import {selectMovie} from "../store/slices/slice";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Movies = () => {
    const movies = useSelector(selectMovie)
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                {
                    !!movies.length && movies.map(({id, backgroundImg, cardImg}) => (
                        <Wrap key={id}>
                            <Link to={`/details/${id}`}>
                                <img
                                    src={backgroundImg}
                                    alt={cardImg}/>
                            </Link>
                        </Wrap>
                    ))
                }
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

`;

const Wrap = styled.div`
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
`;

