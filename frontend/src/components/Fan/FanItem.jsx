import React from "react";
import './FanItem.css';
import DeviceControls from "../DeviceControls.jsx";

export default function FanItem({ device }) {

    const settings = {
        power: device.settings.power,
        speed: device.settings.speed
    };

    const bladeStyle = {
        transformOrigin: "160px 160px",
        animation: settings.power
            ? `spin ${1 / (settings.speed / 50 + 0.1)}s linear infinite`
            : "none",
    };

    return (
        <div className="fan-item">

            <div className="fan-visual">
                <svg
                    width="328"
                    height="320"
                    viewBox="0 0 328 320"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >

                    {/* ROTATING FAN BLADES ONLY */}
                    <g id="blades" style={bladeStyle}>
                        <g filter="url(#filter0_di_32_646)">
                            <path
                                d="M132 150L132 38C132 22.536 144.536 10 160 10C175.464 10 188 22.536 188 38L188 150L132 150Z"
                                fill="url(#paint0_linear_32_646)"
                                shapeRendering="crispEdges"
                            />
                            <g opacity="0.2">
                                <path
                                    d="M132 150L132 38C132 22.536 144.536 10 160 10C175.464 10 188 22.536 188 38L188 150L132 150Z"
                                    fill="url(#paint1_linear_32_646)"
                                />
                            </g>
                            <g opacity="0.1">
                                <path
                                    d="M132 150L132 38C132 22.536 144.536 10 160 10C175.464 10 188 22.536 188 38L188 150L132 150Z"
                                    fill="url(#paint2_linear_32_646)"
                                />
                            </g>
                        </g>

                        <g filter="url(#filter1_di_32_646)">
                            <path
                                d="M170 132H292C307.464 132 320 144.536 320 160C320 175.464 307.464 188 292 188H170V132Z"
                                fill="url(#paint3_linear_32_646)"
                                shapeRendering="crispEdges"
                            />
                            <g opacity="0.2">
                                <path
                                    d="M198 132H292C307.464 132 320 144.536 320 160C320 175.464 307.464 188 292 188H198V132Z"
                                    fill="url(#paint4_linear_32_646)"
                                />
                            </g>
                            <g opacity="0.1">
                                <path
                                    d="M172 132H292C307.464 132 320 144.536 320 160C320 175.464 307.464 188 292 188H172V132Z"
                                    fill="url(#paint5_linear_32_646)"
                                />
                            </g>
                        </g>

                        <g filter="url(#filter2_di_32_646)">
                            <path
                                d="M188 176L188 282C188 297.464 175.464 310 160 310C144.536 310 132 297.464 132 282L132 176L188 176Z"
                                fill="url(#paint6_linear_32_646)"
                                shapeRendering="crispEdges"
                            />
                            <g opacity="0.2">
                                <path
                                    d="M188 176L188 282C188 297.464 175.464 310 160 310C144.536 310 132 297.464 132 282L132 176L188 176Z"
                                    fill="url(#paint7_linear_32_646)"
                                />
                            </g>
                            <g opacity="0.1">
                                <path
                                    d="M188 176L188 282C188 297.464 175.464 310 160 310C144.536 310 132 297.464 132 282L132 176L188 176Z"
                                    fill="url(#paint8_linear_32_646)"
                                />
                            </g>
                        </g>

                        <g filter="url(#filter3_di_32_646)">
                            <path
                                d="M144 188L38 188C22.536 188 10 175.464 10 160C10 144.536 22.536 132 38 132L144 132L144 188Z"
                                fill="url(#paint9_linear_32_646)"
                                shapeRendering="crispEdges"
                            />
                            <g opacity="0.2">
                                <path
                                    d="M144 188L38 188C22.536 188 10 175.464 10 160C10 144.536 22.536 132 38 132L144 132L144 188Z"
                                    fill="url(#paint10_linear_32_646)"
                                />
                            </g>
                            <g opacity="0.1">
                                <path
                                    d="M144 188L38 188C22.536 188 10 175.464 10 160C10 144.536 22.536 132 38 132L144 132L144 188Z"
                                    fill="url(#paint11_linear_32_646)"
                                />
                            </g>
                        </g>
                    </g>

                    {/* STATIC MOTOR (does NOT rotate) */}
                    <g filter="url(#filter4_d_32_646)">
                        <mask
                            id="path-13-inside-1_32_646"
                            fill="white"
                        >
                            <path d="M160 200C137.909 200 120 182.091 120 160C120 137.909 137.909 120 160 120C182.091 120 200 137.909 200 160C200 182.091 182.091 200 160 200Z" />
                        </mask>

                        <path
                            d="M160 200C137.909 200 120 182.091 120 160C120 137.909 137.909 120 160 120C182.091 120 200 137.909 200 160C200 182.091 182.091 200 160 200Z"
                            fill="url(#paint12_linear_32_646)"
                            shapeRendering="crispEdges"
                        />

                        <path
                            d="M160 188C144.536 188 132 175.464 132 160C132 144.536 144.536 132 160 132C175.464 132 188 144.536 188 160C188 175.464 175.464 188 160 188Z"
                            fill="url(#paint13_linear_32_646)"
                        />
                    </g>

                    {/* All filters & gradients unchanged */}
                    <defs>
                        <filter id="filter0_di_32_646" x="124" y="4.00001" width="72" height="156" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="2"/>
                            <feGaussianBlur stdDeviation="4"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_32_646"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_32_646" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="2"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
                            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_32_646"/>
                        </filter>
                        <filter id="filter1_di_32_646" x="162" y="126" width="166" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="2"/>
                            <feGaussianBlur stdDeviation="4"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_32_646"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_32_646" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="2"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
                            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_32_646"/>
                        </filter>
                        <filter id="filter2_di_32_646" x="124" y="170" width="72" height="150" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="2"/>
                            <feGaussianBlur stdDeviation="4"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_32_646"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_32_646" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="2"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
                            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_32_646"/>
                        </filter>
                        <filter id="filter3_di_32_646" x="2.00001" y="126" width="150" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="2"/>
                            <feGaussianBlur stdDeviation="4"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_32_646"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_32_646" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="2"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
                            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_32_646"/>
                        </filter>
                        <filter id="filter4_d_32_646" x="82" y="107" width="156" height="156" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feMorphology radius="12" operator="erode" in="SourceAlpha" result="effect1_dropShadow_32_646"/>
                            <feOffset dy="25"/>
                            <feGaussianBlur stdDeviation="25"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_32_646"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_32_646" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_32_646" x1="160" y1="150" x2="160" y2="10" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4A5568"/>
                            <stop offset="0.3" stopColor="#2D3748"/>
                            <stop offset="0.7" stopColor="#1A202C"/>
                            <stop offset="1" stopColor="#0F1419"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_32_646" x1="132" y1="80" x2="188" y2="80" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0.3"/>
                            <stop offset="1" stopOpacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_32_646" x1="160" y1="150" x2="160" y2="10" gradientUnits="userSpaceOnUse">
                            <stop stopOpacity="0"/>
                            <stop offset="0.5" stopColor="#101828"/>
                            <stop offset="1" stopOpacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_32_646" x1="170" y1="160" x2="320" y2="160" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4A5568"/>
                            <stop offset="0.3" stopColor="#2D3748"/>
                            <stop offset="0.7" stopColor="#1A202C"/>
                            <stop offset="1" stopColor="#0F1419"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear_32_646" x1="259" y1="132" x2="259" y2="188" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0.3"/>
                            <stop offset="1" stopOpacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint5_linear_32_646" x1="172" y1="160" x2="320" y2="160" gradientUnits="userSpaceOnUse">
                            <stop stopOpacity="0"/>
                            <stop offset="0.5" stopColor="#101828"/>
                            <stop offset="1" stopOpacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint6_linear_32_646" x1="160" y1="176" x2="160" y2="310" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4A5568"/>
                            <stop offset="0.3" stopColor="#2D3748"/>
                            <stop offset="0.7" stopColor="#1A202C"/>
                            <stop offset="1" stopColor="#0F1419"/>
                        </linearGradient>
                        <linearGradient id="paint7_linear_32_646" x1="188" y1="243" x2="132" y2="243" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0.3"/>
                            <stop offset="1" stopOpacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint8_linear_32_646" x1="160" y1="176" x2="160" y2="310" gradientUnits="userSpaceOnUse">
                            <stop stopOpacity="0"/>
                            <stop offset="0.5" stopColor="#101828"/>
                            <stop offset="1" stopOpacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint9_linear_32_646" x1="144" y1="160" x2="10" y2="160" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4A5568"/>
                            <stop offset="0.3" stopColor="#2D3748"/>
                            <stop offset="0.7" stopColor="#1A202C"/>
                            <stop offset="1" stopColor="#0F1419"/>
                        </linearGradient>
                        <linearGradient id="paint10_linear_32_646" x1="77" y1="188" x2="77" y2="132" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0.3"/>
                            <stop offset="1" stopOpacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint11_linear_32_646" x1="144" y1="160" x2="10" y2="160" gradientUnits="userSpaceOnUse">
                            <stop stopOpacity="0"/>
                            <stop offset="0.5" stopColor="#101828"/>
                            <stop offset="1" stopOpacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint12_linear_32_646" x1="120" y1="200" x2="200" y2="120" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4A5565"/>
                            <stop offset="1" stopColor="#1E2939"/>
                        </linearGradient>
                        <linearGradient id="paint13_linear_32_646" x1="132" y1="188" x2="188" y2="132" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#364153"/>
                            <stop offset="1" stopColor="#101828"/>
                        </linearGradient>
                    </defs>

                </svg>
            </div>
            <DeviceControls device={device} />
        </div>
    );
}

