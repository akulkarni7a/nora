var path = require("path");
const util = require('util');
var connection = require("../config/connection.js");
//var email = require("../config/email.js");
var MailListener = require("mail-listener2");

// process.env.GOOGLE_APPLICATION_CREDENTIALS = path.join(__dirname, "../config/gcloud.json");
// const language = require('@google-cloud/language');
// const client = new language.LanguageServiceClient();
const NLP = require('google-nlp');
const apiKey = 'AIzaSyD11R0XqRroh_eu3K996SW9Qp5Wd1j792c';
let nlp = new NLP( apiKey );

var sql = require('./sqlqueries');



module.exports = function(app, passport) {


    app.get('/', function(req, res) {
        // res.render('./../views/index.html'); // load the index.ejs file
        res.render('index.ejs');
    });

    app.get('/loginPage', function(req, res, next) {
        res.render('login.ejs', { title: 'Login' });
    });

    app.get('/signupPage', function(req, res, next) {
        res.render('signup.ejs', { title: 'Signup' });
    });

    app.get('/newschoolsignup', isLoggedIn, function(req, res) {
        res.render('newschoolsignup.ejs', {
            user: req.user // get the user out of session and pass to template
        });
        currentUser = req.user;
    });

    app.get('/email', function(req, res) {

        console.log("email");

        // var mailListener = new MailListener({
        //     username: "ak@mynora.app",
        //     password: "Cricket47!",
        //     host: "imap.gmail.com",
        //     port: 993, // imap port
        //     tls: true,
        //     connTimeout: 10000, // Default by node-imap
        //     authTimeout: 5000, // Default by node-imap,
        //     debug: console.log, // Or your custom function with only one incoming argument. Default: null
        //     tlsOptions: { rejectUnauthorized: false },
        //     mailbox: "INBOX", // mailbox to monitor
        //     searchFilter: ["UNSEEN"], // the search filter being used after an IDLE notification has been retrieved
        //     markSeen: true, // all fetched email willbe marked as seen and not fetched next time
        //     fetchUnreadOnStart: true, // use it only if you want to get all unread email on lib start. Default is `false`,
        //     mailParserOptions: { streamAttachments: true }, // options to be passed to mailParser lib.
        //     attachments: true, // download attachments as they are encountered to the project directory
        //     attachmentOptions: { directory: "attachments/" } // specify a download directory for attachments
        // });

        // var text;
        // var subject;
        // var from_address;
        // var to_address;

        // mailListener.start(); // start listening

        // // stop listening


        // mailListener.on("server:connected", function() {
        //     console.log("imapConnected");
        // });

        // mailListener.on("server:disconnected", function() {
        //     console.log("imapDisconnected");
        // });

        // mailListener.on("error", function(err) {
        //     console.log(err);
        // });

        // mailListener.on("mail", function(mail, seqno, attributes) {
        //     // do something with mail object including attachments
        //     // console.log("emailParsed", mail);
        //     console.log("mail text: " + mail.text);
        //     console.log("subject: " + mail.headers.subject);
        //     console.log("from: " + mail.headers.from);
        //     console.log("to: " + mail.headers.to);

        //     text = mail.text;
        //     subject = mail.headers.subject;
        //     from_address = mail.headers.from;
        //     to_address = mail.headers.to;

        // });

        // mailListener.on("attachment", function(attachment) {
        //     console.log(attachment.path);
        // });

        // setTimeout(function() {
        //     console.log("sent_text: " + text);
        //     mailListener.stop();
        //     analyzeText(text);
        // }, 60 * 100);



        // it's possible to access imap object from node-imap library for performing additional actions. E.x.
        // mailListener.imap.move(msguids, mailboxes, function(){})
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    // app.get('/main', function(req, res) {

    //  // render the page and pass in any flash data if it exists
    //  // res.render('./../views/main.html', { message: req.flash('loginMessage') });
    // res.sendFile(path.join(__dirname, "./../views/main.html"))
    // });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
            successRedirect: '/main', // redirect to the secure profile section
            failureRedirect: '/', // redirect back to the signup page if there is an error
            failureFlash: true // allow flash messages
        }),
        function(req, res) {
            console.log("hello");

            if (req.body.remember) {
                req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
                req.session.cookie.expires = false;
            }
            res.redirect('/');
        });

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    // app.get('/signup', function(req, res) {
    //  // render the page and pass in any flash data if it exists
    //  res.render('signup.ejs', { message: req.flash('signupMessage') });
    // });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/newschoolsignup', // redirect to the secure profile section
        failureRedirect: '/', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));
    var currentUser;
    var currentSchool;

    // =====================================
    // PROFILE SECTION =========================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/main', isLoggedIn, function(req, res) {
        res.render('main.ejs', {
            user: req.user // get the user out of session and pass to template
        });
        currentUser = req.user;
        console.log(currentUser);
    });

    app.get('/current_user', isLoggedIn, function(req, res) {
        res.json(req.user);
        console.log(req.user);
    });

    app.get('/pipeline', isLoggedIn, function(req, res) {
        res.render('pipeline.ejs', {
            user: req.user // get the user out of session and pass to template
        });
        currentUser = req.user;
    });

    app.get('/marketing', isLoggedIn, function(req, res) {
        res.render('marketing.ejs', {
            user: req.user // get the user out of session and pass to template
        });
        currentUser = req.user;
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get("/pageLoad", function(req, res) {
        console.log(util.inspect(currentUser, { showHidden: false, depth: null }))
        res.json(currentUser);
    });

    app.get("/permissions", function(req, res) {
        var dbQuery = "SELECT * FROM permissions where id = ?";
        connection.query(dbQuery, [currentUser.id], function(err, result) {
            res.json(result);
        });
    });

    app.get("/generateCards/:school?", function(req, res) {
        var dbQuery = "SELECT * FROM children where school = ?";
        connection.query(dbQuery, [req.params.school], function(err, result) {
            res.json(result);
        });
    });

    app.get("/families/:email?", function(req, res) {
        var dbQuery = "SELECT * FROM parents where Parent_email like ?";
        connection.query(dbQuery, [req.params.email + "%"], function(err, result) {
            res.json(result);
        });
    });

    app.get("/getID/:email?", function(req, res) {
        var dbQuery = "SELECT * FROM parents where Parent_email = ?";
        var reqEmail = req.params.email;
        console.log(util.inspect(reqEmail, { showHidden: false, depth: null }))
        connection.query(dbQuery, [req.params.email], function(err, result) {
            res.json(result);
        });
    });

    app.get("/getParent/:id?", function(req, res) {
        var dbQuery = "SELECT * FROM parents where id = ?";
        connection.query(dbQuery, [req.params.id], function(err, result) {
            res.json(result);
        });
    });
    ////////
    app.get("/getchildID/:name?", function(req, res) {
        var name = req.params.name;
        console.log(name);
        var newname = name.split(' ');
        console.log(newname);
        var firstName = newname[0];
        var lastName = newname[1];

        var dbQuery = "SELECT * FROM children where child_first_name = ? AND child_last_name = ?";
        connection.query(dbQuery, [firstName, lastName], function(err, result) {
            res.json(result);
        });
    });

    app.post("/addParent", function(req, res) {
        console.log("Entered:");
        var school = req.body.school;
        var childFirstName = req.body.childFirstName;
        var childLastName = req.body.childBirthdate;
        var childBirthdate = req.body.childLastName;
        var childGender = req.body.childGender;
        var childStartDate = req.body.childStartDate;
        var parent1FirstName = req.body.parent1FirstName;
        var parent1LastName = req.body.parent1LastName;
        var parent2FirstName = req.body.parent2FirstName;
        var parent2LastName = req.body.parent2LastName;
        var parentEmail = req.body.parentEmail;
        var parentPhone = req.body.parentPhone;

        var dbQuery = "Insert INTO parents (school,Parent1_first_name,Parent1_last_name,Parent2_first_name,Parent2_last_name,Parent_phone,Parent_email) values (?,?,?,?,?,?,?)"
        connection.query(dbQuery, [school, parent1FirstName, parent1LastName, parent2FirstName, parent2LastName, parentPhone, parentEmail], function(err, result) {
            res.json(result);
            console.log("query sent1");
        });

    });

    app.post("/updateStatus", function(req, res) {
        console.log("Entered:");
        var name = req.body.name;
        var status = req.body.status;
        var id = req.body.childID;
        console.log(name);
        console.log(status);
        console.log(id);

        var dbQuery = "Insert INTO childStatus (child_id,childStatus) values (?,?)"
        connection.query(dbQuery, [id, status], function(err, result) {
            res.json(result);
            console.log("status updated");
        });

        var dbQuery1 = "UPDATE children set status = ? where id = ?"
        connection.query(dbQuery1, [status, id], function(err, result) {
            console.log("status updated");
        });


    });

    app.get("/getdata", function(req, res) {
        var dbQuery = "SELECT * FROM reenrollment"
        connection.query(dbQuery, function(err, result) {
            res.json(result);
        });

    });

    app.post("/addChild", function(req, res) {
        console.log("Entered2:");
        console.log(util.inspect(req.body, { showHidden: false, depth: null }))
        var school = req.body.school;
        var childFirstName = req.body.childFirstName;
        var childLastName = req.body.childLastName;
        var childBirthdate = req.body.childBirthdate;
        var childGender = req.body.childGender;
        var childStartDate = req.body.childStartDate;
        var parent1FirstName = req.body.parent1FirstName;
        var parent1LastName = req.body.parent1LastName;
        var parent2FirstName = req.body.parent2FirstName;
        var parent2LastName = req.body.parent2LastName;
        var parentEmail = req.body.parentEmail;
        var parentPhone = req.body.parentPhone;
        var parentID = req.body.parentID;
        console.log(parentID);



        var dbQuery = "INSERT INTO children (school,parent_id,child_first_name,child_last_name,child_birthday,child_gender,child_start_date) values(?,?,?,?,?,?,?);"
        connection.query(dbQuery, [school, parentID, childFirstName, childLastName, childBirthdate, childGender, childStartDate], function(err, result) {
            console.log("result " + result);
            console.log("err " + err);
            res.json(result);
            console.log("query sent2");
        });

    });

    app.post("/updateSettings", function(req, res) {
        console.log("Update Settings:");
        var statuses = req.body;
        console.log(util.inspect(statuses, { showHidden: false, depth: null }))
        var school = req.body.school;
        var contactedSendEmail = req.body.contacted.sendEmail;
        var contactedEmailDelay = req.body.contacted.EmailDelay;
        var contactedEmailText = req.body.contacted.EmailText;
        var contactedsendText = req.body.contacted.sendText;
        var contactedTextDelay = req.body.contacted.TextDelay;
        var contactedTextText = req.body.contacted.TextText;


        var dbQuery = "UPDATE settings set contacted_email = ?,contacted_email_delay =?,contacted_email_text=?,contacted_text=?,contacted_text_delay=?,contacted_text_text=? where id = ?;"
        connection.query(dbQuery, [contactedSendEmail, contactedEmailDelay, contactedEmailText, contactedsendText, contactedTextDelay, contactedTextText, school], function(err, result) {
            res.json(result);
            console.log("query sent2");
        });

    });







};

// function analyzeText(text) {
//     console.log("analyzeText");
//     console.log(text);

//     const document = {
//         content: text,
//         type: 'PLAIN_TEXT',
//     };

//     nlp.analyzeEntities( text )
//     .then(function( entities ) {
//         //  Output returned entities
//         console.log( 'Entities:', entities );
//     })
//     .catch(function( error ) {
//         //  Error received, output the error
//         console.log( 'Error:', error.message );
//     })
// };

// route middleware to make sure
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}