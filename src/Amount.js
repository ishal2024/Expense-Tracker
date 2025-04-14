import { useSelector } from "react-redux"

export function amount2(){
    const data = useSelector((state) => state.expense)
    console.log(data)
}