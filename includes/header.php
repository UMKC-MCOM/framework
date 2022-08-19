<header>
  <div class="bg-umkc-blue stripes header">
    <h1 class="site-title"><a class="text-white" href="/">University of Missouri - Kansas City</a></h1>
    <nav class="header__nav" aria-label="header__nav">
      <ul class="nav nav--inline">
        <?php
          $links = array(
            [ "href" => "#", "title" => "Quick Links"],
            [ "href" => "#", "title" => "To Do"],
            [ "href" => "", "title" => "Important Stuff"],
            [ "href" => "", "title" => "|"],
            [ "href" => "#", "title" => "Audience"],
            [ "href" => "#", "title" => "Gateway"],
            [ "href" => "#", "title" => "Type"],
            [ "href" => "#", "title" => "Links"]
          );
          include 'nav_links.php';
        ?>
      </ul>
    </nav>
  </div>
  <div class="bg-umkc-blue header header--secondary">
    <div class="logo">
      <a href="/" class="logo--link">
        <svg class="logo--image" aria-label="University of Missouri. Kansas City." role="img"><use xlink:href="#umkc"></use></svg>
      </a>
    </div>
    <button class="menu o-btn main-navigation__menu" data-toggle=".main-navigation">
      <svg class="main-navigation__icon main-navigation__icon--menu" aria-label="Open navigation menu">
        <use xlink:href="#menu"></use>
      </svg>
  </div>
  <?php include 'navigation.php'; ?>
</header>
