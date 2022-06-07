const db = require("../models/index");//다 가져와서
Crew = db.crew_info;//db등록
Op = db.Sequelize.Op;

exports.getAllcrewinfo = async (req,res) => {
    try{
            data = await Crew.findAll();
            res.locals.data = data;
            res.render("index",{crewinfo: data});
    }catch (err) {
            res.status(500).send({
                    message: err.message
            });
    }
};

// exports.showmain = (req,res) => {
//      res.render("index");
//  };

// exports.detailpage = (req,res) => {
//      res.render("crew_detail");
//  };
