

window.addEventListener("scroll",reverl);

function reverl(){
    const reverl=document.querySelectorAll(".grid");

    for (let i=0; i<reverl.length;i++){
        var windowheight = window.innerHeight;
        var reverltop = reverl[i].getBoundingClientRect().top;
        var reverlpoint =100;

        if (reverltop <windowheight-reverlpoint){
            reverl[i].classList.add('active');
        }else {
            reverl[i].classList.remove('active');
        }
    }
}

window.addEventListener("scroll",reverl2);

function reverl2(){
    const reverl2=document.querySelectorAll(".block0");

    for (let i=0; i<reverl2.length;i++){
        var windowheight2 = window.innerHeight;
        var reverltop2 = reverl2[i].getBoundingClientRect().top;
        var reverlpoint2 =80;

        if (reverltop2 <windowheight2-reverlpoint2){
            reverl2[i].classList.add('active2');
        }else {
            reverl2[i].classList.remove('active2');
        }
    }
}