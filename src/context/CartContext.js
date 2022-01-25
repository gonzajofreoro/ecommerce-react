import { createContext, useState, memo} from "react"

export const context = createContext()

export const {Provider} = context;

const CartContext =({children}) => {
    const [fleet, setFleet] = useState([])
    const [count, setCount] = useState(0)
        console.log(fleet)
        
    const addShip = (ship, count) => {
        if (IsInCart(ship.name)){
            const duplicated= fleet.find((duplicatedShip)=> duplicatedShip.name === ship.name)
            duplicated.count = duplicated.count + count
            const rest= fleet.filter((restShip)=> restShip.name !== ship.name)
            setFleet([...rest, duplicated])
            setCount(count)
            console.log("Ya tienes esta nave")
        }else{
            console.log("Agregando nave")
            ship.count = count
            setFleet([...fleet, ship])
        }
    }

    const IsInCart = (name) => fleet.some((naves)=> naves.name === name)

    const deleteShip = (ship) => {
        setFleet(fleet.filter((remove)=> remove.name !== ship.name)
    )}

    const clearFleet = () => {
        setFleet([])
        setCount(0)  
    }

    return (
        <Provider value = {{fleet, count, addShip, IsInCart, deleteShip, clearFleet}}>
            {children}
        </Provider>
    )
}

export default memo(CartContext)