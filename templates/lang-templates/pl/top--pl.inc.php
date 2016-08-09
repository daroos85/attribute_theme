<section id="sticky-top">
  <div class="progress-bar">
    <div class="loaded"></div>
    <div class="remaining"></div>
  </div>



  <div class="container">

    <div class="row">
      <div class="menu-left">
        <div class="logo">
          <a href="/"><img src="/<?php echo drupal_get_path('theme',$GLOBALS['theme']); ?>/images/logo-attribute.png" alt="Logo attribute"></a>
        </div>

        <div class="hamburger">
          <div class="expandMenu">
            ROZWIŃ<br>MENU
          </div>
          <img src="/<?php echo drupal_get_path('theme',$GLOBALS['theme']); ?>/images/nalesnik.png" class="expandMenu-pancake">
        </div>
      </div>


      <div class="menu-right">
        <div class="hide-mobile">
          <div class="text-right">
            <div class="contact-top-front inline-block">
              <div class="phone">
                <a href="tel:+48602109828">+48 602 109 828</a>
              </div>
              <div class="mail">
                <a href="mailto:hello@attribute.pl">hello@attribute.pl</a>
              </div>
              <div class="lang-switch">
                <?php
                  print render($page['lang_switch']);
                ?>
              </div>
            </div>
          </div>
        </div>


        <?php
          $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
          // echo $uri;
        ?>

        <div class="menu-top">
          <ul class="main-menu">
            <div class="ultraNarrow-hide hide-mobile"><li <?php if ($uri == '/' || $uri == '/pl') { echo 'class="active"';} ?>><a href="/">Start</a></li></div>
            <li <?php if ($uri == '/portfolio') { echo 'class="active"';} ?>><a href="/portfolio">Portfolio</a></li>
            <div class="ultraUltraNarrow-hide"><li <?php if ($uri == '/services') { echo 'class="active"';} ?>><a href="/services">Oferta</a></li></div>
            <div class="ultraNarrow-hide"><li <?php if ($uri == '/about-us') { echo 'class="active"';} ?>><a href="/about-us">O nas</a></li></div>
            <li <?php if ($uri == '/contact') { echo 'class="active"';} ?>><a href="/contact">Kontakt</a></li>
            <li class="lang-switch-2 show-mobile">
              <?php
                print render($page['lang_switch']);
              ?>
            </li>
            <li class="hide-menu">schowaj menu</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
