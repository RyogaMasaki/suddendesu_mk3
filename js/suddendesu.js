(function(){
  /*
 this is really dumb and I'm sorry you have to see this
 */
 var blocked = typeof blockDetect === 'undefined';
 var ad_elems = document.getElementsByClassName('trevda');
 for(var i=0; i< ad_elems.length; i++) {
   var telem = ad_elems[i];
   if(blocked) {
     telem.innerHTML = "If you enjoy our content, please consider turning off your ad blocker for this domain. Thanks!";
   }
   else if (telem.offsetWidth < 1) {
     telem.parentNode.removeChild(telem);
   }
 }
 (adsbygoogle = window.adsbygoogle || []).push({});
})();
