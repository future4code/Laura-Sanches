import {  POST_TYPES, user } from "../../business/entities/user";
import { task } from "../../business/entities/task";

export const convertBooleanToNumber = (value: boolean): number => {
    if (value) {
        return 1;
    }
    return 0;
}

export const convertNumberToBoolean = (value: number): boolean => {
    return value !== 0;
}

export const convertUserTypeToString = (type: POST_TYPES): string => {
    return type === POST_TYPES.EVENT ? "event" : "normal";
}

export const convertStringToUserType = (role: string): POST_TYPES => {
    if (role === "admin") {
        return POST_TYPES.NORMAL
    } else if (role === "normal") {
        return POST_TYPES.EVENT
    }
    throw new Error("Invalid User Role");
}

export function setTasks(myUser: user, tasks: task[]): user {
    myUser.task = tasks;
    return myUser;
}