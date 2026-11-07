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
        description: "A minimal, privacy-first web application built specifically for iPhone and Apple ecosystem users to convert HEIC/HEIF photos into modern web formats (PNG, JPG, WebP). Retains native Apple ColorSync rendering characteristics while providing fine-grained sliders for compression quality, dimension scaling, and batch processing — running 100% in your browser.",
        highlights: [
            "100% Free & Ad-Free: Zero promotional banners, popups, or tracking cookies.",
            "Apple Engine & ColorSync: Retains native sRGB & Display P3 color profiles rather than washed-out generic conversions.",
            "Quality & Scale Controls: Granular slider controls (75%–100%) and dimension downsampling (Original, 4K, 2K, 1080p).",
            "100% Client-Side Privacy: All operations execute directly on-device via WebAssembly/Canvas — zero photos are uploaded to any server.",
            "Batch & Drag-and-Drop: Multi-file queue with ZIP archive packaging and instant keyboard paste (⌘V) support."
        ],
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
