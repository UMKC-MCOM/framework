<!DOCTYPE html>
<html lang="en">
  <?php include_once("includes/head.php"); ?>
  <body>
		<!-- Load SVGs first? -->
		<?php include_once("includes/svg-sprites.php"); ?>
		<?php include_once("includes/a11y-skip.php"); ?>
		<?php include_once("includes/header.php"); ?>

		<div id="content" class="main-content">
			<div class="hero">
				<div class="hero__content">
					<h1 class="hero__title">Health Equity Institute</h1>
					<p>The UMKC Conservatory is internationally recognized as a center for artistic excellence and innovation. Learn from the best.</p>
					<p><a href="#" class="button button--white button--outline button--arrow">Virtual Visit Options</a></p>
				</div>
			</div>

			<div class="breadcrumbs stripes--dark">
				<ul class="nav nav--inline breadcrumbs__list">
					<li class="breadcrumbs__item">
						<a class="breadcrumbs__link" href="#">Home</a>
					</li>
					<li class="breadcrumbs__item">
						<a class="breadcrumbs__link" href="#">Thing</a>
					</li>
				</ul>
			</div>

			<div class="content-row">
				<div class="benefits-list">
					<img alt="" class="benefits-list__image" src="https://picsum.photos/seed/picsum/448/535" loading="lazy" />
					<div class="benefits-list__group">
						<h2>Benefits List with Photo</h2>
						<p class="highlight">Bacon ipsum dolor amet meatball jowl kielbasa pork belly buffalo. Cow pastrami burgdoggen spare ribs strip steak.</p>

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
									<!-- Foreach.isLast() inside of Cascade code -->
									<p><a href="#" class="button button--arrow button--umkc-yellow">Hello there!</a></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="content-row">
				<h2 class="text-center">Benefits List without Photo</h2>
				<p class="highlight text-center">Bacon ipsum dolor amet meatball jowl kielbasa pork belly buffalo. Cow pastrami burgdoggen spare ribs strip steak.</p>
				<div class="benefits-list">
					<div class="benefits-list__group">
						<div class="benefits-list__points">
							<div class="benefits-list__item">
								<div class="benefits-list__icon">1</div>
								<div class="benefits-list__details">
									<h3 class="benefits-list__title">Point</h3>
									<p>Bacon ipsum dolor amet meatball jowl kielbasa pork belly buffalo. Cow pastrami burgdoggen spare ribs strip steak.</p>
								</div>
							</div>
							<div class="benefits-list__item">
								<div class="benefits-list__icon">2</div>
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
					<div class="benefits-list__group">
						<div class="benefits-list__points">
							<div class="benefits-list__item">
								<div class="benefits-list__icon">1</div>
								<div class="benefits-list__details">
									<h3 class="benefits-list__title">Point</h3>
									<p>Bacon ipsum dolor amet meatball jowl kielbasa pork belly buffalo. Cow pastrami burgdoggen spare ribs strip steak.</p>
								</div>
							</div>
							<div class="benefits-list__item">
								<div class="benefits-list__icon">2</div>
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
				</div>
				<p class="text-center"><a href="#" class="button button--arrow button--umkc-yellow">Hello there!</a></p>
			</div>

			<div class="content-row">
				<h2>Photo and Stats</h2>
				<p class="highlight">Bacon ipsum dolor amet meatball jowl kielbasa pork belly buffalo. Cow pastrami burgdoggen spare ribs strip steak.</p>
				<div class="benefits-list">
					<img alt="" class="benefits-list__image" src="https://picsum.photos/seed/picsum/448/500" loading="lazy" />
					<div class="benefits-list__group">
						<div class="benefits-list--stats">
							<div class="benefits-list__item benefits-list__item--stats">
								<div class="benefits-list__stats">#1</div>
								<div class="benefits-list__details">
									<h3 class="benefits-list__title benefits-list__title--light">Point</h3>
									<p>Bacon ipsum dolor amet meatball jowl kielbasa pork belly buffalo. Cow pastrami burgdoggen spare ribs strip steak.</p>
								</div>
							</div>
							<div class="benefits-list__item benefits-list__item--stats">
								<div class="benefits-list__stats">#2</div>
								<div class="benefits-list__details">
									<h3 class="benefits-list__title benefits-list__title--light">Point</h3>
									<p>Bacon ipsum dolor amet meatball jowl kielbasa pork belly buffalo. Cow pastrami burgdoggen spare ribs strip steak.</p>
								</div>
							</div>
							<div class="benefits-list__item benefits-list__item--stats">
								<div class="benefits-list__stats">#3</div>
								<div class="benefits-list__details">
									<h3 class="benefits-list__title benefits-list__title--light">Point</h3>
									<p>Bacon ipsum dolor amet meatball jowl kielbasa pork belly buffalo. Cow pastrami burgdoggen spare ribs strip steak.</p>
								</div>
							</div>
							<div class="benefits-list__item benefits-list__item--stats">
								<div class="benefits-list__stats">#4</div>
								<div class="benefits-list__details">
									<h3 class="benefits-list__title benefits-list__title--light">Point</h3>
									<p>Bacon ipsum dolor amet meatball jowl kielbasa pork belly buffalo. Cow pastrami burgdoggen spare ribs strip steak.</p>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>

			<div class="content-row bg-umkc-gray">
				<div class="benefits-list jc-evenly">
					<div class="benefits-list__group">
						<div class="benefits-list benefits-list--small-stats jc-evenly">
							<div class="benefits-list__item benefits-list__item--stats">
								<div class="benefits-list__stats">
									<h2 class="benefits-list__title benefits-list__title--heavy">#1</h2>
								</div>
								<div class="benefits-list__details">
									<h3 class="benefits-list__title benefits-list__title--light">Point Pofdslhjs</h3>
								</div>
							</div>
							<div class="benefits-list__item benefits-list__item--stats">
								<div class="benefits-list__stats">
									<h2 class="benefits-list__title benefits-list__title--heavy">#2</h2>
								</div>
								<div class="benefits-list__details">
									<h3 class="benefits-list__title benefits-list__title--light">Additional Content</h3>
								</div>
							</div>
							<div class="benefits-list__item benefits-list__item--stats">
								<div class="benefits-list__stats">
									<h2 class="benefits-list__title benefits-list__title--heavy">#3</h2>
								</div>
								<div class="benefits-list__details">
									<h3 class="benefits-list__title benefits-list__title--light">Lorem ipsum dolor</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<?php include_once("includes/kitchen-sink/buttons.php"); ?>
		</div>
		<?php include_once("includes/footer.php"); ?>

		<script src="/assets/js/main.js"></script>
  </body>
</html>
