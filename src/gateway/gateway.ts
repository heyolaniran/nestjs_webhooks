import { OnModuleInit } from "@nestjs/common";
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from 'socket.io'
@WebSocketGateway()
export class GatewaySocket implements OnModuleInit {

    @WebSocketServer()
    server:  Server

    onModuleInit() {
        this.server.on('connection', (socket) => {
            console.log("Connected  to", socket.id)
        })
    }



    @SubscribeMessage('newMessage')
    handleMessage(@MessageBody() data : any) {
        console.log("New message", data)

        this.server.emit('onMessage', {
            msg : "On Message ", 
            content: data
        })
    }
}