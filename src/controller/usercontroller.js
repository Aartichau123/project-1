
const authorModel= require("../models/authorModel")
const blogModel=require("../models/blogModel")

const author= async function(req,res){

    let data= req.body
    let createAuthor= await authorModel.create(data)
    res.status(201).send({msg:true,data:createAuthor})
}

const blogg= async function(req,res){
   try {
    let data= req.body
    let author_id = data.author_id
    let syp = await authorModel.findById(_id=author_id)
    if(!syp){
        res.status(400).send({msg:"invalid author ID"})
    }
    let createBlog= await authorModel.create(data)
        res.status(201).send({msg:true,data:createBlog})
    }
     catch (error) {
        res.status(500).send({status:false,msg:(error.msg)})
    }}

    const getBlogs = async (req, res) => {
        try {
            let combination = req.query
            let {authorId,category,tags,subcategory}=combination
            let dataBlog = await blogModel.find({ $and: [{ isDeleted: false, isPublished: true }, combination] })
            if (dataBlog == 0) {
                return res.status(404).send({ status: false, msg: " No Such Blog found " })
            } else
                return res.status(200).send({ data: dataBlog })
        } catch (err) {
            res.status(500).send({ status: false, status: false, msg: err.message })
        }
    }


module.exports.author=author
module.exports.blogg=blogg
module.exports.getBlogs=getBlogs