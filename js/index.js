
/* box1 - 브랜드 */
function animateElements() {
    $('.main_tit, .main_img, .main_txt').each(function () {
        setTimeout(function () {
            $(this).css({ 'transform': 'translateY(0)', 'opacity': '1' });
        }.bind(this));
    });

    $('.line_top, .line_bot').each(function () {
        setTimeout(function () {
            $(this).css({ 'width': '97%', 'transitionDelay': '1s' });
        }.bind(this));
    });
    $('.line_lef, .line_rig').each(function () {
        setTimeout(function () {
            $(this).css({ 'height': '90%', 'transitionDelay': '1s' });
        }.bind(this));
    });
}

/* box2 - 특화설계 */
$(document).ready(function () {
    function resetElements2() {
        $('.box2line_top').css({ 'width': '0', 'left': '0', 'transition-delay': '0' })
        $('.box2line_top2').css({ 'width': '0', 'right': '0', 'transition-delay': '0' })
        $('.box2line_lef, .box2line_rig').css({ 'top': '0', 'height': '0', 'transition-delay': '0' })
        $('.box2line_bot, .box2line_bot5').css({ 'left': '0', 'width': '0', 'transition-delay': '0' })
        $('.box2line_bot2, .box2line_bot3 ,.box2line_bot4').css({ 'left': '0', 'width': '0', 'opacity': '0', 'transition-delay': '0' })
        $('.box2_tit,.box2_img1,.box2_img2,.box2_img3,.box2_img4,.box2_img5,.box2_img6,.box2_rig1,.box2_rig2,.box2_rig3,.box2_rig4').css({ 'opacity': '0', 'transition-delay': '0' })
    }
    function animateBox2Elements() {
        $('.box2line_top').each(function () {
            setTimeout(function () {
                $(this).css({ 'width': '95%', 'left': '50%', 'transition-delay': '.3s' });
            }.bind(this));
        });
        $('.box2line_top2').each(function () {
            setTimeout(function () {
                $(this).css({ 'width': '90%', 'right': '5%', 'transition-delay': '.3s' });
            }.bind(this));
        });

        $('.box2line_lef, .box2line_rig').each(function () {
            setTimeout(function () {
                $(this).css({ 'top': '50%', 'height': '95%', 'transition-delay': '.5s' });
            }.bind(this));
        });

        $('.box2line_bot, .box2line_bot5').each(function () {
            setTimeout(function () {
                $(this).css({ 'left': '50%', 'width': '95%', 'transition-delay': '.5s' });
            }.bind(this));
        });
        $('.box2line_bot2, .box2line_bot3, .box2line_bot4').each(function () {
            setTimeout(function () {
                $(this).css({ 'left': '50%', 'width': '90%', 'opacity': '1', 'transition-delay': '2.3s' });
            }.bind(this));
        });
        $('.box2_tit').each(function () {
            setTimeout(function () {
                $(this).css({ 'opacity': '1', 'transition-delay': '1.2s' });
            }.bind(this));
        });
        $('.box2_img1, .box2_img2,.box2_img3,.box2_img4,.box2_img5,.box2_img6').each(function () {
            setTimeout(function () {
                $(this).css({ 'opacity': '1', 'transition-delay': '2s' });
            }.bind(this));
        });
        $('.box2_rig1, .box2_rig2,.box2_rig3,.box2_rig4').each(function () {
            setTimeout(function () {
                $(this).css({ 'opacity': '1', 'transition-delay': '2.8s' });
            }.bind(this));
        });
    }
    $('.tab2').click(function () {
        resetElements2();
        animateBox2Elements();

        resetZIndexes();
        $(this).addClass('on');
        if (swiper2) {
            swiper2.update();
        }
    });
})


/* box3 - 입지환경 */
$(document).ready(function () {
    function resetElements3() {
        $('.box3line_top').css({ 'width': '0', 'left': '0', 'transition-delay': '0' })
        $('.box3line_top2, .box3line_bot6').css({ 'width': '0', 'right': '0', 'transition-delay': '0' })
        $('.box3_img').css({ 'opacity': '0', 'transition-delay': '0' })
        $('.box3line_lef, .box3line_rig').css({ 'top': '0', 'height': '0', 'transition-delay': '0' })
        $('.box3line_bot').css({ 'left': '0', 'width': '0', 'transition-delay': '0' })
        $('.box3line_bot2, .box3line_bot3, .box3line_bot4, .box3line_bot5').css({ 'left': '0', 'width': '0', 'opacity': '0', 'transition-delay': '0' })
        $('.box3_tit').css({ 'opacity': '0', 'transition-delay': '0' })
        $('.box3_rig1,.box3_rig2,.box3_rig3,.box3_rig4, .box3_rig5').css({ 'opacity': '0', 'transition-delay': '0' })
    }
    function animateBox3Elements() {
        $('.box3line_top').each(function () {
            setTimeout(function () {
                $(this).css({ 'width': '95%', 'left': '50%', 'transition-delay': '.3s' });
            }.bind(this));
        });
        $('.box3line_top2, .box3line_bot6').each(function () {
            setTimeout(function () {
                $(this).css({ 'width': '90%', 'right': '5%', 'transition-delay': '.3s' });
            }.bind(this));
        });
        $('.box3_img').each(function () {
            setTimeout(function () {
                $(this).css({ 'opacity': '1', 'transition-delay': '1s' });
            }.bind(this));
        });

        $('.box3line_lef, .box3line_rig').each(function () {
            setTimeout(function () {
                $(this).css({ 'top': '50%', 'height': '95%', 'transition-delay': '.5s' });
            }.bind(this));
        });

        $('.box3line_bot').each(function () {
            setTimeout(function () {
                $(this).css({ 'left': '50%', 'width': '95%', 'transition-delay': '.5s' });
            }.bind(this));
        });
        $('.box3line_bot2, .box3line_bot3, .box3line_bot4, .box3line_bot5').each(function () {
            setTimeout(function () {
                $(this).css({ 'left': '50%', 'width': '90%', 'opacity': '1', 'transition-delay': '1.3s' });
            }.bind(this));
        });
        $('.box3_tit').each(function () {
            setTimeout(function () {
                $(this).css({ 'opacity': '1', 'transition-delay': '1.2s' });
            }.bind(this));
        });

        $('.box3_rig1,.box3_rig2,.box3_rig3,.box3_rig4, .box3_rig5').each(function () {
            setTimeout(function () {
                $(this).css({ 'opacity': '1', 'transition-delay': '1.5s' });
            }.bind(this));
        });
    }
    $('.tab3').click(function () {
        resetElements3();
        animateBox3Elements();

        resetZIndexes();
        $(this).addClass('on');
        if (swiper3) {
            swiper3.update();
        }
    });
})

/* box4-타입안내 */

