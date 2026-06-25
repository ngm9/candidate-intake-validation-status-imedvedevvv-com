import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CandidatesService } from './candidates.service';
import { CreateCandidateDto } from './create-candidate.dto';

@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  @Get()
  findAll() {
    return this.candidatesService.findAll();
  }

  @Post()
  create(@Body() body: CreateCandidateDto) {
    return this.candidatesService.create(body);
  }
}
