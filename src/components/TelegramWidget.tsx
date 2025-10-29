import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { MessageCircle, Plus } from 'lucide-react';

type TelegramWidgetProps = {
  channel?: string; // telegram channel without @, e.g. "promaren"
  latestPostNumber?: number; // latest numeric message id in the channel
  initialCount?: number; // how many to show initially
  loadMoreStep?: number; // how many to add per click
  postIds?: number[]; // explicit post ids to render (overrides dynamic mode)
};

export const TelegramWidget = ({
  channel = 'promaren',
  latestPostNumber,
  initialCount = 3,
  loadMoreStep = 3,
  postIds,
}: TelegramWidgetProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(initialCount);

  // Compute the post numbers to render (latest descending) when dynamic mode
  const postNumbers = useMemo(() => {
    if (postIds && postIds.length > 0) return postIds; // static explicit mode
    const max = Math.max(0, latestPostNumber);
    const list: number[] = [];
    for (let i = 0; i < visibleCount; i++) {
      const post = max - i;
      if (post <= 0) break;
      list.push(post);
    }
    return list;
  }, [postIds, latestPostNumber, visibleCount]);

  const injectPostScript = useCallback((postNumber: number) => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.setAttribute('data-telegram-post', `${channel}/${postNumber}`);
    script.setAttribute('data-width', '100%');
    // Optional: adapt theme if needed (auto by Telegram when not set)
    // script.setAttribute('data-color', '#0088cc');
    return script;
  }, [channel]);

  // Maintain a map to avoid duplicating scripts on re-renders
  const mountedPostsRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // If explicit postIds are provided, render exactly them
    if (postIds && postIds.length > 0) {
      for (const num of postNumbers) {
        if (mountedPostsRef.current.has(num)) continue;
        const wrapper = document.createElement('div');
        wrapper.className = 'rounded-xl bg-card border border-border/60 h-[50vh] overflow-auto';
        wrapper.appendChild(injectPostScript(num));
        container.appendChild(wrapper);
        mountedPostsRef.current.add(num);
      }
      return;
    }

    // If we don't know latestPostNumber (dynamic mode), render a single 'latest' as fallback
    if (!latestPostNumber) {
      if (mountedPostsRef.current.has(-1)) return;
      const wrapper = document.createElement('div');
      wrapper.className = 'rounded-xl bg-card border border-border/60 h-[50vh] overflow-auto';
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://telegram.org/js/telegram-widget.js?22';
      script.setAttribute('data-telegram-post', `${channel}/latest`);
      script.setAttribute('data-width', '100%');
      wrapper.appendChild(script);
      container.appendChild(wrapper);
      mountedPostsRef.current.add(-1);
      return;
    }

    for (const num of postNumbers) {
      if (mountedPostsRef.current.has(num)) continue;
      const wrapper = document.createElement('div');
      wrapper.className = 'rounded-xl bg-card border border-border/60 h-[50vh] overflow-auto';
      wrapper.appendChild(injectPostScript(num));
      container.appendChild(wrapper);
      mountedPostsRef.current.add(num);
    }
  }, [postNumbers, injectPostScript]);

  const handleLoadMore = () => {
    setVisibleCount((c) => c + loadMoreStep);
  };

  const handleJoinChannel = () => {
    window.open(`https://t.me/${channel}`, '_blank');
  };

  // Whether more posts exist
  const isStatic = !!(postIds && postIds.length > 0);
  const hasMore = !isStatic && !!latestPostNumber && visibleCount < latestPostNumber;

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-6 md:p-10 lg:p-12 shadow-lg">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                Посты из Telegram-канала
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Последние обновления канала @{channel}
              </p>
            </div>

            {/* Telegram posts grid */}
            <div ref={containerRef} id="telegram-widget-container" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {/* Widgets injected dynamically */}
            </div>

            {/* Load more + Join */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-2">
              {hasMore && (
                <button
                  onClick={handleLoadMore}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm md:text-base transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
                >
                  <Plus className="w-5 h-5" /> Показать ещё
                </button>
              )}

              <button
                onClick={handleJoinChannel}
                className="group inline-flex items-center justify-center gap-2 md:gap-3 px-5 md:px-6 py-3 bg-gradient-to-r from-[#0088cc] to-[#0088cc]/80 hover:from-[#0088cc]/90 hover:to-[#0088cc]/70 text-white font-semibold md:font-bold text-sm md:text-base rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" /> Перейти в канал
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
