import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useMobilePlayback, setUseMobilePlayback] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 767px), (pointer: coarse)');

    const updatePlaybackMode = () => {
      setUseMobilePlayback(mobileQuery.matches);
    };

    updatePlaybackMode();
    mobileQuery.addEventListener('change', updatePlaybackMode);

    return () => {
      mobileQuery.removeEventListener('change', updatePlaybackMode);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    if (useMobilePlayback) {
      video.loop = true;
      void video.play().catch(() => {
        // The poster remains visible if a browser blocks autoplay.
      });
      return () => video.pause();
    }

    video.loop = false;
    video.pause();

    let frameId = 0;
    let targetTime = 0;
    let smoothedTime = video.currentTime;
    let previousFrameTime = performance.now();
    let previousSeekTime = 0;
    let timelineReady = false;

    const updateTarget = () => {
      if (!Number.isFinite(video.duration) || video.duration === 0) return;

      const rect = section.getBoundingClientRect();
      const scrollableDistance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1);

      targetTime = progress * Math.max(video.duration - 0.05, 0);
    };

    const renderFrame = (frameTime: number) => {
      const deltaSeconds = Math.min((frameTime - previousFrameTime) / 1000, 0.1);
      const easing = 1 - Math.exp(-5.5 * deltaSeconds);
      previousFrameTime = frameTime;
      smoothedTime += (targetTime - smoothedTime) * easing;

      const canSeek =
        timelineReady &&
        !video.seeking &&
        frameTime - previousSeekTime >= 1000 / 24;

      if (canSeek && Math.abs(video.currentTime - smoothedTime) > 1 / 30) {
        video.currentTime = smoothedTime;
        previousSeekTime = frameTime;
      }

      frameId = window.requestAnimationFrame(renderFrame);
    };

    const initializeTimeline = () => {
      timelineReady = true;
      smoothedTime = video.currentTime;
      updateTarget();
    };

    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
      initializeTimeline();
    } else {
      video.addEventListener('loadedmetadata', initializeTimeline);
      video.load();
    }

    window.addEventListener('scroll', updateTarget, { passive: true });
    window.addEventListener('resize', updateTarget, { passive: true });
    updateTarget();
    frameId = window.requestAnimationFrame(renderFrame);

    return () => {
      video.removeEventListener('loadedmetadata', initializeTimeline);
      window.removeEventListener('scroll', updateTarget);
      window.removeEventListener('resize', updateTarget);
      window.cancelAnimationFrame(frameId);
    };
  }, [useMobilePlayback]);

  return (
    <section ref={sectionRef} className="hero-scroll-stage relative">
      <div className="hero-sticky-frame relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-carbon-950">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            muted
            playsInline
            preload="auto"
            autoPlay={useMobilePlayback}
            loop={useMobilePlayback}
            poster="/videos/cinematic-car-poster.png"
            aria-hidden="true"
          >
            <source src="/videos/cinematic-car.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-carbon-950/75 via-carbon-950/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/35 via-transparent to-carbon-950/25" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 w-full">
          <div className="max-w-3xl">
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-blue/20 bg-accent-blue/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
              <span className="text-accent-blue text-xs font-semibold uppercase tracking-wider">
                Premium Automotive Studio
              </span>
            </div>

            <h1
              className="animate-fade-up font-display font-900 text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] text-white leading-[0.95] tracking-tight"
              style={{ animationDelay: '0.15s' }}
            >
              Driven By
              <br />
              <span className="text-gradient-accent">Excellence</span>
            </h1>
          </div>
        </div>

        <div className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-white/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
