import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie= (userId,res)=> {
    const token= jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"15d",
    })
    res.cookie("jwt",token, {
        maxAge:15 * 24 * 60 * 60 * 1000,
        httpOnly:true, //for preventing xss attacks cross site
        sameSite:"strict", // CRSF attacks
        secure:process.env.NODE_ENV !=="development"
    });
    };
    export default generateTokenAndSetCookie;
