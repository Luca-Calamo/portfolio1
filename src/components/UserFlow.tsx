import {useState} from 'react';

export default function UserFlow() {
    const [isFullscreen, setIsFullscreen] = useState(false);

    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap');

                    .uf-wrapper {
                        background: #0d0f12;
                        border-radius: 8px;
                        padding: 48px 40px 64px;
                        position: relative;
                        overflow: hidden;
                        font-family: 'DM Mono', monospace;
                    }
                    .uf-wrapper::before {
                        content: '';
                        position: absolute;
                        inset: 0;
                        background:
                            radial-gradient(ellipse 80% 50% at 20% 0%, rgba(245,166,35,0.06) 0%, transparent 60%),
                            radial-gradient(ellipse 60% 40% at 80% 100%, rgba(232,87,42,0.05) 0%, transparent 60%);
                        pointer-events: none;
                        z-index: 0;
                    }
                    .uf-content {
                        position: relative;
                        z-index: 1;
                        max-width: 1400px;
                        margin: 0 auto;
                    }

                    /* ── Header ── */
                    .uf-header {
                        display: flex;
                        align-items: flex-end;
                        justify-content: space-between;
                        margin-bottom: 48px;
                        padding-bottom: 32px;
                        border-bottom: 1px solid rgba(255,255,255,0.07);
                        gap: 24px;
                        flex-wrap: wrap;
                    }
                    .uf-eyebrow {
                        font-family: 'DM Mono', monospace;
                        font-size: 11px;
                        letter-spacing: 0.18em;
                        text-transform: uppercase;
                        color: #f5a623;
                        margin-bottom: 10px;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    }
                    .uf-h1 {
                        font-family: 'Bebas Neue', sans-serif;
                        font-size: clamp(42px, 6vw, 72px);
                        line-height: 0.92;
                        letter-spacing: 0.02em;
                        color: #fff;
                        margin: 0;
                    }
                    .uf-h1 span {
                        background: linear-gradient(135deg, #f5a623, #e8572a);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                    }
                    .uf-header-meta {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        gap: 12px;
                    }
                    .uf-legend {
                        display: flex;
                        gap: 16px;
                        align-items: center;
                    }
                    .uf-legend-item {
                        display: flex;
                        align-items: center;
                        gap: 6px;
                        font-size: 12px;
                        color: #6b7280;
                        font-family: 'DM Mono', monospace;
                        letter-spacing: 0.06em;
                    }
                    .uf-legend-dot {
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                    }

                    /* Diagram */
                    .uf-diagram {
                        width: 100%;
                        padding-bottom: 12px;
                        cursor: pointer;
                        display: flex;
                        justify-content: center;
                    }
                    .uf-diagram svg {
                        display: block;
                        width: 100%;
                        max-width: 100%;
                    }

                    /* Modal Styles */
                    .uf-modal-overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(0, 0, 0, 0.95);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 10000;
                        padding: 20px;
                    }
                    .uf-modal-content {
                        position: relative;
                        width: 96vw;
                        height: 92vh;
                        max-width: none;
                        max-height: none;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .uf-modal-close {
                        position: fixed;
                        top: 20px;
                        right: 44px;
                        background: none;
                        border: none;
                        color: #ffffff;
                        font-size: 32px;
                        cursor: pointer;
                        padding: 0;
                        width: 40px;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: transform 0.2s ease;
                        z-index: 10001;
                    }
                    .uf-modal-close:hover {
                        transform: scale(1.2);
                    }
                    .uf-modal-svg {
                        width: 100%;
                        height: 100%;
                        display: block;
                    }
                    .uf-modal-bg-wrapper {
                        background: #000000;
                        border-radius: 8px;
                        padding: 32px 40px;
                        position: relative;
                        overflow: hidden;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-sizing: border-box;
                    }
                    .uf-modal-bg-wrapper > svg {
                        width: 100%;
                        height: 100%;
                        max-width: 100%;
                        max-height: 100%;
                    }
                    .uf-modal-bg-wrapper::before {
                        content: '';
                        position: absolute;
                        inset: 0;
                        background:
                            radial-gradient(ellipse 80% 50% at 20% 0%, rgba(245,166,35,0.06) 0%, transparent 60%),
                            radial-gradient(ellipse 60% 40% at 80% 100%, rgba(232,87,42,0.05) 0%, transparent 60%);
                        pointer-events: none;
                        z-index: 0;
                    }

                    /* Node styles — two tiers only */
                    .uf-node-main rect {
                        fill: #1e1008;
                        stroke: #f5a623;
                        stroke-width: 1.5;
                    }
                    .uf-node-main text { fill: #ffffff; }

                    .uf-node-neutral rect {
                        fill: #13161b;
                        stroke: #d8d8d8;
                        stroke-width: 1;
                    }
                    .uf-node-neutral text { fill: #d8d8d8; }

                    /* Edge styles */
                    .uf-edge {
                        fill: none;
                        stroke: #7a808c;
                        stroke-width: 1.5;
                    }

                    /* ── Footer ── */
                    .uf-footer {
                        margin-top: 40px;
                        padding-top: 24px;
                        border-top: 1px solid rgba(255,255,255,0.07);
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: wrap;
                        gap: 12px;
                    }
                    .uf-footer .ft-left {
                        font-family: 'Bebas Neue', sans-serif;
                        font-size: 18px;
                        letter-spacing: 0.08em;
                        color: rgba(255,255,255,0.15);
                    }
                    .uf-footer .ft-right {
                        font-family: 'DM Mono', monospace;
                        font-size: 10px;
                        color: #6b7280;
                        letter-spacing: 0.1em;
                    }

                    /* Animations */
                    .uf-node-group {
                        opacity: 0;
                        animation: ufFadeUp 0.45s ease forwards;
                    }
                    .uf-edge-group {
                        opacity: 0;
                        animation: ufFadeIn 0.4s ease forwards;
                    }
                    @keyframes ufFadeUp {
                        from { opacity: 0; transform: translateY(8px); }
                        to   { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes ufFadeIn {
                        from { opacity: 0; }
                        to   { opacity: 1; }
                    }
                `,
                }}
            />
            <div className='uf-wrapper'>
                <div className='uf-content'>
                    {/* Header */}
                    <header className='uf-header'>
                        <div>
                            <div className='uf-eyebrow'>ProLog · 2024</div>
                            <h2 className='uf-h1'>
                                User <span>Flow</span>
                            </h2>
                        </div>
                        <div className='uf-header-meta'>
                            <div className='uf-legend'>
                                <div className='uf-legend-item'>
                                    <div
                                        className='uf-legend-dot'
                                        style={{background: '#f5a623'}}
                                    ></div>
                                    Main Screens
                                </div>
                                <div className='uf-legend-item'>
                                    <div
                                        className='uf-legend-dot'
                                        style={{background: '#d8d8d8'}}
                                    ></div>
                                    Sub-screens
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* SVG Diagram */}
                    <div
                        className='uf-diagram'
                        onClick={() => setIsFullscreen(true)}
                    >
                        <UserFlowSVG />
                    </div>

                    {/* Footer */}
                    <footer className='uf-footer'>
                        <div className='ft-left'>ProLog</div>
                        <div className='ft-right'>User Flow · ProLog App</div>
                    </footer>
                </div>
            </div>

            {isFullscreen && (
                <div
                    className='uf-modal-overlay'
                    onClick={() => setIsFullscreen(false)}
                >
                    <div
                        className='uf-modal-content'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className='uf-modal-close'
                            onClick={() => setIsFullscreen(false)}
                            aria-label='Close fullscreen view'
                        >
                            ✕
                        </button>
                        <div className='uf-modal-bg-wrapper'>
                            <UserFlowSVG isFullscreen={true} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

function UserFlowSVG({isFullscreen = false}) {
    // ViewBox tightly wraps content: rightmost node ends ~1910, bottom ~1132
    const W = 1950;
    const H = 1160;
    const R = 14;

    const baseNodes = [
        // Col 0 — root
        {
            id: 'onboarding',
            label: 'Onboarding Screens',
            x: 16,
            y: 535,
            w: 220,
            h: 56,
            type: 'neutral',
        },
        // Col 1 — auth
        {
            id: 'signup',
            label: 'Sign Up',
            x: 310,
            y: 465,
            w: 155,
            h: 52,
            type: 'neutral',
        },
        {
            id: 'login',
            label: 'Login',
            x: 310,
            y: 600,
            w: 155,
            h: 52,
            type: 'neutral',
        },
        {
            id: 'forgot',
            label: 'Forgot Password',
            x: 285,
            y: 710,
            w: 205,
            h: 52,
            type: 'neutral',
        },
        // Col 2 — fetching
        {
            id: 'fetching',
            label: 'Fetching Data',
            x: 545,
            y: 535,
            w: 180,
            h: 56,
            type: 'neutral',
        },
        // Col 3 — main sections
        {
            id: 'settings',
            label: 'Settings',
            x: 810,
            y: 90,
            w: 150,
            h: 52,
            type: 'neutral',
        },
        {
            id: 'school',
            label: 'School',
            x: 810,
            y: 290,
            w: 150,
            h: 52,
            type: 'main',
        },
        {
            id: 'journey',
            label: 'Journey Dashboard',
            x: 790,
            y: 535,
            w: 220,
            h: 56,
            type: 'main',
        },
        {
            id: 'work',
            label: 'Work',
            x: 810,
            y: 815,
            w: 150,
            h: 52,
            type: 'main',
        },
        {
            id: 'competencies',
            label: 'Competencies',
            x: 795,
            y: 1020,
            w: 180,
            h: 52,
            type: 'main',
        },
        // School children
        {
            id: 'spendings',
            label: 'Potential Spendings',
            x: 1060,
            y: 215,
            w: 210,
            h: 52,
            type: 'neutral',
        },
        {
            id: 'books',
            label: 'Books, Equipment, etc.',
            x: 1355,
            y: 215,
            w: 240,
            h: 52,
            type: 'neutral',
        },
        {
            id: 'slots',
            label: 'Next Available Slots',
            x: 1060,
            y: 340,
            w: 210,
            h: 52,
            type: 'neutral',
        },
        {
            id: 'dates',
            label: 'Start/End Dates',
            x: 1355,
            y: 340,
            w: 180,
            h: 52,
            type: 'neutral',
        },
        {
            id: 'examstatus',
            label: 'Exam Status',
            x: 1620,
            y: 340,
            w: 155,
            h: 52,
            type: 'neutral',
        },
        // Journey children
        {
            id: 'progress',
            label: 'Overall Progress',
            x: 1100,
            y: 470,
            w: 200,
            h: 56,
            type: 'neutral',
        },
        {
            id: 'requirements',
            label: 'Requirements Completed',
            x: 1390,
            y: 470,
            w: 270,
            h: 56,
            type: 'neutral',
        },
        {
            id: 'levelup',
            label: 'Level Up',
            x: 1750,
            y: 470,
            w: 160,
            h: 56,
            type: 'neutral',
        },
        {
            id: 'reminders',
            label: 'Important Reminders',
            x: 1100,
            y: 600,
            w: 200,
            h: 52,
            type: 'neutral',
        },
        // Work children
        {
            id: 'hourtrack',
            label: 'Hour Tracking',
            x: 1065,
            y: 755,
            w: 180,
            h: 52,
            type: 'neutral',
        },
        {
            id: 'discrepancy',
            label: 'Discrepancy Tracking',
            x: 1340,
            y: 755,
            w: 225,
            h: 52,
            type: 'neutral',
        },
        {
            id: 'reporterr',
            label: 'Report Error',
            x: 1660,
            y: 755,
            w: 160,
            h: 52,
            type: 'neutral',
        },
        {
            id: 'paystub',
            label: 'Paystub Records',
            x: 1065,
            y: 875,
            w: 180,
            h: 52,
            type: 'neutral',
        },
        // Competencies children
        {
            id: 'practtheory',
            label: 'Practical / Theory',
            x: 1068,
            y: 965,
            w: 200,
            h: 52,
            type: 'neutral',
        },
        {
            id: 'skillsum',
            label: 'Skills Summary',
            x: 1360,
            y: 965,
            w: 180,
            h: 52,
            type: 'neutral',
        },
        {
            id: 'quiz',
            label: 'Completion Quiz',
            x: 1630,
            y: 965,
            w: 180,
            h: 52,
            type: 'neutral',
        },
        {
            id: 'examprep',
            label: 'Exam Prep.',
            x: 1068,
            y: 1080,
            w: 200,
            h: 52,
            type: 'neutral',
        },
        {
            id: 'improvement',
            label: 'Improvement Progress',
            x: 1360,
            y: 1080,
            w: 235,
            h: 52,
            type: 'neutral',
        },
    ];

    const nodes = baseNodes;

    const edges = [
        {from: 'onboarding', to: 'signup'},
        {from: 'onboarding', to: 'login'},
        {from: 'login', to: 'forgot'},
        {from: 'signup', to: 'fetching'},
        {from: 'login', to: 'fetching'},
        {from: 'fetching', to: 'settings'},
        {from: 'fetching', to: 'school'},
        {from: 'fetching', to: 'journey'},
        {from: 'fetching', to: 'work'},
        {from: 'fetching', to: 'competencies'},
        {from: 'school', to: 'spendings'},
        {from: 'school', to: 'slots'},
        {from: 'spendings', to: 'books'},
        {from: 'slots', to: 'dates'},
        {from: 'dates', to: 'examstatus'},
        {from: 'journey', to: 'progress'},
        {from: 'journey', to: 'reminders'},
        {from: 'progress', to: 'requirements'},
        {from: 'requirements', to: 'levelup'},
        {from: 'work', to: 'hourtrack'},
        {from: 'work', to: 'paystub'},
        {from: 'hourtrack', to: 'discrepancy'},
        {from: 'discrepancy', to: 'reporterr'},
        {from: 'competencies', to: 'practtheory'},
        {from: 'competencies', to: 'examprep'},
        {from: 'practtheory', to: 'skillsum'},
        {from: 'skillsum', to: 'quiz'},
        {from: 'examprep', to: 'improvement'},
    ];

    const nodeMap: { [key: string]: any } = {};
    nodes.forEach((n: any) => {
        nodeMap[n.id] = n;
    });

    function cx(n: any) {
        return n.x + n.w / 2;
    }
    function cy(n: any) {
        return n.y + n.h / 2;
    }
    function right(n: any) {
        return n.x + n.w;
    }
    function left(n: any) {
        return n.x;
    }

    function elbowPath(a: any, b: any) {
        const x1 = right(a),
            y1 = cy(a);
        const x2 = left(b),
            y2 = cy(b);
        const mx = (x1 + x2) / 2;
        const r = 12;

        if (Math.abs(y1 - y2) < 4) {
            return `M${x1},${y1} L${x2},${y2}`;
        }

        const goingDown = y2 > y1;
        const cr = goingDown ? r : -r;

        return [
            `M${x1},${y1}`,
            `L${mx - r},${y1}`,
            `Q${mx},${y1} ${mx},${y1 + cr}`,
            `L${mx},${y2 - cr}`,
            `Q${mx},${y2} ${mx + r},${y2}`,
            `L${x2},${y2}`,
        ].join(' ');
    }

    const colors: { [key: string]: any } = {
        main: {fill: '#1e1008', stroke: '#f5a623', text: '#ffffff'},
        neutral: {fill: '#13161b', stroke: '#d8d8d8', text: '#d8d8d8'},
    };

    function fontSize(type: string) {
        return type === 'main' ? 17 : 15.5;
    }

    function delay(id: string) {
        const depthMap: { [key: string]: number } = {
            onboarding: 0,
            signup: 1,
            login: 1,
            forgot: 2,
            fetching: 2,
            settings: 3,
            school: 3,
            journey: 3,
            work: 3,
            competencies: 3,
            spendings: 4,
            slots: 4,
            books: 5,
            dates: 5,
            examstatus: 6,
            progress: 4,
            reminders: 4,
            requirements: 5,
            levelup: 6,
            hourtrack: 4,
            paystub: 4,
            discrepancy: 5,
            reporterr: 6,
            practtheory: 4,
            examprep: 4,
            skillsum: 5,
            quiz: 6,
            improvement: 5,
        };
        return ((depthMap[id] || 0) * 0.07 + 0.05).toFixed(2) + 's';
    }

    // Fullscreen zooms into just the 4 main sections + their children
    // x: 770 (just left of school) to 1930 (right edge of content), y: 175 to 1155
    const viewBox = isFullscreen ? '790 185 1140 965' : `0 0 ${W} ${H}`;

    return (
        <svg
            viewBox={viewBox}
            width={isFullscreen ? '100%' : '100%'}
            height={isFullscreen ? '100%' : undefined}
            style={{
                maxHeight: isFullscreen ? undefined : 1160,
                display: 'block',
                position: 'relative',
                zIndex: 1,
                overflow: 'hidden',
            }}
            preserveAspectRatio='xMidYMid meet'
            overflow='hidden'
            className={isFullscreen ? 'uf-modal-svg' : ''}
            shapeRendering='geometricPrecision'
            xmlns='http://www.w3.org/2000/svg'
        >
            <defs>
                <marker
                    id='arrow'
                    markerWidth='8'
                    markerHeight='8'
                    refX='6'
                    refY='4'
                    orient='auto'
                >
                    <path d='M0,0 L0,8 L8,4 z' fill='#7a808c' />
                </marker>
                {isFullscreen && (
                    <clipPath id='fs-clip'>
                        <rect x='790' y='185' width='1140' height='965' />
                    </clipPath>
                )}
            </defs>

            <g clipPath={isFullscreen ? 'url(#fs-clip)' : undefined}>
                {edges.map((e: any, i: number) => {
                    const a = nodeMap[e.from];
                    const b = nodeMap[e.to];
                    if (!a || !b) return null;
                    return (
                        <path
                            key={i}
                            className='uf-edge-group'
                            style={{animationDelay: delay(e.from)}}
                            d={elbowPath(a, b)}
                            fill='none'
                            stroke='#7a808c'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            shapeRendering='geometricPrecision'
                            markerEnd='url(#arrow)'
                        />
                    );
                })}

                {nodes.map((n: any) => {
                    const c = colors[n.type];
                    const fs = fontSize(n.type);
                    return (
                        <g
                            key={n.id}
                            className='uf-node-group'
                            style={{animationDelay: delay(n.id)}}
                        >
                            <rect
                                x={n.x}
                                y={n.y}
                                width={n.w}
                                height={n.h}
                                rx={R}
                                ry={R}
                                fill={c.fill}
                                stroke={c.stroke}
                                strokeWidth={n.type === 'main' ? 2 : 1.5}
                            />
                            <text
                                x={cx(n)}
                                y={cy(n)}
                                dominantBaseline='central'
                                textAnchor='middle'
                                fontFamily="'DM Sans', sans-serif"
                                fontSize={fs}
                                fontWeight={n.type === 'main' ? 500 : 400}
                                fill={c.text}
                                letterSpacing='0.01em'
                            >
                                {n.label}
                            </text>
                        </g>
                    );
                })}
            </g>
        </svg>
    );
}
