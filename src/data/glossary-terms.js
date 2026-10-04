// Page-level revision date for the shared glossary data and template.
// It is not a reconstructed publication date or a factual-review claim.
export const glossaryPageUpdatedAt = '2026-09-21';

export const glossaryTerms = [
  // ─── Trading Psychology (6) ───
  {
    slug: 'fomo',
    title: 'FOMO (Fear of Missing Out)',
    shortDefinition: 'The anxiety-driven urge to enter a trade because the market is moving without you, often leading to impulsive entries outside your trading plan.',
    category: 'Trading Psychology',
    relatedTerms: ['revenge-trading', 'overtrading', 'confirmation-bias'],
    proplogConnection: 'PropLogAI tracks your emotion tags on every trade. When you log FOMO trades, the AI coach spots the pattern and shows you how those trades perform compared to planned entries.',
    fullContent: `
      <h3>What is FOMO in Trading?</h3>
      <p>FOMO — Fear of Missing Out — is the emotional impulse to jump into a trade because the market is moving and you feel like you're being left behind. It's one of the most common psychological traps in trading, especially for prop firm traders under pressure to hit profit targets.</p>
      <p>A typical FOMO scenario: you see EUR/USD spike 80 pips in 30 minutes. You weren't watching earlier, you had no setup, but the candle keeps going. You enter long "just to catch the move." The market reverses 20 minutes later and you're stopped out — or worse, you hold without a stop hoping it'll come back.</p>
      <h3>Why FOMO is Dangerous for Prop Firm Traders</h3>
      <p>Prop firm challenges have strict drawdown limits. A single FOMO trade that goes wrong can eat 30-50% of your allowed daily drawdown. The real cost isn't just the loss — it's the psychological spiral that follows: frustration, revenge trading, and further losses.</p>
      <ul>
        <li><strong>No edge:</strong> FOMO entries bypass your tested setups, meaning you're trading with no statistical advantage</li>
        <li><strong>Poor risk management:</strong> Rushed entries often have wider stops or no stops at all</li>
        <li><strong>Emotional compounding:</strong> Win or lose, FOMO reinforces impulsive decision-making</li>
      </ul>
      <h3>How to Manage FOMO</h3>
      <p>The most effective antidote to FOMO is a trading journal that makes the pattern visible. When you can see that your FOMO trades have a 28% win rate versus 62% for planned setups, the emotional pull loses its power. Other strategies include: setting alerts instead of watching charts, having a written rule that requires a setup before entry, and accepting that missing a move is not a loss — it's discipline.</p>
    `
  },
  {
    slug: 'revenge-trading',
    title: 'Revenge Trading',
    shortDefinition: 'A post-loss pattern where recovering the lost money becomes the purpose of the next decision and the trader changes or ignores part of the written plan.',
    category: 'Trading Psychology',
    updatedAt: '2026-10-04',
    relatedTerms: ['tilt', 'fomo', 'overtrading'],
    sourceIds: ['RES-001', 'RES-009', 'RES-010', 'PLAI-001', 'PLAI-002', 'PLAI-005'],
    sources: [
      { id: 'RES-001', label: 'Kahneman and Tversky — Prospect Theory (1979)', url: 'https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Behavioral_Decision_Theory/Kahneman_Tversky_1979_Prospect_theory.pdf', checkedOn: '2026-09-19' },
      { id: 'RES-009', label: 'Zerodha Varsity — Controlling your trading emotions', url: 'https://zerodha.com/varsity/chapter/controlling-your-trading-emotions/', checkedOn: '2026-09-25' },
      { id: 'RES-010', label: 'OANDA — Understanding emotions in trading', url: 'https://www.oanda.com/us-en/skills-and-insights/education/trading-psychology/emotions-in-trading/trading-psychology-understanding-your-emotions/', checkedOn: '2026-09-25' },
      { id: 'PLAI-001', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    visual: 'revenge-trading-full-check',
    guide: { href: '/blogs/revenge-trading-prop-firm', label: 'Review a practical revenge-trading interruption workflow' },
    proplogConnection: 'PropLogAI lets you manually record trade details, emotions, rule adherence, notes, and screenshots. It can help you review patterns in your own journal data, but it does not detect revenge trading in real time, block orders, or guarantee that the behaviour stops.',
    fullContent: `
      <h3>What is Revenge Trading?</h3>
      <p>Revenge trading is a decision pattern that can appear after a loss. The main goal of the next trade changes from following a valid setup to recovering the money that was just lost.</p>
      <p>Another trade after a loss is not automatically revenge trading. Check whether the setup, confirmation, session, sizing method, or reason changed because of the previous result.</p>
      <h3>Simple XAUUSD Example</h3>
      <p>You take a planned XAUUSD trade during the London session after an Asian-range liquidity sweep and a confirmed breakout. The trade follows your rules and ends at <strong>−$50</strong>.</p>
      <p>Three minutes later, price reverses. You want to enter before a fresh breakout candle closes and use a bigger size to recover the <strong>$50</strong>. The possible revenge pattern is not the second trade itself. It is the change in confirmation, size, and reason.</p>
      <h3>What Should You Check?</h3>
      <ol>
        <li><strong>Setup:</strong> Is there a completely new setup that meets the same written conditions?</li>
        <li><strong>Confirmation:</strong> Did the required candle close or checklist finish?</li>
        <li><strong>Session:</strong> Are you still inside the time window written in your plan?</li>
        <li><strong>Size:</strong> Are you using the same documented sizing method?</li>
        <li><strong>Reason:</strong> Would you take this exact trade if the previous result were <strong>$0</strong>?</li>
      </ol>
      <p>If the new decision passes the same checks, the fact that it follows a loss does not prove revenge trading. If the main reason is “make it back” and the normal conditions have changed, record that change before making another decision.</p>
      <h3>Revenge Trading, Tilt, and Overtrading</h3>
      <p><a href="/glossary/tilt">Tilt</a> is a broader state where frustration or pressure may affect decisions. <a href="/glossary/overtrading">Overtrading</a> is a drift from the planned trading process, such as repeated entries or trading outside the planned session. Revenge trading is the more specific pattern centred on recovering a previous loss.</p>
      <h3>What Happens Next?</h3>
      <p>There is no universal waiting time or number of losses that fits every trader. Use the loss-response rule written before the session and the current official rules for your exact prop-firm program and account stage.</p>
      <p>A short record can include the first result, the urge you noticed, what changed in the next idea, whether you applied your written rule, and the final decision. Review several similar records before calling it a repeated pattern.</p>
    `
  },
  {
    slug: 'tilt',
    title: 'Tilt',
    shortDefinition: 'A state of emotional frustration where a trader abandons rational decision-making, often triggered by a string of losses or a single large loss.',
    category: 'Trading Psychology',
    relatedTerms: ['revenge-trading', 'loss-aversion', 'overtrading'],
    guide: { href: '/blogs/revenge-trading-prop-firm', label: 'Compare tilt with a revenge-trading decision after a loss' },
    proplogConnection: 'PropLogAI tracks your emotional state across trades. When you log frustration or anger, the AI coach identifies which situations trigger tilt and suggests specific countermeasures based on your history.',
    fullContent: `
      <h3>What is Tilt?</h3>
      <p>Borrowed from poker, "tilt" describes a mental state where emotional frustration overrides logical thinking. A tilted trader makes decisions based on anger, fear, or desperation rather than their tested strategy. The term captures the feeling of your mental equilibrium tipping over.</p>
      <p>Tilt can be triggered by losses, but also by missed opportunities, technical issues (platform freezing, internet dropping during a trade), or external stress. The key characteristic is that the trader <em>knows</em> they're not thinking clearly but feels unable to stop.</p>
      <h3>Signs You're on Tilt</h3>
      <ul>
        <li><strong>Physical symptoms:</strong> Elevated heart rate, shallow breathing, tension in jaw or shoulders</li>
        <li><strong>Behavioral signs:</strong> Taking trades without checking your setup criteria, increasing lot sizes, trading outside your session</li>
        <li><strong>Thought patterns:</strong> "I need to make this back," "The market owes me," "Just one more trade"</li>
      </ul>
      <h3>Managing Tilt</h3>
      <p>Prevention is more effective than cure. Experienced prop firm traders build tilt-prevention rules into their trading plan: maximum daily loss limits (separate from the prop firm's), maximum consecutive loss rules, and mandatory break times. When tilt does occur, the best action is to close all charts and walk away. No amount of analysis will fix an emotional state — only time and distance from the screen.</p>
    `
  },
  {
    slug: 'confirmation-bias',
    title: 'Confirmation Bias',
    shortDefinition: 'The tendency to seek out information that supports your existing trade idea while ignoring evidence that contradicts it.',
    category: 'Trading Psychology',
    relatedTerms: ['overconfidence', 'trading-plan', 'setup-compliance'],
    proplogConnection: 'PropLogAI helps you fight confirmation bias by objectively analyzing whether your trade entries matched your documented setups — the AI compares what you planned versus what you actually did.',
    fullContent: `
      <h3>What is Confirmation Bias?</h3>
      <p>Confirmation bias is a cognitive shortcut where your brain selectively processes information that confirms what you already believe, while filtering out contradictory data. In trading, this means once you've decided you want to go long on a pair, you unconsciously seek bullish signals and dismiss bearish ones.</p>
      <p>For example, a trader decides GBP/USD is going up. They see a bullish engulfing candle (confirmation!), a support level nearby (more confirmation!), and ignore the bearish divergence on RSI, the resistance overhead, and the fact that they're trading against the higher-timeframe trend.</p>
      <h3>How Confirmation Bias Hurts Prop Firm Traders</h3>
      <p>Prop firm challenges require consistent, edge-based trading. Confirmation bias erodes your edge because you're no longer objectively evaluating setups — you're building a case for a decision you've already made emotionally. This leads to:</p>
      <ul>
        <li>Taking trades that only partially meet your setup criteria</li>
        <li>Holding losing trades longer because you keep finding reasons it "should" work</li>
        <li>Over-trading your conviction trades with larger position sizes</li>
      </ul>
      <h3>Countering Confirmation Bias</h3>
      <p>The best defense is a structured pre-trade checklist. Before every entry, actively look for reasons NOT to take the trade. Write down at least one bearish factor for every long setup (and vice versa). If you can't find a counter-argument, you're probably not looking hard enough.</p>
    `
  },
  {
    slug: 'loss-aversion',
    title: 'Loss Aversion',
    shortDefinition: 'The tendency for a loss to affect a decision more strongly than an equivalent gain in many situations.',
    category: 'Trading Psychology',
    updatedAt: '2026-10-02',
    relatedTerms: ['tilt', 'risk-per-trade', 'stop-loss'],
    sourceIds: ['RES-001', 'PLAI-001', 'PLAI-005'],
    sources: [
      { id: 'RES-001', label: 'Kahneman and Tversky — Prospect Theory (1979)', url: 'https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Behavioral_Decision_Theory/Kahneman_Tversky_1979_Prospect_theory.pdf', checkedOn: '2026-09-19' },
      { id: 'PLAI-001', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-19' },
    ],
    proplogConnection: 'PropLogAI can use your own journal entries to help you review patterns. Emotion tags and rule-adherence notes let you compare planned decisions with what you recorded after a gain or loss.',
    fullContent: `
      <h3>What is Loss Aversion?</h3>
      <p>Loss aversion is a concept from prospect theory. It describes how a loss can influence a choice more strongly than an equivalent gain. The strength of the effect varies by person and situation, so this definition does not use a fixed multiplier.</p>
      <p>In a trading journal, possible signs include closing a planned winner early to protect a gain or changing an exit after a loss becomes uncomfortable. Those actions can also have other causes, so a single trade does not prove a bias.</p>
      <h3>What to Review</h3>
      <ul>
        <li><strong>Planned versus actual exit:</strong> Record whether the exit followed the written rule.</li>
        <li><strong>Reason for the change:</strong> Note new market information separately from discomfort about realizing a loss.</li>
        <li><strong>Repeated pattern:</strong> Compare many similar trades before drawing a conclusion.</li>
      </ul>
      <h3>How to Use the Concept</h3>
      <p>Treat loss aversion as a review question, not a diagnosis. A written exit rule and a journal comparison can show whether decisions changed after gains or losses. The record can identify a pattern, but it cannot guarantee why the pattern occurred or what a trader should do next.</p>
    `
  },
  {
    slug: 'overconfidence',
    title: 'Overconfidence',
    shortDefinition: 'An inflated belief in your trading ability, often following a winning streak, leading to increased risk-taking and abandonment of risk rules.',
    category: 'Trading Psychology',
    relatedTerms: ['confirmation-bias', 'position-sizing', 'risk-per-trade'],
    proplogConnection: 'PropLogAI analyzes your performance after winning streaks and compares it to your baseline. The AI coach warns you when your risk-taking behavior escalates during hot streaks.',
    fullContent: `
      <h3>What is Overconfidence in Trading?</h3>
      <p>Overconfidence is the cognitive bias where traders overestimate their skill and underestimate the role of randomness in their results. After a streak of winning trades, the brain attributes success to ability rather than favorable market conditions, leading to riskier behavior.</p>
      <p>A trader who hits 8 winners in a row starts to feel invincible. They increase their lot size, skip their checklist, trade outside their best sessions, and take setups they'd normally pass on. When the inevitable losing streak arrives, they're now trading with 2x or 3x their normal risk.</p>
      <h3>Why Winning Streaks are Dangerous</h3>
      <ul>
        <li><strong>Position size creep:</strong> Gradually increasing lot sizes because "I'm on a roll"</li>
        <li><strong>Rule relaxation:</strong> Skipping your pre-trade checklist or trading outside your session window</li>
        <li><strong>Revenge sensitivity:</strong> When the streak ends, overconfident traders often spiral into revenge trading because the loss feels like a personal failure</li>
      </ul>
      <h3>Staying Grounded</h3>
      <p>Professional prop firm traders treat every trade as independent — the last 8 wins have zero predictive power over trade number 9. Keep your position sizing formula-based and mechanical. When you notice yourself thinking "I don't need to check my setup criteria this time," that's the exact moment you need to check them most carefully.</p>
    `
  },

  // ─── Risk Management (6) ───
  {
    slug: 'drawdown',
    title: 'Drawdown',
    aliases: ['Trading drawdown', 'Account drawdown'],
    updatedAt: '2026-10-01',
    visual: 'drawdown-performance-rule-note',
    shortDefinition: 'Drawdown is the amount an account falls from an earlier high to a later value. A prop firm drawdown limit is a separate rule that sets an official account floor.',
    category: 'Risk Management',
    relatedTerms: ['daily-drawdown-limit', 'overall-drawdown-limit', 'equity-curve'],
    guide: { href: '/blogs/daily-drawdown-calculator', label: 'See how to check a daily drawdown buffer' },
    sourceIds: ['PFR-002', 'PFR-003', 'PFR-005', 'PFR-006', 'PFR-008', 'PLAI-003'],
    sources: [
      { id: 'PFR-002', label: 'FTMO trading objectives', url: 'https://ftmo.com/en/trading-objectives/', checkedOn: '2026-09-25' },
      { id: 'PFR-003', label: 'FTMO 2-Step maximum loss', url: 'https://ftmo.com/en/trading-objectives/', checkedOn: '2026-09-25' },
      { id: 'PFR-005', label: 'FTMO 1-Step loss objectives', url: 'https://ftmo.com/en/trading-objectives/', checkedOn: '2026-09-25' },
      { id: 'PFR-006', label: 'FundedNext maximum daily loss', url: 'https://help.fundednext.com/en/articles/8019914-what-is-the-maximum-daily-loss-limit', checkedOn: '2026-09-25' },
      { id: 'PFR-008', label: 'FundedNext maximum loss calculation', url: 'https://help.fundednext.com/en/articles/8019812-how-can-i-calculate-the-maximum-loss-limit', checkedOn: '2026-09-25' },
      { id: 'PLAI-003', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    proplogConnection: 'PropLogAI displays an equity curve and performance metrics from the trades you log. Use those records to review account declines; use the firm’s current dashboard and rules for official breach calculations.',
    fullContent: `
      <h3>What does drawdown mean?</h3>
      <p>Drawdown tells you how far your account fell from an earlier high. It can be shown in dollars or as a percentage of that high.</p>
      <p>Imagine your account reaches <strong>$108,000</strong>. After a fictional XAUUSD New York-session result, the account value is <strong>$104,000</strong>. The decline is $4,000:</p>
      <p><strong>$108,000 − $104,000 = $4,000</strong></p>
      <p><strong>$4,000 ÷ $108,000 × 100 ≈ 3.7%</strong></p>
      <p>The 3.7% describes what happened between those two account values. It is not a suggested risk percentage or a prop-firm limit.</p>

      <h3>Are you checking balance or equity?</h3>
      <ul>
        <li><strong>Balance drawdown:</strong> uses results from trades that have already closed.</li>
        <li><strong>Equity drawdown:</strong> can change while a trade is still open because open profit or loss affects equity.</li>
      </ul>
      <p>If you have an open XAUUSD trade, your balance may look unchanged while your equity is moving. Write down which value you used before comparing two figures.</p>

      <h3>Does being in drawdown mean you breached a prop-firm rule?</h3>
      <p><strong>No, not automatically.</strong> Performance drawdown describes an account decline. A <a href="/glossary/daily-drawdown-limit">daily drawdown limit</a> or <a href="/glossary/overall-drawdown-limit">overall drawdown limit</a> is a written program rule that sets an official floor.</p>
      <p>The firm decides whether the rule uses balance, equity, open profit and loss, costs, a daily reset, or a moving floor. Different programs can use different methods. Your firm's current dashboard and rules decide whether the account is breached.</p>

      <h3>What should you check?</h3>
      <ol>
        <li>What was the earlier account high?</li>
        <li>What is the later account value?</li>
        <li>Are you measuring balance or equity?</li>
        <li>What period are you reviewing?</li>
        <li>Are you studying performance drawdown or checking an official firm limit?</li>
      </ol>
      <p>If you are checking a firm rule, copy the official floor first. Then use the <a href="/blogs/daily-drawdown-calculator">daily drawdown calculator guide</a> to compare that floor with the account value named in the rule. Use the <a href="/blogs/prop-firm-risk-management">prop firm risk management guide</a> when you need the wider process around position size, stop loss, and daily controls.</p>
    `
  },
  {
    slug: 'position-sizing',
    title: 'Position Sizing',
    shortDefinition: 'Determining how many lots or contracts to trade based on your account size, risk tolerance, and distance to your stop loss.',
    category: 'Risk Management',
    relatedTerms: ['risk-per-trade', 'stop-loss', 'drawdown'],
    proplogConnection: 'PropLogAI logs your lot sizes on every trade and the AI coach identifies when your sizing deviates from your stated risk rules, helping you maintain consistent risk management.',
    fullContent: `
      <h3>What is Position Sizing?</h3>
      <p>Position sizing is the process of calculating how large your trade should be based on how much you're willing to lose if the trade hits your stop loss. It's arguably the single most important skill in risk management — more important than your entry strategy or win rate.</p>
      <p>The formula is straightforward: <strong>Lot Size = (Account Risk $) / (Stop Loss Distance in pips × Pip Value)</strong>. If you have a $100,000 account, risk 1% ($1,000), and your stop loss is 50 pips on EUR/USD (pip value $10/pip for a standard lot), your position size is $1,000 / (50 × $10) = 0.20 standard lots.</p>
      <h3>Why Fixed Lot Sizing is Risky</h3>
      <ul>
        <li>Trading 1 lot on every trade means your risk varies wildly depending on stop loss distance</li>
        <li>A 20-pip stop risks $200, while a 100-pip stop risks $1,000 — same lot size, 5x the risk</li>
        <li>Prop firm traders who use fixed lots often blow their drawdown limits on wide-stop trades</li>
      </ul>
      <h3>Best Practice for Prop Firms</h3>
      <p>Calculate position size for every trade based on your stop loss distance. Never risk more than 1-2% of your account per trade. When your account grows from profits, your position sizes grow proportionally — and when you're in drawdown, they shrink automatically, protecting your remaining capital.</p>
    `
  },
  {
    slug: 'risk-reward-ratio',
    title: 'Risk-Reward Ratio',
    shortDefinition: 'The comparison between how much you stand to lose (risk) versus how much you stand to gain (reward) on a trade, expressed as a ratio like 1:2 or 1:3.',
    category: 'Risk Management',
    relatedTerms: ['stop-loss', 'expectancy', 'win-rate'],
    proplogConnection: 'PropLogAI automatically calculates your risk-reward ratio from your entry, exit, and stop loss prices. The AI coach shows your actual achieved R:R versus your planned R:R.',
    fullContent: `
      <h3>What is Risk-Reward Ratio?</h3>
      <p>Risk-reward ratio (R:R) compares the potential loss of a trade to its potential profit. A 1:2 R:R means you're risking $1 to make $2. If your stop loss is 30 pips and your take profit is 60 pips, that's a 1:2 risk-reward ratio.</p>
      <p>R:R is critical because it determines what win rate you need to be profitable. With 1:1 R:R, you need to win more than 50% of trades. With 1:3 R:R, you only need to win 25% to break even. Higher R:R ratios give you a larger margin for error.</p>
      <h3>R:R and Win Rate Together</h3>
      <ul>
        <li><strong>1:1 R:R</strong> — Need >50% win rate to profit (breakeven at 50%)</li>
        <li><strong>1:2 R:R</strong> — Need >33% win rate to profit (breakeven at 33%)</li>
        <li><strong>1:3 R:R</strong> — Need >25% win rate to profit (breakeven at 25%)</li>
      </ul>
      <h3>The Trap of Chasing High R:R</h3>
      <p>A common mistake is pursuing very high R:R (1:5+) at the expense of win rate. If your target is so far away that you rarely hit it, a theoretical 1:5 R:R with a 10% win rate is actually a losing strategy. The sweet spot for most day traders is 1:1.5 to 1:3, with a win rate above 40%.</p>
    `
  },
  {
    slug: 'stop-loss',
    title: 'Stop Loss',
    shortDefinition: 'A predetermined price level at which you exit a losing trade to limit your downside, placed before or immediately after entering the trade.',
    category: 'Risk Management',
    relatedTerms: ['risk-reward-ratio', 'position-sizing', 'daily-drawdown-limit'],
    proplogConnection: 'PropLogAI records your stop loss levels and tracks whether you honored them. The AI coach identifies if you have a habit of moving stops or trading without them.',
    fullContent: `
      <h3>What is a Stop Loss?</h3>
      <p>A stop loss is a protective order that automatically closes your position when price reaches a predetermined level, capping your loss on the trade. It's your primary defense against catastrophic losses and the foundation of every risk management system.</p>
      <p>For prop firm traders, stop losses aren't optional — they're survival tools. Without them, a single trade can breach your daily drawdown limit or even your overall drawdown, ending your challenge immediately.</p>
      <h3>Types of Stop Losses</h3>
      <ul>
        <li><strong>Fixed pip stop:</strong> A set number of pips from entry (e.g., always 30 pips) — simple but doesn't account for market structure</li>
        <li><strong>Technical stop:</strong> Placed beyond a key level (support/resistance, swing high/low) — adapts to market conditions</li>
        <li><strong>ATR-based stop:</strong> Uses Average True Range to set stops relative to current volatility</li>
        <li><strong>Time stop:</strong> Exit after a set period if the trade hasn't moved in your favor</li>
      </ul>
      <h3>Common Stop Loss Mistakes</h3>
      <p>The biggest mistake is moving your stop loss further away when price approaches it. This turns a small, planned loss into an unplanned large loss. The second mistake is placing stops too tight — getting stopped out repeatedly on normal price fluctuations, then watching the market move in your original direction.</p>
    `
  },
  {
    slug: 'risk-per-trade',
    title: 'Risk Per Trade',
    shortDefinition: 'The maximum planned loss for one trade, stated as money, account percentage, or risk units if the stop is reached.',
    category: 'Risk Management',
    updatedAt: '2026-09-20',
    relatedTerms: ['position-sizing', 'stop-loss', 'daily-drawdown-limit'],
    sourceIds: ['PFR-002', 'PFR-006', 'PLAI-002'],
    sources: [
      { id: 'PFR-002', label: 'FTMO trading objectives', url: 'https://ftmo.com/en/trading-objectives/', checkedOn: '2026-09-19' },
      { id: 'PFR-006', label: 'FundedNext maximum daily loss', url: 'https://help.fundednext.com/en/articles/8019914-what-is-the-maximum-daily-loss-limit', checkedOn: '2026-09-19' },
      { id: 'PLAI-002', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-19' },
    ],
    proplogConnection: 'PropLogAI lets you manually record trade details, notes, emotions, and rule adherence. That record can be used to compare planned loss with the result you logged.',
    fullContent: `
      <h3>What is Risk Per Trade?</h3>
      <p>Risk per trade is the loss planned before entry if the stop is filled at the expected price. It can be recorded as a currency amount, a percentage of the account reference value, or one risk unit (1R). It is an input to position sizing, not a universal percentage.</p>
      <h3>Basic Calculation</h3>
      <p><strong>Planned risk amount = account reference value × chosen risk percentage.</strong> Position size then depends on that amount, the stop distance, instrument value, and expected costs. Slippage or gaps can make the realized loss different from the planned loss.</p>
      <h3>Why the Firm Rule Matters</h3>
      <ul>
        <li><strong>Reference value:</strong> Confirm whether the relevant rule uses initial balance, daily balance, or equity.</li>
        <li><strong>Open P&amp;L:</strong> Some daily-loss calculations include unrealized losses, swaps, and commissions.</li>
        <li><strong>Combined exposure:</strong> Several open trades can consume the same loss allowance at once.</li>
      </ul>
      <h3>No Universal Setting</h3>
      <p>A suitable limit depends on the exact firm program, strategy distribution, open positions, costs, and the trader's written plan. The FTMO and FundedNext examples in the sources show why the governing daily-loss calculation must be checked before doing the arithmetic.</p>
    `
  },

  // ─── Performance Metrics (6) ───
  {
    slug: 'win-rate',
    title: 'Win Rate',
    shortDefinition: 'The percentage of your trades that close in profit, calculated as winning trades divided by total trades.',
    category: 'Performance Metrics',
    updatedAt: '2026-09-20',
    relatedTerms: ['risk-reward-ratio', 'profit-factor', 'expectancy'],
    sourceIds: ['PLAI-003'],
    sources: [
      { id: 'PLAI-003', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-19' },
    ],
    proplogConnection: 'PropLogAI displays win rate from logged trade data. Review it with average win, average loss, trade count, and costs rather than treating it as a complete performance score.',
    fullContent: `
      <h3>What is Win Rate?</h3>
      <p>Win rate is the simplest performance metric: the number of winning trades divided by the total number of trades, expressed as a percentage. If you took 100 trades and 58 were profitable, your win rate is 58%.</p>
      <p><strong>Win rate = winning trades ÷ total closed trades × 100.</strong> Define how breakeven trades, partial exits, fees, and multi-leg positions are counted before comparing periods.</p>
      <h3>What Win Rate Does Not Show</h3>
      <ul>
        <li><strong>Trade size:</strong> A small win and a large win both count as one winning trade.</li>
        <li><strong>Loss size:</strong> A high win rate can coexist with losses that outweigh the gains.</li>
        <li><strong>Sample stability:</strong> A short sequence may not represent the longer record.</li>
        <li><strong>Trading costs:</strong> Spread, commission, swaps, and slippage can change the net result.</li>
      </ul>
      <h3>Use It With Other Metrics</h3>
      <p>Read win rate beside average win, average loss, expectancy, profit factor, and the number of trades included. Style-based ranges are not used here because they require a defined market, timeframe, rule set, cost model, and dataset.</p>
      <p>The <a href="/blogs/trading-performance-metrics">trading performance metrics guide</a> shows how to read these numbers together using one consistent XAUUSD sample.</p>
    `
  },
  {
    slug: 'profit-factor',
    title: 'Profit Factor',
    shortDefinition: 'Total gross profit divided by the absolute value of total gross loss for a defined set of closed trades.',
    category: 'Performance Metrics',
    updatedAt: '2026-09-20',
    relatedTerms: ['win-rate', 'expectancy', 'average-win-vs-average-loss'],
    sourceIds: ['PLAI-003'],
    sources: [
      { id: 'PLAI-003', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-19' },
    ],
    proplogConnection: 'PropLogAI displays your profit factor on the dashboard alongside monthly breakdowns, so you can see how your edge evolves over time.',
    fullContent: `
      <h3>What is Profit Factor?</h3>
      <p>Profit factor is your total gross profit divided by your total gross loss (using absolute values). If your winning trades totaled $15,000 and your losing trades totaled $10,000, your profit factor is 1.5. It's a single number that captures the relationship between your wins and losses.</p>
      <h3>How to Read It</h3>
      <ul>
        <li><strong>Above 1:</strong> Gross gains were larger than gross losses in the selected sample.</li>
        <li><strong>Equal to 1:</strong> Gross gains and gross losses were equal before any excluded costs.</li>
        <li><strong>Below 1:</strong> Gross losses were larger than gross gains in the selected sample.</li>
      </ul>
      <h3>Limits of the Number</h3>
      <p>Profit factor depends on the selected dates, included trades, currency conversion, and whether costs are already reflected in each trade's result. A small or unusually favorable sample can move the ratio sharply. There is no universal threshold for a “strong” value, so compare like-for-like periods and show the trade count.</p>
      <p>Use the <a href="/blogs/trading-performance-metrics">trading performance metrics guide</a> to connect profit factor with win rate, average win and loss, expectancy, drawdown, and the equity curve.</p>
    `
  },
  {
    slug: 'expectancy',
    title: 'Expectancy',
    shortDefinition: 'The average result per trade in a defined historical sample, calculated from win rate, loss rate, average win, and average loss.',
    category: 'Performance Metrics',
    relatedTerms: ['win-rate', 'profit-factor', 'risk-reward-ratio'],
    proplogConnection: 'PropLogAI stores the trade results, setup labels, and session labels that can support a later expectancy review of your own logged data.',
    fullContent: `
      <h3>What is Expectancy?</h3>
      <p>Expectancy shows the average result per trade in a defined historical sample. The formula is: <strong>Expectancy = (Win Rate × Average Win) - (Loss Rate × Average Loss)</strong>.</p>
      <p>Example: if your win rate is 55%, average win is $800, and average loss is $500, the calculation is (0.55 × $800) - (0.45 × $500) = $215 per trade for that sample.</p>
      <h3>What Expectancy Can and Cannot Tell You</h3>
      <p>Expectancy combines how often trades won with the average size of wins and losses. It does not predict the next trade or guarantee that the same average will continue.</p>
      <ul>
        <li><strong>Keep the sample visible:</strong> show the number of trades, dates, costs, and counting method.</li>
        <li><strong>Use the same data:</strong> win rate and average win or loss must come from the same closed trades.</li>
        <li><strong>Break it down carefully:</strong> setup or session comparisons need enough comparable trades before you draw a conclusion.</li>
      </ul>
      <p>Use the <a href="/blogs/trading-expectancy-calculator">trading expectancy calculator</a> to enter your own trade counts, average win, and average loss. The <a href="/blogs/trading-performance-metrics">trading performance metrics guide</a> shows how to read expectancy beside the other numbers from the same sample.</p>
    `
  },
  {
    slug: 'sharpe-ratio',
    title: 'Sharpe Ratio',
    shortDefinition: 'A risk-adjusted-return measure that compares average return above a chosen baseline with the variation of those returns.',
    category: 'Performance Metrics',
    relatedTerms: ['equity-curve', 'drawdown', 'profit-factor'],
    proplogConnection: 'PropLogAI can organise logged results for performance review. A Sharpe ratio still needs a defined return period, baseline, and calculation method.',
    fullContent: `
      <h3>What is Sharpe Ratio?</h3>
      <p>The Sharpe ratio compares average return above a chosen baseline with the standard deviation, or variation, of returns. The return period and baseline must be defined before two results can be compared.</p>
      <h3>Do Not Confuse It With a Prop-Firm Consistency Rule</h3>
      <p>A prop-firm consistency rule may compare a best day or best trade with total profit. That is a different formula. Use the exact rule published for your program instead of replacing it with a Sharpe ratio.</p>
      <ul>
        <li><strong>Same period:</strong> compare daily returns with daily returns, not daily with monthly.</li>
        <li><strong>Same baseline:</strong> changing the risk-free or comparison rate changes the result.</li>
        <li><strong>Enough observations:</strong> a short record can produce an unstable ratio.</li>
      </ul>
      <h3>Use It as an Advanced Review Metric</h3>
      <p>Read the ratio beside the underlying return series, drawdown, trade count, costs, and calculation assumptions. A higher historical value is not a promise of smoother future results.</p>
      <p>Start with the simpler <a href="/blogs/trading-performance-metrics">trading performance metrics reading order</a> before adding this advanced measure.</p>
    `
  },
  {
    slug: 'average-win-vs-average-loss',
    title: 'Average Win vs Average Loss',
    shortDefinition: 'The comparison between the average dollar amount of your winning trades versus your losing trades, revealing whether your winners outsize your losers.',
    category: 'Performance Metrics',
    relatedTerms: ['profit-factor', 'expectancy', 'risk-reward-ratio'],
    proplogConnection: 'PropLogAI stores logged trade results so you can compare the average size of winning and losing trades in a defined period.',
    fullContent: `
      <h3>What is Average Win vs Average Loss?</h3>
      <p>This metric compares the average size of your profitable trades against the average size of your losing trades. If your average winner is $600 and your average loser is $400, your win/loss ratio is 1.5:1. It directly reflects your trade management — how you handle entries, exits, and stop losses.</p>
      <h3>Reading the Ratio</h3>
      <ul>
        <li><strong>Average win > average loss (ratio above 1:1):</strong> Your winners outsize your losers — you can be profitable even with a sub-50% win rate</li>
        <li><strong>Average win = average loss (ratio near 1:1):</strong> You need a win rate above 50% to make money</li>
        <li><strong>Average win < average loss (ratio below 1:1):</strong> Your losers are bigger than your winners — you need a very high win rate to compensate</li>
      </ul>
      <h3>Check the Reason Behind the Ratio</h3>
      <p>A smaller average win may come from the setup, exit rules, partial exits, costs, or a few large losses. Use the trade notes and screenshots to investigate. The ratio alone cannot diagnose the cause or tell you what to change.</p>
      <p>Use the <a href="/blogs/trading-expectancy-calculator">trading expectancy calculator</a> to combine these averages with your winning and losing trade counts. The <a href="/blogs/trading-performance-metrics">trading performance metrics guide</a> shows why this comparison must be read beside win rate rather than alone.</p>
    `
  },
  {
    slug: 'equity-curve',
    title: 'Equity Curve',
    shortDefinition: 'A graph of cumulative account balance or equity across time or trade order, showing gains, losses, flat periods, and drawdowns.',
    category: 'Performance Metrics',
    relatedTerms: ['drawdown', 'sharpe-ratio', 'profit-factor'],
    proplogConnection: 'PropLogAI can display performance from logged trades and keep user-entered setup, session, emotion, and rule-adherence records beside the results.',
    fullContent: `
      <h3>What is an Equity Curve?</h3>
      <p>An equity curve plots cumulative balance or equity across time or trade order. It helps you see the path taken to reach the final result, including gains, losses, flat periods, and drawdowns.</p>
      <h3>Reading Your Equity Curve</h3>
      <ul>
        <li><strong>Upward section:</strong> cumulative results increased during that part of the sample.</li>
        <li><strong>Flat section:</strong> cumulative results changed little during that part.</li>
        <li><strong>Uneven section:</strong> check trade size, setup, session, and result distribution.</li>
        <li><strong>Sharp drop:</strong> inspect the original trades and compare the decline with the relevant account limits.</li>
      </ul>
      <h3>Equity Curve for Prop Firm Traders</h3>
      <p>Your equity curve can help you review how close the logged account came to a loss limit. It does not replace the firm's current dashboard or rules, and there is no universal ideal curve or best-day percentage across prop-firm programs.</p>
      <p>Use the <a href="/blogs/trading-performance-metrics">trading performance metrics guide</a> to read the curve beside drawdown, expectancy, profit factor, and the sample behind them.</p>
    `
  },

  // ─── Trading Discipline (6) ───
  {
    slug: 'trading-plan',
    title: 'Trading Plan',
    shortDefinition: 'A comprehensive written document defining your strategy, risk rules, entry/exit criteria, and session schedule — your complete rulebook for trading.',
    category: 'Trading Discipline',
    relatedTerms: ['setup-compliance', 'rule-based-trading', 'pre-market-routine'],
    proplogConnection: 'PropLogAI lets you define your trading setups and rules in the Rulebook. The AI coach then evaluates every trade against your plan and scores your adherence.',
    fullContent: `
      <h3>What is a Trading Plan?</h3>
      <p>A trading plan is a written document that defines exactly how you will trade. It covers your strategy (what setups you trade), risk management (how much you risk), execution rules (when and how you enter/exit), and behavioral guidelines (what to do after losses, when to stop trading). Think of it as your personal trading constitution.</p>
      <h3>Core Components of a Trading Plan</h3>
      <ul>
        <li><strong>Market and session:</strong> Which instruments and trading sessions you focus on</li>
        <li><strong>Setup criteria:</strong> Exact conditions that must be met before entering a trade</li>
        <li><strong>Risk rules:</strong> Maximum risk per trade, daily loss limit, maximum positions</li>
        <li><strong>Entry mechanics:</strong> Order type, entry trigger, position sizing formula</li>
        <li><strong>Exit rules:</strong> Stop loss placement, take profit targets, trade management</li>
        <li><strong>Behavioral rules:</strong> Maximum trades per day, post-loss protocol, session end time</li>
      </ul>
      <h3>Why Plans Fail</h3>
      <p>Most traders write a plan once and never reference it again. The plan isn't useful as a document — it's useful as a checklist that you physically reference before every trade. The traders who pass prop firm challenges consistently report that following their plan was more important than having the perfect plan.</p>
    `
  },
  {
    slug: 'setup-compliance',
    title: 'Setup Compliance',
    shortDefinition: 'The degree to which a trade matches your predefined setup criteria — whether you followed your own rules for entry, stop loss, and target.',
    category: 'Trading Discipline',
    relatedTerms: ['trading-plan', 'rule-based-trading', 'confirmation-bias'],
    proplogConnection: 'PropLogAI tracks setup compliance on every trade. You mark whether you followed your setup, and the AI coach compares the performance of compliant vs non-compliant trades.',
    fullContent: `
      <h3>What is Setup Compliance?</h3>
      <p>Setup compliance measures whether your executed trade matched your predefined criteria. If your setup requires a support bounce with a bullish engulfing candle on the 1-hour chart during London session — did all four conditions exist when you entered? Setup compliance is binary for each criterion: you either met it or you didn't.</p>
      <h3>Why It's the Most Revealing Metric</h3>
      <p>Setup compliance separates the performance of your STRATEGY from the performance of your BEHAVIOR. If your compliant trades have a 58% win rate and your non-compliant trades have a 35% win rate, the diagnosis is clear: your strategy works, but your discipline doesn't. No amount of strategy optimization will fix an execution problem.</p>
      <ul>
        <li><strong>High compliance + profitable:</strong> Your strategy and discipline are both working</li>
        <li><strong>High compliance + unprofitable:</strong> Your strategy needs work, but your discipline is solid</li>
        <li><strong>Low compliance + any result:</strong> You can't evaluate your strategy because you're not executing it</li>
      </ul>
      <h3>Improving Compliance</h3>
      <p>Use a physical checklist before every trade. Write down each criterion and check them off. If even one box is unchecked, don't take the trade. This simple friction — the 30 seconds it takes to fill out a checklist — is often enough to prevent impulsive entries.</p>
    `
  },
  {
    slug: 'overtrading',
    title: 'Overtrading',
    aliases: ['Over trading', 'Excessive trading'],
    updatedAt: '2026-09-25',
    visual: 'overtrading-drift',
    shortDefinition: 'A departure from a trader’s written process in which trade frequency, timing, size, or setup quality changes because of pressure, impulse, or recent results.',
    category: 'Trading Discipline',
    relatedTerms: ['fomo', 'revenge-trading', 'trading-plan'],
    guide: { href: '/blogs/overtrading-prop-firm-challenges', label: 'Review overtrading patterns in prop firm challenges' },
    proplogConnection: 'PropLogAI lets traders record setup labels, sessions, emotions, notes, rule adherence, screenshots, and trade results. Those records can support a later review of when the trader’s own process changed; PropLogAI does not provide signals or define a universal trade limit.',
    fullContent: `
      <h3>What is Overtrading?</h3>
      <p>Overtrading means that a trader’s decisions have moved away from their documented process. The change may involve trade frequency, session timing, setup quality, position size, or the reason for entering. It is measured against the trader’s plan, not against a universal number of trades.</p>
      <p>A high-frequency strategy can produce many valid entries. A slower strategy can drift after one unplanned trade. The useful question is whether the decision still matched the written setup, session, checklist, and account rules.</p>
      <h3>High Activity vs Overtrading</h3>
      <ul>
        <li><strong>High activity:</strong> Several entries qualify under the same written rules and are recorded consistently.</li>
        <li><strong>Frequency drift:</strong> Extra trades appear after a loss, win, missed move, or quiet period without a matching planned setup.</li>
        <li><strong>Session drift:</strong> Trading continues into an unplanned session because stopping feels difficult.</li>
        <li><strong>Setup drift:</strong> The trader weakens confirmation requirements or changes the setup label after entry.</li>
        <li><strong>Size drift:</strong> Position size changes because of the previous result rather than the documented sizing process.</li>
      </ul>
      <h3>Fictional XAUUSD Example</h3>
      <p>A trader records an XAUUSD plan using IST timestamps: trade only during the London session, wait for an Asian-session liquidity sweep, and require a breakout candle to close. The first trade follows the checklist and ends at <strong>−$38</strong>. Later, the trader enters a New York-session breakout after a missed move and writes “wanted to recover the loss.” The second decision is reviewable as overtrading because the session, setup confirmation, and reason changed—not because it was simply the second trade.</p>
      <h3>What to Record</h3>
      <ul>
        <li>Instrument, session, setup name, and timestamp timezone.</li>
        <li>Whether the setup and confirmation matched the written plan.</li>
        <li>Trade number in the session and the result of the previous trade.</li>
        <li>Emotion or behaviour tag before entry.</li>
        <li>Any change in size, timing, or account-rule compliance.</li>
        <li>A factual reason for the entry and one point for later <a href="/glossary/trade-review">trade review</a>.</li>
      </ul>
      <h3>Related Behaviours</h3>
      <p><a href="/glossary/revenge-trading">Revenge trading</a> describes a reaction to a loss or frustration. <a href="/glossary/fomo">FOMO</a> describes pressure created by a move that appears to be leaving without the trader. Either can contribute to overtrading, but the terms are not interchangeable. Overtrading is the observable change in the trading process.</p>
      <h3>Review the Pattern</h3>
      <p>Use stable labels and compare similar entries rather than judging one isolated result. The practical guide explains how to review trade count, session drift, setup quality, and rule adherence without treating profit or loss as proof that the decision was sound. A consistent <a href="/glossary/trading-journal">trading journal</a> preserves the evidence needed for that comparison.</p>
    `
  },
  {
    slug: 'pre-market-routine',
    title: 'Pre-Market Routine',
    shortDefinition: 'A structured preparation process completed before trading begins, including market analysis, level marking, news checks, and mental readiness assessment.',
    category: 'Trading Discipline',
    relatedTerms: ['trading-plan', 'setup-compliance', 'trade-management'],
    proplogConnection: 'PropLogAI encourages consistent routines through daily journal entries. The AI coach correlates your pre-market preparation habits with your trading outcomes.',
    fullContent: `
      <h3>What is a Pre-Market Routine?</h3>
      <p>A pre-market routine is a structured sequence of steps you complete before placing any trades. It shifts your brain from "casual screen time" mode into "professional execution" mode. Like a pilot's pre-flight checklist, it ensures nothing critical is overlooked and puts you in the right mental state.</p>
      <h3>Sample Pre-Market Routine</h3>
      <ul>
        <li><strong>Economic calendar check (2 min):</strong> Flag high-impact news events that could affect your pairs</li>
        <li><strong>Higher timeframe analysis (5 min):</strong> Daily and 4H structure, trend direction, key levels</li>
        <li><strong>Level marking (5 min):</strong> Mark support/resistance, supply/demand zones on your trading timeframe</li>
        <li><strong>Setup scanning (5 min):</strong> Identify which pairs have potential setups forming</li>
        <li><strong>Mental check (1 min):</strong> Rate your focus level. If below 7/10, reduce risk or skip the session</li>
      </ul>
      <h3>Why Routines Work</h3>
      <p>Consistency creates quality. Traders who do the same preparation every day make fewer impulsive decisions because they've already identified their opportunities. The routine itself becomes an anchor that separates "trading time" from "screen watching time." Without a routine, you're more likely to open a chart, see movement, and chase it.</p>
    `
  },
  {
    slug: 'trade-management',
    title: 'Trade Management',
    shortDefinition: 'The decisions you make after entering a trade — adjusting stops, scaling in or out, trailing stops, or closing early based on changing market conditions.',
    category: 'Trading Discipline',
    relatedTerms: ['stop-loss', 'risk-reward-ratio', 'loss-aversion'],
    proplogConnection: 'PropLogAI records your entry, exit, and stop loss to calculate how you managed each trade. The AI coach identifies patterns in your trade management — like consistently closing too early.',
    fullContent: `
      <h3>What is Trade Management?</h3>
      <p>Trade management is everything that happens between opening and closing a position. It includes decisions about moving stop losses, taking partial profits, adding to positions, and deciding when to exit. For many traders, management is more important than the entry — you can enter at a mediocre level but manage the trade well, and still profit.</p>
      <h3>Common Trade Management Approaches</h3>
      <ul>
        <li><strong>Set and forget:</strong> Place stop loss and take profit, then don't touch the trade. Eliminates emotional interference but misses opportunities to optimize</li>
        <li><strong>Active management:</strong> Adjust stops and targets based on price action. More profitable in skilled hands, but creates more opportunities for emotional mistakes</li>
        <li><strong>Partial exits:</strong> Close half the position at 1:1 R:R, move stop to breakeven, let the rest run. Balances certainty with upside</li>
      </ul>
      <h3>The Management Paradox</h3>
      <p>The more you watch a trade, the more likely you are to make a suboptimal decision. Studies of prop firm traders consistently show that the "set and forget" approach outperforms active management for most traders — not because it's a better strategy, but because it removes the psychological pressure of watching every tick.</p>
    `
  },
  {
    slug: 'rule-based-trading',
    title: 'Rule-Based Trading',
    shortDefinition: 'An approach where every trading decision — entries, exits, sizing, and session management — follows predefined written rules rather than subjective judgment.',
    category: 'Trading Discipline',
    relatedTerms: ['trading-plan', 'setup-compliance', 'overtrading'],
    proplogConnection: 'PropLogAI is built for rule-based traders. You define your setups in the Rulebook, and the AI coach evaluates every trade against those rules, scoring your discipline.',
    fullContent: `
      <h3>What is Rule-Based Trading?</h3>
      <p>Rule-based trading means every decision you make has a predefined rule behind it. Instead of "I think EUR/USD looks bullish," the rule-based trader says: "EUR/USD has a bullish engulfing on H1, above the 200 EMA, during London session, with no high-impact news in 30 minutes — all 4 criteria met, entering long."</p>
      <h3>Rules vs Discretion</h3>
      <p>The debate between rule-based and discretionary trading is really about when judgment is applied. Rule-based traders apply all their judgment during strategy development and rule creation — then execute mechanically. Discretionary traders apply judgment in real-time. For prop firm challenges, rule-based approaches tend to perform better because:</p>
      <ul>
        <li>Emotional pressure during live trading degrades real-time judgment</li>
        <li>Rules create consistency, which prop firms explicitly reward</li>
        <li>Inconsistent execution makes it impossible to evaluate whether your strategy works</li>
        <li>Rules can be backtested and refined; "feelings" cannot</li>
      </ul>
      <h3>Building Your Rules</h3>
      <p>Start with 2-3 simple setups that you can define precisely. Each rule should be binary — yes or no, met or not met. If a criterion requires subjective interpretation ("the trend looks strong"), replace it with something measurable ("price is above the 50 EMA and the EMA is sloping up"). Ambiguous rules get broken under pressure.</p>
    `
  },

  // ─── Prop Firm (6) ───
  {
    slug: 'prop-firm-challenge',
    title: 'Prop Firm Challenge',
    shortDefinition: 'A rules-based evaluation, often on a simulated account, that a trader must complete to qualify for the firm’s next account stage.',
    category: 'Prop Firm',
    updatedAt: '2026-10-02',
    relatedTerms: ['funded-account', 'profit-target', 'daily-drawdown-limit'],
    guide: { href: '/blogs/prop-firm-rules-guide', label: 'Check the exact prop firm rules before you buy' },
    sourceIds: ['PFR-001', 'PFR-002', 'PFR-004', 'PFR-009', 'PLAI-002'],
    sources: [
      { id: 'PFR-001', label: 'FTMO trading objectives', url: 'https://ftmo.com/en/trading-objectives/', checkedOn: '2026-09-19' },
      { id: 'PFR-009', label: 'FundedNext Stellar 2-Step profit target', url: 'https://help.fundednext.com/en/articles/8021071-what-is-the-profit-target-of-the-stellar-2-step-challenge', checkedOn: '2026-09-19' },
      { id: 'PLAI-002', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-19' },
    ],
    proplogConnection: 'PropLogAI lets traders manually log trades, emotions, screenshots, and rule adherence. Use the journal record alongside the exact terms shown in the firm’s current dashboard and rules.',
    fullContent: `
      <h3>What is a Prop Firm Challenge?</h3>
      <p>A prop firm challenge, evaluation, or assessment is a stage in which a trader follows a named program's objectives and loss limits. Many online programs use simulated accounts. Passing can qualify the trader for another simulated or funded-stage account under a separate contract.</p>
      <h3>Rules Vary by Program</h3>
      <ul>
        <li><strong>Objectives:</strong> A program may set one or more profit targets.</li>
        <li><strong>Loss limits:</strong> Daily and maximum-loss calculations may use different reference values and reset times.</li>
        <li><strong>Trading days and time:</strong> Minimum days and time limits are program-specific.</li>
        <li><strong>Next stage:</strong> Account model, reward eligibility, and payout conditions come from the firm's contract.</li>
      </ul>
      <h3>Named Examples</h3>
      <p>On the pages checked for this revision, FTMO's 2-Step program lists 10% for its Challenge and 5% for Verification, while FundedNext's Stellar 2-Step lists 8% for Phase 1 and 5% for Phase 2. These examples explain variation; they are not a universal range. Verify the exact program page before relying on any number.</p>
      <h3>What This Definition Does Not Claim</h3>
      <p>There is no approved general failure rate, standard fee, fixed duration, or universal account model in this glossary. Those details can change and require a current first-party source.</p>
    `
  },
  {
    slug: 'funded-account',
    title: 'Funded Account',
    shortDefinition: 'An account stage offered under a prop firm agreement after eligibility conditions are met; it may use simulated or live-market capital depending on the firm.',
    category: 'Prop Firm',
    updatedAt: '2026-09-20',
    relatedTerms: ['prop-firm-challenge', 'overall-drawdown-limit', 'consistency-rule'],
    guide: { href: '/blogs/prop-firm-payout-rules', label: 'Check payout conditions before you request' },
    sourceIds: ['PFR-013', 'PFR-014', 'PLAI-002', 'PLAI-003'],
    sources: [
      { id: 'PFR-013', label: 'FTMO — capital used on an FTMO Account', url: 'https://ftmo.com/faq/what-capital-will-i-trade-on-an-ftmo-account/', checkedOn: '2026-09-19' },
      { id: 'PFR-014', label: 'FundedNext — how its account model works', url: 'https://help.fundednext.com/en/articles/11982431-how-does-fundednext-work', checkedOn: '2026-09-19' },
      { id: 'PLAI-002', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-19' },
    ],
    proplogConnection: 'PropLogAI provides manual journal records and dashboard metrics from logged data. Those records can support a review, while the firm’s agreement remains the source for account and reward rules.',
    fullContent: `
      <h3>What is a Funded Account?</h3>
      <p>“Funded account” is an industry label for an account stage governed by a prop firm's agreement. The label alone does not prove that orders use the firm's live capital. Some online firms expressly describe these accounts as simulated and pay rewards based on simulated performance.</p>
      <h3>What to Verify</h3>
      <ul>
        <li><strong>Account model:</strong> Simulated, live, or another contractual structure.</li>
        <li><strong>Loss rules:</strong> Daily, maximum, trailing, and open-position calculations.</li>
        <li><strong>Rewards:</strong> Eligibility, calculation, request schedule, and exclusions.</li>
        <li><strong>Termination and scaling:</strong> Events that close, reset, or change the account.</li>
      </ul>
      <h3>Two Current Examples</h3>
      <p>FTMO states that its FTMO Accounts use fictitious capital. FundedNext describes its funded-stage account as simulated with rewards based on performance. These statements apply to those firms' checked pages and should not be generalized to every proprietary trading business.</p>
      <h3>Avoid Assumptions</h3>
      <p>Account size labels and reward percentages are not included as “typical” values here. Read the current agreement and program rules before describing whose capital is used or how a payout works.</p>
      <p>Before you request money, use the <a href="/blogs/prop-firm-payout-rules">prop firm payout rules checklist</a>. After a request or payment, keep it in a separate record using the <a href="/blogs/prop-firm-expense-tracking-guide">expense and payout tracking guide</a>.</p>
    `
  },
  {
    slug: 'overall-drawdown-limit',
    title: 'Overall Drawdown Limit',
    shortDefinition: 'A program rule that sets the lowest permitted account value, using a fixed or moving reference defined by the firm.',
    category: 'Prop Firm',
    updatedAt: '2026-09-25',
    relatedTerms: ['daily-drawdown-limit', 'drawdown', 'prop-firm-challenge'],
    guide: { href: '/blogs/daily-drawdown-calculator', label: 'Compare daily and overall drawdown tracking' },
    sourceIds: ['PFR-003', 'PFR-005', 'PFR-008', 'PLAI-004'],
    sources: [
      { id: 'PFR-003', label: 'FTMO trading objectives', url: 'https://ftmo.com/en/trading-objectives/', checkedOn: '2026-09-25' },
      { id: 'PFR-005', label: 'FTMO 1-Step loss objectives', url: 'https://ftmo.com/en/trading-objectives/', checkedOn: '2026-09-25' },
      { id: 'PFR-008', label: 'FundedNext maximum loss calculation', url: 'https://help.fundednext.com/en/articles/8019812-how-can-i-calculate-the-maximum-loss-limit', checkedOn: '2026-09-25' },
      { id: 'PLAI-004', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-19' },
    ],
    proplogConnection: 'PropLogAI provides a P&L calendar from logged data. Use it as a review aid, and use the firm’s platform and current rules for the official limit calculation.',
    fullContent: `
      <h3>What is an overall drawdown limit?</h3>
      <p>An overall drawdown limit is a program rule that sets the lowest permitted account value across the account period. The firm may call it maximum loss. A breach depends on the exact program contract.</p>
      <p>To calculate the buffer, compare the value named in the rule with the current official floor. Do not copy a percentage or floor from another account.</p>
      <h3>Static and moving floors</h3>
      <ul>
        <li><strong>Static:</strong> the floor stays tied to a stated reference such as initial simulated capital.</li>
        <li><strong>Trailing:</strong> the floor can move after gains according to the program's balance or equity rule.</li>
        <li><strong>End-of-day trailing:</strong> the program updates the floor at a daily checkpoint rather than on every price change.</li>
      </ul>
      <h3>Current named examples</h3>
      <p>FTMO's page checked on 25 September 2026 describes a static Maximum Loss for 2-Step and an end-of-day trailing Maximum Loss for 1-Step. FundedNext's checked page describes a fixed $90,000 floor in its $100,000 Stellar 2-Step example. These examples belong only to those named programs.</p>
      <h3>What should you check?</h3>
      <p>Confirm the program, account stage, reference value, current floor, balance or equity test, update time, included costs, and what happens after a reward or withdrawal. The practical <a href="/blogs/daily-drawdown-calculator">daily drawdown calculator guide</a> shows how to compare an official floor with the measured account value.</p>
    `
  },
  {
    slug: 'profit-target',
    title: 'Profit Target',
    shortDefinition: 'The net-profit objective a named prop firm program requires for a particular evaluation phase.',
    category: 'Prop Firm',
    updatedAt: '2026-09-20',
    relatedTerms: ['prop-firm-challenge', 'consistency-rule', 'funded-account'],
    sourceIds: ['PFR-001', 'PFR-009', 'PLAI-004'],
    sources: [
      { id: 'PFR-001', label: 'FTMO trading objectives', url: 'https://ftmo.com/en/trading-objectives/', checkedOn: '2026-09-19' },
      { id: 'PFR-009', label: 'FundedNext Stellar 2-Step profit target', url: 'https://help.fundednext.com/en/articles/8021071-what-is-the-profit-target-of-the-stellar-2-step-challenge', checkedOn: '2026-09-19' },
      { id: 'PLAI-004', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-19' },
    ],
    proplogConnection: 'PropLogAI provides a P&L calendar from logged trades. It can help you review the record, while the firm’s current program page remains the source for the target and pass conditions.',
    fullContent: `
      <h3>What is a Profit Target?</h3>
      <p>A profit target is the net-profit objective attached to a specific phase of a prop firm evaluation. The percentage, starting reference, eligible trading days, time limit, and other pass conditions come from that program's current rules.</p>
      <h3>Basic Arithmetic</h3>
      <p><strong>Target amount = program reference amount × target percentage.</strong> For a purely illustrative $100,000 reference and a stated 8% target, the arithmetic target is $8,000. That example does not say that 8% applies to every challenge.</p>
      <h3>Named Examples</h3>
      <ul>
        <li><strong>FTMO 2-Step:</strong> The checked page lists 10% for the Challenge and 5% for Verification.</li>
        <li><strong>FundedNext Stellar 2-Step:</strong> The checked page lists 8% for Phase 1 and 5% for Phase 2.</li>
      </ul>
      <h3>Read the Whole Rule Set</h3>
      <p>Reaching a target may not be enough if a minimum-day, loss-limit, consistency, or prohibited-practice rule is unmet. Do not convert a phase target into a promised daily return or a recommendation to increase risk.</p>
    `
  },
  {
    slug: 'consistency-rule',
    title: 'Consistency Rule',
    shortDefinition: 'A consistency rule checks whether too much of your total profit came from one day or one trade. Your firm decides the formula, limit, and what happens when you are over it.',
    category: 'Prop Firm',
    updatedAt: '2026-09-30',
    visual: 'consistency-ratio-note',
    guide: { href: '/blogs/prop-firm-consistency-calculator', label: 'Calculate a best-day percentage and understand its limits' },
    relatedTerms: ['profit-target', 'funded-account', 'prop-firm-challenge'],
    sourceIds: ['PFR-010', 'PFR-011', 'PFR-016', 'PFR-017', 'PFR-018', 'PFR-019', 'PLAI-002', 'PLAI-004'],
    sources: [
      { id: 'PFR-010', label: 'Topstep Trading Combine consistency target', url: 'https://help.topstep.com/en/articles/8284208-consistency-at-topstep', checkedOn: '2026-09-29' },
      { id: 'PFR-011', label: 'Topstep Express Funded Account consistency path', url: 'https://help.topstep.com/en/articles/8284208-consistency-at-topstep', checkedOn: '2026-09-29' },
      { id: 'PFR-016', label: 'Tradeify consistency rule', url: 'https://help.tradeify.co/en/articles/10468320-rules-consistency-rule', checkedOn: '2026-09-29' },
      { id: 'PFR-017', label: 'Instant Funding IF1 rules', url: 'https://instantfunding.com/help/if1/', checkedOn: '2026-09-29' },
      { id: 'PFR-018', label: 'Apex 50% consistency requirement', url: 'https://apextraderfunding.com/help-center/additional-helpful-items/50-consistency-requirement/', checkedOn: '2026-09-29' },
      { id: 'PFR-019', label: 'My Funded Futures consistency rule', url: 'https://help.myfundedfutures.com/en/articles/11994562-consistency-rule-at-my-fundedfutures', checkedOn: '2026-09-29' },
      { id: 'PLAI-002', label: 'PropLogAI manual journal feature', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    proplogConnection: 'PropLogAI can store manually logged daily results and rule-adherence notes. Use the firm’s current dashboard and rules for the official calculation and account status.',
    fullContent: `
      <h3>What does a consistency rule mean?</h3>
      <p>It asks one simple question: <strong>did too much of your total profit come from one result?</strong></p>
      <p>Depending on the program, a firm may check either your most profitable <strong>day</strong> or your biggest winning <strong>trade</strong>. The limit may be 15%, 20%, 30%, 40%, 50%, or another number stated by that program.</p>

      <h3>First check: best day or best trade?</h3>
      <p>For a best-day consistency rule, the firm adds up the profits and losses from all trades closed within its defined trading day and identifies the day with the highest net profit. A best-trade rule looks at the individual trade with the highest profit. They are different calculations.</p>
      <figure class="consistency-note" data-consistency-note-root>
        <button type="button" class="consistency-note-trigger" aria-label="Open the best-day versus best-trade learning note at a larger size" data-consistency-note-trigger>
          <img src="/glossary/images/consistency-day-vs-trade-note.webp" alt="Handwritten note comparing a 20 percent best-day rule with a 15 percent best-trade rule" loading="lazy" decoding="async" />
          <span aria-hidden="true">Click to zoom</span>
        </button>
        <figcaption>Do not put a best trade into a best-day calculator. Click or tap to enlarge.</figcaption>
        <dialog class="consistency-note-dialog" data-consistency-note-dialog aria-label="Larger best-day versus best-trade learning note"><div><button type="button" class="consistency-note-close" data-consistency-note-close>Close</button><img src="/glossary/images/consistency-day-vs-trade-note.webp" alt="Handwritten note comparing a 20 percent best-day rule with a 15 percent best-trade rule" /></div></dialog>
      </figure>

      <h3>How a best-day rule is calculated</h3>
      <p>When the rule says best day, the usual calculation is <strong>most profitable day ÷ total net profit × 100</strong>.</p>
      <p>Example: your best day made $400 profit and your total net profit is $800. The calculation is $400 ÷ $800 × 100 = 50%.</p>
      <p>If your firm's consistency rule is 40%, then 50% is above that limit. This tells you the calculation result. It does not yet tell you whether the account is breached.</p>

      <h3>What happens when you are over the limit?</h3>
      <p><strong>Read the consequence written for your exact firm, program, and stage. If it is unclear, ask the firm's support team.</strong> A consistency condition can delay a payout until you meet the requirement.</p>
      <ul>
        <li><strong>Tradeify:</strong> Its rules state that traders who do not meet the consistency requirement during the payout period may continue trading until they meet it. This is not considered an account failure or a penalty.</li>
        <li><strong>Apex 50% requirement:</strong> Its rules state that the payout option is unavailable while the consistency score exceeds the limit. However, the account remains active, and the trader may continue trading.</li>
        <li><strong>My Funded Futures:</strong> Its rules state that exceeding the applicable 30% or 50% consistency threshold during evaluation does not breach the account. A trader may need additional trading days before meeting the requirement.</li>
      </ul>
      <p>Those are named examples, not a rule for every firm. If your own prop firm calls it a hard breach, stop and follow that instruction.</p>
      <figure class="consistency-note" data-consistency-note-root>
        <button type="button" class="consistency-note-trigger" aria-label="Open the consistency breach decision note at a larger size" data-consistency-note-trigger>
          <img src="/glossary/images/consistency-breach-decision-note.webp" alt="Handwritten decision note explaining that the individual program decides whether exceeding a consistency limit is a breach" loading="lazy" decoding="async" />
          <span aria-hidden="true">Click to zoom</span>
        </button>
        <figcaption>Being over a percentage is not automatically a breach. The written consequence decides. Click or tap to enlarge.</figcaption>
        <dialog class="consistency-note-dialog" data-consistency-note-dialog aria-label="Larger consistency breach decision note"><div><button type="button" class="consistency-note-close" data-consistency-note-close>Close</button><img src="/glossary/images/consistency-breach-decision-note.webp" alt="Handwritten decision note explaining that the individual program decides whether exceeding a consistency limit is a breach" /></div></dialog>
      </figure>

      <h3>Simple example when continued trading is allowed</h3>
      <p>Your best day is $400, total net profit is $800, and your firm's program uses a 40% best-day consistency rule. Your current consistency score is 50%.</p>
      <p>If the program allows the account to remain active, earning <strong>$100</strong> in net profit in each of the next two trading sessions would bring your total net profit to $1,000. Your best day would remain $400, making your consistency score 40% ($400 ÷ $1,000). This would meet the requirement if the program accepts a score of 40% or less.</p>
      <p>This is an arithmetic example, not an instruction to make $200. Do not force trades, increase size, or take a setup that is not in your plan. Continue only when the firm's rule allows it and your normal setup appears.</p>
      <figure class="consistency-note" data-consistency-note-root>
        <button type="button" class="consistency-note-trigger" aria-label="Open the consistency ratio change example at a larger size" data-consistency-note-trigger>
          <img src="/glossary/images/consistency-ratio-change-example.webp" alt="Handwritten example showing a 400 dollar best day moving from 50 percent to 40 percent after total net profit becomes 1000 dollars" loading="lazy" decoding="async" />
          <span aria-hidden="true">Click to zoom</span>
        </button>
        <figcaption>The best day stays $400 while the total changes from $800 to $1,000. Click or tap to enlarge.</figcaption>
        <dialog class="consistency-note-dialog" data-consistency-note-dialog aria-label="Larger consistency ratio change example"><div><button type="button" class="consistency-note-close" data-consistency-note-close>Close</button><img src="/glossary/images/consistency-ratio-change-example.webp" alt="Handwritten example showing a 400 dollar best day moving from 50 percent to 40 percent after total net profit becomes 1000 dollars" /></div></dialog>
      </figure>

      <h3>Why you may see 15%, 20%, 30%, or 50%</h3>
      <table>
        <thead><tr><th>Current named example</th><th>What is checked</th><th>Limit shown on the checked page</th></tr></thead>
        <tbody>
          <tr><td>Instant Funding IF1</td><td>Best single trade ÷ total profit</td><td>15%</td></tr>
          <tr><td>Tradeify Lightning Funded, first payout</td><td>Biggest day ÷ total profit</td><td>20%</td></tr>
          <tr><td>My Funded Futures Rapid EOD evaluation</td><td>Single day ÷ total evaluation profit</td><td>30%</td></tr>
          <tr><td>Apex cited payout requirement</td><td>Largest profitable day ÷ accumulated net profit</td><td>50% threshold; verify the boundary on the dashboard</td></tr>
          <tr><td>My Funded Futures Rapid Intraday and Pro evaluation</td><td>Single day ÷ total evaluation profit</td><td>50%</td></tr>
        </tbody>
      </table>
      <p>These examples were checked on 29 September 2026 and can change. A percentage copied without its formula, stage, time window, and consequence is incomplete.</p>

      <h3>What should you check before acting?</h3>
      <ol>
        <li>Does your prop firm calculate consistency based on your best day, best trade, or another measure?</li>
        <li>What counts in total profit, including losing days and costs?</li>
        <li>Which account stage and payout period does the consistency rule apply to?</li>
        <li>Is going over it a hard breach, a delayed payout, a higher target, or simply a condition not met yet?</li>
        <li>Does the firm explicitly allow continued trading until you meet the requirement?</li>
      </ol>
      <p>Use the <a href="/blogs/prop-firm-consistency-calculator">consistency rule calculator guide</a> for a complete calculation example. Use the <a href="/blogs/prop-firm-challenge-readiness">prop firm challenge readiness guide</a> when you need to check this alongside profit targets and drawdown rules.</p>
    `
  },
  {
    slug: 'daily-drawdown-limit',
    title: 'Daily Drawdown Limit',
    aliases: ['Maximum Daily Loss'],
    shortDefinition: 'A prop firm rule that sets the lowest permitted account value during a defined trading day.',
    category: 'Prop Firm',
    updatedAt: '2026-09-25',
    visual: 'daily-drawdown-buffer-note',
    relatedTerms: ['overall-drawdown-limit', 'drawdown', 'risk-per-trade'],
    guide: { href: '/blogs/daily-drawdown-calculator', label: 'Calculate and review a daily drawdown buffer' },
    sourceIds: ['PFR-002', 'PFR-006', 'PFR-007', 'PFR-015', 'PLAI-004'],
    sources: [
      { id: 'PFR-002', label: 'FTMO trading objectives', url: 'https://ftmo.com/en/trading-objectives/', checkedOn: '2026-09-25' },
      { id: 'PFR-006', label: 'FundedNext maximum daily loss', url: 'https://help.fundednext.com/en/articles/8019914-what-is-the-maximum-daily-loss-limit', checkedOn: '2026-09-25' },
      { id: 'PFR-007', label: 'FundedNext Stellar 1-Step daily loss', url: 'https://help.fundednext.com/en/articles/8019914-what-is-the-maximum-daily-loss-limit', checkedOn: '2026-09-25' },
      { id: 'PFR-015', label: 'FundedNext Stellar Lite daily loss', url: 'https://help.fundednext.com/en/articles/8019914-what-is-the-maximum-daily-loss-limit', checkedOn: '2026-09-25' },
      { id: 'PLAI-004', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-19' },
    ],
    proplogConnection: 'PropLogAI provides a P&L calendar from logged trades. It is a review aid; the firm’s platform and current rule page remain the source for the official daily-loss figure.',
    fullContent: `
      <h3>What is a daily drawdown limit?</h3>
      <p>A daily drawdown limit is a prop-firm rule that sets the lowest permitted account value during the firm's defined trading day. Some firms call it maximum daily loss.</p>
      <p>The safest buffer calculation is current measured value minus the official daily floor. Use the firm's dashboard or current rule to find the floor. Do not assume every firm starts from the same amount or resets at the same time.</p>
      <h3>What changes the calculation?</h3>
      <ul>
        <li><strong>Program:</strong> one-step, two-step, evaluation, and funded-stage products may differ.</li>
        <li><strong>Reference:</strong> the rule may use initial simulated capital, a balance at reset, or another stated value.</li>
        <li><strong>Measured value:</strong> the rule may test balance or equity and may include open P&amp;L.</li>
        <li><strong>Costs:</strong> commissions and swaps may count.</li>
        <li><strong>Reset:</strong> the firm defines the timezone and checkpoint. It may not be midnight in India.</li>
      </ul>
      <h3>Simple example</h3>
      <p>If the official daily floor is $47,500 and the measured equity is $48,300, the buffer above the floor is $800. That does not mean the trader should risk $800. It only shows the distance between the two figures entered.</p>
      <h3>Current named examples</h3>
      <p>FTMO's 2-Step page checked on 25 September 2026 uses a 5% Maximum Daily Loss amount based on initial simulated capital and recalculates the floor at 00:00 CE(S)T from the balance at that time. Its breach test uses equity including open P&amp;L, swaps, and commissions. FundedNext's checked page lists 5% for Stellar 2-Step, 3% for Stellar 1-Step, and 4% for Stellar Lite, with running plus closed losses counted.</p>
      <h3>Use the exact rule</h3>
      <p>Confirm the program, copy the official floor, and compare it with the account value the rule measures. Then use the <a href="/blogs/daily-drawdown-calculator">daily drawdown calculator</a> to check the dollar buffer without turning that buffer into a trade instruction.</p>
    `
  },

  // ─── Journal & Analysis (6) ───
  {
    slug: 'trading-journal',
    title: 'Trading Journal',
    aliases: ['Trade journal', 'Forex trading journal'],
    updatedAt: '2026-09-24',
    visual: 'trading-journal-loop',
    shortDefinition: 'A structured record of trade context, plan, execution, result, rule compliance, emotions, screenshots, and review notes used to compare decisions over time.',
    category: 'Journal & Analysis',
    relatedTerms: ['trade-review', 'emotion-tracking', 'performance-report'],
    guide: { href: '/blogs/prop-firm-trading-journal', label: 'Build a prop firm trading journal workflow' },
    proplogConnection: 'PropLogAI lets traders record trade details, notes, emotions, rule adherence, screenshots, and tags in one journal. Its review tools help organise patterns in the trader’s own records; they do not provide signals or tell the trader what to trade.',
    fullContent: `
      <h3>What is a Trading Journal?</h3>
      <p>A trading journal is a structured record of what you planned, what you did, and what happened during a trade. It keeps the result beside the decision-making process, so a profitable rule break does not look the same as a well-executed trade.</p>
      <p>For example, an entry can identify <strong>XAUUSD</strong>, the <strong>London session</strong>, an <strong>Asian-session liquidity sweep</strong>, the planned breakout confirmation, the actual execution, and the result in USD. These stable labels make similar trades easier to compare later.</p>
      <h3>What to Record</h3>
      <ul>
        <li><strong>Context:</strong> Date, account, instrument, session, setup name, timeframe, and review timezone.</li>
        <li><strong>Plan:</strong> Why the setup qualified, what would invalidate it, and the intended entry and exit method.</li>
        <li><strong>Execution:</strong> Actual entry and exit, whether the checklist was followed, and any unplanned change.</li>
        <li><strong>Result:</strong> Profit, loss, or breakeven outcome with the P&amp;L amount in USD for forex records.</li>
        <li><strong>Behaviour:</strong> Emotion, rule adherence, behaviour tags, screenshots, and one specific next-time lesson.</li>
      </ul>
      <h3>Journal Entry vs Trade Review</h3>
      <p>A journal entry records evidence from one trade. A <a href="/glossary/trade-review">trade review</a> compares one or more entries to find a repeated process, mistake, or strength. Keeping the two tasks separate helps you record facts first and interpret them later.</p>
      <h3>Use a Consistent Template</h3>
      <p>A consistent layout makes weekly and monthly comparisons easier. Use the same core fields for a meaningful review period, then change a field only when you know which question it should answer. The practical <a href="/blogs/trading-journal-template">trading journal template</a> includes a copyable structure, an interactive journal builder, a worked XAUUSD example, and a CSV download.</p>
      <h3>Common Mistakes</h3>
      <ul>
        <li>Recording only P&amp;L and leaving out setup or rule compliance.</li>
        <li>Using vague labels such as “gold trade” instead of a stable instrument, session, and setup name.</li>
        <li>Writing only after difficult trades, which makes later comparisons incomplete.</li>
        <li>Collecting entries without scheduling a weekly or monthly review.</li>
      </ul>
    `
  },
  {
    slug: 'trade-review',
    title: 'Trade Review',
    shortDefinition: 'A structured analysis of past trades to identify patterns, mistakes, and strengths — typically done daily, weekly, or monthly to drive continuous improvement.',
    category: 'Journal & Analysis',
    relatedTerms: ['trading-journal', 'performance-report', 'pattern-recognition'],
    proplogConnection: 'PropLogAI automates your trade reviews with AI-powered analysis. PropLogAI Coach generates monthly reviews covering discipline, psychology, mistakes, and action plans.',
    fullContent: `
      <h3>What is a Trade Review?</h3>
      <p>A trade review is the process of analyzing your past trades to extract actionable insights. It's not just looking at P&L — it's examining your decision-making process, emotional patterns, and execution quality to identify what's working and what needs to change.</p>
      <h3>Review Cadences</h3>
      <ul>
        <li><strong>Daily (5 min):</strong> Quick scan of today's trades. Did you follow your plan? Any emotional trades? One lesson for tomorrow</li>
        <li><strong>Weekly (30 min):</strong> Review the full week's trades. Win rate, biggest winners/losers, setup compliance rate, emotional patterns. Set one focus for next week</li>
        <li><strong>Monthly (1 hour):</strong> Deep analysis. Performance by setup, session, pair, emotion. Equity curve assessment. Update your trading plan based on findings</li>
      </ul>
      <h3>Effective Review Questions</h3>
      <p>The quality of your review depends on the questions you ask. Instead of "Did I make money?" ask: "Which setups performed best? Am I overtrading after losses? What time of day are my worst trades? What emotional state preceded my biggest drawdowns?" These questions lead to specific, actionable improvements rather than vague resolutions.</p>
    `
  },
  {
    slug: 'emotion-tracking',
    title: 'Emotion Tracking',
    shortDefinition: 'Emotion tracking means recording a simple feeling tag beside a trade so you can review whether the feeling appeared near a change in your trading decisions.',
    category: 'Journal & Analysis',
    relatedTerms: ['trading-journal', 'tilt', 'fomo'],
    guide: { href: '/blogs/how-emotions-affect-trading-decisions', label: 'See how a feeling may change a trading decision' },
    proplogConnection: 'PropLogAI lets you tag emotions and record whether a trade followed your own rules. These are user-entered review records, not a diagnosis or proof that an emotion caused a result.',
    fullContent: `
      <h3>What emotion tracking means</h3>
      <p>Emotion tracking means adding a short feeling tag to a specific trading moment. You might record how you felt before entering, while managing the position, or after exiting.</p>
      <p>The tag does not tell you whether the trade was good or bad. It gives you one piece of context to compare with the setup, session, rule adherence, decision, and result.</p>
      <h3>Simple tags you can use</h3>
      <ul>
        <li><strong>Calm:</strong> You feel able to check the plan without rushing.</li>
        <li><strong>Hesitant:</strong> You keep delaying a decision that the plan already covers.</li>
        <li><strong>Frustrated:</strong> A recent result is still affecting your attention.</li>
        <li><strong>Rushed:</strong> You feel pressure to act before the move continues.</li>
        <li><strong>Confident:</strong> You feel sure about the decision; check whether the written rules stayed the same.</li>
      </ul>
      <h3>Example</h3>
      <p>You record <strong>frustrated</strong> after an XAUUSD loss. Before the next trade, you enter before the breakout candle closes. The useful record is not "frustration caused a loss." It is "frustrated + entered before the planned confirmation." You can later check whether that same combination appears again.</p>
      <h3>Common confusion</h3>
      <p>Emotion tracking is not a mental-health diagnosis, and a repeated tag does not prove that the feeling caused a profit or loss. Review the observable decision beside the tag and keep the trade result separate.</p>
    `
  },
  {
    slug: 'pattern-recognition',
    title: 'Pattern Recognition',
    shortDefinition: 'The ability to identify recurring behaviors, habits, and tendencies in your own trading by analyzing journal data over time.',
    category: 'Journal & Analysis',
    relatedTerms: ['trade-review', 'ai-trading-coach', 'emotion-tracking'],
    proplogConnection: 'PropLogAI uses AI to detect patterns across your trading history that would take hours to find manually — correlating emotions, setups, sessions, and outcomes automatically.',
    fullContent: `
      <h3>What is Pattern Recognition in Trading Performance?</h3>
      <p>Pattern recognition here doesn't mean chart patterns — it means recognizing recurring behaviors in YOUR trading. Do you always overtrade on Fridays? Do your losses cluster after 2 PM? Do you perform worse after a big win? These are behavioral patterns that silently erode performance, and they're invisible without data.</p>
      <h3>Types of Behavioral Patterns</h3>
      <ul>
        <li><strong>Temporal patterns:</strong> Performance differences by day of week, time of day, or session</li>
        <li><strong>Sequential patterns:</strong> How you trade after a win streak vs a loss streak</li>
        <li><strong>Emotional patterns:</strong> Which emotional states correlate with your best and worst performance</li>
        <li><strong>Setup patterns:</strong> Which setups have positive expectancy and which are losing you money</li>
        <li><strong>Risk patterns:</strong> When you deviate from your position sizing rules</li>
      </ul>
      <h3>From Pattern to Action</h3>
      <p>Identifying a pattern is only useful if you create a rule to address it. "I overtrade on Fridays" becomes "Maximum 2 trades on Friday." "I revenge trade after 2 losses" becomes "Mandatory 30-minute break after 2 consecutive losses." Patterns without rules remain just interesting observations.</p>
    `
  },
  {
    slug: 'performance-report',
    title: 'Performance Report',
    shortDefinition: 'A comprehensive analysis of your trading over a defined period, covering statistics, patterns, strengths, weaknesses, and actionable recommendations.',
    category: 'Journal & Analysis',
    relatedTerms: ['trade-review', 'trading-journal', 'equity-curve'],
    proplogConnection: 'PropLogAI generates AI-powered monthly performance reports with PropLogAI Coach, covering discipline scores, psychology analysis, top mistakes, and a personalized action plan.',
    fullContent: `
      <h3>What is a Performance Report?</h3>
      <p>A performance report is a structured analysis of your trading over a specific period — typically monthly. It goes beyond raw numbers to provide context: what's improving, what's declining, what behavioral changes led to the results, and what to focus on next.</p>
      <h3>Key Components</h3>
      <ul>
        <li><strong>Overall scores:</strong> Discipline, psychology, execution, risk management, consistency</li>
        <li><strong>Statistics:</strong> Win rate, profit factor, expectancy, drawdown, average R:R</li>
        <li><strong>Breakdown analysis:</strong> Performance by setup, session, pair, day of week</li>
        <li><strong>Mistake audit:</strong> Top 3 recurring mistakes with frequency and cost</li>
        <li><strong>Emotional analysis:</strong> Performance by emotional state, emotion distribution</li>
        <li><strong>Action plan:</strong> 1-3 specific focus areas for the next period</li>
      </ul>
      <h3>Making Reports Actionable</h3>
      <p>The most important section of any performance report is the action plan. Every insight should connect to a specific, measurable change. Instead of "improve discipline," specify "implement a 3-trade maximum on days following a loss day." Track whether you follow through on last month's action items before creating new ones.</p>
      <p>The <a href="/blogs/trading-performance-metrics">trading performance metrics guide</a> explains the order for checking the sample, core statistics, drawdown, equity curve, setup, and session.</p>
    `
  },
  {
    slug: 'ai-trading-coach',
    title: 'AI Trading Coach',
    shortDefinition: 'An AI system that analyzes your trading journal data to provide personalized performance coaching — identifying patterns, weaknesses, and behavioral improvements.',
    category: 'Journal & Analysis',
    relatedTerms: ['pattern-recognition', 'performance-report', 'trading-journal'],
    proplogConnection: 'PropLogAI features Propol, a built-in AI Trading Coach that analyzes your trades, journal entries, emotions, and discipline to provide personalized coaching based entirely on your own data.',
    fullContent: `
      <h3>What is an AI Trading Coach?</h3>
      <p>An AI trading coach uses artificial intelligence to analyze your personal trading data — journal entries, emotions, statistics, and behavioral patterns — and provide coaching insights that would be impossible to derive manually. Unlike generic trading education, AI coaching is entirely personalized to YOUR trading history.</p>
      <h3>How AI Coaching Differs from Human Coaching</h3>
      <ul>
        <li><strong>Data processing:</strong> AI can analyze hundreds of trades across dozens of variables simultaneously, finding correlations a human would miss</li>
        <li><strong>Objectivity:</strong> AI has no ego, no confirmation bias, and no motivation to tell you what you want to hear</li>
        <li><strong>Consistency:</strong> AI applies the same analytical framework every time, without mood or fatigue</li>
        <li><strong>Speed:</strong> What takes a human coach hours of review, AI can process in seconds</li>
      </ul>
      <h3>What AI Coaching is NOT</h3>
      <p>AI trading coaches do not give financial advice, predict market movements, or recommend specific trades. An ethical AI coach focuses exclusively on YOUR behavior: your discipline, psychology, and execution patterns. It tells you what you're doing well, what you're doing poorly, and — most importantly — which single change would have the biggest impact on your results. The insights come from your own data, not market opinions.</p>
    `
  },
];
