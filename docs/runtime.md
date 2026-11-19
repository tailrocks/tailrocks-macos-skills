# Runtime requirements

Install the [complete package](installation.md). The native registrars only
register skill files. Skill procedures control when to call tools or execute a
script. Installation grants no authority for a skill action.

Use Xcode on macOS for native builds and tests. Visual work needs an
interactive graphical session with Screen Recording, Accessibility, and
Automation permissions. Use Bun to run the visual harness installer.

Ship the complete package-root `scripts/` tree. Keep `scripts/macos-visual-qa/`
with its installer, templates, and fixture tools. The installer imports
`scripts/atomic-file-transaction.ts`. The project audit and remediation skills
also read the setup skill's assets.
