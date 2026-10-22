import { getDictionary, type Locale } from '@/lib/i18n';
import { launch } from '@/lib/launch';

// Slot for the launch demo. Renders nothing until PUBLIC_DEMO_VIDEO_URL (an https .mp4 or .webm) is
// set at build time. A plain <video>, so no third-party player or embed loads. Storyboard:
// docs/launch-demo-storyboard.md.
export function DemoVideo({ locale }: { locale: Locale }) {
  const src = launch.demoVideoUrl;
  if (!src) return null;
  const t = getDictionary(locale).pricing.demo;
  const captions = launch.demoCaptionsUrl;
  return (
    <section className="band demo-video" aria-labelledby="demo-title">
      <div className="shell">
        <div className="section-lead">
          <h2 id="demo-title">{t.title}</h2>
          <p>{t.body}</p>
        </div>
        {/* Captions are optional at build time (PUBLIC_DEMO_CAPTIONS_URL); the storyboard asks for them. */}
        {/* oxlint-disable-next-line jsx-a11y/media-has-caption */}
        <video controls preload="none" playsInline aria-label={t.label}>
          <source src={src} type={src.toLowerCase().includes('.webm') ? 'video/webm' : 'video/mp4'} />
          {captions ? <track kind="captions" src={captions} srcLang={locale} label={locale === 'tr' ? 'Türkçe' : 'English'} default /> : null}
          {t.fallback}
        </video>
      </div>
    </section>
  );
}
