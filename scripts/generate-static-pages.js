import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

if (!fs.existsSync(distDir)) {
  console.error('Error: dist directory does not exist. Run "vite build" first.');
  process.exit(1);
}

const baseIndexHtmlPath = path.join(distDir, 'index.html');
if (!fs.existsSync(baseIndexHtmlPath)) {
  console.error('Error: dist/index.html not found.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseIndexHtmlPath, 'utf8');

const routes = [
  {
    slug: 'buy-verified-cashapp-accounts',
    title: 'Buy Verified Cash App Accounts | BTC & Non-BTC All Tiers ($4k-$25k) - CashappAgent',
    description: 'Browse complete catalog of 100% verified Cash App accounts with $4,000, $10,000, and $25,000 limits. Instant auto-delivery, full documentation, SSN DL verified, 30-day warranty.',
    keywords: 'buy verified cash app accounts, cash app accounts for sale, buy cashapp 4k limit, buy cashapp 10k limit, buy cashapp 25k limit, verified aged cash app accounts, buy btc cash app',
    ogTitle: 'Buy Verified Cash App Accounts - Full Catalog ($4k-$25k Limits)',
    ogDescription: 'Instant crypto delivery of fully verified Cash App accounts. SSN/ID verified, clean email access, routing & cash card activated with 30-day replacement warranty.'
  },
  {
    slug: 'buy-btc-enabled-cashapp-accounts',
    title: 'Buy BTC Enabled Cash App Accounts | On-Chain Bitcoin Withdrawal ($4k-$25k) - CashappAgent',
    description: 'Buy fully verified Cash App accounts with Bitcoin (BTC) withdrawal unlocked. Instant crypto purchase, send, receive & withdraw to hardware or external wallets. 100% legal & guaranteed.',
    keywords: 'buy btc enable cash app account, btc withdrawal cash app, bitcoin cash app account buy, buy verified btc cashapp, cash app btc enabled accounts for sale, buy cash app bitcoin limit',
    ogTitle: 'Buy BTC Enabled Cash App Accounts - Instant Withdrawal Unlocked',
    ogDescription: 'Fully verified Cash App accounts with on-chain Bitcoin deposit & withdrawal enabled. 30-day warranty & 24/7 VIP support.'
  },
  {
    slug: 'buy-non-btc-cashapp-accounts',
    title: 'Buy Non-BTC Cash App Accounts | Standard Verified USD ($4k-$15k Limits) - CashappAgent',
    description: 'Buy Non-BTC verified Cash App accounts for standard USD transactions, peer-to-peer transfers, direct deposits, and Cash Card payments. Affordable pricing, instant crypto checkout & warranty.',
    keywords: 'buy non-btc cash app account, verified non-btc cashapp, cheap verified cash app accounts, buy cash app account for direct deposit, cash app 4k non btc, cash app 10k non btc',
    ogTitle: 'Buy Non-BTC Cash App Accounts - High Limits ($4k-$15k USD)',
    ogDescription: 'Verified personal & business Cash App accounts with Sutton Bank routing, virtual cash card, and instant delivery.'
  },
  {
    slug: 'safety-guide',
    title: 'Cash App Account Safety Blueprint | 7-Day Anti-Ban Warmup Protocol - CashappAgent',
    description: 'Crucial security instructions and anti-ban guidelines for newly purchased Cash App accounts. Step-by-step device binding, proxy usage, residential IP rules, and transaction ramp-up guide.',
    keywords: 'cash app safety guide, how to use purchased cash app account, cash app anti-ban guide, cash app account warmup, prevent cash app account ban, cash app login tutorial',
    ogTitle: 'Cash App Account Safety Blueprint & Anti-Ban Warmup Guide',
    ogDescription: 'Master the 7-day warmup protocol to protect your newly purchased Cash App account from flags, limits, or security holds.'
  },
  {
    slug: 'bulk-orders',
    title: 'Bulk & Wholesale Cash App Accounts | Agency Volume Discounts (Up to 30% Off) - CashappAgent',
    description: 'Wholesale pricing on verified Cash App accounts for agencies, high-volume merchants, and digital brokers. Volume tiers from 5 to 50+ accounts with dedicated VIP delivery & priority replacement.',
    keywords: 'bulk verified cash app accounts, wholesale cash app accounts, buy multiple cash app accounts, cash app account agency discount, buy verified cash app accounts in bulk',
    ogTitle: 'Bulk & Wholesale Cash App Accounts - Agency Discounts',
    ogDescription: 'Tiered volume pricing up to 30% off for verified BTC and Non-BTC Cash App account packages.'
  },
  {
    slug: 'blog',
    title: 'Official Blog & Cash App Verification Guides (2026) - CashappAgent',
    description: 'Read the latest guides on Cash App Bitcoin withdrawal verification, account limits ($4k-$25k), security practices, Sutton Bank routing, and crypto payment integrations.',
    keywords: 'cash app guides, cash app blog, bitcoin withdrawal guide cash app, cash app limits increase, verified cash app tutorial, sutton bank cash app routing info',
    ogTitle: 'CashappAgent Official Blog & Educational Guides',
    ogDescription: 'Expert tutorials, regulatory compliance insights, and step-by-step Cash App security guides.'
  },
  {
    slug: 'faq',
    title: 'Frequently Asked Questions & 30-Day Warranty Policy - CashappAgent',
    description: 'Everything you need to know about buying verified Cash App accounts: delivery time, KYC documents included, payment methods, replacement warranty, and security guarantees.',
    keywords: 'cash app accounts faq, cashappagent warranty, is it safe to buy cash app account, cash app verification questions, buy verified cash app crypto payment help',
    ogTitle: 'CashappAgent FAQ & 30-Day Replacement Warranty',
    ogDescription: 'Answers to common questions about verification standards, delivery times, and buyer protection policies.'
  },
  {
    slug: 'contact',
    title: 'Contact CashappAgent Support | 24/7 Telegram & WhatsApp VIP Desk - CashappAgent',
    description: 'Get in touch with CashappAgent customer support. Available 24/7 on Telegram (@CashappAgentTeam), WhatsApp (+1-253-408-0049), and Email for order assistance and instant delivery help.',
    keywords: 'cashappagent contact, cashappagent telegram, cashappagent support desk, buy cash app account customer support, cashappagent email',
    ogTitle: 'Official 24/7 Support Desk | CashappAgent',
    ogDescription: 'Direct access to live agents via Telegram, WhatsApp, and encrypted email for fast order fulfillment.'
  },
  {
    slug: 'sitemap',
    title: 'Website Sitemap & Page Directory - CashappAgent',
    description: 'Complete HTML sitemap directory of all pages, verified Cash App account categories, security guides, FAQs, and articles on CashappAgent.',
    keywords: 'cashappagent sitemap, site directory, cash app accounts pages, sitemap html',
    ogTitle: 'CashappAgent Website Sitemap & Page Directory',
    ogDescription: 'Browse the complete index of verified account tiers, security guides, and support resources.'
  },
  {
    slug: '404',
    title: '404 - Page Not Found | CashappAgent',
    description: 'The requested page could not be found. Explore our verified Cash App accounts catalog with BTC limits up to $25k at CashappAgent.',
    keywords: 'cash app accounts, 404 not found, cashappagent catalog',
    ogTitle: '404 - Page Not Found | CashappAgent',
    ogDescription: 'The requested page could not be found. Return to home or browse our catalog.'
  }
];

const BASE_URL = 'https://cashappagent.com';

for (const route of routes) {
  const targetDir = path.join(distDir, route.slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const pageUrl = `${BASE_URL}/${route.slug}`;

  // Replace SEO metadata in base HTML
  let customizedHtml = baseHtml
    // Title
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${route.title}</title>`)
    // Meta description
    .replace(/<meta\s+name="description"\s+content="[^"]*"/i, `<meta name="description" content="${route.description}"`)
    // Keywords
    .replace(/<meta\s+name="keywords"\s+content="[^"]*"/i, `<meta name="keywords" content="${route.keywords}"`)
    // Canonical link
    .replace(/<link\s+rel="canonical"\s+href="[^"]*"/i, `<link rel="canonical" href="${pageUrl}"`)
    // OpenGraph
    .replace(/<meta\s+property="og:title"\s+content="[^"]*"/i, `<meta property="og:title" content="${route.ogTitle || route.title}"`)
    .replace(/<meta\s+property="og:description"\s+content="[^"]*"/i, `<meta property="og:description" content="${route.ogDescription || route.description}"`)
    .replace(/<meta\s+property="og:url"\s+content="[^"]*"/i, `<meta property="og:url" content="${pageUrl}"`)
    // Twitter Card
    .replace(/<meta\s+name="twitter:title"\s+content="[^"]*"/i, `<meta name="twitter:title" content="${route.ogTitle || route.title}"`)
    .replace(/<meta\s+name="twitter:description"\s+content="[^"]*"/i, `<meta name="twitter:description" content="${route.ogDescription || route.description}"`)
    .replace(/<meta\s+name="twitter:url"\s+content="[^"]*"/i, `<meta name="twitter:url" content="${pageUrl}"`);

  const destFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(destFile, customizedHtml, 'utf8');
  console.log(`Generated SEO static page: ${route.slug}/index.html`);
}

console.log('Static route generation completed successfully for all routes.');
