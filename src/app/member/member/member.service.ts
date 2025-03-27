import { Injectable } from '@nestjs/common';
import { Member } from './member.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MemberService {
  constructor(@InjectModel(Member.name) private memberModel: Model<Member>) {}

  async registerMember(name: string, email: string, startDate: string) {
    const newMember = new this.memberModel({ name, email, startDate });
    return newMember.save();
  }

  async getMemberByEmail(email: string) {
    return this.memberModel.findOne({ email }).exec();
  }

  async getAllActiveMembers() {
    return this.memberModel.find({ active: true }).select('name email').exec();
  }

  async cancelMembership(email: string) {
    return this.memberModel
      .findOneAndUpdate({ email }, { active: false }, { new: true })
      .exec();
  }

  async modifyStartDate(email: string, newStartDate: string) {
    return this.memberModel
      .findOneAndUpdate({ email }, { startDate: newStartDate }, { new: true })
      .exec();
  }
}
