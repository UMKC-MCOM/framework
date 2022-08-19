<nav aria-label="Site Navigation" class="main-navigation main-navigation--blue" id="main-navigation">
  <div class="logo logo--mobile-nav">
    <a href="/" class="logo--link">
      <svg class="logo--image" aria-label="University of Missouri. Kansas City." role="img"><use xlink:href="#umkc"></use></svg>
    </a>
  </div>
  <ul>
    <?php
      $links = array(
        ["href" => "#", "title" => "Thing", "itemClass" => "main-navigation__item", 'linkClass' => "main-navigation__link"],
        ["href" => "#", "title" => "Another", "itemClass" => "main-navigation__item", 'linkClass' => "main-navigation__link"],
        ["href" => "#", "title" => "Option", "itemClass" => "main-navigation__item", 'linkClass' => "main-navigation__link"],
        ["href" => "#", "title" => "Student", "itemClass" => "main-navigation__item", 'linkClass' => "main-navigation__link"],
        ["href" => "#", "title" => "Driven", "itemClass" => "main-navigation__item", 'linkClass' => "main-navigation__link"],
        ["href" => "#", "title" => "Navigation", "itemClass" => "main-navigation__item", 'linkClass' => "main-navigation__link"],
        ["href" => "#", "title" => "Items", "itemClass" => "main-navigation__item", 'linkClass' => "main-navigation__link"]
      );
      include "nav_links.php";
    ?>
  </ul>
  <button class="main-navigation__close o-btn" aria-label="Close main navigation" data-toggle=".main-navigation">
    <svg class="icon main-navigation__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <use xlink:href="#close" />
    </svg>
  </button>
</nav>
