const db = require("../models/index"),//다 가져와서
    CrewRecruit=db.crewrecruit_detail,
    Op = db.Sequelize.Op;

exports.showcrewrecruitList = async (req,res) => {
    try{  
            data = await CrewRecruit.findAll();
            res.locals.data = data;
            res.render("crewrecruitList",{crewrecruit: data});
    }catch (err) {
            res.status(500).send({
                    message: err.message
            });
    }
};