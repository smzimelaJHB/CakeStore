const nodemailer = require('nodemailer');

exports.contact = (req,res,next)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }    
    
    const emal = 'cijabonga@gmail.com';
    const pss = "S*Y@B0nGAmzi?";

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: emal,
          pass: pss
        }
      });
   
      
      const mailOptions = {
        from: req.body.email,
        to: emal,
        subject: 'Email from '+req.body.name,
        text: "Cell number: "+req.body.number+"\n"+"Email: "+req.body.email+"\n"+"Message: "+ req.body.message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            next();
            res.status(404).redirect("/contact");
        } else {
            res.status(200).redirect("/");
        }
      });
    
}
