import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { BridgeService } from './bridge.service';

@Controller('bridge')
export class BridgeController {
  constructor(private readonly bridgeService: BridgeService) {}

  @Post()
  create(@Body() { trackingId }: { trackingId: string }) {
    return this.bridgeService.createTracking(trackingId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bridgeService.getTrackingStatus(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() { data }: { data: string }) {
    return this.bridgeService.updateTrackingStatus(id, data);
  }
}
