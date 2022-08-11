console.log(document.cookie);

            function setCookie(cookieName, cookieValue, days) {
                try {
                    if(isNaN(days)) {
                        throw "Not a number"
                    } else {
                        let currentDate = new Date().getTime();
                        let expiryDate = currentDate + (days*86400000);
                        expiryDate = expiryDate.toLocaleString();
                        console.log(expiryDate);

                    }
                } catch(e) {
                    console.error(e);
                }
            }

            setCookie("name", "Chris", 2);