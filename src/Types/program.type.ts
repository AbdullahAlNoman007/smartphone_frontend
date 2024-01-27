import { ReactNode } from "react";

export type Tacc = {
    path: string;
    element: ReactNode;
}

export type Troutes = {
    key: string;
    name: string;
    element?: ReactNode;
    children?: Troutes[]
}

export type Tnavlink = {
    key: string;
    label: ReactNode
}