// @flow strict
import React from 'react';
import withStyle from "../../withStyle";

const SvgFabEthereum = props => <svg viewBox="0 0 320 512" {...props}><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" /></svg>;

export const FabEthereum = withStyle(SvgFabEthereum, "FabEthereum", false);