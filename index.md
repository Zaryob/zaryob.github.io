---
title: Main Page
permalink: /
---

<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>The Grumbling Times</title>
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital@0;1&family=Playfair+Display+SC:wght@900&family=Playfair+Display:ital,wght@0,800;1,800&family=Manrope:wght@800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css'><link rel="stylesheet" href="/assets/css/style.css">

</head>
<body>

<!-- partial:index.partial.html -->
<div class="main__wrapper">
  <main>
    <!-- Starting of Topside -->

    <h1>The Grumbling Times</h1>
    <aside>
      <div>
        <div class="issue"><a href="https://zaryob.github.io">Home</a></div>
<div class="issue">Issue #13 </div>
        <div class="date">{{ site.time | date: "%a, %b %d, %y" }}</div>
        <div class="edition">Personal Edition</div>
      </div>
    </aside>

    <!-- End of Topside -->
    <!-- Latest Blog -->
    {% for post in site.posts limit:1 %}

    <h2 class="title--large main-title"><a href="{{site.baseurl}}{{post.url}}">Latest: {{post.title}}</a></h2>
    <div class="main-text multi-column">
      <p>{{ post.content | strip_html | strip_newlines | truncate: 900 }}</p>
    </div>

    <a class="terrarium" href="{{site.baseurl}}{{post.url}}" target="_blank">
      <figure>
          {% if post.image %}
          <img src="/assets/img/{{post.image}}"/>
          {% else %}
          <img src="/assets/img/temple.jpg"/>
          {% endif %}

          {% if post.slogan %}

        <figcaption>{{post.image}}</figcaption>
          {% endif %}
      </figure>
    </a>
    {% endfor %}
    <!-- End for Latest post-->
    <!-- Second Post -->
    {% for post in site.posts offset:1 limit:1 %}

      <a class="item-with-image plan span--2 long--2" href="{{site.baseurl}}{{post.url}}" target="_blank">
        {% if post.image %}
        <img src="/assets/img/{{post.image}}"/>
        {% else %}
        <img src="/assets/img/temple.jpg"/>
        {% endif %}


        <h4>{{post.title}}</h4>
        <div class="multi-column">
          <p>{{ post.content | strip_html | strip_newlines | truncate: 150 }}</p>
        </div>
      </a>
    {% endfor %}

    <!-- End of Second post -->  

    <a class="hogwarts" href="https://sourceforge.net/projects/sulinos/" target="_blank">
        <div class="hogwarts__title">SulinOS is online.</div>
        <div class="hogwarts__image">
          <span> You can download from sourceforge.</span>
          <i class="fas fa-arrow-right"></i>
        </div>
    </a>

    {% for post in site.posts offset:2 limit:1 %}
      <a class="item-with-image pasta with-border" href="{{site.baseurl}}{{post.url}}" target="_blank">
        <h4>{{post.title}}</h4>
        <p>{{ post.content | strip_html | strip_newlines | truncate: 80 }}</p>
      </a>
    {% endfor %}

    {% for post in site.posts offset:3 limit:1 %}
      <a class="item-with-image magazine with-border" href="{{site.baseurl}}{{post.url}}" target="_blank">
        <h4>{{post.title}}</h4>
        <p>{{ post.content | strip_html | strip_newlines | truncate: 60 }}</p>
      </a>
    {% endfor %}

    {% for post in site.posts offset:4 limit:1 %}
      <a class="item-with-image style" href="{{site.baseurl}}{{post.url}}" target="_blank">
        <h4>{{post.title}}</h4>
        <p>{{ post.content | strip_html | strip_newlines | truncate: 300 }}</p>
      </a>
    {% endfor %}

    {% for post in site.posts offset:5 limit:1 %}

      <a class="item-with-image toggles" href="{{site.baseurl}}{{post.url}}" target="_blank">
        {% if post.image %}
        <img src="/assets/img/{{post.image}}"/>
        {% else %}
        <img src="/assets/img/temple.jpg"/>
        {% endif %}
        <h4>{{post.title}}</h4>
        <p>{{ post.content | strip_html | strip_newlines | truncate: 100 }}</p>
      </a>
    {% endfor %}


    <a class="menu" href="{{site.baseurl}}/archives.html" target="_blank">
      <figure><img src="/assets/img/misc/library.jpg">
        <figcaption>See more!</figcaption>
      </figure>
    </a>

    <a class="social" href="https://www.bbc.com/news/coronavirus" target="_blank">
      <img class="social__image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/showcase-social.gif"/>
      <div class="social__subtitle">World News</div>
      <div class="social__content">Looks like Covid-19 is gonna be around for a while so here is another friendly reminder to practice social distancing. Oh, and wear a mask! </div>
    </a>


    <div class="item-with-image cssgrid-collection">
      <a class="cssgrid-collection__image" href="https://github.com/Zaryob" target="_blank">
      <img src="/assets/img/github.jpg"/></a>
         <div class="cssgrid-collection__content">
           <h4>
              <a href="https://github.com/Zaryob" target="_blank">Hundreds of ideas can come from a person. The best one is as logical as the worst.</a>
            </h4>
           <div class="multi-column-3">
             <p>The ability to think is the rarest human has ever had. We are much more successful than just thinking about the moment and making inferences about the moment. Perhaps we are the only creature that can think of the future.When we combine with learning, we call this ability creativity. There are still no creatures or tools, so that he can break this wall of creativity "on his own".github or gitlab or other code sharing sites do not only allow people to unlock their code. No it just lets go. These types of sites allow people to open the thoughts on the direct horizons to others. This is the computer that is open in front of us and managing it is actually the most magical thing for us ascetic creatures (I don't believe in magic even though the theme looks like a harry potter theme).
               Now I am going back to the blogging job that I had disrupted. I open my mind, I open my code. I will do these things as if someone is affected by me. Or it may affect me.

               This is completely magical
             </p>
           </div>
         </div>
       </div>

    <!-- Pretty rightside bar -->
    <div class="sidebar">
      <h3 class="title--big">Man of Codes</h3>

      <!-- Profile -->
      <a class="pie" href="https://github.com/Zaryob" target="_blank">
        <img class="pie__image" src="/assets/img/profile_pictures/22801690.jpeg"/>

        <div class="pie__subtitle">Suleyman Poyraz </div>
        <div class="pie__content">
          <h4>Magic powers exist only when facing the computer!</h4>
          <p>Expert in Parseltongue (just joke they are just Python3 and Pyhon2), Python C-api Uses. Creator of the SulinOS distro. Raspberry Pi lover and help with translation. A nonsense specialist GeekMan</p>
        </div>
      </a>

      <!-- Donut -->
      <a class="sidebar-item captcha"  target="_blank">
        <h5>Donut 3D is a revolution of illusion for the muggle world</h5>
        <p>The understanding of entertainment for people who don't have magic (muggle or no-maj) has completely changed with the invention of the computer. However, the creation of 3-dimensional objects with 2-D screens is ingenious. Our author does not hesitate to present an example of this work in <a href="https://github.com/Zaryob/donut">his Github account. (click that text to materialize page)</a>
        </p>
      </a>

      <!-- Rust -->
      <a class="sidebar-item slack-ui with-border" href="" target="_blank">
        <h5>It is not possible to understand the Rust language</h5>
        <p>Many new rustacean candidates suffer from this issue. He claims that language is still incomprehensible and has no standards. A new series of articles was created to clarify all these claims. Stay almost waiting, almost done.</p>
      </a>
    </div>
  </main>
</div>
<!-- partial -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
</body>
</html>
