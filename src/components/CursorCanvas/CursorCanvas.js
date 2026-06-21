'use client';

import { useEffect, useRef, useCallback } from 'react';
import styles from './CursorCanvas.module.css';

// ─── Configuration ───────────────────────────────────────────────
const CONFIG = {
  // Node counts scale by viewport area
  densityFactor: 0.00004,    // nodes per px²
  minNodes: 40,
  maxNodes: 120,

  // Visual
  nodeBaseRadius: 1.8,
  nodeMaxRadius: 3.2,
  connectionDistance: 160,     // max distance for a link
  connectionLineWidth: 0.8,

  // Cursor interaction
  cursorRadius: 220,           // influence radius around cursor
  cursorRepelStrength: 0.035,  // how hard nodes push away

  // Movement
  driftSpeed: 0.3,             // baseline autonomous drift
  returnSpeed: 0.015,          // how quickly nodes return after cursor leaves
  friction: 0.96,

  // Colors (from the portfolio design system)
  nodeColor: { r: 51, g: 137, b: 242 },      // --accent-blue
  nodeColorAlt: { r: 123, g: 97, b: 255 },    // --accent-purple
  lineColorBase: { r: 51, g: 137, b: 242 },
  lineColorEnd: { r: 123, g: 97, b: 255 },
};

// ─── Helpers ─────────────────────────────────────────────────────
function lerp(a, b, t) { return a + (b - a) * t; }

function dist(x1, y1, x2, y2) {
  const dx = x1 - x2;
  const dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
}

function createNode(w, h) {
  const angle = Math.random() * Math.PI * 2;
  const speed = CONFIG.driftSpeed * (0.3 + Math.random() * 0.7);
  const colorMix = Math.random();
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    homeX: 0,    // set later
    homeY: 0,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    radius: CONFIG.nodeBaseRadius + Math.random() * (CONFIG.nodeMaxRadius - CONFIG.nodeBaseRadius),
    colorMix,
    phase: Math.random() * Math.PI * 2,   // for gentle pulse
    pulseSpeed: 0.008 + Math.random() * 0.012,
  };
}

// ─── Component ───────────────────────────────────────────────────
export default function CursorCanvas() {
  const canvasRef = useRef(null);
  const nodesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const rafRef = useRef(null);
  const timeRef = useRef(0);
  const animateRef = useRef(null);

  // ── Initialise Nodes ──
  const initNodes = useCallback((w, h) => {
    const area = w * h;
    const count = Math.max(
      CONFIG.minNodes,
      Math.min(CONFIG.maxNodes, Math.round(area * CONFIG.densityFactor))
    );
    const nodes = [];
    for (let i = 0; i < count; i++) {
      const node = createNode(w, h);
      node.homeX = node.x;
      node.homeY = node.y;
      nodes.push(node);
    }
    nodesRef.current = nodes;
  }, []);

  // ── Animation Loop ──
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const nodes = nodesRef.current;
    const mouse = mouseRef.current;

    timeRef.current++;

    ctx.clearRect(0, 0, w, h);

    // ─ Update Nodes ─
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];

      // Autonomous drift
      n.x += n.vx;
      n.y += n.vy;

      // Wrap around edges with padding
      const pad = 60;
      if (n.x < -pad) n.x = w + pad;
      if (n.x > w + pad) n.x = -pad;
      if (n.y < -pad) n.y = h + pad;
      if (n.y > h + pad) n.y = -pad;

      // Cursor interaction — gentle repulsion
      if (mouse.active) {
        const d = dist(n.x, n.y, mouse.x, mouse.y);
        if (d < CONFIG.cursorRadius && d > 0) {
          const force = (1 - d / CONFIG.cursorRadius) * CONFIG.cursorRepelStrength;
          const dx = (n.x - mouse.x) / d;
          const dy = (n.y - mouse.y) / d;
          n.vx += dx * force;
          n.vy += dy * force;
        }
      }

      // Friction
      n.vx *= CONFIG.friction;
      n.vy *= CONFIG.friction;

      // Re-apply drift so nodes keep moving gently
      const angle = Math.atan2(n.vy, n.vx);
      const currentSpeed = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
      const targetSpeed = CONFIG.driftSpeed * (0.3 + 0.7 * ((i * 7) % 10) / 10);
      if (currentSpeed < targetSpeed) {
        n.vx += Math.cos(angle + 0.01) * 0.002;
        n.vy += Math.sin(angle + 0.01) * 0.002;
      }

      // Pulse
      n.phase += n.pulseSpeed;
    }

    // ─ Draw Connections ─
    const conDist = CONFIG.connectionDistance;
    const conDistSq = conDist * conDist;

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i];
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dSq = dx * dx + dy * dy;

        if (dSq < conDistSq) {
          const d = Math.sqrt(dSq);
          let alpha = 1 - d / conDist;

          // Boost opacity near cursor
          if (mouse.active) {
            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2;
            const md = dist(midX, midY, mouse.x, mouse.y);
            if (md < CONFIG.cursorRadius) {
              alpha *= 1 + (1 - md / CONFIG.cursorRadius) * 3;
            }
          }

          alpha = Math.min(alpha, 1) * 0.35;

          // Gradient line
          const gradient = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          const c1 = CONFIG.lineColorBase;
          const c2 = CONFIG.lineColorEnd;
          gradient.addColorStop(0, `rgba(${c1.r},${c1.g},${c1.b},${alpha})`);
          gradient.addColorStop(1, `rgba(${c2.r},${c2.g},${c2.b},${alpha})`);

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = CONFIG.connectionLineWidth;
          ctx.stroke();
        }
      }
    }

    // ─ Draw Nodes ─
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      const pulse = 0.6 + 0.4 * Math.sin(n.phase);
      const r = n.radius * (0.8 + 0.2 * pulse);

      // Determine how close to cursor for glow boost
      let cursorProximity = 0;
      if (mouse.active) {
        const md = dist(n.x, n.y, mouse.x, mouse.y);
        if (md < CONFIG.cursorRadius) {
          cursorProximity = 1 - md / CONFIG.cursorRadius;
        }
      }

      const baseAlpha = 0.3 + 0.3 * pulse + cursorProximity * 0.4;
      const c = {
        r: Math.round(lerp(CONFIG.nodeColor.r, CONFIG.nodeColorAlt.r, n.colorMix)),
        g: Math.round(lerp(CONFIG.nodeColor.g, CONFIG.nodeColorAlt.g, n.colorMix)),
        b: Math.round(lerp(CONFIG.nodeColor.b, CONFIG.nodeColorAlt.b, n.colorMix)),
      };

      // Outer glow
      if (cursorProximity > 0.1) {
        const glowR = r + 8 * cursorProximity;
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR);
        glow.addColorStop(0, `rgba(${c.r},${c.g},${c.b},${0.25 * cursorProximity})`);
        glow.addColorStop(1, `rgba(${c.r},${c.g},${c.b},0)`);
        ctx.beginPath();
        ctx.arc(n.x, n.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
      }

      // Core dot
      ctx.beginPath();
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${baseAlpha})`;
      ctx.fill();
    }

    rafRef.current = requestAnimationFrame(animateRef.current);
  }, []);
  // ── Setup / Teardown ──
  useEffect(() => {
    animateRef.current = animate;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      canvas.getContext('2d').scale(dpr, dpr);
      initNodes(window.innerWidth, window.innerHeight);
    };

    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const onMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const onTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
        mouseRef.current.active = true;
      }
    };

    const onTouchEnd = () => {
      mouseRef.current.active = false;
    };

    resize();
    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [animate, initNodes]);

  return (
    <div className={styles.canvasWrapper} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
