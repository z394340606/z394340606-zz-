import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Galaxy parameters
    const galaxyConfig = {
        armCount: 3,
        particleCount: 1000,
        coreSize: 20, // Reduced core size visually
        armSpread: 0.5,
        rotationSpeed: 0.0005,
        colorBase: '255, 255, 255', // White base
        colorAccent1: '41, 151, 255', // Apple Blue
        colorAccent2: '191, 90, 242', // Apple Purple
    };

    let rotation = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      x: number = 0;
      y: number = 0;
      distance: number;
      angle: number;
      speed: number;
      radius: number;
      color: string;
      armIndex: number;
      randomOffset: number;
      spinOffset: number;

      constructor() {
        // Distance from center (gaussian-ish distribution for denser core)
        this.distance = Math.random() * Math.random() * (Math.max(canvas!.width, canvas!.height) / 1.5);
        
        // Assign to an arm
        this.armIndex = Math.floor(Math.random() * galaxyConfig.armCount);
        this.angle = (Math.PI * 2 * this.armIndex) / galaxyConfig.armCount;
        
        // Random spread from the arm line
        this.randomOffset = (Math.random() - 0.5) * galaxyConfig.armSpread * this.distance;
        
        // Spin velocity relative to distance (inner stars move faster angularly, but we want a rigid-ish body look for aesthetics)
        this.spinOffset = Math.random() * 0.1;

        this.radius = Math.random() > 0.98 ? Math.random() * 2 + 1 : Math.random() * 1.2; // Occasional larger stars
        
        // Colors
        const rand = Math.random();
        if (rand > 0.9) {
            this.color = `rgba(${galaxyConfig.colorAccent1}, ${Math.random() * 0.8 + 0.2})`;
        } else if (rand > 0.8) {
             this.color = `rgba(${galaxyConfig.colorAccent2}, ${Math.random() * 0.8 + 0.2})`;
        } else {
            this.color = `rgba(${galaxyConfig.colorBase}, ${Math.random() * 0.5 + 0.1})`;
        }
      }

      update(centerX: number, centerY: number, globalRotation: number) {
        // Calculate spiral position
        // The angle increases with distance to create the spiral shape
        const spiralAngle = this.distance * 0.002; 
        const currentAngle = this.angle + spiralAngle + globalRotation + this.spinOffset;

        this.x = centerX + Math.cos(currentAngle) * (this.distance + this.randomOffset);
        this.y = centerY + Math.sin(currentAngle) * (this.distance + this.randomOffset);
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      // Adjust particle count based on screen size
      const count = window.innerWidth < 768 ? 600 : galaxyConfig.particleCount;
      
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
      
      // Add core particles (dense, bright center)
      for(let i=0; i<100; i++) {
          const p = new Particle();
          p.distance = Math.random() * 50; // Very close to center
          p.radius = Math.random() * 1.5;
          p.color = `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`;
          particles.push(p);
      }
    };

    const animate = () => {
      if (!ctx) return;
      
      // Trail effect for smooth motion blur feel
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      rotation += galaxyConfig.rotationSpeed;

      // Draw Galaxy
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(centerX, centerY, rotation);
        particles[i].draw();
      }
      
      // Subtle vignette overlay to focus center
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.max(canvas.width, canvas.height));
      gradient.addColorStop(0, 'rgba(0,0,0,0)');
      gradient.addColorStop(0.6, 'rgba(0,0,0,0.2)');
      gradient.addColorStop(1, 'rgba(0,0,0,1)'); // Fade to black edges
      ctx.fillStyle = gradient;
      ctx.fillRect(0,0,canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-60"
    />
  );
};

export default ParticleBackground;