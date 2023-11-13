import { type CounterSchema } from "app/entities/Coutner";
import { type UserSchema } from "app/entities/User";

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
}
