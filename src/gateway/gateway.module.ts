import { Module } from '@nestjs/common';
import { GatewaySocket } from './gateway';

@Module({
    providers: [GatewaySocket]
})
export class GatewayModule {}
