<div class="content-row">
  <?php if ( empty($with_image) ) : ?>
    <h2>Benefits List without Photo</h2>
    <p class="highlight">Bacon ipsum dolor amet meatball jowl kielbasa pork belly buffalo. Cow pastrami burgdoggen spare ribs strip steak.</p>
  <?php endif; ?>
  <div class="benefits-list">
    <?php if ( !empty($with_image) ) : ?>
    <img alt="" class="benefits-list__image" src="https://picsum.photos/seed/picsum/448/535" loading="lazy" />
    <?php endif; ?>
    <div class="benefits-list__group">
      <?php if ( !empty($with_image) ) : ?>
        <h2>Benefits List with Photo</h2>
        <p class="highlight">Bacon ipsum dolor amet meatball jowl kielbasa pork belly buffalo. Cow pastrami burgdoggen spare ribs strip steak.</p>
      <?php endif; ?>

      <div class="benefits-list__points">
        <div class="benefits-list__item">
          <div class="benefits-list__icon">1</div>
          <div class="benefits-list__details">
            <h3 class="benefits-list__title">Point</h3>
            <p>Bacon ipsum dolor amet meatball jowl kielbasa pork belly buffalo. Cow pastrami burgdoggen spare ribs strip steak.</p>
          </div>
        </div>
        <div class="benefits-list__item">
          <div class="benefits-list__icon benefits-list__icon--flame">
            <svg class="icon"><use xlink:href="#flame" /></svg>
          </div>
          <div class="benefits-list__details">
            <h3 class="benefits-list__title">Point</h3>
            <p>Bacon ipsum dolor amet meatball jowl kielbasa pork belly buffalo. Cow pastrami burgdoggen spare ribs strip steak.</p>
          </div>
        </div>
        <div class="benefits-list__item">
          <div class="benefits-list__icon">3</div>
          <div class="benefits-list__details">
            <h3 class="benefits-list__title">Point</h3>
            <p>Bacon ipsum dolor amet meatball jowl kielbasa pork belly buffalo. Cow pastrami burgdoggen spare ribs strip steak.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="benefits-list__cta">
      <p><a href="#" class="button button--umkc-yellow button--cta">Hello there!</a></p>
    </div>
  </div>
</div>
