const nodemailer=require("nodemailer");

const transfer= nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"userEmail@gmail.com",
        pass:"userPassword"
    }
});

const mailinformation={
    from:"userEmail@gmail.com",
    to:"mailToBeSent1@gmail.com,mailToBeSent2@gmail.com",
    subject:"mail with nodejs ",
    text:"Im sending my first mail with nodejs.",
};

transfer.sendMail(mailinformation,(error)=> {
    if (error) console.log(error);
    else console.log("Your mail has been sent!");
});

