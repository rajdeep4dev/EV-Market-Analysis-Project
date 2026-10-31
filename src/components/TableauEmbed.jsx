import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, RefreshCw, Maximize2, Minimize2, AlertCircle, Sparkles, Monitor, Smartphone, Tablet, Copy, Check } from 'lucide-react';

/**
 * High-Reliability Responsive Tableau Embed Component
 * Supports both Native Responsive Iframe (100% reliable across all browsers & iframes)
 * and Tableau Embedding API v3, with quick links and instant loading.
 */
export default function TableauEmbed({
  src,
  publicPageUrl,
  title = "Tableau Visualization",
  height = 820,
  deviceType = "default"
}) {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(deviceType);
  const [embedKey, setEmbedKey] = useState(0);
  const [embedMode, setEmbedMode] = useState('iframe'); // 'iframe' or 'api'
  const [copied, setCopied] = useState(false);

  // Ensure embed URL has proper Tableau Public parameters
  const getEmbedUrl = (rawUrl) => {
    if (!rawUrl) return '';
    try {
      const url = new URL(rawUrl);
      if (!url.searchParams.has(':showVizHome')) {
        url.searchParams.set(':showVizHome', 'no');
      }
      if (!url.searchParams.has(':embed')) {
        url.searchParams.set(':embed', 'true');
      }
      if (!url.searchParams.has(':toolbar')) {
        url.searchParams.set(':toolbar', 'yes');
      }
      return url.toString();
    } catch {
      return rawUrl;
    }
  };

  const finalSrc = getEmbedUrl(src);

  // Quick fallback timer: never block visualization behind loading overlay for more than 3 seconds
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, [src, embedKey, embedMode]);

  // Fullscreen handlers
  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;

    if (!document.fullscreenElement) {
      el.requestFullscreen?.().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen?.().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  const handleReload = () => {
    setIsLoading(true);
    setEmbedKey(k => k + 1);
  };

  const handleCopyLink = () => {
    const linkToCopy = publicPageUrl || src;
    navigator.clipboard?.writeText(linkToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Determine viewport width style based on simulated device
  const getDeviceStyle = () => {
    if (isFullscreen) return { width: '100%', height: 'calc(100vh - 65px)' };
    switch (selectedDevice) {
      case 'mobile':
        return { width: '100%', maxWidth: '420px', height: '760px', margin: '0 auto' };
      case 'tablet':
        return { width: '100%', maxWidth: '768px', height: '820px', margin: '0 auto' };
      default:
        return { width: '100%', height: `${height}px` };
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full rounded-2xl overflow-hidden border border-slate-800 bg-[#0b1120] shadow-2xl transition-all duration-300 ${
        isFullscreen ? 'p-4 bg-slate-950 flex flex-col justify-between' : ''
      }`}
    >
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-slate-900/90 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-slate-200 tracking-wide uppercase text-[11px] font-mono">
            Tableau Public Live Viz
          </span>
          <span className="hidden sm:inline-block text-slate-500 text-xs">• Verified View</span>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Embed Mode Switcher */}
          <div className="hidden lg:flex items-center bg-slate-950/80 p-0.5 rounded-lg border border-slate-800 text-[11px]">
            <button
              onClick={() => setEmbedMode('iframe')}
              className={`px-2 py-1 rounded transition ${embedMode === 'iframe' ? 'bg-orange-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
              title="Fastest Native Iframe Embed"
            >
              Direct View
            </button>
            <button
              onClick={() => setEmbedMode('api')}
              className={`px-2 py-1 rounded transition ${embedMode === 'api' ? 'bg-orange-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
              title="Tableau Embedding API v3 Web Component"
            >
              API v3
            </button>
          </div>

          {/* Device preview toggles */}
          <div className="hidden md:flex items-center bg-slate-950/80 p-1 rounded-lg border border-slate-800 text-slate-400">
            <button
              onClick={() => setSelectedDevice('default')}
              title="Desktop View"
              className={`p-1.5 rounded transition ${selectedDevice === 'default' ? 'bg-orange-500 text-slate-950 font-bold' : 'hover:text-slate-200'}`}
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setSelectedDevice('tablet')}
              title="Tablet View"
              className={`p-1.5 rounded transition ${selectedDevice === 'tablet' ? 'bg-orange-500 text-slate-950 font-bold' : 'hover:text-slate-200'}`}
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setSelectedDevice('mobile')}
              title="Mobile View"
              className={`p-1.5 rounded transition ${selectedDevice === 'mobile' ? 'bg-orange-500 text-slate-950 font-bold' : 'hover:text-slate-200'}`}
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Copy Link */}
          <button
            onClick={handleCopyLink}
            title="Copy Tableau Public URL"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition text-xs border border-slate-700/60"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Link'}</span>
          </button>

          {/* Refresh embed */}
          <button
            onClick={handleReload}
            title="Reload Visualization"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition text-xs border border-slate-700/60"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-orange-400' : ''}`} />
            <span className="hidden sm:inline">Reload</span>
          </button>

          {/* Fullscreen toggle */}
          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit Fullscreen" : "View Fullscreen"}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition text-xs border border-slate-700/60"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isFullscreen ? 'Exit' : 'Fullscreen'}</span>
          </button>

          {/* Direct Tableau Public Link Button */}
          {publicPageUrl && (
            <a
              href={publicPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-bold text-xs shadow-md shadow-orange-500/20 transition-transform active:scale-95"
            >
              <span>Open in Tableau</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Embed Viewport */}
      <div className="relative w-full bg-[#070b14] overflow-hidden flex items-center justify-center p-1 sm:p-2 min-h-[400px]">
        {/* Soft Loading Indicator */}
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950/75 backdrop-blur-[2px] transition-opacity duration-300 pointer-events-none">
            <div className="relative flex items-center justify-center w-14 h-14 mb-3">
              <div className="w-10 h-10 rounded-full border-3 border-transparent border-t-orange-500 border-r-amber-400 animate-spin" />
              <Sparkles className="w-4 h-4 text-orange-400 absolute" />
            </div>
            <p className="text-xs font-semibold text-slate-200">Loading Tableau Visualization...</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Fetching interactive dashboard worksheets</p>
          </div>
        )}

        {/* Embed Render Container */}
        <div style={getDeviceStyle()} className="w-full transition-all duration-300 flex justify-center">
          {embedMode === 'iframe' ? (
            <iframe
              key={`iframe-${embedKey}-${finalSrc}`}
              src={finalSrc}
              title={title}
              onLoad={() => setIsLoading(false)}
              className="w-full h-full rounded-lg border-0 bg-transparent"
              style={{ minHeight: selectedDevice === 'mobile' ? '700px' : `${height}px` }}
              allow="fullscreen"
              loading="eager"
            />
          ) : (
            <tableau-viz
              key={`api-${embedKey}-${finalSrc}`}
              id={`tableau-viz-${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              src={finalSrc}
              device={selectedDevice === 'default' ? 'desktop' : selectedDevice}
              hide-tabs="true"
              toolbar="bottom"
              class="w-full h-full rounded-lg"
              style={{ width: '100%', minHeight: selectedDevice === 'mobile' ? '700px' : `${height}px` }}
            ></tableau-viz>
          )}
        </div>
      </div>

      {/* Bottom Information Footer */}
      <div className="px-4 py-2.5 bg-slate-900/80 border-t border-slate-800 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
          <span>Interactive tooltips, filters & legends enabled</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Agar embed load na ho, toh right side me <strong>"Open in Tableau"</strong> click karein</span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <a
            href={publicPageUrl || src}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 font-medium underline underline-offset-2 flex items-center gap-1"
          >
            Direct Tableau Public Link <ExternalLink className="w-3 h-3 inline" />
          </a>
        </div>
      </div>
    </div>
  );
}
