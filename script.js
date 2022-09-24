

function menuclick(){
    var sidebar = document.getElementById('sidebar').style;
    var mainpage = document.getElementById('mainpage').style;
        if(sidebar.display != "none"){
            sidebar.display = "none";
            mainpage.marginLeft = "0px";
        }else{
            sidebar.display = "block";
            mainpage.marginLeft = "200px";
        }
}