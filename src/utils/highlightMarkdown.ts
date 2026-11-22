/**
 * Turns one line of Markdown into syntax-highlighted HTML (editor-style, not a renderer).
 * Supports: # headings, > quotes, - / 1. lists, --- rules, **bold**, `code`, [links](url).
 */
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function inline(s: string) {
  return s
    .replace(/`([^`]+)`/g, '<span class="text-code-string">`$1`</span>')
    .replace(
      /\*\*([^*]+)\*\*/g,
      '<span class="text-code-comment">**</span><span class="font-medium text-fg">$1</span><span class="text-code-comment">**</span>',
    )
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<span class="text-accent">[$1]</span><span class="text-code-comment">($2)</span>',
    );
}

export function highlightLine(raw: string): string {
  const line = esc(raw);
  let m: RegExpMatchArray | null;

  if ((m = line.match(/^(#{1,6})\s+(.*)$/))) {
    return `<span class="text-code-key">${m[1]}</span> <span class="font-medium text-accent">${inline(m[2])}</span>`;
  }
  if (/^---+$/.test(line)) return `<span class="text-code-comment">${line}</span>`;
  if ((m = line.match(/^&gt;\s?(.*)$/))) {
    return `<span class="text-code-comment">&gt; ${inline(m[1])}</span>`;
  }
  if ((m = line.match(/^(\s*)([-*]|\d+\.)\s+(.*)$/))) {
    return `${m[1]}<span class="text-accent">${m[2]}</span> ${inline(m[3])}`;
  }
  return inline(line);
}
