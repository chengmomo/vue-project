export default {
  bind(el, binding) {
    el.addEventListener('click', e => {
      console.log(el)
      if (!el.disabled) {
        el.disabled = true
        setTimeout(() => {
          el.disabled = false
        }, 2000)
      }
    })
  }
}
