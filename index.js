const express = require('express');
const config = require('config');
const allLoaders = require('./loaders/index');

const app = express();

async function startServer(app) {
    await allLoaders({expressApp: app});

    await app.listen(process.env.PORT || config.PORT, err => {
        if (err) {
            console.log(`Error: ${err}`);
            process.exit(1);
            return;
        }
        if (config.util.getEnv('NODE_ENV') !== 'test') {
            console.log(`Server listening on port: ${config.PORT}`);
        }
    });

}

startServer(app);

module.exports = app;
