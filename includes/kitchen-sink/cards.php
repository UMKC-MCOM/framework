<?php if ( !empty($with_image) ) : ?>
  <div class="content-row">
    <h2 class="text-center">Cards - Photos and links</h2>
    <p class="highlight text-center">Bacon ipsum dolor amet meatball jowl kielbasa pork belly buffalo. Cow pastrami burgdoggen spare ribs strip steak.Bacon ipsum dolor amet meatball jowl kielbasa pork belly buffalo. Cow pastrami burgdoggen spare ribs strip steak.</p>
  </div>
<?php else : ?>
  <div class="content-row">
    <h2>Cards</h2>
  </div>
<?php endif; ?>

  <div class="cards <?= !empty($bg_color) ? "bg-" . $bg_color . " cards--has-bg" : ''; ?>">
    <div class="cards__group">
      <?php for ( $i = 0; $i < 3; $i++ ) : ?>
      <div class="cards__item <?= !empty($with_image) ? "cards__item--centered" : ''; ?>">
        <?php if ( !empty($with_image) ) : ?>
          <img src="https://picsum.photos/seed/picsum/352/268" loading="lazy" />
          <div class="cards__content">
        <?php endif; ?>
          <h3 class="cards__title">Headline Headline</h3>
          <p>Bacon ipsum dolor amet meatball jowl kielbasa pork belly buffalo. Cow pastrami burgdoggen spare ribs strip steak.
          <?php if ( !empty($link_cta) ) : ?>
            </p><p><a href="#" class="button button--cta button--umkc-yellow">Button Text</a></p>
          <?php elseif ( !empty($link) ) : ?>
            <a href="#" class="cards__link">Button Text</a></p>
          <?php else : ?>
            </p>
          <?php endif; ?>
        <?php if ( !empty($with_image) ) : ?>
        </div>
        <?php endif; ?>
      </div>
      <?php endfor; ?>
    </div>
  </div>
