<script>
  function hsForms(){
    var hsEbook = document.getElementsByClassName('HS-eBook');
    var hsContactUs = document.getElementsByClassName('HS-ContactUs');
    var hsNewsletter = document.getElementsByClassName('HS-Newsletter');
    if (hsEbook.length > 0 && $('.hs-button').is(':visible')) {
      $('.hs-button').attr({
        onclick: "dataLayer.push({ 'event' :  'trackEvent', 'eventCategory' : 'Ebook', 'eventAction' : 'Download', 'eventLabel' : '#CTA-btn ebook download now' })",
      });
      clearInterval(hsTimer)
    }
    if (hsContactUs.length > 0 && $('.hs-button').is(':visible')) {
      $('.hs-button').attr({
        onclick: "dataLayer.push({ 'event' :  'trackEvent', 'eventCategory' : 'Contactform', 'eventAction' : 'Submit', 'eventLabel' : '#CTA-btn general contact' })",
      });
      clearInterval(hsTimer)
    }
    if (hsNewsletter.length > 0 && $('.hs-button').is(':visible')) {
      $('.hs-button').attr({
        onclick: "dataLayer.push({ 'event' :  'trackEvent', 'eventCategory' : 'Newsletter', 'eventAction' : 'Submit', 'eventLabel' : '#Newslettersignon' })",
      });
      clearInterval(hsTimer)
    }
  }
  var hsTimer = window.setInterval(hsForms, 2000);
</script>
