import { Injectable } from '@nestjs/common';
import { Member } from './member.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MemberService {
  constructor(@InjectModel(Member.name) private memberModel: Model<Member>) {}

  async registerMember(name: string, email: string, startdate: string) {
    const newMember = new this.memberModel({ name, email, startdate });
    return newMember.save();
  }
  
  async getMemberByEmail(email: string) {
    return await this.memberModel.findOne({ email }).exec();
  }

  async getAllActiveMembers() {
    return await this.memberModel.find({ active: true }).select('name email').exec();
  }

  async cancelMembership(email: string) {
    return await this.memberModel
      .findOneAndUpdate({ email }, { active: false }, { new: true })
      .exec();
  }

  async modifyStartDate(email: string, newstartdate: string) {
    return await this.memberModel
      .findOneAndUpdate({ email }, { startdate: newstartdate }, { new: true })
      .exec();
  }
}
