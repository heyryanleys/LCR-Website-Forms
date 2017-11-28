  function hsForms() {
    var hsEbook = document.getElementsByClassName('HS-eBook');
    var hsContactUs = document.getElementsByClassName('HS-ContactUs');
    var hsNewsletter = document.getElementsByClassName('HS-Newsletter');
    if (hsEbook.length > 0 && $('.hs-button').is(':visible')) {
      $('input[type=radio]').click(function(){
        if ($('input[value=eBook]').prop("checked")) {
          $('.HS-eBook').find('.hs-button').attr({
            onclick: "dataLayer.push({ 'event' :  'trackEvent', 'eventCategory' : 'Ebook', 'eventAction' : 'Download', 'eventLabel' : '#CTA-btn ebook download now' })",
          });
        }
        else if ($('input[value=Summary]').prop("checked")) {
          $('.HS-eBook').find('.hs-button').attr({
            onclick: "dataLayer.push({ 'event' :  'trackEvent', 'eventCategory' : 'Whitepaper', 'eventAction' : 'Download', 'eventLabel' : '#CTA-btn summary download now' })",
          });
        }
      });
      clearInterval(hsTimer)
    }
    if (hsContactUs.length > 0 && $('.hs-button').is(':visible')) {
      $('.HS-ContactUs').find('.hs-button').attr({
        onclick: "dataLayer.push({ 'event' :  'trackEvent', 'eventCategory' : 'Contactform', 'eventAction' : 'Submit', 'eventLabel' : '#CTA-btn general contact' })",
      });
      clearInterval(hsTimer)
    }
    if (hsNewsletter.length > 0 && $('.hs-button').is(':visible')) {
      $('.HS-Newsletter').find('.hs-button').attr({
        onclick: "dataLayer.push({ 'event' :  'trackEvent', 'eventCategory' : 'Newsletter', 'eventAction' : 'Submit', 'eventLabel' : '#Newslettersignon' })",
      });
      clearInterval(hsTimer)
    }
  }
  var hsTimer = window.setInterval(hsForms, 2000);
