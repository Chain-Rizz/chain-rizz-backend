import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { StellarModule } from './stellar/stellar.module';
import { BridgeModule } from './bridge/bridge.module';

@Module({
  imports: [ConfigModule.forRoot(), StellarModule, BridgeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
