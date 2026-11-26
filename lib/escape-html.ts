/**
 * Escape user-controlled text before it is interpolated into an HTML email
 * (or any HTML context). Single quotes are escaped too because some templates
 * use single-quoted attributes.
 *
 * Same function as the one in app/api/contact/route.ts; shared here so the
 * newsletter and atelier routes do not each keep a copy.
 */
export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
