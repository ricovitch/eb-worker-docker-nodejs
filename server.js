'use strict';

const express = require('express');
const winston = require('winston');

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

// log file on linux platforms
if (process.platform !== 'win32') {
	try {
		winston.add(new (winston.transports.File)({ filename: '/var/log/poc_nodejs/app.log' }));
	} catch (err) {
		winston.error('winston file transport error : ', err);
	}
}

// ROUTING
const app = express();
app.get('/', (req, res) => {
	winston.info('[GET]/');
	res.send('Server Running\n');
});
app.post('/', (req, res) => {
	winston.info('[POST]/');
	res.send('Message received\n');
});
app.post('/scheduled', (req, res) => {
	winston.info('[POST]/scheduled');
	res.send('Scheduled CRON done\n');
});

// START
app.listen(PORT, HOST);
winston.info('Running on http://%s:%s', HOST, PORT);