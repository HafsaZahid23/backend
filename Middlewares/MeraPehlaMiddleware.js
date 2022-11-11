const Check = (req, res, next) => {
    try {
        if(req.body !== {}){
            next();
        }else{
            res.json({
                Message:'Middleware par aa gaye hain',
                Result:req.body
            })
        }
    } catch (error) {
        res.json({
            Message:error.message,
            Result:null
        })
    }
}

// const {Check} = (req , res) => {
//     try {
//        return res.json({
//             Message:'Middleware par aa gaye hain',
//             Result:req.body
//         })
//     } catch (error) {
//         res.json({
//             Message:error.message
//         })
//     }
// }

module.exports = {
    Check

    
}