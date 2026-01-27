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