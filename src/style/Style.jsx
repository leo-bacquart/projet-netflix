import styled, {createGlobalStyle} from "styled-components";

export const HeaderWrapper = styled.div`
    display: flex;
    height: 70px;


    nav {
      display: flex;
      margin: auto 0px;
  
    }


    img{
      width: 100px;
      height: 70px;
      margin-right: 20px;
    }

`

export const HeaderUl = styled.ul`
   display: flex;

`

export const HeaderLi = styled.li`
    margin: auto 10px;

    a {
      color: black;
      text-decoration : none;
    }

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
<<<<<<< Updated upstream
=======
`


export const Footer = styled.footer`

.liste1{
  display:flex;
}
    
>>>>>>> Stashed changes
`