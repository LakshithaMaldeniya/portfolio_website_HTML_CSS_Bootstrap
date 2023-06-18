window.addEventListener("scroll",reverl3);
function reverl3(){
    const reverl3=document.querySelectorAll(".touch");

    for (let i=0; i<reverl3.length;i++){
        var windowheight3 = window.innerHeight;
        var reverltop3 = reverl3[i].getBoundingClientRect().top;
        var reverlpoint3 =1;

        if (reverltop3 <windowheight3-reverlpoint3){
            reverl3[i].classList.add('active3');
        }else {
            reverl3[i].classList.remove('active3');
        }
    }
}