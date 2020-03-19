---
layout: page
title: İletişim
permalink: /iletisim/
image: contact.jpg
imagehash: 2af2a773ed9404ccf5cc076e63759fed
---

<body>

    <div class="container">
        <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
                <p>İletişime mi geçmek istiyorsun. Hemen bana mesaj gönder. En yakın zamanda görüşmek dileğiyle.</p>
                <form id="contactForm" name="sentMessage" novalidate="novalidate">
                    <div class="control-group">
                        <div class="form-group floating-label-form-group controls"><label>Name</label><input class="form-control" type="text" id="name" required="" placeholder="Name"><small class="form-text text-danger help-block"></small></div>
                    </div>
                    <div class="control-group">
                        <div class="form-group floating-label-form-group controls"><label>Email Address</label><input class="form-control" type="email" id="email" required="" placeholder="Email Address"><small class="form-text text-danger help-block"></small></div>
                    </div>
                    <div class="control-group">
                        <div class="form-group floating-label-form-group controls"><label>Phone Number</label><input class="form-control" type="tel" id="phone" required="" placeholder="Phone Number"><small class="form-text text-danger help-block"></small></div>
                    </div>
                    <div class="control-group">
                        <div class="form-group floating-label-form-group controls mb-3"><label>Message</label><textarea class="form-control" id="message" data-validation-required-message="Please enter a message." required="" placeholder="Message" rows="5"></textarea><small class="form-text text-danger help-block"></small></div>
                    </div>
                    <div id="success"></div>
                    <div class="form-group"><button class="btn btn-primary" id="sendMessageButton" type="submit">Send</button></div>
                </form>
            </div>
        </div>
    </div>

    <div id="fb-root"></div>
        <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
		    <script>(function(d, s, id) {
		      var js, fjs = d.getElementsByTagName(s)[0];
		      if (d.getElementById(id)) return;
		      js = d.createElement(s); js.id = id;
		      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=1409800599270506";
		      fjs.parentNode.insertBefore(js, fjs);
		    }(document, 'script', 'facebook-jssdk'));</script>


	    <div class="fb-page" data-href="https://www.facebook.com/suleyman.poyraz.904/" data-small-header="true" data-adapt-container-width="false" data-hide-cover="true" data-show-facepile="true"><blockquote cite="https://www.facebook.com/suleyman.poyraz.904/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/suleyman.poyraz.904/">Suleyman Poyraz</a></blockquote>
            </div>
	</div>
    </div>

</body>
