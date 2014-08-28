/*global $j*/

(function() {
    'use strict';
    var accessTemplate = $j($j('#access-template').html());
    var select = $j('tr').eq(-2);
    accessTemplate.insertAfter(select);

    var advisorTemplate = $j($j('#advisor-template').html());
    select = $j('tr').eq(2);
    advisorTemplate.insertAfter(select);

    var nicknameTemplate = $j($j('#nickname-template').html());
    select = $j('tr').eq(0);
    nicknameTemplate.insertAfter(select);

    var enrollmentStatusTemplate = $j($j('#enrollment-status-template').html());
    select = $j('tr').eq(5);
    enrollmentStatusTemplate.insertAfter(select);

    var stuPassTemplate = $j($j('#stu-pass-template').html());

    // User is in group 50, so the template was picked up by jQuery
    if (stuPassTemplate.length > 0) {
        select = $j('tr').eq(-2);
        stuPassTemplate.insertAfter(select);
    }

    // Fix row coloring
    $j('.box-round').find('tr').attr('bgcolor','');
}());