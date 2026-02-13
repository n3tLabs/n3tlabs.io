# N3tLabs

Private infrastructure for experimental crypto & AI systems.

## Site Structure

This is a minimal Hugo static site serving as an identity anchor for the n3tlabs.io infrastructure namespace.

### Current Setup

- **Main Site** (`/`) - Minimal landing page identifying the domain purpose
- **Lab Section** (`/lab`) - Placeholder for future R&D blog posts and engineering notes

### Infrastructure Namespace

The domain is used as a clean internal naming system for services:

- `agents.n3tlabs.io` - OpenClaw instance
- Future services will follow similar subdomain pattern

### Local Development

```bash
hugo server -D
```

### Deployment

The site is deployed as a static Hugo site. Configuration in `config.toml`.

### Adding Lab Posts

Create new markdown files in `content/lab/`:

```bash
hugo new lab/your-post-title.md
```

## Configuration

- **Favicon**: Set in `config.toml` under `params.favicon`
- **Contact Email**: Update in `layouts/index.html`
- **Theme**: Uses `hugo-hero-theme` with custom overrides in `layouts/`

## Notes

Files in the `layouts` folder within the root directory override their respective files in `themes/hugo-hero-theme/layouts`.
