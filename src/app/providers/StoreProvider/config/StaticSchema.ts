import { type CounterSchema } from "app/entities/Coutner";
import { type UserSchema } from "app/entities/User";
import { type LoginSchema } from "features/ui";

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    login: LoginSchema;
}
