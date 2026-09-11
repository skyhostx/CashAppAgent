import { PageView } from '../types';

export const SITE_ORIGIN = 'https://cashappagent.com';

export interface PageRouteInfo {
  page: PageView;
  path: string;
  fullUrl: string;
  title: string;
  label: string;
}

export const PAGE_ROUTES: Record<PageView, PageRouteInfo> = {
  home: {
    page: 'home',
    path: '/',
    fullUrl: `${SITE_ORIGIN}/`,
    title: 'Buy Verified Cash App Accounts | BTC & Non-BTC - CashappAgent',
    label: 'Home'
  },
  blog: {
    page: 'blog',
    path: '/blog',
    fullUrl: `${SITE_ORIGIN}/blog`,
    title: 'Official Blog & Guides | CashappAgent',
    label: 'Blog'
  },
  'all-accounts': {
    page: 'all-accounts',
    path: '/buy-verified-cashapp-accounts',
    fullUrl: `${SITE_ORIGIN}/buy-verified-cashapp-accounts`,
    title: 'Buy Verified Cash App Accounts | CashappAgent',
    label: 'All Accounts'
  },
  'btc-accounts': {
    page: 'btc-accounts',
    path: '/buy-btc-enabled-cashapp-accounts',
    fullUrl: `${SITE_ORIGIN}/buy-btc-enabled-cashapp-accounts`,
    title: 'Buy BTC Enabled Cash App Accounts | CashappAgent',
    label: 'BTC Enabled'
  },
  'non-btc-accounts': {
    page: 'non-btc-accounts',
    path: '/buy-non-btc-cashapp-accounts',
    fullUrl: `${SITE_ORIGIN}/buy-non-btc-cashapp-accounts`,
    title: 'Buy Non-BTC Cash App Accounts | CashappAgent',
    label: 'Non-BTC'
  },
  'safety-guide': {
    page: 'safety-guide',
    path: '/safety-guide',
    fullUrl: `${SITE_ORIGIN}/safety-guide`,
    title: '7-Day Anti-Ban Warmup Blueprint | CashappAgent',
    label: 'Safety Guide'
  },
  'bulk-orders': {
    page: 'bulk-orders',
    path: '/bulk-orders',
    fullUrl: `${SITE_ORIGIN}/bulk-orders`,
    title: 'Agency Wholesale & Bulk Bundles | CashappAgent',
    label: 'Bulk Orders'
  },
  faq: {
    page: 'faq',
    path: '/faq',
    fullUrl: `${SITE_ORIGIN}/faq`,
    title: 'Frequently Asked Questions & Warranty | CashappAgent',
    label: 'FAQ'
  },
  contact: {
    page: 'contact',
    path: '/contact',
    fullUrl: `${SITE_ORIGIN}/contact`,
    title: 'Official 24/7 Support Desk | CashappAgent',
    label: 'Contact'
  },
  sitemap: {
    page: 'sitemap',
    path: '/sitemap',
    fullUrl: `${SITE_ORIGIN}/sitemap`,
    title: 'Website Sitemap & Page Index | CashappAgent',
    label: 'Sitemap'
  },
  'not-found': {
    page: 'not-found',
    path: '/404',
    fullUrl: `${SITE_ORIGIN}/404`,
    title: '404 - Page Not Found | CashappAgent',
    label: '404 Not Found'
  }
};

/**
 * Determine page from pathname or hash. If path or hash is not recognized, safely defaults to 'home'.
 */
