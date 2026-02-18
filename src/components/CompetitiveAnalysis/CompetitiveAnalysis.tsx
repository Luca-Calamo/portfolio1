export default function CompetitiveAnalysis() {
    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                    .comp-analysis-wrapper {
                        background: #0d0f12;
                        border-radius: 8px;
                        padding: 48px 40px 64px;
                        position: relative;
                        overflow-x: hidden;
                        box-shadow: 8px 8px 0 0 rgba(0, 0, 0, 1);
                    }
                    .comp-analysis-wrapper::before {
                        content: '';
                        position: absolute;
                        inset: 0;
                        background: radial-gradient(ellipse 80% 50% at 20% 0%, rgba(245,166,35,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(232,87,42,0.05) 0%, transparent 60%);
                        pointer-events: none;
                        z-index: 0;
                    }
                    .comp-analysis-content { position: relative; z-index: 1; max-width: 1300px; margin: 0 auto; }
                    .comp-header {
                        display: flex;
                        align-items: flex-end;
                        justify-content: space-between;
                        margin-bottom: 48px;
                        padding-bottom: 32px;
                        border-bottom: 1px solid rgba(255,255,255,0.07);
                        gap: 24px;
                        flex-wrap: wrap;
                    }
                    .comp-eyebrow {
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
                    .comp-eyebrow::before {
                        content: '';
                        display: inline-block;
                        width: 20px;
                        height: 1px;
                        background: #f5a623;
                    }
                    .comp-h1 {
                        font-family: 'Bebas Neue', sans-serif;
                        font-size: clamp(42px, 6vw, 72px);
                        line-height: 0.92;
                        letter-spacing: 0.02em;
                        color: #fff;
                        margin: 0;
                    }
                    .comp-h1 span {
                        background: linear-gradient(135deg, #f5a623, #e8572a);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                    }
                    .comp-header-meta {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        gap: 12px;
                    }
                    .comp-team-chips {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 6px;
                        justify-content: flex-end;
                        max-width: 340px;
                    }
                    .comp-chip {
                        font-size: 11px;
                        font-weight: 500;
                        padding: 4px 10px;
                        border-radius: 100px;
                        background: #1a1e25;
                        border: 1px solid rgba(255,255,255,0.07);
                        color: #6b7280;
                        letter-spacing: 0.04em;
                    }
                    .comp-legend {
                        display: flex;
                        gap: 16px;
                        align-items: center;
                    }
                    .comp-legend-item {
                        display: flex;
                        align-items: center;
                        gap: 6px;
                        font-size: 12px;
                        color: #6b7280;
                        font-family: 'DM Mono', monospace;
                        letter-spacing: 0.06em;
                    }
                    .comp-legend-dot {
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                    }
                    .comp-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
                        gap: 2px;
                        background: rgba(255,255,255,0.07);
                        border: 1px solid rgba(255,255,255,0.07);
                        border-radius: 16px;
                        overflow: hidden;
                    }
                    .comp-card {
                        background: #13161b;
                        padding: 28px;
                        display: flex;
                        flex-direction: column;
                        gap: 20px;
                        opacity: 0;
                        transform: translateY(16px);
                        animation: fadeUp 0.5s ease forwards;
                        transition: background 0.2s;
                    }
                    
                    @keyframes fadeUp {
                        to { opacity: 1; transform: none; }
                    }
                    .comp-card:nth-child(1) { animation-delay: 0.05s; }
                    .comp-card:nth-child(2) { animation-delay: 0.10s; }
                    .comp-card:nth-child(3) { animation-delay: 0.15s; }
                    .comp-card:nth-child(4) { animation-delay: 0.20s; }
                    .comp-card:nth-child(5) { animation-delay: 0.25s; }
                    .comp-card:nth-child(6) { animation-delay: 0.30s; }
                    .comp-card:nth-child(7) { animation-delay: 0.35s; }
                    .comp-card:nth-child(8) { animation-delay: 0.40s; }
                    .comp-card-header {
                        display: flex;
                        align-items: flex-start;
                        justify-content: space-between;
                        gap: 12px;
                    }
                    .comp-competitor-name {
                        font-family: 'Bebas Neue', sans-serif;
                        font-size: 26px;
                        letter-spacing: 0.04em;
                        color: #fff;
                        line-height: 1;
                        margin-bottom: 4px;
                    }
                    .comp-competitor-url {
                        font-family: 'DM Mono', monospace;
                        font-size: 10px;
                        color: #6b7280;
                        letter-spacing: 0.04em;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        max-width: 220px;
                    }
                    .comp-card-badges {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        gap: 6px;
                        flex-shrink: 0;
                    }
                    .comp-badge-type {
                        font-size: 10px;
                        font-weight: 600;
                        letter-spacing: 0.1em;
                        text-transform: uppercase;
                        padding: 3px 10px;
                        border-radius: 100px;
                        font-family: 'DM Mono', monospace;
                    }
                    .comp-badge-type.direct {
                        background: rgba(62,207,142,0.15);
                        color: #3ecf8e;
                        border: 1px solid rgba(62,207,142,0.25);
                    }
                    .comp-badge-type.indirect {
                        background: rgba(91,156,246,0.15);
                        color: #5b9cf6;
                        border: 1px solid rgba(91,156,246,0.25);
                    }
                    .comp-badge-year {
                        font-family: 'DM Mono', monospace;
                        font-size: 10px;
                        color: #6b7280;
                        letter-spacing: 0.06em;
                    }
                    .comp-analyst-label {
                        font-size: 10px;
                        color: #6b7280;
                        font-style: italic;
                    }
                    .comp-purpose {
                        font-size: 13px;
                        line-height: 1.6;
                        color: rgba(232,234,240,0.75);
                        font-weight: 300;
                        border-left: 2px solid #f5a623;
                        padding-left: 12px;
                    }
                    .comp-divider {
                        height: 1px;
                        background: rgba(255,255,255,0.07);
                    }
                    .comp-card-body {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 20px;
                    }
                    .comp-section-label {
                        font-family: 'DM Mono', monospace;
                        font-size: 9px;
                        letter-spacing: 0.2em;
                        text-transform: uppercase;
                        color: #f5a623;
                        margin-bottom: 10px;
                    }
                    .comp-audience-tags {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 5px;
                    }
                    .comp-aud-tag {
                        font-size: 11px;
                        padding: 3px 8px;
                        background: rgba(245,166,35,0.12);
                        border: 1px solid rgba(245,166,35,0.15);
                        border-radius: 4px;
                        color: rgba(245,166,35,0.85);
                        font-weight: 500;
                        line-height: 1.4;
                    }
                    .comp-features-list {
                        list-style: none;
                        display: flex;
                        flex-direction: column;
                        gap: 6px;
                        margin: 0;
                        padding: 0;
                    }
                    .comp-features-list li {
                        font-size: 12px;
                        color: rgba(232,234,240,0.65);
                        line-height: 1.5;
                        padding-left: 14px;
                        position: relative;
                        font-weight: 300;
                    }
                    .comp-features-list li::before {
                        content: '→';
                        position: absolute;
                        left: 0;
                        color: #f5a623;
                        font-size: 10px;
                        top: 1px;
                    }
                    .comp-insight {
                        background: rgba(255,255,255,0.03);
                        border: 1px solid rgba(255,255,255,0.07);
                        border-radius: 8px;
                        padding: 10px 12px;
                        font-size: 11.5px;
                        color: rgba(232,234,240,0.55);
                        line-height: 1.6;
                        font-style: italic;
                        font-weight: 300;
                    }
                    .comp-footer {
                        margin-top: 40px;
                        padding-top: 24px;
                        border-top: 1px solid rgba(255,255,255,0.07);
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: wrap;
                        gap: 12px;
                    }
                    .comp-footer .ft-left {
                        font-family: 'Bebas Neue', sans-serif;
                        font-size: 18px;
                        letter-spacing: 0.08em;
                        color: rgba(255,255,255,0.15);
                    }
                    .comp-footer .ft-right {
                        font-family: 'DM Mono', monospace;
                        font-size: 10px;
                        color: #6b7280;
                        letter-spacing: 0.1em;
                    }
                `,
                }}
            />
            <div className='comp-analysis-wrapper'>
                <div className='comp-analysis-content'>
                    <header className='comp-header'>
                        <div className='comp-header-left'>
                            <div className='comp-eyebrow'>
                                UX Research · 2024
                            </div>
                            <h2 className='comp-h1'>
                                Competitive
                                <br />
                                <span>Analysis</span>
                                <br />
                                Matrix
                            </h2>
                        </div>
                        <div className='comp-header-meta'>
                            <div className='comp-team-chips'>
                                <span className='comp-chip'>Pablo</span>
                                <span className='comp-chip'>Kassidy</span>
                                <span className='comp-chip'>Hajin</span>
                                <span className='comp-chip'>Luca</span>
                                <span className='comp-chip'>Leana</span>
                                <span className='comp-chip'>Nathan</span>
                                <span className='comp-chip'>Hyde</span>
                                <span className='comp-chip'>Ubin</span>
                            </div>
                            <div className='comp-legend'>
                                <div className='comp-legend-item'>
                                    <div
                                        className='comp-legend-dot'
                                        style={{background: '#3ecf8e'}}
                                    ></div>
                                    Direct
                                </div>
                                <div className='comp-legend-item'>
                                    <div
                                        className='comp-legend-dot'
                                        style={{background: '#5b9cf6'}}
                                    ></div>
                                    Indirect
                                </div>
                            </div>
                        </div>
                    </header>

                    <div className='comp-grid'>
                        {/* WorkHands */}
                        <div className='comp-card'>
                            <div className='comp-card-header'>
                                <div className='comp-card-title-block'>
                                    <div className='comp-competitor-name'>
                                        WorkHands
                                    </div>
                                    <div className='comp-competitor-url'>
                                        workhands.com
                                    </div>
                                </div>
                                <div className='comp-card-badges'>
                                    <span className='comp-badge-type direct'>
                                        Direct
                                    </span>
                                    <span className='comp-badge-year'>
                                        Est. 2012
                                    </span>
                                    <span className='comp-analyst-label'>
                                        by Pablo
                                    </span>
                                </div>
                            </div>
                            <div className='comp-purpose'>
                                Apprenticeship management platform for tracking
                                OJT hours, class instruction, competencies, and
                                audit-ready reports.
                            </div>
                            <div className='comp-divider'></div>
                            <div className='comp-card-body'>
                                <div>
                                    <div className='comp-section-label'>
                                        Audiences
                                    </div>
                                    <div className='comp-audience-tags'>
                                        <span className='comp-aud-tag'>
                                            Apprentices
                                        </span>
                                        <span className='comp-aud-tag'>
                                            Program Admins
                                        </span>
                                        <span className='comp-aud-tag'>
                                            Supervisors
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='comp-section-label'>
                                        Key Features
                                    </div>
                                    <ul className='comp-features-list'>
                                        <li>
                                            OJT hour tracking, mobile-friendly
                                        </li>
                                        <li>RTI (classroom) tracking</li>
                                        <li>Automatic reminder system</li>
                                        <li>Visual dashboards for all roles</li>
                                        <li>State program onboarding pages</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='comp-insight'>
                                "SHRM-validated partner; stable & credible
                                market presence since 2013.
                                Apprenticeship-focused, not a generic HR tool."
                            </div>
                        </div>

                        {/* Indeavor */}
                        <div className='comp-card'>
                            <div className='comp-card-header'>
                                <div className='comp-card-title-block'>
                                    <div className='comp-competitor-name'>
                                        Indeavor
                                    </div>
                                    <div className='comp-competitor-url'>
                                        indeavor.com
                                    </div>
                                </div>
                                <div className='comp-card-badges'>
                                    <span className='comp-badge-type indirect'>
                                        Indirect
                                    </span>
                                    <span className='comp-badge-year'>
                                        Est. 1996
                                    </span>
                                    <span className='comp-analyst-label'>
                                        by Nathan
                                    </span>
                                </div>
                            </div>
                            <div className='comp-purpose'>
                                Cloud application for industrial enterprises to
                                plan, schedule, manage, and engage employees at
                                scale.
                            </div>
                            <div className='comp-divider'></div>
                            <div className='comp-card-body'>
                                <div>
                                    <div className='comp-section-label'>
                                        Audiences
                                    </div>
                                    <div className='comp-audience-tags'>
                                        <span className='comp-aud-tag'>
                                            Mid-size Enterprises
                                        </span>
                                        <span className='comp-aud-tag'>
                                            Industrial Orgs
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='comp-section-label'>
                                        Key Features
                                    </div>
                                    <ul className='comp-features-list'>
                                        <li>Demand-aligned shift scheduling</li>
                                        <li>
                                            Compliance & scheduling rules engine
                                        </li>
                                        <li>Employee engagement tools</li>
                                        <li>
                                            Skills & certification management
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='comp-insight'>
                                "Works for all company sizes. Scheduling aligns
                                with roles/skills rather than a generic
                                calendar. Strong ROI improvement."
                            </div>
                        </div>

                        {/* THRIVE */}
                        <div className='comp-card'>
                            <div className='comp-card-header'>
                                <div className='comp-card-title-block'>
                                    <div className='comp-competitor-name'>
                                        THRIVE
                                    </div>
                                    <div className='comp-competitor-url'>
                                        riipen.com
                                    </div>
                                </div>
                                <div className='comp-card-badges'>
                                    <span className='comp-badge-type indirect'>
                                        Indirect
                                    </span>
                                    <span className='comp-badge-year'>
                                        Est. 2018
                                    </span>
                                    <span className='comp-analyst-label'>
                                        by Hajin
                                    </span>
                                </div>
                            </div>
                            <div className='comp-purpose'>
                                AI-powered career coaching platform partnered
                                with government and nonprofits to provide
                                personalized career advisory services.
                            </div>
                            <div className='comp-divider'></div>
                            <div className='comp-card-body'>
                                <div>
                                    <div className='comp-section-label'>
                                        Audiences
                                    </div>
                                    <div className='comp-audience-tags'>
                                        <span className='comp-aud-tag'>
                                            Job Seekers
                                        </span>
                                        <span className='comp-aud-tag'>
                                            Career Changers
                                        </span>
                                        <span className='comp-aud-tag'>
                                            Immigrants
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='comp-section-label'>
                                        Key Features
                                    </div>
                                    <ul className='comp-features-list'>
                                        <li>24/7 AI career coaching chatbot</li>
                                        <li>
                                            Resume building & interview prep
                                        </li>
                                        <li>Job matching & recommendations</li>
                                        <li>Multilingual accessibility</li>
                                        <li>Training resource links</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='comp-insight'>
                                "Partnered with Amii AI institute & Prospect
                                Human Services. Focused on vulnerable
                                populations & government employment centres."
                            </div>
                        </div>

                        {/* TimeDog */}
                        <div className='comp-card'>
                            <div className='comp-card-header'>
                                <div className='comp-card-title-block'>
                                    <div className='comp-competitor-name'>
                                        TimeDog
                                    </div>
                                    <div className='comp-competitor-url'>
                                        App Store
                                    </div>
                                </div>
                                <div className='comp-card-badges'>
                                    <span className='comp-badge-type direct'>
                                        Direct
                                    </span>
                                    <span className='comp-badge-year'>
                                        Est. 2020
                                    </span>
                                    <span className='comp-analyst-label'>
                                        by Leana
                                    </span>
                                </div>
                            </div>
                            <div className='comp-purpose'>
                                Apprenticeship hours tracking app for logging
                                hours, skill sets, employer contact info, notes,
                                and certification progress.
                            </div>
                            <div className='comp-divider'></div>
                            <div className='comp-card-body'>
                                <div>
                                    <div className='comp-section-label'>
                                        Audiences
                                    </div>
                                    <div className='comp-audience-tags'>
                                        <span className='comp-aud-tag'>
                                            Apprentices
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='comp-section-label'>
                                        Key Features
                                    </div>
                                    <ul className='comp-features-list'>
                                        <li>Phone-based hour tracking</li>
                                        <li>Skill set development tracking</li>
                                        <li>Employer/sponsor contacts</li>
                                        <li>Notes & cloud storage</li>
                                        <li>Export summaries</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='comp-insight'>
                                "Practical, apprentice-friendly tool with
                                transparent lifetime pricing. Cloud backup
                                builds confidence for critical certification
                                logging."
                            </div>
                        </div>

                        {/* Toggl Track */}
                        <div className='comp-card'>
                            <div className='comp-card-header'>
                                <div className='comp-card-title-block'>
                                    <div className='comp-competitor-name'>
                                        Toggl Track
                                    </div>
                                    <div className='comp-competitor-url'>
                                        track.toggl.com
                                    </div>
                                </div>
                                <div className='comp-card-badges'>
                                    <span className='comp-badge-type indirect'>
                                        Indirect
                                    </span>
                                    <span className='comp-badge-year'>
                                        Est. 2006
                                    </span>
                                    <span className='comp-analyst-label'>
                                        by Luca
                                    </span>
                                </div>
                            </div>
                            <div className='comp-purpose'>
                                Time tracking app with timers, reports, and
                                productivity monitoring for freelancers,
                                agencies, and businesses.
                            </div>
                            <div className='comp-divider'></div>
                            <div className='comp-card-body'>
                                <div>
                                    <div className='comp-section-label'>
                                        Audiences
                                    </div>
                                    <div className='comp-audience-tags'>
                                        <span className='comp-aud-tag'>
                                            Freelancers
                                        </span>
                                        <span className='comp-aud-tag'>
                                            Small Teams
                                        </span>
                                        <span className='comp-aud-tag'>
                                            Agencies
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='comp-section-label'>
                                        Key Features
                                    </div>
                                    <ul className='comp-features-list'>
                                        <li>Start/stop timer + manual entry</li>
                                        <li>Offline tracking & sync</li>
                                        <li>Browser & calendar integrations</li>
                                        <li>
                                            Multi-product brand (Track, Plan,
                                            Hire)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='comp-insight'>
                                "$32.8M USD revenue in 2024. Product-led growth
                                via free tier + content marketing. Evolved from
                                freelancers to teams/agencies over time."
                            </div>
                        </div>

                        {/* Trade Up BC */}
                        <div className='comp-card'>
                            <div className='comp-card-header'>
                                <div className='comp-card-title-block'>
                                    <div className='comp-competitor-name'>
                                        Trade Up BC
                                    </div>
                                    <div className='comp-competitor-url'>
                                        tradeupbc.ca
                                    </div>
                                </div>
                                <div className='comp-card-badges'>
                                    <span className='comp-badge-type direct'>
                                        Direct
                                    </span>
                                    <span className='comp-badge-year'>
                                        Est. 2023
                                    </span>
                                    <span className='comp-analyst-label'>
                                        by Hyde
                                    </span>
                                </div>
                            </div>
                            <div className='comp-purpose'>
                                One-stop solution for experienced tradespeople
                                to access short-term skill upgrade courses and
                                adapt to changing industry demands.
                            </div>
                            <div className='comp-divider'></div>
                            <div className='comp-card-body'>
                                <div>
                                    <div className='comp-section-label'>
                                        Audiences
                                    </div>
                                    <div className='comp-audience-tags'>
                                        <span className='comp-aud-tag'>
                                            Certified Tradespeople
                                        </span>
                                        <span className='comp-aud-tag'>
                                            Employers
                                        </span>
                                        <span className='comp-aud-tag'>
                                            Post-secondary
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='comp-section-label'>
                                        Key Features
                                    </div>
                                    <ul className='comp-features-list'>
                                        <li>
                                            Trade sector course organization
                                        </li>
                                        <li>
                                            Leadership & emerging skills
                                            pathways
                                        </li>
                                        <li>
                                            Full course listings with
                                            format/length
                                        </li>
                                        <li>Direct registration links</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='comp-insight'>
                                "Built on BC post-secondary collaboration.
                                Government-backed with strong financial and
                                educational foundation. Future-focused."
                            </div>
                        </div>

                        {/* Tradeslink */}
                        <div className='comp-card'>
                            <div className='comp-card-header'>
                                <div className='comp-card-title-block'>
                                    <div className='comp-competitor-name'>
                                        Tradeslink
                                    </div>
                                    <div className='comp-competitor-url'>
                                        gettradeslink.com
                                    </div>
                                </div>
                                <div className='comp-card-badges'>
                                    <span className='comp-badge-type indirect'>
                                        Indirect
                                    </span>
                                    <span className='comp-badge-year'>
                                        Est. 2019
                                    </span>
                                    <span className='comp-analyst-label'>
                                        by Ubin
                                    </span>
                                </div>
                            </div>
                            <div className='comp-purpose'>
                                Social networking platform for trades people to
                                share posts, questions, tips, work showcases,
                                and job listings.
                            </div>
                            <div className='comp-divider'></div>
                            <div className='comp-card-body'>
                                <div>
                                    <div className='comp-section-label'>
                                        Audiences
                                    </div>
                                    <div className='comp-audience-tags'>
                                        <span className='comp-aud-tag'>
                                            Tradespeople
                                        </span>
                                        <span className='comp-aud-tag'>
                                            Trades Companies
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='comp-section-label'>
                                        Key Features
                                    </div>
                                    <ul className='comp-features-list'>
                                        <li>
                                            Community posts (Q&A, jobs, tips)
                                        </li>
                                        <li>
                                            Job board via JobBank integration
                                        </li>
                                        <li>Credential & skills profile</li>
                                        <li>24hr support centre</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='comp-insight'>
                                "Partnerships with ECA, Skills Canada, Home
                                Depot Pro & more. 1,000+ users but community
                                still growing — some features in development."
                            </div>
                        </div>

                        {/* SkilledTrades BC */}
                        <div className='comp-card'>
                            <div className='comp-card-header'>
                                <div className='comp-card-title-block'>
                                    <div className='comp-competitor-name'>
                                        SkilledTrades BC
                                    </div>
                                    <div className='comp-competitor-url'>
                                        skilledtradesbc.ca
                                    </div>
                                </div>
                                <div className='comp-card-badges'>
                                    <span className='comp-badge-type direct'>
                                        Direct
                                    </span>
                                    <span className='comp-badge-year'>
                                        Est. 2022
                                    </span>
                                    <span className='comp-analyst-label'>
                                        by Kass
                                    </span>
                                </div>
                            </div>
                            <div className='comp-purpose'>
                                Provincial authority regulating apprenticeship
                                and certification in BC, connecting
                                tradespeople, employers, and educators.
                            </div>
                            <div className='comp-divider'></div>
                            <div className='comp-card-body'>
                                <div>
                                    <div className='comp-section-label'>
                                        Audiences
                                    </div>
                                    <div className='comp-audience-tags'>
                                        <span className='comp-aud-tag'>
                                            Apprentices
                                        </span>
                                        <span className='comp-aud-tag'>
                                            Employers
                                        </span>
                                        <span className='comp-aud-tag'>
                                            Training Providers
                                        </span>
                                        <span className='comp-aud-tag'>
                                            Underrepresented Groups
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='comp-section-label'>
                                        Key Features
                                    </div>
                                    <ul className='comp-features-list'>
                                        <li>
                                            Apprenticeship registration &
                                            tracking
                                        </li>
                                        <li>Official certification services</li>
                                        <li>Diversity & equity programs</li>
                                        <li>
                                            Provincial trades standards
                                            authority
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='comp-insight'>
                                "Government-backed credibility; official
                                provincial authority. Platform is comprehensive
                                but less user-first in design. Actively
                                advancing inclusivity."
                            </div>
                        </div>
                    </div>

                    <footer className='comp-footer'>
                        <div className='ft-left'>Team TradeLift · WEB</div>
                        <div className='ft-right'>
                            Competitive Analysis Matrix · 8 Competitors Reviewed
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
