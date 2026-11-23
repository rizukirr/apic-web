---
sidebar_label: "AI agents"
sidebar_position: 6
---
# Using apic with AI agents

apic ships an [Agent Skills](https://agentskills.io) `SKILL.md` that teaches AI coding agents to find, preview, send and check contracts safely. The skill tells the agent to preview requests with `apic send --dry-run`, which shows variables as `$name`, and never to read `.apic/env/*.local.toml`, so your secrets stay out of the agent's context.

It also covers bringing contracts in and out: importing an OpenAPI spec or a Postman collection with `apic convert`, and exporting with `apic export`. The agent is told which variables an import leaves for you to fill, that exported OpenAPI schemas are inferred from the examples, and to pass `--force` only when you asked to replace a file.

## Install

```bash
apic skill --install            # this project
apic skill --install --global   # every project, for your user
```

The skill is built into the binary, so it always matches your apic version. Re-run the install after an upgrade to update it. A file that differs is overwritten, so hand edits to an installed `SKILL.md` are lost.

You can also install it with `npx skills add rizukirr/apic`, or print it with `apic skill` and save it wherever your agent looks.

## Where it goes

| Agent | Project folder | With `--global` |
|---|---|---|
| Claude Code | `.claude/skills/apic/` | `~/.claude/skills/apic/` |
| Codex | `.agents/skills/apic/` | `~/.agents/skills/apic/` |
| Antigravity | `.agents/skills/apic/` | `~/.gemini/config/skills/apic/` |
| Cursor | `.agents/skills/apic/` and `.claude/skills/apic/` | use the project install |
| pi | `.agents/skills/apic/` | `~/.agents/skills/apic/` |
| Hermes | none | `~/.hermes/skills/apic/` |

## Reference docs for agents

The skill keeps itself short and points agents at `apic docs command`, `apic docs sending` and `apic docs contract`. These print the full reference built into the binary, so an agent without web access still gets docs that match the installed version.
