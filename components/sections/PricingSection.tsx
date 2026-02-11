import { Check, X, Sparkles, Zap, Crown } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="relative space-y-12">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-10">
        <div className="pointer-events-none absolute -right-20 -top-24 h-48 w-48 rounded-full bg-amber-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-amber-400/10 blur-2xl" />
        
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-amber-200 mb-6">
            <Sparkles className="h-3 w-3" />
            Simple pricing
          </div>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl mb-4">
            Plans that grow with you
          </h2>
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
            Start free, upgrade when you&apos;re ready. All plans include everything you need to succeed.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Starter Card */}
        <div className="relative group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition duration-300 hover:border-sky-400/40 hover:bg-sky-400/5">
          <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-sky-400/10 blur-3xl group-hover:blur-2xl transition duration-300" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-lg bg-sky-400/10 border border-sky-400/30 px-3 py-1 text-xs font-semibold text-sky-200 mb-4">
              <Zap className="h-3 w-3" />
              Starter
            </div>
            <div className="mt-4">
              <div className="text-4xl font-bold text-white">Free</div>
              <p className="text-zinc-400 text-sm mt-2">Perfect to get started</p>
            </div>
            
            <button className="w-full mt-6 rounded-full bg-sky-500/20 border border-sky-400/40 py-3 text-sm font-semibold text-sky-200 transition hover:bg-sky-500/30 hover:border-sky-400/60">
              Get started
            </button>

            <div className="mt-8 space-y-3 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <Check className="h-4 w-4 text-sky-300 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-zinc-200">1 portfolio</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-4 w-4 text-sky-300 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-zinc-200">5 projects</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-4 w-4 text-sky-300 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-zinc-200">Basic support</span>
              </div>
              <div className="flex items-center gap-3 opacity-40">
                <X className="h-4 w-4 text-zinc-500 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-zinc-400">Custom domain</span>
              </div>
              <div className="flex items-center gap-3 opacity-40">
                <X className="h-4 w-4 text-zinc-500 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-zinc-400">Analytics</span>
              </div>
              <div className="flex items-center gap-3 opacity-40">
                <X className="h-4 w-4 text-zinc-500 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-zinc-400">Priority support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Card (Highlighted) */}
        <div className="relative group overflow-hidden rounded-[28px] border border-amber-400/50 bg-gradient-to-br from-amber-400/10 to-amber-400/5 p-8 backdrop-blur-2xl shadow-[0_0_30px_rgba(251,191,36,0.15)] lg:scale-105 transition duration-300 hover:shadow-[0_0_40px_rgba(251,191,36,0.25)]">
          <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-amber-400/20 blur-3xl group-hover:blur-2xl transition duration-300" />
          <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-r from-amber-400 to-amber-300 text-xs font-bold text-amber-950 rounded-bl-xl">
            Most Popular
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-lg bg-amber-400/20 border border-amber-400/50 px-3 py-1 text-xs font-semibold text-amber-200 mb-4">
              <Crown className="h-3 w-3" />
              Pro
            </div>
            <div className="mt-4">
              <div className="text-4xl font-bold text-white">$12<span className="text-sm text-zinc-400 font-normal">/mo</span></div>
              <p className="text-zinc-300 text-sm mt-2">For serious creators</p>
            </div>
            
            <button className="w-full mt-6 rounded-full bg-amber-400 py-3 text-sm font-semibold text-amber-950 transition hover:bg-amber-300 shadow-[0_8px_20px_rgba(251,191,36,0.3)]">
              Upgrade to Pro
            </button>

            <div className="mt-8 space-y-3 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <Check className="h-4 w-4 text-amber-300 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-zinc-100">Unlimited portfolios</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-4 w-4 text-amber-300 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-zinc-100">Unlimited projects</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-4 w-4 text-amber-300 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-zinc-100">Custom domain</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-4 w-4 text-amber-300 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-zinc-100">Full analytics</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-4 w-4 text-amber-300 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-zinc-100">Priority support</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-4 w-4 text-amber-300 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-zinc-100">API access</span>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Card */}
        <div className="relative group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/5">
          <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl group-hover:blur-2xl transition duration-300" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-400/10 border border-emerald-400/30 px-3 py-1 text-xs font-semibold text-emerald-200 mb-4">
              <Crown className="h-3 w-3" />
              Studio
            </div>
            <div className="mt-4">
              <div className="text-4xl font-bold text-white">$39<span className="text-sm text-zinc-400 font-normal">/mo</span></div>
              <p className="text-zinc-400 text-sm mt-2">For teams & agencies</p>
            </div>
            
            <button className="w-full mt-6 rounded-full bg-emerald-500/20 border border-emerald-400/40 py-3 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/30 hover:border-emerald-400/60">
              Contact sales
            </button>

            <div className="mt-8 space-y-3 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <Check className="h-4 w-4 text-emerald-300 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-zinc-200">Team members (5+)</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-4 w-4 text-emerald-300 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-zinc-200">Everything in Pro</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-4 w-4 text-emerald-300 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-zinc-200">Advanced analytics</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-4 w-4 text-emerald-300 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-zinc-200">Custom integrations</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-4 w-4 text-emerald-300 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-zinc-200">Dedicated account</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-4 w-4 text-emerald-300 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-zinc-200">SLA support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-10">
        <div className="pointer-events-none absolute -right-20 -top-24 h-48 w-48 rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-emerald-400/10 blur-2xl" />
        
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-2">What&apos;s included in every plan</h3>
          <p className="text-zinc-400 text-sm mb-8">All plans come with the essentials to launch and grow your portfolio</p>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "✨", title: "Auto-optimization", desc: "SEO & performance" },
              { icon: "🚀", title: "Global CDN", desc: "Fast worldwide" },
              { icon: "🔒", title: "SSL & Security", desc: "Enterprise grade" },
              { icon: "📱", title: "Mobile ready", desc: "100% responsive" },
              { icon: "📊", title: "Basic analytics", desc: "Visitor insights" },
              { icon: "⚡", title: "99.9% uptime", desc: "Battle-tested" },
              { icon: "💬", title: "Email support", desc: "Always here" },
              { icon: "🔄", title: "Free updates", desc: "Forever included" },
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-white/30 hover:bg-white/10">
                <div className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-white/5 blur-2xl group-hover:bg-white/10 transition" />
                <div className="relative">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-sm text-white">{item.title}</h4>
                  <p className="text-xs text-zinc-400 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-10">
        <div className="pointer-events-none absolute -right-20 -top-24 h-48 w-48 rounded-full bg-sky-400/15 blur-3xl" />
        
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-8">Frequently asked questions</h3>
          
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                q: "Can I change plans anytime?",
                a: "Yes! Upgrade, downgrade, or cancel anytime. No contracts or hidden fees."
              },
              {
                q: "Is there a free trial?",
                a: "Absolutely! Start free with Starter and upgrade whenever you're ready."
              },
              {
                q: "Do you offer refunds?",
                a: "Yes, 30-day money-back guarantee. If you're not happy, we'll refund it."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and Apple Pay."
              },
              {
                q: "Do you provide email support?",
                a: "All plans include email support. Pro & Studio get 24/7 priority support."
              },
              {
                q: "Can I export my portfolio?",
                a: "Yes! Your data is always yours. Export anytime without any restrictions."
              }
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl">
                <h4 className="font-semibold text-white mb-2">{item.q}</h4>
                <p className="text-sm text-zinc-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

