const User = require("../modals/userModal");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.host,
  port: Number(process.env.mailPort),
  secure: Boolean(process.env.secure),
  auth: {
    user: process.env.adminMail,
    pass: process.env.adminPass,
  },
});

exports.PostFormData = async (req, res) => {
  const data = new User(req.body);
console.log(data)
  try {
   await data.save();

    res.status(200).json({ success: true, message: "Successfully Saved" });
   
  } catch (error) {
    res.json(error);
  }
};

exports.mailingService = (req, res) => {

  const receivedData = req.body;
  console.log(receivedData);
  try {

    console.log(req.body);

    User.findOne({ email: req.body.email }).then((user) => {

      console.log(req.body);

      const uud = user._id;
      const veri = user.isVerified;

      console.log(uud);
      console.log(user);

      const url=`${process.env.URL}/api/${user._id}/verify`

      console.log(url)

      if (user && veri === false) {
        transporter.sendMail({
          from: process.env.from,
          to: `${req.body.email}`,
          subject: "Please verify your email.",
          html: `<p>Hello ${req.body.firstName} ${req.body.lastName}, Thanks for registering with us. Please click below to verify your email.</p>  <br>
                    <a href=${url}><button style="color:white; background-color:#4CFA50; border-radius:8px;border:none;padding:auto;"> Click Here to Verify Your Email</button></a> `,
        });
       
        res
          .status(200)
          .json({
            message:
              "Verification email sent. Please check your email to verify.",
          });
      } else {
        res.status(404).json({ message: "Something went wrong." });
      }
    });
  } catch (error) {
    res.json(error);
  }
};

exports.sendRegisteringMail = async (req, res) => {
  try {
    const {id}=req.params
    console.log(id)
    const user = await User.findById({ _id: req.params.id });
   
    console.log(user);

    if (!user) {
      res.status(404).json({ message: "Something went wrong" });
    } 
    else if(user && user.isVerified===true){
res.json({"message":"already registered"})
    }
    else {
     
      await User.findByIdAndUpdate({_id:user._id},{isVerified:true})
     .then((user) => {

        console.log(user)

        transporter.sendMail({
          from: process.env.from,
          to: `${user.email}`,
          subject: "Registration Completed",
          html: `<p>Hello ${user.firstName} ${user.lastName},You have completed your registration process and now successfully registered with us</p> 
          <br>
          <span>Thank You.</span>
          `
          
          ,
        });
      })
    
      res.json({Success:true})
 
    }
  } catch (error) {
    res.json(error);
  }
};



