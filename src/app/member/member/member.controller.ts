import { Controller, Post, Get, Delete, Put, Body, Query, BadRequestException } from '@nestjs/common';
import { MemberService } from './member.service';
import { updatememberreq, registermember } from './member.model';
import { ApiQuery } from '@nestjs/swagger';

@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post('register')
  async register(@Body() memberbody: registermember) {
    const existingMember = await this.memberService.getMemberByEmail(memberbody.email);
    if (existingMember) {
      throw new BadRequestException(`Member with email ${memberbody.email} already exists.`);
    }
    return this.memberService.registerMember(memberbody.name, memberbody.email, memberbody.startdate);
  }

  @Get()
  @ApiQuery({ name: 'email', required: true })
  async getMember(@Query('email') email: string) {
    const member = await this.memberService.getMemberByEmail(email);
    if (!member) {
      throw new BadRequestException(`No member found with email ${email}.`);
    }
    return member;
  }

  @Get('active')
  async getAllActiveMembers() {
    return await this.memberService.getAllActiveMembers();
  }

  @Delete('cancel')
  @ApiQuery({ name: 'email', required: true })
  async cancel(@Query('email') email: string) {
    const member = await this.memberService.getMemberByEmail(email);
    if (!member) {
      throw new BadRequestException(`No member found with email ${email}.`);
    }
    return await this.memberService.cancelMembership(email);
  }

  @Put('update')
  async modify(@Body() memberbody: updatememberreq) {
    const member = await this.memberService.getMemberByEmail(memberbody.email);
    if (!member) {
      throw new BadRequestException(`No member found with email ${memberbody.email}.`);
    }
    return await this.memberService.modifyStartDate(memberbody.email, memberbody.newstartdate);
  }
}
