import { keyframes } from '@mantine/core';

export const fadefromtop = keyframes({
    '0% ':  {opacity: 0,  top: '-64px'},
    '100%': {opacity: 1,  top: '0'}
})

export const fadefromleft = keyframes({
    '0% ':  {opacity: 0,  top: '-64px'},
    '100%': {opacity: 1,  top: '0'}
})

export const fadefromright = keyframes({
    '0% ':  {opacity: 0,  top: '-64px'},
    '100%': {opacity: 1,  top: '0'}
})

export const fadefrombottom = keyframes({
    '0% ':  {opacity: 0,  top: '64px'},
    '100%': {opacity: 1,  top: '0'}
})



// @keyframes fade-from-top {
//     0%   {opacity: 0;  top:-30px;}
//     50%  {opacity: 0.3;}
//     100% {opacity: 1;  top:0px;}
//       }
  
//       @keyframes fade-from-left {
//     0%   {opacity: 0; left: -30px;}
//     50%  {opacity: 0.3;}
//     100% {opacity: 1; left:0px;}
//       }
  
//       @keyframes fade-from-right {
//     0%   {opacity: 0; left: 30px; }
//     50%  {opacity: 0.3;}
//     100% {opacity: 1; left:0px;}
//       }
  
//       @keyframes fade-from-bottom {
//     0%   {opacity: 0; top: 30px; }
//     50%  {opacity: 0.3;}
//     100% {opacity: 1; top:0px;}
//       }