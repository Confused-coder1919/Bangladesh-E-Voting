<div align="center">

  <h1 style="margin:0;padding:0;font-size:2.3rem;line-height:1.15">
    🗳️ E-Voting System
  </h1>
  <p style="margin:.25rem 0 0;color:#6b7280">Secure • Transparent • Auditable</p>

  <p align="center" style="margin-top:.75rem">
    <img alt="Stack"
         src="https://img.shields.io/badge/Stack-React%20%7C%20Node%20%7C%20Solidity%20%7C%20MySQL-0b1220?labelColor=111827&color=F59E0B&logo=github"
         style="max-width:100%;margin:2px">
    <img alt="Web3"
         src="https://img.shields.io/badge/Web3-Truffle%20%7C%20Ganache-111827?color=10B981"
         style="max-width:100%;margin:2px">
    <img alt="Build"
         src="https://img.shields.io/badge/Build-Vite-111827?color=3B82F6"
         style="max-width:100%;margin:2px">
    <img alt="License"
         src="https://img.shields.io/badge/License-MIT-111827?color=8B5CF6"
         style="max-width:100%;margin:2px">
  </p>

  <p style="max-width:880px;color:#9CA3AF">
    A full-stack, blockchain-backed e-voting platform demonstrating end-to-end election
    workflows: secure voter registration, candidate and constituency management, on-chain vote
    casting, and verifiable result publication — with a clean, accessible UI and auditable processes.
  </p>

  <!-- Optional banner image (add /assets/banner.png to your repo) -->
  <!-- <img src="assets/banner.png" alt="E-Voting banner" style="max-width:100%;border-radius:12px;border:1px solid #11182720"> -->
</div>

<hr style="border:none;border-top:1px solid #11182722;margin:24px 0" />

<!-- ───────────────────────────────── TABLE OF CONTENTS ──────────────────────────────── -->
<details>
  <summary><b>Table of contents</b></summary>

- <a href="#overview">Overview</a>
- <a href="#system-architecture">System Architecture</a>
- <a href="#features--modules">Features & Modules</a>
- <a href="#data-model--database">Data Model & Database</a>
- <a href="#security--blockchain">Security & Blockchain</a>
- <a href="#tech-stack">Tech Stack</a>
- <a href="#local-setup">Local Setup</a>
- <a href="#deployment-notes">Deployment Notes</a>
- <a href="#testing--quality">Testing & Quality</a>
- <a href="#star-case-study">STAR Case Study</a>
- <a href="#results--highlights">Results & Highlights</a>
- <a href="#roadmap">Roadmap</a>
- <a href="#license--contact">License & Contact</a>
</details>

<!-- ───────────────────────────────── OVERVIEW ──────────────────────────────── -->
<h2 id="overview">🌍 Overview</h2>

<p>
  <strong>E-Voting System</strong> is a production-style academic project showcasing how to combine
  <em>decentralized trust</em> (smart contracts) with <em>familiar web UX</em> (React + Node) to deliver
  elections that are <strong>transparent</strong>, <strong>tamper-evident</strong>, and
  <strong>auditable</strong>. The system separates concerns across a User layer (Admin/Voter),
  an Application layer (validation, orchestration), and a Blockchain layer (immutability, verification).
</p>

<ul>
  <li><b>Who uses it:</b> Election admins (configure elections, candidates, constituencies) and voters (register, vote, see results).</li>
  <li><b>What it proves:</b> End-to-end voting with on-chain integrity and human-centered UX.</li>
  <li><b>Why it matters:</b> Elevates trust in outcomes via cryptographic guarantees while keeping operations simple.</li>
</ul>

<!-- ───────────────────────────────── ARCHITECTURE ──────────────────────────────── -->
<h2 id="system-architecture">🧩 System Architecture</h2>

<p>
  The platform is split into three cooperating layers. The blockchain layer enforces election rules and
  persists votes immutably; the system layer validates requests and coordinates flows; the user layer
  exposes role-based interfaces for admins and voters.
</p>

<div align="center">
  <pre style="text-align:left;max-width:880px;background:#0b1220;color:#E5E7EB;padding:16px;border-radius:10px;overflow:auto;border:1px solid #11182740"><code>
User Layer (React)
 ├─ Admin UI
 │   ├─ Elections CRUD (name, dates, status)
 │   ├─ Candidates CRUD (party, symbol, constituency)
 │   ├─ Constituencies CRUD
 │   └─ Results: generate & publish
 └─ Voter UI
     ├─ Registration & login
     ├─ Ballot: cast vote (on-chain)
     └─ View results

