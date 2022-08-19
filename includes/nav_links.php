<?php if ( !empty($links) ) : ?>
  <?php foreach ( $links as $link ) : ?>
    <li <?= !empty($link['itemClass']) ? "class=\"${link['itemClass']}\"" : "" ?>><a href="<?= $link['href'];?>" <?= !empty($link['linkClass']) ? "class=\"${link['linkClass']}\"": "" ?>><?= $link['title']; ?></a></li>
  <?php endforeach; ?>
<?php else : ?>
  <p>You forgot something, sparky</p>
<?php endif;
$links = array();
