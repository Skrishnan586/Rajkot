

(function () {
  "use strict";
  //************** */ Notices Page Controllers *********************//



  /* Table Loaders */
  document.getElementById("recruitment-card").addEventListener("click", loadRecruitments, false);

  function loadRecruitments() {
    // hide other cards' content
    $('#tenders-content').css({ 'display': 'none' });
    $('#admission-content').css({ 'display': 'none' });
    $('#press-content').css({ 'display': 'none' });
    $('#events-content').css({ 'display': 'none' });
    $("#recruitment-table").dataTable().fnDestroy();
    $(".loaderBar").css({ 'display': 'flex' });

    $('html, body').animate({
      scrollTop: $("#notice-divider").offset().top
    }, 200);


    // show current card's content
    $('#recruitment-content').css({ 'display': 'block' });


    var i = 1;
    $('#recruitment-table').DataTable({
      "ajax": {
        'url': 'http://10.226.28.236:8084/Aiims_Portal/service/notices/pdf',
        'method': 'POST',
        'headers': { 'Content-Type': 'application/x-www-form-urlencoded' },
        'data': { 'hospitalcode': '24922', 'doctype': '3' },
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
            // var a = '<a download="'+row.pdfname+'.pdf" href="data:application/pdf;base64,'+row.pdfbase64+'" title="Download PDF">download</a>'
            // var button = document.createElement('button');
            // button.innerText = 'View';
            // button.addEventListener('click',function() { openBase64(row.doctype, row.doctid)});
            // console.log(button);
            var button = '<button onclick="openBase64(' + row.doctype + ',' + row.doctid + ')" class="menu-btn">View</button>';
            return button;
          }
        }
      ]
    });
  }

  // function loadRecruitments() {

  //   // hide other cards' content
  //   $('#tenders-content').css({ 'display': 'none' });
  //   $('#admission-content').css({ 'display': 'none' });
  //   $('#press-content').css({ 'display': 'none' });
  //   $('#events-content').css({ 'display': 'none' });
  //   $("#recruitment-table").dataTable().fnDestroy();
  //   $(".loaderBar").css({ 'display': 'flex' });

  //   $('html, body').animate({
  //     scrollTop: $("#notice-divider").offset().top
  //   }, 200);


  //   // show current card's content
  //   $('#recruitment-content').css({ 'display': 'block' });

  //   var i = 1;
  //   $('#recruitment-table').DataTable({
  //     "ajax": {
  //       'url': 'https://9274024b-34aa-432d-9d16-991a7f91ed24.mock.pstmn.io/Aiims_Portal/service/notices/pdf',
  //       'method': 'POST', 'headers': { 'Content-Type': 'application/x-www-form-urlencoded' },
  //       'data': { 'hospitalcode': '24922', 'doctype': '3' },
  //       'transformRequest': function (obj) {
  //         var str = [];
  //         for (var p in obj)
  //           str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
  //         return str.join("&");
  //       },
  //       'dataSrc': function (json) {
  //         $(".loaderBar").css({ 'display': 'none' });
  //         return json.data;
  //       }
  //     },
  //     columns: [
  //       {
  //         "render": function (data, type, full, meta) {
  //           return i++;
  //         }
  //       },
  //       { data: 'pdfname', width: '40vw' },
  //       { data: 'uploadate' },
  //       { data: 'validdate' },
  //       {
  //         data: 'pdfpath',
  //         "render": function (data, type, row, meta) {
  //           var a = '<a class="btn btn-primary btn-sm" href="' + row.pdfpath + '">View</a>'
  //           return a;
  //         }
  //       }
  //     ]
  //   });
  // }

  document.getElementById("admission-card").addEventListener("click", loadAdmissions, false);
  function loadAdmissions() {

    // hide other cards' content
    $('#tenders-content').css({ 'display': 'none' });
    $('#recruitment-content').css({ 'display': 'none' });
    $('#press-content').css({ 'display': 'none' });
    $('#events-content').css({ 'display': 'none' });
    $("#admissions-table").dataTable().fnDestroy();
    $(".loaderBar").css({ 'display': 'flex' });

    $('html, body').animate({
      scrollTop: $("#notice-divider").offset().top
    }, 200);


    // show current card's content
    $('#admission-content').css({ 'display': 'block' });

    var i = 1;
    $('#admissions-table').DataTable({
      "ajax": {
        'url': 'http://10.226.28.236:8084/Aiims_Portal/service/notices/pdf',
        'method': 'POST',
        'headers': { 'Content-Type': 'application/x-www-form-urlencoded' },
        'data': { 'hospitalcode': '24922', 'doctype': '5' },
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
  }

  document.getElementById("tender-card").addEventListener("click", loadTenders, false);
  function loadTenders() {

    // hide other cards' content
    $('#admission-content').css({ 'display': 'none' });
    $('#recruitment-content').css({ 'display': 'none' });
    $('#press-content').css({ 'display': 'none' });
    $('#events-content').css({ 'display': 'none' });
    $("#tenders-table").dataTable().fnDestroy();
    $(".loaderBar").css({ 'display': 'flex' });


    $('html, body').animate({
      scrollTop: $("#notice-divider").offset().top
    }, 200);

    // show current card's content
    $('#tenders-content').css({ 'display': 'block' });

    var i = 1;
    $('#tenders-table').DataTable({
      "ajax": {
        'url': 'http://10.226.28.236:8084/Aiims_Portal/service/notices/pdf',
        'method': 'POST',
        'headers': { 'Content-Type': 'application/x-www-form-urlencoded' },
        'data': { 'hospitalcode': '24922', 'doctype': '2' },
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
  }

  // document.getElementById("press-card").addEventListener("click", loadPress, false);
  // function loadPress() {

  //   // hide other cards' content
  //   $('#admission-content').css({ 'display': 'none' });
  //   $('#recruitment-content').css({ 'display': 'none' });
  //   $('#tenders-content').css({ 'display': 'none' });
  //   $('#events-content').css({ 'display': 'none' });
  //   $("#press-table").dataTable().fnDestroy();
  //   $(".loaderBar").css({ 'display': 'flex' });


  //   $('html, body').animate({
  //     scrollTop: $("#notice-divider").offset().top
  //   }, 200);

  //   // show current card's content
  //   $('#press-content').css({ 'display': 'block' });

  //   var i = 1;
  //   $('#press-table').DataTable({
  //     "ajax": {
  //       'url': 'http://10.226.28.236:8084/Aiims_Portal/service/notices/pdf',
  //       'method': 'POST',
  //       'headers': { 'Content-Type': 'application/x-www-form-urlencoded' },
  //       'data': { 'hospitalcode': '24922', 'doctype': '3' },
  //       'transformRequest': function (obj) {
  //         var str = [];
  //         for (var p in obj)
  //           str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
  //         return str.join("&");
  //       },
  //       'dataSrc': function (json) {
  //         $(".loaderBar").css({ 'display': 'none' });
  //         return json.data;
  //       }
  //     },
  //     columns: [
  //       {
  //         "render": function (data, type, full, meta) {
  //           return i++;
  //         }
  //       },
  //       { data: 'pdfname', width: '40vw' },
  //       { data: 'uploadate' },
  //       { data: 'validdate' },
  //       {
  //         data: 'doctid',
  //         "render": function (data, type, row, meta) {
  //           var button = '<button onclick="openBase64(' + row.doctype + ',' + row.doctid + ')" class="menu-btn">View</button>';
  //           return button;
  //         }
  //       }
  //     ]
  //   });
  // }

  document.getElementById("events-card").addEventListener("click", loadEvents, false);
  function loadEvents() {

    // hide other cards' content
    $('#admission-content').css({ 'display': 'none' });
    $('#recruitment-content').css({ 'display': 'none' });
    $('#tenders-content').css({ 'display': 'none' });
    $('#press-content').css({ 'display': 'none' });
    $("#events-table").dataTable().fnDestroy();
    $(".loaderBar").css({ 'display': 'flex' });


    $('html, body').animate({
      scrollTop: $("#notice-divider").offset().top
    }, 200);

    // show current card's content
    $('#events-content').css({ 'display': 'block' });

    var i = 1;
    $('#events-table').DataTable({
      "ajax": {
        'url': 'http://10.226.28.236:8084/Aiims_Portal/service/notices/pdf',
        'method': 'POST',
        'headers': { 'Content-Type': 'application/x-www-form-urlencoded' },
        'data': { 'hospitalcode': '24922', 'doctype': '4' },
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
  }
})()