const express = require("express"),
    layouts = require("express-ejs-layouts"),
    app = express(),
    router = require('express').Router(),
    homeController = require("./controllers/homeController"),
    // session = require("express-session"),
    // flash = require("connect-flash"),
    filterController = require("./controllers/filterController"),
    memberSubmitController = require("./controllers/memberSubmitController"),
    memberLoginController = require("./controllers/memberLoginController"),
    readCrewController = require("./controllers/readCrewController"),
    applyController = require("./controllers/applyController"),
    myPageController = require("./controllers/myPageController"),
    // errorController = require("./controllers/errorController"),
    db = require("./models/index"),
        Sequelize = db.Sequelize,
        Op=Sequelize.Op;

const passport = require("passport");

const session = require("express-session"),
    flash = require("connect-flash");

db.sequelize.sync();
const Member = db.memberinfo;
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

//플래시 미들웨어 추가
// router.use(flash());
// router.use((req,res,next) => {
//     res.locals.flashMessages = req.flash();
//     next();
// });

//사용자 정의 미들웨어로 로컬 변수 추가
// router.use(passport.initialize());
// router.use(passport.session());
// passport.use(Member.createStrategy());
// passport.serializeUser(Member.serializeUser());
// passport.deserializeUser(Member.deserializeUser());

// router.use((req,res,next) => {
//     res.locals.loggedIn = req.isAuthenticated();
//     res.locals.currentUser = req.user;
//     res.locals.flashMessages = req.flash();
//     next();
// });

router.get("/",homeController.getAllcrewinfo);
router.get("/index",homeController.getAllcrewinfo);
//router.get("/detail",homeController.detailpage);
//필터링 컨트롤러
router.get("/filter",filterController.filterpage);
//컨트롤러-회원가입
router.get("/memberSubmit",memberSubmitController.showmemberSubmit);
router.post("/memberSubmit", memberSubmitController.saveMember);
//컨트롤러-로그인
router.get("/login", memberLoginController.loginpage);
router.post("/login", memberLoginController.authenticate);
//컨트롤러-마이페이지 등록
app.get("/myPage",myPageController.showMyPage);
//컨트롤러-마이페이지 with param
app.get("/myPage/:email",myPageController.showMyPage);
//회원 로그인 성공했을 때 이동하는 곳
router.get("/:email",homeController.getAllcrewinfo);
//홈화면에서 동아리모집글 상세보기
router.get("/readCrew/:identify_numb_manager", readCrewController.showreadCrew);
//router.get("/apply",applyController.showApply);
//router.post("/apply",applyController.submit_application);
//지원하기
router.get("/apply/:identify_numb_manager",applyController.showApply);
router.post("/apply/:identify_numb_manager",applyController.submit_application);



//컨트롤러-에러
// router.use(errorController.pageNotFoundError);
// router.use(errorController.internalServerError);

app.use("/",router);//루트로 들어오면 router로 연결시켜줌

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);

});

module.exports = router;
