export interface TesseractResult {
    data: {
        text: string
    }
}

export interface TesseractWorker extends Worker {
    recognize(url: string, ): Promise<TesseractResult>;
}

declare const Tesseract: {
    createWorker: (langs: string | string[]) => Promise<TesseractWorker>;
};

export default Tesseract;