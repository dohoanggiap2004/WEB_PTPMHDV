const {format} = require('date-fns')
const {v4: uuid} = require('uuid')

const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;


const  logEvents = async (message, logName) => {
    const dateTime = format(new Date(), 'yyyy-MM-dd/hh:mm:ss');
    const logItem = `${dateTime}\t\t${uuid()}\t\t${message}\n`;

    try {
        if(!fs.existsSync(path.join(__dirname,'..' ,'logs'))) {
            await fsPromises.mkdir(path.join(__dirname,'..' ,'logs'));
        }

        await fsPromises.appendFile(path.join(__dirname,'..' ,'logs', logName), logItem);
    }catch(err) {
        console.error(err);
    }
}


const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.headers.origin}\t ${req.path}`, 'reqLog.txt')
    console.log(`${req.method}\t ${req.path}`);
    next();
}

module.exports = {logger, logEvents};