export function getPageFromLocation(): PageView {
  if (typeof window === 'undefined') return 'home';

  try {
    let rawPath = (window.location.pathname || '/').toLowerCase().replace(/\/$/, '') || '/';
    const rawHash = (window.location.hash || '').toLowerCase().replace(/^#\/?/, '').replace(/\/$/, '');

    // Support SPA redirect query parameters (e.g. /?/some-page)
    if (window.location.search && window.location.search.startsWith('?/')) {
      const queryPath = window.location.search.slice(1).split('&')[0];
      if (queryPath) {
        rawPath = ('/' + queryPath.replace(/^\//, '')).toLowerCase().replace(/\/$/, '');
      }
    }

    // Explicit 404 / not-found checks
    if (rawPath === '/404' || rawPath === '/not-found' || rawHash === '404' || rawHash === 'not-found') {
      return 'not-found';
    }

    // Direct product URL handling (e.g. /product/btc-4k or /buy-btc-enabled-cashapp-accounts#btc-4k)
    if (rawPath.startsWith('/product/') || rawPath.startsWith('/products/')) {
      if (rawPath.includes('btc-') && !rawPath.includes('non-btc-')) return 'btc-accounts';
      if (rawPath.includes('non-btc-')) return 'non-btc-accounts';
      return 'all-accounts';
    }

    // Check pathname routes
    if (rawPath === '/blog' || rawPath.endsWith('/blog')) return 'blog';
    if (rawPath.includes('buy-verified-cashapp-accounts') || rawPath.includes('all-accounts')) return 'all-accounts';
    if (rawPath.includes('buy-btc-enabled-cashapp-accounts') || rawPath.includes('btc-accounts')) return 'btc-accounts';
    if (rawPath.includes('buy-non-btc-cashapp-accounts') || rawPath.includes('non-btc-accounts')) return 'non-btc-accounts';
    if (rawPath.includes('safety-guide') || rawPath.includes('safety')) return 'safety-guide';
    if (rawPath.includes('bulk-orders') || rawPath.includes('bulk')) return 'bulk-orders';
    if (rawPath.includes('faq') || rawPath.includes('help')) return 'faq';
    if (rawPath.includes('contact') || rawPath.includes('support')) return 'contact';
    if (rawPath.includes('sitemap')) return 'sitemap';

    // Direct product slug checks in pathname
    if (rawPath.includes('btc-4k') || rawPath.includes('btc-10k') || rawPath.includes('btc-25k')) return 'btc-accounts';
    if (rawPath.includes('non-btc-4k') || rawPath.includes('non-btc-10k') || rawPath.includes('non-btc-15k')) return 'non-btc-accounts';

    // Check hash routes and direct product anchors
    if (rawHash) {
      if (rawHash === 'blog') return 'blog';
      if (['btc-4k', 'btc-10k', 'btc-25k'].includes(rawHash)) return 'btc-accounts';
      if (['non-btc-4k', 'non-btc-10k', 'non-btc-15k'].includes(rawHash)) return 'non-btc-accounts';
      if (['buy-verified-cashapp-accounts', 'all-accounts', 'accounts', 'catalog'].includes(rawHash)) return 'all-accounts';
      if (['buy-btc-enabled-cashapp-accounts', 'btc-accounts', 'btc-enabled', 'btc'].includes(rawHash)) return 'btc-accounts';
      if (['buy-non-btc-cashapp-accounts', 'non-btc-accounts', 'non-btc'].includes(rawHash)) return 'non-btc-accounts';
      if (['safety-guide', 'safety'].includes(rawHash)) return 'safety-guide';
      if (['bulk-orders', 'bulk'].includes(rawHash)) return 'bulk-orders';
      if (['faq', 'help'].includes(rawHash)) return 'faq';
      if (['contact', 'support'].includes(rawHash)) return 'contact';
      if (['sitemap', 'sitemap.html', 'sitemap_index', 'sitemap_index.html'].includes(rawHash)) return 'sitemap';
      if (['404', 'not-found'].includes(rawHash)) return 'not-found';
    }

    // Root paths return home
    if (rawPath === '/' || rawPath === '' || rawPath === '/index.html') {
      return 'home';
    }

    // Any other unrecognized path returns 404 not-found
    return 'not-found';
  } catch {
    return 'home';
  }
}

/**
 * Update browser URL with pushState and title
 */
export function setBrowserPage(page: PageView) {
  if (typeof window === 'undefined') return;

  const route = PAGE_ROUTES[page] || PAGE_ROUTES.home;
  document.title = route.title;

  try {
    // Keep clean URL pathname if supported
    const newUrl = route.path;
    if (window.location.pathname !== newUrl) {
      window.history.pushState({ page }, route.title, newUrl);
    }
  } catch {
    // Fallback to hash if sandboxed iframe restricts pushState
    try {
      window.location.hash = page === 'home' ? '' : route.path.replace(/^\//, '');
    } catch {
      // ignore
    }
  }
}

/**
 * Detects if a mouse click event has modifier keys held down (Ctrl, Cmd, Shift, Alt, or middle-click).
 * When true, the default browser action (such as opening in a new tab or window) should NOT be prevented.
 */
export function isModifiedClick(event?: React.MouseEvent | MouseEvent): boolean {
  if (!event) return false;
  return Boolean(
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    (event.button !== undefined && event.button !== 0)
  );
}

/**
 * Returns the canonical URL for any product matching Google XML sitemap
 */
export function getProductUrl(product: string | { id: string; btcEnabled?: boolean; category?: string }): string {
  const id = typeof product === 'string' ? product : product.id;
  const isBtc = typeof product === 'string'
    ? id.startsWith('btc-')
    : ('btcEnabled' in product ? Boolean(product.btcEnabled) : product.category === 'btc-enabled');

  return isBtc
    ? `/buy-btc-enabled-cashapp-accounts#${id}`
    : `/buy-non-btc-cashapp-accounts#${id}`;
}

