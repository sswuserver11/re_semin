const db=require("../models/index"),
    Crew=db.crew_info;

exports.showcrewLogin=(req,res)=>{
    res.render("crewapplierLogin");

};

//동아리 운영진이 자신의 동아리에 어떤 지원자가 지원했는지 목록보기(구현중)
exports.authenticate=async(req,res)=>{ 
    try{
        identify_numb_manager= req.body.identify_numb_manager;
        let crew=await Crew.findByPk(identify_numb_manager);
        if(crew.identify_numb_manager==req.body.identify_numb_manager){
            return res.redirect("/crewapplierList/"+identify_numb_manager); 
        }else{
            return res.redirect("/crewapplierLogin");
        }
    }catch(err){ //DB에 해당 번호가 없는 경우
        res.status(500).send({
            message:err.message
        });
    }
}