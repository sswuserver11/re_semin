const db = require("../models/index"),//다 가져와서
    CrewRecruit=db.crewrecruit_detail,
    Op = db.Sequelize.Op;

    //동아리 운영진이 자신의 동아리가 썼던 모집글 목록을 확인하기
exports.showcrewrecruitList = async (req,res) => {
    try{
            data=await CrewRecruit.findAll({
                where:{identify_numb_manager:req.params.identify_numb_manager}
            });
            res.render("crewrecruitList",{
                crewrecruit_detail: data
            });
    }catch (err) {
            res.status(500).send({
                    message: err.message
            });
    }
};