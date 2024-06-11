// animationStart();
function animationStart() {
    // $('#fstWrapper').css('hight', '0px');
    // $('#fstWrapper').css('width', '0px');
    setTimeout(() => {
        $('#fstWrapper').css('height', '500px');
        $('#fstWrapper').css('width', '286.45px');
        $('#fstWrapper').css('border', '1px #e6e6e600 solid');
        // $('#fstWrapper').css('border-radius', '0px');
        // $('#fstWrapper').css('margin-top', '0px');
    }, 6);
    setTimeout(() => {
        $('#frontS').css('left', '-297px');
        $('#backS').css('width', '1000px');
    }, 1600);
    setTimeout(() => { $('#fst1').css('font-size', '140px'); }, 1850);
    setTimeout(() => { $('#fst2').css('font-size', '140px'); }, 1900);
    setTimeout(() => { $('#fst3').css('font-size', '140px'); }, 1950);
    setTimeout(() => { $('#fst4').css('font-size', '140px'); }, 2050);
    setTimeout(() => { $('#fst5').css('font-size', '140px'); }, 2100);
    setTimeout(() => { $('#fst6').css('font-size', '140px'); }, 2250);

    setTimeout(() => {
        $('#Minfo').css('display', '');
        $('#frontS').css('transition', '0s');
        
        setTimeout(() => {
            $('#infoF').css('opacity', '1');
            $('#infoTtle-1').css('transform', 'translateX(0px)');
            setTimeout(() => {
                $('#infoTtle-2').css('transform', 'translateX(0px)');
            }, 300);
        }, 100);
    }, 2400);
}
$('#CL').click(function () {
    // console.log("::::::::::::Start::::::::::::");
    animationStart();
    $('#CL').css('opacity', '0');
    setTimeout(() => {
        $('#clbk').css('display', 'none');
    }, 500);
    // console.log("::::::::::::.....::::::::::::");
});
mdui.setColorScheme('#021fa1');