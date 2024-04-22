"use client";

import { Provider } from "react-redux";

import React from "react";
import store from "@/Context/Redux/store";

type ReduxProps = {
 children: React.ReactNode;
};

function ReduxProvider({ children }: ReduxProps) {
 return <Provider store={store}> {children}</Provider>;
}

export default ReduxProvider;
