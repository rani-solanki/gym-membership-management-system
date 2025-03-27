import { Document } from 'mongoose';
export declare class Member extends Document {
    name: string;
    email: string;
    startdate: string;
    active: boolean;
}
export declare const MemberSchema: import("mongoose").Schema<Member, import("mongoose").Model<Member, any, any, any, Document<unknown, any, Member> & Member & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Member, Document<unknown, {}, import("mongoose").FlatRecord<Member>> & import("mongoose").FlatRecord<Member> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
