// WebMCP discovery: machine-readable list of agent-completable actions.
// Included on the dedicated money pages (app/fr/*, app/en/*) whose layout does
// not render an explicit <head>, unlike the [locale] tree which carries the
// same link in app/[locale]/layout.tsx. React 19 hoists <link> into the
// served <head>, so this stays inert visually and additive in markup.
export default function McpActionsLink() {
  return <link rel='mcp-actions' href='/mcp-actions.json' />;
}
