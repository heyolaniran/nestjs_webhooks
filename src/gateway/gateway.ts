import { OnModuleInit } from "@nestjs/common";
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from 'socket.io'
@WebSocketGateway()
export class GatewaySocket implements OnModuleInit {

    @WebSocketServer()
    server:  Server

    onModuleInit() {
        this.server.emit("message_response", {event: "newMessage", data : {} })
    }



    @SubscribeMessage('newMessage')
    handleMessage(@MessageBody() data : any) {

    }
}