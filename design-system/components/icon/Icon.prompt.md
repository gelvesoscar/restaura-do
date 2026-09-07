Renders a Lucide glyph tinted with currentColor — the only icon system in Comounlulo; never hand-draw SVG or use emoji.

```jsx
<Icon name="leaf" size="lg" />
<Button>Ver rutina <Icon name="arrow-right" size="sm" /></Button>
```

- Glyphs load from the lucide-static CDN and are masked with `currentColor`, so color comes from the parent text color.
- Preferred glyph vocabulary: leaf, sprout, sun, droplet, heart-pulse, flask-conical, microscope, moon, activity, shield-check, package, truck, arrow-right, check.
- Avoid clinical glyphs (cross, pill, dna) — they push the brand into the lab territory it avoids.
