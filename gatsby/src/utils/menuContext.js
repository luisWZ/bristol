import React from 'react'

const MenuContext = React.createContext(true)

export const MenuProvider = MenuContext.Provider
export const MenuConsumer = MenuContext.Consumer

export default MenuContext