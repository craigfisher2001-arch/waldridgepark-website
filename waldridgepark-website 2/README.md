# Waldridge Park JFC Website

Official website for Waldridge Park Junior Football Club, Chester-le-Street, County Durham. Founded 1988.

## Structure

```
waldridgepark-website/
├── index.html              # Homepage
├── pages/
│   ├── about.html          # Club history & philosophy
│   ├── teams.html          # All teams (U5 to adult)
│   ├── news.html           # News & newsletters
│   ├── club-info.html      # Policies, committee, subscriptions, sponsors
│   └── contact.html        # Contact form & find us
├── css/
│   └── style.css           # All styles
├── js/
│   └── components.js       # Shared JS utilities
└── images/
    ├── badge.png            # Club crest (white, transparent background)
    ├── hero.jpg             # Homepage hero image
    ├── photo-huddle.jpg     # Team huddle photo
    ├── photo-action-1.jpg   # Action photo 1
    └── photo-action-2.jpg   # Action photo 2
```

## Images needed

Before going live, add the following to the `/images/` folder:

| Filename | Description |
|---|---|
| `badge.png` | Club crest — white version on transparent background |
| `hero.jpg` | Main hero image (team huddle recommended) |
| `photo-huddle.jpg` | News card image |
| `photo-action-1.jpg` | News card image |
| `photo-action-2.jpg` | News card image |

## Contact form setup

The contact form on `contact.html` uses [Formspree](https://formspree.io) (free tier available).

1. Create a free account at formspree.io
2. Create a new form
3. Copy your form ID
4. Replace `YOUR_FORM_ID` in `pages/contact.html` with your actual form ID

## Hosting

This site is hosted on [Netlify](https://netlify.com), connected to this GitHub repository. Any changes pushed to the `main` branch will automatically deploy.

## Making changes

- **Content updates**: Edit the relevant HTML file directly in GitHub (click the file, then the pencil icon)
- **Adding news posts**: Edit `pages/news.html` and duplicate one of the existing news card blocks
- **Adding policies**: Edit `pages/club-info.html` and add a new `<li>` to the policy list
- **Updating committee**: Edit the committee cards in `pages/club-info.html`

## Domain

The site uses the custom domain `waldridgepark.co.uk`, registered with Ionos. DNS is pointed to Netlify.
