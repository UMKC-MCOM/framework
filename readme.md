# UMKC-MCOM Framework

## Goals

- Establish a design system for UMKC.edu
- Modernize and Optimize UMKC.edu code base
- Improve the CMS user experience

## Standards

- Scalable design
- Higher accessibility standards
- Easy to maintain

## Design

- How do we decide what stays and what changes?
  - What is most used by web editors?
  - What is not used by web editors?
- Page template options? Do we standardize page options?
  - About page
  - Academics
  - Events Page
  - etc.
- Design gaps - what's missing from landing and/or standard layouts? What standards are needed for each new type of page(s)?
- How to evolve design while limiting drastic changes to the design?
  - Design should be evolved; but not wanting to trigger additional rounds of approval.
- How can we improve a11y?
  - Focus States, ARIA use, etc.
- What are the container sizes and breakpoints?
- Document, educate and share design philosophy
- Set max word counts, limits and truncation points
- Header redesign and how rows interact
- Content Review: What are the things our website needs to do
  - User Journey drafts
- Integrate external tools into the design system
- Standardize designs
  - Headings, style guides, etc.
- Photo sizes - standardize

## Development

- How do we build a mobile-first, accessible website?
- How do we optimize our code?
- Do we reuse code or rebuild from the ground up?
- Remove Bootstrap dependency
- Tackle header and footer elements FIRST
- What goes within _common
- Review file overrides
- Ease maintenance in code and ease user experience
- Choose what will be manual in the upgrade process

## Functionality

- How do we decide how systems should function (directory, news, etc)?
- How to simplify the CMS User Experience?
- What to limit for the average CMS User? 
  - Establish permission levels
  - Establish workflows
- How to leverage external systems?
  - Where do these external systems appear and/or how can they exist across the website?
  - What is standard? What is custom work?
- How do we improve/encourage asset library usage?
- How do we organize global links, images, icons, etc?

## Resources

- [A11yProject](https://www.a11yproject.com/checklist/)
- [Creating Focus Style for Themable Design System](https://www.adhocteam.us/2022/02/08/creating-focus-style-for-themable-design-system/)
- Design System Samples
  - [Broward](https://www.broward.edu/design-system/)
  - [IU](https://rivet.iu.edu) / (Source Code)[https://github.com/indiana-university/rivet-source]

## Developer Requirements

- [Lando](https://lando.dev)
  - [LEMP Stack](https://docs.lando.dev/config/lemp.html)
  - [NodeJS](https://docs.lando.dev/config/node.html#supported-versions)
    - Dev Dependencies:
      - Dart Sass
      - Browserify
      - Browsersync
      - NPM-Run-All
      - onchange

## Installation

Clone this repository and rename it for your project. Make sure to update the name in the `.lando.yml` and `package.json` file before
running any of the commands below.

```bash
# Start up lando
lando start
# Start browsersync and the watch functions
lando npm start
```

## Contribution

Developers of University of Missouri - Kansas City may contribute to the improvement through pull requests.
Please begin the process by opening an issue for internal discussions.

The main branch will be the current revision of the website while additional version branches can exist when development
for the next version is underway.

Current Version: Framework V2
