// Native Amp directory plugin for tailrocks-macos-skills.
const skillEntries = [
  {
    "id": "tailrocks-macos-design",
    "explicitOnly": false
  },
  {
    "id": "tailrocks-macos-design-review",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-macos-design-systematize",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-macos-visual-baseline",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-macos-visual-qa",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-macos-visual-regression",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-swift-agent-integration",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-swift-best-practices",
    "explicitOnly": false
  },
  {
    "id": "tailrocks-swift-project-audit",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-swift-project-remediate",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-swift-project-setup",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-swift-refactor",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-swift-review",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-swift-rust-core-boundary",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-swift-rust-core-setup",
    "explicitOnly": true
  }
]

export default async function (amp) {
  for (const { id, explicitOnly } of skillEntries) {
    await amp.registerSkill({ path: `skills/${id}`, listed: !explicitOnly })
  }
}
