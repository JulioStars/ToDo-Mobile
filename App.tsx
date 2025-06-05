import { Home } from "@/app/Home"
import { StatusBar } from "react-native"

export function App() {
    return (
        <>
            <StatusBar translucent backgroundColor="transparent" />
            <Home />
        </>
    )
}