declare module 'rgbquant' {
    interface RgbQuantOptions {
        colors?: number,                       // desired palette size
        method?: HistogramMethod,              // histogram method, 2: min-population threshold within subregions; 1: global top-population
        boxSize?: [number, number],            // subregion dims (if method = 2)
        boxPxls?: number,                      // min-population threshold (if method = 2)
        initColors?: number,                   // # of top-occurring colors  to start with (if method = 1)
        minHueCols?: number,                   // # of colors per hue group to evaluate regardless of counts, to retain low-count hues
        dithKern?: unknown,                    // dithering kernel name, see available kernels in docs below
        dithDelta?: number,                    // dithering threshhold (0-1) e.g: 0.05 will not dither colors with <= 5% difference
        dithSerp?: boolean,                    // enable serpentine pattern dithering
        palette?: number[],                    // a predefined palette to start with in r,g,b tuple format: [[r,g,b],[r,g,b]...]
        reIndex?: boolean,                     // affects predefined palettes only. if true, allows compacting of sparsed palette once target palette size is reached. also enables palette sorting.
        useCache?: boolean,                    // enables caching for perf usually, but can reduce perf in some cases, like pre-def palettes
        cacheFreq?: number,                    // min color occurance count needed to qualify for caching
        colorDist?: "euclidean" | "manhattan", // method used to determine color distance, can also be "manhattan"
    }

    enum HistogramMethod {
        MinPopulation = 1,
        GlobalPopulation = 2
    }

    enum ReduceOutput {
        Color = 1,
        Index = 2
    }

    class RgbQuant {
        constructor(options: RgbQuantOptions);

        /**
         * Load an image to know how to quantize it
         */
        sample(image: number[] | Uint8ClampedArray | CanvasRenderingContext2D): void;

        /**
         * Return the palette as a list of rgb color
         * @param hasTuples return type as tuples or not
         */
        palette(hasTuples: true): [number, number, number][];
        palette(hasTuples: false): number[];
        palette(): number[];

        /**
         * Reduce an image with this quantizer
         * @param image to reduce with this quantizer
         * @param returnType 
         */
        reduce(image: number[] | Uint8ClampedArray | CanvasRenderingContext2D, returnType: ReduceOutput): number[];
    }

    export = RgbQuant;
}