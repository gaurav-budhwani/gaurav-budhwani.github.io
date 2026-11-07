import heictoIcon from '../assets/tools/heicto.svg';

export const allTools = [
    {
        id: "heicto",
        title: "HEICto-",
        subtitle: "Apple HEIC/HEIF Image Converter",
        category: "Media & Imaging",
        status: "Live Utility",
        badge: "Live",
        url: "https://gaurav-budhwani.github.io/HEICto-",
        icon: heictoIcon,
        tagline: "High-fidelity, ad-free HEIC/HEIF converter engineered for iOS & macOS users.",
        description: "A minimal, privacy-first web application built specifically for iPhone and Apple ecosystem users to convert HEIC/HEIF photos into modern web formats (PNG, JPG, WebP). Retains native Apple ColorSync rendering characteristics while providing fine-grained sliders for compression quality, dimension scaling, and batch processing.",
        supportedFormats: ["HEIC → PNG", "HEIC → JPG", "HEIC → WebP"],
        techStack: ["WebAssembly", "ColorSync sRGB", "HTML5 Canvas API", "heic2any", "JSZip", "Vanilla JS"],
        stats: [
            { label: "Monetization", value: "Zero Ads / 100% Free" },
            { label: "Data Privacy", value: "Zero Server Uploads" },
            { label: "Color Engine", value: "Apple ColorSync" },
            { label: "Export Formats", value: "PNG • JPG • WebP" }
        ]
    }
];

