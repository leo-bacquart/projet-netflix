import styled, {createGlobalStyle} from "styled-components";
export const HeaderLi = styled.li`
    color: white;
`

export const HeaderWrapper = styled.div`
    background: black;
`

export const Carousel = styled.ul`
  gap:10px;       //  espace entre les images
  display: flex;
  overflow-x: scroll;
`

export const MoviePoster = styled.li`
  scale: 1;
  height: 100%;
  
  &:hover {
    scale: (1.08);
    cursor: pointer;
  }
`