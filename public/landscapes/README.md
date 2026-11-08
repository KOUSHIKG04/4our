# Footer artwork

Mountain layers are copied unchanged from Motive9. An inline SVG color-transfer filter renders them in 4our orange shades. A continuous ground gradient covers the original meadow and joins the footer's charcoal background; there is no dither mask or striped overlay.

The red car is a transparent cutout made with the built-in image tool from the supplied reference (see footer-red-car.provenance.json). Its current width is 58–112px, with a 64px mobile size. The crossing and light trail pause outside the viewport and when the document is hidden. Reduced motion uses a stationary car without a trail.

The visible footer logo uses true vector paths traced from the supplied PNG, shared with the header via lib/brandmark.ts. The 4 and u retain their baseline; o is moved down 20% and r down 16% of their glyph height. Hover or keyboard focus randomizes independent letter tilts. The footer letters remain entirely white; the header uses the original orange/white pairing without any photo background.

Motion refinement: letter targets and activation are committed together; 850ms eased transforms handle entry and return on a stable pointer hit area. Car sizing is now 72–144px (84px mobile). The dark sky fade ends at 30% rather than 45%; the ground blend is slightly shallower.

The footer wordmark now sits lower in the landscape (40% from the canvas top), so 4/u no longer appear lifted. The o/r retain additional positive downward offsets. The favicon 4 has 15% more scale reduction inside its square canvas; the header mark is 68×32px.