System Layer (Node/Express)
 ├─ Auth & input validation
 ├─ Off-chain persistence (MySQL)
 └─ Web3 service for contract calls

Blockchain Layer (Solidity)
 ├─ Election lifecycle (start/end)
 ├─ Candidate registry
 ├─ Vote casting & prevention of double voting
 └─ Event logs for auditability
</code></pre>
</div>

<!-- ───────────────────────────────── FEATURES ──────────────────────────────── -->
<h2 id="features--modules">✨ Features & Modules</h2>

<h3>Admin</h3>
<ul>
  <li>Create and schedule elections (start/end).</li>
  <li>Register candidates and associate them to constituencies.</li>
  <li>Manage constituencies and voters.</li>
  <li>Publish results and export reports.</li>
</ul>

<h3>Voter</h3>
<ul>
  <li>Register and authenticate.</li>
  <li>View eligible elections by constituency.</li>
  <li>Cast a single, on-chain vote; receive transaction confirmation.</li>
  <li>See published results post-election.</li>
</ul>

<h3>Transparency & Ops</h3>
<ul>
  <li>Immutable vote records with contract event logs.</li>
  <li>Basic dashboards (active elections, registered voters, etc.).</li>
  <li>Downloadable reports for post-election review.</li>
</ul>

<!-- ───────────────────────────────── DATA MODEL ──────────────────────────────── -->
<h2 id="data-model--database">🗂️ Data Model & Database</h2>

<p>
  Off-chain relational storage is used for user/admin metadata, constituencies, election definitions,
  and reporting artifacts. On-chain state anchors critical election invariants and vote transactions.
</p>

<div align="center">
  <pre style="text-align:left;max-width:880px;background:#0b1220;color:#E5E7EB;padding:16px;border-radius:10px;overflow:auto;border:1px solid #11182740"><code>
Tables (MySQL)
 ├─ users(user_id, email, password_hash, role, constituency_id, created_at)
 ├─ constituencies(constituency_id, name)
 ├─ elections(election_id, name, start_at, end_at, status)
 ├─ candidates(candidate_id, first_name, last_name, party, symbol_url, constituency_id, election_id)
 ├─ votes(vote_id, voter_id, candidate_id, election_id, tx_hash, cast_at)
 └─ reports(report_id, election_id, url, published_at)
</code></pre>
</div>

<!-- ───────────────────────────────── SECURITY ──────────────────────────────── -->
<h2 id="security--blockchain">🔐 Security & Blockchain</h2>

<ul>
  <li><b>Smart contracts (Solidity):</b> govern election lifecycle, candidate registry, and vote casting.</li>
  <li><b>Ganache + Truffle:</b> local blockchain and migrations for deterministic testing.</li>
  <li><b>One-vote invariant:</b> enforced by contract state to prevent double voting.</li>
  <li><b>Tamper evidence:</b> votes and key state changes are emitted as events and stored immutably.</li>
  <li><b>Separation of concerns:</b> PII and credentials remain off-chain; integrity and auditability live on-chain.</li>
</ul>

<!-- ───────────────────────────────── TECH STACK ──────────────────────────────── -->
<h2 id="tech-stack">🛠 Tech Stack</h2>

<table>
  <tr>
    <td><b>Frontend</b></td>
    <td>React, Vite, JavaScript, CSS</td>
  </tr>
  <tr>
    <td><b>Backend</b></td>
    <td>Node.js, Express</td>
  </tr>
  <tr>
    <td><b>Blockchain</b></td>
    <td>Solidity, Truffle, Ganache (local), Web3</td>
  </tr>
  <tr>
    <td><b>Database</b></td>
    <td>MySQL</td>
  </tr>
  <tr>
    <td><b>Tooling</b></td>
    <td>Git/GitHub, Postman, VS Code</td>
  </tr>
</table>

<!-- ───────────────────────────────── LOCAL SETUP ──────────────────────────────── -->
<h2 id="local-setup">💻 Local Setup</h2>

<ol>
  <li><b>Clone & install</b>
    <pre><code>git clone &lt;this-repo&gt;
cd e-voting
npm install</code></pre>
  </li>

  <li><b>Start local blockchain (Ganache) & compile contracts</b>
    <pre><code>truffle compile
truffle migrate</code></pre>
  </li>

  <li><b>Configure environment</b>
    <pre><code># .env (example)
DATABASE_URL=mysql://user:pass@localhost:3306/evoting
WEB3_PROVIDER=http://127.0.0.1:7545
SESSION_SECRET=change-me</code></pre>
  </li>

  <li><b>Run dev servers</b>
    <pre><code># API
