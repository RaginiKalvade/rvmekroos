$(document).ready(function () {
    $.ajax({
        url: "https://gorest.co.in/public/v2/posts",
        method: "GET",
        dataType: "json",
        success: function (data) {
            $("#example").dataTable({
                data: data,
                columns: [
                    {'data': 'id'},
                    {'data': 'user_id'},
                    {'data': 'title'},
                ]
            })
            $("#example tr").click(function(){
                location.href = $(this).find('').attr('href');
            })
        }
    })
})