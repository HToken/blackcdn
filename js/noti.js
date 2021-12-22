d = new Date();
hours = d.getHours();
if(hours == 1)msg = "凌晨1点多了，小伙伴别熬坏身子！";
if(hours == 2)msg = "该休息了，身体可是革命的本钱啊！";
if(hours == 3)msg = "夜深了，熬夜很容易导致身体内分泌失调！";
if(hours == 4)msg = "四点过了额(⊙o⊙)…明天不学习工作吗？？";
if(hours == 5)msg = "此时是国内网络速度最快的时候！";
if(hours == 6)msg = "清晨好，这么早就来网站啦";
if(hours == 7)msg = "新的一天又开始了，祝你过得快乐";
if(hours == 8 || hours == 9 || hours == 10 )
msg = "已完成全站更新，敬请体验";
if(hours == 11)msg = "请记住本站网址 www.dikotv.com";
if(hours == 12)msg = "该吃午饭啦！有什么好吃的~";
if(hours == 13 || hours == 14)msg = "中午睡一觉，下午才有精气神";
if(hours == 15 || hours == 16 || hours == 17 )
msg = "请记住本站网址 www.dikotv.com";
if(hours == 18 || hours == 19)msg = "本站网址 dikotv.com 备用 dikotv1.com ";
if(hours == 20 || hours == 21 || hours == 22 )
msg = "请记住本站备用网址 www.dikotv1.com";
if(hours == 23)msg = "早点休息吧，明天见。_。";
if(hours == 0)msg = "早点休息吧，明天见。_。";
document.write("",msg);