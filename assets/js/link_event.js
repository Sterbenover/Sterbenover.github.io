// 页面加载时获取所有文件的下载次数
$(document).ready(function () {
    // 获取多个文件的下载次数
    $('.gold-link-track').each(function () {
      const fileId = $(this).data('link-id');  // 获取文件ID
      $.get(`/api/downloads/${fileId}`, function (data) {
        $(`#count-${fileId}`).text('Download Count: ' + data.downloadCount);
      });
    });
  
    // 点击下载链接时，更新下载次数
    $('.gold-link-track').click(function (event) {
      event.preventDefault();  // 阻止默认的跳转行为
  
      const fileId = $(this).data('link-id');  // 获取文件ID
      $.post(`/api/downloads/${fileId}`, function () {
        // 请求成功后更新下载次数
        $.get(`/api/downloads/${fileId}`, function (data) {
          $(`#count-${fileId}`).text('Download Count: ' + data.downloadCount);
        });
  
        // 跳转到实际的下载链接
        window.location.href = $(this).attr('href');
      });
    });
  });