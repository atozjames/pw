var webpush = require('web-push')

//let vapidKeys = push.generateVAPIDKeys();

let vapidKeys ={
    publicKey: 'BHLQJu9ryIRjmD_jQdUt_SooMo7WzymUIsKArlSRsuR9A6dVsD3RtvTb7F2E6FspOAGDn9tdc7E2K3sw9rpwxic',
    privateKey: '5bcClzcJJaUNr_064YeKPdWtq2czcvtB6dHqCBQSFko'
}

webpush.setVapidDetails('mailto:atozjames@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey);

let sub ={
    endpoint:"https://fcm.googleapis.com/fcm/send/fnGrIPnfcBQ:APA91bFE48yrlbv-zXh7tjd7zXMMjpleTDvfjUx2uCFmocYXvF15bD23zqGckIhJH_bj89W2NCxv771aYOcxdHCZFE0196fbOJT7NrREQmSSHwRWdRZeI0iiUMf2EjHpR4cKrfSaLXhJ",
    expirationTime:null,
    keys:{p256dh:"BIV8D_kor6kTUUl4Zrg7hpeW63P5_pny2JYDShM_TIlfxcwh-fHhNJEjFQlCbi62nutqfI0F029531ok-PYugVk",auth:"C4KD_-RI1335-CDECSXLww"}
    }

webpush.sendNotification(sub, 'test message');




