// show customised outline when an element has focus (but only if the user is
// using the keyboard)
// TODO: move this to a global css rule
export const FOCUS_VISIBLE_OUTLINE = `focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70`;

export const LINK_STYLES = `text-emerald-100/90 underline decoration-emerald-200/30 underline-offset-2 transition-all hover:text-emerald-100 hover:decoration-emerald-200/50`;

export const LINK_SUBTLE_STYLES = `hover:underline hover:decoration-emerald-300/30 hover:underline-offset-2 hover:text-emerald-200/90`;

export const HEADING_LINK_ANCHOR = `before:content-['#'] before:absolute before:-ml-[1em] before:text-emerald-100/0 hover:before:text-emerald-100/50 pl-[1em] -ml-[1em]`;
