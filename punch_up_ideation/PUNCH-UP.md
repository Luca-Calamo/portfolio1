**Portfolio Punch-Up**
**Luca Calamo — Advanced Digital Asset Integration**

---

**My Idea**

I want to rebuild my portfolio page to feature a carousel showcase of my projects. The core feature is a toggle switch at the top of the page that lets you cycle between 3 different carousel layouts, each with their own interactive element. It will display the same projects, but each with their own unique visual layout and interactivity.

---

**The 3 Carousel Modes**

---

**Mode 1 — 3D Parallax Ring**
A draggable circular ring of cards that look 3D. The cards orbit around a central axis, giving the impression of spatial depth as you drag through them.

Reference: [https://freefrontend.com/code/draggable-3d-parallax-image-ring-2026-01-27/]

**Mode 2 — 3D Parallax Card Slider**
A horizontal slider where cards scale, rotate, and shift in perspective as you scroll. The active card is foregrounded; flanking cards recede into depth.

Reference: [https://freefrontend.com/code/3d-parallax-card-slider-2026-02-11/]

**Mode 3 — Drag & Wheel Stacked Carousel**
A stacked card carousel where scrolling or click-dragging advances through a fanned deck of cards using CSS transform and opacity transitions.

Reference: [https://freefrontend.com/javascript-carousels/] Overlay called Drag & Wheel Stacked carousel (there is no unique endpoint, the example for this one is an overlay)

---

**Fallback Plan**

If it is too difficult to implement all 3, I will choose just one and not have it toggleable. I could also simplify the carousels, or use 3 basic carousels in different layouts instead.

---

**Lo-Fi Mockups**
**Look in folder for images of the three carousel modes.**
(I asked ai to make me a version I could display here, but its hideous LOL just check the images :p)

Overall Page Layout

```
┌──────────────────────────────────────────────────────┐
│   LUCA CALAMO  —  Portfolio                          │
│                                                      │
│   ┌─────────────────────────────────────────────┐   │
│   │  [ Ring ]  [ Card Slider ]  [ Stacked ]     │   │  ← Toggle switcher
│   └─────────────────────────────────────────────┘   │
│                                                      │
│   ┌─────────────────────────────────────────────┐   │
│   │           [ CAROUSEL DISPLAY ]              │   │
│   │         (changes based on mode)             │   │
│   └─────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────┘
```

Mode 1 — 3D Parallax Ring

```
              [img]
          [img]     [img]
        [img]    ●    [img]     ← drag to rotate
          [img]     [img]
              [img]
```

Mode 2 — 3D Parallax Card Slider

```
  [sm/behind]  [ LARGE / FRONT ]  [sm/behind]
      ↑ receded       ↑ active        ↑ receded
            ← drag left or right →
```

Mode 3 — Drag & Wheel Stacked Carousel

```
   ┌──────────────────────┐   ← active card (front)
  ┌──────────────────────┐│   ← next card (offset, rotated)
 ┌──────────────────────┐││   ← further cards (faded)
 │       [image]        │││
 │       title          │││   scroll ↕ or drag ←→ to advance
 └──────────────────────┘││
  └──────────────────────┘│
   └──────────────────────┘
```

---

**Fears & Doubts**

**Toggle performance** — I'm uncertain about whether the toggle will work cleanly between the three modes, and whether switching between them could negatively impact the overall performance and load time of my site.

**Connecting to project data** — Linking all three carousels to my projects.ts data sheet and making sure each mode pulls from it flawlessly is something I'm not fully confident about yet — keeping the data source consistent across three different carousel implementations could get messy.

**Overbuilding** — Three carousels is ambitious. If integrating all three results in a rough final product, one excellent carousel is better than three mediocre ones.

---

**References**

Ottaviani, F. (2026, January 27). _JavaScript carousels_. Free Frontend. https://freefrontend.com/javascript-carousels/

Jerleke, D. (2024). _Predefined examples_. Embla Carousel. https://www.embla-carousel.com/examples/predefined/

Anthropic. (2026). _Claude_ (claude-sonnet-4-6) [Large language model]. https://claude.ai
