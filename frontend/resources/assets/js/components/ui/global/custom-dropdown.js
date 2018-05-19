function init(){
  // Clear custom dropdown options in body click
  $(document).on('click', function(){
    // close open custom dropdown
    $('[data-input-dropdown]').removeClass('is-active');
  });

  // Custom Dropdown
  // =============
  $('[data-input-dropdown]').on('click', function(e) {
    e.stopPropagation();
    $(this).toggleClass('is-active');
  });
  $('[data-input-dropdown]').on('click', '.drop-list div', function() {
    $(this).parents('[data-input-dropdown]').find('input').val($(this).text().trim());
    $(this).removeClass('is-active');
  });
};

export default init;
