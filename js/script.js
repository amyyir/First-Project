navigator.getBattery().then((res)=>{
    console.log(res);
    let batteryLevell=res.level*100+'%'
    console.log(batteryLevell);
})