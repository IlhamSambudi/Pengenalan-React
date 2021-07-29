import { data } from "jquery";
import React from "react"
import Alert from "./components/Alert";
import Counter from "./components/Counter";
class Main extends React.Component{
    render(){
        let data = [
            {color : "danger", title : "RED", message:"merah"},
            {color : "warning", title : "YELLOW", message:"kuning"},
            {color :"success", title :"GREEN", message:"hijau"}
        ]
        return (
            //bungkus dengan satu divv
            <div className="container">
                {/*<Alert color = "danger" title = "MERAH">RED
                    <Alert color = "warning" title = "KUNING">YELLOW</Alert> 
                </Alert> 
                <Alert color = "info" title = "BIRU">BLUE</Alert> 
                <Alert color = "success" title = "HIJAU">GREEN</Alert> 
        <Alert color = "dark" title = "HITAM">BLACK</Alert> */}
                
                {/*<Counter/>*/}

                {data.map(it => (
                    <Alert color={it.color} title={it.title}>
                        {it.message}
                    </Alert>
                ))}
            </div>
        )
    }
}
//agar bisa dipanggil
export default Main;