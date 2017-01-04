import $ from 'jquery';

/*global $*/
export default function() {
    $(() => {
        var accessTemplate = $($('#access-template').html());
        var select = $('tr').eq(-4);
        console.log(select);
        accessTemplate.insertAfter(select);

        var advisorTemplate = $($('#advisor-template').html());
        select = $('tr').eq(2);
        advisorTemplate.insertAfter(select);

        var nicknameTemplate = $($('#nickname-template').html());
        select = $('tr').eq(0);
        nicknameTemplate.insertAfter(select);

        var enrollmentStatusTemplate = $($('#enrollment-status-template').html());
        select = $('tr').eq(5);
        enrollmentStatusTemplate.insertAfter(select);

        var stuPassTemplate = $($('#stu-pass-template').html());

        // User is in group 50, so the template was picked up by jQuery
        if (stuPassTemplate.length > 0) {
            select = $('tr').eq(-4);
            stuPassTemplate.insertAfter(select);
        }

        // Fix row coloring
        $('.box-round').find('tr').attr('bgcolor','');
    });
}
