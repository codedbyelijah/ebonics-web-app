export function useWhatsapp() {
  const phone = "2349039746329";

  const openWhatsApp = (message: string) => {
    const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(link, "_blank");
  };

  return { openWhatsApp };
}
