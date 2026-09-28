# ExpertsIA

AI and data agency. We help organizations optimize processes, implement agentic workflows, and train teams for the AI era.

Live: [expertsia.dev](https://expertsia.dev)

![ExpertsIA](assets/site-home.png)

## What the agency does

Eight service lines, one common thread: business first, technology second.

- **AI strategy and roadmap**: capability assessment, opportunity mapping, adoption plan with ROI targets
- **Business process optimization**: automated workflows with n8n and custom scripts
- **Agentic workflows**: AI agents and RAG systems that automate complex tasks
- **Data science**: prediction models, clustering, recommendation engines, custom analytics
- **AI training and enablement**: LLM workshops and hands-on team upskilling
- **Change management**: structured adoption support, stakeholder alignment
- **AI audit**: evaluate existing initiatives, find the gaps, fix governance
- **Data infrastructure**: pipelines, warehouses, ETL

Clients range from startups to corporations, across fintech, e-commerce, manufacturing, healthcare and logistics.

## The part we own that matters: the production engine that can be applied to any process

The agency's delivery capacity rests on an internal content and automation engine I built. This is the part most agencies don't have.

```mermaid
graph LR
    B[Brief or trigger] --> S[Script generation]
    S --> V[Voiceover TTS]
    V --> G[Visual generation]
    G --> A[Assembly + captions]
    A --> H[Human QA pass]
    H --> D[Delivery]
```

- **Video content pipeline**: from brief to finished video unattended. 10 videos per day capacity across multiple channels, running daily on local GPU hardware. Marginal cost per video close to zero.
- **Agentic workflows in production**: the engine runs on cron orchestration with checkpoint/resume, GPU locking between jobs, and consolidated run reports. The same patterns I deploy for clients.
- **Local-first generation**: FLUX image generation and TTS on a consumer GPU (4070 Ti), no per-video API spend. Clients get the output; the cost structure stays ours.

The engine is what lets the agency quote 48h delivery against agency timelines measured in weeks.

## Stack

| Layer | Tech |
|---|---|
| Site | Next.js on Vercel |
| Edge | Cloudflare Workers, D1, KV |
| Production | ComfyUI, FLUX, TTS pipeline on local GPU |
| Automation | n8n, cron-driven batch systems |
| Ops | Unattended daily runs, consolidated reporting |

## What I built

- The whole production engine: research-to-delivery video pipeline, running daily, unattended
- The agency site and lead capture on the Cloudflare edge stack
- The agentic workflow patterns we sell, proven on our own operations first. Every automation we deploy for a client ran here before it ran anywhere else.

---

*This is a showcase repo: architecture and results only. The production engine source stays private.*
