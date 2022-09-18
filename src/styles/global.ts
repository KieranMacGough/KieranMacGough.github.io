import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
   @keyframes fade-from-top {
  0%   {opacity: 0;  top:-30px;}
  50%  {opacity: 0.3;}
  100% {opacity: 1;  top:0px;}
    }

    @keyframes fade-from-left {
  0%   {opacity: 0; left: -30px;}
  50%  {opacity: 0.3;}
  100% {opacity: 1; left:0px;}
    }

    @keyframes fade-from-right {
  0%   {opacity: 0; left: 30px; }
  50%  {opacity: 0.3;}
  100% {opacity: 1; left:0px;}
    }

    @keyframes fade-from-bottom {
  0%   {opacity: 0; top: 30px; }
  50%  {opacity: 0.3;}
  100% {opacity: 1; top:0px;}
    }

   
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif; 
       color: #ccc;
   }

   #root{
       margin:0 auto;
   }

   html, body {
    overflow-x: hidden;
   }
   body {
       background: #13262F;
       position: relative;
       width: 100%;
       -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
        box-sizing: border-box;
   }

   a, p {
    font-size: 16px;
    font-weight: 600;
    &:link, &:visited {
        display: inline-block;
        position: relative;
        padding: 0.2em 0;
        text-decoration: none;
        color: orange;
    }
    &:link::after,
    &:visited::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.1em;
        background-color: orange;
        opacity: 1;
        transition: opacity 300ms, transform 300ms;
        transform: scale(0);
        transform-origin: center;
    }
    &:link:hover::after, 
    &:link:focus::after,
    &:visited:hover::after,
    &:visited:hover::after {
        opacity: 1;
	    transform: translate3d(0, 0.2em, 0);
      transform: scale(1);
    }


   }

   button {
    background: #13262F;
    font-weight: 600;
    font-size: 22px;
    border-radius: 8px;
    border: solid 3px orange;
    padding: 2px;
    cursor: pointer;
    color: orange;
    &:hover {
        background-color: #20404F;
        transition: background-color 500ms linear;
    }
   }
`

// #FF7F00 -- Orange
// #EDFFEC -- Honeydew
// #5B9279 -- Illuminating Emerald
// #376E87 -- Teal Blue
// #13262F -- Gunmetal