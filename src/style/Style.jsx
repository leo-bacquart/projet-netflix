import styled, {createGlobalStyle} from "styled-components";
export const HeaderLi = styled.li`
    color: white;
`

export const HeaderWrapper = styled.div`
    background: black;
    padding: 10px;
`

export const CarouselWrapper = styled.div`
    height: 300px;
  
  h2 {
    height: 10%;
    display: flex;
    align-items: end;
    margin-left: 10px;
  }
  
  ul {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    height: 90%;
  }
  
  li {
    height: 100%;
    img {
      height: calc(100% - 20px);
      padding: 10px;
    }
  }
`

export const MoviePoster = styled.li`
  height: 100%;
  
  img {
    margin: 10px;
    height: 100%;
    
    &:hover {
      scale: 1.1;
    }
  }
  
  &:hover {
    scale: (1.08);
    cursor: pointer;
  }
`