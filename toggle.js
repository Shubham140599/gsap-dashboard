var menuToggle = document.querySelector('.toggle-menu')

if (window.matchMedia('(min-width:1200px)').matches) {
  var t1menu = new TimelineMax({
    paused: true,
  })

  t1menu.fromTo(
    '.nav .menu li span, .logo span',
    0.2,
    {
      opacity: 1,
      display: 'block',
    },
    {
      opacity: 0,
      display: 'none',
      ease: 'power2.out',
    }
  )
}

t1menu.fromTo('.logo .fa', 0.3, { css: { marginRight: '15px' } }, { css: { marginRight: 0 }, ease: 'power2.out' }, 0.01)

t1menu.fromTo(
  '.nav',
  0.5,

  { width: '280px' },
  { width: '80px', ease: 'power2.out' },
  0.1
)

t1menu.fromTo(
  '.content ,.footer',
  0.5,

  { width: 'calc(100% - 280px)' },
  { width: 'calc(100% - 80px)', ease: 'power2.out' },

  0.1
)

menuToggle.onclick = () => {
  menuToggle.classList.toggle('active')
  if (menuToggle.classList.contains('active')) {
    t1menu.reverse(0)
  } else {
    t1menu.play(0)
  }
}

{
}
