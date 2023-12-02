import { useEffect } from 'react'
import CssVariables from 'styles/CssVariables'

export default (node, setMenuOpen) => {
  useEffect(() => {
    const mobileViewport = window.matchMedia(`(${CssVariables.max848})`)

    const handleEventClick = event => {
      if (node.current === event.target) return
      setMenuOpen(false)
    }

    const addWindowClickEvent = () =>
      window.addEventListener('mousedown', handleEventClick)
    const removeWindowClickEvent = () =>
      window.removeEventListener('mousedown', handleEventClick)

    const handleMobileEvent = event => {
      if (event.matches) {
        addWindowClickEvent()
      } else {
        removeWindowClickEvent()
      }
    }

    handleMobileEvent(mobileViewport)
    mobileViewport.addListener(handleMobileEvent)

    return _ => {
      mobileViewport.removeListener(handleMobileEvent)
    }
  }, [node, setMenuOpen])
}
