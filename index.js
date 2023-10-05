setInterval(()=>{
    dat=new Date();
    htime=dat.getHours();
    mtime=dat.getMinutes();
    stime=dat.getSeconds();
    hrotation=30*htime + mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;
    hours.style.transform=`rotate(${hrotation}deg)`;
    
    minutes.style.transform=`rotate(${mrotation}deg)`;
    
    second.style.transform=`rotate(${srotation}deg)`;
},1000);