$(document).ready(function () {
    function resetElements4() {
        $('.box4line_top').css({ 'width': '0', 'left': '0', 'transition-delay': '0' })
        $('.box4line_top1, .box4line_top2, .box4line_top3').css({ 'width': '0', 'left': '0', 'transition-delay': '0' })
        $('.box4line_bot').css({ 'width': '0', 'right': '0', 'transition-delay': '0' })
        $('.box4line_lef1, .box4line_lef2, .box4line_lef3, .box4line_lef4').css({ 'height': '0', 'transition-delay': '0' })
        $('.box4line_rig1, .box4line_rig2, .box4line_rig3, .box4line_rig4').css({ 'height': '0', 'transition-delay': '0' })
        $('.guide_txt, .guide_txt2').css({ 'opacity': '0', 'transition-delay': '0' })
    }

    function animateBox4Elements() {
        $('.box4line_top').each(function () {
            setTimeout(function () {
                $(this).css({ 'width': '97%', 'left': '50%', 'transition-delay': '.3s' });
            }.bind(this));
        });
        $('.box4line_bot').each(function () {
            setTimeout(function () {
                $(this).css({ 'width': '97%', 'right': '50%', 'transition-delay': '.3s' });
            }.bind(this));
        });
        $('.box4line_lef1, .box4line_lef2, .box4line_lef3, .box4line_lef4').each(function () {
            setTimeout(function () {
                $(this).css({ 'height': '19%', 'transition-delay': '.3s' });
            }.bind(this));
        });
        $('.box4line_rig1, .box4line_rig2, .box4line_rig3, .box4line_rig4').each(function () {
            setTimeout(function () {
                $(this).css({ 'height': '19%', 'transition-delay': '.3s' });
            }.bind(this));
        });
        $('.box4line_top1, .box4line_top2, .box4line_top3').each(function () {
            setTimeout(function () {
                $(this).css({ 'width': '97%', 'left': '50%', 'transition-delay': '.8s' });
            }.bind(this));
        });
        $('.guide_txt, .guide_txt2').each(function () {
            setTimeout(function () {
                $(this).css({ 'opacity': '1', 'transition-delay': '1.2s' });
            }.bind(this));
        });
    }

    // 탭 클릭 시 처리
    $('.tab4').click(function () {
        resetElements4();
        animateBox4Elements();

        resetZIndexes();
        $(this).addClass('on');
        if (swiper4) {
            swiper4.update();
        }
    });
});
$(document).ready(function () {
    $('.box4_top_lef').click(function () {
        $('.box4_top_lef').css('background-color', 'white')
        $('.box4_top_rig').css('background-color', 'transparent')
        $('.box4_bot').css('display', 'flex');
        $('.box4_bot2').css('display', 'none');
    });

    $('.box4_top_rig').click(function () {
        $('.box4_top_rig').css('background-color', 'white')
        $('.box4_top_lef').css('background-color', 'transparent')
        $('.box4_bot').css('display', 'none');
        $('.box4_bot2').css('display', 'flex');
    });
});

/* box5-커뮤니티 */

$(document).ready(function () {

    function resetElements5() {
        $('.box5line_top1, .box5line_top2, .box5line_top3, .box5line_top4, .box5line_top5, .box5line_top6, .box5line_bot1, .box5line_bot2, .box5line_bot3, .box5line_bot4').css({ 'width': '0', 'transition-delay': '0s' });
        $('.box5line_center1, .box5line_center2, .box5line_center3, .box5line_rig1, .box5line_rig2, .box5line_rig3, .box5line_lef, .box5line_lef3').css({ 'height': '0', 'transition-delay': '0s' });
        $('.box5_txt, .box5_img1, .box5_txt2, .box5_img2, .box5_rig1_txt1, .box5_rig1_txt2, .box5_rig1_txt3, .box5_rig2_txt1, .box5_rig2_txt2, .box5_rig2_txt3, .box5_rig2_img, .box5_rig3_txt1, .box5_rig3_txt2, .box5_rig3_txt3, .box5_rig3_txt4').css({ 'opacity': '0', 'transition-delay': '0s' });
        $('.box5_area2_txt, .box5_area2_txt2, .box5_area2_img, .box5_area2_lef, .box5_item_txt1, .box5_item_img, .box5_item_bot li, .box5_area2_num').css({ 'opacity': '0', 'transition-delay': '0s' });
    }

    function animateBox5Elements() {
        $('.box5line_top1, .box5line_top2, .box5line_top3, .box5line_top4,.box5line_bot1, .box5line_bot2').each(function () {
            setTimeout(function () {
                $(this).css({ 'width': '46%', 'transition-delay': '.3s' });
            }.bind(this));
        });
        $('.box5line_center1, .box5line_center2,.box5line_center3,.box5line_rig1,.box5line_rig2,.box5line_rig3').each(function () {
            setTimeout(function () {
                $(this).css({ 'height': '24%', 'transition-delay': '.3s' });
            }.bind(this));
        });
        $('.box5line_lef').each(function () {
            setTimeout(function () {
                $(this).css({ 'height': '93%' });
            }.bind(this));
        });
        $('.box5_txt').each(function () {
            setTimeout(function () {
                $(this).css({ 'opacity': '1' });
            }.bind(this));
        });
        $('.box5_img1, .box5_txt2').each(function () {
            setTimeout(function () {
                $(this).css({ 'opacity': '1', 'transition-delay': '2s' });
            }.bind(this));
        });
        $('.box5_img2').each(function () {
            setTimeout(function () {
                $(this).css({ 'opacity': '1', 'transition-delay': '1.4s' });
            }.bind(this));
        });

        $('.box5_rig1_txt3, .box5_rig2_txt1, .box5_rig3_txt1').each(function () {
            setTimeout(function () {
                $(this).css({ 'opacity': '1', 'transition-delay': '2.4s' });
            }.bind(this));
        });
        $('.box5_rig1_txt1, .box5_rig1_txt2, .box5_rig2_txt2,.box5_rig2_txt3,.box5_rig2_img, .box5_rig3_txt2,.box5_rig3_txt3,.box5_rig3_txt4').each(function () {
            setTimeout(function () {
                $(this).css({ 'opacity': '1', 'transition-delay': '2.6s' });
            }.bind(this));
        });

    }

    $('.tab5').click(function () {
        resetElements5();
        animateBox5Elements();

        resetZIndexes();
        $(this).addClass('on');
    });

});

/* box6 - 뉴스&미디어 */
function animateBox6Elements() {

    $('.box6line_top1, .box6line_top2, .box6line_bot1, .box6line_bot2').each(function () {
        setTimeout(function () {
            $(this).css({ 'width': '46%' });
        }.bind(this));
    });
    $('.box6line_rig, .box6line_lef, .box6line_center').each(function () {
        setTimeout(function () {
            $(this).css({ 'height': '93%' });
        }.bind(this));
    });
    $('.box6_rig, .box6_lef').each(function () {
        setTimeout(function () {
            $(this).css({ 'opacity': '1' });
        }.bind(this));
    });
}

$(document).ready(function () {
    $('.tab6').click(function () {

        $('.box6line_top1, .box6line_top2, .box6line_bot1, .box6line_bot2').css({ 'width': '0', 'transition-delay': '0s', 'transition': '0.8s' });
        $('.box6line_rig, .box6line_lef, .box6line_center').css({ 'height': '0', 'transition-delay': '0s', 'transition': '0.8s' });
        $('.box6_rig, .box6_lef').css({ 'opacity': '0', 'transition-delay': '0s', 'transition': '0.8s' });


        animateBox6Elements();

    });
    $('.media1').click(function () {
        $('.media1').css('opacity', '1');
        $('.media2').css('opacity', '0.5');
        $('.vd2').css('display', 'none');
        $('.vd1').css('display', 'block');
    });

    $('.media2').click(function () {
        $('.media2').css('opacity', '1');
        $('.media1').css('opacity', '0.5');
        $('.vd1').css('display', 'none');
        $('.vd2').css('display', 'block');
    });
});



function resetZIndexes() {
    $('.tab_box li').removeClass('on');
}

function showbox1() {
    $('#box1').css('display', 'flex');
    $('#box2').css('display', 'none');
    $('#box3').css('display', 'none');
    $('#box4').css('display', 'none');
    $('#box5').css('display', 'none');
    $('#box6').css('display', 'none');

    animateElements();

    if (swiper1) {
        swiper1.update();
    }

    resetZIndexes();
    $('.tab_box .tab1').addClass('on');
}

function showbox2() {
    $('#box1').css('display', 'none');
    $('#box2').css('display', 'flex');
    $('#box3').css('display', 'none');
    $('#box4').css('display', 'none');
    $('#box5').css('display', 'none');
    $('#box6').css('display', 'none');

    animateBox2Elements();

}

function showbox3() {
    $('#box1').css('display', 'none');
    $('#box2').css('display', 'none');
    $('#box3').css('display', 'flex');
    $('#box4').css('display', 'none');
    $('#box5').css('display', 'none');
    $('#box6').css('display', 'none');

    animateBox3Elements()

}

