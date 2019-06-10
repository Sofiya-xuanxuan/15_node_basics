//内置模块
const os=require('os');
const util=require('util');
const mem=os.freemem()/os.totalmem()*100;
console.log(`内存占用率${mem}%`);

//第三方模块
const cpuStat=require('cpu-stat');
const getCpu=util.promisify(cpuStat.usagePercent);
getCpu().then(percent=>{
    console.log(`CPU占用率${percent.toFixed(2)}`);
});

const showStat=async ()=>{
    const mem=os.freemem()/os.totalmem()*100;
    const percent=await getCpu();
    console.log(`CPU占用：${percent}，内存占用${mem}`);
};

//导出两种方式
module.exports={showStat};
//module.exports.showStat=showStat;

