//@TODO: This is only sort of working currently 10/30
let Compare = {
    // counter: document.querySelector(".card__count"),
    counter: document.querySelector("#comparedProgramsCounter"), // Found line 170 in program-finder-v2-learn-more.html
    // checkboxes: document.querySelectorAll(`.card input[type="checkbox"]`),
    checkboxes: document.querySelectorAll(`.add-to-compare[type="checkbox"]`), // Found in line 153 in program-finder-v2-learn-more.html
    results: [],
    init: function() {
      this.bindUIFunctions();
      this.updateCounter();
    },
    bindUIFunctions: function() {
      [...this.checkboxes].forEach( check => {
        check.addEventListener('change', function(e) {
          let card = e.target.closest("div.card");
          if ( e.target.checked ) {
            Compare.results.push(card)
          } else {
            Compare.results = Compare.results.filter(item => item !== card);
          }
          Compare.updateCounter();
          Compare.updateResults();
        })
      })
    },
    updateCounter: function(){
      let count = document.querySelectorAll(`.add-to-compare[type="checkbox"]:checked`).length;
      this.counter.innerText = count;
      console.log(count);
    },
    updateResults: function(){
    //   let results = document.querySelector(".results");
    let results = document.querySelector(".compare-flyout-list-wrapper");
      results.innerHTML = ""; // Not in love with this idea....
      [...Compare.results].forEach(item => {
        let div = document.createElement("div");
            div.classList.add = "card";
            div.innerHTML = "<p>I am code</p>";
        results.appendChild(div);
      });
    },
  };
  
  Compare.init();  