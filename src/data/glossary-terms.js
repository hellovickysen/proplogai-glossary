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
    shortDefinition: 'Trading aggressively after a loss to "win back" the money, typically with larger positions or lower-quality setups, leading to even bigger losses.',
    category: 'Trading Psychology',
    relatedTerms: ['tilt', 'fomo', 'overtrading'],
    guide: { href: '/blogs/revenge-trading-prop-firm', label: 'Review a practical revenge-trading interruption workflow' },
    proplogConnection: 'PropLogAI detects revenge trading patterns by analyzing your trade timing, position sizes, and emotions after consecutive losses — then alerts you before the spiral deepens.',
    fullContent: `
      <h3>What is Revenge Trading?</h3>
      <p>Revenge trading is the compulsive urge to immediately re-enter the market after a losing trade, driven by the need to recover the lost money. The trader abandons their plan, increases position size, or takes setups they'd normally skip — all to "get even" with the market.</p>
      <p>It's called "revenge" because the trader is emotionally reacting to the market as if it personally wronged them. The rational part of the brain shuts down, and the fight-or-flight response takes over.</p>
      <h3>The Revenge Trading Spiral</h3>
      <p>The pattern is predictable: Loss → Frustration → Impulsive re-entry → Bigger loss → More frustration → Even more impulsive trading. For prop firm traders, this spiral can blow an entire challenge account in a single session. Studies of prop firm failure rates consistently show that accounts are most often lost in clusters of rapid trades, not from a single bad setup.</p>
      <ul>
        <li><strong>Larger lot sizes:</strong> Doubling up to recover faster — which doubles the risk</li>
        <li><strong>Ignoring stop losses:</strong> Moving or removing stops because "this one has to work"</li>
        <li><strong>Trading off-plan:</strong> Entering random pairs, timeframes, or sessions you don't normally trade</li>
      </ul>
      <h3>Breaking the Pattern</h3>
      <p>The most effective countermeasure is a mandatory cooling-off period after consecutive losses. Many successful prop firm traders use a "3-strike rule" — after 3 losses in a day, they close the platform. Journaling immediately after a loss (before the next trade) forces a pause and engages the analytical brain, interrupting the emotional spiral.</p>
    `
  },
  {
    slug: 'tilt',
    title: 'Tilt',
    shortDefinition: 'A state of emotional frustration where a trader abandons rational decision-making, often triggered by a string of losses or a single large loss.',
    category: 'Trading Psychology',
    relatedTerms: ['revenge-trading', 'loss-aversion', 'overtrading'],
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
    updatedAt: '2026-09-20',
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
    shortDefinition: 'The peak-to-trough decline in your trading account, measured as a percentage or dollar amount from the highest point to the lowest point before a new high.',
    category: 'Risk Management',
    relatedTerms: ['daily-drawdown-limit', 'overall-drawdown-limit', 'equity-curve'],
    guide: { href: '/blogs/daily-drawdown-calculator', label: 'See how to track a daily drawdown buffer' },
    proplogConnection: 'PropLogAI automatically calculates your drawdown on the dashboard and P&L calendar. The AI coach analyzes your drawdown patterns and identifies which behaviors precede your deepest drawdowns.',
    fullContent: `
      <h3>What is Drawdown?</h3>
      <p>Drawdown measures how much your account has declined from its peak value before recovering. If your account grows from $100,000 to $108,000 and then drops to $104,000, your drawdown is $4,000 or 3.7% (from the $108,000 peak). It's the most important risk metric for prop firm traders because most challenges have strict drawdown limits.</p>
      <h3>Types of Drawdown</h3>
      <ul>
        <li><strong>Absolute drawdown:</strong> The decline from your initial balance — relevant for overall drawdown limits</li>
        <li><strong>Relative (trailing) drawdown:</strong> The decline from your highest equity point — used by many prop firms as a trailing maximum</li>
        <li><strong>Daily drawdown:</strong> A firm-defined daily loss limit whose percentage, reference value, and reset method vary by program</li>
      </ul>
      <h3>Managing Drawdown</h3>
      <p>The key to surviving prop firm drawdown rules is position sizing. If your maximum daily drawdown is 5% ($5,000 on a $100K account) and you risk 1% per trade, you can absorb 5 consecutive losing trades before hitting the limit. If you risk 2%, only 2.5 losses will breach it. Conservative position sizing isn't timid — it's mathematical survival.</p>
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
    `
  },
  {
    slug: 'expectancy',
    title: 'Expectancy',
    shortDefinition: 'The average amount you can expect to win or lose per trade, combining your win rate with your average win and average loss sizes.',
    category: 'Performance Metrics',
    relatedTerms: ['win-rate', 'profit-factor', 'risk-reward-ratio'],
    proplogConnection: 'PropLogAI computes your expectancy per trade and per setup, showing you exactly which trading patterns have positive expectancy and which are costing you money.',
    fullContent: `
      <h3>What is Expectancy?</h3>
      <p>Expectancy tells you how much you can expect to make (or lose) on average per trade. The formula is: <strong>Expectancy = (Win Rate × Average Win) - (Loss Rate × Average Loss)</strong>. A positive expectancy means your strategy makes money over time; negative means it loses.</p>
      <p>Example: If your win rate is 55%, average win is $800, and average loss is $500: Expectancy = (0.55 × $800) - (0.45 × $500) = $440 - $225 = $215 per trade. On average, every trade you take is worth $215.</p>
      <h3>Why Expectancy is the Most Important Metric</h3>
      <p>Expectancy is the only metric that directly answers the question "Is my trading strategy profitable?" Win rate doesn't account for trade sizes. Risk-reward doesn't account for frequency. Expectancy combines everything into a single, actionable number.</p>
      <ul>
        <li><strong>Positive expectancy + enough trades = profit.</strong> This is the fundamental equation of trading</li>
        <li><strong>Negative expectancy + any number of trades = loss.</strong> No amount of trading volume fixes a losing strategy</li>
        <li><strong>Break it down by setup:</strong> Your overall expectancy might be positive, but some setups could have negative expectancy — dragging down your total</li>
      </ul>
    `
  },
  {
    slug: 'sharpe-ratio',
    title: 'Sharpe Ratio',
    shortDefinition: 'A measure of risk-adjusted returns that compares your trading profits to their volatility. Higher Sharpe ratios indicate more consistent performance.',
    category: 'Performance Metrics',
    relatedTerms: ['equity-curve', 'drawdown', 'profit-factor'],
    proplogConnection: 'PropLogAI helps you evaluate consistency over time. The AI coach focuses on steadying your equity curve rather than just maximizing raw profits.',
    fullContent: `
      <h3>What is Sharpe Ratio?</h3>
      <p>The Sharpe ratio measures how much return you earn for each unit of risk you take. It's calculated as: <strong>(Average Return - Risk-Free Rate) / Standard Deviation of Returns</strong>. In simpler terms, it rewards consistency — two traders making the same total profit, but one does it steadily while the other swings wildly, will have very different Sharpe ratios.</p>
      <h3>Why Consistency Matters for Prop Firms</h3>
      <p>Many prop firms have consistency rules that effectively demand a minimum Sharpe-like performance. They don't want a trader who makes $10,000 in one day and loses $9,000 the next — even though the net is positive. A high Sharpe ratio means your P&L curve is smooth and predictable.</p>
      <ul>
        <li><strong>Below 0.5:</strong> Poor risk-adjusted returns — high volatility relative to profit</li>
        <li><strong>0.5 - 1.0:</strong> Acceptable for most prop firm evaluations</li>
        <li><strong>1.0 - 2.0:</strong> Good — consistent profitability with controlled risk</li>
        <li><strong>Above 2.0:</strong> Excellent — very smooth equity curve</li>
      </ul>
      <h3>Improving Your Sharpe Ratio</h3>
      <p>To improve your Sharpe ratio, focus on reducing the volatility of your daily returns rather than maximizing your best days. Consistent 0.5% daily gains produce a better Sharpe ratio than alternating between +3% and -2% days, even though the latter might produce more total profit.</p>
    `
  },
  {
    slug: 'average-win-vs-average-loss',
    title: 'Average Win vs Average Loss',
    shortDefinition: 'The comparison between the average dollar amount of your winning trades versus your losing trades, revealing whether your winners outsize your losers.',
    category: 'Performance Metrics',
    relatedTerms: ['profit-factor', 'expectancy', 'risk-reward-ratio'],
    proplogConnection: 'PropLogAI calculates your average win and loss sizes and tracks them over time. The AI coach identifies if loss aversion is causing you to cut winners short.',
    fullContent: `
      <h3>What is Average Win vs Average Loss?</h3>
      <p>This metric compares the average size of your profitable trades against the average size of your losing trades. If your average winner is $600 and your average loser is $400, your win/loss ratio is 1.5:1. It directly reflects your trade management — how you handle entries, exits, and stop losses.</p>
      <h3>Reading the Ratio</h3>
      <ul>
        <li><strong>Average win > average loss (ratio above 1:1):</strong> Your winners outsize your losers — you can be profitable even with a sub-50% win rate</li>
        <li><strong>Average win = average loss (ratio near 1:1):</strong> You need a win rate above 50% to make money</li>
        <li><strong>Average win < average loss (ratio below 1:1):</strong> Your losers are bigger than your winners — you need a very high win rate to compensate</li>
      </ul>
      <h3>Common Problem: Asymmetric Exits</h3>
      <p>The most common pattern among struggling traders is an average win significantly smaller than their average loss. This happens because of loss aversion — they grab profits quickly (fear of losing the gain) but let losses run (hope of recovery). If your ratio is below 1:1, your exit strategy needs work before your entry strategy.</p>
    `
  },
  {
    slug: 'equity-curve',
    title: 'Equity Curve',
    shortDefinition: 'A graph plotting your account balance over time, showing the trajectory of your trading performance including all wins, losses, and drawdowns.',
    category: 'Performance Metrics',
    relatedTerms: ['drawdown', 'sharpe-ratio', 'profit-factor'],
    proplogConnection: 'PropLogAI generates your equity curve from trade history and overlays it with emotional data, showing you how psychology impacts your account growth.',
    fullContent: `
      <h3>What is an Equity Curve?</h3>
      <p>An equity curve is a visual representation of your account balance plotted against time or trade number. A healthy equity curve trends upward with shallow, short-lived dips. An unhealthy one shows sharp drops, extended flat periods, or a downward trend. It's the most honest picture of your trading — you can't argue with the line.</p>
      <h3>Reading Your Equity Curve</h3>
      <ul>
        <li><strong>Smooth upward slope:</strong> Consistent edge with good risk management</li>
        <li><strong>Staircase pattern:</strong> Winning streaks followed by flat periods — common with trend-following strategies</li>
        <li><strong>Spiky/volatile:</strong> Inconsistent sizing or strategy — high Sharpe ratio concern</li>
        <li><strong>Sharp drops:</strong> Overleveraging or failed risk management events</li>
      </ul>
      <h3>Equity Curve for Prop Firm Traders</h3>
      <p>Prop firms essentially evaluate your equity curve. They want to see a smooth, upward-trending line that stays within drawdown limits. The ideal prop firm equity curve rises gradually without any single day contributing more than 20-30% of total profits — this demonstrates edge-based trading rather than gambling on a few big trades.</p>
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
    shortDefinition: 'Taking more trades than your strategy calls for, driven by boredom, greed, or the belief that more trades equals more profit.',
    category: 'Trading Discipline',
    relatedTerms: ['fomo', 'revenge-trading', 'trading-plan'],
    guide: { href: '/blogs/overtrading-prop-firm-challenges', label: 'Review overtrading patterns in prop firm challenges' },
    proplogConnection: 'PropLogAI counts your daily trade frequency and the AI coach identifies when you are overtrading compared to your normal baseline, especially on losing days.',
    fullContent: `
      <h3>What is Overtrading?</h3>
      <p>Overtrading means taking more trades than your strategy justifies. It can manifest as excessive frequency (20 trades when your strategy typically produces 3-5 setups per day), excessive size (risking too much of your account on a single trade), or trading outside your defined markets and sessions.</p>
      <h3>Common Triggers</h3>
      <ul>
        <li><strong>Boredom:</strong> Sitting in front of charts with no valid setup, so you create one that isn't really there</li>
        <li><strong>Revenge:</strong> After a loss, taking rapid-fire trades to recover</li>
        <li><strong>Greed:</strong> After a win, feeling like you can keep going and bank more</li>
        <li><strong>Commission blindness:</strong> Not accounting for the cumulative cost of frequent trades</li>
      </ul>
      <h3>The Hidden Cost</h3>
      <p>Overtrading doesn't just risk more capital — it degrades the quality of each trade. Your best setups are rare by definition. The 4th, 5th, and 6th trades of the day are almost always lower quality than the 1st and 2nd. Many prop firm traders find that their profitability increases when they impose a maximum trade count per day, even though it feels counterintuitive to trade less.</p>
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
    updatedAt: '2026-09-20',
    relatedTerms: ['funded-account', 'profit-target', 'daily-drawdown-limit'],
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
    `
  },
  {
    slug: 'overall-drawdown-limit',
    title: 'Overall Drawdown Limit',
    shortDefinition: 'A program rule that sets the lowest permitted account value, using a fixed or moving reference defined by the firm.',
    category: 'Prop Firm',
    updatedAt: '2026-09-20',
    relatedTerms: ['daily-drawdown-limit', 'drawdown', 'prop-firm-challenge'],
    guide: { href: '/blogs/daily-drawdown-calculator', label: 'Compare daily and overall drawdown tracking' },
    sourceIds: ['PFR-003', 'PFR-005', 'PFR-008', 'PLAI-004'],
    sources: [
      { id: 'PFR-003', label: 'FTMO trading objectives', url: 'https://ftmo.com/en/trading-objectives/', checkedOn: '2026-09-19' },
      { id: 'PFR-008', label: 'FundedNext maximum loss calculation', url: 'https://help.fundednext.com/en/articles/8019812-how-can-i-calculate-the-maximum-loss-limit', checkedOn: '2026-09-19' },
      { id: 'PLAI-004', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-19' },
    ],
    proplogConnection: 'PropLogAI provides a P&L calendar from logged data. Use it as a review aid, and use the firm’s platform and current rules for the official limit calculation.',
    fullContent: `
      <h3>What is an Overall Drawdown Limit?</h3>
      <p>An overall drawdown or maximum-loss limit defines a floor that account equity must not cross. The source amount, percentage, update schedule, and treatment of open P&amp;L depend on the named program.</p>
      <h3>Fixed and Moving Floors</h3>
      <ul>
        <li><strong>Static:</strong> The floor stays tied to a stated reference such as initial simulated capital.</li>
        <li><strong>Trailing:</strong> The floor can move after gains according to a defined balance or equity rule.</li>
        <li><strong>End-of-day trailing:</strong> A firm may update the floor at a daily checkpoint instead of on every price change.</li>
      </ul>
      <h3>Named Examples</h3>
      <p>FTMO's checked objectives describe a static 10% Maximum Loss amount for 2-Step and an end-of-day trailing 10% amount for 1-Step. FundedNext's checked page lists a 10% Maximum Loss limit for Stellar 2-Step. The matching percentages do not make the calculation methods identical.</p>
      <h3>Calculation Checklist</h3>
      <p>Confirm the program name, reference value, reset or update time, open P&amp;L treatment, commissions, swaps, and what happens after a reward. A simplified example must state all of those assumptions.</p>
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
    shortDefinition: 'A program-specific rule that compares the best profit day with a defined total-profit or target figure.',
    category: 'Prop Firm',
    updatedAt: '2026-09-20',
    guide: { href: '/blogs/prop-firm-consistency-calculator', label: 'Work through the consistency calculation and its limits' },
    relatedTerms: ['sharpe-ratio', 'profit-target', 'funded-account'],
    sourceIds: ['PFR-010', 'PFR-011', 'PLAI-004'],
    sources: [
      { id: 'PFR-010', label: 'Topstep consistency rules', url: 'https://help.topstep.com/en/articles/8284208-consistency-at-topstep', checkedOn: '2026-09-19' },
      { id: 'PLAI-004', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-19' },
    ],
    proplogConnection: 'PropLogAI provides a P&L calendar from logged trades. Use those entries to review daily distribution, but calculate compliance from the firm’s exact current formula and official account figures.',
    fullContent: `
      <h3>What is the Consistency Rule?</h3>
      <p>A consistency rule measures how concentrated a result is in one trading day. The denominator, threshold, consequence, timing, and account stage differ by program. It is not safe to assume one percentage applies across firms.</p>
      <h3>Common Formula Shape</h3>
      <p><strong>Consistency percentage = best profit day ÷ the program's defined total × 100.</strong> The “defined total” may be total net profit or a profit target, so copy the denominator from the official rule.</p>
      <h3>Topstep Examples</h3>
      <ul>
        <li><strong>Trading Combine:</strong> The checked page uses a 55% Consistency Target and says the profit target increases when the best day is above the limit.</li>
        <li><strong>Express Funded Account Consistency path:</strong> The checked page uses 40% or below for payout eligibility.</li>
      </ul>
      <h3>Check Before Calculating</h3>
      <p>Confirm the program, account stage, timezone, included days, treatment of losses, and whether the result changes a target or blocks a payout. Consistency is a contractual calculation, not proof that a strategy will perform in the future.</p>
    `
  },
  {
    slug: 'daily-drawdown-limit',
    title: 'Daily Drawdown Limit',
    aliases: ['Maximum Daily Loss'],
    shortDefinition: 'A prop firm rule that sets the lowest permitted account value during a defined trading day.',
    category: 'Prop Firm',
    updatedAt: '2026-09-20',
    relatedTerms: ['overall-drawdown-limit', 'drawdown', 'risk-per-trade'],
    guide: { href: '/blogs/daily-drawdown-calculator', label: 'Calculate and review a daily drawdown buffer' },
    sourceIds: ['PFR-002', 'PFR-006', 'PFR-007', 'PLAI-004'],
    sources: [
      { id: 'PFR-002', label: 'FTMO trading objectives', url: 'https://ftmo.com/en/trading-objectives/', checkedOn: '2026-09-19' },
      { id: 'PFR-006', label: 'FundedNext maximum daily loss', url: 'https://help.fundednext.com/en/articles/8019914-what-is-the-maximum-daily-loss-limit', checkedOn: '2026-09-19' },
      { id: 'PLAI-004', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-19' },
    ],
    proplogConnection: 'PropLogAI provides a P&L calendar from logged trades. It is a review aid; the firm’s platform and current rule page remain the source for the official daily-loss figure.',
    fullContent: `
      <h3>What is a Daily Drawdown Limit?</h3>
      <p>A daily drawdown limit, also called maximum daily loss by some firms, defines a daily account floor. A breach and its consequence are determined by the named program's contract. The reset time, reference value, and included costs can materially change the answer.</p>
      <h3>Calculation Inputs</h3>
      <ul>
        <li><strong>Reference:</strong> Initial simulated capital, start-of-day balance, or another stated amount.</li>
        <li><strong>Current value:</strong> Balance or equity, with the firm's treatment of open P&amp;L.</li>
        <li><strong>Costs:</strong> Commissions and swaps may be included.</li>
        <li><strong>Reset:</strong> The firm defines the timezone and daily checkpoint.</li>
      </ul>
      <h3>Named Examples</h3>
      <p>FTMO's checked 2-Step objectives use a 5% Maximum Daily Loss amount based on initial simulated capital and recalculate the limit at 00:00 CE(S)T; the calculation includes open P&amp;L, swaps, and commissions. FundedNext's checked page lists 5% for Stellar 2-Step and 3% for Stellar 1-Step and counts running plus closed loss.</p>
      <h3>Use the Exact Rule</h3>
      <p>Do not substitute a generic percentage or another firm's formula. Confirm the program and calculate against the official figures displayed for that account.</p>
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
    shortDefinition: 'The practice of logging your emotional state alongside each trade to identify how feelings like fear, greed, and frustration impact your trading outcomes.',
    category: 'Journal & Analysis',
    relatedTerms: ['trading-journal', 'tilt', 'fomo'],
    proplogConnection: 'PropLogAI has built-in emotion tagging with violet badges. Tag each trade with your emotional state and the AI coach correlates emotions with performance — showing you which emotions cost you money.',
    fullContent: `
      <h3>What is Emotion Tracking?</h3>
      <p>Emotion tracking means recording how you feel before and during each trade — not after, when hindsight colors your memory. The goal is to build a dataset that connects your emotional states to your trading outcomes, revealing patterns you can't see in real-time.</p>
      <h3>Common Trading Emotions to Track</h3>
      <ul>
        <li><strong>Confident:</strong> Clear-headed, plan is clear, executing calmly</li>
        <li><strong>Anxious:</strong> Uncertain about the trade, worried about loss</li>
        <li><strong>Greedy:</strong> Wanting more, increasing size, taking extra trades</li>
        <li><strong>FOMO:</strong> Rushing to enter because the market is moving</li>
        <li><strong>Frustrated:</strong> Angry about recent losses, feeling impatient</li>
        <li><strong>Bored:</strong> No setups available, trading for entertainment</li>
        <li><strong>Revenge:</strong> Trying to win back a loss immediately</li>
      </ul>
      <h3>What the Data Reveals</h3>
      <p>After 30-50 tagged trades, patterns emerge that are genuinely surprising. A trader might discover that trades tagged "bored" have a 22% win rate versus 61% overall. Or that "confident" trades have the highest win rate but also the largest average loss (because confidence leads to larger position sizes). These insights are impossible to access without systematic tracking.</p>
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
