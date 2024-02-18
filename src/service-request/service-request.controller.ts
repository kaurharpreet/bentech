import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Request
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ServiceRequestService } from './service-request.service';
import { CreateServiceRequestDto } from './dto/create-service-request.dto';
import { ApiTags,ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('service-request')
@ApiBearerAuth()
@Controller('service-request')
export class ServiceRequestController {
  constructor(private readonly serviceRequestService: ServiceRequestService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createServiceRequestDto: CreateServiceRequestDto, @Request() req) {
    return this.serviceRequestService.create(createServiceRequestDto, req.user.clientId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Request() req) {
    return this.serviceRequestService.findAll(req.user.clientId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceRequestService.findOne(+id);
  }

}
