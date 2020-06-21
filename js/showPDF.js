function showPdf(urlPdf){
// Loaded via <script> tag, create shortcut to access PDF.js exports.
    var PDFJS = window['pdfjs-dist/build/pdf'];

    // The workerSrc property shall be specified.
    PDFJS.workerSrc = 'http://mozilla.github.io/pdf.js/build/pdf.worker.js';//加载核心库
    PDFJS.getDocument(urlPdf).then(function getPdfHelloWorld(pdf) {
        pdf.getPage(1).then(function getPageHelloWorld(page) {// 获取第一页数据
            var scale = 1.5;
            var viewport = page.getViewport(scale);
            // Prepare canvas using PDF page dimensions
            var canvas = document.getElementById('the-canvas');
            var context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            // Render PDF page into canvas context
            var renderContext = {
                canvasContext: context,
                  viewport: viewport
                };
            page.render(renderContext);
        });
    });
}
