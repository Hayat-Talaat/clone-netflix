import styled from "styled-components/macro";

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  flex-direction: ${({ direction }) => direction};
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Container = styled.div``;

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  overflow: hidden;
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    text-align: center;
    padding: 0 45px;
  }
`;

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;

  @media only screen and (min-width: 550px) and (max-width: 949px) {
    font-size: 2.5rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.625rem;
  font-weight: 400;

  @media only screen and (min-width: 550px) and (max-width: 949px) {
    font-size: 1.25rem;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border: 0;
`;
