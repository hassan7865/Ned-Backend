const router =  require("express").Router()
const FAQS =  require("../Models/FAQS")
router.post("/createfaq",async(req,res)=>{
    try{
        const faq = new FAQS(req.body)
        const savefaq = await faq.save()
        res.status(200).json(savefaq)
    }catch(err){
        res.status(500).json(err)
    }
})
router.delete("/deletefaq/:id",async(req,res)=>{
    try{
        await FAQS.findByIdAndDelete(req.params.id)
        res.status(200).json("FAQ Deleted")
    }catch(err){
        res.status(500).json(err)
    }
})
router.get("/getfaq",async(req,res)=>{
    try{
        const faq = await FAQS.find()
        res.status(200).json(faq)
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports = router