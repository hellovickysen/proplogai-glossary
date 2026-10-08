// Page-level revision date for the shared glossary data and template.
// It is not a reconstructed publication date or a factual-review claim.
export const glossaryPageUpdatedAt = '2026-09-21';

export const glossaryTerms = [
  // ─── Trading Psychology (6) ───
  {
    slug: 'fomo',
    title: 'FOMO (Fear of Missing Out)',
    shortDefinition: 'FOMO in trading is the pressure to enter because a move appears to be leaving without you, even though part of your written plan is incomplete or has changed.',
    category: 'Trading Psychology',
    updatedAt: '2026-10-05',
    relatedTerms: ['revenge-trading', 'overtrading', 'confirmation-bias'],
    sourceIds: ['RES-012', 'PLAI-002', 'PLAI-005'],
    sources: [
      { id: 'RES-012', label: 'Investor.gov — Protect Your Money', url: 'https://www.investor.gov/protect-your-investments/fraud/protect-your-money', checkedOn: '2026-10-05' },
      { id: 'PLAI-002/005', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    visualNote: {
      src: '/glossary/images/fomo-plan-vs-urge-note.webp',
      alt: 'Handwritten comparison of a planned XAUUSD breakout and retest with a FOMO urge after price has already moved, followed by checks for entry, confirmation, stop, size, and reason',
      caption: 'Compare the written plan with the decision you are considering now. The result comes later and does not change whether the entry followed the plan.',
      label: 'Open the FOMO plan-versus-urge learning note at a larger size',
    },
    guide: { href: '/blogs/how-emotions-affect-trading-decisions', label: 'See how emotions can change a trading decision' },
    proplogConnection: 'PropLogAI lets you record an emotion tag and whether you followed your own rules. This gives you a record to review; it does not diagnose FOMO or prevent an entry.',
    fullContent: `
      <h3>What is FOMO in Trading?</h3>
      <p>FOMO means Fear of Missing Out. In trading, it is the pressure to enter because price is already moving and you feel your chance may disappear. The pressure is the key part. The trade result does not tell you whether the decision followed your plan.</p>

      <h3>Simple XAUUSD London-Session Example</h3>
      <p>Before the London session, you write: <strong>wait for an XAUUSD breakout, then wait for a retest and confirmation before entering</strong>.</p>
      <p>A large breakout candle appears, but the retest has not happened. You think, “If I wait, I may miss the move,” and consider entering immediately. That pressure may be FOMO because the decision is moving away from the conditions you wrote before the candle appeared.</p>
      <p>The immediate entry might win or lose. A win does not turn it into a planned entry. A loss does not prove that every similar entry is FOMO. Compare the decision with the written plan.</p>

      <h3>What Changed Between the Plan and the Entry?</h3>
      <ol>
        <li><strong>Entry:</strong> Are you entering at the level you planned, or after price has already moved?</li>
        <li><strong>Confirmation:</strong> Did the retest and confirmation happen, or are you entering before them?</li>
        <li><strong>Stop:</strong> Is the stop still at the planned level?</li>
        <li><strong>Size:</strong> Are you using the same sizing method?</li>
        <li><strong>Reason:</strong> Is the setup still the reason, or is the fear of missing the move now the reason?</li>
      </ol>

      <h3>Use One Pause-and-Record Question</h3>
      <p><strong>What changed between my plan and this entry?</strong></p>
      <p>Write the answer before making the next decision. You do not need to prove that you feel calm. You need to see whether the entry, confirmation, stop, size, or reason changed.</p>

      <h3>FOMO, Revenge Trading, and Overtrading Are Different</h3>
      <p><a href="/glossary/revenge-trading">Revenge trading</a> is centred on recovering a previous loss. <a href="/glossary/overtrading">Overtrading</a> means drifting from your planned trading process, such as taking repeated entries or trading outside your chosen session. FOMO is the pressure to act because a move appears to be leaving without you. These patterns can overlap, but they do not mean the same thing.</p>

      <h3>Review the Decision, Not Only the Result</h3>
      <p>Use the guide on <a href="/blogs/how-emotions-affect-trading-decisions">how emotions affect trading decisions</a> to review what you saw, what you felt, and what changed. The broader <a href="/blogs/trading-psychology-prop-firm">trading psychology guide</a> explains how this record fits into a repeatable review process.</p>
    `
  },
  {
    slug: 'revenge-trading',
    title: 'Revenge Trading',
    shortDefinition: 'Revenge trading is a post-loss decision pattern in which recovering the lost money becomes the purpose of the next trade and part of the written plan changes or is ignored.',
    category: 'Trading Psychology',
    updatedAt: '2026-10-08',
    relatedTerms: ['tilt', 'fomo', 'overtrading'],
    sourceIds: ['RES-001', 'RES-009', 'RES-010', 'RES-011', 'RES-022', 'RES-024', 'RES-025', 'PLAI-002', 'PLAI-005'],
    sources: [
      { id: 'RES-001', label: 'Kahneman and Tversky — Prospect Theory (1979)', url: 'https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Behavioral_Decision_Theory/Kahneman_Tversky_1979_Prospect_theory.pdf', checkedOn: '2026-10-05' },
      { id: 'RES-009', label: 'Zerodha Varsity — Controlling your trading emotions', url: 'https://zerodha.com/varsity/chapter/controlling-your-trading-emotions/', checkedOn: '2026-09-25' },
      { id: 'RES-010', label: 'OANDA — Understanding emotions in trading', url: 'https://www.oanda.com/us-en/skills-and-insights/education/trading-psychology/emotions-in-trading/trading-psychology-understanding-your-emotions/', checkedOn: '2026-09-25' },
      { id: 'RES-011', label: 'Zerodha Varsity — Your trading checklist', url: 'https://zerodha.com/varsity/chapter/your-trading-checklist/', checkedOn: '2026-10-04' },
      { id: 'RES-022', label: 'IG — Trading journal records and review', url: 'https://www.ig.com/uk/learn-to-trade/ig-academy/tools-for-traders/important-metrics?source=dailyfx', checkedOn: '2026-10-06' },
      { id: 'RES-024', label: 'NIST — Correlation does not prove causation', url: 'https://www.itl.nist.gov/div898/handbook/ppc/section1/ppc136.htm', checkedOn: '2026-10-06' },
      { id: 'RES-025', label: 'IG — What is a trading plan?', url: 'https://www.ig.com/en/ig-academy/planning-and-risk-management/what-is-a-trading-plan', checkedOn: '2026-10-06' },
      { id: 'PLAI-002', label: 'PropLogAI — Manual trading journal', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
      { id: 'PLAI-005', label: 'PropLogAI — Rule and emotion records', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    visual: 'revenge-trading-full-check',
    guide: { href: '/blogs/revenge-trading-prop-firm', label: 'Review a practical revenge-trading interruption workflow' },
    proplogConnection: 'PropLogAI lets you manually record trade details, emotions, rule adherence, notes, screenshots and P&L. It can help organise records for later review; it does not detect revenge trading in real time, stop an order or guarantee that the behaviour ends.',
    fullContent: `
      <h3>What is revenge trading?</h3>
      <p>Revenge trading is a post-loss decision pattern. Recovering the lost money becomes the purpose of the next trade, and part of the <a href="/glossary/trading-plan">trading plan</a> changes or is ignored.</p>
      <p>Another trade after a loss is not automatically revenge trading. Check whether the setup, confirmation, session, sizing method or reason changed because the purpose became “make the money back.”</p>

      <h3>A fictional XAUUSD example</h3>
      <p>You take a planned XAUUSD trade during the London session after price moves beyond the Asian range and returns, followed by a confirmed breakout. The trade follows your rules and ends at <strong>−$50</strong>.</p>
      <p>Three minutes later, price reverses. You want to enter before a fresh breakout candle closes and use a bigger size to recover the <strong>$50</strong>. The possible revenge pattern is not the second trade itself. It is the change in confirmation, size and reason.</p>
      <p>This is a fictional teaching example, not a live setup or signal.</p>

      <h3>What should you check?</h3>
      <ol>
        <li><strong>Setup:</strong> is there a completely new setup that meets the same written conditions?</li>
        <li><strong>Confirmation:</strong> did the required candle close or checklist finish?</li>
        <li><strong>Session:</strong> are you still inside the time window written in your plan?</li>
        <li><strong>Size:</strong> are you using the same documented sizing method?</li>
        <li><strong>Reason:</strong> would you take this exact trade if the previous result were <strong>$0</strong>?</li>
      </ol>
      <p>If the new decision passes the same checks, the fact that it follows a loss does not prove revenge trading. <a href="/glossary/setup-compliance">Setup compliance</a> can help you compare the new decision with the conditions written before entry.</p>

      <h3>Revenge trading, tilt and overtrading are different</h3>
      <p><a href="/glossary/tilt">Tilt</a> is a broader state where frustration or pressure appears beside a process change. <a href="/glossary/overtrading">Overtrading</a> is a wider move away from the written process, such as repeated entries or trading outside the planned session. Revenge trading is the narrower pattern centred on recovering a recent loss.</p>

      <h3>What happens next?</h3>
      <p>There is no universal waiting time, loss count or risk percentage that fits every trader. Follow the loss-response rule written before the session and the current rules for your exact prop-firm program and account stage.</p>
      <p>Record the previous result, the urge you noticed, setup, confirmation, size method, reason and final decision. An <a href="/glossary/emotion-tracking">emotion record</a> adds context. A <a href="/glossary/trading-journal">trading journal</a> preserves the wider evidence, and a <a href="/glossary/trade-review">trade review</a> compares several similar decisions without guessing the cause.</p>

      <h3>What should you do next?</h3>
      <p>Before the next entry, ask: <strong>Would I take this same setup, with the same confirmation and size, if the previous result were $0?</strong></p>
      <p>The <a href="/blogs/revenge-trading-prop-firm">revenge-trading guide</a> gives the full post-loss workflow. Use the <a href="/blogs/trading-psychology-prop-firm">trading psychology guide</a> for the wider behaviour system.</p>
    `
  },
  {
    slug: 'tilt',
    title: 'Tilt in Trading',
    updatedAt: '2026-10-08',
    shortDefinition: 'Tilt in trading is a period when frustration, anger or pressure appears beside a change from the process written before the decision.',
    category: 'Trading Psychology',
    relatedTerms: ['revenge-trading', 'fomo', 'emotion-tracking', 'setup-compliance'],
    guide: { href: '/blogs/revenge-trading-prop-firm', label: 'Compare tilt with a revenge-trading decision after a loss' },
    sourceIds: ['RES-009', 'RES-010', 'RES-011', 'RES-022', 'RES-024', 'PLAI-002', 'PLAI-005'],
    sources: [
      { id: 'RES-009', label: 'Zerodha Varsity — Controlling trading emotions', url: 'https://zerodha.com/varsity/chapter/controlling-your-trading-emotions/', checkedOn: '2026-09-25' },
      { id: 'RES-010', label: 'OANDA — Understanding emotions in trading', url: 'https://www.oanda.com/us-en/skills-and-insights/education/trading-psychology/emotions-in-trading/trading-psychology-understanding-your-emotions/', checkedOn: '2026-09-25' },
      { id: 'RES-011', label: 'Zerodha Varsity — Your trading checklist', url: 'https://zerodha.com/varsity/chapter/your-trading-checklist/', checkedOn: '2026-10-04' },
      { id: 'RES-022', label: 'IG — Trading journal records and review', url: 'https://www.ig.com/uk/learn-to-trade/ig-academy/tools-for-traders/important-metrics?source=dailyfx', checkedOn: '2026-10-06' },
      { id: 'RES-024', label: 'NIST — Correlation does not prove causation', url: 'https://www.itl.nist.gov/div898/handbook/ppc/section1/ppc136.htm', checkedOn: '2026-10-06' },
      { id: 'PLAI-002', label: 'PropLogAI — Manual trading journal', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
      { id: 'PLAI-005', label: 'PropLogAI — Rule and emotion records', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    visualNote: {
      src: '/glossary/images/tilt-feeling-decision-note.webp',
      alt: 'Handwritten XAUUSD learning note comparing the original London-session rule with a frustrated feeling, missing retest confirmation and changed USD size',
      caption: 'Record the feeling and the decision change as separate facts. The record does not prove that one caused the other. Click or tap to enlarge.',
      label: 'Open the tilt feeling-and-decision learning note at a larger size',
    },
    proplogConnection: 'PropLogAI lets you manually record an emotion tag, trade notes, screenshots and whether you followed your own rules. The record can support a later comparison; it does not diagnose tilt or prove what caused a result.',
    fullContent: `
      <h3>What does tilt mean in trading?</h3>
      <p>Tilt in trading is a period when frustration, anger or pressure appears beside a change from the process you wrote before the decision. The useful evidence is the feeling you recorded, the original rule and the action that changed.</p>
      <p>One loss, one emotion tag or one imperfect trade does not prove that you were on tilt. A record can show what happened together; it cannot by itself prove what caused the result.</p>

      <h3>A fictional XAUUSD example</h3>
      <p>Imagine you are trading XAUUSD during your planned London session.</p>
      <ol>
        <li>Your first breakout attempt loses, and you record <strong>frustrated</strong>.</li>
        <li>Your <a href="/glossary/trading-plan">trading plan</a> says to wait for a break and retest of the Asian high.</li>
        <li>The next idea has no planned retest confirmation.</li>
        <li>You enter anyway and change the USD size written in your plan.</li>
      </ol>
      <p>The review can say: <strong>frustrated + confirmation missing + size changed</strong>. It should not say that frustration caused the trade or the result. This is a fictional teaching example, not a signal.</p>

      <h3>Tilt, revenge trading and FOMO are different</h3>
      <ul>
        <li><strong>Tilt:</strong> pressure or frustration appears beside a broader process change.</li>
        <li><strong><a href="/glossary/revenge-trading">Revenge trading:</a></strong> recovering a recent loss becomes the purpose of the next decision.</li>
        <li><strong><a href="/glossary/fomo">FOMO:</a></strong> urgency appears because a move seems to be leaving without you.</li>
      </ul>
      <p>The same record may contain more than one label, but do not treat one label as proof of another.</p>

      <h3>What should you record?</h3>
      <ol>
        <li><strong>Feeling and time:</strong> what you noticed and when you noticed it.</li>
        <li><strong>Original rule:</strong> the setup, confirmation, session and sizing words written before entry.</li>
        <li><strong>Actual action and reason:</strong> what you did and the reason you recorded at that time.</li>
      </ol>
      <p>An <a href="/glossary/emotion-tracking">emotion tag</a> gives context. A <a href="/glossary/trading-journal">trading journal</a> preserves the wider record, and a <a href="/glossary/trade-review">trade review</a> compares the decision with the original plan.</p>

      <h3>What can you do when you notice the change?</h3>
      <p>Use the pause or no-trade condition already written in your own plan. If you do not have one, write a condition that is clear enough to check later. A fixed break length, loss count or risk percentage is not suitable for every trader.</p>
      <p><a href="/glossary/rule-based-trading">Rule-based trading</a> explains how predefined conditions guide a decision. <a href="/glossary/setup-compliance">Setup compliance</a> checks later whether the recorded action matched those words.</p>

      <h3>What should you do next?</h3>
      <p>Choose one pressured decision. Place it beside the original plan and describe what changed without judging the decision only by profit or loss.</p>
      <p>The <a href="/blogs/revenge-trading-prop-firm">revenge-trading guide</a> gives a practical post-loss review. Use the <a href="/blogs/trading-psychology-prop-firm">trading psychology guide</a> for the wider behaviour system.</p>
    `
  },
  {
    slug: 'confirmation-bias',
    title: 'Confirmation Bias in Trading',
    updatedAt: '2026-10-08',
    shortDefinition: 'Confirmation bias in trading is the tendency to search for, notice or interpret information in a way that supports an existing trade idea.',
    category: 'Trading Psychology',
    relatedTerms: ['trading-plan', 'rule-based-trading', 'setup-compliance', 'trading-journal'],
    guide: { href: '/blogs/trading-discipline-checklist', label: 'Use a pre-entry checklist to place the idea beside its conditions' },
    sourceIds: ['RES-011', 'RES-022', 'RES-024', 'RES-026', 'PLAI-002', 'PLAI-005'],
    sources: [
      { id: 'RES-026', label: 'NIST — Confirmation bias definition', url: 'https://www.nist.gov/glossary-term/36676', checkedOn: '2026-10-08' },
      { id: 'RES-011', label: 'Zerodha Varsity — Your trading checklist', url: 'https://zerodha.com/varsity/chapter/your-trading-checklist/', checkedOn: '2026-10-04' },
      { id: 'RES-022', label: 'IG — Trading journal records and review', url: 'https://www.ig.com/uk/learn-to-trade/ig-academy/tools-for-traders/important-metrics?source=dailyfx', checkedOn: '2026-10-06' },
      { id: 'RES-024', label: 'NIST — Correlation does not prove causation', url: 'https://www.itl.nist.gov/div898/handbook/ppc/section1/ppc136.htm', checkedOn: '2026-10-06' },
      { id: 'PLAI-002', label: 'PropLogAI — Manual trading journal', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
      { id: 'PLAI-005', label: 'PropLogAI — Rule and emotion records', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    visualNote: {
      src: '/glossary/images/confirmation-bias-idea-evidence-note.webp',
      alt: 'Handwritten XAUUSD learning note placing an Asian-high breakout idea beside required candle-close and retest evidence, invalidation and the actual record',
      caption: 'Place the idea, required evidence and invalidation beside the actual record. Click or tap to enlarge.',
      label: 'Open the confirmation-bias idea-and-evidence learning note at a larger size',
    },
    proplogConnection: 'PropLogAI lets you manually save the trade idea, notes, screenshots and whether you followed your own rules. It can organise those records for review; it does not decide which market view is correct or diagnose confirmation bias.',
    fullContent: `
      <h3>What is confirmation bias in trading?</h3>
      <p>Confirmation bias in trading is the tendency to search for, notice or interpret information in a way that supports an existing trade idea. The practical check is to keep your idea, required evidence and invalidation separate.</p>
      <p>Having a bullish or bearish idea does not automatically mean you have confirmation bias. Ask whether you checked the conditions written before the decision, including what would make the setup invalid.</p>

      <h3>A fictional XAUUSD example</h3>
      <p>Imagine your idea is: <strong>XAUUSD may break above the Asian high during the London session.</strong></p>
      <ol>
        <li><strong>Evidence required:</strong> a candle closes above the level and the planned retest confirms.</li>
        <li><strong>Invalidation before entry:</strong> price closes back below the level.</li>
        <li><strong>Actual record:</strong> price makes a wick above the high, but there is no close above it and the retest fails.</li>
        <li><strong>Review:</strong> the recorded entry did not meet the written setup.</li>
      </ol>
      <p>The trade could still finish in profit. A winning result does not fill a missing condition. This is a fictional teaching example, not a market view or signal.</p>

      <h3>Use three simple questions</h3>
      <ol>
        <li><strong>What is my idea?</strong> Write the direction or scenario in plain words.</li>
        <li><strong>What evidence is required?</strong> Use the conditions in your <a href="/glossary/trading-plan">trading plan</a>.</li>
        <li><strong>What would invalidate it?</strong> Write this before entry so you do not change it after seeing price move.</li>
      </ol>
      <p>This is a neutral check. You do not need to add a random opposing indicator or another person's opinion. <a href="/glossary/rule-based-trading">Rule-based trading</a> explains how to make a condition clear enough to apply.</p>

      <h3>What should the record contain?</h3>
      <p>A chart screenshot can preserve what was visible, but the picture still needs the words written before entry. Save the original idea, required evidence, invalidation, actual action and reason.</p>
      <p>A <a href="/glossary/trading-journal">trading journal</a> can preserve those records. Later, <a href="/glossary/setup-compliance">setup compliance</a> and a <a href="/glossary/trade-review">trade review</a> can compare the action with the original conditions. An <a href="/glossary/emotion-tracking">emotion record</a> may add context, but it does not prove what caused the decision.</p>

      <h3>What should you do next?</h3>
      <p>Review one recent trade. Write the evidence that supported the idea, the evidence that conflicted with it and the prewritten condition that decided whether the setup qualified.</p>
      <p>Use the <a href="/blogs/trading-discipline-checklist">trading discipline checklist</a> before a planned entry and the <a href="/blogs/trading-psychology-prop-firm">trading psychology guide</a> for the wider behaviour system.</p>
    `
  },
  {
    slug: 'loss-aversion',
    title: 'Loss Aversion',
    shortDefinition: 'Loss aversion in trading means the fear of a loss or giving back a gain may influence a decision more strongly than an equivalent gain.',
    category: 'Trading Psychology',
    updatedAt: '2026-10-05',
    relatedTerms: ['tilt', 'risk-per-trade', 'stop-loss'],
    guide: { href: '/blogs/how-emotions-affect-trading-decisions', label: 'Review how emotions may affect a trading decision' },
    visualNote: {
      src: '/glossary/images/loss-aversion-check-decision-note.webp',
      alt: 'Handwritten XAUUSD London-session note comparing a written plan with an early exit and three review questions',
      caption: 'Use the questions to review what changed. One trade does not prove a pattern. Click or tap to enlarge.',
      label: 'Open the loss-aversion decision-review learning note at a larger size',
    },
    sourceIds: ['RES-001', 'PLAI-001', 'PLAI-005'],
    sources: [
      { id: 'RES-001', label: 'Kahneman and Tversky — Prospect Theory (1979)', url: 'https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Behavioral_Decision_Theory/Kahneman_Tversky_1979_Prospect_theory.pdf', checkedOn: '2026-10-05' },
      { id: 'PLAI-001', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-10-05' },
    ],
    proplogConnection: 'PropLogAI lets you record emotion tags, planned and actual decisions, and rule adherence. These records can help you compare repeated journal entries, but they cannot diagnose why a decision occurred.',
    fullContent: `
      <h3>What is loss aversion in trading?</h3>
      <p>Loss aversion means the fear of a loss, or the fear of giving back a gain, may affect your decision more strongly than the chance of making an equivalent gain.</p>
      <p>It does not simply mean you dislike losing. It describes how that feeling may change a choice while the result is still uncertain. One trade cannot prove that you have this bias.</p>

      <h3>A simple XAUUSD example</h3>
      <p>Imagine you planned an XAUUSD liquidity-sweep setup during the London session. A liquidity sweep is a quick move through an obvious recent high or low before price turns back. Your written plan says you will wait for the setup and use your planned exit rule.</p>
      <p>The trade moves into profit. You then feel uncomfortable because the price may take some profit back, so you close early. The early exit might be sensible if new market information invalidated the setup. It might also be an emotional change if nothing in your written rule changed. Your journal needs to separate those two possibilities.</p>

      <h3>What should you review?</h3>
      <ol>
        <li><strong>What was the written plan?</strong> Record the setup, planned exit and <a href="/glossary/risk-per-trade">planned USD risk</a> before entry.</li>
        <li><strong>What did you actually do?</strong> Record the real exit and whether you followed the rule.</li>
        <li><strong>What changed?</strong> Write down any new market information separately from the feeling you noticed.</li>
        <li><strong>What reason did you record at the time?</strong> A later explanation can be different from what you felt during the trade.</li>
        <li><strong>Does it repeat?</strong> Compare several similar trades before calling it a pattern.</li>
      </ol>

      <h3>New information or an emotional change?</h3>
      <ul>
        <li><strong>New market information:</strong> your written invalidation or exit rule is triggered.</li>
        <li><strong>Emotional change:</strong> you change the decision because the possible loss or profit give-back feels uncomfortable, without a new rule-based reason.</li>
        <li><strong>Not enough evidence:</strong> you cannot tell from one entry, so you keep recording comparable trades.</li>
      </ul>
      <p>Loss aversion does not mean you should ignore valid new information or hold every trade mechanically. Your <a href="/glossary/stop-loss">stop loss</a> and exit rules remain part of the plan.</p>

      <h3>How to use the idea</h3>
      <p>Treat loss aversion as a review question, not a diagnosis. Look for the same plan-versus-actual change across several comparable trades. The <a href="/blogs/how-emotions-affect-trading-decisions">guide to emotions and trading decisions</a> shows a wider review process, while the <a href="/blogs/trading-psychology-prop-firm">trading psychology guide</a> connects this pattern with other behaviours.</p>
    `
  },
  {
    slug: 'overconfidence',
    title: 'Overconfidence in Trading',
    updatedAt: '2026-10-08',
    shortDefinition: 'Overconfidence in trading is confidence that appears beside a decision to change or ignore a rule written before the trade.',
    category: 'Trading Psychology',
    relatedTerms: ['confirmation-bias', 'position-sizing', 'setup-compliance', 'trading-journal'],
    guide: { href: '/blogs/tracking-trading-emotions', label: 'Use a simple record to review confidence beside a decision change' },
    sourceIds: ['RES-009', 'RES-010', 'RES-011', 'RES-022', 'RES-024', 'RES-025', 'PLAI-002', 'PLAI-005'],
    sources: [
      { id: 'RES-009', label: 'Zerodha Varsity — Controlling trading emotions', url: 'https://zerodha.com/varsity/chapter/controlling-your-trading-emotions/', checkedOn: '2026-09-25' },
      { id: 'RES-010', label: 'OANDA — Understanding emotions in trading', url: 'https://www.oanda.com/us-en/skills-and-insights/education/trading-psychology/emotions-in-trading/trading-psychology-understanding-your-emotions/', checkedOn: '2026-09-25' },
      { id: 'RES-011', label: 'Zerodha Varsity — Your trading checklist', url: 'https://zerodha.com/varsity/chapter/your-trading-checklist/', checkedOn: '2026-10-04' },
      { id: 'RES-022', label: 'IG — Trading journal records and review', url: 'https://www.ig.com/uk/learn-to-trade/ig-academy/tools-for-traders/important-metrics?source=dailyfx', checkedOn: '2026-10-06' },
      { id: 'RES-024', label: 'NIST — Correlation does not prove causation', url: 'https://www.itl.nist.gov/div898/handbook/ppc/section1/ppc136.htm', checkedOn: '2026-10-06' },
      { id: 'RES-025', label: 'IG — What is a trading plan?', url: 'https://www.ig.com/en/ig-academy/planning-and-risk-management/what-is-a-trading-plan', checkedOn: '2026-10-06' },
      { id: 'PLAI-002', label: 'PropLogAI — Manual trading journal', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
      { id: 'PLAI-005', label: 'PropLogAI — Rule and emotion records', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    visualNote: {
      src: '/glossary/images/overconfidence-rule-change-note.webp',
      alt: 'Handwritten XAUUSD learning note comparing breakout-close, retest and fixed USD-size rules with recent wins, an early entry and a changed size',
      caption: 'Recent wins are context. Compare the recorded decision with the rule written before it. Click or tap to enlarge.',
      label: 'Open the overconfidence written-rule versus recorded-action learning note at a larger size',
    },
    proplogConnection: 'PropLogAI lets you manually record the setup, emotion tag, notes, screenshots, USD result and whether you followed your own rules. The record can support later review; it does not diagnose overconfidence or prove what caused a decision.',
    fullContent: `
      <h3>What is overconfidence in trading?</h3>
      <p>Overconfidence in trading is confidence that appears beside a decision to change or ignore a rule written before the trade. The useful evidence is the original rule, the action you took and the reason you recorded at that time.</p>
      <p>Confidence, one winning trade or a winning streak does not by itself prove overconfidence. A sequence of past results does not guarantee what the next trade will do.</p>

      <h3>A fictional XAUUSD example</h3>
      <p>Imagine you have recorded several recent winning trades and are considering an XAUUSD breakout during the New York session.</p>
      <ol>
        <li>Your <a href="/glossary/trading-plan">trading plan</a> requires a candle close above the level and a retest before entry.</li>
        <li>Your written size uses a fixed planned USD loss.</li>
        <li>You enter before the retest because the setup “looks obvious.”</li>
        <li>You also increase the size written in the plan.</li>
      </ol>
      <p>The review can say: <strong>recent wins + retest missing + size changed</strong>. It should not say that the wins caused the decision. This is a fictional teaching example, not a market signal.</p>

      <h3>Confidence and overconfidence are not the same</h3>
      <ul>
        <li><strong>Confidence:</strong> you feel ready and still follow the process written before the trade.</li>
        <li><strong>Overconfidence-like process change:</strong> confidence appears beside a relaxed confirmation, session or size rule.</li>
        <li><strong><a href="/glossary/confirmation-bias">Confirmation bias</a>:</strong> you give more attention to evidence that supports an idea and less attention to evidence that conflicts with it.</li>
      </ul>

      <h3>What should you record?</h3>
      <ol>
        <li><strong>Original condition:</strong> the setup, confirmation, session and <a href="/glossary/position-sizing">position size</a> written before entry.</li>
        <li><strong>Actual action:</strong> what you did, including any change in timing or planned <a href="/glossary/risk-per-trade">USD risk</a>.</li>
        <li><strong>Reason at the time:</strong> the words you recorded when making the decision.</li>
      </ol>
      <p>A <a href="/glossary/trading-journal">trading journal</a> preserves the evidence. Later, <a href="/glossary/setup-compliance">setup compliance</a> and a <a href="/glossary/trade-review">trade review</a> can compare the action with the original rule.</p>

      <h3>Does the final profit or loss prove it?</h3>
      <p><strong>No.</strong> A profitable trade can still miss a required condition. A losing trade can still follow the plan. Keep the result beside the process record, but do not use P&amp;L alone to decide whether the rule was followed.</p>

      <h3>What should you do next?</h3>
      <p>Review one decision made after a recent win. Write what stayed the same and what changed. The <a href="/blogs/tracking-trading-emotions">emotion-tracking guide</a> shows the wider recording process, while the <a href="/blogs/trading-psychology-prop-firm">trading psychology guide</a> connects this definition to the full behaviour cluster.</p>
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
    shortDefinition: 'Position sizing is the calculation used to choose trade size so the estimated loss at the planned stop matches your chosen USD risk and exact account rules.',
    category: 'Risk Management',
    updatedAt: '2026-10-05',
    relatedTerms: ['risk-per-trade', 'stop-loss', 'daily-drawdown-limit'],
    sourceIds: ['RES-013', 'PLAI-002', 'PLAI-005'],
    sources: [
      { id: 'RES-013', label: 'CME Group — Proper Position Size', url: 'https://www.cmegroup.com/education/courses/trade-and-risk-management/proper-position-size', checkedOn: '2026-10-05' },
      { id: 'PLAI-002/005', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    visualNote: {
      src: '/glossary/images/position-sizing-formula-note.webp',
      alt: 'Handwritten fictional XAUUSD position-sizing example using a planned 50 dollar loss and an order-ticket estimate of 10 dollars loss per 0.01 lot to calculate 0.05 lot',
      caption: 'This is a fictional calculation. Verify the instrument and account details shown by your own platform before using a size.',
      label: 'Open the position-sizing formula learning note at a larger size',
    },
    guide: { href: '/blogs/prop-firm-risk-management', label: 'Continue with the forex and prop-firm risk-management guide' },
    proplogConnection: 'PropLogAI lets you record trade details and whether the trade followed your own rules. It is not a live position-size calculator, broker feed, or breach monitor.',
    fullContent: `
      <h3>What is Position Sizing?</h3>
      <p>Position sizing is the calculation used to choose the trade size so the estimated loss at your planned <a href="/glossary/stop-loss">stop loss</a> matches the USD amount you chose before entry. The size must also fit the exact rules for your account and prop-firm program.</p>

      <h3>The Four Inputs</h3>
      <ol>
        <li><strong>Planned USD risk:</strong> the maximum loss you plan for this trade. See <a href="/glossary/risk-per-trade">risk per trade</a>.</li>
        <li><strong>Entry:</strong> the price where you expect to open the trade.</li>
        <li><strong>Stop distance:</strong> the distance between the entry and the planned stop.</li>
        <li><strong>Estimated loss per unit:</strong> what one unit, contract, or 0.01 lot would lose if the stop filled at the expected price.</li>
      </ol>
      <p><code>Position size = planned USD risk ÷ estimated loss per unit at the stop</code></p>

      <h3>Fictional XAUUSD Example</h3>
      <p>You plan a maximum loss of <strong>$50</strong>. After choosing the entry and stop, your platform's order ticket estimates that each <strong>0.01 lot</strong> would lose <strong>$10</strong> if price reached that stop.</p>
      <ol>
        <li><strong>$50 ÷ $10 = 5 units</strong></li>
        <li><strong>5 × 0.01 lot = 0.05 lot</strong></li>
      </ol>
      <p>The calculated size for this fictional ticket is <strong>0.05 lot</strong>. The $50 amount is an example, not a recommendation.</p>

      <h3>Check the Platform Details Before Using the Result</h3>
      <p>Do not assume that the same price move has the same value on every instrument or platform. Check the contract specification, tick or price-move value, account currency, and any currency conversion shown for your exact order.</p>
      <p>Spread, commission, slippage, or a price gap can make the realised loss different from the estimate. A stop is part of the calculation, but it does not guarantee the exact exit price.</p>

      <h3>Prop-Firm Limits Are Separate Checks</h3>
      <p>After calculating the trade size, compare the planned loss and any open exposure with the current <a href="/glossary/daily-drawdown-limit">daily drawdown limit</a> and <a href="/glossary/overall-drawdown-limit">overall drawdown limit</a> for your exact program and account stage. Position sizing does not replace those checks.</p>
      <p>The <a href="/blogs/prop-firm-risk-management">forex and prop-firm risk-management guide</a> explains how the size, stop, open exposure, and firm limits fit together.</p>
    `
  },
  {
    slug: 'risk-reward-ratio',
    title: 'Risk-Reward Ratio',
    shortDefinition: 'A comparison between the loss planned at your stop and the gain planned at your target, commonly written as 1:2 or 1:3.',
    category: 'Risk Management',
    updatedAt: '2026-10-05',
    relatedTerms: ['stop-loss', 'position-sizing', 'expectancy', 'win-rate'],
    sourceIds: ['RES-014', 'PLAI-002', 'PLAI-003'],
    sources: [
      { id: 'RES-014', label: 'CME Group — Risk Management and Your Trade Plan', url: 'https://www.cmegroup.com/education/courses/building-a-trade-plan/risk-management-and-your-trade-plan', checkedOn: '2026-10-05' },
      { id: 'PLAI-002/003', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    visualNote: {
      src: '/glossary/images/risk-reward-planned-vs-realised-note.webp',
      alt: 'Handwritten fictional XAUUSD example showing 50 dollars of planned risk, 100 dollars of planned reward, and a 1 to 2 risk-reward ratio',
      caption: 'The ratio describes the plan. Costs, fills and changes made during the trade can change the realised result.',
      label: 'Open the planned risk-reward learning note at a larger size',
    },
    guide: { href: '/blogs/prop-firm-risk-management', label: 'Continue with the forex and prop-firm risk-management guide' },
    proplogConnection: 'PropLogAI lets you log trade details and view average R from the data you entered. It does not recommend a risk-reward ratio.',
    fullContent: `
      <h3>What does a 1:2 risk-reward ratio mean?</h3>
      <p>A risk-reward ratio compares the loss planned at your <a href="/glossary/stop-loss">stop loss</a> with the gain planned at your target. A <strong>1:2 risk-reward ratio</strong> means the plan risks $1 for every $2 of planned reward.</p>
      <p>This describes the trade plan. It does not promise that the target will be reached or that the final loss will stop at the exact planned amount.</p>

      <h3>Fictional XAUUSD London-session example</h3>
      <p>Imagine you are planning an XAUUSD breakout during the London session. Your chosen entry, stop and <a href="/glossary/position-sizing">position size</a> produce these order-ticket estimates:</p>
      <ul>
        <li><strong>Planned loss at the stop:</strong> $50.</li>
        <li><strong>Planned gain at the target:</strong> $100.</li>
      </ul>
      <p><code>$100 planned reward ÷ $50 planned risk = 2</code></p>
      <p>The plan is therefore written as <strong>1:2 risk to reward</strong>. The $50 and $100 figures are fictional examples, not recommended amounts. Some platforms label ratios differently, so check which convention your platform uses.</p>

      <h3>Planned R:R is not the realised result</h3>
      <p>Before entry, you only have a plan. The realised result can change because of spread, commission, slippage, a price gap, a partial exit, an early close, or a changed stop or target.</p>
      <p>For example, a trade planned at 1:2 may close early at less than 2R, or a stop may fill beyond the expected price. Write down both the original plan and the final result instead of treating them as the same number.</p>

      <h3>How does R:R connect with win rate?</h3>
      <p>The simplified breakeven win rate can help you understand the arithmetic before trading costs:</p>
      <ul>
        <li><strong>1:1:</strong> 50% breakeven win rate before costs.</li>
        <li><strong>1:2:</strong> about 33.3% before costs.</li>
        <li><strong>1:3:</strong> 25% before costs.</li>
      </ul>
      <p>These figures do not predict profit. Real results also depend on costs, fills, losses, partial exits, the <a href="/glossary/win-rate">win rate</a>, and the <a href="/glossary/expectancy">expectancy</a> across a useful sample of comparable trades. No single ratio is a universal sweet spot.</p>

      <h3>Check the full risk plan</h3>
      <p>A ratio is one planning input. It does not replace your position-size calculation, daily loss control, open-exposure check, or the current rules for your exact prop-firm program. The <a href="/blogs/prop-firm-risk-management">forex and prop-firm risk-management guide</a> explains how these parts fit together.</p>
    `
  },
  {
    slug: 'stop-loss',
    title: 'Stop Loss',
    shortDefinition: 'A planned exit level or order instruction used to close a trade after a price trigger; the actual fill can differ from the stop price.',
    category: 'Risk Management',
    updatedAt: '2026-10-05',
    relatedTerms: ['risk-reward-ratio', 'position-sizing', 'daily-drawdown-limit'],
    sourceIds: ['RES-015', 'PLAI-002', 'PLAI-005'],
    sources: [
      { id: 'RES-015', label: 'FINRA — Stop Orders: Factors to Consider During Volatile Markets', url: 'https://www.finra.org/investors/insights/stop-orders-factors-consider-during-volatile-markets', checkedOn: '2026-10-05' },
      { id: 'PLAI-002/005', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    visualNote: {
      src: '/glossary/images/stop-loss-trigger-fill-note.webp',
      alt: 'Handwritten four-step stop-loss note showing a planned XAUUSD stop level, the trigger, the platform attempting the exit, and an actual fill that may differ',
      caption: 'A stop level is part of the plan. The exact trigger and fill rules depend on the instrument, broker, platform and account.',
      label: 'Open the stop-loss trigger and fill learning note at a larger size',
    },
    guide: { href: '/blogs/prop-firm-risk-management', label: 'Continue with the forex and prop-firm risk-management guide' },
    proplogConnection: 'PropLogAI lets you manually record trade details and whether you followed your own rules. It is not a live stop monitor, broker feed, or breach detector.',
    fullContent: `
      <h3>What is a stop loss?</h3>
      <p>A stop loss is a planned exit level or order instruction used to close a trade after price reaches a trigger. It helps you define the loss you expect before entry, but it does not guarantee the exact exit price or final loss.</p>
      <p>The wording and order behaviour can differ by instrument, broker and platform. Check the specification for the order you are actually using.</p>

      <h3>Fictional XAUUSD London-session example</h3>
      <p>Imagine you plan an XAUUSD breakout during the London session. You choose an entry and a stop below the level that would invalidate your setup. After you choose the <a href="/glossary/position-sizing">position size</a>, the order ticket estimates a <a href="/glossary/risk-per-trade">planned loss</a> of <strong>$50</strong> if the stop fills at the expected price.</p>
      <p>The $50 is an estimate for this fictional example. It is not a recommended amount and it is not a guaranteed maximum.</p>

      <h3>Plan, trigger and fill are three different things</h3>
      <ol>
        <li><strong>Planned stop level:</strong> the price level written into your trade plan.</li>
        <li><strong>Trigger:</strong> the event that activates the exit instruction under your platform's order rules.</li>
        <li><strong>Actual fill:</strong> the price where the exit is completed.</li>
      </ol>
      <p>In a calm market, the fill may be close to the planned stop. During fast movement, a price gap, a wider spread, or slippage, the fill can be different. That difference can make the realised loss higher or lower than the estimate.</p>

      <h3>What about a stop-limit order?</h3>
      <p>Some platforms offer an instruction commonly called a stop-limit order. It combines a trigger with a limit on the acceptable execution price. The trade-off is that the order may remain unfilled if that price is unavailable.</p>
      <p>Order names and mechanics vary. Check whether your instrument and platform support this instruction and how it behaves before relying on the label.</p>

      <h3>Your stop and position size work together</h3>
      <p>The stop distance and trade size determine the estimated USD loss. If you move the stop farther away without reducing the size, the planned loss increases. Recalculate the estimate whenever one of those inputs changes.</p>
      <p>A stop also does not replace the current <a href="/glossary/daily-drawdown-limit">daily drawdown limit</a> or <a href="/glossary/overall-drawdown-limit">overall drawdown limit</a> for your exact account. Your firm's current dashboard and rulebook decide whether a result is a breach.</p>

      <h3>Use the stop as one part of the plan</h3>
      <p>Your written setup should explain what invalidates the trade, how size is calculated, and what you will record if the exit differs from the plan. The stop provides the risk side of the <a href="/glossary/risk-reward-ratio">risk-reward ratio</a>. The <a href="/blogs/prop-firm-risk-management">forex and prop-firm risk-management guide</a> explains the wider process.</p>
    `
  },
  {
    slug: 'risk-per-trade',
    title: 'Risk Per Trade',
    shortDefinition: 'Risk per trade is the loss amount planned before one trade if the exit fills near the expected price. It is not a guaranteed maximum or a universal percentage.',
    category: 'Risk Management',
    updatedAt: '2026-10-05',
    relatedTerms: ['position-sizing', 'stop-loss', 'daily-drawdown-limit'],
    guide: { href: '/blogs/prop-firm-risk-management', label: 'Use risk per trade inside the wider prop-firm risk workflow' },
    visualNote: {
      src: '/glossary/images/risk-per-trade-plan-vs-result-note.webp',
      alt: 'Handwritten fictional risk-per-trade note separating a 50 dollar plan, ticket estimate, and realised result',
      caption: 'The percentage is an input to the plan, not a universal rule. The realised result can differ. Click or tap to enlarge.',
      label: 'Open the risk-per-trade plan-versus-result learning note at a larger size',
    },
    sourceIds: ['RES-013', 'PFR-002', 'PFR-006', 'PLAI-002'],
    sources: [
      { id: 'RES-013', label: 'CME Group — Proper Position Size', url: 'https://www.cmegroup.com/education/courses/trade-and-risk-management/proper-position-size', checkedOn: '2026-10-05' },
      { id: 'PFR-002', label: 'FTMO trading objectives', url: 'https://ftmo.com/en/trading-objectives/', checkedOn: '2026-10-04' },
      { id: 'PFR-006', label: 'FundedNext maximum daily loss', url: 'https://help.fundednext.com/en/articles/8019914-what-is-the-maximum-daily-loss-limit', checkedOn: '2026-10-04' },
      { id: 'PLAI-002', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    proplogConnection: 'PropLogAI lets you manually record trade details, notes and rule adherence. You can compare the planned risk with the result you entered later, but PropLogAI is not a broker feed or live breach monitor.',
    fullContent: `
      <h3>What does risk per trade mean?</h3>
      <p>Risk per trade is the loss amount you plan before entering one trade if your exit fills near the expected price. You can write it in USD, as a selected account percentage, or as one risk unit such as 1R.</p>
      <p>It is a planning input. It is not a guaranteed maximum loss, and there is no single percentage that suits every trader, setup, account or prop-firm program.</p>

      <h3>A simple fictional calculation</h3>
      <p>If a trader chooses a $10,000 reference and uses 0.5% only as an arithmetic example:</p>
      <p><strong>$10,000 × 0.5% = $50 planned risk</strong></p>
      <p>The 0.5% is a fictional selected input. It is not a PropLogAI recommendation.</p>

      <h3>Planned risk, ticket estimate and realised loss</h3>
      <ol>
        <li><strong>Planned risk:</strong> the USD amount written into the trade plan before entry.</li>
        <li><strong>Ticket estimate:</strong> the platform's estimated loss from the chosen entry, stop and size.</li>
        <li><strong>Realised result:</strong> the amount recorded after the trade closes.</li>
      </ol>
      <p>These amounts may differ. Spread, commission, swap, slippage, a price gap or the actual fill can change the final result. The <a href="/glossary/stop-loss">stop-loss definition</a> explains the difference between the planned level, trigger and fill.</p>

      <h3>How it connects to position size</h3>
      <p>Imagine an XAUUSD breakout during the London session. The trader has selected $50 as the planned loss. At the chosen entry and stop, the ticket estimates that each 0.01 lot would lose $10.</p>
      <p>The separate <a href="/glossary/position-sizing">position-sizing calculation</a> is:</p>
      <p><strong>$50 ÷ $10 = 5 units of 0.01 lot = 0.05 lot</strong></p>
      <p>The numbers explain the connection between planned risk and size. They do not recommend $50, 0.5% or 0.05 lot.</p>

      <h3>One trade amount does not replace the account rules</h3>
      <p>Several open trades can use the account's loss allowance at the same time. Check open profit and loss, costs, reset time, balance or equity rules, and combined exposure for your exact program.</p>
      <p>Staying inside one planned trade amount does not guarantee that the account remains inside its <a href="/glossary/daily-drawdown-limit">daily drawdown limit</a> or <a href="/glossary/overall-drawdown-limit">overall drawdown limit</a>. The firm's current dashboard and rules decide the official status.</p>
      <p>The <a href="/blogs/prop-firm-risk-management">prop-firm risk-management guide</a> connects these checks in one workflow.</p>
    `
  },
  {
    slug: 'win-rate',
    title: 'Win Rate',
    shortDefinition: 'The percentage of closed trades counted as wins in one defined sample.',
    category: 'Performance Metrics',
    updatedAt: '2026-10-05',
    relatedTerms: ['risk-reward-ratio', 'profit-factor', 'expectancy'],
    sourceIds: ['RES-016', 'PLAI-003'],
    sources: [
      { id: 'RES-016', label: 'MQL5 Reference — Testing Statistics', url: 'https://www.mql5.com/en/docs/constants/environment_state/Statistics', checkedOn: '2026-10-05' },
      { id: 'PLAI-003', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-19' },
    ],
    visualNote: {
      src: '/glossary/images/win-rate-same-sample-note.webp',
      alt: 'Handwritten fictional XAUUSD sample showing 8 wins averaging 180 dollars, 12 losses averaging 80 dollars, a 40 percent win rate, and a positive 480 dollar result',
      caption: 'Win rate counts how many trades won. It does not show how large the wins and losses were.',
      label: 'Open the win-rate and outcome-size learning note at a larger size',
    },
    guide: { href: '/blogs/trading-performance-metrics', label: 'Read win rate with your other trading performance metrics' },
    proplogConnection: 'PropLogAI displays win rate from the trades you logged. Review it beside trade count, average win, average loss, profit factor, costs, and rule adherence.',
    fullContent: `
      <h3>What is win rate in trading?</h3>
      <p>Win rate is the percentage of closed trades counted as wins in one defined sample.</p>
      <p><code>Win rate = winning closed trades ÷ total closed trades × 100</code></p>
      <p>The percentage tells you how often the recorded trades won. It does not tell you how much the wins or losses were worth.</p>

      <h3>Fictional 20-trade XAUUSD example</h3>
      <p>Imagine you review 20 closed XAUUSD trades. The sample includes London-session liquidity-sweep setups and New York-session breakout setups. Eight trades finished with a positive recorded result and 12 finished with a negative result.</p>
      <p><code>8 wins ÷ 20 closed trades × 100 = 40% win rate</code></p>
      <p>The 40% describes this fictional sample. It is not a target or recommendation.</p>
      <p>The same sample finished at +$480 because its winning trades were larger than its losing trades. The win rate alone did not show that. You need the <a href="/glossary/average-win-vs-average-loss">average win and average loss</a> and the <a href="/glossary/profit-factor">profit factor</a> to understand the size relationship.</p>

      <h3>Decide what counts before calculating</h3>
      <ol>
        <li><strong>Closed trades:</strong> use one clear start and end date.</li>
        <li><strong>Breakeven trades:</strong> decide whether a zero result stays in the total or is shown separately.</li>
        <li><strong>Partial exits:</strong> decide whether several exits belong to one trade or several records.</li>
        <li><strong>Multi-leg positions:</strong> use the same grouping rule every time.</li>
        <li><strong>Costs:</strong> record whether spread, commission, swap and other costs are already included.</li>
      </ol>
      <p>If you change the counting method between periods, the percentages are not directly comparable.</p>

      <h3>What win rate does not show</h3>
      <ul>
        <li><strong>Outcome size:</strong> a $20 win and a $500 win both count as one win.</li>
        <li><strong>Trade order:</strong> the percentage does not show losing streaks or the path of drawdown.</li>
        <li><strong>Decision quality:</strong> a winning trade may still have broken the written plan.</li>
        <li><strong>Future results:</strong> a historical percentage does not predict the next trade.</li>
      </ul>

      <h3>Read it with the same sample</h3>
      <p>Read win rate beside average win, average loss, profit factor, <a href="/glossary/expectancy">expectancy</a>, costs and the number of trades included. A higher percentage is not automatically better, and there is no universal good win rate.</p>
      <p>The <a href="/blogs/trading-performance-metrics">trading performance metrics guide</a> walks through every number from this same fictional XAUUSD sample.</p>
    `
  },
  {
    slug: 'profit-factor',
    title: 'Profit Factor',
    shortDefinition: 'Total gross profit divided by the absolute value of total gross loss for a defined set of closed trades.',
    category: 'Performance Metrics',
    updatedAt: '2026-10-05',
    relatedTerms: ['win-rate', 'expectancy', 'average-win-vs-average-loss'],
    sourceIds: ['RES-016', 'PLAI-003'],
    sources: [
      { id: 'RES-016', label: 'MQL5 Reference — Testing Statistics', url: 'https://www.mql5.com/en/docs/constants/environment_state/Statistics', checkedOn: '2026-10-05' },
      { id: 'PLAI-003', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-19' },
    ],
    visualNote: {
      src: '/glossary/images/profit-factor-same-sample-note.webp',
      alt: 'Handwritten fictional XAUUSD sample connecting a 40 percent win rate, 180 dollar average win, 80 dollar average loss, 1.50 profit factor, and positive 24 dollar expectancy',
      caption: 'Profit factor summarises the winning and losing totals. Keep the trade count and the rest of the sample beside it.',
      label: 'Open the profit-factor learning note at a larger size',
    },
    guide: { href: '/blogs/trading-performance-metrics', label: 'Read profit factor with your other trading performance metrics' },
    proplogConnection: 'PropLogAI displays profit factor from the trades you logged. It is a historical summary, not a prediction or proof of rule compliance.',
    fullContent: `
      <h3>What does profit factor mean?</h3>
      <p>Profit factor compares the total winning amount with the absolute total losing amount in one defined sample of closed trades.</p>
      <p><code>Profit factor = total winning amount ÷ absolute total losing amount</code></p>
      <p>The ratio summarises the size relationship between the two totals. It does not show when the wins and losses happened or whether the trades followed the plan.</p>

      <h3>Fictional 20-trade XAUUSD example</h3>
      <p>Use the same fictional sample as the <a href="/glossary/win-rate">win-rate</a> definition:</p>
      <ul>
        <li><strong>8 wins × $180 average win = $1,440 total winning amount.</strong></li>
        <li><strong>12 losses × $80 average loss = $960 total losing amount.</strong></li>
      </ul>
      <p><code>$1,440 ÷ $960 = 1.50 profit factor</code></p>
      <p>The recorded results in this fictional sample already include its stated costs. The 1.50 describes these 20 trades only. It is not a universal target or proof of a good strategy.</p>

      <h3>How to read the number</h3>
      <ul>
        <li><strong>Above 1:</strong> the winning total was larger than the losing total in the selected sample.</li>
        <li><strong>Equal to 1:</strong> the two totals were equal before any excluded costs.</li>
        <li><strong>Below 1:</strong> the losing total was larger than the winning total.</li>
      </ul>
      <p>These statements describe the selected records. They do not predict the next period.</p>

      <h3>What if the sample has no losing trades?</h3>
      <p>If the total losing amount is zero, the formula cannot produce a normal finite ratio. A platform may show infinity, a very large value, a blank, or another special result. Check the platform's reporting method instead of treating that display as proof of exceptional performance.</p>
      <p>A no-loss result can also come from a very small sample. Keep the trade count and dates visible.</p>

      <h3>What profit factor does not show</h3>
      <ul>
        <li><strong>Sequence:</strong> it does not show losing streaks or when drawdown occurred.</li>
        <li><strong>Sample concentration:</strong> one unusually large win can move the ratio sharply.</li>
        <li><strong>Excluded costs:</strong> a gross report may not include every spread, commission, swap or fee.</li>
        <li><strong>Rule adherence:</strong> a positive sample can still contain trades that broke the plan.</li>
        <li><strong>Future performance:</strong> historical profit factor does not guarantee the ratio will continue.</li>
      </ul>

      <h3>Compare like with like</h3>
      <p>Use the same dates, closed trades, currency, grouping method and cost treatment when comparing two periods. Read profit factor beside trade count, average win, average loss, <a href="/glossary/expectancy">expectancy</a>, <a href="/glossary/drawdown">drawdown</a> and the equity curve.</p>
      <p>The <a href="/blogs/trading-performance-metrics">trading performance metrics guide</a> connects these numbers using this same fictional XAUUSD sample.</p>
    `
  },
  {
    slug: 'expectancy',
    title: 'Expectancy',
    shortDefinition: 'Trading expectancy is the average net result per trade in one defined historical sample. It does not predict the next trade.',
    category: 'Performance Metrics',
    updatedAt: '2026-10-05',
    relatedTerms: ['win-rate', 'profit-factor', 'risk-reward-ratio'],
    guide: { href: '/blogs/trading-expectancy-calculator', label: 'Calculate expectancy from your own trade counts and averages' },
    visualNote: {
      src: '/glossary/images/expectancy-average-per-trade-note.webp',
      alt: 'Handwritten fictional 20-trade XAUUSD expectancy example showing 1440 dollars of wins, 960 dollars of losses, and a 24 dollar average per trade',
      caption: 'The +$24 is the average of this fictional sample, not a prediction for the next trade. Click or tap to enlarge.',
      label: 'Open the trading-expectancy learning note at a larger size',
    },
    sourceIds: ['RES-017', 'PLAI-003'],
    sources: [
      { id: 'RES-017', label: 'MQL5 Programming for Traders — Testing Statistics', url: 'https://www.mql5.com/files/book/mql5book.pdf', checkedOn: '2026-10-05' },
      { id: 'PLAI-003', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-19' },
    ],
    proplogConnection: 'PropLogAI organises performance metrics from the trades you logged. A historical expectancy does not predict the next trade or prove that the average will continue.',
    fullContent: `
      <h3>What is trading expectancy?</h3>
      <p>Trading expectancy is the average net result per trade in one defined historical sample. You can express it in USD, another account currency, points or R, as long as every result uses the same unit.</p>
      <p>Expectancy describes the selected records. It does not predict the next trade or guarantee that the same average will continue.</p>

      <h3>Two ways to calculate the same average</h3>
      <p><strong>Net result ÷ total trades = expectancy per trade</strong></p>
      <p>You can also calculate it from the same sample:</p>
      <p><strong>(win rate × average win) − (loss rate × average loss) = expectancy</strong></p>
      <p>The two formulas agree only when the inputs use the same trades, dates, counting method and cost treatment.</p>

      <h3>Fictional 20-trade XAUUSD example</h3>
      <p>Use the same sample as the <a href="/glossary/win-rate">win-rate</a> and <a href="/glossary/profit-factor">profit-factor</a> definitions:</p>
      <ul>
        <li><strong>8 wins × $180 average win = $1,440.</strong></li>
        <li><strong>12 losses × $80 average loss = $960.</strong></li>
      </ul>
      <p><strong>$1,440 − $960 = +$480 net result</strong></p>
      <p><strong>+$480 ÷ 20 trades = +$24 expectancy per trade</strong></p>
      <p>You can check it with the weighted formula:</p>
      <p><strong>(0.40 × $180) − (0.60 × $80) = $72 − $48 = +$24</strong></p>
      <p>The +$24 is the average of these 20 fictional trades. No single trade has to finish at +$24.</p>

      <h3>Keep the sample visible</h3>
      <ol>
        <li>Use one clear start and end date.</li>
        <li>Use the same closed trades for win rate, average win and average loss.</li>
        <li>Define how breakeven trades, partial exits and multi-leg positions are counted.</li>
        <li>Use one currency or R method throughout the sample.</li>
        <li>Record whether spread, commission, swap and other costs are already included.</li>
      </ol>
      <p>The <a href="/glossary/average-win-vs-average-loss">average win and average loss</a> page explains the two outcome-size inputs.</p>

      <h3>Can you calculate expectancy by setup or session?</h3>
      <p>Yes, if you have enough comparable records. For example, you might review only XAUUSD London-session liquidity-sweep setups or only New York-session breakout setups. Keep the labels and counting method consistent.</p>
      <p>A small sample can move sharply after one unusual result. Treat the number as a review of recorded trades, not proof of a permanent edge.</p>

      <h3>What should you use next?</h3>
      <p>The <a href="/blogs/trading-expectancy-calculator">trading expectancy calculator</a> lets you enter your own counts and averages. The <a href="/blogs/trading-performance-metrics">trading performance metrics guide</a> shows how to read expectancy beside win rate, profit factor, drawdown and trade count.</p>
    `
  },
  {
    slug: 'sharpe-ratio',
    title: 'Sharpe Ratio',
    shortDefinition: 'A historic Sharpe ratio compares average return above a defined baseline with how much those returns varied during the same period.',
    category: 'Performance Metrics',
    updatedAt: '2026-10-05',
    relatedTerms: ['equity-curve', 'drawdown', 'consistency-rule'],
    guide: { href: '/blogs/trading-performance-metrics', label: 'Read Sharpe ratio after the core trading performance metrics' },
    visualNote: {
      src: '/glossary/images/sharpe-ratio-same-inputs-note.webp',
      alt: 'Handwritten fictional monthly Sharpe ratio calculation using 2 percent average return, 0.5 percent baseline, and 3 percent variation',
      caption: 'Keep the period, frequency, baseline and method consistent. This historic summary does not predict the next result. Click or tap to enlarge.',
      label: 'Open the Sharpe-ratio learning note at a larger size',
    },
    sourceIds: ['RES-019', 'PLAI-003'],
    sources: [
      { id: 'RES-019', label: 'William F. Sharpe — The Sharpe Ratio', url: 'https://web.stanford.edu/~wfsharpe/art/sr/sr.htm', checkedOn: '2026-10-05' },
      { id: 'PLAI-003', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-19' },
    ],
    proplogConnection: 'PropLogAI can organise performance information from logged trades, but a Sharpe ratio still needs a defined return series, period, baseline and calculation method.',
    fullContent: `
      <h3>What is the Sharpe ratio in trading?</h3>
      <p>A historic Sharpe ratio compares average return above a defined baseline with how much those returns varied during the same period.</p>
      <p>In simple words, it asks: how much return above the chosen baseline was recorded for each unit of variation in the return series?</p>

      <h3>The simplified historic formula</h3>
      <p><strong>(average return − chosen baseline return) ÷ standard deviation of those returns</strong></p>
      <p>Standard deviation is a measure of how widely the returns moved around their average. A larger value means the selected returns varied more.</p>

      <h3>A fictional monthly example</h3>
      <p>Imagine a defined series has a 2% average monthly return, a chosen monthly baseline of 0.5%, and monthly return variation of 3%:</p>
      <p><strong>(2% − 0.5%) ÷ 3% = 0.50</strong></p>
      <p>The 0.50 describes only this fictional return series, baseline, monthly frequency and calculation method. It is not a universal good or bad threshold.</p>

      <h3>What must stay consistent?</h3>
      <ol>
        <li><strong>Return series:</strong> define what value each return uses.</li>
        <li><strong>Frequency:</strong> compare daily with daily or monthly with monthly.</li>
        <li><strong>Baseline:</strong> use the same chosen comparison return.</li>
        <li><strong>Period:</strong> show the start and end dates.</li>
        <li><strong>Method:</strong> state how costs and annualisation are handled.</li>
      </ol>
      <p>Two Sharpe ratios are not directly comparable when these inputs differ.</p>

      <h3>It is not a prop-firm consistency rule</h3>
      <p>A <a href="/glossary/consistency-rule">prop-firm consistency rule</a> may compare a best day or best trade with total profit. That is a different formula with program-specific consequences. A Sharpe ratio does not decide whether your account passed a firm rule.</p>

      <h3>What does the ratio leave out?</h3>
      <ul>
        <li>It does not show the shape of the <a href="/glossary/equity-curve">equity curve</a>.</li>
        <li>It does not show when <a href="/glossary/drawdown">drawdown</a> happened.</li>
        <li>It does not show tail risk, trade count or rule adherence by itself.</li>
        <li>A higher historic value does not predict future performance.</li>
      </ul>

      <h3>Where should a beginner start?</h3>
      <p>Start with <a href="/glossary/win-rate">win rate</a>, <a href="/glossary/average-win-vs-average-loss">average win and average loss</a>, <a href="/glossary/expectancy">expectancy</a>, profit factor and drawdown. The <a href="/blogs/trading-performance-metrics">trading performance metrics guide</a> puts them in a practical reading order before Sharpe ratio is added as an advanced view.</p>
    `
  },
  {
    slug: 'average-win-vs-average-loss',
    title: 'Average Win vs Average Loss',
    shortDefinition: 'Average win is the total winning result divided by winning trades; average loss is the total losing result divided by losing trades in the same defined sample.',
    category: 'Performance Metrics',
    updatedAt: '2026-10-05',
    relatedTerms: ['profit-factor', 'expectancy', 'risk-reward-ratio'],
    guide: { href: '/blogs/trading-expectancy-calculator', label: 'Use your average win and loss in the expectancy calculator' },
    visualNote: {
      src: '/glossary/images/average-win-vs-average-loss-note.webp',
      alt: 'Handwritten fictional XAUUSD sample showing a 180 dollar average win, 80 dollar average loss, and 2.25 to 1 realised size ratio',
      caption: 'Read the realised size ratio with win rate. It is different from a planned risk-reward ratio. Click or tap to enlarge.',
      label: 'Open the average-win-versus-average-loss learning note at a larger size',
    },
    sourceIds: ['RES-018', 'PLAI-003'],
    sources: [
      { id: 'RES-018', label: 'MQL5 — Strategy Tester metric calculations', url: 'https://www.mql5.com/en/articles/20917', checkedOn: '2026-10-05' },
      { id: 'PLAI-003', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-19' },
    ],
    proplogConnection: 'PropLogAI can organise average winning and losing results from trades a user logged. The result depends on those records and counting choices.',
    fullContent: `
      <h3>What do average win and average loss mean?</h3>
      <p>Average win is the total result from winning trades divided by the number of winning trades. Average loss is the absolute total result from losing trades divided by the number of losing trades in the same defined sample.</p>
      <p>These two averages describe realised results. They do not tell you what was planned before each trade.</p>

      <h3>Fictional 20-trade XAUUSD example</h3>
      <p>Use the same sample as the <a href="/glossary/win-rate">win-rate</a>, <a href="/glossary/profit-factor">profit-factor</a> and <a href="/glossary/expectancy">expectancy</a> definitions:</p>
      <ul>
        <li><strong>8 winning trades produced $1,440: $1,440 ÷ 8 = $180 average win.</strong></li>
        <li><strong>12 losing trades lost $960: $960 ÷ 12 = $80 average loss.</strong></li>
      </ul>
      <p>You can describe the realised outcome-size relationship as:</p>
      <p><strong>$180 ÷ $80 = 2.25, or 2.25:1</strong></p>
      <p>This ratio describes the average sizes in these 20 fictional trades. It does not guarantee that the sample is profitable and does not predict the next trade.</p>

      <h3>Realised size ratio or planned risk-reward ratio?</h3>
      <p>The 2.25:1 above comes from completed trades. A <a href="/glossary/risk-reward-ratio">planned risk-reward ratio</a> compares intended loss and intended reward before entry. Slippage, partial exits, costs and trade management can make the realised result different from the plan.</p>

      <h3>Why must you read it with win rate?</h3>
      <p>Average outcome size explains only one part of the sample. The number of wins and losses also matters. Two samples can have the same $180 average win and $80 average loss but different overall results because their <a href="/glossary/win-rate">win rates</a> differ.</p>
      <p>The <a href="/glossary/expectancy">expectancy</a> calculation combines frequency and average outcome size.</p>

      <h3>Keep the sample rules visible</h3>
      <ol>
        <li>Use one clear start and end date.</li>
        <li>Define how breakeven trades, partial exits and multi-leg positions are counted.</li>
        <li>Use one currency or R method throughout.</li>
        <li>State whether spread, commission, swap and other costs are included.</li>
        <li>Check whether one unusual winner or loser moved a small-sample average.</li>
      </ol>

      <h3>What should you use next?</h3>
      <p>The <a href="/blogs/trading-expectancy-calculator">trading expectancy calculator</a> lets you enter winning and losing counts and averages. The <a href="/blogs/trading-performance-metrics">trading performance metrics guide</a> shows how to read these figures beside profit factor, expectancy, drawdown and trade count.</p>
    `
  },
  {
    slug: 'equity-curve',
    title: 'Equity Curve',
    shortDefinition: 'A trading equity curve is a line showing how a defined account value changes across time or trade order. Check whether it includes only closed results or also open profit and loss.',
    category: 'Performance Metrics',
    updatedAt: '2026-10-06',
    relatedTerms: ['drawdown', 'performance-report', 'profit-factor'],
    sourceIds: ['RES-020', 'PLAI-003'],
    sources: [
      { id: 'RES-020', label: 'MetaTrader 5 — Trading Report', url: 'https://www.metatrader5.com/en/terminal/help/trading/report', checkedOn: '2026-10-06' },
      { id: 'PLAI-003', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-19' },
    ],
    visualNote: {
      src: '/glossary/images/equity-curve-balance-vs-equity-note.webp',
      alt: 'Handwritten five-trade XAUUSD account path ending with a 10,200 dollar balance and a comparison showing 10,110 dollar equity after an open 90 dollar loss',
      caption: 'The balance and equity can differ when a position is still open. Check what your chart includes. Click or tap to enlarge.',
      label: 'Open the balance-versus-equity learning note at a larger size',
    },
    guide: { href: '/blogs/trading-performance-metrics', label: 'Read the equity curve with your other trading performance metrics' },
    proplogConnection: 'PropLogAI can display an equity curve from trades you logged. Its accuracy depends on those records and the values included in the curve.',
    fullContent: `
      <h3>What is an equity curve in trading?</h3>
      <p>An equity curve is a line showing how a defined account value changes across time or trade order. The horizontal line normally shows time or the order of trades. The vertical line shows account value or a cumulative result.</p>
      <p>Before reading the shape, check what the line includes. A balance curve may use only closed results. An equity curve may also include the current profit or loss from positions that are still open. Platforms and journals can use these labels differently.</p>

      <h3>Fictional five-trade XAUUSD example</h3>
      <p>Imagine the account starts at <strong>$10,000</strong> and records five closed XAUUSD results:</p>
      <p><strong>+$120, −$80, +$60, −$40, +$140</strong></p>
      <p>The closed-result path is:</p>
      <p><strong>$10,000 → $10,120 → $10,040 → $10,100 → $10,060 → $10,200</strong></p>
      <p>The final balance is $10,200. If an open XAUUSD position is currently showing <strong>−$90</strong>, the balance can remain $10,200 while live equity is <strong>$10,110</strong>. This is why you must check whether the graph includes open positions.</p>

      <h3>What can the shape tell you?</h3>
      <ul>
        <li><strong>Upward section:</strong> the selected cumulative value increased during that part of the sample.</li>
        <li><strong>Flat section:</strong> the selected value changed little during that part.</li>
        <li><strong>Uneven section:</strong> open the original trades and check result size, setup, session and position size.</li>
        <li><strong>Decline from an earlier peak:</strong> measure the <a href="/glossary/drawdown">drawdown</a> and check which trades or open positions created it.</li>
      </ul>
      <p>A rising or smooth curve does not prove discipline, safety or future profit. The line describes the recorded path. It does not explain every decision behind it.</p>

      <h3>What can change the line?</h3>
      <ol>
        <li>Deposits and withdrawals.</li>
        <li>Open profit or loss.</li>
        <li>Spread, commission and swap.</li>
        <li>Missing or duplicate trade records.</li>
        <li>How partial exits and grouped positions are counted.</li>
      </ol>

      <h3>What should you read with the curve?</h3>
      <p>Use a <a href="/glossary/performance-report">trading performance report</a> to review the line with the original trades, trade count and <a href="/glossary/drawdown">drawdown</a>. <a href="/glossary/expectancy">Expectancy</a> and <a href="/glossary/profit-factor">profit factor</a> add other views of the same defined sample.</p>
      <p>The <a href="/blogs/trading-performance-metrics">trading performance metrics guide</a> shows a practical reading order. None of these historical measures predicts the next trade.</p>
    `
  },

  // ─── Trading Discipline (6) ───
  {
    slug: 'trading-plan',
    title: 'Trading Plan',
    aliases: ['Forex trading plan', 'Written trading plan'],
    updatedAt: '2026-10-07',
    shortDefinition: 'A trading plan is a written framework prepared before trading that says what you may trade, when you may act, what conditions must be present, how risk and exits are planned, and what you will record afterward.',
    category: 'Trading Discipline',
    relatedTerms: ['rule-based-trading', 'setup-compliance', 'pre-market-routine', 'position-sizing', 'trading-journal'],
    sourceIds: ['RES-011', 'RES-025', 'PLAI-002', 'PLAI-005'],
    sources: [
      { id: 'RES-011', label: 'Zerodha Varsity — Your trading checklist', url: 'https://zerodha.com/varsity/chapter/your-trading-checklist/', checkedOn: '2026-10-04' },
      { id: 'RES-025', label: 'IG — What is a trading plan?', url: 'https://www.ig.com/en/ig-academy/planning-and-risk-management/what-is-a-trading-plan', checkedOn: '2026-10-06' },
      { id: 'PLAI-002', label: 'PropLogAI — Manual trading journal', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
      { id: 'PLAI-005', label: 'PropLogAI — Rule and emotion records', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    visualNote: {
      src: '/glossary/images/trading-plan-six-lines-note.webp',
      alt: 'Handwritten six-line XAUUSD trading plan covering market, London session, Asian-high breakout and retest setup, entry confirmation, risk, and the final journal record',
      caption: 'A plan turns a broad idea into details you can check before and after the trade. Click or tap to enlarge.',
      label: 'Open the six-line trading plan learning note at a larger size',
    },
    guide: { href: '/blogs/prop-firm-trading-rulebook', label: 'Create a trading rulebook you can check before every trade' },
    proplogConnection: 'PropLogAI lets you manually record trade details, notes, emotions and whether you followed your own rules. You still define the plan and check the exact rules that apply to your account.',
    fullContent: `
      <h3>What is a trading plan?</h3>
      <p>A trading plan is a written framework you prepare before trading. It tells you what you may trade, when you may act, what conditions must be present, how risk and exits are planned, and what you will record afterward.</p>
      <p>The plan guides your decision. It does not predict the next market move or guarantee a result.</p>

      <h3>What belongs in a trading plan?</h3>
      <ol>
        <li><strong>Market and session:</strong> the instruments and trading window you chose.</li>
        <li><strong>Setup:</strong> the named situation you are waiting for and the conditions that define it.</li>
        <li><strong>Entry:</strong> what must happen before you can act.</li>
        <li><strong>Risk:</strong> the planned <a href="/glossary/stop-loss">stop loss</a>, USD loss limit and <a href="/glossary/position-sizing">position-sizing</a> method.</li>
        <li><strong>Exit or management:</strong> what your plan allows after entry.</li>
        <li><strong>Record and review:</strong> what you will save in your <a href="/glossary/trading-journal">trading journal</a> and check later.</li>
      </ol>

      <h3>A simple fictional XAUUSD plan</h3>
      <p>Imagine you trade XAUUSD during your planned London session. Your setup is a breakout and retest of the Asian high.</p>
      <ul>
        <li><strong>Entry condition:</strong> wait for a candle to close above the Asian high, then wait for the retest confirmation already written in your plan.</li>
        <li><strong>Risk check:</strong> set the stop and calculate position size from your chosen USD loss limit before entry.</li>
        <li><strong>No-trade condition:</strong> if a required condition is missing, this setup does not qualify under your plan.</li>
        <li><strong>After the trade:</strong> record the original plan, what you did, the result and whether you followed the rule.</li>
      </ul>
      <p>This is a fictional teaching example. It is not a live setup or a signal.</p>

      <h3>Plan, rule and checklist: what is the difference?</h3>
      <ul>
        <li><strong>Trading plan:</strong> your complete written framework.</li>
        <li><strong>Rule:</strong> one checkable condition inside the plan. <a href="/glossary/rule-based-trading">Rule-based trading</a> means using those predefined conditions during a decision.</li>
        <li><strong>Checklist:</strong> the short list you use before one considered trade. Your <a href="/glossary/pre-market-routine">pre-market routine</a> may prepare that checklist before the session starts.</li>
      </ul>
      <p>A plan can still contain judgment. The useful question is whether you wrote clearly enough to check the decision later.</p>

      <h3>Does a winning trade prove that you followed the plan?</h3>
      <p>No. A winning early entry can still be marked <strong>plan not followed</strong>. A losing trade can still match every written condition. Profit or loss tells you the result; <a href="/glossary/setup-compliance">setup compliance</a> checks whether the recorded decision matched your plan.</p>

      <h3>What changes for a prop-firm account?</h3>
      <p>Firm rules can differ by program, account stage and review period. Copy the exact current rule that applies to your account into your own plan. Do not rely on a universal percentage, trade limit or reset time.</p>

      <h3>What should you do next?</h3>
      <p>Write one setup in six lines: market, session, setup, entry, risk and record. Check whether each line is clear enough to answer <strong>yes</strong>, <strong>no</strong> or <strong>not applicable</strong> before the next planned trade.</p>
      <p>The <a href="/blogs/prop-firm-trading-rulebook">trading rulebook guide</a> shows the full writing process. Use the <a href="/blogs/trading-discipline-checklist">trading discipline checklist</a> for the short pre-trade check and the <a href="/blogs/trading-discipline-prop-firm">trading discipline guide</a> for the wider system. After the trade, use a <a href="/glossary/trade-review">trade review</a> to compare the record with the original plan.</p>
    `
  },
  {
    slug: 'setup-compliance',
    title: 'Setup Compliance',
    updatedAt: '2026-10-08',
    shortDefinition: 'Setup compliance checks whether a recorded trade matched the setup conditions written before entry. It checks the decision record, not whether the trade won or lost.',
    category: 'Trading Discipline',
    relatedTerms: ['trading-plan', 'rule-based-trading', 'trade-review', 'overtrading', 'trading-journal'],
    guide: { href: '/blogs/trading-discipline-checklist', label: 'Use the trading discipline checklist before a planned trade' },
    sourceIds: ['RES-011', 'RES-022', 'RES-025', 'PLAI-002', 'PLAI-005'],
    sources: [
      { id: 'RES-011', label: 'Zerodha Varsity — Your trading checklist', url: 'https://zerodha.com/varsity/chapter/your-trading-checklist/', checkedOn: '2026-10-04' },
      { id: 'RES-022', label: 'IG — Trading journal records and review', url: 'https://www.ig.com/uk/learn-to-trade/ig-academy/tools-for-traders/important-metrics?source=dailyfx', checkedOn: '2026-10-06' },
      { id: 'RES-025', label: 'IG — What is a trading plan?', url: 'https://www.ig.com/en/ig-academy/planning-and-risk-management/what-is-a-trading-plan', checkedOn: '2026-10-06' },
      { id: 'PLAI-002', label: 'PropLogAI — Manual trading journal', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
      { id: 'PLAI-005', label: 'PropLogAI — Rule and emotion records', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    visualNote: {
      src: '/glossary/images/setup-compliance-plan-vs-record-note.webp',
      alt: 'Handwritten XAUUSD setup-compliance note comparing six planned London-session conditions with the recorded trade, including one condition not met and one not recorded',
      caption: 'Place the plan beside the record. Mark what was met, not met or not recorded. Click or tap to enlarge.',
      label: 'Open the setup-compliance plan-versus-record learning note at a larger size',
    },
    proplogConnection: 'PropLogAI lets you manually record trade details, notes, screenshots, emotions and whether you followed your own rules. You still define the setup and check the record.',
    fullContent: `
      <h3>What is setup compliance?</h3>
      <p>Setup compliance checks whether a recorded trade matched the setup conditions you wrote before entry. It answers a process question: <strong>did the recorded decision match the original setup?</strong></p>
      <p>It does not prove that the setup is profitable, predict the next result or diagnose you as disciplined or undisciplined.</p>

      <h3>What do you need for a fair check?</h3>
      <ol>
        <li><strong>The original setup:</strong> the conditions written before the entry.</li>
        <li><strong>The trade record:</strong> the timestamped action, note, screenshot or other evidence showing what happened.</li>
        <li><strong>The comparison:</strong> apply the same wording later without rewriting the earlier rule.</li>
      </ol>

      <h3>A fictional XAUUSD example</h3>
      <p>Your <a href="/glossary/trading-plan">trading plan</a> says you may consider an XAUUSD breakout and retest of the Asian high during your planned London session.</p>
      <ol>
        <li>Instrument is XAUUSD: <strong>Met</strong>.</li>
        <li>Entry is inside the planned London window: <strong>Met</strong>.</li>
        <li>The Asian high has broken: <strong>Met</strong>.</li>
        <li>A candle has closed above the level: <strong>Not met</strong>. The record shows an entry before the candle closed.</li>
        <li>The planned retest confirmation appeared: <strong>Not recorded</strong>.</li>
        <li>The <a href="/glossary/stop-loss">stop loss</a> and <a href="/glossary/position-sizing">position size</a> were set from the written USD loss limit: <strong>Met</strong>.</li>
      </ol>
      <p>Because a required condition was not met, the recorded trade did not fully match this setup. This is a fictional teaching example, not a live setup or signal.</p>

      <h3>What does “not recorded” mean?</h3>
      <p><strong>Not recorded</strong> means the available note or screenshot does not show enough evidence to decide. Do not silently change missing evidence to <strong>Met</strong>. Add the missing field to future records if it matters to your review.</p>
      <p>Some conditions are simple yes-or-no checks. Others use a written range or definition. Use the wording that existed before the trade. <a href="/glossary/rule-based-trading">Rule-based trading</a> explains how those predefined conditions guide the decision.</p>

      <h3>Does profit or loss prove compliance?</h3>
      <p>No. A winning early entry can still be non-compliant. A losing trade can still match every written condition. The result and the setup check answer different questions.</p>
      <p>One trade also cannot prove that a setup works. Evaluating performance needs a clearly defined sample, consistent labels and stated calculation choices.</p>

      <h3>What should you do next?</h3>
      <p>Open one recent trade. Put the original setup beside the record and mark each condition <strong>Met</strong>, <strong>Not met</strong> or <strong>Not recorded</strong>. Do not rewrite the original rule to make the trade fit.</p>
      <p>Use a <a href="/glossary/trading-journal">trading journal</a> to preserve the evidence and a <a href="/glossary/trade-review">trade review</a> for the wider comparison. The <a href="/blogs/overtrading-prop-firm-challenges">overtrading guide</a> shows how repeated changes in setup, session, confirmation or size can be reviewed without judging the decision only by P&amp;L.</p>
    `
  },
  {
    slug: 'overtrading',
    title: 'Overtrading',
    aliases: ['Over trading', 'Excessive trading'],
    updatedAt: '2026-10-08',
    visual: 'overtrading-drift',
    shortDefinition: 'Overtrading means moving away from the trading process written before the decision, such as taking extra entries, extending the session, weakening the setup or changing size.',
    category: 'Trading Discipline',
    relatedTerms: ['fomo', 'revenge-trading', 'trading-plan'],
    guide: { href: '/blogs/overtrading-prop-firm-challenges', label: 'Review overtrading patterns in prop firm challenges' },
    sourceIds: ['RES-011', 'RES-022', 'RES-024', 'RES-025', 'RES-027', 'PLAI-002', 'PLAI-005'],
    sources: [
      { id: 'RES-027', label: 'Zerodha Varsity — Overtrading and Bad Ideas', url: 'https://zerodha.com/varsity/chapter/overtrading-and-bad-ideas/', checkedOn: '2026-10-08' },
      { id: 'RES-011', label: 'Zerodha Varsity — Your trading checklist', url: 'https://zerodha.com/varsity/chapter/your-trading-checklist/', checkedOn: '2026-10-04' },
      { id: 'RES-022', label: 'IG — Trading journal records and review', url: 'https://www.ig.com/uk/learn-to-trade/ig-academy/tools-for-traders/important-metrics?source=dailyfx', checkedOn: '2026-10-06' },
      { id: 'RES-024', label: 'NIST — Correlation does not prove causation', url: 'https://www.itl.nist.gov/div898/handbook/ppc/section1/ppc136.htm', checkedOn: '2026-10-06' },
      { id: 'RES-025', label: 'IG — What is a trading plan?', url: 'https://www.ig.com/en/ig-academy/planning-and-risk-management/what-is-a-trading-plan', checkedOn: '2026-10-06' },
      { id: 'PLAI-002', label: 'PropLogAI — Manual trading journal', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
      { id: 'PLAI-005', label: 'PropLogAI — Rule and emotion records', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    proplogConnection: 'PropLogAI lets you manually record the setup, session, size, emotion, notes, screenshots, P&L and whether you followed your own rules. It can organise those records for later review; it does not detect overtrading in real time, block orders or define a universal trade limit.',
    fullContent: `
      <h3>What is overtrading?</h3>
      <p>Overtrading means moving away from the trading process you wrote before the decision. The change may involve extra entries, session timing, setup quality, confirmation, position size or the reason for entering.</p>
      <p>It is not a universal number of trades. A high-frequency plan can produce many valid entries. A slower plan can drift after one unplanned trade. Compare the decision with your <a href="/glossary/trading-plan">trading plan</a>, not with somebody else's trade count.</p>

      <h3>High activity and overtrading are different</h3>
      <ul>
        <li><strong>High activity:</strong> several entries meet the same written rules and are recorded consistently.</li>
        <li><strong>Frequency change:</strong> extra trades appear without another planned setup.</li>
        <li><strong>Session change:</strong> you continue into a session that was not in your plan.</li>
        <li><strong>Setup or confirmation change:</strong> you weaken a condition or rename the setup after entry.</li>
        <li><strong>Size change:</strong> you change size because of the previous result instead of using the written method.</li>
      </ul>

      <h3>A fictional XAUUSD example</h3>
      <p>You record an XAUUSD plan using IST timestamps: trade only during the London session, wait for price to move beyond the Asian range and return, then require a breakout candle to close.</p>
      <p>The first trade follows the checklist and ends at <strong>−$38</strong>. Later, you enter a New York-session breakout after a missed move and write “wanted to recover the loss.” The later decision is reviewable as overtrading because the session, confirmation and reason changed—not because it was simply the second trade.</p>
      <p>This is a fictional teaching example, not a live setup or signal.</p>

      <h3>What should you check?</h3>
      <ol>
        <li><strong>Setup:</strong> did the entry meet the same conditions written before the session?</li>
        <li><strong>Confirmation:</strong> did the required candle close or checklist finish?</li>
        <li><strong>Session:</strong> was the entry inside the planned time window?</li>
        <li><strong>Size:</strong> did you use the same documented sizing method?</li>
        <li><strong>Reason:</strong> would you take the same trade if the previous result were <strong>$0</strong>?</li>
      </ol>
      <p><a href="/glossary/setup-compliance">Setup compliance</a> can help you compare these written conditions with the recorded action. Profit or loss does not decide whether the process changed.</p>

      <h3>Overtrading, revenge trading and FOMO are different</h3>
      <p><a href="/glossary/revenge-trading">Revenge trading</a> means recovering a recent loss becomes the purpose of the next decision. <a href="/glossary/fomo">FOMO</a> is pressure to act because a move appears to be leaving without you. Either may appear beside overtrading, but the terms are not interchangeable. Overtrading is the wider change from the written process.</p>

      <h3>What should you record?</h3>
      <p>Record the instrument, session, setup name, confirmation, size method, timestamp timezone, previous result, feeling, entry reason and whether the action matched your rules. Keep the feeling and decision change as separate facts; a journal association does not prove that one caused the other.</p>
      <p>A <a href="/glossary/trading-journal">trading journal</a> preserves the record. A <a href="/glossary/trade-review">trade review</a> compares several similar decisions without judging the process only by P&amp;L.</p>

      <h3>What should you do next?</h3>
      <p>Before another decision, write one sentence: <strong>What changed between my plan and this entry?</strong> Then compare several similar records before calling it a repeated pattern.</p>
      <p>The <a href="/blogs/overtrading-prop-firm-challenges">overtrading guide</a> gives the full review workflow. Use the <a href="/blogs/trading-discipline-prop-firm">trading discipline guide</a> for the wider process.</p>
    `
  },
  {
    slug: 'pre-market-routine',
    title: 'Pre-Market Routine',
    updatedAt: '2026-10-08',
    shortDefinition: 'A pre-market routine is a short sequence you complete before your planned trading session so the setup, account rules, risk and no-trade conditions are written before you consider an entry.',
    category: 'Trading Discipline',
    relatedTerms: ['trading-plan', 'rule-based-trading', 'setup-compliance', 'trading-journal'],
    guide: { href: '/blogs/trading-discipline-checklist', label: 'Use the trading discipline checklist before a planned entry' },
    sourceIds: ['RES-011', 'RES-022', 'RES-025', 'PLAI-002', 'PLAI-005'],
    sources: [
      { id: 'RES-011', label: 'Zerodha Varsity — Your trading checklist', url: 'https://zerodha.com/varsity/chapter/your-trading-checklist/', checkedOn: '2026-10-04' },
      { id: 'RES-022', label: 'IG — Trading journal records and review', url: 'https://www.ig.com/uk/learn-to-trade/ig-academy/tools-for-traders/important-metrics?source=dailyfx', checkedOn: '2026-10-06' },
      { id: 'RES-025', label: 'IG — What is a trading plan?', url: 'https://www.ig.com/en/ig-academy/planning-and-risk-management/what-is-a-trading-plan', checkedOn: '2026-10-06' },
      { id: 'PLAI-002', label: 'PropLogAI — Manual trading journal', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
      { id: 'PLAI-005', label: 'PropLogAI — Rule and emotion records', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    visualNote: {
      src: '/glossary/images/pre-market-routine-london-note.webp',
      alt: 'Handwritten pre-London-session XAUUSD checklist covering the calendar and firm rules, setup, confirmation and invalidation, USD risk and stop, and no-trade condition',
      caption: 'Prepare the checkable record before the planned session. The example uses IST only to record time. Click or tap to enlarge.',
      label: 'Open the pre-market routine XAUUSD checklist learning note at a larger size',
    },
    proplogConnection: 'PropLogAI lets you manually save the planned session, setup, notes, screenshots, emotion tag and whether you followed your own rules. It organises the record for later review; it does not decide whether you are ready or guarantee the quality of a trade.',
    fullContent: `
      <h3>What is a pre-market routine in trading?</h3>
      <p>A pre-market routine is a short sequence you complete before your planned trading session. It puts the setup, account rules, risk and no-trade conditions into words before price movement creates pressure.</p>
      <p>For a forex trader, “pre-market” does not have to mean before an exchange opens. If you trade from India, it may mean preparing before your planned London or New York session and recording the time in IST.</p>

      <h3>A fictional XAUUSD London-session routine</h3>
      <ol>
        <li><strong>Check the calendar and firm rules:</strong> review the events and exact current account rules that apply to your planned window.</li>
        <li><strong>Write the session and setup:</strong> record <strong>XAUUSD</strong>, <strong>London session</strong> and the setup name in your journal.</li>
        <li><strong>Mark only the levels your setup uses:</strong> this fictional setup uses the Asian high and low. Your setup may use different information.</li>
        <li><strong>Write confirmation and invalidation:</strong> record the required breakout close, retest and the condition that cancels the idea.</li>
        <li><strong>Write risk and stop:</strong> record the planned USD loss and why the stop belongs at that level.</li>
        <li><strong>Write the no-trade condition:</strong> state what must be missing or present for you to make no entry.</li>
      </ol>
      <p>Save the routine before considering an entry. This is a fictional preparation example, not a signal or a universal method.</p>

      <h3>Routine, plan and checklist are different</h3>
      <ul>
        <li><strong><a href="/glossary/trading-plan">Trading plan:</a></strong> the wider personal framework for what, when, why and how much you trade.</li>
        <li><strong>Pre-market routine:</strong> the preparation sequence completed before your planned session.</li>
        <li><strong>Checklist:</strong> the short set of conditions checked for one considered decision.</li>
      </ul>
      <p><a href="/glossary/rule-based-trading">Rule-based trading</a> explains how predefined conditions guide the decision. <a href="/glossary/setup-compliance">Setup compliance</a> checks later whether the recorded action matched those conditions.</p>

      <h3>Should every trader use the same routine?</h3>
      <p><strong>No.</strong> Your routine should match your strategy and the exact rules of your account. If your setup does not use Asian-session levels, do not add them only because this example does. There is no universal number of minutes, focus score, timeframe or market level that fits every trader.</p>

      <h3>What does completing the routine prove?</h3>
      <p>Completing the routine does not guarantee a valid setup, rule compliance, emotional control or profit. It creates a record that you can compare with the later decision.</p>
      <p>A <a href="/glossary/trading-journal">trading journal</a> preserves the preparation. A later <a href="/glossary/trade-review">trade review</a> can compare it with the actual action, while <a href="/glossary/position-sizing">position sizing</a>, <a href="/glossary/risk-per-trade">risk per trade</a> and the <a href="/glossary/stop-loss">stop loss</a> explain the risk fields.</p>

      <h3>What should you do next?</h3>
      <p>Write a five-step routine for your next planned session using your own setup and current account rules. Use the <a href="/blogs/trading-discipline-checklist">trading discipline checklist</a> for the practical pre-entry check, the <a href="/blogs/prop-firm-trading-rulebook">prop-firm rulebook guide</a> for the wider rule process and the <a href="/blogs/trading-discipline-prop-firm">trading discipline guide</a> for the full cluster.</p>
    `
  },
  {
    slug: 'trade-management',
    title: 'Trade Management',
    updatedAt: '2026-10-08',
    shortDefinition: 'Trade management means the decisions and actions taken after a position opens and before it is fully closed, compared with the management rules written before entry.',
    category: 'Trading Discipline',
    relatedTerms: ['trading-plan', 'stop-loss', 'risk-reward-ratio', 'setup-compliance', 'trade-review'],
    guide: { href: '/blogs/trading-discipline-checklist', label: 'Check the plan before entry with the trading discipline checklist' },
    sourceIds: ['RES-014', 'RES-015', 'RES-022', 'RES-025', 'PLAI-001', 'PLAI-002'],
    sources: [
      { id: 'RES-014', label: 'CME Group — Risk management and a trade plan', url: 'https://www.cmegroup.com/education/courses/building-a-trade-plan/risk-management-and-your-trade-plan', checkedOn: '2026-10-05' },
      { id: 'RES-015', label: 'FINRA — Stop-order trigger and execution risk', url: 'https://www.finra.org/investors/insights/stop-orders-factors-consider-during-volatile-markets', checkedOn: '2026-10-05' },
      { id: 'RES-022', label: 'IG — Trading journal records and review', url: 'https://www.ig.com/uk/learn-to-trade/ig-academy/tools-for-traders/important-metrics?source=dailyfx', checkedOn: '2026-10-06' },
      { id: 'RES-025', label: 'IG — What is a trading plan?', url: 'https://www.ig.com/en/ig-academy/planning-and-risk-management/what-is-a-trading-plan', checkedOn: '2026-10-06' },
      { id: 'PLAI-001', label: 'PropLogAI — Journal-data pattern analysis', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
      { id: 'PLAI-002', label: 'PropLogAI — Manual trading journal', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    visualNote: {
      src: '/glossary/images/trade-management-before-after-note.webp',
      alt: 'Handwritten XAUUSD trade-management note comparing the original stop, one allowed trigger and no-adding rule with the actual action, time and reason after entry',
      caption: 'Write the allowed action before entry, then compare it with what you actually did. Click or tap to enlarge.',
      label: 'Open the before-entry versus after-entry trade-management learning note at a larger size',
    },
    proplogConnection: 'PropLogAI lets you manually record entry, exit, stop, notes, screenshots and whether you followed your own rules. Journal analysis can organise saved records; it does not manage the open position or provide a signal.',
    fullContent: `
      <h3>What is trade management?</h3>
      <p>Trade management means the decisions and actions taken after a position opens and before it is fully closed. A useful review compares each action with the management rules written before entry.</p>
      <p>The rule may allow you to leave the original stop and exit unchanged, move a stop after a named trigger, take a partial exit, close the full position or add only under stated conditions. These are examples of management choices, not universal recommendations.</p>

      <h3>Why write the rule before entry?</h3>
      <p>Your <a href="/glossary/trading-plan">trading plan</a> can say which actions are allowed and what evidence permits each action. Writing the rule before entry makes the later comparison clearer when price movement and open P&amp;L create pressure.</p>
      <p>A management rule can still contain judgment. The aim is to make the reason clear enough to check from the record. <a href="/glossary/rule-based-trading">Rule-based trading</a> explains how predefined conditions are used during the decision.</p>

      <h3>A fictional XAUUSD example</h3>
      <p>Imagine the same XAUUSD London-session breakout-and-retest example used in the trading-plan cluster.</p>
      <ul>
        <li><strong>Before entry:</strong> the trader writes the original stop, one allowed management trigger and <strong>no adding</strong>.</li>
        <li><strong>After entry:</strong> price pulls back before the allowed trigger occurs.</li>
        <li><strong>Actual action:</strong> the trader moves the stop because they feel afraid of giving back open profit.</li>
        <li><strong>Review:</strong> moving the stop was a management action, and it did not match the rule written before entry.</li>
      </ul>
      <p>The trade may later win or lose. The result does not rewrite whether the recorded action matched the original rule. This is a fictional teaching example, not a signal or instruction.</p>

      <h3>What should you record?</h3>
      <ol>
        <li><strong>Original rule:</strong> the allowed action and its trigger.</li>
        <li><strong>Actual action:</strong> what changed, when it changed and the reason recorded at that time.</li>
        <li><strong>Final result:</strong> the exit and relevant costs, kept separate from the rule check.</li>
      </ol>
      <p>Your <a href="/glossary/trading-journal">trading journal</a> can preserve those records. Later, <a href="/glossary/setup-compliance">setup compliance</a> and a <a href="/glossary/trade-review">trade review</a> can compare the action with the original rule.</p>

      <h3>Does a stop guarantee the final price?</h3>
      <p>No. A <a href="/glossary/stop-loss">stop price</a> can be a trigger rather than the final execution price. Fast movement, gaps, the instrument, broker, platform and order type can affect the fill. Check the exact specification that applies to your account.</p>
      <p>A <a href="/glossary/risk-reward-ratio">risk-reward ratio</a> is one planning input. It is not a universal management method or a promise that the planned reward will be realised.</p>

      <h3>What should you do next?</h3>
      <p>Before the next planned trade, write which actions are allowed after entry and what evidence would permit each action. After the trade, compare the record with those words without changing them to fit the result.</p>
      <p>The <a href="/blogs/trading-discipline-checklist">trading discipline checklist</a> can help with the pre-entry check. Use the <a href="/blogs/trading-discipline-prop-firm">trading discipline guide</a> for the wider system.</p>
    `
  },
  {
    slug: 'rule-based-trading',
    title: 'Rule-Based Trading',
    aliases: ['Rules-based trading', 'Rule based trading system'],
    updatedAt: '2026-10-07',
    shortDefinition: 'Rule-based trading means making trading decisions with conditions written before the moment of action and clear enough to check later from the record.',
    category: 'Trading Discipline',
    relatedTerms: ['trading-plan', 'setup-compliance', 'pre-market-routine', 'position-sizing', 'trading-journal'],
    sourceIds: ['RES-011', 'RES-025', 'PLAI-002', 'PLAI-005'],
    sources: [
      { id: 'RES-011', label: 'Zerodha Varsity — Your trading checklist', url: 'https://zerodha.com/varsity/chapter/your-trading-checklist/', checkedOn: '2026-10-04' },
      { id: 'RES-025', label: 'IG — What is a trading plan?', url: 'https://www.ig.com/en/ig-academy/planning-and-risk-management/what-is-a-trading-plan', checkedOn: '2026-10-06' },
      { id: 'PLAI-002', label: 'PropLogAI — Manual trading journal', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
      { id: 'PLAI-005', label: 'PropLogAI — Rule and emotion records', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    visualNote: {
      src: '/glossary/images/rule-based-trading-checkable-rule-note.webp',
      alt: 'Handwritten comparison between the vague idea XAUUSD looks strong and six checkable conditions covering instrument, London session, Asian-high break, candle close, retest, stop and size',
      caption: 'A rule makes the decision checkable. It does not predict whether the trade will win. Click or tap to enlarge.',
      label: 'Open the vague-idea versus checkable-rule learning note at a larger size',
    },
    guide: { href: '/blogs/prop-firm-trading-rulebook', label: 'Write and maintain a practical trading rulebook' },
    proplogConnection: 'PropLogAI lets you record whether you followed your own rules with the trade details, notes, emotions and screenshots. It does not provide the rule or tell you what to trade.',
    fullContent: `
      <h3>What is rule-based trading?</h3>
      <p>Rule-based trading means making decisions with conditions you wrote before the moment of action. The conditions should be clear enough to check later from your note, timestamp, screenshot or other record.</p>
      <p>You can follow rules manually. Rule-based trading does not automatically mean algorithmic or fully automated trading.</p>

      <h3>Vague idea or checkable rule?</h3>
      <p><strong>Vague idea:</strong> “XAUUSD looks strong.” You may understand the feeling in the moment, but the sentence does not tell you what evidence was required.</p>
      <p><strong>Checkable rule:</strong> “During my planned London session, the Asian high has broken, a candle has closed above it, and the retest meets the confirmation written in my plan.”</p>
      <p>The second statement gives you facts to check. It still does not predict what price will do next.</p>

      <h3>A fictional six-step XAUUSD check</h3>
      <ol>
        <li>Is the instrument XAUUSD?</li>
        <li>Is it the planned London-session window?</li>
        <li>Has the Asian high broken?</li>
        <li>Has a candle closed above the level?</li>
        <li>Has the planned retest confirmation appeared?</li>
        <li>Are the <a href="/glossary/stop-loss">stop loss</a> and <a href="/glossary/position-sizing">position size</a> set from the written USD risk before entry?</li>
      </ol>
      <p>If a required condition is missing, the setup does not qualify under this trader's written rule. That statement checks the process. It is not a signal or a forecast.</p>

      <h3>Must every rule be yes or no?</h3>
      <p>Some rules are simple yes-or-no checks. Others need a written definition or an acceptable range. The aim is not to pretend that every judgment is mechanical. The aim is to make the decision clear enough for a later review.</p>

      <h3>How does it relate to a plan and setup compliance?</h3>
      <ul>
        <li><strong><a href="/glossary/trading-plan">Trading plan:</a></strong> the complete framework that contains the rules.</li>
        <li><strong>Rule-based trading:</strong> using the predefined conditions while making the decision.</li>
        <li><strong><a href="/glossary/setup-compliance">Setup compliance:</a></strong> checking afterward whether the recorded trade matched those conditions.</li>
      </ul>
      <p>A <a href="/glossary/pre-market-routine">pre-market routine</a> can help you prepare the conditions before the session. Your <a href="/glossary/trading-journal">trading journal</a> preserves what you wrote and what you actually did.</p>

      <h3>Can profit or loss tell you whether the rule was followed?</h3>
      <p>No. A winning early entry can still be marked <strong>rule not followed</strong>. A losing qualified setup can still be marked <strong>rule followed</strong>. The result and the rule check answer different questions.</p>

      <h3>Should you change the rule after entry?</h3>
      <p>Do not rewrite the earlier condition to make an open or completed trade appear valid. Record what was written before the trade. If you want to change the rule, do that separately after the trade or review period.</p>

      <h3>What should you do next?</h3>
      <p>Find one vague phrase in your own plan. Replace it with a condition you can check later from a note, timestamp or screenshot.</p>
      <p>The <a href="/blogs/prop-firm-trading-rulebook">trading rulebook guide</a> shows the full writing process. Use the <a href="/blogs/trading-discipline-checklist">trading discipline checklist</a> for the pre-entry check and the <a href="/blogs/trading-discipline-prop-firm">trading discipline guide</a> for the wider system.</p>
    `
  },

  // ─── Prop Firm (6) ───
  {
    slug: 'prop-firm-challenge',
    title: 'Prop Firm Challenge',
    updatedAt: '2026-10-08',
    shortDefinition: 'A prop firm challenge is an evaluation stage with a program-specific rule sheet. Reaching the profit target alone may not complete every condition.',
    category: 'Prop Firm',
    relatedTerms: ['funded-account', 'profit-target', 'daily-drawdown-limit', 'overall-drawdown-limit'],
    guide: { href: '/blogs/prop-firm-challenge-readiness', label: 'Use the complete prop firm challenge readiness check' },
    sourceIds: ['PFR-001', 'PFR-004', 'PFR-009', 'PFR-013', 'PFR-014', 'PFR-020', 'PLAI-002', 'PLAI-005'],
    sources: [
      { id: 'PFR-001', label: 'FTMO — 2-Step trading objectives', url: 'https://ftmo.com/en/trading-objectives/', checkedOn: '2026-10-08' },
      { id: 'PFR-004', label: 'FTMO — minimum trading days', url: 'https://ftmo.com/en/trading-objectives/', checkedOn: '2026-10-08' },
      { id: 'PFR-009', label: 'FundedNext — Stellar 2-Step profit targets', url: 'https://help.fundednext.com/en/articles/8021071-what-is-the-profit-target-of-the-stellar-2-step-challenge', checkedOn: '2026-10-08' },
      { id: 'PFR-020', label: 'FundedNext — CFD Challenge Terms', url: 'https://fundednext.com/cfd-challenge-terms', checkedOn: '2026-10-02' },
      { id: 'PLAI-002', label: 'PropLogAI — Manual trading journal', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    visualNote: {
      src: '/glossary/images/prop-firm-challenge-rule-sheet-note.webp',
      alt: 'Handwritten five-step prop firm challenge rule sheet covering profit target, daily loss, overall loss, time or trading days and other program rules',
      caption: 'A profit target is one condition. Check the complete rule sheet. Click or tap to enlarge.',
      label: 'Open the prop firm challenge rule-sheet learning note at a larger size',
    },
    proplogConnection: 'PropLogAI lets you manually record the rule values, trades, notes and whether you followed your own plan. It does not decide whether the firm has passed, failed or breached the account; the firm’s current dashboard, agreement and rules remain authoritative.',
    fullContent: `
      <h3>What is a prop firm challenge?</h3>
      <p>A prop firm challenge is an evaluation stage with a rule sheet for one named program. Many online programs use simulated accounts. You must meet every condition that applies and avoid the breaches listed by that program.</p>
      <p>Reaching the <a href="/glossary/profit-target">profit target</a> alone may not mean that you have passed.</p>

      <h3>What should you copy from the rule page?</h3>
      <ol>
        <li><strong>Profit target:</strong> the result required for the phase.</li>
        <li><strong><a href="/glossary/daily-drawdown-limit">Daily loss limit</a>:</strong> the daily floor and how the firm calculates it.</li>
        <li><strong><a href="/glossary/overall-drawdown-limit">Overall loss limit</a>:</strong> the account floor and whether it moves.</li>
        <li><strong>Time or trading-day condition:</strong> any minimum days, time limit or phase timing.</li>
        <li><strong>Other program rules:</strong> prohibited practices and conditions such as a <a href="/glossary/consistency-rule">consistency rule</a>, when applicable.</li>
      </ol>

      <h3>A fictional $100,000 XAUUSD example</h3>
      <p>Imagine you trade an XAUUSD breakout during the New York session and your account reaches the stated profit target. Before you call the challenge passed, check the other four lines: daily loss, overall loss, trading days or time, and every other program condition.</p>
      <p>The result may satisfy the target while another required condition is still incomplete. The firm’s current dashboard and rule page decide the status.</p>

      <h3>Two current examples</h3>
      <p><strong>Checked 8 October 2026.</strong></p>
      <ul>
        <li><strong>FTMO 2-Step:</strong> the checked page lists a 10% target for the Challenge and 5% for Verification.</li>
        <li><strong>FundedNext Stellar 2-Step:</strong> the checked page lists 8% for phase 1 and 5% for phase 2, with no time limit.</li>
      </ul>
      <p>These are examples from two named programs. They are not standard percentages for the industry. Rules can change, so check the exact product before you pay or trade.</p>

      <h3>What happens after you pass?</h3>
      <p>The next step depends on the program. It may include another phase, identity checks, an agreement or a <a href="/glossary/funded-account">funded account</a> stage. Passing does not by itself prove that the next account uses live capital or that a reward is guaranteed.</p>

      <h3>What should you do next?</h3>
      <p>Open the exact current program rules and write the five checks before your first trade. The <a href="/blogs/prop-firm-rules-guide">prop firm rules guide</a> explains the wider rule review, and the <a href="/blogs/prop-firm-challenge-readiness">challenge readiness guide</a> helps you prepare your own process.</p>
    `
  },
  {
    slug: 'funded-account',
    title: 'Funded Trading Account',
    aliases: ['Funded account'],
    updatedAt: '2026-10-08',
    shortDefinition: 'A funded trading account is a prop-firm account stage offered under an agreement. The word funded does not by itself prove that the account uses live capital.',
    category: 'Prop Firm',
    relatedTerms: ['prop-firm-challenge', 'daily-drawdown-limit', 'overall-drawdown-limit', 'consistency-rule'],
    guide: { href: '/blogs/prop-firm-payout-rules', label: 'Check the reward and payout conditions before you request money' },
    sourceIds: ['PFR-013', 'PFR-014', 'PFR-020', 'PFR-021', 'PFR-022', 'PLAI-002', 'PLAI-003', 'PLAI-005'],
    sources: [
      { id: 'PFR-013', label: 'FTMO — technical account model', url: 'https://ftmo.com/en/faq/how-does-the-ftmo-technical-infrastructure-work/', checkedOn: '2026-10-08' },
      { id: 'PFR-014', label: 'FundedNext — how its account model works', url: 'https://help.fundednext.com/en/articles/11982431-how-does-fundednext-work', checkedOn: '2026-10-08' },
      { id: 'PFR-021', label: 'FTMO — reward request workflow', url: 'https://ftmo.com/en/faq/how-do-i-withdraw-my-profits/', checkedOn: '2026-10-02' },
      { id: 'PFR-022', label: 'FundedNext — reward request workflow', url: 'https://help.fundednext.com/en/articles/8020084-how-can-i-withdraw-my-profits', checkedOn: '2026-10-02' },
      { id: 'PLAI-002', label: 'PropLogAI — Manual trading journal', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    visualNote: {
      src: '/glossary/images/funded-account-model-note.webp',
      alt: 'Handwritten four-step funded-account check covering the account label, simulated or live model, remaining rules and how a reward is earned',
      caption: 'The word funded is a label. The firm’s agreement explains the account model and reward rules. Click or tap to enlarge.',
      label: 'Open the funded trading account model learning note at a larger size',
    },
    proplogConnection: 'PropLogAI lets you manually record trades, rules, notes, screenshots and performance. It does not verify the firm’s account model, approve rewards or replace the official dashboard, agreement or support response.',
    fullContent: `
      <h3>What is a funded trading account?</h3>
      <p>In online prop trading, a funded trading account is an account stage offered under a firm’s agreement after its eligibility conditions are met. The word <strong>funded</strong> does not by itself tell you whether the account uses simulated or live capital.</p>

      <h3>Check these four questions</h3>
      <ol>
        <li><strong>What does the firm call this stage?</strong></li>
        <li><strong>Is the account simulated, live, or part of another model?</strong></li>
        <li><strong>Which loss and trading rules still apply?</strong></li>
        <li><strong>How is a monetary reward earned and requested?</strong></li>
      </ol>
      <p>The agreement, official account-model page and dashboard answer these questions. The account label alone does not.</p>

      <h3>A fictional $100,000 XAUUSD example</h3>
      <p>Imagine you pass a <a href="/glossary/prop-firm-challenge">prop firm challenge</a> and receive a stage labelled “$100,000 funded account.” That label does not prove that $100,000 in live capital was transferred to you.</p>
      <p>You still need to check the account model, the <a href="/glossary/daily-drawdown-limit">daily loss limit</a>, the <a href="/glossary/overall-drawdown-limit">overall loss limit</a>, any program-specific <a href="/glossary/consistency-rule">consistency rule</a>, prohibited practices and the reward conditions.</p>

      <h3>Two current account-model examples</h3>
      <p><strong>Checked 8 October 2026.</strong></p>
      <ul>
        <li><strong>FTMO:</strong> its checked technical page says FTMO Accounts are demo accounts with fictitious capital and clients do not trade on live markets.</li>
        <li><strong>FundedNext:</strong> its checked How It Works page describes the post-challenge stage as a simulated funded account with reward eligibility under its rules.</li>
      </ul>
      <p>These statements describe the checked products. They do not prove that every prop firm uses the same model. FTMO Futures also uses separate Sim-Funded and invitation-only Live Funded stages, so do not mix its futures wording with the CFD account described above.</p>

      <h3>Balance and reward are different</h3>
      <p>A displayed account balance is not automatically money you own or can withdraw. The agreement defines how trading performance may create a monetary reward, when a request is allowed and which conditions must be met.</p>

      <h3>What should you do next?</h3>
      <p>Read the account-model section and reward rules before relying on the word funded. Use the <a href="/blogs/prop-firm-payout-rules">prop firm payout rules guide</a> for the request checklist and the <a href="/blogs/prop-firm-challenge-readiness">challenge readiness guide</a> for the wider preparation process.</p>
    `
  },
  {
    slug: 'overall-drawdown-limit',
    title: 'Overall Drawdown Limit',
    aliases: ['Maximum Loss'],
    shortDefinition: 'An overall drawdown limit is the lowest account value allowed across the account period. The official floor may stay fixed or move under the program rules.',
    category: 'Prop Firm',
    updatedAt: '2026-10-08',
    relatedTerms: ['daily-drawdown-limit', 'drawdown', 'prop-firm-challenge', 'risk-per-trade'],
    guide: { href: '/blogs/daily-drawdown-calculator', label: 'Compare the official floor with the measured account value' },
    visualNote: {
      src: '/glossary/images/overall-drawdown-static-moving-note.webp',
      alt: 'Handwritten four-step overall drawdown note comparing a static floor with a moving floor and showing a 4500 dollar buffer above a 90000 dollar floor',
      caption: 'First identify whether the official floor is static or moving. Then compare the measured value with the current floor. Click or tap to enlarge.',
      label: 'Open the static versus moving overall drawdown learning note at a larger size',
    },
    sourceIds: ['PFR-003', 'PFR-005', 'PFR-008', 'PLAI-002', 'PLAI-005'],
    sources: [
      { id: 'PFR-003', label: 'FTMO — 2-Step Maximum Loss', url: 'https://ftmo.com/en/trading-objectives/', checkedOn: '2026-10-08' },
      { id: 'PFR-005', label: 'FTMO — 1-Step Maximum Loss', url: 'https://ftmo.com/en/trading-objectives/', checkedOn: '2026-10-08' },
      { id: 'PFR-008', label: 'FundedNext — Maximum Loss Limit', url: 'https://help.fundednext.com/en/articles/8019812-how-can-i-calculate-the-maximum-loss-limit', checkedOn: '2026-10-08' },
      { id: 'PLAI-002', label: 'PropLogAI — Manual trading journal', url: 'https://proplogai.com/', checkedOn: '2026-10-08' },
      { id: 'PLAI-005', label: 'PropLogAI — Rule and emotion records', url: 'https://proplogai.com/', checkedOn: '2026-10-08' },
    ],
    proplogConnection: 'PropLogAI lets you manually save the official floor, trades, notes and rule-adherence records. It does not calculate the firm’s official breach status or replace the current dashboard.',
    fullContent: `
      <h3>What is an overall drawdown limit?</h3>
      <p>An overall drawdown limit is the lowest account value allowed across the account period. A firm may call it <strong>maximum loss</strong>.</p>
      <p>The first question is whether the official floor stays fixed or can move. Do not calculate the buffer until you know which model applies to your exact program and stage.</p>

      <h3>What do static, trailing and end-of-day trailing mean?</h3>
      <ul>
        <li><strong>Static floor:</strong> it stays at the same level unless the current rules state another adjustment.</li>
        <li><strong>Trailing floor:</strong> it can move higher as the stated balance or equity reference rises.</li>
        <li><strong>End-of-day trailing floor:</strong> it updates at a daily checkpoint instead of moving with every price change.</li>
      </ul>
      <p>The words alone are not enough. Check the reference value, update time, whether the floor can stop moving, and what happens after a reward or withdrawal.</p>

      <h3>A fictional $100,000 static-floor example</h3>
      <p>Imagine your program dashboard shows a static overall floor of <strong>$90,000</strong>. After an XAUUSD New York-session trade, the measured equity is <strong>$94,500</strong>.</p>
      <p><strong>$94,500 − $90,000 = $4,500 buffer above the floor.</strong></p>
      <p>The $4,500 is distance from the floor, not a recommended amount to risk. If the dashboard instead showed a current moving floor of $92,000, you would use that official current floor rather than the starting $90,000 example.</p>

      <h3>Three current rule examples</h3>
      <p><strong>Checked 8 October 2026.</strong></p>
      <ul>
        <li><strong>FTMO 2-Step:</strong> the checked page uses a static 10% Maximum Loss amount. Its $100,000 example has a $90,000 floor.</li>
        <li><strong>FTMO 1-Step:</strong> the checked page describes Maximum Loss as end-of-day trailing. The floor can rise after a profitable day and does not move lower after a loss.</li>
        <li><strong>FundedNext Stellar 2-Step:</strong> the checked example uses a fixed $90,000 floor for a $100,000 account.</li>
      </ul>
      <p>These examples belong only to the named programs and checked date. The percentage, reference and breach action can differ in another program.</p>

      <h3>Daily and overall limits can both apply</h3>
      <p>A trader can remain above the overall floor and still cross the <a href="/glossary/daily-drawdown-limit">daily drawdown limit</a>. Check both rules before and during the session. The firm's dashboard and current agreement decide the official result.</p>

      <h3>What should you do next?</h3>
      <p>Copy the current official overall floor from the dashboard. Write whether it is static, trailing or end-of-day trailing, what value is measured and when it updates. The <a href="/blogs/daily-drawdown-calculator">drawdown calculator guide</a> shows the same official-floor comparison, while <a href="/glossary/drawdown">drawdown</a> explains the broader performance decline.</p>
    `
  },
  {
    slug: 'profit-target',
    title: 'Profit Target',
    shortDefinition: 'A prop-firm profit target is the net-profit objective for a specific evaluation phase. It is one condition in the full rule set.',
    category: 'Prop Firm',
    updatedAt: '2026-10-05',
    relatedTerms: ['prop-firm-challenge', 'consistency-rule', 'funded-account'],
    guide: { href: '/blogs/prop-firm-rules-guide', label: 'Check the full prop-firm rule set before buying a challenge' },
    visualNote: {
      src: '/glossary/images/profit-target-one-condition-note.webp',
      alt: 'Handwritten fictional 100000 dollar account example showing an 8 percent profit target and a checklist of other phase conditions',
      caption: 'The calculation gives one phase target. The firm’s current dashboard and rules decide the official status. Click or tap to enlarge.',
      label: 'Open the prop-firm profit-target learning note at a larger size',
    },
    sourceIds: ['PFR-001', 'PFR-009', 'PLAI-004'],
    sources: [
      { id: 'PFR-001', label: 'FTMO trading objectives', url: 'https://ftmo.com/en/trading-objectives/', checkedOn: '2026-10-05' },
      { id: 'PFR-009', label: 'FundedNext Stellar 2-Step profit target', url: 'https://help.fundednext.com/en/articles/8021071-what-is-the-profit-target-of-the-stellar-2-step-challenge', checkedOn: '2026-10-05' },
      { id: 'PLAI-004', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-10-05' },
    ],
    proplogConnection: 'PropLogAI provides a P&L calendar from the trades you log. It can help you review progress, while the firm’s current dashboard and rules remain the source for the official target and pass status.',
    fullContent: `
      <h3>What is a profit target in a prop firm challenge?</h3>
      <p>A profit target is the net-profit objective for one phase of a <a href="/glossary/prop-firm-challenge">prop firm challenge</a>. The percentage and the amount it is calculated from come from that program's current rules.</p>
      <p>Reaching the number does not replace the other conditions. The firm's current dashboard, contract and rule page decide whether the phase is complete.</p>

      <h3>How do you calculate the target?</h3>
      <p><strong>Program reference amount × stated target percentage = target amount.</strong></p>
      <p>Here is a fictional example:</p>
      <p><strong>$100,000 × 8% = $8,000</strong></p>
      <p>If the program uses the starting amount as its reference, the arithmetic target is $8,000 and the matching ending balance would be $108,000. This example only explains the multiplication. It does not mean every challenge uses 8%.</p>

      <h3>Why the target amount and official status can differ</h3>
      <p>You may see the target amount in your own calculation before the firm marks the phase complete. Check:</p>
      <ol>
        <li>Whether open profit counts or positions must be closed.</li>
        <li>How commissions, spreads, swaps or other costs affect net profit.</li>
        <li>Whether you respected the <a href="/glossary/daily-drawdown-limit">daily drawdown limit</a> and <a href="/glossary/overall-drawdown-limit">overall drawdown limit</a>.</li>
        <li>Whether minimum days, a <a href="/glossary/consistency-rule">consistency rule</a>, prohibited practices, KYC or another condition applies.</li>
        <li>Whether the program uses a reset, retry or another pass process.</li>
      </ol>

      <h3>Current examples show that programs differ</h3>
      <ul>
        <li><strong>FTMO 2-Step:</strong> its page checked on 5 October 2026 lists 10% for the Challenge and 5% for Verification. It also describes a closed-position condition.</li>
        <li><strong>FundedNext Stellar 2-Step:</strong> its page checked on 5 October 2026 lists 8% for Phase 1 and 5% for Phase 2. The later FundedNext Account described on that page has no profit target.</li>
      </ul>
      <p>These values belong only to the named programs and checked pages. They can change. Always read the rule page for your exact program and stage.</p>

      <h3>A phase target is not a daily quota</h3>
      <p>An 8% phase target does not tell you to make 8% in one day. It is not a reason to increase size, force an XAUUSD trade or trade outside your plan. Work from your normal setup and risk rules.</p>
      <p>A later <a href="/glossary/funded-account">funded account</a> may use different objectives or no profit target. The agreement for that stage controls.</p>

      <h3>How PropLogAI helps</h3>
      <p>PropLogAI's P&amp;L calendar can help you review the progress recorded in your journal. It does not replace the firm's dashboard or decide whether you passed. The <a href="/blogs/prop-firm-rules-guide">prop-firm rules guide</a> gives you the wider checklist.</p>
    `
  },
  {
    slug: 'consistency-rule',
    title: 'Consistency Rule',
    shortDefinition: 'A consistency rule checks whether too much of your total profit came from one day or one trade. Your firm decides the formula, limit, and what happens when you are over it.',
    category: 'Prop Firm',
    updatedAt: '2026-10-08',
    visual: 'consistency-ratio-note',
    guide: { href: '/blogs/prop-firm-consistency-calculator', label: 'Calculate a best-day percentage and understand its limits' },
    relatedTerms: ['profit-target', 'funded-account', 'prop-firm-challenge'],
    sourceIds: ['PFR-010', 'PFR-011', 'PFR-016', 'PFR-017', 'PFR-018', 'PFR-019', 'PLAI-002', 'PLAI-004'],
    sources: [
      { id: 'PFR-010', label: 'Topstep Trading Combine consistency target', url: 'https://help.topstep.com/en/articles/8284208-consistency-at-topstep', checkedOn: '2026-09-29' },
      { id: 'PFR-011', label: 'Topstep Express Funded Account consistency path', url: 'https://help.topstep.com/en/articles/8284208-consistency-at-topstep', checkedOn: '2026-09-29' },
      { id: 'PFR-016', label: 'Tradeify consistency rule', url: 'https://help.tradeify.co/en/articles/10468320-rules-consistency-rule', checkedOn: '2026-10-08' },
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
      <p>Use the <a href="/tools/consistency-calculator">PropLogAI consistency calculator</a> and choose the best-day or best-trade mode that matches your firm’s rule. Read the <a href="/blogs/prop-firm-consistency-calculator">consistency rule calculator guide</a> for the complete worked method. Use the <a href="/blogs/prop-firm-challenge-readiness">prop firm challenge readiness guide</a> when you need to check this alongside profit targets and drawdown rules.</p>
    `
  },
  {
    slug: 'daily-drawdown-limit',
    title: 'Daily Drawdown Limit',
    aliases: ['Maximum Daily Loss'],
    shortDefinition: 'A daily drawdown limit is the official account floor that applies during one firm-defined trading day. Some firms call it maximum daily loss.',
    category: 'Prop Firm',
    updatedAt: '2026-10-08',
    relatedTerms: ['overall-drawdown-limit', 'drawdown', 'risk-per-trade', 'prop-firm-challenge'],
    guide: { href: '/blogs/daily-drawdown-calculator', label: 'Use the daily drawdown calculator with your official floor' },
    visualNote: {
      src: '/glossary/images/daily-drawdown-floor-note.webp',
      alt: 'Handwritten four-step daily drawdown note showing an official 95000 dollar floor, 96200 dollar measured equity and a 1200 dollar buffer that is not planned risk',
      caption: 'Copy the firm’s official floor, compare it with the measured value and keep the buffer separate from your planned trade risk. Click or tap to enlarge.',
      label: 'Open the daily drawdown floor learning note at a larger size',
    },
    sourceIds: ['PFR-002', 'PFR-006', 'PFR-007', 'PFR-015', 'PLAI-002', 'PLAI-005'],
    sources: [
      { id: 'PFR-002', label: 'FTMO — Trading Objectives', url: 'https://ftmo.com/en/trading-objectives/', checkedOn: '2026-10-08' },
      { id: 'PFR-006', label: 'FundedNext — Maximum Daily Loss Limit', url: 'https://help.fundednext.com/en/articles/8019914-what-is-the-maximum-daily-loss-limit', checkedOn: '2026-10-08' },
      { id: 'PFR-007', label: 'FundedNext — Stellar 1-Step Daily Loss', url: 'https://help.fundednext.com/en/articles/8019914-what-is-the-maximum-daily-loss-limit', checkedOn: '2026-10-08' },
      { id: 'PFR-015', label: 'FundedNext — Stellar Lite Daily Loss', url: 'https://help.fundednext.com/en/articles/8019914-what-is-the-maximum-daily-loss-limit', checkedOn: '2026-10-08' },
      { id: 'PLAI-002', label: 'PropLogAI — Manual trading journal', url: 'https://proplogai.com/', checkedOn: '2026-10-08' },
      { id: 'PLAI-005', label: 'PropLogAI — Rule and emotion records', url: 'https://proplogai.com/', checkedOn: '2026-10-08' },
    ],
    proplogConnection: 'PropLogAI lets you manually save the daily floor, reset time, trades, notes and whether you followed your own risk rule. The firm’s current dashboard and rules remain authoritative.',
    fullContent: `
      <h3>What is a daily drawdown limit?</h3>
      <p>A daily drawdown limit is the official account floor that applies during one firm-defined trading day. Some firms call it <strong>maximum daily loss</strong>.</p>
      <p>If the account value measured by the rule reaches or crosses that floor, the firm may treat it as a violation. The exact calculation and consequence come from your named program.</p>

      <h3>Check these four things before you trade</h3>
      <ol>
        <li><strong>Reference value:</strong> what number sets today's floor?</li>
        <li><strong>Measured value:</strong> does the rule test balance, equity or another value?</li>
        <li><strong>Included amounts:</strong> do open P&amp;L, swaps and commissions count?</li>
        <li><strong>Reset time:</strong> when does the firm's trading day restart?</li>
      </ol>
      <p>Do not assume the reset happens at midnight in India. Check the firm's current server time and dashboard.</p>

      <h3>A fictional $100,000 XAUUSD example</h3>
      <p>Imagine you are holding an XAUUSD London-session breakout. Your dashboard shows an official daily floor of <strong>$95,000</strong>. Open loss and costs bring the measured equity to <strong>$96,200</strong>.</p>
      <p><strong>$96,200 − $95,000 = $1,200 buffer above the floor.</strong></p>
      <p>The $1,200 is not an amount you should risk. It only shows the current distance from the official floor. Your planned trade risk should come from your own <a href="/glossary/risk-per-trade">risk-per-trade</a> rule.</p>

      <h3>Two current rule examples</h3>
      <p><strong>Checked 8 October 2026.</strong></p>
      <ul>
        <li><strong>FTMO 2-Step:</strong> the checked page uses a 5% Maximum Daily Loss amount based on the initial simulated capital. It recalculates the floor at 00:00 CE(S)T from the balance recorded then and tests equity including open P&amp;L, swaps and commissions.</li>
        <li><strong>FundedNext:</strong> the checked page lists 5% for Stellar 2-Step, 3% for Stellar 1-Step and 4% for Stellar Lite. It says running loss and closed loss are counted.</li>
      </ul>
      <p>These are dated examples from named programs. They are not standard limits for every firm. Both checked sources describe crossing the applicable limit as a violation, but the exact account action must be checked in your own program's current rules.</p>

      <h3>What should you do next?</h3>
      <p>Before your session starts, copy three lines from the current dashboard or rule page: the official floor, the value the firm measures and the reset time. Then use the <a href="/blogs/daily-drawdown-calculator">daily drawdown calculator</a> to check the buffer without treating it as planned risk.</p>
      <p>Read <a href="/glossary/overall-drawdown-limit">overall drawdown limit</a> separately because the daily and overall floors can both apply at the same time.</p>
    `
  },

  // ─── Journal & Analysis (6) ───
  {
    slug: 'trading-journal',
    title: 'Trading Journal',
    aliases: ['Trade journal', 'Forex trading journal'],
    updatedAt: '2026-10-06',
    visual: 'trading-journal-loop',
    shortDefinition: 'A trading journal records what you planned, what you actually did, and what happened, so the decision can be checked separately from the profit or loss.',
    category: 'Journal & Analysis',
    relatedTerms: ['trade-review', 'emotion-tracking', 'setup-compliance', 'performance-report'],
    guide: { href: '/blogs/prop-firm-trading-journal', label: 'Build a complete prop firm trading journal workflow' },
    sourceIds: ['RES-022', 'PLAI-002', 'PLAI-005'],
    sources: [
      { id: 'RES-022', label: 'IG — Keeping track of your trading performance', url: 'https://www.ig.com/uk/learn-to-trade/ig-academy/tools-for-traders/important-metrics?source=dailyfx', checkedOn: '2026-10-06' },
      { id: 'PLAI-002/005', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    proplogConnection: 'PropLogAI lets you manually log trade details, notes, emotions, rule adherence and screenshots. The record is only as complete as what you enter.',
    fullContent: `
      <h3>What is a trading journal?</h3>
      <p>A trading journal is a record of what you planned, what you actually did and what happened. It preserves details that profit and loss alone cannot show, such as the setup you saw, the confirmation you waited for and whether you changed the plan.</p>

      <h3>Simple XAUUSD journal example</h3>
      <p>Imagine you are watching XAUUSD during the London session. Your setup is a breakout above the Asian-session high.</p>
      <ol>
        <li><strong>Plan:</strong> Wait for price to break the Asian high and for a candle to close above it. Use the stop and size written before entry.</li>
        <li><strong>What I did:</strong> Entered after the candle closed, used the planned stop and made no unplanned change.</li>
        <li><strong>Result and note:</strong> +$85 after the stated costs. Emotion: calm. Plan followed: yes. Screenshot attached.</li>
      </ol>
      <p>Now compare that with a trade that made <strong>+$120</strong> after you entered before the candle closed. The result was profitable, but the record should still say <strong>plan not followed</strong>. Profit does not rewrite the decision.</p>

      <h3>What should one entry record?</h3>
      <ul>
        <li><strong>Context:</strong> date, time, timezone, instrument, session, setup and timeframe.</li>
        <li><strong>Plan:</strong> the conditions required before entry, the invalidation point and the planned exit method.</li>
        <li><strong>Execution:</strong> actual entry, exit, size or planned risk, and any change made during the trade.</li>
        <li><strong>Result:</strong> profit, loss or breakeven in USD, with commission, swap or other costs stated.</li>
        <li><strong>Process note:</strong> whether your rules were followed, one <a href="/glossary/emotion-tracking">emotion tag</a>, a screenshot and one factual note.</li>
      </ul>

      <h3>Why is broker history not enough?</h3>
      <p>Your account history can show the order, entry, exit and result. It cannot always show why you entered, which setup you believed was present or whether the action matched your written conditions. The journal adds that missing decision context.</p>

      <h3>Journal entry vs trade review</h3>
      <p>A journal entry records the evidence from one trade. A <a href="/glossary/trade-review">trade review</a> checks that evidence against the plan. A weekly or monthly review compares several entries and looks for something repeated.</p>
      <p>Use stable labels such as <strong>XAUUSD</strong>, <strong>London</strong> and <strong>breakout</strong>. If the same idea has a different name in every entry, later comparisons become confusing. The <a href="/blogs/trading-journal-template">trading journal template</a> gives you a reusable form, while the <a href="/blogs/prop-firm-trading-journal">prop firm trading journal guide</a> explains the complete record-to-review workflow.</p>

      <h3>What should you do next?</h3>
      <p>Record your next completed trade using the same three parts: plan, what you did, and result with one factual note. Add more fields only when you know which review question they should answer.</p>
    `
  },
  {
    slug: 'trade-review',
    title: 'Trade Review',
    aliases: ['Post-trade review'],
    updatedAt: '2026-10-06',
    shortDefinition: 'A trade review is a post-trade check that compares the written plan with the actual execution, confirms the recorded result, and ends with one evidence-based observation.',
    category: 'Journal & Analysis',
    relatedTerms: ['trading-journal', 'setup-compliance', 'performance-report'],
    guide: { href: '/blogs/prop-firm-trading-journal', label: 'See the complete journal-to-review workflow' },
    sourceIds: ['RES-022', 'RES-020', 'PLAI-002', 'PLAI-003', 'PLAI-005'],
    sources: [
      { id: 'RES-022', label: 'IG — Keeping track of your trading performance', url: 'https://www.ig.com/uk/learn-to-trade/ig-academy/tools-for-traders/important-metrics?source=dailyfx', checkedOn: '2026-10-06' },
      { id: 'RES-020', label: 'MetaTrader 5 — Trading report', url: 'https://www.metatrader5.com/en/terminal/help/trading/report', checkedOn: '2026-10-06' },
      { id: 'PLAI-002/003/005', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    visualNote: {
      src: '/glossary/images/trade-review-decision-note.webp',
      alt: 'Handwritten four-step XAUUSD trade review showing the plan, execution, record check and one observation, with a reminder that a profitable early entry is still a rule break',
      caption: 'Check the decision against the plan before the result changes how you remember the trade. Click or tap to enlarge.',
      label: 'Open the trade-review decision learning note at a larger size',
    },
    proplogConnection: 'PropLogAI lets you manually record trade details, notes, emotions and whether you followed your own rules. A review depends on those records and does not guarantee or automatically prove a conclusion.',
    fullContent: `
      <h3>What is a trade review?</h3>
      <p>A trade review is the check you make after a trade. You compare the written plan with what you actually did, confirm the entry, exit, costs and result, then write one factual observation.</p>
      <p><strong>A profit does not prove that you followed the plan. A loss does not prove that the decision was wrong.</strong> Review the decision and the result as two separate pieces of information.</p>

      <h3>Simple XAUUSD trade review</h3>
      <p>Use the same fictional XAUUSD London-session breakout from the <a href="/glossary/trading-journal">trading journal</a> example:</p>
      <ol>
        <li><strong>Plan:</strong> Wait for the Asian high to break and for a candle to close above it.</li>
        <li><strong>Execution:</strong> Entered after the close, used the planned stop and made no unplanned change.</li>
        <li><strong>Record check:</strong> Entry, exit, stated costs and the +$85 result match the account history.</li>
        <li><strong>One observation:</strong> The written conditions and the recorded action matched in this trade. That does not prove the setup will work next time.</li>
      </ol>
      <p>Now imagine you entered before the candle closed and still made <strong>+$120</strong>. The review should call it a <strong>profitable rule break</strong>. The outcome was positive, while <a href="/glossary/setup-compliance">setup compliance</a> was not complete.</p>

      <h3>What should you check?</h3>
      <ol>
        <li>Is the journal entry complete enough to review?</li>
        <li>Did the planned setup and confirmation actually appear?</li>
        <li>Did you change the entry, exit, stop, size or reason?</li>
        <li>Do the execution, costs and result match the account history?</li>
        <li>What one factual note should you carry into a later multi-trade review?</li>
      </ol>

      <h3>Trade review vs performance report</h3>
      <p>A trade review checks one completed decision. A <a href="/glossary/performance-report">trading performance report</a> summarises a defined group of trades. The first helps you understand one record; the second helps you compare results and recorded process across a larger sample.</p>

      <h3>Trade review vs weekly or monthly review</h3>
      <p>A single-trade review can happen after the trade or at a consistent later time. A weekly or monthly review compares several completed entries to see whether a pattern repeats. There is no universal five-minute, thirty-minute or one-hour schedule that every trader must follow.</p>
      <p>Use the <a href="/blogs/weekly-trading-review-template">weekly trading review template</a> or <a href="/blogs/monthly-trading-review-template">monthly trading review template</a> when you are ready to compare several records.</p>

      <h3>What should you do next?</h3>
      <p>Open one completed journal entry and mark it <strong>plan matched</strong>, <strong>plan changed</strong> or <strong>record incomplete</strong>. Then write one factual sentence. Do not turn one trade into a universal rule or a prediction about the next result.</p>
    `
  },
  {
    slug: 'emotion-tracking',
    title: 'Emotion Tracking',
    shortDefinition: 'Emotion tracking means recording a short feeling tag beside a specific trading moment and the observable decision that followed. The feeling is context; it does not prove what caused the result.',
    category: 'Journal & Analysis',
    updatedAt: '2026-10-08',
    relatedTerms: ['trading-journal', 'trade-review', 'trading-plan', 'setup-compliance', 'tilt', 'fomo', 'revenge-trading'],
    visualNote: {
      src: '/glossary/images/emotion-tracking-feeling-urge-action-note.webp',
      alt: 'Handwritten XAUUSD London-session note separating a frustrated feeling, the urge to recover 35 dollars, a plan to wait for the breakout candle to close, an early entry and the separate result',
      caption: 'Record the feeling, urge and observable action separately. Keep P&L as the result, not proof of cause. Click or tap to enlarge.',
      label: 'Open the emotion-tracking learning note at a larger size',
    },
    guide: { href: '/blogs/how-emotions-affect-trading-decisions', label: 'See how a feeling may appear beside a change in a trading decision' },
    sourceIds: ['RES-009', 'RES-010', 'RES-011', 'RES-022', 'RES-024', 'RES-025', 'PLAI-002', 'PLAI-005'],
    sources: [
      { id: 'RES-009', label: 'Zerodha Varsity — Controlling your trading emotions', url: 'https://zerodha.com/varsity/chapter/controlling-your-trading-emotions/', checkedOn: '2026-09-25' },
      { id: 'RES-010', label: 'OANDA — Understanding emotions in trading', url: 'https://www.oanda.com/us-en/skills-and-insights/education/trading-psychology/emotions-in-trading/trading-psychology-understanding-your-emotions/', checkedOn: '2026-09-25' },
      { id: 'RES-011', label: 'Zerodha Varsity — Your trading checklist', url: 'https://zerodha.com/varsity/chapter/your-trading-checklist/', checkedOn: '2026-10-04' },
      { id: 'RES-022', label: 'IG — Trading journal records and review', url: 'https://www.ig.com/uk/learn-to-trade/ig-academy/tools-for-traders/important-metrics?source=dailyfx', checkedOn: '2026-10-06' },
      { id: 'RES-024', label: 'NIST — Correlation does not prove causation', url: 'https://www.itl.nist.gov/div898/handbook/ppc/section1/ppc136.htm', checkedOn: '2026-10-06' },
      { id: 'RES-025', label: 'IG — What is a trading plan?', url: 'https://www.ig.com/en/ig-academy/planning-and-risk-management/what-is-a-trading-plan', checkedOn: '2026-10-06' },
      { id: 'PLAI-002/005', label: 'PropLogAI — Manual journal and emotion records', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    proplogConnection: 'PropLogAI lets you manually add an emotion tag beside the setup, session, notes, screenshots, P&L and whether the trade followed your own rules. It does not sense emotions, diagnose you or prove that a feeling caused a result.',
    fullContent: `
      <h3>What is emotion tracking in trading?</h3>
      <p>Emotion tracking means recording a short feeling tag beside a specific trading moment and the observable decision that followed. It gives you context for a later review.</p>
      <p>The feeling, the action and the result are separate facts. A tag does not prove that the feeling caused a profit, loss or rule break.</p>

      <h3>Five simple tags you can use</h3>
      <ul>
        <li><strong>Calm:</strong> you feel able to check the plan without rushing.</li>
        <li><strong>Hesitant:</strong> you keep delaying a decision that the plan already covers.</li>
        <li><strong>Frustrated:</strong> a recent result is still holding your attention.</li>
        <li><strong>Rushed:</strong> you feel pressure to act before the move continues.</li>
        <li><strong>Confident:</strong> you feel sure about the decision, so you still check whether the written rules stayed the same.</li>
      </ul>
      <p>You can use different short words. Keep the labels simple and use them consistently.</p>

      <h3>What should you record?</h3>
      <ol>
        <li><strong>Time and session:</strong> write the timestamp and whether it was the Asian, London or New York session.</li>
        <li><strong>Feeling:</strong> choose one short tag, such as calm or frustrated.</li>
        <li><strong>Urge:</strong> write what you felt like doing, such as enter early or recover a loss.</li>
        <li><strong>Planned condition:</strong> copy the condition from your <a href="/glossary/trading-plan">trading plan</a>.</li>
        <li><strong>Observable action:</strong> write what you actually did.</li>
        <li><strong>Result:</strong> keep P&amp;L in a separate field.</li>
      </ol>

      <h3>A fictional XAUUSD example</h3>
      <p>During the London session, your planned XAUUSD breakout requires the candle to close before entry. A completed trade ends at <strong>−$35</strong>.</p>
      <p>You record <strong>frustrated</strong>, notice the urge to make back the $35 and enter the next setup before the breakout candle closes. The useful record is: <strong>frustrated + urge to recover + entered before confirmation</strong>.</p>
      <p>Do not write “frustration caused the loss.” Use <a href="/glossary/setup-compliance">setup compliance</a> to compare the observable action with the condition written before entry.</p>

      <h3>When should you record it?</h3>
      <ul>
        <li><strong>Before entry:</strong> record one feeling and the planned condition.</li>
        <li><strong>During the trade:</strong> add a note if an urge or management decision changes.</li>
        <li><strong>After exit:</strong> record the action and result separately.</li>
      </ul>
      <p>Keep each entry short enough that you can use the same method consistently.</p>

      <h3>How should you review the records?</h3>
      <p>Use a <a href="/glossary/trade-review">trade review</a> to compare several similar records. Check the setup, session, size, rule adherence and P&amp;L beside the emotion tag. A repeated association gives you a question to investigate; it does not prove cause.</p>
      <p>Terms such as <a href="/glossary/tilt">tilt</a>, <a href="/glossary/fomo">FOMO</a> and <a href="/glossary/revenge-trading">revenge trading</a> describe different patterns. Do not apply one of those labels from a single feeling tag.</p>

      <h3>What should you do next?</h3>
      <p>On your next reviewed trade, record one feeling and one observable decision. The <a href="/blogs/how-emotions-affect-trading-decisions">emotion and decision guide</a> shows one detailed example, while the <a href="/blogs/tracking-trading-emotions">emotion-tracking guide</a> gives the complete reusable workflow.</p>
    `
  },
  {
    slug: 'pattern-recognition',
    title: 'Pattern Recognition',
    shortDefinition: 'Pattern recognition in a trading journal means finding the same recorded combination across a defined group of trades. It is a clue to inspect, not proof of what caused the result.',
    category: 'Journal & Analysis',
    updatedAt: '2026-10-06',
    relatedTerms: ['trade-review', 'trading-journal', 'performance-report', 'ai-trading-coach', 'emotion-tracking'],
    sourceIds: ['RES-022', 'RES-023', 'RES-024', 'PLAI-001', 'PLAI-002', 'PLAI-005'],
    sources: [
      { id: 'RES-022', label: 'IG — Keeping track of your trading performance', url: 'https://www.ig.com/uk/learn-to-trade/ig-academy/tools-for-traders/important-metrics?source=dailyfx', checkedOn: '2026-10-06' },
      { id: 'RES-023', label: 'NIST — Generative AI Profile', url: 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf', checkedOn: '2026-10-06' },
      { id: 'RES-024', label: 'NIST/SEMATECH — Correlation and causality', url: 'https://www.itl.nist.gov/div898/handbook/ppc/section1/ppc136.htm', checkedOn: '2026-10-06' },
      { id: 'PLAI-001/002/005', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    visualNote: {
      src: '/glossary/images/pattern-recognition-clue-note.webp',
      alt: 'Handwritten four-step journal-data check showing 20 XAUUSD trades, 5 plan-not-followed records, 3 outside the planned session, and the instruction to open the original records',
      caption: 'A repeated count gives you a reason to inspect the records. It does not prove what caused the decisions or results. Click or tap to enlarge.',
      label: 'Open the pattern-or-coincidence learning note at a larger size',
    },
    guide: { href: '/blogs/ai-journal-pattern-detection', label: 'Review possible patterns in your journal data step by step' },
    proplogConnection: 'PropLogAI analyzes possible patterns in a trader’s own journal data. It does not provide signals or tell the trader what to trade, and its output depends on the records and labels the trader entered.',
    fullContent: `
      <h3>What does pattern recognition mean in a trading journal?</h3>
      <p>Pattern recognition in a trading journal means finding the same recorded combination across a defined group of trades. You might notice that several trades marked <strong>plan not followed</strong> also happened outside your planned session. That is a clue to inspect. It is not proof that the session caused the decision or result.</p>
      <p>This is different from chart-pattern recognition. Chart-pattern recognition studies price shapes. Here, you are studying the records in your own <a href="/glossary/trading-journal">trading journal</a>.</p>

      <h3>A simple 20-trade XAUUSD example</h3>
      <p>Imagine your <a href="/glossary/performance-report">trading performance report</a> contains 20 XAUUSD trades from one defined month:</p>
      <ul>
        <li><strong>Setup:</strong> 12 breakout records and 8 liquidity-sweep records.</li>
        <li><strong>Session:</strong> 4 Asian, 10 London and 6 New York session records.</li>
        <li><strong>Plan followed:</strong> 15 marked yes and 5 marked no by you.</li>
        <li><strong>Possible pattern:</strong> 3 of the 5 plan-not-followed records occurred outside your planned session.</li>
      </ul>
      <p>The count tells you which records deserve a closer look. It does not tell you that trading outside the session caused a loss, and it does not create a universal rule for every trader.</p>

      <h3>How should you check a possible pattern?</h3>
      <ol>
        <li><strong>Define the question:</strong> name the account, date range and records you are checking.</li>
        <li><strong>Use stable labels:</strong> keep names such as XAUUSD, London, breakout and plan not followed consistent.</li>
        <li><strong>Show the count:</strong> write both the matching records and the total, such as 3 of 5.</li>
        <li><strong>Keep the comparison simple:</strong> start with one field or one clear combination.</li>
        <li><strong>Open the trades:</strong> check the original notes, screenshots and actions through a <a href="/glossary/trade-review">trade review</a>.</li>
        <li><strong>Watch future records:</strong> see whether the same combination appears again before changing your written plan.</li>
      </ol>

      <h3>What can make a pattern misleading?</h3>
      <p>A small sample can change quickly. Missing trades, inconsistent labels, a changed setup or an incorrect result can also change the summary. An <a href="/glossary/emotion-tracking">emotion tag</a> records what you entered; it does not prove that the feeling caused the result.</p>
      <p>A useful statement is: <strong>“3 of 5 plan-not-followed records were outside my planned session.”</strong> An overclaim is: <strong>“Trading outside my planned session caused my losses.”</strong> Correlation does not establish causation.</p>

      <h3>Does every pattern need a new rule?</h3>
      <p>No. A possible pattern gives you a question to investigate. Open the records, check the context and watch future trades. If you later change a personal rule, record that decision separately. Do not turn one small sample into advice for every trader.</p>
      <p>An <a href="/glossary/ai-trading-coach">AI trading coach</a> may help group the logged records, but you still need to verify the output against the original trades. The <a href="/blogs/ai-journal-pattern-detection">journal pattern guide</a> shows the deeper review process.</p>

      <h3>What should you do next?</h3>
      <p>Choose one summary that surprised you. Open every trade behind it and write one sentence that says only what the records support.</p>
    `
  },
  {
    slug: 'performance-report',
    title: 'Trading Performance Report',
    shortDefinition: 'A trading performance report summarises trades from one clearly defined period using records you can check. It keeps financial results separate from the process details you recorded.',
    category: 'Journal & Analysis',
    updatedAt: '2026-10-06',
    relatedTerms: ['trade-review', 'trading-journal', 'equity-curve'],
    sourceIds: ['RES-020', 'RES-021', 'PLAI-002', 'PLAI-003', 'PLAI-005'],
    sources: [
      { id: 'RES-020', label: 'MetaTrader 5 — Trading Report', url: 'https://www.metatrader5.com/en/terminal/help/trading/report', checkedOn: '2026-10-06' },
      { id: 'RES-021', label: 'Investor.gov — Performance claim checks', url: 'https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-47', checkedOn: '2026-10-06' },
      { id: 'PLAI-002/003/005', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    visualNote: {
      src: '/glossary/images/trading-performance-report-two-questions-note.webp',
      alt: 'Handwritten report card separating a fictional 20-trade XAUUSD financial result from recorded setup, session and plan-followed fields',
      caption: 'P&L shows the result. Your records show whether you followed the plan. Click or tap to enlarge.',
      label: 'Open the trading performance report learning note at a larger size',
    },
    guide: { href: '/blogs/trading-performance-metrics', label: 'Read a trading performance report metric by metric' },
    proplogConnection: 'PropLogAI lets you manually log trade details, notes, emotions and rule adherence. Its dashboard displays approved metrics and an equity curve from logged data, so any report remains dependent on those records and counting choices.',
    fullContent: `
      <h3>What is a trading performance report?</h3>
      <p>A trading performance report is a summary of trades from one clearly defined period. It should name the date range, account, currency, trade count and counting method so you can check every summary against the original records.</p>
      <p>A report can answer two different questions. <strong>What happened?</strong> uses financial results. <strong>What did I record?</strong> uses your setup, session, planned risk, emotion, written note and plan-followed answer. Keep these two groups separate.</p>

      <h3>Fictional 20-trade XAUUSD report</h3>
      <p>Imagine a report covers 20 XAUUSD trades from one defined month:</p>
      <ul>
        <li><strong>8 winning trades</strong> produced $1,440 gross profit.</li>
        <li><strong>12 losing trades</strong> lost $960 gross loss.</li>
        <li><strong>Net result:</strong> +$480 before any separately stated cost treatment.</li>
        <li><strong>Win rate:</strong> 8 ÷ 20 = 40%.</li>
        <li><strong>Average win:</strong> $1,440 ÷ 8 = $180.</li>
        <li><strong>Average loss:</strong> $960 ÷ 12 = $80.</li>
        <li><strong>Profit factor:</strong> $1,440 ÷ $960 = 1.50.</li>
        <li><strong>Expectancy:</strong> +$24 per trade for this fictional sample.</li>
      </ul>
      <p>These figures explain the financial result. They do not prove whether the trader followed the plan.</p>

      <h3>What did the trader record?</h3>
      <p>The same fictional report can group the original records without turning them into a discipline score:</p>
      <ul>
        <li><strong>Setup:</strong> 12 breakout trades and 8 liquidity-sweep trades.</li>
        <li><strong>Session:</strong> 4 Asian, 10 London and 6 New York session trades.</li>
        <li><strong>Plan followed:</strong> 15 marked yes and 5 marked no by the trader.</li>
        <li><strong>Review clue:</strong> 3 of the 5 “plan not followed” records occurred outside the trader's planned session.</li>
      </ul>
      <p>The last line is a reason to open those three trades and read the notes. It is not proof that the session caused the result, and it is not a universal instruction to avoid that session.</p>

      <h3>What should you check before trusting the report?</h3>
      <ol>
        <li>Are any trades missing or duplicated?</li>
        <li>Are partial exits and multi-leg positions grouped consistently?</li>
        <li>How are breakeven trades counted?</li>
        <li>Are spread, commission and swap included?</li>
        <li>Did deposits, withdrawals or open positions change the account path?</li>
        <li>Can you open the original <a href="/glossary/trading-journal">trading journal</a> records behind a surprising number?</li>
      </ol>

      <h3>How should you read the results?</h3>
      <p>Start with the sample, then check <a href="/glossary/win-rate">win rate</a>, <a href="/glossary/average-win-vs-average-loss">average win and average loss</a>, <a href="/glossary/profit-factor">profit factor</a>, <a href="/glossary/expectancy">expectancy</a>, <a href="/glossary/drawdown">drawdown</a> and the <a href="/glossary/equity-curve">equity curve</a>. Weekly, monthly and challenge-stage reports can all be useful when the period matches the question.</p>
      <p>The <a href="/blogs/trading-performance-metrics">trading performance metrics guide</a> explains the full reading order. Past results describe the selected records; they do not predict the next period.</p>

      <h3>What should you do next?</h3>
      <p>Choose one number or recorded pattern that surprised you. Open the trades behind it before changing your plan. A report is useful when you can trace its summary back to the original records.</p>
    `
  },
  {
    slug: 'ai-trading-coach',
    title: 'AI Trading Coach',
    shortDefinition: 'An AI trading coach reviews a trader’s own recorded journal data and returns summaries, questions or possible patterns for the trader to verify against the original records.',
    category: 'Journal & Analysis',
    updatedAt: '2026-10-06',
    relatedTerms: ['pattern-recognition', 'performance-report', 'trading-journal', 'trade-review', 'emotion-tracking'],
    sourceIds: ['RES-022', 'RES-023', 'RES-024', 'PLAI-001', 'PLAI-002', 'PLAI-003', 'PLAI-005'],
    sources: [
      { id: 'RES-022', label: 'IG — Keeping track of your trading performance', url: 'https://www.ig.com/uk/learn-to-trade/ig-academy/tools-for-traders/important-metrics?source=dailyfx', checkedOn: '2026-10-06' },
      { id: 'RES-023', label: 'NIST — Generative AI Profile', url: 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf', checkedOn: '2026-10-06' },
      { id: 'RES-024', label: 'NIST/SEMATECH — Correlation and causality', url: 'https://www.itl.nist.gov/div898/handbook/ppc/section1/ppc136.htm', checkedOn: '2026-10-06' },
      { id: 'PLAI-001/002/003/005', label: 'PropLogAI product overview', url: 'https://proplogai.com/', checkedOn: '2026-09-24' },
    ],
    visualNote: {
      src: '/glossary/images/ai-trading-coach-review-loop-note.webp',
      alt: 'Handwritten AI trading coach review loop showing Ask, Check, Verify and Decide with a fictional XAUUSD journal question and factual output',
      caption: 'AI can point you to the records behind an answer. You still check those records before changing a plan. Click or tap to enlarge.',
      label: 'Open the AI trading coach review-loop learning note at a larger size',
    },
    guide: { href: '/blogs/ai-trading-coach-prop-firm', label: 'See what an AI trading coach should and should not do' },
    proplogConnection: 'PropLogAI analyzes patterns in a trader’s own journal data and does not provide signals or tell the trader what to trade. Its output is limited by what the trader records.',
    fullContent: `
      <h3>What is an AI trading coach?</h3>
      <p>An AI trading coach is software that reviews your own recorded journal data and returns summaries, questions or possible patterns for you to check. It can help organise the records. It cannot see missing context, prove why something happened, predict the next market move or decide what you should trade.</p>

      <h3>What information can it review?</h3>
      <p>The answer depends on what you recorded in your <a href="/glossary/trading-journal">trading journal</a>: date, instrument, session, setup, written plan, actual action, result, costs, emotion tag, rule-followed answer, note and screenshot. If a trade or detail is missing, the AI cannot safely recover it from the journal.</p>

      <h3>A simple XAUUSD example</h3>
      <p>Imagine you have the same fictional 20-trade XAUUSD sample used in the <a href="/glossary/performance-report">trading performance report</a>.</p>
      <p>You ask: <strong>“Show the records marked plan not followed and group them by session.”</strong></p>
      <p>The output says: <strong>“5 records were marked plan not followed. 3 occurred outside the planned session.”</strong></p>
      <p>This is a useful pointer. Your next step is to open those five records, verify the labels and read the notes. The output does not prove that the session caused the decisions or results.</p>

      <h3>What can an AI trading coach help with?</h3>
      <ul>
        <li>Organise the journal records you entered.</li>
        <li>Group records by stable labels such as XAUUSD, London or breakout.</li>
        <li>Summarise approved metrics from a clearly defined sample.</li>
        <li>Flag a possible <a href="/glossary/pattern-recognition">repeated pattern</a> for you to inspect.</li>
        <li>Suggest factual questions for a manual <a href="/glossary/trade-review">trade review</a>.</li>
      </ul>

      <h3>What can it not know from the journal alone?</h3>
      <ul>
        <li>A trade you never recorded.</li>
        <li>Whether you entered a label or result correctly.</li>
        <li>Context you did not write down or show in a screenshot.</li>
        <li>Whether an association caused the result.</li>
        <li>What the market will do next.</li>
        <li>Which trade you should take.</li>
      </ul>
      <p>An <a href="/glossary/emotion-tracking">emotion tag</a> is also a trader-entered record. It is not a diagnosis, and the AI should not infer a feeling that you did not record.</p>

      <h3>Use the Ask, Check, Verify, Decide loop</h3>
      <ol>
        <li><strong>Ask:</strong> use one narrow question about a named account and date range.</li>
        <li><strong>Check:</strong> open the records behind the answer.</li>
        <li><strong>Verify:</strong> confirm the labels, counts, results and missing context.</li>
        <li><strong>Decide:</strong> choose whether the observation is useful. The AI does not make the trading decision for you.</li>
      </ol>
      <p>A safe request is: <strong>“Compare my recorded London and New York session trades for this date range.”</strong> An unsafe expectation is: <strong>“Tell me which session will make money tomorrow.”</strong></p>

      <h3>Is it a replacement for a human coach?</h3>
      <p>No. The word <em>coach</em> describes the review role. It does not make the tool a licensed adviser, psychologist, broker record or human-coach replacement. Read the <a href="/blogs/ai-trading-coach-prop-firm">AI trading coach guide</a> for the full capability and limitation checklist.</p>

      <h3>What should you do next?</h3>
      <p>Ask one narrow question about a defined group of journal records. Then open the trades behind the answer before changing any written plan.</p>
    `
  },
];
