import heictoIcon from '../assets/tools/heicto.svg';
import imagestopdfIcon from '../assets/tools/imagestopdf.svg';

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
        engineBadge: "Apple ColorSync sRGB",
        mockup: {
            input: ".HEIC / .HEIF",
            outputs: ["PNG", "JPG", "WebP"],
            metaLeft: "Scale: 1080p • 2K • 4K • Orig",
            metaRight: "Quality: 75–100%"
        },
        tagline: "High-fidelity, ad-free HEIC/HEIF converter engineered for iOS & macOS users.",
        description: "A minimal, privacy-first web application built specifically for iPhone and Apple ecosystem users to convert HEIC/HEIF photos into modern web formats (PNG, JPG, WebP). Retains native Apple ColorSync rendering characteristics while providing fine-grained sliders for compression quality, dimension scaling, and batch processing.",
        memorySpecs: [
            {
                title: "100% In-Memory (RAM / Client-Side):",
                details: "Files never leave your device and are never uploaded to any server or cloud. Conversions happen directly inside your browser tab using WebAssembly / native browser memory (Blob in RAM)."
            },
            {
                title: 'When you click "Download" or "Download All (ZIP)":',
                details: "Files are saved directly to your Mac's ~/Downloads folder."
            },
            {
                title: "When you close or refresh the tab:",
                details: "All temporary image data in RAM is automatically destroyed."
            }
        ],
        supportedFormats: ["HEIC → PNG", "HEIC → JPG", "HEIC → WebP"],
        techStack: ["WebAssembly", "ColorSync sRGB", "HTML5 Canvas API", "heic2any", "JSZip", "Vanilla JS"],
        stats: [
            { label: "Monetization", value: "Zero Ads / 100% Free" },
            { label: "Data Privacy", value: "Zero Server Uploads" },
            { label: "Color Engine", value: "Apple ColorSync" },
            { label: "Export Formats", value: "PNG • JPG • WebP" }
        ]
    },
    {
        id: "imagestopdf",
        title: "IMAGEStoPDF",
        subtitle: "High-Fidelity Image to PDF Studio",
        category: "Document & PDF Utility",
        status: "Live Utility",
        badge: "New",
        url: "https://gaurav-budhwani.github.io/imagesTOpdf/",
        icon: imagestopdfIcon,
        engineBadge: "Lossless PDF Engine",
        mockup: {
            input: "JPG • PNG • HEIC • WebP",
            outputs: [".PDF", "ZIP"],
            metaLeft: "Page Size: Fit • A4 • Letter",
            metaRight: "Target Limit: ≤ 2MB • 5MB • 7MB"
        },
        tagline: "Fast, private, client-side images to PDF studio with custom file-size targeting.",
        description: "A comprehensive, privacy-first image-to-PDF compiler and document studio. Convert single or multiple images into standardized PDF files with page reordering, rotation, page sizing (A4, US Letter, Fit Image), document scan filters, and automated target file-size limits (≤ 2MB, ≤ 5MB, ≤ 7MB) to guarantee acceptance on job, university, and government portals.",
        memorySpecs: [
            {
                title: "100% In-Memory (RAM / Client-Side):",
                details: "Files never leave your device and are never uploaded to any server or cloud. PDF compilation and image optimizations happen directly inside your browser tab using pdf-lib and Web APIs (Blob in RAM)."
            },
            {
                title: 'When you click "Download PDF" or "Export ZIP":',
                details: "The generated PDF document is saved directly to your Mac's ~/Downloads folder."
            },
            {
                title: "When you close or refresh the tab:",
                details: "All temporary image and PDF data in RAM is automatically destroyed."
            }
        ],
        supportedFormats: ["JPG / PNG → PDF", "HEIC / WebP → PDF", "TIFF / BMP → PDF", "Multi-Page Merge"],
        techStack: ["pdf-lib", "HTML5 Canvas API", "JSZip", "Document Filters", "Client-Side Processing"],
        stats: [
            { label: "Monetization", value: "Zero Ads / 100% Free" },
            { label: "Data Privacy", value: "100% In-Memory" },
            { label: "Target Sizing", value: "Auto Optimize ≤ 7MB" },
            { label: "Page Control", value: "Reorder • Rotate • Scan Filters" }
        ]
    }
];

