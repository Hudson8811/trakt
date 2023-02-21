import $ from "jquery";

export function setMaskHeader(position = 0){
    let header = $('.header--main');
    let headerDark = $('.header--dark');
    let procentMinus = 100 - parseFloat(position);
    $(header).css({"mask-image": "linear-gradient(-90deg, black "+procentMinus+"%, transparent "+procentMinus+"% 100%)",
        "-webkit-mask-image": "linear-gradient(-90deg, black "+procentMinus+"%, transparent "+procentMinus+"% 100%)"});
    $(headerDark).css({"mask-image": "linear-gradient(90deg, black "+procentMinus+"%, transparent "+procentMinus+"% 100%)",
        "-webkit-mask-image": "linear-gradient(90deg, black "+parseFloat(position)+"%, transparent "+parseFloat(position)+"% 100%)"});
}

export function splitLetterSpan(target,marker){
    if ($(target).find('p').length > 0){
        $(target).find('p').each(function (){
            let words = $(this).text().split(' ');
            $(this).empty().html(function() {
                for (let i = 0; i < words.length; i++) {
                    if (i == 0) {
                        $(this).append('<span>' + words[i] + '</span>');
                    } else {
                        $(this).append(' <span>' + words[i] + '</span>');
                    }
                }
            });
            $(this).find('span').each(function (){
                let elem = $(this);
                let characters = elem.text().split("");
                elem.empty();
                $.each(characters, function (i, el) {
                    let random =  Math.floor(Math.random() * 4) + 1;
                    elem.append("<i class='"+marker+random+"'>" + el + "</i>");
                });
            });
        });
    } else {
        let words = $(target).text().split(' ');
        $(target).empty().html(function() {
            for (let i = 0; i < words.length; i++) {
                if (i == 0) {
                    $(this).append('<span>' + words[i] + '</span>');
                } else {
                    $(this).append(' <span>' + words[i] + '</span>');
                }
            }
        });
        $(target).find('span').each(function (){
            let elem = $(this);
            let characters = elem.text().split("");
            elem.empty();
            $.each(characters, function (i, el) {
                let random =  Math.floor(Math.random() * 4) + 1;
                elem.append("<i class='"+marker+random+"'>" + el + "</i>");
            });
        });
    }
}
