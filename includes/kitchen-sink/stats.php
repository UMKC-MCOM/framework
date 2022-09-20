<div class="content-row <?= empty($with_image) ? 'bg-umkc-gray' : ''; ?>">
  <?php if ( !empty($with_image) ) : ?>
    <h2>Photo and Stats</h2>
    <p class="highlight">Bacon ipsum dolor amet meatball jowl kielbasa pork belly buffalo. Cow pastrami burgdoggen spare ribs strip steak.</p>
  <?php endif; ?>
  <div class="benefits-list <?= empty($with_image) ? 'benefits-list--small-stats jc-evenly' : ''; ?>">
    <?php if ( !empty($with_image) ) : ?>
      <img alt="" class="benefits-list__image" src="https://picsum.photos/seed/picsum/448/562" loading="lazy" />
    <?php endif; ?>
    <div class="benefits-list__group">
      <div class="<?= empty($with_image) ? 'benefits-list benefits-list--small-stats jc-evenly' : 'benefits-list--stats'; ?>">
        <div class="benefits-list__item benefits-list__item--stats">
          <div class="benefits-list__stats">
            <?= empty($with_image) ? '<h2 class="benefits-list__title benefits-list__title--heavy">' : ''; ?>
              #1
            <?= empty($with_image) ? '</h2>' : ''; ?>
            </div>
          <div class="benefits-list__details">
            <h3 class="benefits-list__title benefits-list__title--light">Point</h3>
            <?php if ( !empty($with_image) ) : ?>
            <p>Bacon ipsum dolor amet meatball jowl kielbasa pork belly buffalo. Cow pastrami burgdoggen spare ribs strip steak.</p>
            <?php endif; ?>
          </div>
        </div>
        <div class="benefits-list__item benefits-list__item--stats">
          <div class="benefits-list__stats">
            <?= empty($with_image) ? '<h2 class="benefits-list__title benefits-list__title--heavy">' : ''; ?>
              #2
            <?= empty($with_image) ? '</h2>' : ''; ?>
          </div>
          <div class="benefits-list__details">
            <h3 class="benefits-list__title benefits-list__title--light">Point</h3>
            <?php if ( !empty($with_image) ) : ?>
            <p>Bacon ipsum dolor amet meatball jowl kielbasa pork belly buffalo. Cow pastrami burgdoggen spare ribs strip steak.</p>
            <?php endif; ?>
          </div>
        </div>
        <div class="benefits-list__item benefits-list__item--stats">
          <div class="benefits-list__stats">
            <?= empty($with_image) ? '<h2 class="benefits-list__title benefits-list__title--heavy">' : ''; ?>
              #3
            <?= empty($with_image) ? '</h2>' : ''; ?>
          </div>
          <div class="benefits-list__details">
            <h3 class="benefits-list__title benefits-list__title--light">Point</h3>
            <?php if ( !empty($with_image) ) : ?>
            <p>Bacon ipsum dolor amet meatball jowl kielbasa pork belly buffalo. Cow pastrami burgdoggen spare ribs strip steak.</p>
            <?php endif; ?>
          </div>
        </div>
        <?php if ( !empty($with_image ) ) : ?>
          <div class="benefits-list__item benefits-list__item--stats">
            <div class="benefits-list__stats">
              <?= empty($with_image) ? '<h2 class="benefits-list__title benefits-list__title--heavy">' : ''; ?>
                #4
              <?= empty($with_image) ? '</h2>' : ''; ?>
            </div>
            <div class="benefits-list__details">
              <h3 class="benefits-list__title benefits-list__title--light">Point</h3>
              <?php if ( !empty($with_image) ) : ?>
              <p>Bacon ipsum dolor amet meatball jowl kielbasa pork belly buffalo. Cow pastrami burgdoggen spare ribs strip steak.</p>
              <?php endif; ?>
            </div>
          </div>
        <?php endif; ?>
      </div>
    </div>
    <?php if ( !empty($with_image) ) : ?>
    <div class="benefits-list__cta">
      <p><a href="#" class="button button--arrow button--umkc-yellow">Hello there!</a></p>
    </div>
    <?php endif; ?>
  </div>
</div>
