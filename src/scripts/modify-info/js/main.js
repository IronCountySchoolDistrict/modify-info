import $ from 'jquery';

/*global $*/
$(() => {
    const modifyInfoTableRows = $('#container-frame .linkDescList');

    var accessTemplate = $($('#access-template').html());
    var select = modifyInfoTableRows.find('tr').eq(-2);
    accessTemplate.insertAfter(select);

    var nicknameTemplate = $($('#nickname-template').html());
    select = modifyInfoTableRows.find('tr').eq(0);
    nicknameTemplate.insertAfter(select);

    var genderTemplate = $($('#gender-template').html());
    select = modifyInfoTableRows.find('tr').eq(12);
    genderTemplate.insertAfter(select);

    var stuPassTemplate = $($('#stu-pass-template').html());

    // User is in group 50, so the template was picked up by jQuery
    if (stuPassTemplate.length > 0) {
        select = modifyInfoTableRows.find('tr').eq(-2);
        stuPassTemplate.insertAfter(select);
    }

    // Fix row coloring
    $('.box-round').find('tr').attr('bgcolor','');
});
