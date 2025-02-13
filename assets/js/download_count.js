
document.addEventListener('DOMContentLoaded', function () {
  var downloadLink = document.getElementById('download-link');
  var downloadCountElement = document.getElementById('download-count');

  // 模拟的下载次数，实际上你可以从后端获取
  var downloadCount = parseInt(localStorage.getItem('downloadClickCount') || 0, 10);  // 确保是数字类型
  downloadCountElement.textContent = "下载次数: " + downloadCount;
  if (downloadLink) {
    downloadCountElement.textContent = "下载次数: " + downloadCount;
    downloadLink.addEventListener('click', function (event) {
      // 发送 Google Analytics 事件
      gtag('event', 'download', {
        'event_category': 'file_download',
        'event_label': 'Drone-Racing-Video',  // 根据实际文件名动态生成
      });
      // 更新下载次数
      downloadCount++;
      // 更新 localStorage 中的点击次数
      localStorage.setItem('downloadClickCount', downloadCount);
      // 更新页面上的点击次数显示
      downloadCountElement.textContent = "下载次数: " + downloadCount;
    });
  }
});