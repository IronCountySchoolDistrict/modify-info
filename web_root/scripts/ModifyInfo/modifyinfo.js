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

    $j('tr').eq(-1).remove();
    $j('tr:odd').attr({'class': 'evenRow'});
}());