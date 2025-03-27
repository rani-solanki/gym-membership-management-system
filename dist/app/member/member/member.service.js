"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberService = void 0;
const common_1 = require("@nestjs/common");
const member_schema_1 = require("./member.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let MemberService = class MemberService {
    memberModel;
    constructor(memberModel) {
        this.memberModel = memberModel;
    }
    async registerMember(name, email, startDate) {
        const newMember = new this.memberModel({ name, email, startDate });
        return newMember.save();
    }
    async getMemberByEmail(email) {
        return this.memberModel.findOne({ email }).exec();
    }
    async getAllActiveMembers() {
        return this.memberModel.find({ active: true }).select('name email').exec();
    }
    async cancelMembership(email) {
        return this.memberModel
            .findOneAndUpdate({ email }, { active: false }, { new: true })
            .exec();
    }
    async modifyStartDate(email, newStartDate) {
        return this.memberModel
            .findOneAndUpdate({ email }, { startDate: newStartDate }, { new: true })
            .exec();
    }
};
exports.MemberService = MemberService;
exports.MemberService = MemberService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(member_schema_1.Member.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], MemberService);
//# sourceMappingURL=member.service.js.map