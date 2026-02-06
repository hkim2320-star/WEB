                var photos = [];
                var fileNames = [];
                var image;
                var openList = '<li class="partner">';
                var closeList = '</li>';

                for (var i = 1; i < 7; i++) {
                    fileNames.push("partner-" + i + ".png");
                }

                for (var i =0; i < fileNames.length; i++) {
                    image = '<img src="images/' + fileNames[i] + '">';
                    photos.push(openList + image + closeList);
                }

                document.getElementById("partners").innerHTML = photos.join(" ");

                $(document).ready(function() {

                $('.lightbox-toggle').click(function() {
                    $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
                    $('.box').fadeIn();

                    if ($('.box').contents('img')) {
                        $('.box').contents().remove('img');
                    }

                    var $altvalue = $(this).attr('alt');

                    if ($altvalue == "West Cliff") {
                        var img = $('#photo:nth-child(1) img').clone();
                        $('.box').append(img);
                        }
                    });

                    $('.close, .backdrop').click(function() {
                        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function() {
                            $('.backdrop').css('display', 'none');
                        });
                        $('.box').fadeOut();
                    });
                });