# tailrocks-macos-skills

One portable package with fifteen skills. The skills design native
macOS interfaces, scaffold and audit Swift projects, integrate a
Rust application core, and verify rendering through capture and
comparison. Two skills are model-selectable. Thirteen skills are
user-only and need an explicit human command.

## Skills

| Skill | Task |
| --- | --- |
| [`tailrocks-macos-design`](skills/tailrocks-macos-design/SKILL.md) | Design a native screen and prototype it. |
| [`tailrocks-macos-design-review`](skills/tailrocks-macos-design-review/SKILL.md) | Score a rendered screen. User-only. |
| [`tailrocks-macos-design-systematize`](skills/tailrocks-macos-design-systematize/SKILL.md) | Record approved learning. User-only. |
| [`tailrocks-macos-visual-baseline`](skills/tailrocks-macos-visual-baseline/SKILL.md) | Freeze a visual baseline. User-only. |
| [`tailrocks-macos-visual-qa`](skills/tailrocks-macos-visual-qa/SKILL.md) | Verify the current render. User-only. |
| [`tailrocks-macos-visual-regression`](skills/tailrocks-macos-visual-regression/SKILL.md) | Compare captures. User-only. |
| [`tailrocks-swift-agent-integration`](skills/tailrocks-swift-agent-integration/SKILL.md) | Wire Xcode for agent work. User-only. |
| [`tailrocks-swift-best-practices`](skills/tailrocks-swift-best-practices/SKILL.md) | Write Swift and SwiftUI code. |
| [`tailrocks-swift-project-audit`](skills/tailrocks-swift-project-audit/SKILL.md) | Audit a project baseline. User-only. |
| [`tailrocks-swift-project-remediate`](skills/tailrocks-swift-project-remediate/SKILL.md) | Close baseline gaps. User-only. |
| [`tailrocks-swift-project-setup`](skills/tailrocks-swift-project-setup/SKILL.md) | Start a project baseline. User-only. |
| [`tailrocks-swift-refactor`](skills/tailrocks-swift-refactor/SKILL.md) | Restructure Swift code. User-only. |
| [`tailrocks-swift-review`](skills/tailrocks-swift-review/SKILL.md) | Review Swift code. User-only. |
| [`tailrocks-swift-rust-core-boundary`](skills/tailrocks-swift-rust-core-boundary/SKILL.md) | Plan Swift/Rust boundary. User-only. |
| [`tailrocks-swift-rust-core-setup`](skills/tailrocks-swift-rust-core-setup/SKILL.md) | Wire the Rust core lane. User-only. |

Each skill body lives in its own directory. Read
`skills/tailrocks-swift-review/SKILL.md` for one complete example.

## Install

Install one complete package in your host's chosen scope. The [Tailrocks
catalog](https://github.com/tailrocks/tailrocks-skills) selects the source commit.
Use the route for your host.

| Host | Native install route |
| --- | --- |
| Claude Code | [Marketplace plugin](docs/installation.md#claude-code) |
| Codex | [Marketplace plugin](docs/installation.md#codex) |
| Grok Build | [Marketplace plugin](docs/installation.md#grok-build) |
| Muse Code | [Marketplace snapshot](docs/installation.md#muse-code) |
| omp | [Marketplace plugin](docs/installation.md#omp) |
| OpenCode V2 | [Git package](docs/installation.md#opencode) |
| Amp | [Directory plugin](docs/installation.md#amp) |
| Antigravity | [Local plugin installer](docs/installation.md#antigravity) |
| pi | [Git package](docs/installation.md#pi) |
| Kimi Code | [Marketplace manager](docs/installation.md#kimi-code) |

Run these commands to install from the Claude Code marketplace.

```sh
claude plugin marketplace add tailrocks/tailrocks-skills
claude plugin install tailrocks-macos-skills@tailrocks --scope user
```

See [runtime requirements](docs/runtime.md) for tools and files the skills use.

## Use

Select the owner for the requested work. To review Swift sources
on Claude Code (session):

```text
/tailrocks-macos-skills:tailrocks-swift-review Sources/
```

The skill returns verified findings with file and line evidence,
the failure mechanism, and a narrow correction. The skill is
read-only. See `docs/usage.md` for every owner, more examples,
and the family boundaries.

## Documentation

- [Package guide](docs/README.md)
- [Installation](docs/installation.md)
- [Usage](docs/usage.md)
- [Runtime requirements](docs/runtime.md)
- [Model settings](docs/models.md)
- [Compatibility and verification](docs/compatibility.md)
- [Maintenance](docs/maintenance.md)

## Update and remove

Use [the host's update and removal steps](docs/installation.md).
For a pinned Git package, install the new catalog revision and use one copy in
the chosen scope.

## Contribute

Open an issue or a pull request on GitHub. Write all new and changed
prose in ASD-STE100 Simplified Technical English, Issue 9 rules. Run
`alint check`, the strict-JSON check, and the frontmatter check
before the pull request. See `docs/maintenance.md` for the
list. Never add evaluation content.

## License

Apache License, Version 2.0. See `LICENSE`.