function showbox4() {
    $('#box1').css('display', 'none');
    $('#box2').css('display', 'none');
    $('#box3').css('display', 'none');
    $('#box4').css('display', 'flex');
    $('#box5').css('display', 'none');
    $('#box6').css('display', 'none');

    animateBox4Elements()
}

function showbox5() {
    $('#box1').css('display', 'none');
    $('#box2').css('display', 'none');
    $('#box3').css('display', 'none');
    $('#box4').css('display', 'none');
    $('#box5').css('display', 'flex');
    $('#box6').css('display', 'none');

    animateBox5Elements()

}

function showbox6() {
    $('#box1').css('display', 'none');
    $('#box2').css('display', 'none');
    $('#box3').css('display', 'none');
    $('#box4').css('display', 'none');
    $('#box5').css('display', 'none');
    $('#box6').css('display', 'flex');

    animateBox6Elements()

}



$(document).ready(function () {
    swiper1 = new Swiper('.swiper-container1', {
        effect: 'cube',
        grabCursor: false,
        cubeEffect: {
            shadow: false,
        },
        direction: 'vertical',
        mousewheel: true,
        speed: 1200,
        allowTouchMove: false,
        on: {
            slideChange: function () {
                var activeIndex = this.activeIndex % this.slides.length;
                if (activeIndex === 1) {
                    $('.line_top2').css({ 'width': '45%', 'left': '24%' });
                    $('.line_top3').css({ 'width': '45%', 'left': '76%' });
                    $('.line_bot2').css({ 'width': '45%', 'left': '24%' });
                    $('.line_bot3').css({ 'width': '45%', 'left': '76%' });
                    $('.line_center').css('height', '90%');
                    $('.area2_img1, .area2_img2, .area2_img3, .area2_img4').css({
                        'opacity': '1', 'transitionDelay': '2.8s'
                    });
                    $('.area2_lef > img').css({ 'opacity': '1', 'transitionDelay': '1.5s' });
                    $('.area2_lef > p').css({ 'opacity': '1', 'transitionDelay': '1.5s' });
                    $('.area2_rig').css({ 'transform': 'rotate(0) translateX(0)', 'transitionDelay': '2s' });
                } else {
                    $('.line_top2').css({ 'width': '50%', 'left': '25%' });
                    $('.line_top3').css({ 'width': '50%', 'left': '75%' });
                    $('.line_bot2').css({ 'width': '50%', 'left': '25%' });
                    $('.line_bot3').css({ 'width': '50%', 'left': '75%' });
                    $('.line_center').css('height', '10%');
                    $('.area2_img1, .area2_img2, .area2_img3, .area2_img4').css({
                        'opacity': '0', 'transitionDelay': '0.3s'
                    });
                    $('.area2_lef > img').css({ 'opacity': '0', 'transitionDelay': '0.3s' });
                    $('.area2_lef > p').css({ 'opacity': '0', 'transitionDelay': '0.3s' });
                    $('.area2_rig').css({ 'transform': 'rotate(-45deg)', 'transitionDelay': '0.3s' });
                }
                if (activeIndex === 2) {
                    $('.area3line_lef1, .area3line_lef2, .area3line_rig1, .area3line_rig2').css('height', '42%');
                    $('.area3line_bot1').css({ 'width': '47%', 'left': '25%' });
                    $('.area3line_bot2').css({ 'width': '47%', 'left': '75%' });
                    $('.area3line_center1, .area3line_center2').css('width', '47%');
                    $('.area3line_center3').css('height', '42%');
                    $('.area3_tit').css({ 'opacity': '1' });
                    $('.area3_txt').css({ 'opacity': '1' });
                    $('.area3box_bot>img').css({ 'opacity': '1' });
                    $('.area3box_botR>img').css({ 'opacity': '1' });
                } else {
                    $('.area3line_lef1, .area3line_lef2, .area3line_rig1, .area3line_rig2').css('height', '46%');
                    $('.area3line_bot1').css({ 'width': '50%', 'left': '25%' });
                    $('.area3line_bot2').css({ 'width': '50%', 'left': '75%' });
                    $('.area3line_center1, .area3line_center2').css('width', '1%');
                    $('.area3line_center3').css('height', '1%');
                    $('.area3_tit').css({ 'opacity': '0' });
                    $('.area3_txt').css({ 'opacity': '0' });
                    $('.area3box_bot>img').css({ 'opacity': '0' });
                    $('.area3box_botR>img').css({ 'opacity': '0' });
                }

                if (activeIndex === 0) {
                    $('.main_tit').css({ 'transform': 'translateY(0)', 'opacity': '1', 'transitionDelay': '1s' })
                    $('.main_txt').css({ 'transform': 'translateY(0)', 'opacity': '1', 'transitionDelay': '1.2s' })
                    $('.main_img').css({ 'transform': 'translateY(0)', 'opacity': '1', 'transitionDelay': '1.4s' })
                    $('.line_top, .line_bot').css({ 'width': '97%', 'transitionDelay': '.8s' })
                    $('.line_rig, .line_lef').css({ 'height': '90%', 'transitionDelay': '.8s' })
                } else {
                    $('.main_tit').css({ 'transform': 'translateY(20%)', 'opacity': '0', 'transitionDelay': '.3s' })
                    $('.main_txt').css({ 'transform': 'translateY(20%)', 'opacity': '0', 'transitionDelay': '.3s' })
                    $('.main_img').css({ 'transform': 'translateY(20%)', 'opacity': '0', 'transitionDelay': '.3s' })
                    $('.line_top, .line_bot').css({ 'width': '0', 'transitionDelay': '0.3s' })
                    $('.line_rig, .line_lef').css({ 'height': '0', 'transitionDelay': '0.3s' })
                }
            },
        },
    });

    /* box2 - 특화설계 */
    swiper2 = new Swiper('.swiper-container2', {
        effect: 'cube',
        grabCursor: false,
        cubeEffect: {
            shadow: false,
        },
        direction: 'vertical',
        mousewheel: true,
        speed: 1200,
        allowTouchMove: false,
        on: {
            slideChange: function () {
                var showIndex2 = this.activeIndex % this.slides.length;

                if (showIndex2 === 1) {
                    $('.box2line_center1').css('height', '22%');
                    $('.box2line_center2').css('height', '65%');
                    $('.box2line_top3, .box2line_top4').css('width', '45%');
                    $('.box2line_bot6, .box2line_bot7').css('width', '45%');
                    $('.box2line_mid1, .box2line_mid2').css('width', '45%');
                    $('.box2line_rig2').css({ 'height': '22%', 'top': '3%' });
                    $('.box2line_rig3').css({ 'height': '65%', 'top': '31%' });
                    $('.box2line_lef2').css({ 'height': '22%', 'top': '3%' });
                    $('.box2line_lef3').css({ 'height': '65%', 'top': '31%' });
                    $('.box2_top_p').css({ 'opacity': '1', 'transitionDelay': '1.6s' });
                    $('.box2_img7').css({ 'opacity': '1', 'transitionDelay': '1.9s' });
                    $('.box2_img8').css({ 'opacity': '1', 'transitionDelay': '2.1s' });
                    $('.box2_img9').css({ 'opacity': '1', 'transitionDelay': '2.3s' });
                    $('.box2_img10').css({ 'opacity': '1', 'transitionDelay': '2.5s' });
                    $('.box2_top_tit').css({ 'opacity': '1', 'transition-delay': '2.7s' })
                    $('.box2_top span').css({ 'opacity': '1', 'transition-delay': '2.9s' })
                    $('.box2_top img').css({ 'opacity': '1', 'transition-delay': '2.9s' })
                    $('.fig').css({ 'opacity': '1', 'transition-delay': '3.1s' })

                } else {
                    $('.box2line_center1, .box2line_center2').css('height', '0');
                    $('.box2line_top3, .box2line_top4').css('width', '50%');
                    $('.box2line_bot6, .box2line_bot7').css('width', '50%');
                    $('.box2line_mid1, .box2line_mid2').css('width', '1%');
                    $('.box2line_rig2').css({ 'height': '30%', 'top': '5%' });
                    $('.box2line_rig3').css({ 'height': '68%', 'top': '28%' });
                    $('.box2line_lef2').css({ 'height': '30%', 'top': '5%' });
                    $('.box2line_lef3').css({ 'height': '68%', 'top': '28%' });
                    $('.box2_top_p').css({ 'opacity': '0', 'transitionDelay': '0.3s' });
                    $('.box2_img7').css({ 'opacity': '0', 'transitionDelay': '0.3s' });
                    $('.box2_img8').css({ 'opacity': '0', 'transitionDelay': '0.3s' });
                    $('.box2_img9').css({ 'opacity': '0', 'transitionDelay': '0.3s' });
                    $('.box2_img10').css({ 'opacity': '0', 'transitionDelay': '0.3s' });
                    $('.box2_top_tit').css({ 'opacity': '0', 'transition-delay': '0.3s' })
                    $('.box2_top span').css({ 'opacity': '0', 'transition-delay': '0.3s' })
                    $('.box2_top img').css({ 'opacity': '0', 'transition-delay': '0.3s' })
                    $('.fig').css({ 'opacity': '0', 'transition-delay': '0.3s' })
                }
                if (showIndex2 === 0) {
                    $('.box2line_top').css({ 'width': '95%', 'left': '50%', 'transition-delay': '.1s' });
                    $('.box2line_top2').css({ 'width': '90%', 'right': '5%', 'transition-delay': '.3s' });
                    $('.box2line_lef, .box2line_rig').css({ 'top': '50%', 'height': '95%', 'transition-delay': '.5s' });
                    $('.box2line_bot, .box2line_bot5').css({ 'left': '50%', 'width': '95%', 'transition-delay': '.5s' });
                    $('.box2line_bot2, .box2line_bot3, .box2line_bot4').css({ 'left': '50%', 'width': '90%', 'opacity': '1', 'transition-delay': '2.3s' });
                    $('.box2_tit').css({ 'opacity': '1', 'transition-delay': '1.2s' })
                    $('.box2_img1,.box2_img2,.box2_img3,.box2_img4,.box2_img5').css({ 'opacity': '1', 'transition-delay': '2s' })
                    $('.box2_img6').css({ 'opacity': '1', 'transition-delay': '1.6s' })
                    $('.box2_rig1,.box2_rig2,.box2_rig3,.box2_rig4').css({ 'opacity': '1', 'transition-delay': '2.8s' })
                } else {
                    $('.box2line_top').css({ 'width': '2%', 'left': '0', 'transition-delay': '0.3s' })
                    $('.box2line_top2').css({ 'width': '2%', 'right': '0', 'transition-delay': '0.3s' })
                    $('.box2line_lef, .box2line_rig').css({ 'top': '0', 'height': '0', 'transition-delay': '0.3s' })
                    $('.box2line_bot, .box2line_bot5').css({ 'left': '0', 'width': '0%', 'transition-delay': '0.3s' })
                    $('.box2line_bot2, .box2line_bot3, .box2line_bot4').css({ 'left': '0', 'width': '0', 'transition-delay': '0.3s' })
                    $('.box2_tit').css({ 'opacity': '0', 'transition-delay': '0.3s' })
                    $('.box2_img1,.box2_img2,.box2_img3,.box2_img4,.box2_img5').css({ 'opacity': '0', 'transition-delay': '0.3s' })
                    $('.box2_img6').css({ 'opacity': '0', 'transition-delay': '0.3s' })
                    $('.box2_rig1,.box2_rig2,.box2_rig3,.box2_rig4').css({ 'opacity': '0', 'transition-delay': '0.3s' })
                }
            },
        },
        init: true,
    });

    animateElements();

    var initialIndex = swiper2.activeIndex % swiper2.slides.length;
    if (initialIndex === 1) {
        $('.box2line_center1').css('height', '22%');
        $('.box2line_center2').css('height', '65%');
        $('.box2line_top3, .box2line_top4').css('width', '45%');
        $('.box2line_bot6, .box2line_bot7').css('width', '45%');
        $('.box2line_mid1, .box2line_mid2').css('width', '45%');
        $('.box2line_rig2').css({ 'height': '22%', 'top': '3%' });
        $('.box2line_rig3').css({ 'height': '65%', 'top': '31%' });
        $('.box2line_lef2').css({ 'height': '22%', 'top': '3%' });
        $('.box2line_lef3').css({ 'height': '65%', 'top': '31%' });
        $('.box2_top_p').css({ 'opacity': '1', 'transitionDelay': '1.6s' });
        $('.box2_img7').css({ 'opacity': '1', 'transitionDelay': '1.9s' });
        $('.box2_img8').css({ 'opacity': '1', 'transitionDelay': '2.1s' });
        $('.box2_img9').css({ 'opacity': '1', 'transitionDelay': '2.3s' });
        $('.box2_img10').css({ 'opacity': '1', 'transitionDelay': '2.5s' });
        $('.box2_top_tit').css({ 'opacity': '1', 'transition-delay': '2.7s' })
        $('.box2_top span').css({ 'opacity': '1', 'transition-delay': '2.9s' })
        $('.box2_top img').css({ 'opacity': '1', 'transition-delay': '2.9s' })
        $('.fig').css({ 'opacity': '1', 'transition-delay': '3.1s' })

    } else {
        $('.box2line_center1, .box2line_center2').css('height', '0');
        $('.box2line_top3, .box2line_top4').css('width', '50%');
        $('.box2line_bot6, .box2line_bot7').css('width', '50%');
        $('.box2line_mid1, .box2line_mid2').css('width', '1%');
        $('.box2line_rig2').css({ 'height': '30%', 'top': '5%' });
        $('.box2line_rig3').css({ 'height': '68%', 'top': '28%' });
        $('.box2line_lef2').css({ 'height': '30%', 'top': '5%' });
        $('.box2line_lef3').css({ 'height': '68%', 'top': '28%' });
        $('.box2_top_p').css({ 'opacity': '0', 'transitionDelay': '0.3s' });
        $('.box2_img7').css({ 'opacity': '0', 'transitionDelay': '0.3s' });
        $('.box2_img8').css({ 'opacity': '0', 'transitionDelay': '0.3s' });
        $('.box2_img9').css({ 'opacity': '0', 'transitionDelay': '0.3s' });
        $('.box2_img10').css({ 'opacity': '0', 'transitionDelay': '0.3s' });
        $('.box2_top_tit').css({ 'opacity': '0', 'transition-delay': '0.3s' })
        $('.box2_top span').css({ 'opacity': '0', 'transition-delay': '0.3s' })
        $('.box2_top img').css({ 'opacity': '0', 'transition-delay': '0.3s' })
        $('.fig').css({ 'opacity': '0', 'transition-delay': '0.3s' })
    }
    if (initialIndex === 0) {
        $('.box2line_top').css({ 'width': '95%', 'left': '50%', 'transition-delay': '.3s' });
        $('.box2line_top2').css({ 'width': '90%', 'right': '5%', 'transition-delay': '.3s' });
        $('.box2line_lef, .box2line_rig').css({ 'top': '50%', 'height': '95%', 'transition-delay': '.5s' });
        $('.box2line_bot, .box2line_bot5').css({ 'left': '50%', 'width': '95%', 'transition-delay': '.5s' });
        $('.box2line_bot2, .box2line_bot3, .box2line_bot4').css({ 'left': '50%', 'width': '90%', 'opacity': '1', 'transition-delay': '2.3s' });
        $('.box2_tit').css({ 'opacity': '1', 'transition-delay': '1.2s' })
        $('.box2_img1,.box2_img2,.box2_img3,.box2_img4,.box2_img5').css({ 'opacity': '1', 'transition-delay': '2s' })
        $('.box2_img6').css({ 'opacity': '1', 'transition-delay': '1.6s' })
        $('.box2_rig1,.box2_rig2,.box2_rig3,.box2_rig4').css({ 'opacity': '1', 'transition-delay': '2.8s' })
    } else {
        $('.box2line_top').css({ 'width': '2%', 'left': '0', 'transition-delay': '0.3s' })
        $('.box2line_top2').css({ 'width': '2%', 'right': '0', 'transition-delay': '0.3s' })
        $('.box2line_lef, .box2line_rig').css({ 'top': '0', 'height': '0', 'transition-delay': '0.3s' })
        $('.box2line_bot, .box2line_bot5').css({ 'left': '0', 'width': '0%', 'transition-delay': '0.3s' })
        $('.box2line_bot2, .box2line_bot3, .box2line_bot4').css({ 'left': '0', 'width': '0', 'transition-delay': '0.3s' })
        $('.box2_tit').css({ 'opacity': '0', 'transition-delay': '0.3s' })
        $('.box2_img1,.box2_img2,.box2_img3,.box2_img4,.box2_img5').css({ 'opacity': '0', 'transition-delay': '0.3s' })
        $('.box2_img6').css({ 'opacity': '0', 'transition-delay': '0.3s' })
        $('.box2_rig1,.box2_rig2,.box2_rig3,.box2_rig4').css({ 'opacity': '0', 'transition-delay': '0.3s' })
    }

    /* box3 - 입지환경 */
    swiper3 = new Swiper('.swiper-container3', {
        effect: 'cube',
        grabCursor: false,
        cubeEffect: {
            shadow: false,
        },
        direction: 'vertical',
        mousewheel: true,
        speed: 1200,
        allowTouchMove: false,
        on: {
            slideChange: function () {
                var showIndex3 = this.activeIndex % this.slides.length;

                if (showIndex3 === 1) {
                    $('.box3line_center1').css('height', '22%');
                    $('.box3line_center2').css('height', '65%');
                    $('.box3line_top3, .box3line_top4').css('width', '45%');
                    $('.box3line_bot7, .box3line_bot8').css('width', '45%');
                    $('.box3line_mid1, .box3line_mid2').css('width', '45%');
                    $('.box3line_rig2').css({ 'height': '22%', 'top': '3%' });
                    $('.box3line_rig3').css({ 'height': '65%', 'top': '31%' });
                    $('.box3line_lef2').css({ 'height': '22%', 'top': '3%' });
                    $('.box3line_lef3').css({ 'height': '65%', 'top': '31%' });
                    $('.box3_top').css({ 'opacity': '1', 'transitionDelay': '1.8s' });
                    $('.box3_top_txt2').css({ 'opacity': '1', 'transition-delay': '2s' })
                    $('.box3_bot').css({ 'opacity': '1', 'transition-delay': '1.4s' })
                    $('.box3_bot_img img').css({ 'opacity': '1', 'transition-delay': '2.2s' })
                    $('.box3_bot_txt').css({ 'opacity': '1', 'transition-delay': '2.2s' })
                    $('.box3_bot_box').css({ 'opacity': '1', 'transition-delay': '2.2s' })

                } else {
                    $('.box3line_center1, .box3line_center2').css('height', '0');
                    $('.box3line_top3, .box3line_top4').css('width', '50%');
                    $('.box3line_bot7, .box3line_bot8').css('width', '50%');
                    $('.box3line_mid1, .box3line_mid2').css('width', '1%');
                    $('.box3line_rig2').css({ 'height': '30%', 'top': '5%' });
                    $('.box3line_rig3').css({ 'height': '68%', 'top': '28%' });
                    $('.box3line_lef2').css({ 'height': '30%', 'top': '5%' });
                    $('.box3line_lef3').css({ 'height': '68%', 'top': '28%' });
                    $('.box3_top').css({ 'opacity': '0', 'transitionDelay': '0.3s' });
                    $('.box3_top_txt2').css({ 'opacity': '0', 'transition-delay': '0.3s' })
                    $('.box3_bot').css({ 'opacity': '0', 'transition-delay': '0.3s' })
                    $('.box3_bot_img img').css({ 'opacity': '0', 'transition-delay': '0.3s' })
                    $('.box3_bot_txt').css({ 'opacity': '0', 'transition-delay': '0.3s' })
                    $('.box3_bot_box').css({ 'opacity': '0', 'transition-delay': '0.3s' })

                }
                if (showIndex3 === 0) {
                    $('.box3line_top').css({ 'width': '95%', 'left': '50%', 'transition-delay': '.3s' });
                    $('.box3line_top2').css({ 'width': '90%', 'right': '5%', 'transition-delay': '.3s' });
                    $('.box3line_bot6').css({ 'width': '90%', 'right': '5%', 'transition-delay': '.3s' });
                    $('.box3line_lef, .box3line_rig').css({ 'top': '50%', 'height': '95%', 'transition-delay': '.5s' });
                    $('.box3line_bot').css({ 'left': '50%', 'width': '95%', 'transition-delay': '.5s' });
                    $('.box3_img').css({ 'opacity': '1', 'transition-delay': '1s' });
                    $('.box3line_bot2, .box3line_bot3, .box3line_bot4,.box3line_bot5').css({ 'left': '50%', 'width': '90%', 'opacity': '1', 'transition-delay': '1.3s' });
                    $('.box3_tit').css({ 'opacity': '1', 'transition-delay': '1.2s' })
                    $('.box3_rig1,.box3_rig2,.box3_rig3,.box3_rig4, .box3_rig5').css({ 'opacity': '1', 'transition-delay': '1.5s' })
                } else {
                    $('.box3line_top').css({ 'width': '2%', 'left': '0', 'transition-delay': '0.3s' })
                    $('.box3line_top2').css({ 'width': '2%', 'right': '0', 'transition-delay': '0.3s' })
                    $('.box3line_bot6').css({ 'width': '2%', 'right': '0', 'transition-delay': '0.3s' })
                    $('.box3line_lef, .box3line_rig').css({ 'top': '0', 'height': '0', 'transition-delay': '0.3s' })
                    $('.box3line_bot').css({ 'left': '0', 'width': '0%', 'transition-delay': '0.3s' })
                    $('.box3_img').css({ 'opacity': '0', 'transition-delay': '0.3s' });
                    $('.box3line_bot2, .box3line_bot3, .box3line_bot4, .box3line_bot5').css({ 'left': '0', 'width': '0', 'transition-delay': '0.3s' })
                    $('.box3_tit').css({ 'opacity': '0', 'transition-delay': '0.3s' })
                    $('.box3_rig1,.box3_rig2,.box3_rig3,.box3_rig4, .box3_rig5').css({ 'opacity': '0', 'transition-delay': '0.3s' })
                }
            },
        },
        init: true,
    });


    animateElements();


    var initialIndex2 = swiper3.activeIndex % swiper3.slides.length;
    if (initialIndex2 === 1) {
        $('.box3line_center1').css('height', '22%');
        $('.box3line_center2').css('height', '65%');
        $('.box3line_top3, .box3line_top4').css('width', '45%');
        $('.box3line_bot7, .box3line_bot8').css({ 'width': '45%' });
        $('.box3line_mid1, .box3line_mid2').css('width', '45%');
        $('.box3line_rig2').css({ 'height': '22%', 'top': '3%' });
        $('.box3line_rig3').css({ 'height': '65%', 'top': '31%' });
        $('.box3line_lef2').css({ 'height': '22%', 'top': '3%' });
        $('.box3line_lef3').css({ 'height': '65%', 'top': '31%' });
        $('.box3_top_p').css({ 'opacity': '1', 'transitionDelay': '1.6s' });
        $('.box3_top_tit').css({ 'opacity': '1', 'transition-delay': '2.7s' })
        $('.box3_top span').css({ 'opacity': '1', 'transition-delay': '2.9s' })
        $('.box3_top img').css({ 'opacity': '1', 'transition-delay': '2.9s' })

    } else {
        $('.box3line_center1, .box3line_center2').css('height', '0');
        $('.box3line_top3, .box3line_top4').css('width', '50%');
        $('.box3line_bot7, .box3line_bot8').css('width', '50%');
        $('.box3line_mid1, .box3line_mid2').css('width', '1%');
        $('.box3line_rig2').css({ 'height': '30%', 'top': '5%' });
        $('.box3line_rig3').css({ 'height': '68%', 'top': '28%' });
        $('.box3line_lef2').css({ 'height': '30%', 'top': '5%' });
        $('.box3line_lef3').css({ 'height': '68%', 'top': '28%' });
        $('.box3_top').css({ 'opacity': '0', 'transitionDelay': '0.3s' });
        $('.box3_top_tit').css({ 'opacity': '0', 'transition-delay': '0.3s' })
        $('.box3_top span').css({ 'opacity': '0', 'transition-delay': '0.3s' })
        $('.box3_top img').css({ 'opacity': '0', 'transition-delay': '0.3s' })
    }

    if (initialIndex2 === 0) {
        $('.box3line_top').css({ 'width': '95%', 'left': '50%', 'transition-delay': '.3s' });
        $('.box3line_top2').css({ 'width': '90%', 'right': '5%', 'transition-delay': '.3s' });
        $('.box3line_bot6').css({ 'width': '90%', 'right': '5%', 'transition-delay': '.3s' });
        $('.box3line_lef, .box3line_rig').css({ 'top': '50%', 'height': '95%', 'transition-delay': '.5s' });
        $('.box3line_bot').css({ 'left': '50%', 'width': '95%', 'transition-delay': '.5s' });
        $('.box3_img').css({ 'opacity': '1', 'transition-delay': '1s' });
        $('.box3line_bot2, .box3line_bot3, .box3line_bot4,.box3line_bot5').css({ 'left': '50%', 'width': '90%', 'opacity': '1', 'transition-delay': '2.3s' });
        $('.box3_tit').css({ 'opacity': '1', 'transition-delay': '1.2s' })
        $('.box3_rig1,.box3_rig2,.box3_rig3,.box3_rig4, .box3_rig5').css({ 'opacity': '1', 'transition-delay': '1.5s' })
    } else {
        $('.box3line_top').css({ 'width': '2%', 'left': '0', 'transition-delay': '0.3s' })
        $('.box3line_top2').css({ 'width': '2%', 'right': '0', 'transition-delay': '0.3s' })
        $('.box3line_bot6').css({ 'width': '2%', 'right': '0', 'transition-delay': '0.3s' })
        $('.box3line_lef, .box3line_rig').css({ 'top': '0', 'height': '0', 'transition-delay': '0.3s' })
        $('.box3line_bot').css({ 'left': '0', 'width': '0%', 'transition-delay': '0.3s' })
        $('.box3_img').css({ 'opacity': '0', 'transition-delay': '0.3s' });
        $('.box3line_bot2, .box3line_bot3, .box3line_bot4, .box3line_bot5').css({ 'left': '0', 'width': '0', 'transition-delay': '0.3s' })
        $('.box3_tit').css({ 'opacity': '0', 'transition-delay': '0.3s' })
        $('.box3_rig1,.box3_rig2,.box3_rig3,.box3_rig4, .box3_rig5').css({ 'opacity': '0', 'transition-delay': '0.3s' })
    }


    /* box4 - 타입안내 */
    swiper4 = new Swiper('.swiper-container4', {
        effect: 'cube',
        grabCursor: false,
        cubeEffect: {
            shadow: false,
        },
        direction: 'vertical',
        mousewheel: true,
        speed: 1200,
        allowTouchMove: false,
        on: {
            slideChange: function () {
                var showIndex4 = this.activeIndex % this.slides.length;

                if (showIndex4 === 1) {
                    $('.box4line_mid1').css('height', '8%');
                    $('.box4line_mid2').css('height', '75%');
                    $('.box4line_top5').css({ 'width': '45%' });
                    $('.box4line_top6').css('width', '45%');
                    $('.box4_top_txt,.box4_top span').css({ 'opacity': '1', 'transition-delay': '1.4s' });
                    $('.box4_bot_lef').css({ 'opacity': '1', 'transition-delay': '1.4s' });
                    $('.box4_bot_rig').css({ 'opacity': '1', 'transition-delay': '1.4s' });
                    $('.box4_txtbox').css({ 'opacity': '1', 'transition-delay': '1.8s' });
                    $('.box4_img1').css({ 'opacity': '1', 'transition-delay': '2s', 'top': '50%' });
                } else {
                    $('.box4line_mid1').css({ 'height': '0', 'transition-delay': '.3s' });
                    $('.box4line_mid2').css({ 'height': '0', 'transition-delay': '.3s' });
                    $('.box4line_top5').css({ 'width': '0', 'transition-delay': '.3s' });
                    $('.box4line_top6').css({ 'width': '0', 'transition-delay': '.3s' });
                    $('.box4_top_txt, .box4_top span').css({ 'opacity': '0', 'transition-delay': '.3s' });
                    $('.box4_bot_lef').css({ 'opacity': '0', 'transition-delay': '.3s' })
                    $('.box4_bot_rig').css({ 'opacity': '0', 'transition-delay': '.3s' })
                    $('.box4_txtbox').css({ 'opacity': '0', 'transition-delay': '.3s' });
                    $('.box4_img1').css({ 'opacity': '0', 'transition-delay': '.3s', 'top': '0' });
                }
                if (showIndex4 === 0) {
                    $('.box4line_top').css({ 'width': '97%', 'left': '50%', 'transition-delay': '.3s' })
                    $('.box4line_bot').css({ 'width': '97%', 'right': '50%', 'transition-delay': '.3s' })
                    $('.box4line_lef1, .box4line_lef2, .box4line_lef3, .box4line_lef4').css({ 'height': '19%', 'transition-delay': '.3s' })
                    $('.box4line_rig1, .box4line_rig2, .box4line_rig3, .box4line_rig4').css({ 'height': '19%', 'transition-delay': '.3s' })
                    $('.box4line_top1, .box4line_top2, .box4line_top3').css({ 'width': '97%', 'left': '50%', 'transition-delay': '.8s' })
                    $('.guide_txt, .guide_txt2').css({ 'opacity': '1', 'transition-delay': '1.2s' })
                } else {
                    $('.box4line_top').css({ 'width': '0', 'left': '0', 'transition-delay': '.3s' })
                    $('.box4line_bot').css({ 'width': '0', 'right': '0', 'transition-delay': '.3s' })
                    $('.box4line_lef1, .box4line_lef2, .box4line_lef3, .box4line_lef4').css({ 'height': '0', 'transition-delay': '.3s' })
                    $('.box4line_rig1, .box4line_rig2, .box4line_rig3, .box4line_rig4').css({ 'height': '0', 'transition-delay': '.3s' })
                    $('.box4line_top1, .box4line_top2, .box4line_top3').css({ 'width': '0', 'left': '0', 'transition-delay': '.3s' })
                    $('.guide_txt, .guide_txt2').css({ 'opacity': '0', 'transition-delay': '.3s' })
                }
            },
        },
        init: true,
    });


    animateElements();


    var initialIndex3 = swiper3.activeIndex % swiper3.slides.length;
    if (initialIndex3 === 1) {
        $('.box4line_mid1').css('height', '8%');
        $('.box4line_mid2').css('height', '75%');
        $('.box4line_top5').css({ 'width': '45%' });
        $('.box4line_top6').css('width', '45%');
        $('.box4_top_txt, .box4_top span').css({ 'opacity': '1', 'transition-delay': '1.4s' });
        $('.box4_bot_lef').css({ 'opacity': '1', 'transition-delay': '1.4s' });
        $('.box4_bot_rig').css({ 'opacity': '1', 'transition-delay': '1.4s' });
        $('.box4_txtbox').css({ 'opacity': '1', 'transition-delay': '1.8s' });
        $('.box4_img1').css({ 'opacity': '1', 'transition-delay': '2s', 'top': '50%' });
    } else {
        $('.box4line_mid1').css({ 'height': '0', 'transition-delay': '.3s' });
        $('.box4line_mid2').css({ 'height': '0', 'transition-delay': '.3s' });
        $('.box4line_top5').css({ 'width': '0', 'transition-delay': '.3s' });
        $('.box4line_top6').css({ 'width': '0', 'transition-delay': '.3s' });
        $('.box4_top_txt, .box4_top span').css({ 'opacity': '0', 'transition-delay': '.3s' });
        $('.box4_bot_lef').css({ 'opacity': '0', 'transition-delay': '.3s' })
        $('.box4_bot_rig').css({ 'opacity': '0', 'transition-delay': '.3s' })
        $('.box4_txtbox').css({ 'opacity': '0', 'transition-delay': '.3s' });
        $('.box4_img1').css({ 'opacity': '0', 'transition-delay': '.3s', 'top': '0' });
    }
    if (initialIndex3 === 0) {
        $('.box4line_top').css({ 'width': '97%', 'left': '50%', 'transition-delay': '.3s' })
        $('.box4line_bot').css({ 'width': '97%', 'right': '50%', 'transition-delay': '.3s' })
        $('.box4line_lef1, .box4line_lef2, .box4line_lef3, .box4line_lef4').css({ 'height': '19%', 'transition-delay': '.3s' })
        $('.box4line_rig1, .box4line_rig2, .box4line_rig3, .box4line_rig4').css({ 'height': '19%', 'transition-delay': '.3s' })
        $('.box4line_top1, .box4line_top2, .box4line_top3').css({ 'width': '97%', 'left': '50%', 'transition-delay': '.8s' })
        $('.guide_txt, .guide_txt2').css({ 'opacity': '1', 'transition-delay': '1.2s' })
    } else {
        $('.box4line_top').css({ 'width': '0', 'left': '0', 'transition-delay': '.3s' })
        $('.box4line_bot').css({ 'width': '0', 'right': '0', 'transition-delay': '.3s' })
        $('.box4line_lef1, .box4line_lef2, .box4line_lef3, .box4line_lef4').css({ 'height': '0', 'transition-delay': '.3s' })
        $('.box4line_rig1, .box4line_rig2, .box4line_rig3, .box4line_rig4').css({ 'height': '0', 'transition-delay': '.3s' })
        $('.box4line_top1, .box4line_top2, .box4line_top3').css({ 'width': '0', 'left': '0', 'transition-delay': '.3s' })
        $('.guide_txt, .guide_txt2').css({ 'opacity': '0', 'transition-delay': '.3s' })
    }

    /* box5 - 커뮤니티 */
    swiper5 = new Swiper('.swiper-container5', {
        effect: 'cube',
        grabCursor: false,
        cubeEffect: {
            shadow: false,
        },
        direction: 'vertical',
        mousewheel: true,
        speed: 1200,
        allowTouchMove: false,
        on: {
            slideChange: function () {
                var showIndex5 = this.activeIndex % this.slides.length;

                if (showIndex5 === 1) {
                    $('.box5line_top5').css({ 'width': '28%', 'transition-delay': '.8s' });
                    $('.box5line_bot3').css({ 'width': '28%', 'transition-delay': '.8s' });
                    $('.box5line_top6').css({ 'width': '64%', 'left': '34%', 'transition-delay': '.8s' });
                    $('.box5line_bot4').css({ 'width': '64%', 'left': '34%', 'transition-delay': '.8s' });
                    $('.box5line_lef3').css({ 'height': '93%', 'transition-delay': '.8s' });
                    $('.box5_area2_txt').css({ 'opacity': '1', 'transition-delay': '1.2s' });
                    $('.box5_area2_lef').css({ 'transition-delay': '1.4s', 'background': '#fff', 'opacity': '1' });
                    $('.box5_item_txt1, .box5_item_img').css({ 'transition-delay': '1.6s', 'opacity': '1' });
                    $('.itemline_x1, .itemline_x2, .itemline_x3,.itemline_x4,.itemline_x5').css({ 'width': '100%', 'transition-delay': '2.0s' });
                    $('.itemline_y1, .itemline_y2, .itemline_y3, .itemline_y4').css({ 'height': '100%', 'transition-delay': '2.0s' })
                    $('.item').css({ 'opacity': '1', 'transition-delay': '2.6s' })
                    $('.box5_item_bot li').css({ 'opacity': '1', 'transition-delay': '3.2s' })
                    $('.box5_area2_txt2').css({ 'opacity': '1', 'transition-delay': '3.2s' })
                    $('.box5_area2_img').css({ 'transition-delay': '1.6s', 'opacity': '1' })
                    $('.box5_area2_num').css({ 'transition-delay': '2s', 'opacity': '1' })
                } else {
                    $('.box5line_top5').css({ 'width': '31%', 'transition-delay': '.3s' });
                    $('.box5line_bot3').css({ 'width': '31%', 'transition-delay': '.3s' });
                    $('.box5line_top6').css({ 'width': '66%', 'left': '32%', 'transition-delay': '.3s' });
                    $('.box5line_bot4').css({ 'width': '66%', 'left': '32%', 'transition-delay': '.3s' });
                    $('.box5line_lef3').css({ 'height': '1%', 'transition-delay': '.3s' });
                    $('.box5_area2_txt').css({ 'opacity': '0', 'transition-delay': '.3s' });
                    $('.box5_area2_lef').css({ 'transition-delay': '.3s', 'background': 'transparent', 'opacity': '0' });
                    $('.box5_item_txt1, .box5_item_img').css({ 'transition-delay': '0.3s', 'opacity': '0' });
                    $('.itemline_x1, .itemline_x2, .itemline_x3,.itemline_x4,.itemline_x5').css({ 'width': '0', 'transition-delay': '0.3s' });
                    $('.itemline_y1, .itemline_y2, .itemline_y3, .itemline_y4').css({ 'height': '0', 'transition-delay': '0.3s' })
                    $('.item').css({ 'opacity': '0', 'transition-delay': '0.3s' })
                    $('.box5_item_bot li').css({ 'opacity': '0', 'transition-delay': '0.3s' })
                    $('.box5_area2_txt2').css({ 'opacity': '0', 'transition-delay': '0.3s' })
                    $('.box5_area2_img').css({ 'transition-delay': '.3s', 'opacity': '0' })
                    $('.box5_area2_num').css({ 'transition-delay': '.3s', 'opacity': '0' })
                }
                if (showIndex5 === 0) {
                    $('.box5line_top1, .box5line_top2').css({ 'width': '46%' })
                    $('.box5line_bot1, .box5line_bot2').css({ 'width': '46%' })
                    $('.box5line_center1, .box5line_center2,.box5line_center3').css({ 'height': '24%' })
                    $('.box5line_rig1,.box5line_rig2,.box5line_rig3').css({ 'height': '24%' })
                    $('.box5line_lef').css({ 'height': '93%' })
                    $('.box5_txt').css({ 'opacity': '1', 'transition-delay': '.8s' })
                    $('.box5_img1, .box5_txt2').css({ 'opacity': '1', 'transition-delay': '2s' })
                    $('.box5_img2').css({ 'opacity': '1', 'transition-delay': '1.4s' })
                    $('.box5line_top3, .box5line_top4').css({ 'width': '46%', 'transition-delay': '2.2s' })
                    $('.box5_rig1_txt3, .box5_rig2_txt1, .box5_rig3_txt1').css({ 'opacity': '1', 'transition-delay': '2.4s' })
                    $('.box5_rig1_txt1, .box5_rig1_txt2, .box5_rig2_txt2,.box5_rig2_txt3,.box5_rig2_img, .box5_rig3_txt2,.box5_rig3_txt3,.box5_rig3_txt4').css({ 'opacity': '1', 'transition-delay': '2.6s' })
                } else {
                    $('.box5line_top1, .box5line_top2').css({ 'width': '0%' })
                    $('.box5line_bot1, .box5line_bot2').css({ 'width': '0%' })
                    $('.box5line_center1, .box5line_center2,.box5line_center3').css({ 'height': '0' })
                    $('.box5line_rig1,.box5line_rig2,.box5line_rig3').css({ 'height': '0' })
                    $('.box5line_lef').css({ 'height': '0' })
                    $('.box5_txt').css({ 'opacity': '0', 'transition-delay': '.3s' })
                    $('.box5_img1, .box5_txt2').css({ 'opacity': '0', 'transition-delay': '.3s' })
                    $('.box5_img2').css({ 'opacity': '0', 'transition-delay': '.3s' })
                    $('.box5line_top3, .box5line_top4').css({ 'width': '1%', 'transition-delay': '.3s' })
                    $('.box5_rig1_txt3, .box5_rig2_txt1, .box5_rig3_txt1').css({ 'opacity': '0', 'transition-delay': '.3s' })
                    $('.box5_rig1_txt1, .box5_rig1_txt2, .box5_rig2_txt2,.box5_rig2_txt3,.box5_rig2_img, .box5_rig3_txt2,.box5_rig3_txt3,.box5_rig3_txt4').css({ 'opacity': '0', 'transition-delay': '.3s' })
                }
            },
        },
        init: true,
    });


    animateElements();


    var initialIndex4 = swiper4.activeIndex % swiper4.slides.length;
    if (initialIndex4 === 1) {
        $('.box5line_top5').css({ 'width': '28%', 'transition-delay': '.8s' });
        $('.box5line_bot3').css({ 'width': '28%', 'transition-delay': '.8s' });
        $('.box5line_top6').css({ 'width': '64%', 'left': '34%', 'transition-delay': '.8s' });
        $('.box5line_bot4').css({ 'width': '64%', 'left': '34%', 'transition-delay': '.8s' });
        $('.box5line_lef3').css({ 'height': '93%', 'transition-delay': '.8s' });
        $('.box5_area2_txt').css({ 'opacity': '1', 'transition-delay': '1.2s' });
        $('.box5_area2_lef').css({ 'transition-delay': '1.4s', 'background': '#fff', 'opacity': '1' });
        $('.box5_item_txt1, .box5_item_img').css({ 'transition-delay': '1.6s', 'opacity': '1' });
        $('.itemline_x1, .itemline_x2, .itemline_x3,.itemline_x4, .itemline_x5').css({ 'width': '100%', 'transition-delay': '2.0s' });
        $('.itemline_y1, .itemline_y2, .itemline_y3, .itemline_y4').css({ 'height': '100%', 'transition-delay': '2.0s' });
        $('.item').css({ 'opacity': '1', 'transition-delay': '2.6s' })
        $('.box5_item_bot li').css({ 'opacity': '1', 'transition-delay': '3.2s' })
        $('.box5_area2_txt2').css({ 'opacity': '1', 'transition-delay': '3.2s' })
        $('.box5_area2_img').css({ 'transition-delay': '1.6s', 'opacity': '1' })
        $('.box5_area2_num').css({ 'transition-delay': '2s', 'opacity': '1' })

    } else {
        $('.box5line_top5').css({ 'width': '31%', 'transition-delay': '.3s' });
        $('.box5line_bot3').css({ 'width': '31%', 'transition-delay': '.3s' });
        $('.box5line_top6').css({ 'width': '66%', 'left': '32%', 'transition-delay': '.3s' });
        $('.box5line_bot4').css({ 'width': '66%', 'left': '32%', 'transition-delay': '.3s' });
        $('.box5line_lef3').css({ 'height': '1%', 'transition-delay': '.3s' });
        $('.box5_area2_txt').css({ 'opacity': '0', 'transition-delay': '.3s' });
        $('.box5_area2_lef').css({ 'transition-delay': '.3s', 'background': 'transparent', 'opacity': '0' });
        $('.box5_item_txt1, .box5_item_img').css({ 'transition-delay': '0.3s', 'opacity': '0' });
        $('.itemline_x1, .itemline_x2, .itemline_x3,.itemline_x4,.itemline_x5').css({ 'width': '0', 'transition-delay': '0.3s' });
        $('.itemline_y1, .itemline_y2, .itemline_y3, .itemline_y4').css({ 'height': '0', 'transition-delay': '0.3s' })
        $('.item').css({ 'opacity': '0', 'transition-delay': '0.3s' })
        $('.box5_item_bot li').css({ 'opacity': '0', 'transition-delay': '0.3s' })
        $('.box5_area2_txt2').css({ 'opacity': '0', 'transition-delay': '0.3s' })
        $('.box5_area2_img').css({ 'transition-delay': '.3s', 'opacity': '0' })
        $('.box5_area2_num').css({ 'transition-delay': '.3s', 'opacity': '0' })
    }
    if (initialIndex4 === 0) {
        $('.box5line_top1, .box5line_top2').css({ 'width': '46%' })
        $('.box5line_bot1, .box5line_bot2').css({ 'width': '46%' })
        $('.box5line_center1, .box5line_center2,.box5line_center3').css({ 'height': '24%' })
        $('.box5line_rig1,.box5line_rig2,.box5line_rig3').css({ 'height': '24%' })
        $('.box5line_lef').css({ 'height': '93%' })
        $('.box5_txt').css({ 'opacity': '1', 'transition-delay': '.8s' })
        $('.box5_img1, .box5_txt2').css({ 'opacity': '1', 'transition-delay': '2s' })
        $('.box5_img2').css({ 'opacity': '1', 'transition-delay': '1.4s' })
        $('.box5line_top3, .box5line_top4').css({ 'width': '46%', 'transition-delay': '2.2s' })
        $('.box5_rig1_txt3, .box5_rig2_txt1, .box5_rig3_txt1').css({ 'opacity': '1', 'transition-delay': '2.4s' })
        $('.box5_rig1_txt1, .box5_rig1_txt2, .box5_rig2_txt2,.box5_rig2_txt3,.box5_rig2_img, .box5_rig3_txt2,.box5_rig3_txt3,.box5_rig3_txt4').css({ 'opacity': '1', 'transition-delay': '2.6s' })
    } else {
        $('.box5line_top1, .box5line_top2').css({ 'width': '0' })
        $('.box5line_bot1, .box5line_bot2').css({ 'width': '0' })
        $('.box5line_center1, .box5line_center2, .box5line_center3').css({ 'height': '0' })
        $('.box5line_rig1,.box5line_rig2,.box5line_rig3').css({ 'height': '0' })
        $('.box5line_lef').css({ 'height': '0' })
        $('.box5_txt').css({ 'opacity': '0', 'transition-delay': '.3s' })
        $('.box5_img1, .box5_txt2').css({ 'opacity': '0', 'transition-delay': '.3s' })
        $('.box5_img2').css({ 'opacity': '0', 'transition-delay': '.3s' })
        $('.box5line_top3, .box5line_top4').css({ 'width': '1%', 'transition-delay': '.3s' })
        $('.box5_rig1_txt3, .box5_rig2_txt1, .box5_rig3_txt1').css({ 'opacity': '0', 'transition-delay': '.3s' })
        $('.box5_rig1_txt1, .box5_rig1_txt2, .box5_rig2_txt2,.box5_rig2_txt3,.box5_rig2_img, .box5_rig3_txt2,.box5_rig3_txt3,.box5_rig3_txt4').css({ 'opacity': '0', 'transition-delay': '.3s' })
    }
});