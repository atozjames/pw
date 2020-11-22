var push = require('web-push')

//let vapidKeys = push.generateVAPIDKeys();

let vapidKeys ={
    publicKey: 'BHLQJu9ryIRjmD_jQdUt_SooMo7WzymUIsKArlSRsuR9A6dVsD3RtvTb7F2E6FspOAGDn9tdc7E2K3sw9rpwxic',
    privateKey: '5bcClzcJJaUNr_064YeKPdWtq2czcvtB6dHqCBQSFko'
}

push.setVapidDetails('mailto:atozjames@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey);

let sub={}

push.sendNotification(sub, 'test message');




