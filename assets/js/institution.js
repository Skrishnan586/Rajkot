(function () {
    // Annual Reports Card
    document.getElementById("organization-card").addEventListener("click", loadOrganization, false);
    function loadOrganization() {
      $("#organization-table").dataTable().fnDestroy();
      //load functions


      var i = 1;
      $('#organization-table').DataTable({
        "ajax": {
          'url': 'http://10.226.28.236:8084/Aiims_Portal/service/notices/pdf',
          'method': 'POST',
          'headers': { 'Content-Type': 'application/x-www-form-urlencoded' },
          'data': { 'hospitalcode': '24922', 'doctype': '9' },
          'transformRequest': function (obj) {
            var str = [];
            for (var p in obj)
              str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
          },
          'dataSrc': function (json) {
            $(".loaderBar").css({ 'display': 'none' });
            return json;
          }
        },
        columns: [
          {
            "render": function (data, type, full, meta) {
              return i++;
            }
          },
          { data: 'pdfname', width: '40vw' },
          {
            data: 'doctid',
            "render": function (data, type, row, meta) {
              var button = '<button onclick="openBase64(' + row.doctype + ',' + row.doctid + ')" class="menu-btn">View</button>';
              return button;
            }
          }
        ]
      });



      $('html, body').animate({
        scrollTop: $("#gallery-content-divider").offset().top - 50
      }, 200);
      $("#gallery-annual-reports-content").css({ 'display': 'block' });
    }
})()