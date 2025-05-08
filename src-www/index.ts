import Tesseract from "./tesseract.esm.min.js";

(async () => {
    const worker = await Tesseract.createWorker(["eng", "jpn"])

    const result = await worker.recognize("https://tesseract.projectnaptha.com/img/eng_bw.png");
    alert(result.data.text);
    worker.terminate();
})();