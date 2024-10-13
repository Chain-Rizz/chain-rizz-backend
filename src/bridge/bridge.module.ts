import { Module } from '@nestjs/common';
import { BridgeService } from './bridge.service';
import { BridgeController } from './bridge.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BridgeController],
  providers: [BridgeService, PrismaService],
})
export class BridgeModule {}