npm run server

# Frontend
npm run dev</code></pre>
  </li>
</ol>

<!-- ───────────────────────────────── DEPLOYMENT ──────────────────────────────── -->
<h2 id="deployment-notes">🚀 Deployment Notes</h2>

<ul>
  <li><b>Contracts:</b> deploy to your target network via Truffle; pin addresses/ABIs.</li>
  <li><b>Backend:</b> Render/Heroku/Fly; inject contract addresses and provider URLs via env vars.</li>
  <li><b>Frontend:</b> Static hosting (GitHub Pages/Vercel); point Web3 provider at the deployed network.</li>
  <li><b>Database:</b> Managed MySQL (PlanetScale/RDS) for off-chain metadata and reports.</li>
</ul>

<!-- ───────────────────────────────── TESTING ──────────────────────────────── -->
<h2 id="testing--quality">🧪 Testing & Quality</h2>

<ul>
  <li><b>Unit tests (contracts):</b> election lifecycle, vote casting, double-vote prevention.</li>
  <li><b>Integration tests:</b> API ↔ Web3 ↔ DB flows for casting and tallying votes.</li>
  <li><b>Functional/UAT:</b> full Admin/Voter journeys (register → vote → publish results).</li>
  <li><b>Security checks:</b> input validation, role checks, and transaction receipt verification.</li>
</ul>

<!-- ───────────────────────────────── STAR ──────────────────────────────── -->
<h2 id="star-case-study">🏅 STAR Case Study (Election Integrity)</h2>

<p><b>Situation.</b> Traditional web apps can tabulate votes quickly but struggle to provide <em>publicly verifiable integrity</em> without trusted third parties.</p>

<p><b>Task.</b> Build a voting workflow that is <em>easy to use</em> for admins/voters while producing an <em>immutable, auditable record</em> of every cast vote and state change.</p>

<p><b>Action.</b></p>
<ul>
  <li>Separated responsibilities across User/System/Blockchain layers; kept PII off-chain; enforced vote invariants on-chain.</li>
  <li>Modeled elections, candidates, constituencies off-chain for ease of management; used contract events to anchor audit logs.</li>
  <li>Implemented single-vote constraint and lifecycle guards in Solidity; exposed them via clean React flows and Node endpoints.</li>
  <li>Tested with Ganache + Truffle to validate transaction paths and failure modes (e.g., double-vote attempts).</li>
</ul>

<p><b>Result.</b> A working prototype that lets admins configure elections and voters cast a <em>single, verifiable</em> on-chain vote; results can be published and independently validated by inspecting contract state and event logs. The approach increases transparency while maintaining familiar election operations.</p>

<!-- ───────────────────────────────── RESULTS ──────────────────────────────── -->
<h2 id="results--highlights">📈 Results & Highlights</h2>

<ul>
  <li>End-to-end election demo with on-chain vote casting and result publication.</li>
  <li>Clear admin workflows (create/start/end elections, manage candidates/constituencies, export reports).</li>
  <li>Accessible, guided voter experience; simple confirmation and transaction feedback.</li>
  <li>Auditable event trail and tamper-evident storage for critical actions.</li>
</ul>

<!-- ───────────────────────────────── ROADMAP ──────────────────────────────── -->
<h2 id="roadmap">🗺️ Roadmap</h2>

- Anonymous & weighted voting modes  
- Deeper analytics (live dashboards, turnout trends)  
- Official identity integration (gov DB / eID)  
- Profile management, password reset, and notifications  
- Formal verification for critical contract invariants  
- Modular ballots for schools/organizations

<!-- ───────────────────────────────── LICENSE / CONTACT ──────────────────────────────── -->
<h2 id="license--contact">📜 License & Contact</h2>

<p><b>License.</b> MIT — educational and research use encouraged.</p>

<p>
  <b>Author:</b> Syed Mohammad Shah Mostafa · M2 Cybersecurity & Cloud (ESILV)<br/>
  Instructor at IPI · Ingetis · ABC Business College<br/>
  <a href="mailto:syedmostafa.dev@gmail.com">syedmostafa.dev@gmail.com</a> ·
  <a href="https://www.linkedin.com/in/syed-mostafa" target="_blank">LinkedIn</a> ·
  <a href="https://github.com/Confused-coder1919" target="_blank">GitHub</a>
</p>

<hr style="border:none;border-top:1px solid #11182722;margin:24px 0" />

<p align="center" style="color:#6B7280">
  If this project helps you, please ⭐ the repository — it helps other builders find it.
</p>
