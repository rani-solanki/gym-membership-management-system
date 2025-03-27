import { MemberService } from './member.service';
import { updatememberreq, registermember } from './member.model';
export declare class MemberController {
    private readonly memberService;
    constructor(memberService: MemberService);
    register(memberbody: registermember): Promise<import("mongoose").Document<unknown, {}, import("./member.schema").Member> & import("./member.schema").Member & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getMember(email: string): Promise<import("mongoose").Document<unknown, {}, import("./member.schema").Member> & import("./member.schema").Member & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getAllActiveMembers(): Promise<(import("mongoose").Document<unknown, {}, import("./member.schema").Member> & import("./member.schema").Member & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    cancel(email: string): Promise<(import("mongoose").Document<unknown, {}, import("./member.schema").Member> & import("./member.schema").Member & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    modify(memberbody: updatememberreq): Promise<(import("mongoose").Document<unknown, {}, import("./member.schema").Member> & import("./member.schema").Member & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
