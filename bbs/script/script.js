$(function (){
    $("#lnbMenu > .lnbLi > a").mouseover(function (){
        $(this).addClass('active');
    });
    $("#lnbMenu > .lnbLi > a").mouseout(function (){
        $(this).removeClass('active');
    });

    $(".page").click(function(){
        $(".page").removeClass("active");
        $(this).addClass("active");
    });

    //  스크롤 탑
    $(".scrollTop").click(function (){
        $("html,body").animate({scrollTop:0},300);
    });

    $(window).scroll(function (){
        let wScroll = $(this).scrollTop();
        console.log(wScroll);
        if(wScroll > 100){
            $(".scrollTop").fadeIn(300);
        } else {
            $(".scrollTop").fadeOut(300);
        }
    });

    // 게시판 영역
    let arrNum = ["161", "160", "159", "158", "157", "156", "155", "154", "153", "152"];
    let arrSubject = [
        "고용노동부운영소속본부교육계로지정(비공개)",
        "고용노동부운영소속본부공정채용기반과로지정(비공개)",
        "개선요청(비공개)",
        "신규직원 채용 관련 문의(비공개)",
        "채용정보문의",
        "전화 상담사 관련 문의",
        "지방소멸 위험지수(비공개)",
        "특별고용촉진장려금(비공개)",
        "고용노동부운영소속본부운영지원과로지정(비공개)",
        "고용노동부운영소속본부운영지원과로지정(비공개)"
    ];
    let arrWriter = ["원", "원", "양", "이", "박", "박", "마", "박", "원", "원"];
    let arrTime = ["2021/09/30", "2021/09/29", "2021/09/29", "2021/09/24", "2021/09/18",
                        "2021/09/17", "2021/09/16", "2021/09/16", "2021/09/03", "2021/09/03"];
    let arrReadCnt = ["4","8", "0", "1","24","24","1", "0", "1","2"];
    let arrState = ["고용부 이관", "고용부 이관", "완료" , "완료" , "완료" , "완료" , "완료",
                         "고용부 이관", "고용부 이관", "고용부 이관" ];


    let tbodyTag = ""; 
    for (let i = 0; i < 10; i++) {
        tbodyTag += "<tr>";
        tbodyTag += ("<td>" + arrNum[i] + "</td>");
        tbodyTag += ("<td>" + arrSubject[i] + "</td>");
        tbodyTag += ("<td>" + arrWriter[i] + "</td>");
        tbodyTag += ("<td>" + arrTime[i] + "</td>");
        tbodyTag += ("<td>" + arrReadCnt[i] + "</td>");
        tbodyTag += ("<td>" + arrState[i] + "</td>");            
        tbodyTag += "</tr>";
    } 

    $("#bbsContents").html(tbodyTag);


    // 푸터 슬라이드 이미지
    $(".leftArrow").click(function (e){
        e.preventDefault();
        fnLeftSlide();
    });
    
    $(".rightArrow").click(function (e){
        e.preventDefault();
        fnRightSlide();
    });

    function fnRightSlide() {
        $(".fmShuttleFrame > a:last-child").insertBefore(".fmShuttleFrame > a:first-child");
        $(".fmShuttleFrame").stop().css({"margin-left":"-212px"});
        $(".fmShuttleFrame").animate(
            {"margin-left":"0px"},1000);
    }

    function fnLeftSlide() {
        $(".fmShuttleFrame").stop().animate(
            {"margin-left":"-212px"},
            1000,
            function(){
                $(".fmShuttleFrame > a:first-child").insertBefore(".fmShuttleFrame > a:last-child");
                $(".fmShuttleFrame").css({"margin-left":"0px"});
            });
    }
});