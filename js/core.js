// ═══════════════════════════════════════
// BLOOM v2 — CORE UTILITIES
// ═══════════════════════════════════════

// ── PROFILE ──
function getProfile() {
  try { return JSON.parse(localStorage.getItem('bloomProfile_v2') || '{}'); }
  catch { return {}; }
}
function setProfile(data) { localStorage.setItem('bloomProfile_v2', JSON.stringify(data)); }

// ── PREGNANCY MATH ──
function getWeekFromLMP(lmp) {
  if (!lmp) return null;
  const diff = new Date() - new Date(lmp);
  return Math.max(0, Math.floor(diff / (7 * 24 * 3600 * 1000)));
}
function getDueDate(lmp) {
  if (!lmp) return null;
  const d = new Date(lmp); d.setDate(d.getDate() + 280); return d;
}
function getTrimester(w) {
  if (!w) return null;
  if (w <= 13) return 1; if (w <= 27) return 2; return 3;
}
function getMonth(w) { return w ? Math.ceil(w / 4.33) : null; }
function getBMI(kg, cm) {
  if (!kg || !cm) return null;
  return +(kg / ((cm / 100) ** 2)).toFixed(1);
}
function getBMICategory(bmi) {
  const b = parseFloat(bmi);
  if (b < 18.5) return { label: 'Underweight', cls: 'b-caut' };
  if (b < 25)   return { label: 'Normal weight', cls: 'b-safe' };
  if (b < 30)   return { label: 'Overweight', cls: 'b-caut' };
  return { label: 'Obese (BMI ≥30)', cls: 'b-avoid' };
}
function getWeightGainTarget(bmi) {
  const b = parseFloat(bmi);
  if (b < 18.5) return { min: 12.5, max: 18,   label: '12.5–18 kg', weekly: '0.5' };
  if (b < 25)   return { min: 11.5, max: 16,   label: '11.5–16 kg', weekly: '0.45' };
  if (b < 30)   return { min: 7,    max: 11.5, label: '7–11.5 kg', weekly: '0.3' };
  return         { min: 5,    max: 9,    label: '5–9 kg (11–20 lbs)', weekly: '0.2' };
}
function getExtraCalories(trimester) {
  return [0, 0, 200, 400][trimester] ?? 0;
}
function getDaysLeft(lmp) {
  if (!lmp) return null;
  const due = getDueDate(lmp);
  return Math.max(0, Math.round((due - new Date()) / (24 * 3600 * 1000)));
}

// ── TABS ──
function switchTab(id, prefix, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  const el = document.getElementById(prefix + '-' + id);
  if (el) el.classList.add('active');
}

// ── NAV ──
function toggleMenu() {
  document.querySelector('.nav-links')?.classList.toggle('open');
}

// ── CHECKLIST PERSISTENCE ──
function initChecklists() {
  const data = JSON.parse(localStorage.getItem('bloomChecks_v2') || '{}');
  document.querySelectorAll('.cl-item input[type=checkbox]').forEach(cb => {
    if (data[cb.dataset.key]) { cb.checked = true; cb.closest('.cl-item')?.classList.add('done'); }
    cb.addEventListener('change', () => {
      data[cb.dataset.key] = cb.checked;
      localStorage.setItem('bloomChecks_v2', JSON.stringify(data));
      cb.closest('.cl-item')?.classList.toggle('done', cb.checked);
    });
  });
}

// ── SVG RING UPDATE ──
function updateRing(svgId, pct, r = 70) {
  const el = document.getElementById(svgId);
  if (!el) return;
  const circ = 2 * Math.PI * r;
  el.style.strokeDasharray = `${(pct / 100) * circ} ${circ}`;
}

// ── SET TEXT ──
function setText(id, val) {
  const el = document.getElementById(id); if (el) el.textContent = val;
}

// ── MONTH ACCORDION ──
function toggleMonth(id) {
  const body = document.getElementById('mb-' + id);
  if (!body) return;
  body.classList.toggle('open');
}

// ── ON LOAD ──
window.addEventListener('DOMContentLoaded', () => {
  initChecklists();
  const p = getProfile();
  // pre-fill form fields if present
  ['lmpDate','preWeight','heightCm','currWeight','dietType'].forEach(id => {
    const el = document.getElementById(id);
    if (el && p[id.replace('Date','Lmp').replace('Cm','Height').replace('Weight','Weight')] !== undefined) {
      // Try direct key match
      if (el && p[id] !== undefined) el.value = p[id];
    }
  });
  if (p.lmp && document.getElementById('lmpDate')) document.getElementById('lmpDate').value = p.lmp;
  if (p.preWeight && document.getElementById('preWeight')) document.getElementById('preWeight').value = p.preWeight;
  if (p.height && document.getElementById('heightCm')) document.getElementById('heightCm').value = p.height;
  if (p.currWeight && document.getElementById('currWeight')) document.getElementById('currWeight').value = p.currWeight;
  if (p.diet && document.getElementById('dietType')) document.getElementById('dietType').value = p.diet;
  if (p.lmp) refreshHeroStats(p);
});

function refreshHeroStats(p) {
  const week = getWeekFromLMP(p.lmp);
  const due = getDueDate(p.lmp);
  const tri = getTrimester(week);
  const bmi = getBMI(p.preWeight, p.height);
  const days = getDaysLeft(p.lmp);
  const pct = week ? Math.min(100, Math.round((week / 40) * 100)) : 0;

  setText('heroWeek', week ?? '--');
  setText('heroDays', days ?? '--');
  setText('heroTri', tri ? tri + (tri===1?'st':tri===2?'nd':'rd') : '--');
  setText('ringPct', pct + '%');
  updateRing('progressRingFill', pct);
  setText('statWeek', week ?? '--');
  setText('statDays', days ?? '--');
  setText('statBMI', bmi ?? '--');
  const tri_labels = {1:'1st Trimester',2:'2nd Trimester',3:'3rd Trimester'};
  setText('statTrim', tri_labels[tri] ?? '--');
}
