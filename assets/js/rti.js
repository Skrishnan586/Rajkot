(function () {

    window.onload = function() {
        loadRTI();
    }
    function loadRTI() {
        $(".loaderBar").css({ 'display': 'block' });
        var i = 1;

        $('#rti-table').dataTable().fnDestroy();
        $('#rti-table').DataTable({
            "ajax": {
                'url': 'http://10.226.28.236:8084/Aiims_Portal/service/notices/pdf',
                'method': 'POST',
                'dataSrc': function (json) {
                    $(".loaderBar").css({ 'display': 'none' });
                    return json;
                },
                'headers': {'Content-Type': 'application/x-www-form-urlencoded'},
                'data': {'hospitalcode': '24922', 'doctype': '7'},
                'transformRequest': function(obj) {
                  var str = [];
                  for(var p in obj)
                  str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                  return str.join("&");
                }
            },
            columns: [
                {
                    "render": function (data, type, full, meta) {
                        return i++;
                    }
                },
                { data: 'pdfname', width: '40vw' },
                { data: 'uploadate' },
                { data: 'validdate' },
                {
                    data: 'doctid',
                    "render": function (data, type, row, meta) {
                        var button = '<button onclick="openBase64(' + row.doctype + ',' + row.doctid + ')" class="menu-btn">View</button>';
                        return button;
                    }
                }
            ]
        });
    }

})()