import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  & > ul {
    display: inline-block;
    padding-left: 0;
    border-radius: 4px; 
    user-select: none;
  }
  & > ul > li {
    display:inline;
  }
  & > ul > li > a {
    cursor: pointer;
  }
  & > ul > li > a, & > ul > li > span {
    outline: none;
    cursor: pointer;
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: inherit;
    text-decoration: none;
    background-color: white;
    border: 1px solid hsla(202,  20%, 86%, 1);
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 3px hsla(202,  81%, 86%, 1);
      border: 1px solid hsla(205,  79%, 66%, 1);
      z-index: 3;
    }
  }
  & > ul > li:first-child > a, & ul > li:first-child > span {
    margin-left: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  & > ul > li:last-child > a, & > ul > li:last-child > span {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  & > ul > .active > a,
  & > ul > .active > a:focus,
  & > ul > .active > a:hover,
  & > ul > .active > span,
  & > ul > .active > span:focus,
  & > ul > .active > span:hover {
    z-index: 2;
    color: white;
    cursor: default;
    background-color: hsla(207,  73%, 57%, 1);
    border-color: hsla(207,  73%, 57%, 1);
  }
  & > ul > .disabled > a,
  & > ul > .disabled > a:focus,
  & > ul > .disabled > a:hover,
  & > ul > .disabled > span,
  & > ul > .disabled > span:focus,
  & > ul > .disabled > span:hover {
    color: hsla(202,  20%, 86%, 1);
    cursor: not-allowed;
    background-color: white;
    border-color: hsla(202,  20%, 86%, 1);
  }
`
