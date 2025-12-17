export async function GET() {
  return Response.json({
    scratch_title: 'Scratch away to reveal your instant prize!',
    prize_name: 'GoodLife Buff',
    prize_image: '/buff.png',

    popup_title: 'Before you go!',
    popup_subtitle: 'Did you claim your prize?',
    popup_description:
      'Make sure you get your instant prize from any on-site GoodLife Ambassador.',
    popup_cta_text: 'I’VE CLAIMED MY PRIZE',
  });
}
