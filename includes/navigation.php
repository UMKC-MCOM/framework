<nav aria-label="Site Navigation" class="main-navigation" id="main-navigation">
  <ul class="main-navigation__list">
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
</nav>
