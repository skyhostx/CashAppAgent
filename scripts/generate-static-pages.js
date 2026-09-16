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
    ogDescription: 'Instant crypto delivery of fully verified Cash App accounts. SSN/ID verified, clean email access, routing & cash card activated with 30-day replacement warranty.',
    h1: 'Buy Verified <span style="color: #00D632;">Cash App Accounts</span>',
    subheading: 'Complete catalog of identity-verified Cash App accounts with active Sutton Bank routing numbers, virtual cash cards, and limits up to $25,000/week.',
    mainHtml: `
      <section style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.8rem; font-weight: 800; color: #ffffff; margin-bottom: 1rem;">Complete Verified Account Catalog (2026 Inventory)</h2>
        <p style="color: #94a3b8; line-height: 1.7; margin-bottom: 2rem;">Every verified Cash App account in our stock includes primary email login access, full SSN & government ID KYC documentation, active routing and account numbers, and our ironclad 30-day replacement warranty.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          <div style="background: #111822; border: 1px solid #1e293b; padding: 1.5rem; border-radius: 16px;">
            <span style="background: #00D632; color: #000; font-size: 0.75rem; font-weight: 900; padding: 0.2rem 0.6rem; border-radius: 9999px;">POPULAR</span>
            <h3 style="font-size: 1.3rem; color: #fff; margin: 0.8rem 0 0.4rem 0;">4K Non-BTC Verified Account</h3>
            <p style="color: #94a3b8; font-size: 0.9rem; margin-bottom: 1rem;">$4,000 weekly transaction limit. Ideal for personal transfers and online shopping.</p>
            <div style="font-size: 1.5rem; font-weight: 900; color: #00D632; margin-bottom: 1rem;">$120.00</div>
            <a href="/buy-non-btc-cashapp-accounts#non-btc-4k" style="display: inline-block; background: #00D632; color: #000; padding: 0.6rem 1.2rem; border-radius: 10px; font-weight: bold; text-decoration: none;">View Specifications</a>
          </div>
          <div style="background: #111822; border: 1px solid #F7931A; padding: 1.5rem; border-radius: 16px;">
            <span style="background: #F7931A; color: #000; font-size: 0.75rem; font-weight: 900; padding: 0.2rem 0.6rem; border-radius: 9999px;">HOT &bull; BITCOIN UNLOCKED</span>
            <h3 style="font-size: 1.3rem; color: #fff; margin: 0.8rem 0 0.4rem 0;">4K BTC-Enabled Verified Account</h3>
            <p style="color: #94a3b8; font-size: 0.9rem; margin-bottom: 1rem;">$4,000 limit with on-chain Bitcoin deposit & withdrawal unlocked immediately.</p>
            <div style="font-size: 1.5rem; font-weight: 900; color: #F7931A; margin-bottom: 1rem;">$180.00</div>
            <a href="/buy-btc-enabled-cashapp-accounts#btc-4k" style="display: inline-block; background: #F7931A; color: #000; padding: 0.6rem 1.2rem; border-radius: 10px; font-weight: bold; text-decoration: none;">View Specifications</a>
          </div>
          <div style="background: #111822; border: 1px solid #1e293b; padding: 1.5rem; border-radius: 16px;">
            <span style="background: #3b82f6; color: #fff; font-size: 0.75rem; font-weight: 900; padding: 0.2rem 0.6rem; border-radius: 9999px;">HIGH LIMIT</span>
            <h3 style="font-size: 1.3rem; color: #fff; margin: 0.8rem 0 0.4rem 0;">10K BTC-Enabled Verified Account</h3>
            <p style="color: #94a3b8; font-size: 0.9rem; margin-bottom: 1rem;">$10,000 limit for high-volume crypto traders and e-commerce merchants.</p>
            <div style="font-size: 1.5rem; font-weight: 900; color: #00D632; margin-bottom: 1rem;">$320.00</div>
            <a href="/buy-btc-enabled-cashapp-accounts#btc-10k" style="display: inline-block; background: #00D632; color: #000; padding: 0.6rem 1.2rem; border-radius: 10px; font-weight: bold; text-decoration: none;">View Specifications</a>
          </div>
        </div>
      </section>
    `
  },
  {
    slug: 'buy-btc-enabled-cashapp-accounts',
    title: 'Buy BTC Enabled Cash App Accounts | On-Chain Bitcoin Withdrawal ($4k-$25k) - CashappAgent',
    description: 'Buy fully verified Cash App accounts with Bitcoin (BTC) withdrawal unlocked. Instant crypto purchase, send, receive & withdraw to hardware or external wallets. 100% legal & guaranteed.',
    keywords: 'buy btc enable cash app account, btc withdrawal cash app, bitcoin cash app account buy, buy verified btc cashapp, cash app btc enabled accounts for sale, buy cash app bitcoin limit',
    ogTitle: 'Buy BTC Enabled Cash App Accounts - Instant Withdrawal Unlocked',
    ogDescription: 'Fully verified Cash App accounts with on-chain Bitcoin deposit & withdrawal enabled. 30-day warranty & 24/7 VIP support.',
    h1: 'Buy BTC Enabled <span style="color: #F7931A;">Cash App Accounts</span>',
    subheading: 'Bypass long verification queues. Instant on-chain Bitcoin external withdrawal pre-approved with limits from $4,000 to $25,000 per week.',
    mainHtml: `
      <section style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.8rem; font-weight: 800; color: #ffffff; margin-bottom: 1rem;">Bitcoin (BTC) Withdrawal Features & Guarantee</h2>
        <ul style="color: #cbd5e1; line-height: 1.8; margin-bottom: 2rem; padding-left: 1.5rem;">
          <li><strong>Instant External Blockchain Transfers:</strong> Withdraw BTC straight to Ledger, Trezor, or external wallets with 0 holding delay.</li>
          <li><strong>Tiered Limits:</strong> Choose between $4,000, $10,000, and $25,000 weekly Bitcoin volume allowances.</li>
          <li><strong>Clean Origin:</strong> Aged accounts created with clean residential IP nodes and genuine US identity verification scans.</li>
          <li><strong>Full Handover:</strong> Includes original Outlook/Gmail email access, phone login assistance, and pin codes.</li>
        </ul>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <a href="/buy-verified-cashapp-accounts" style="background: #F7931A; color: #000; padding: 0.8rem 1.6rem; border-radius: 12px; font-weight: 800; text-decoration: none;">Browse BTC Inventory</a>
          <a href="/safety-guide" style="background: #1e293b; color: #e2e8f0; padding: 0.8rem 1.6rem; border-radius: 12px; font-weight: 700; text-decoration: none;">View Safety Protocol</a>
        </div>
      </section>
    `
  },
  {
    slug: 'buy-non-btc-cashapp-accounts',
    title: 'Buy Non-BTC Cash App Accounts | Standard Verified USD ($4k-$15k Limits) - CashappAgent',
    description: 'Buy Non-BTC verified Cash App accounts for standard USD transactions, peer-to-peer transfers, direct deposits, and Cash Card payments. Affordable pricing, instant crypto checkout & warranty.',
    keywords: 'buy non-btc cash app account, verified non-btc cashapp, cheap verified cash app accounts, buy cash app account for direct deposit, cash app 4k non btc, cash app 10k non btc',
    ogTitle: 'Buy Non-BTC Cash App Accounts - High Limits ($4k-$15k USD)',
    ogDescription: 'Verified personal & business Cash App accounts with Sutton Bank routing, virtual cash card, and instant delivery.',
    h1: 'Buy Non-BTC <span style="color: #00D632;">Cash App Accounts</span>',
    subheading: 'Cost-effective, fully verified USD personal & merchant accounts for direct deposits, P2P payments, and Cash Card transactions.',
    mainHtml: `
      <section style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.8rem; font-weight: 800; color: #ffffff; margin-bottom: 1rem;">Affordable Non-BTC USD Accounts</h2>
        <p style="color: #94a3b8; line-height: 1.7; margin-bottom: 2rem;">If you do not require Bitcoin withdrawal features, our Non-BTC accounts offer the highest reliability for daily fiat transfers, business invoices, and direct deposits at substantial savings.</p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <a href="/buy-verified-cashapp-accounts" style="background: #00D632; color: #000; padding: 0.8rem 1.6rem; border-radius: 12px; font-weight: 800; text-decoration: none;">View Non-BTC Accounts</a>
          <a href="/faq" style="background: #1e293b; color: #e2e8f0; padding: 0.8rem 1.6rem; border-radius: 12px; font-weight: 700; text-decoration: none;">Read FAQs</a>
        </div>
      </section>
    `
  },
  {
    slug: 'safety-guide',
    title: 'Cash App Account Safety Blueprint | 7-Day Anti-Ban Warmup Protocol - CashappAgent',
    description: 'Crucial security instructions and anti-ban guidelines for newly purchased Cash App accounts. Step-by-step device binding, proxy usage, residential IP rules, and transaction ramp-up guide.',
    keywords: 'cash app safety guide, how to use purchased cash app account, cash app anti-ban guide, cash app account warmup, prevent cash app account ban, cash app login tutorial',
    ogTitle: 'Cash App Account Safety Blueprint & Anti-Ban Warmup Guide',
    ogDescription: 'Master the 7-day warmup protocol to protect your newly purchased Cash App account from flags, limits, or security holds.',
    h1: 'Cash App Account <span style="color: #00D632;">Safety Blueprint</span>',
    subheading: 'The mandatory 7-Day Anti-Ban Warmup Protocol. Follow these strict device binding and IP guidelines to ensure lifelong account security.',
    mainHtml: `
      <section style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.8rem; font-weight: 800; color: #ffffff; margin-bottom: 1rem;">The 7-Day Account Warmup Protocol</h2>
        <div style="space-y: 1.5rem; color: #cbd5e1; line-height: 1.8;">
          <p><strong>Day 1 &bull; Clean Login & Device Binding:</strong> Use a clean US residential proxy matching the state of the account profile. Log in via email OTP. Do not immediately send high-dollar amounts.</p>
          <p><strong>Day 2 &bull; Profile Stabilization:</strong> Keep the application running in the background. Link a small debit card or perform a micro-transaction ($5–$15) to register user telemetry.</p>
          <p><strong>Day 3 &bull; Gradual Inbound Volume:</strong> Receive a moderate transfer ($50–$150) from an established account. Let the funds rest for at least 12 hours.</p>
          <p><strong>Day 4–7 &bull; Full Scale Ramp-Up:</strong> Gradually increase daily volume up to the account’s rating ($4,000–$25,000/week) following our safety checklist.</p>
        </div>
      </section>
    `
  },
  {
    slug: 'bulk-orders',
    title: 'Bulk & Wholesale Cash App Accounts | Agency Volume Discounts (Up to 30% Off) - CashappAgent',
    description: 'Wholesale pricing on verified Cash App accounts for agencies, high-volume merchants, and digital brokers. Volume tiers from 5 to 50+ accounts with dedicated VIP delivery & priority replacement.',
    keywords: 'bulk verified cash app accounts, wholesale cash app accounts, buy multiple cash app accounts, cash app account agency discount, buy verified cash app accounts in bulk',
    ogTitle: 'Bulk & Wholesale Cash App Accounts - Agency Discounts',
    ogDescription: 'Tiered volume pricing up to 30% off for verified BTC and Non-BTC Cash App account packages.',
    h1: 'Wholesale & Agency <span style="color: #00D632;">Bulk Accounts</span>',
    subheading: 'High-volume tier pricing for businesses, affiliates, and digital agencies. Save up to 30% on multi-account packages with dedicated VIP priority support.',
    mainHtml: `
      <section style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.8rem; font-weight: 800; color: #ffffff; margin-bottom: 1rem;">Wholesale Volume Bundles</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
          <div style="background: #111822; padding: 1.5rem; border-radius: 16px; border: 1px solid #1e293b;">
            <h3 style="font-size: 1.3rem; color: #fff;">Starter Agency (5 Accounts)</h3>
            <p style="color: #00D632; font-weight: bold; margin: 0.5rem 0;">15% OFF Wholesale Rate</p>
            <p style="color: #94a3b8; font-size: 0.9rem;">Batch delivery in CSV format with primary email credentials and full documentation.</p>
          </div>
          <div style="background: #111822; padding: 1.5rem; border-radius: 16px; border: 1px solid #00D632;">
            <h3 style="font-size: 1.3rem; color: #fff;">Enterprise Scale (25 Accounts)</h3>
            <p style="color: #00D632; font-weight: bold; margin: 0.5rem 0;">25% OFF Wholesale Rate</p>
            <p style="color: #94a3b8; font-size: 0.9rem;">Dedicated Telegram account manager, priority warranty replacements, and custom proxies.</p>
          </div>
        </div>
        <a href="/contact" style="display: inline-block; background: #00D632; color: #000; padding: 0.8rem 1.6rem; border-radius: 12px; font-weight: 800; text-decoration: none;">Contact Wholesale Desk</a>
      </section>
    `
  },
  {
    slug: 'blog',
    title: 'Official Blog & Cash App Verification Guides (2026) - CashappAgent',
    description: 'Read the latest guides on Cash App Bitcoin withdrawal verification, account limits ($4k-$25k), security practices, Sutton Bank routing, and crypto payment integrations.',
    keywords: 'cash app guides, cash app blog, bitcoin withdrawal guide cash app, cash app limits increase, verified cash app tutorial, sutton bank cash app routing info',
    ogTitle: 'CashappAgent Official Blog & Educational Guides',
    ogDescription: 'Expert tutorials, regulatory compliance insights, and step-by-step Cash App security guides.',
    h1: 'Official Blog & <span style="color: #00D632;">Verification Guides</span>',
    subheading: 'Technical tutorials, compliance insights, and step-by-step security walkthroughs from verified fintech professionals.',
    mainHtml: `
      <section style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.8rem; font-weight: 800; color: #ffffff; margin-bottom: 1.5rem;">Featured Articles</h2>
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <article style="background: #111822; padding: 1.5rem; border-radius: 16px; border: 1px solid #1e293b;">
            <h3 style="font-size: 1.3rem; color: #fff; margin-bottom: 0.5rem;"><a href="/blog" style="color: #00D632; text-decoration: none;">How to Unlock Cash App Bitcoin (BTC) External Withdrawal in 2026</a></h3>
            <p style="color: #94a3b8; line-height: 1.6;">Detailed walkthrough of the FinCEN verification process, ID scanning requirements, and why pre-verified accounts eliminate 2–3 week wait periods.</p>
          </article>
          <article style="background: #111822; padding: 1.5rem; border-radius: 16px; border: 1px solid #1e293b;">
            <h3 style="font-size: 1.3rem; color: #fff; margin-bottom: 0.5rem;"><a href="/blog" style="color: #00D632; text-decoration: none;">Cash App Limits Explained: Upgrading from $250 to $25,000/Week</a></h3>
            <p style="color: #94a3b8; line-height: 1.6;">An in-depth guide on Cash App account tiers, Sutton Bank direct deposit routing, and how limits scale with identity verification.</p>
          </article>
        </div>
      </section>
    `
  },
  {
    slug: 'faq',
    title: 'Frequently Asked Questions & 30-Day Warranty Policy - CashappAgent',
    description: 'Everything you need to know about buying verified Cash App accounts: delivery time, KYC documents included, payment methods, replacement warranty, and security guarantees.',
    keywords: 'cash app accounts faq, cashappagent warranty, is it safe to buy cash app account, cash app verification questions, buy verified cash app crypto payment help',
    ogTitle: 'CashappAgent FAQ & 30-Day Replacement Warranty',
    ogDescription: 'Answers to common questions about verification standards, delivery times, and buyer protection policies.',
    h1: 'Frequently Asked <span style="color: #00D632;">Questions & Warranty</span>',
    subheading: 'Clear, transparent answers about delivery speed, included KYC documentation, crypto payment gateways, and our 30-day replacement warranty.',
    mainHtml: `
      <section style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.8rem; font-weight: 800; color: #ffffff; margin-bottom: 1.5rem;">Common Questions</h2>
        <div style="space-y: 1.5rem; color: #cbd5e1; line-height: 1.8;">
          <div style="background: #111822; padding: 1.5rem; border-radius: 16px; border: 1px solid #1e293b; margin-bottom: 1rem;">
            <h3 style="color: #00D632; font-size: 1.1rem; margin-bottom: 0.5rem;">How fast will I receive my account credentials?</h3>
            <p style="color: #94a3b8;">Delivery is automated and takes between 5 to 15 minutes once your crypto or Skrill payment confirms on the blockchain.</p>
          </div>
          <div style="background: #111822; padding: 1.5rem; border-radius: 16px; border: 1px solid #1e293b; margin-bottom: 1rem;">
            <h3 style="color: #00D632; font-size: 1.1rem; margin-bottom: 0.5rem;">What documents are provided with each order?</h3>
            <p style="color: #94a3b8;">You receive full access to the primary email account, the registered SSN details, driver license scan, virtual Cash Card details (CVV, Expiration), and Sutton Bank routing & account numbers.</p>
          </div>
          <div style="background: #111822; padding: 1.5rem; border-radius: 16px; border: 1px solid #1e293b; margin-bottom: 1rem;">
            <h3 style="color: #00D632; font-size: 1.1rem; margin-bottom: 0.5rem;">What is covered under the 30-day replacement warranty?</h3>
            <p style="color: #94a3b8;">If any account experiences an unexpected restriction or verification challenge within 30 days while following our warmup blueprint, our VIP support team replaces it free of charge.</p>
          </div>
        </div>
      </section>
    `
  },
  {
    slug: 'contact',
    title: 'Contact CashappAgent Support | 24/7 Telegram & WhatsApp VIP Desk - CashappAgent',
    description: 'Get in touch with CashappAgent customer support. Available 24/7 on Telegram (@CashappAgentTeam), WhatsApp (+1-253-408-0049), and Email for order assistance and instant delivery help.',
    keywords: 'cashappagent contact, cashappagent telegram, cashappagent support desk, buy cash app account customer support, cashappagent email',
    ogTitle: 'Official 24/7 Support Desk | CashappAgent',
    ogDescription: 'Direct access to live agents via Telegram, WhatsApp, and encrypted email for fast order fulfillment.',
    h1: 'Official 24/7 <span style="color: #00D632;">Support Desk</span>',
    subheading: 'We are online around the clock. Contact our verified team via Telegram, WhatsApp, or email for instant order fulfillment and inquiries.',
    mainHtml: `
      <section style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.8rem; font-weight: 800; color: #ffffff; margin-bottom: 1.5rem;">Direct Official Channels</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem;">
          <div style="background: #111822; padding: 1.5rem; border-radius: 16px; border: 1px solid #0088cc;">
            <h3 style="font-size: 1.2rem; color: #0088cc; margin-bottom: 0.5rem;">Telegram VIP Desk</h3>
            <p style="color: #cbd5e1; margin-bottom: 1rem;">Instant live agent chat (under 2-minute reply time).</p>
            <a href="https://t.me/CashappAgentTeam" target="_blank" rel="noopener noreferrer" style="color: #00D632; font-weight: bold; text-decoration: none;">@CashappAgentTeam &rarr;</a>
          </div>
          <div style="background: #111822; padding: 1.5rem; border-radius: 16px; border: 1px solid #25D366;">
            <h3 style="font-size: 1.2rem; color: #25D366; margin-bottom: 0.5rem;">WhatsApp Direct</h3>
            <p style="color: #cbd5e1; margin-bottom: 1rem;">Direct customer support and order status lookup.</p>
            <a href="https://wa.me/12534080049" target="_blank" rel="noopener noreferrer" style="color: #00D632; font-weight: bold; text-decoration: none;">+1 (253) 408-0049 &rarr;</a>
          </div>
          <div style="background: #111822; padding: 1.5rem; border-radius: 16px; border: 1px solid #1e293b;">
            <h3 style="font-size: 1.2rem; color: #fff; margin-bottom: 0.5rem;">Encrypted Email</h3>
            <p style="color: #cbd5e1; margin-bottom: 1rem;">Wholesale invoices, custom requests, and escrow inquiries.</p>
            <a href="mailto:support@cashappagent.com" style="color: #00D632; font-weight: bold; text-decoration: none;">support@cashappagent.com &rarr;</a>
          </div>
        </div>
      </section>
    `
  },
  {
    slug: 'sitemap',
    title: 'Website Sitemap & Page Directory - CashappAgent',
    description: 'Complete HTML sitemap directory of all pages, verified Cash App account categories, security guides, FAQs, and articles on CashappAgent.',
    keywords: 'cashappagent sitemap, site directory, cash app accounts pages, sitemap html',
    ogTitle: 'CashappAgent Website Sitemap & Page Directory',
    ogDescription: 'Browse the complete index of verified account tiers, security guides, and support resources.',
    h1: 'CashappAgent <span style="color: #00D632;">Sitemap & Directory</span>',
    subheading: 'Complete index of all public web pages, product categories, security guides, FAQs, and articles.',
    mainHtml: `
      <section style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.8rem; font-weight: 800; color: #ffffff; margin-bottom: 1.5rem;">All Pages & Categories</h2>
        <ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; list-style: none; padding: 0;">
          <li><a href="/" style="color: #00D632; text-decoration: none; font-weight: bold;">Home (Buy Verified Accounts)</a></li>
          <li><a href="/buy-verified-cashapp-accounts" style="color: #00D632; text-decoration: none; font-weight: bold;">All Verified Accounts Catalog</a></li>
          <li><a href="/buy-btc-enabled-cashapp-accounts" style="color: #00D632; text-decoration: none; font-weight: bold;">BTC Enabled Cash App Accounts</a></li>
          <li><a href="/buy-non-btc-cashapp-accounts" style="color: #00D632; text-decoration: none; font-weight: bold;">Non-BTC USD Accounts</a></li>
          <li><a href="/safety-guide" style="color: #00D632; text-decoration: none; font-weight: bold;">7-Day Safety Warmup Blueprint</a></li>
          <li><a href="/bulk-orders" style="color: #00D632; text-decoration: none; font-weight: bold;">Bulk & Wholesale Discounts</a></li>
          <li><a href="/blog" style="color: #00D632; text-decoration: none; font-weight: bold;">Blog & Verification Guides</a></li>
          <li><a href="/faq" style="color: #00D632; text-decoration: none; font-weight: bold;">FAQ & 30-Day Warranty</a></li>
          <li><a href="/contact" style="color: #00D632; text-decoration: none; font-weight: bold;">Contact 24/7 VIP Support</a></li>
          <li><a href="/sitemap.xml" style="color: #94a3b8; text-decoration: none;">XML Sitemap (Googlebot)</a></li>
          <li><a href="/robots.txt" style="color: #94a3b8; text-decoration: none;">robots.txt (Crawl Rules)</a></li>
        </ul>
      </section>
    `
  },
  {
    slug: '404',
    title: '404 - Page Not Found | CashappAgent',
    description: 'The requested page could not be found. Explore our verified Cash App accounts catalog with BTC limits up to $25k at CashappAgent.',
    keywords: 'cash app accounts, 404 not found, cashappagent catalog',
    ogTitle: '404 - Page Not Found | CashappAgent',
    ogDescription: 'The requested page could not be found. Return to home or browse our catalog.',
    h1: '404 &bull; <span style="color: #00D632;">Page Not Found</span>',
    subheading: 'The page you requested could not be located. Browse our active verified Cash App catalog below.',
    mainHtml: `
      <section style="text-align: center; margin-bottom: 3rem;">
        <p style="color: #94a3b8; margin-bottom: 2rem;">The link may be outdated or mistyped. Use the links below to navigate our verified inventory.</p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="/" style="background: #00D632; color: #000; padding: 0.8rem 1.6rem; border-radius: 12px; font-weight: 800; text-decoration: none;">Return to Home</a>
          <a href="/buy-verified-cashapp-accounts" style="background: #1e293b; color: #00D632; padding: 0.8rem 1.6rem; border-radius: 12px; font-weight: 700; text-decoration: none; border: 1px solid #334155;">View All Accounts</a>
        </div>
      </section>
    `
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

  // Replace <main> content inside pre-rendered fallback
  if (route.h1 && route.mainHtml) {
    const pageMainContent = `
      <main style="max-width: 1200px; margin: 0 auto; padding: 2rem 1rem;">
        <section style="text-align: center; margin-bottom: 3rem;">
          <h1 style="font-size: 2.5rem; font-weight: 900; color: #ffffff; margin-bottom: 1rem;">
            ${route.h1}
          </h1>
          <p style="font-size: 1.1rem; color: #94a3b8; max-width: 750px; margin: 0 auto 1.5rem auto; line-height: 1.6;">
            ${route.subheading}
          </p>
        </section>
        ${route.mainHtml}
      </main>
    `;

    customizedHtml = customizedHtml.replace(/<main[\s\S]*?<\/main>/i, pageMainContent.trim());
  }

  const destFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(destFile, customizedHtml, 'utf8');

  // Also write [slug].html directly to dist root for non-trailing slash 200 OK resolution
  const destHtmlFile = path.join(distDir, `${route.slug}.html`);
  fs.writeFileSync(destHtmlFile, customizedHtml, 'utf8');

  console.log(`Generated SEO static page: ${route.slug}/index.html & ${route.slug}.html`);
}

// Copy critical SEO files to root if they don't exist
const filesToSyncToRoot = ['CNAME', 'robots.txt', 'sitemap.xml', 'sitemap_index.xml', '.nojekyll'];
for (const file of filesToSyncToRoot) {
  const publicPath = path.join('public', file);
  const rootPath = path.resolve(file);
  const distPath = path.join(distDir, file);
  if (fs.existsSync(publicPath)) {
    fs.copyFileSync(publicPath, rootPath);
    fs.copyFileSync(publicPath, distPath);
  }
}

console.log('Static route generation completed successfully for all routes.');
