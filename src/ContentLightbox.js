import ContentLightbox from './ContentLightbox.svelte';

function createLightbox (props) {
  // if (typeof props === 'string') props = { title: props }

  const lightbox = new ContentLightbox({
    target: document.body,
    props,
    intro: true
  })

  lightbox.$on('destroy', () => {
    lightbox.$destroy()
  })

  return lightbox.promise
}

ContentLightbox.createLightbox = createLightbox

export default ContentLightbox
