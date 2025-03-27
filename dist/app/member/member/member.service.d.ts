import { Member } from './member.schema';
import { Model } from 'mongoose';
export declare class MemberService {
    private memberModel;
    constructor(memberModel: Model<Member>);
    registerMember(name: string, email: string, startdate: string): Promise<import("mongoose").Document<unknown, {}, Member> & Member & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getMemberByEmail(email: string): Promise<(import("mongoose").Document<unknown, {}, Member> & Member & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    getAllActiveMembers(): Promise<(import("mongoose").Document<unknown, {}, Member> & Member & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    cancelMembership(email: string): Promise<(import("mongoose").Document<unknown, {}, Member> & Member & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    modifyStartDate(email: string, newstartdate: string): Promise<(import("mongoose").Document<unknown, {}, Member> & Member & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
