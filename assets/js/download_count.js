
document.addEventListener('DOMContentLoaded', function () {

  // 获取所有带有 'gold-link-track' 类的链接
  const links = document.querySelectorAll('.gold-link-track');
  links.forEach(link => {
    const linkId = link.getAttribute('data-link-id');
    const countElement = document.getElementById(`count-${linkId}`);
    const downloadCount = localStorage.getItem(linkId) || 0;
    countElement.textContent = `Download Count: ${downloadCount}`;
  });
  links.forEach(link => {
    link.addEventListener('click', function () {
      const linkId = link.getAttribute('data-link-id');
      const countElement = document.getElementById(`count-${linkId}`);
      let downloadCount = parseInt(localStorage.getItem(linkId)) || 0;
      // 发送 Google Analytics 事件
      gtag('event', 'download', {
        'event_category': 'code_download',
        'event_label': `code-${linkId}`,  // 根据实际文件名动态生成
      });
      downloadCount++;
      // 更新 localStorage 中的下载次数
      localStorage.setItem(linkId, downloadCount);
      // 更新页面上显示的下载次数
      countElement.textContent = `Download Count: ${downloadCount}`;
    });
  });
  // var downloadLink = document.getElementById('download-link');
  // var downloadCountElement = document.getElementById('download-count');

  // // 模拟的下载次数，实际上你可以从后端获取
  // var downloadCount = parseInt(localStorage.getItem('downloadClickCount') || 0, 10);  // 确保是数字类型
  // // downloadCountElement.textContent = "下载次数: " + downloadCount;
  // if (downloadLink) {
  //   // downloadCountElement.textContent = "下载次数: " + downloadCount;
  //   downloadCountElement.textContent = "Download Count: " + downloadCount;
  //   downloadLink.addEventListener('click', function (event) {
  //     // 发送 Google Analytics 事件
  //     gtag('event', 'download', {
  //       'event_category': 'file_download',
  //       'event_label': 'code1',  // 根据实际文件名动态生成
  //     });
  //     // 更新下载次数
  //     downloadCount++;
  //     // 更新 localStorage 中的点击次数
  //     localStorage.setItem('downloadClickCount', downloadCount);
  //     // 更新页面上的点击次数显示
  //     // downloadCountElement.textContent = "下载次数: " + downloadCount;
  //     downloadCountElement.textContent = "Download Count: " + downloadCount;
  //   });
  // }
});