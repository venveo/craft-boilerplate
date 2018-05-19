function init(){
  $('[data-trigger-icon]').on('click', function () {
    var $dVal = $(this).attr('data-trigger-icon');
    $('#outer-site-wrap').toggleClass($dVal);
  });
};

export default init;
