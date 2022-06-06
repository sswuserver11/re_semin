const express = require("express"),
    layouts = require("express-ejs-layouts"),
    app = express(),
    router = require('express').Router(),
    homeController = require("./controllers/homeController"),
    filterController = require("./controllers/filterController"),
    memberSubmitController = require("./controllers/memberSubmitController"),
    loginController = require("./controllers/loginController"),
    // errorController = require("./controllers/errorController"),
    db = require("./models/index"),
        Sequelize = db.Sequelize,
        Op=Sequelize.Op;

// db.sequelize.sync();
//ejs를 템플릿용으로 사용
app.set("views", __dirname + "/views");
app.set("view engine","ejs");
app.set("port", process.env.PORT || 80);


//url 인코드와 json파라미터 처리를 위한 body-parser사용
router.use(
    express.urlencoded({
        extended: false
    })
);
router.use(express.json());
//express.js가 이 패키지를 추가 미들웨어로 사용하도록
router.use(layouts);
router.use(express.static(__dirname+"/public"));

router.get("/",homeController.showmain);
router.get("/detail",homeController.detailpage);
//필터링 컨트롤러
router.get("/filter",filterController.filterpage);
//로그인 컨트롤러
router.get("/login",loginController.loginpage);
//컨트롤러-회원가입
router.get("/memberSubmit",memberSubmitController.showmemberSubmit);
router.post("/memberSubmit", memberSubmitController.saveMember);
//컨트롤러-에러
// router.use(errorController.pageNotFoundError);
// router.use(errorController.internalServerError);

app.use("/",router);//루트로 들어오면 router로 연결시켜줌

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);

});

module.exports = router;
