import React from "react";
import './LightItem.css';
import DeviceControls from "../DeviceControls.jsx";

export default function LightItem({ device }) {

    const settings = {
        power: device.settings.power,
        brightness: device.settings.brightness,
        color: device.settings.color,
    };

    const colorMap = {
        warm: "#FFE5B4",
        neutral: "#F0F8FF",
        cool: "#87CEEB",
        pink: "#FFB6C1",
    };

    const bulbColor = settings.power && settings.brightness > 0 ? colorMap[settings.color] : "transparent";
    const glowOpacity = settings.power ? settings.brightness / 100 : 0;

    // Convert hex → normalized 0–1 RGB
    function hexToNormalizedRGB(hex) {
        if (!hex || hex === "transparent") return { r: 0, g: 0, b: 0 };
        const r = parseInt(hex.slice(1, 3), 16) / 255;
        const g = parseInt(hex.slice(3, 5), 16) / 255;
        const b = parseInt(hex.slice(5, 7), 16) / 255;
        return { r, g, b };
    }

    // Build matrix string
    function buildColorMatrix(hex, opacity = 0.6) {
        const { r, g, b } = hexToNormalizedRGB(hex);

        return `0 0 0 0 ${r} 0 0 0 0 ${g} 0 0 0 0 ${b} 0 0 0 ${opacity} 0`;
    }

    const transparentMatrixValues = buildColorMatrix("transparent", 127);
    const matrixValues = buildColorMatrix(colorMap[settings.color], 0.6);
    const matrixValues2 = buildColorMatrix(colorMap[settings.color], 0.4);
    const matrixValues3 = buildColorMatrix(colorMap[settings.color], 1);

    return (
        <div
            className="light-item"
        >
            {settings.power &&
                <svg width="640" height="640" viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* bulb top */}
                    <path d="M288 228C288 224.686 290.686 222 294 222H346C349.314 222 352 224.686 352 228V234H288V228Z" fill="url(#paint0_linear_5_503)"/>
                    <mask id="path-3-inside-1_5_503" fill="white">
                        <path d="M280 234H360V238H280V234Z"/>
                    </mask>
                    <path d="M280 234H360V238H280V234Z" fill="#364153"/>
                    <path d="M360 238V237H280V238V239H360V238Z" fill="#4A5565" mask="url(#path-3-inside-1_5_503)"/>
                    <mask id="path-5-inside-2_5_503" fill="white">
                        <path d="M280 238H360V242H280V238Z"/>
                    </mask>
                    <path d="M280 238H360V242H280V238Z" fill="#364153"/>
                    <path d="M360 242V241H280V242V243H360V242Z" fill="#4A5565" mask="url(#path-5-inside-2_5_503)"/>
                    <mask id="path-7-inside-3_5_503" fill="white">
                        <path d="M280 242H360V246H280V242Z"/>
                    </mask>
                    <path d="M280 242H360V246H280V242Z" fill="#364153"/>
                    <path d="M360 246V245H280V246V247H360V246Z" fill="#4A5565" mask="url(#path-7-inside-3_5_503)"/>
                    <mask id="path-9-inside-4_5_503" fill="white">
                        <path d="M280 246H360V250H280V246Z"/>
                    </mask>
                    <path d="M280 246H360V250H280V246Z" fill="#364153"/>
                    <path d="M360 250V249H280V250V251H360V250Z" fill="#4A5565" mask="url(#path-9-inside-4_5_503)"/>
                    {/* outer large glow */}
                    <g opacity={glowOpacity * 0.3} filter="url(#filter0_f_5_503)">
                        <path d="M128 320C128 213.961 213.961 128 320 128C426.039 128 512 213.961 512 320C512 426.039 426.039 512 320 512C213.961 512 128 426.039 128 320Z" fill={bulbColor}/>
                    </g>
                    {/* inner glow */}
                    <g opacity={glowOpacity * 0.6} filter="url(#filter1_f_5_503)">
                        <path d="M224 314C224 260.981 266.981 218 320 218C373.019 218 416 260.981 416 314V362C416 415.019 373.019 458 320 458C266.981 458 224 415.019 224 362V314Z" fill={bulbColor}/>
                    </g>
                    <g filter="url(#filter2_di_5_503)">
                        <path d="M256 322C256 286.654 284.654 258 320 258C355.346 258 384 286.654 384 322V354C384 389.346 355.346 418 320 418C284.654 418 256 389.346 256 354V322Z" fill={settings.power ? colorMap[settings.color] : 'url(#paint1_radial_5_503)'} shapeRendering="crispEdges"/>
                        <g opacity={glowOpacity * 0.4} filter="url(#filter3_f_5_503)">
                            <path d="M288 314C288 300.745 298.745 290 312 290C325.255 290 336 300.745 336 314V330C336 343.255 325.255 354 312 354C298.745 354 288 343.255 288 330V314Z" fill="url(#paint2_linear_5_503)"/>
                        </g>
                        {/* center stick */}
                        {settings.power &&
                            <g filter="url(#filter4_d_5_503)">
                                <path d="M318 308C318 306.895 318.895 306 320 306C321.105 306 322 306.895 322 308V368C322 369.105 321.105 370 320 370C318.895 370 318 369.105 318 368V308Z" fill="url(#paint3_linear_5_503)"/>
                            </g>
                        }
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_5_503" x1="320" y1="222" x2="320" y2="234" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4A5565"/>
                            <stop offset="1" stopColor="#364153"/>
                        </linearGradient>
                        {/* outer glow */}
                        <filter id="filter0_f_5_503" x="0" y="0" width="640" height="640" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="64" result="effect1_foregroundBlur_5_503"/>
                        </filter>
                        <filter id="filter1_f_5_503" x="176" y="170" width="288" height="336" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="24" result="effect1_foregroundBlur_5_503"/>
                        </filter>

                        <filter id="filter2_di_5_503" x="196" y="198" width="248" height="280" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values={transparentMatrixValues} result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="30"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values={matrixValues}/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_503"/>

                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_503" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values={transparentMatrixValues} result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="10"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values={matrixValues2}/>
                            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_5_503"/>
                        </filter>
                        <radialGradient id="paint1_radial_5_503" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(38.4 84) rotate(-90) scale(143.43 143.43)">
                            <stop stopColor="#4A5568"/>
                            <stop offset="0.5" stopColor="#2D3748"/>
                            <stop offset="1" stopColor="#1A202C"/>
                        </radialGradient>
                        <filter id="filter3_f_5_503" x="272" y="274" width="80" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="8" result="effect1_foregroundBlur_5_503"/>
                        </filter>
                        <linearGradient id="paint2_linear_5_503" x1="288" y1="290" x2="349.44" y2="336.08" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0.8"/>
                            <stop offset="1" stopOpacity="0"/>
                        </linearGradient>

                        <filter id="filter4_d_5_503" x="308" y="296" width="24" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values={transparentMatrixValues} result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="5"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values={matrixValues3}/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_503"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_503" result="shape"/>
                        </filter>
                        <linearGradient id="paint3_linear_5_503" x1="320" y1="306" x2="320" y2="370" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFE5B4"/>
                            <stop offset="1" stopColor="white"/>
                        </linearGradient>
                    </defs>
                </svg>
            }

            {!settings.power &&
                <svg width="128" height="196" viewBox="0 0 128 196" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* bulb top */}
                    <path d="M32 6C32 2.68629 34.6863 0 38 0H90C93.3137 0 96 2.68629 96 6V12H32V6Z" fill="url(#paint0_linear_5_289)"/>
                    <mask id="path-2-inside-1_5_289" fill="white">
                        <path d="M24 12H104V16H24V12Z"/>
                    </mask>
                    <path d="M24 12H104V16H24V12Z" fill="#364153"/>
                    <path d="M104 16V15H24V16V17H104V16Z" fill="#4A5565" mask="url(#path-2-inside-1_5_289)"/>
                    <mask id="path-4-inside-2_5_289" fill="white">
                        <path d="M24 16H104V20H24V16Z"/>
                    </mask>
                    <path d="M24 16H104V20H24V16Z" fill="#364153"/>
                    <path d="M104 20V19H24V20V21H104V20Z" fill="#4A5565" mask="url(#path-4-inside-2_5_289)"/>
                    <mask id="path-6-inside-3_5_289" fill="white">
                        <path d="M24 20H104V24H24V20Z"/>
                    </mask>
                    <path d="M24 20H104V24H24V20Z" fill="#364153"/>
                    <path d="M104 24V23H24V24V25H104V24Z" fill="#4A5565" mask="url(#path-6-inside-3_5_289)"/>
                    <mask id="path-8-inside-4_5_289" fill="white">
                        <path d="M24 24H104V28H24V24Z"/>
                    </mask>
                    <path d="M24 24H104V28H24V24Z" fill="#364153"/>
                    <path d="M104 28V27H24V28V29H104V28Z" fill="#4A5565" mask="url(#path-8-inside-4_5_289)"/>
                    {/* bulb top end */}
                    {/* bulb */}
                    <g filter="url(#filter0_i_5_289)">
                        <path d="M0 100C0 64.6538 28.6538 36 64 36C99.3462 36 128 64.6538 128 100V132C128 167.346 99.3462 196 64 196C28.6538 196 0 167.346 0 132V100Z" fill="url(#paint1_radial_5_289)"/>
                        <g opacity="0.4" filter="url(#filter1_f_5_289)">
                            <path d="M32 92C32 78.7452 42.7452 68 56 68C69.2548 68 80 78.7452 80 92V108C80 121.255 69.2548 132 56 132C42.7452 132 32 121.255 32 108V92Z" fill="url(#paint2_linear_5_289)"/>
                        </g>
                    </g>
                    {/* bulb end */}
                    <defs>
                        {/* bulb top */}
                        <linearGradient id="paint0_linear_5_289" x1="64" y1="0" x2="64" y2="12" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4A5565"/>
                            <stop offset="1" stopColor="#364153"/>
                        </linearGradient>
                        {/* bulb top end */}

                        {/* bulb */}
                        <filter id="filter0_i_5_289" x="0" y="36" width="128" height="160" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="10"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_5_289"/>
                        </filter>
                        <radialGradient id="paint1_radial_5_289" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(38.4 84) rotate(-90) scale(143.43 143.43)">
                            <stop stopColor="#4A5568"/>
                            <stop offset="0.5" stopColor="#2D3748"/>
                            <stop offset="1" stopColor="#1A202C"/>
                        </radialGradient>
                        <filter id="filter1_f_5_289" x="16" y="52" width="80" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="8" result="effect1_foregroundBlur_5_289"/>
                        </filter>
                        <linearGradient id="paint2_linear_5_289" x1="32" y1="68" x2="93.44" y2="114.08" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0.8"/>
                            <stop offset="1" stopOpacity="0"/>
                        </linearGradient>
                    </defs>
                </svg>
            }

            <DeviceControls device={device} colorMap={colorMap}/>

        </div>
    );
}
