// ==UserScript==
// @name         自动登录校园网络
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://eportal.jxust.edu.cn/1.htm*
// @match        http://eportal.jxust.edu.cn/a79.htm*
// @match        http://10.17.8.18/a79.htm*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jxust.edu.cn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function(){
    // Your code here...
    let usernameInput = document.querySelector("#edit_body > div:nth-child(3) > div.edit_cell.edit_moreTabs.ui-resizable-autohide > div > div.mt_body > div:nth-child(1) > div > form > input:nth-child(4)");
    let passwordInput = document.querySelector("#edit_body > div:nth-child(3) > div.edit_cell.edit_moreTabs.ui-resizable-autohide > div > div.mt_body > div:nth-child(1) > div > form > input:nth-child(5)");
    let savePasswordInput = document.querySelector("#edit_body > div:nth-child(3) > div.edit_cell.edit_moreTabs.ui-resizable-autohide > div > div.mt_body > div:nth-child(1) > div > form > input.edit_lobo_cell.draggable");
    let yidongInput = document.querySelector("#edit_body > div:nth-child(3) > div.edit_cell.edit_moreTabs.ui-resizable-autohide > div > div.mt_body > div:nth-child(1) > div > div.edit_lobo_cell.edit_radio > span:nth-child(4) > input");
    let submitInput = document.querySelector("#edit_body > div:nth-child(3) > div.edit_cell.edit_moreTabs.ui-resizable-autohide > div > div.mt_body > div:nth-child(1) > div > form > input:nth-child(2)");

    if(usernameInput&&passwordInput&&savePasswordInput&&yidongInput&&submitInput){
        // 你的用户名
        usernameInput.value = "";
        passwordInput.value = "";
        // 密码
        let clickQueue = [savePasswordInput,yidongInput,submitInput]
        clickQueue.forEach((el)=>{
            el.click();
        })

    }else {
        console.log(usernameInput,passwordInput,savePasswordInput,yidongInput,submitInput)
        //alert("元素已更新，需要更改脚本")
    }}
})();
