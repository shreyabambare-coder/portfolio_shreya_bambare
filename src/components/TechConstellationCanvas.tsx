import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label?: string;
  category: 'ai' | 'cyber' | 'code' | 'core';
}

export const TechConstellationCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 600;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    const labels = [
      { text: 'YOLOv8', cat: 'ai' },
      { text: 'NTFS MFT', cat: 'cyber' },
      { text: 'Computer Vision', cat: 'ai' },
      { text: 'USN Journal', cat: 'cyber' },
      { text: 'React & Vite', cat: 'code' },
      { text: 'Clean Energy', cat: 'core' },
      { text: 'FastAPI', cat: 'code' },
      { text: 'DSA & C', cat: 'core' },
      { text: 'Sigma Rules', cat: 'cyber' },
      { text: 'Flutter', cat: 'code' },
      { text: 'Sonar ML', cat: 'ai' },
      { text: 'Python', cat: 'core' },
      { text: 'Forensic DFIR', cat: 'cyber' }
    ] as const;

    let nodes: Node[] = [];

    const initNodes = () => {
      const count = Math.min(Math.floor(width / 32), 34);
      nodes = [];

      for (let i = 0; i < count; i++) {
        const labelObj = labels[i % labels.length];
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: i < labels.length ? 3.5 : 2,
          label: i < labels.length ? labelObj.text : undefined,
          category: i < labels.length ? labelObj.cat : 'core'
        });
      }
    };

    initNodes();

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const getCategoryColor = (cat: Node['category'], alpha: number) => {
      switch (cat) {
        case 'ai':
          return `rgba(56, 189, 248, ${alpha})`; // cyan/sky
        case 'cyber':
          return `rgba(168, 85, 247, ${alpha})`; // violet/purple
        case 'code':
          return `rgba(99, 102, 241, ${alpha})`; // indigo
        case 'core':
        default:
          return `rgba(45, 212, 191, ${alpha})`; // teal
      }
    };

    let tick = 0;

    const render = () => {
      tick += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle orbital / connection lines
      for (let i = 0; i < nodes.length; i++) {
        const p1 = nodes[i];

        // Move
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce on boundaries
        if (p1.x < 10) { p1.x = 10; p1.vx *= -1; }
        if (p1.x > width - 10) { p1.x = width - 10; p1.vx *= -1; }
        if (p1.y < 10) { p1.y = 10; p1.vy *= -1; }
        if (p1.y > height - 10) { p1.y = height - 10; p1.vy *= -1; }

        // Subtle mouse attraction/repulsion
        const dmx = mouseX - p1.x;
        const dmy = mouseY - p1.y;
        const distMouse = Math.sqrt(dmx * dmx + dmy * dmy);
        if (distMouse < 140) {
          p1.x -= (dmx / distMouse) * 0.8;
          p1.y -= (dmy / distMouse) * 0.8;
        }

        // Connect to neighbors
        for (let j = i + 1; j < nodes.length; j++) {
          const p2 = nodes[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 120;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(148, 163, 184, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw nodes and labels
      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];

        // Node glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius + 1.5, 0, Math.PI * 2);
        ctx.fillStyle = getCategoryColor(p.category, 0.4);
        ctx.fill();

        // Node core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = getCategoryColor(p.category, 0.95);
        ctx.fill();

        // Node text label if available
        if (p.label) {
          ctx.font = '500 11px Inter, sans-serif';
          ctx.fillStyle = 'rgba(226, 232, 240, 0.75)';
          ctx.fillText(p.label, p.x + 8, p.y + 4);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-[#090d16]/80 backdrop-blur-md shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/20 via-transparent to-transparent pointer-events-none" />
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair"
      />
      
      {/* Corner telemetry styling */}
      <div className="absolute top-3 left-4 flex items-center gap-2 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span className="text-[11px] font-mono tracking-wider text-cyan-300 uppercase">Tech Constellation // Active Matrix</span>
      </div>

      <div className="absolute bottom-3 right-4 flex items-center gap-4 text-[11px] font-mono text-slate-400 pointer-events-none bg-slate-950/60 px-3 py-1.5 rounded-full border border-white/5">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-sky-400"></span> AI & Vision
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-violet-400"></span> Forensics & Cyber
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span> Full-Stack
        </span>
      </div>
    </div>
  );
};
