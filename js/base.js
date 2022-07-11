let jumbotronSubtext = document.getElementById("jumbotronSubtext");
let jumbotronButton = document.getElementById("jumbotronButton");
let leftSection = document.getElementById("leftSection");
let nav = document.getElementById("nav");

jumbotronSubtext.innerHTML = '紀錄日常跟更多日常';
jumbotronButton.innerHTML = '這是一個酷炫的小工具';

leftSection.innerHTML = '<div class="container"><img src="https://peter910820.github.io/syaroweb/img/me.png" class="img-thumbnail rounded-circle" alt=""></div>'+
                        '<a href="https://peter910820.github.io/syaroweb/page/about.html"><h3>ABOUT ME</h3><span class="date" id="aboutmeText">其實艾蜜莉可蠻可愛的</span></a>';

nav.innerHTML = '<nav class="navbar navbar-expand-lg navbar-light bg-light"><a class="navbar-brand" href="https://peter910820.github.io/syaroweb/">SeaotterMS Blogs</a>'+
                '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">'+
                '<span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse justify-content-end" id="navbarNav"><ul class="navbar-nav"><li class="nav-item">'+
                '<a class="nav-link" href="https://peter910820.github.io/syaroweb/">HOME</a></li><li class="nav-item">'+
                '<a class="nav-link" href="https://peter910820.github.io/syaroweb/page/about.html">ABOUT</a></li>'+
                '<li class="nav-item"><a class="nav-link" href="https://peter910820.github.io/syaroweb/page/article.html">ARTICLE</a>'+
                '</li><li class="nav-item"><a class="nav-link disabled">DISABLED</a></li></ul></div></nav>';
