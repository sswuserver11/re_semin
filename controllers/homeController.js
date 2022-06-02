const db = require("../models/index");//다 가져와서
Crew = db.crew_info;//db등록

// module.exports = {
//     popularcrew: async (req,res) => {
//         try{
//             let crewinfo = await Crew.findAll();
//         }catch(error) {
//             console.log(error)
//         };
//         await res.render('index',{crewinfo});
        
//     }
// }
// module.exports = {
//     popularcrew : async (req,res,next) => {
//         try{
//             let crewinfo = await Crew.findAll();
//             res.locals.crewinfo = crewinfo;
//             next();
//         }catch(error) {
//                 console.log(`Error fetching crewinfo: ${error.message}`);
//                 next(error);
//             };
//     },
//     showmain : (req,res) => {
//          res.render("index");
//      }
// }
 
   
        // }).catch(error=>console.log(error))
        // await res.render('index', {crewinfo});
        // try {
        //     let crewinfo = await Crew.findAll();
        //     res.locals.crewinfo = crewinfo;//다음미들웨어함수에서 사용할수있도록 저장해놓은것
        //     next();
        // } catch(error) {
        //     console.log(`Error fetching crewinfo: ${error.message}`);
        //     next(error);
        // };
    
    // showmain: (req,res) => {
    //     res.render("index")
    // }

exports.showmain = (req,res) => {
     res.render("index");
 };

 exports.filterpage = (req,res) => {
     res.render("filter");
 };

 exports.loginpage = (req,res) => {
     res.render("crewpass_login");
 };

 exports.detailpage = (req,res) => {
     res.render("crew_detail");
 };
