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
      text-decoration : none;
    }

`