import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

export const PolicyLinks = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);
  const [privacyContent, setPrivacyContent] = useState("");
  const [offerContent, setOfferContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (privacyOpen && !privacyContent) {
      setLoading(true);
      fetch("https://promaren.ru/privacy-policy")
        .then((res) => res.text())
        .then((html) => {
          setPrivacyContent(html);
          setLoading(false);
        })
        .catch(() => {
          setPrivacyContent("<p>Ошибка загрузки контента</p>");
          setLoading(false);
        });
    }
  }, [privacyOpen, privacyContent]);

  useEffect(() => {
    if (offerOpen && !offerContent) {
      setLoading(true);
      fetch("https://promaren.ru/public-offer")
        .then((res) => res.text())
        .then((html) => {
          setOfferContent(html);
          setLoading(false);
        })
        .catch(() => {
          setOfferContent("<p>Ошибка загрузки контента</p>");
          setLoading(false);
        });
    }
  }, [offerOpen, offerContent]);

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => setPrivacyOpen(true)}
          className="text-accent hover:text-accent/80 underline decoration-accent/30 hover:decoration-accent/60 underline-offset-2 transition-all font-semibold"
        >
          Политика обработки данных
        </button>
        <button
          onClick={() => setOfferOpen(true)}
          className="text-accent hover:text-accent/80 underline decoration-accent/30 hover:decoration-accent/60 underline-offset-2 transition-all font-semibold"
        >
          Публичная оферта
        </button>
      </div>

      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>Политика обработки данных</DialogTitle>
            <DialogDescription>
              Политика обработки персональных данных
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[60vh] pr-4">
            {loading ? (
              <p>Загрузка...</p>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: privacyContent }} />
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <Dialog open={offerOpen} onOpenChange={setOfferOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>Публичная оферта</DialogTitle>
            <DialogDescription>
              Договор публичной оферты
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[60vh] pr-4">
            {loading ? (
              <p>Загрузка...</p>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: offerContent }} />
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};
