

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

window.addEventListener("scroll",reverl4);
function reverl4(){
    const reverl4=document.querySelectorAll(".blogbox");

    for (let i=0; i<reverl4.length;i++){
        var windowheight4 = window.innerHeight;
        var reverltop4 = reverl4[i].getBoundingClientRect().top;
        var reverlpoint4 =1;

        if (reverltop4 <windowheight4-reverlpoint4){
            reverl4[i].classList.add('active4');
        }else {
            reverl4[i].classList.remove('active4');
        }
    }
}