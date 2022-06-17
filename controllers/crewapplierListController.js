const db = require("../models/index"),//다 가져와서
    Application=db.application,
    Op = db.Sequelize.Op;

//마이페이지-동아리 지원자 목록보기
exports.showapplierList = async (req,res) => {
    try{
            data=await Application.findAll({
                where:{identify_numb_manager:req.params.identify_numb_manager}
            });
            res.render("crewapplierList",{
                Application: data
            });
    }catch (err) {
            res.status(500).send({
                    message: err.message
            });
    }
};