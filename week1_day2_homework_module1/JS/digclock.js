            function currentTime() {
                var d = new Date();
                var hr = d.getHours();
                var min = d.getMinutes();
                var sec = d.getSeconds();
                var ampm;

                var utchr = d.getUTCHours();
                var timeDiff;
                var adjTimeDiff;
                var timeZone;

                timeDiff = utchr - hr;

                if (sec < 10) {
                    sec = "0" + sec;
                }
                if (min < 10) {
                    min = "0" + min;
                }
                if (hr == 12) {
                    ampm = "PM";
                } else if (hr > 12) {
                    hr -= 12;
                    ampm = "PM";
                } else {
                    ampm = "AM";
                }

                if (timeDiff < 0) {
                    adjTimeDiff = timeDiff + 24;
                } else {
                    adjTimeDiff = timeDiff;
                }
                if (adjTimeDiff >= 7 && adjTimeDiff <= 9) {
                    timeZone = "PT";
                } else if (adjTimeDiff >= 5 && adjTimeDiff <= 6) {
                    timeZone = "MT";
                } else if (adjTimeDiff >= 4 && adjTimeDiff <=5) {
                    timeZone = "CT";
                } else {
                    timeZone = "ET";
                }

                var time = hr + ":" + min + ":" + sec + " " + ampm + timeZone;
                document.getElementById("clock").innerText = time;
            }

            setInterval(currentTime, 1000)
            currentTime();

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

                function disableButton() {
                    document.getElementById("submit").disabled = true;
                }
                disableButton();
                