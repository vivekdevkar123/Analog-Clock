setInterval(() => {
    var d = new Date();
    var htime = d.getHours();
    var mtime = d.getMinutes();
    var stime = d.getSeconds();

    hrotation = 30 * htime + mtime / 2
    mrotation = 6 * mtime
    srotation = 6 * stime

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`
}, 1000);