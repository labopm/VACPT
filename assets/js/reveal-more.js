
var $reveal_more = $('[data-object="reveal-more"]'),
  hideReadMoreContent = function () {
    $reveal_more.readmore({
      speed: 500,
      collapsedHeight: 100,
      moreLink: '<a class="cpt-section-read-more__link" href="#">Read more</a>',
      lessLink: '<a class="cpt-section-read-more__link" href="#">Close</a>',
      heightMargin: 17, // Add the class 'transitioning' before toggling begins.
      beforeToggle: function(trigger, element) {
        element.addClass('transitioning');
      },
      // Remove the 'transitioning' class when toggling completes.
      afterToggle: function(trigger, element) {
        element.removeClass('transitioning');
      }
    });
  };

hideReadMoreContent();
