import{m as s}from"./index-zbuosgjY.js";const r=a=>s({method:"post",url:"/staff/setData",data:a}),d=(a,t)=>{const o=new FormData;return o.append("avatar",a),o.append("ID_card_num",t),s({method:"post",url:"/uploadUrl/single",headers:{"Content-Type":"multipart/form-data"},name:"avatar",data:o})},m=(a,t)=>s({method:"post",url:"/staff/grade",data:{data:a,idNum:t}});export{m as a,r as s,d as u};