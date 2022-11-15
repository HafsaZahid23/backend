const ProductModel= require ('../Models/ProductManagementModel')

const ProductData = async(req, res) => {
    try {
    //    const {ProductName,ProductPrice} = req.body;

    //    const DocToCreate = new ProductModel({
    //     ProductName,
    //     ProductPrice,
    //     ImageUrl: `/assets/Product/${req.file.filename}`,
    //     ImageName: req.file.originalname,
    //     ImageMimeType: req.file.mimetype,
    //    })

       
    //    const DocToSave = await DocToCreate.save();
    //    //Hey Please Save this Data to My DataBase //IOBlocking await
    //    res.json({
    //        Message: 'You Have Reached the Api End Point',
    //        Body: DocToSave
    //    })

    res.json ({
        Message:'You have Reached The Endpoint',
        Body:req.body,
        Data:true
    })
   } catch (error) {
       res.json({
           Message: error.mesage,
           Result: null,
           Data: false
       })
   }
}

const GetProductData = async (req, res) => {
   try {
       const DocToGet = await ProductModel.findOne( {},
        { Status: 0 }, //Condition
           { ProductPrice: 0 } //Projecttion
           //Options
       );
       res.json({
           Message: 'Documents has Found',
           Data: true,
           Result: DocToGet
       })
   } catch (error) {
       res.json({
           Message: error.mesage,
           Result: null,
           Data: false
       })
   }
}
const UpdateMyProductData = async (req, res) => {
    try {
        const DocToUpdate = await ProductModel.updateOne(
            { _id: '62e69473a967b71d25317390' },//Kahan Kis ko
            { ProductPrice: 120 }//Kon c Vlaue
        )
        res.json({
            Message: 'Documents has benn Updated',
            Data: true,
            Result: DocToUpdate
        })
    } catch (error) {

    }
}

const DeleteProductData = async (req, res) => {
    try {
        const DocToDelete = await ProductModel.deleteMany({ Status: 1 });
        res.json({
            Message: 'Documents has benn Updated',
            Data: true,
            Result: DocToDelete
        })
    } catch (error) {
        res.json({
            Message: error.mesage,
            Result: null,
            Data: false
        })
    }
}
module.exports = {
    ProductData,
    GetProductData,
    UpdateMyProductData,
    DeleteProductData
}