const express =  require('express');
const config = require('./config');
const allLoaders = require('./loaders/index');

async function startServer() {
    const app = express();

    await allLoaders({expressApp: app});

    app.listen(process.env.PORT || config.PORT, err => {
        if (err) {
            console.log(`Error: ${err}`);
            process.exit(1);
            return;
        }

        console.log(`Server listening on port: ${config.PORT}`);
    });
}

startServer();
