var MailListener = require("mail-listener2");


var mailListener = new MailListener({
    username: "ak@mynora.app",
    password: "Cricket47!",
    host: "imap.gmail.com",
    port: 993, // imap port
    tls: true,
    connTimeout: 10000, // Default by node-imap
    authTimeout: 5000, // Default by node-imap,
    debug: console.log, // Or your custom function with only one incoming argument. Default: null
    tlsOptions: { rejectUnauthorized: false },
    mailbox: "INBOX", // mailbox to monitor
    searchFilter: ["UNSEEN"], // the search filter being used after an IDLE notification has been retrieved
    markSeen: true, // all fetched email willbe marked as seen and not fetched next time
    fetchUnreadOnStart: true, // use it only if you want to get all unread email on lib start. Default is `false`,
    mailParserOptions: { streamAttachments: true }, // options to be passed to mailParser lib.
    attachments: true, // download attachments as they are encountered to the project directory
    attachmentOptions: { directory: "attachments/" } // specify a download directory for attachments
});

var text;
var subject;
var from_address;
var to_address;

mailListener.start(); // start listening

// stop listening


mailListener.on("server:connected", function() {
    console.log("imapConnected");
});

mailListener.on("server:disconnected", function() {
    console.log("imapDisconnected");

    var spawn = require("child_process").spawn;

    console.log("spawn");
    console.log(text);

    var pythonProcess = spawn('python', ["nlp.py",
        text
    ]);

    pythonProcess.stdout.on('data',function(chunk){
      var textChunk = chunk.toString('utf8');// buffer to string
      console.log(textChunk);
  });

});

mailListener.on("error", function(err) {
    console.log(err);
});

mailListener.on("mail", function(mail, seqno, attributes) {
    // do something with mail object including attachments
    // console.log("emailParsed", mail);
    console.log("mail text: " + mail.text);
    console.log("subject: " + mail.headers.subject);
    console.log("from: " + mail.headers.from);
    console.log("to: " + mail.headers.to);

    text = mail.text;
    subject = mail.headers.subject;
    from_address = mail.headers.from;
    to_address = mail.headers.to;

    // Takes stdout data from script which executed 
    // with arguments and send this data to res object 

});

mailListener.on("attachment", function(attachment) {
    console.log(attachment.path);
});

setTimeout(function() {
    mailListener.stop(); // start listening
}, 60 * 100);



// it's possible to access imap object from node-imap library for performing additional actions. E.x.
// mailListener.imap.move(msguids, mailboxes, function(){})