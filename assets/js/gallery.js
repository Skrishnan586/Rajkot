(function () {
    document.getElementById("gallery-hospital-card").addEventListener("click", loadHospitalsGallery, false);
    function loadHospitalsGallery() {
      $('#gallery-hospitals-content').css({ 'display': 'none' });
      $('#gallery-university-content').css({ 'display': 'none' });
      $('#gallery-events-content').css({ 'display': 'none' });
      $('#gallery-annual-reports-content').css({ 'display': 'none' });
      $('#gallery-emagazine-content').css({ 'display': 'none' });
      $('#gallery-documents-content').css({ 'display': 'none' });
      //load functions
      $('html, body').animate({
        scrollTop: $("#gallery-content-divider").offset().top - 50
      }, 200);
      $('#gallery-hospitals-content').css({ 'display': 'block' });
    }
  
    // University Card
    document.getElementById("gallery-university-card").addEventListener("click", loadUniversityGallery, false);
    function loadUniversityGallery() {
      $('#gallery-hospitals-content').css({ 'display': 'none' });
      $('#gallery-university-content').css({ 'display': 'none' });
      $('#gallery-events-content').css({ 'display': 'none' });
      $('#gallery-annual-reports-content').css({ 'display': 'none' });
      $('#gallery-emagazine-content').css({ 'display': 'none' });
      $('#gallery-documents-content').css({ 'display': 'none' });
      //load functions
      $('html, body').animate({
        scrollTop: $("#gallery-content-divider").offset().top - 50
      }, 200);
      $('#gallery-university-content').css({ 'display': 'block' });
    }
  
    // Events Card
    document.getElementById("gallery-events-card").addEventListener("click", loadEventsGallery, false);
    function loadEventsGallery() {
      $('#gallery-hospitals-content').css({ 'display': 'none' });
      $('#gallery-university-content').css({ 'display': 'none' });
      $('#gallery-events-content').css({ 'display': 'none' });
      $('#gallery-annual-reports-content').css({ 'display': 'none' });
      $('#gallery-emagazine-content').css({ 'display': 'none' });
      $('#gallery-documents-content').css({ 'display': 'none' });
      //load functions
      $('html, body').animate({
        scrollTop: $("#gallery-content-divider").offset().top - 50
      }, 200);
      $("#gallery-events-content").css({ 'display': 'block' });
    }
  
    // Annual Reports Card
    document.getElementById("gallery-annual-reports-card").addEventListener("click", loadAnnualReports, false);
    function loadAnnualReports() {
      $('#gallery-hospitals-content').css({ 'display': 'none' });
      $('#gallery-university-content').css({ 'display': 'none' });
      $('#gallery-events-content').css({ 'display': 'none' });
      $('#gallery-annual-reports-content').css({ 'display': 'none' });
      $('#gallery-emagazine-content').css({ 'display': 'none' });
      $('#gallery-documents-content').css({ 'display': 'none' });
      $("#annual-reports-table").dataTable().fnDestroy();
      //load functions


      var i = 1;
      $('#annual-reports-table').DataTable({
        "ajax": {
          'url': 'http://10.226.28.236:8084/Aiims_Portal/service/notices/pdf',
          'method': 'POST',
          'headers': { 'Content-Type': 'application/x-www-form-urlencoded' },
          'data': { 'hospitalcode': '24922', 'doctype': '8' },
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
  
    // E Magazines Card
    document.getElementById("gallery-emagazine-card").addEventListener("click", loadEmagazines, false);
    function loadEmagazines() {
      $('#gallery-hospitals-content').css({ 'display': 'none' });
      $('#gallery-university-content').css({ 'display': 'none' });
      $('#gallery-events-content').css({ 'display': 'none' });
      $('#gallery-annual-reports-content').css({ 'display': 'none' });
      $('#gallery-emagazine-content').css({ 'display': 'none' });
      $('#gallery-documents-content').css({ 'display': 'none' });
      $("#emagazine-table").dataTable().fnDestroy();
      $(".loaderBar").css({ 'display': 'flex' });
      //load functions

      var i = 1;
      $('#emagazine-table').DataTable({
        "ajax": {
          'url': 'http://10.226.28.236:8084/Aiims_Portal/service/notices/pdf',
          'method': 'POST',
          'headers': { 'Content-Type': 'application/x-www-form-urlencoded' },
          'data': { 'hospitalcode': '24922', 'doctype': '6' },
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

      $("#gallery-emagazine-content").css({ 'display': 'block' });
      $('html, body').animate({
        scrollTop: $("#gallery-content-divider").offset().top - 50
      }, 200);
    }
  
    // Documents Card
    document.getElementById("gallery-documents-card").addEventListener("click", loadDocumentsGallery, false);
    function loadDocumentsGallery() {
      $('#gallery-hospitals-content').css({ 'display': 'none' });
      $('#gallery-university-content').css({ 'display': 'none' });
      $('#gallery-events-content').css({ 'display': 'none' });
      $('#gallery-annual-reports-content').css({ 'display': 'none' });
      $('#gallery-emagazine-content').css({ 'display': 'none' });
      $('#gallery-documents-content').css({ 'display': 'none' });
      //load functions
      $('html, body').animate({
        scrollTop: $("#gallery-content-divider").offset().top - 50
      }, 200);
      $("#gallery-documents-content").css({ 'display': 'block' });
    }

})()